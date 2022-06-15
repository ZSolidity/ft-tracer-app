import axios from "axios";
import { Either, ERROR_UNHANDLED, ERROR_UNHANDLED_ID } from "../api/either";
import { TraceableChain } from "./traceableChainsSlice";

export async function addOrUpdateCommand (traceableChain : TraceableChain) : Promise<Either<TraceableChain>> {
    try {
        const response = await axios.post<Either<TraceableChain>>('/traceable-chains/commands/add-or-update', traceableChain)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.toJSON())
        } else {
            console.log('unexpected error: ', error);
        }

        return ERROR_UNHANDLED
    }
}
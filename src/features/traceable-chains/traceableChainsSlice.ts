import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Either } from '../api/either';
import { addOrUpdateCommand } from './traceableChainsApi';

export interface TraceableChain {
    browserUri : string,
    id         : string,
    name       : string,
    rpcUri     : string,
}

export interface TraceableChainsState {
    chains : Array<TraceableChain>
}

export const addOrUpdateCommandAsync = createAsyncThunk(
    'traceable-chains/add-or-update',
    async (traceableChain : TraceableChain) : Promise<Either<TraceableChain>> => addOrUpdateCommand(traceableChain))

export const traceableChainsSlice = createSlice({
    name          : 'traceable-chains',
    initialState  : {},
    reducers      : {},
    extraReducers : (builder) => {
        builder
            .addCase(addOrUpdateCommandAsync.pending, (state) => {

            })
            .addCase(addOrUpdateCommandAsync.fulfilled, (state, action) => {

            })
            .addCase(addOrUpdateCommandAsync.rejected, (state) => {

            })
    }
})
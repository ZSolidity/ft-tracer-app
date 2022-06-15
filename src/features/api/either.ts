export const ERROR_UNHANDLED_ID : string      = '9ea2f61f-aab5-4029-9339-4989aab9995a'
export const ERROR_UNHANDLED    : Either<any> = { left : { id : ERROR_UNHANDLED_ID }}

export interface Unit { 

}

export interface Error {
    id           : string
    description? : string
    metadata?    : Record<string, any>
    cuase?       : Error
}

export interface Either<T> {
    left?  : Error
    right? : T
}
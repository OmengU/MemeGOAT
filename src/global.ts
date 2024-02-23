export const URL = "localhost:300/api"

export interface Player {
    id: string,
    name: string,
    avatarUrl: string,
}

export interface Room {
    id : string,
    name: string,
    rounds:	Round[],
    players: Player[],
    numberOfRounds:	number, 
    status : string
}

export interface Round {
    memeUrl: string,
    Answers: Answer[]
}

export interface Answer {
    anserId: string,
    playerId: string,
    score: number
}

export type AddPlayerToRoomDto = {
    roomId: string,
    playerId: string,
}

export type CreateRoomDto = {
    name: string,
    rounds: number,
    playerId: string,
}
import { AddPlayerToRoomDto, CreateRoomDto, Player, Room, URL } from "../global";

type CreatePlayer = (name: string) => Promise<Player>
type AllRooms = () => Promise<Room[]>
type AddPlayerToRoom = (body: AddPlayerToRoomDto) => Promise<Room>
type CreateRoom = (body: CreateRoomDto) => Promise<Room>
type StartGame = (roomId: string) => Promise<Room>

export const createPlayer: CreatePlayer = async (name: string) => {
    const headers = { 'Content-Type': 'application/json' };

    try {
        const response = await fetch(`${URL}/createPlayer`, {
            method: 'POST',
            headers,
            body: JSON.stringify(name),
        });

        const data = await response.json();

        return data as Player;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const allRooms: AllRooms = async () => {
    try {
        const response = await fetch(`${URL}/allRooms`);
        const data = await response.json();
        return data as Room[];
    } catch (e) {
        throw e;
    }
}

export const addPlayerToRoom: AddPlayerToRoom = async (body: AddPlayerToRoomDto) => {
    const headers = { 'Content-Type': 'application/json' };

    try {
        const response = await fetch(`${URL}/createPlayer`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });

        const data = await response.json();

        return data as Room;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const createRoom: CreateRoom = async (body: CreateRoomDto) => {
    const headers = { 'Content-Type': 'application/json' };

    if(body.playerId == ""){
        throw ("no playerId found in LocalStorage");
    }else {
        try {
            const response = await fetch(`${URL}/createPlayer`, {
                method: 'POST',
                headers,
                body: JSON.stringify(body),
            });
    
            const data = await response.json();
    
            return data as Room;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    
}

export const startGame: StartGame = async (roomId: string) => {
    const headers = { 'Content-Type': 'application/json' };

    try {
        const response = await fetch(`${URL}/createPlayer`, {
            method: 'POST',
            headers,
            body: JSON.stringify(roomId),
        });

        const data = await response.json();

        return data as Room;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
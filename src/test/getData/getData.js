import axios from "axios";
import { mapArrToStrings } from "../mapArrToStrings/mapArrToStrings";

export const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map(user => user.id)
        return mapArrToStrings(userIds);
    } catch (e) {

    }
}
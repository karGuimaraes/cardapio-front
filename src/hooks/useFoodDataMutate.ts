import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const apiUrl = 'http://localhost:8080';
const postData = async (data: FoodData): AxiosPromise<FoodData> => {
    const response = await axios.post(apiUrl + '/food', data);
    return response;
}

export function useFoodDataMutate(){
    const quetyClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            quetyClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    })

    return mutate;
}
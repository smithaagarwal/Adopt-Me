import { useQuery } from "@tanstack/react-query";
import ferchBreedList from "./fetchBreedList";

export const useBreedList = (animal: string): [string[], string] => {
  const results = useQuery(["breeds", animal], ferchBreedList);
  return [results?.data?.breeds ?? [], results.status];
};

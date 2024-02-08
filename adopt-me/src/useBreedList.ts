import { useState, useEffect } from "react";

type EmptyObject = Record<string, string[]>;
let localCache: EmptyObject = {};

export const useBreedList = (animal: string): [string[], string] => {
  const [breedList, setBreedList] = useState<string[]>([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("Loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("Loaded");
    }
  }, [animal]);
  return [breedList, status];
};

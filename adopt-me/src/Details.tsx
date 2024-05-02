import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./FetchPet";
export const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);
  if (results.error) {
    return <h2>Oh No, There's a problem while fetching details</h2>;
  }
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⏳</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <h1>{pet.name}</h1>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </h2>
    </div>
  );
};

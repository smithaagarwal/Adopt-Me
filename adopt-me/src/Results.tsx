import Pet from "./Pet";
import PetData from "./PetData";
interface ResultsProps {
  pets: PetData[];
}
const Results: React.FC<ResultsProps> = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets</h1>
      ) : (
        pets.map((pet: PetData) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city},${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;

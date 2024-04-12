import { Chip } from "@material-tailwind/react";
import { useMovieContext } from "../context/GlobalContext";
import { BlogCard } from "./VCard";




const Watched = () => {
  const movieContext = useMovieContext();


  return (
    <div>
      <div className="container mx-auto mt-12 ">
        <div className="flex justify-between items-center">
          <h1 className="text-primary text-4xl font-bold">Watched</h1>
          <span> <Chip value={movieContext.watched.length > 1 ? movieContext.watched.length + " movies" : movieContext.watched.length + " movie"} className="bg-primary"></Chip> </span>
        </div>

        <ul className="flex flex-wrap justify-start items-center mx-auto gap-8 my-12">
          {movieContext.watched.map((m) => (
            <li key={m.imdbID}>
              <BlogCard
                movie={m}
                icon={"watched"}
              />
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Watched
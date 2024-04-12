import { Chip } from "@material-tailwind/react";
import { useMovieContext } from "../context/GlobalContext"

import { BlogCard } from "./VCard";



const WatchList = () => {
  const movieContext = useMovieContext();
  const val = movieContext.watchlist.length > 1 ? movieContext.watchlist.length + " movies" : movieContext.watchlist.length + " movie"



  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="flex justify-between items-center">
          <h1 className="text-primary text-4xl font-bold">My Watchlist</h1>
          <span> <Chip value={val } className="bg-primary"></Chip> </span>
        </div>
        <ul className="flex flex-wrap justify-center md:justify-start items-center mx-auto gap-8 my-12">
          {movieContext.watchlist.map((m) => (
            <li key={m.imdbID}>
              <BlogCard
                movie={m}
                icon="watchlist"
                
                />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WatchList
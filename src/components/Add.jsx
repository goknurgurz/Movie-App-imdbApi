import { Button, Card, Input } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react"
import { HorizontalCard } from "./Card";
import { BlogCard } from "./VCard";



const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies , setMovies]= useState([]);
  
 
   
  

  
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=5df86f`)
      .then(res => {
        if (res.data.Search) {
          console.log(res.data.Search);
          setMovies(res.data.Search)
        }
      }).catch((err) => console.log(err));
    
  },[searchValue])

  return (
    <div className="add-page">
      <div className=" container mx-auto">
        <div className="py-[50px]  mx-auto">
          <div className="max-w-[600px] mx-auto">
            <Input type="text" label="Search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              variant="outline"
              // className="w-full bg-primary p-[10px] rounded-[5px] border-none text-whitee text-[1.25rem]"
            />
          </div>
          {
            movies.length !== 0 &&
            <ul className="p-0 m-0 mt-[20px] flex flex-col justify-center items-center">
                {movies.map((m) => (
                  <li key={m.imdbID}>
                    <HorizontalCard
                      movie={m}
                      // addToWatchlist={addToWatchlist}
                      // addToWatched={addToWatched}
                      // rating={m.imdbRating}
                    />
                  </li>
                ))}
            </ul>
          }
          
        </div>
      </div>
    </div>
  )
}

export default Add;
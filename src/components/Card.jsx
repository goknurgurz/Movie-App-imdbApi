import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useMovieContext } from "../context/GlobalContext";


import * as actions from '../context/ActionTypes'

export function HorizontalCard({movie }) {
  const movieContext = useMovieContext();
  const storedMovie = movieContext.watchlist.find((o)=> o.imdbID === movie.imdbID)
  const storedMovieWatched = movieContext.watched.find((o)=> o.imdbID === movie.imdbID)

  const WatchListDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const WatchedDisabled = storedMovieWatched? true : false;

  return (
    <Card className="w-full max-w-[48rem]  flex-row my-6">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >

        {movie.Poster === "N/A"
          ?
          <div className="w-full h-full bg-gray-300" />
          :
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="h-full w-full object-cover "
          />
        }

      </CardHeader>
      <CardBody className="w-full">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {movie.Title}
        </Typography>
        <Typography color="black" className="mb-8 font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae aliquam quis dicta. Amet enim accusamus incidunt dignissimos cum dolor.
        </Typography>
        <div className="flex justify-start items-center gap-6 my-6 px-1">
          <Typography color="black" className="mb-8 font-normal">
            {movie.Type}
          </Typography>
          <Typography color="black" className="mb-8 font-normal">
            {movie.Year}
          </Typography>
        </div>

        <div className=" flex flex-col h-full w-full  gap-4">
          <Button
           onClick={()=>movieContext.MoviesDispaatch(
             {
               type: actions.ADD_MOVIE_TO_WATCHLIST,
               payload: movie,
             }
            )}
            disabled={WatchListDisabled}
            variant="text"
            className="flex items-center gap-2 bg-secondary hover:bg-secondary focus-within:bg-secondary"
          >
            ADD TO WATCHLIST
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>

          <Button
           onClick={()=>movieContext.MoviesDispaatch(
             {
               type: actions.ADD_MOVIE_TO_WATCHED,
               payload: movie,
             }
            )}
            disabled={WatchedDisabled}
            variant="text"
            className="flex items-center gap-2 bg-secondary hover:bg-secondary focus-within:bg-secondary"
          >
            ADD TO WATCHED
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>


      </CardBody>
    </Card>
  );
}
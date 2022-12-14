import React from 'react';
import { Link } from 'react-router-dom';

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
        <div className='flex flex-col items-center gap-2 px-2 md:px-4 '>
            <div className='h-40 md:h-80'>
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="posters" className='w-full h-full rounded-md' />

            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? 'text-white':'text-black'}`}>{props.title}</h3>
           {/* <p className={`text-sm font-bold ${props.isDark ? 'text-white':'text-black'}`}>{props.overview}</p>  */}

        </div>
    </Link>
  )
}

export default Poster
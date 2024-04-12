import { Link , NavLink } from 'react-router-dom'
import '../index.css'
import { Button } from '@material-tailwind/react'



const Header = () => {
  return (
    <div className="bg-primary py-[10px]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link  to="/" className='text-whitee text-[1.5rem] font-[700] transition-all duration-200 ease-linear hover:opacity-70 '>Movies</Link>
        </div>
        <ul className='flex gap-8 justify-center items-center'>
          <li>
            <NavLink to="/" className='text-whitee text-[1.25rem] transition-all duration-200 ease-linear hover:opacity-70 ' >Watch List</NavLink>
          </li>
          <li>
            <NavLink to="watched" className='text-whitee text-[1.25rem] transition-all duration-200 ease-linear hover:opacity-70 ' >Watched</NavLink>
          </li>
          <li>
            <Link to="add" >
              <Button className='text-primary bg-secondary font-extrabold'>Add</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
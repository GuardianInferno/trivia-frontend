import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>     
            <div className="h-7/100 bg-cyan-600 text-orange-200 px-1 text-xl">
                <nav className="h-full flex items-center">
                    <Link to='/' className="h-full px-2 hover:bg-cyan-700 flex justify-center items-center">Home</Link>

                    <div  className= " w-full h-full flex justify-end items-center">
                        <Link to ='/login' className="px-3 h-full hover:bg-cyan-700 flex justify-center items-center">Log In</Link>
                        <Link to ='/signup' className="px-3 h-full hover:bg-cyan-700 flex justify-center items-center">Sign Up</Link>
                    </div>


                </nav>
            </div>
        </>
    )
}


export default Navbar
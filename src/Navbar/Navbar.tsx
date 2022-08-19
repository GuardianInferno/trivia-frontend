import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>     
            <div className="h-7/100 px-1  font-bold text-xl" style={{backgroundColor:'#ffb689', color:'#ffe0a7'}}>
                <nav className="h-full flex items-center">
                    <Link to='/' className="h-full px-2 hover:bg-orange-400 transition duration-500 ease flex justify-center items-center">Home</Link>

                    <div  className= " w-full h-full flex justify-end items-center">
                        <Link to ='/login' className="px-3 h-full hover:bg-orange-400  transition duration-500 ease flex justify-center items-center">Log In</Link>
                        <Link to ='/signup' className="px-3 h-full hover:bg-orange-400 transition duration-500 ease flex justify-center items-center">Sign Up</Link>
                    </div>


                </nav>
            </div>
        </>
    )
}


export default Navbar
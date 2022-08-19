import Navbar from "../Navbar/Navbar"
import React, {useState, useEffect} from "react"
import {AnimatePresence, motion} from 'framer-motion'


const Home = () =>{
    const [intro, setIntro] = useState(true)
    const [next, setNext] = useState(false)
    const [third, setThird] = useState(false)
    const [end, setEnd] = useState(false)
    const [everything, setEverything] = useState(false)

    useEffect(() => {
        setTimeout(()=>{
            setIntro(false)
        }, 3000)

        setTimeout(()=>{
            setNext(true)
            setThird(true)
        },5600)

        setTimeout(()=>{
            setNext(false)
            setThird(false)
        },7700)

        setTimeout(()=>{
            setEnd(true)
        },9720)

        setTimeout(()=>{
            setEverything(true)
        },10000)

    }, [])
    
   
    return(
        
        <div className="h-screen bg-bg bg-cover">
            <Navbar />
            
                <div className="h-5/6 flex">
                    <AnimatePresence>
                        {intro && (
                            <motion.div 
                            key='intro'
                            className="text-9xl flex items-center text-orange-300 pb-40 pl-12"
                            initial={{opacity:0, x:-400}}
                            animate={{opacity:1, x:0}}
                            transition={{duration:2.5}}
                            exit={{opacity:0}}>
                                Welcome,
                            </motion.div>

                        )}
                        {next && (
                                <motion.div 
                                    key='next'
                                    className="text-9xl flex items-center text-orange-300 pb-40 pl-12"
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:2}}
                                    exit={{opacity:0}}>
                                        To
                                </motion.div>
                        )}
                        {third &&(
                            <motion.div 
                                key='final'
                                className="text-9xl flex items-center text-orange-300 pb-40 pl-12"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{duration:2}}
                                exit={{x:-173}}>
                                    QuizApp
                            </motion.div>
                        )}
                        {end &&(
                            <motion.div
                             className="text-9xl flex items-center text-orange-300 pb-40 pl-12"
                             animate={{
                                color:['#ffb74d', '#43b3d9']
                             }}
                             transition={{duration:1}}>
                                QuizApp
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
                <div className="">
                    {everything &&(
                            <motion.div>
                                Get started
                            </motion.div>
                    )}
                </div>






            

            
        </div>
    )

}



export default Home
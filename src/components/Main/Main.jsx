import { useState } from 'react';
import { myProjects } from '../product';
import './main.css';
import { AnimatePresence, motion } from "framer-motion";


const Main = ()=>{
    const [active,setActive]= useState("all")
    const [items,setItems]=useState(myProjects)
    const filterItems = (cateItem)=>{
        const updateItems = myProjects.filter((Item)=>{
            return Item.category === cateItem;
        });
        setItems(updateItems);
    }
    return (
        <main className='flex'>
            <section className='section-left flex'>
                <button onClick={()=>{setActive("all"),setItems(myProjects)}} className={active === "all" ? "active": null}>All Projects</button>
                <button onClick={()=>{setActive("html"),filterItems("css")}} className={active ==="html" ? "active": null}>HTML & CSS</button>
                <button onClick={()=>{setActive("js"),filterItems("js")}} className={active === "js" ? "active": null}>JavaScript</button>
                <button onClick={()=>{setActive("react"),filterItems("react")}} className={active ==="react" ? "active": null}>React & MUI</button>
                <button onClick={()=>{setActive("node"),filterItems("node")}} className={active ==="node" ? "active": null}>Node & Express</button>
            </section>

            <section className='section-right flex'>
            <AnimatePresence>
                {items.map((item)=>{
                    return(
                <motion.article 
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type:"spring",damping:8}}
                key={item.id} className='card'>
                    <img src={item.imgPath} alt="img" />

                    <div style={{width:"266px"}} className='box'>
                        <h1 className='title'>{item.Title}</h1>
                        <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eius. Dolorum adipisci ab nihil at dolor sapiente repudiandae aliquam excepturi.</p>
                        <div className='flex icons'>
                            <div className='flex'>
                                <div className="icon icon-link"></div>
                                <div className="icon icon-github"></div>
                            </div>
                            <a className='link flex' href="">
                                more
                                <span className='icon-arrow-right'></span>
                            </a>
                        </div>
                    </div>
                </motion.article>
                    )
                })}
            </AnimatePresence>
            </section>
        </main>
    )
}


export default Main;
import './hero.css';
import developerAnimation from '../../animation/developer.json';
import Lottie from "lottie-react";

const Hero = ()=>{
    return(
        <section className="hero flex">
            <div className="section-left">
                <div className="parent-avatar flex">
                    <img className="avatar" src="./img.png" alt="image" />
                    <div className="icon-right icon-verified"></div>
                </div>
                <div>
                    <h1 className="title">Software Designer, Founder,and Amateur Astronaut.</h1>
                </div>
                <div>
                    <p className="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae similique eveniet possimus minus, ipsam amet neque voluptas dolores laborum ratione sunt, ducimus quidem nobis natus maxime hic sed modi odit.</p>
                </div>
                <div className="icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin"></div>
                </div>
            </div>

            <div className="section-right">
                <Lottie className='animation' animationData={developerAnimation} />
            </div>
        </section>
    )
}

export default Hero;
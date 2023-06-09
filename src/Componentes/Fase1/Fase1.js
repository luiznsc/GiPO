import React from "react";

import Header from "../Header/Header";
import ConteudoFase1 from "./ConteudoFase1/ConteudoFase1";
import './Fase1.css';
import Footer from "../Footer/Footer";
import QuizFase1 from "./QuizFase1/QuizFase1";


export default function Fase1(){
    return(
        <>
            <Header/>
                <div className="titlefase1">Você está na fase 1</div>
            <ConteudoFase1/>

            <div class="video-container">
                <iframe  src="https://www.youtube.com/embed/m1UxxeQPWzU?controls=0&amp;clip=UgkxKg0d1v0mC8AjlW0_AG5XzsrQVSSm17ST&amp;clipt=ENiwAhi__QQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <QuizFase1/>
            <Footer/>
        </>
    )
}
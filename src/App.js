import {BrowserRouter,Routes,Route} from 'react-router-dom';


import React from 'react';
import Inicial from './Componentes/Inicial/Inicial';
import Login from './Componentes/Login/Login';
import Header from './Componentes/Header/Header';
import Fases from './Componentes/Fases/Fases';
import Inicialuser from './Componentes/Inicialuser/Inicialuser';
import Quiz1 from './Componentes/Fase1/QuizFase1/QuizFase1';
import Conteudo from './Componentes/Fase1/ConteudoFase1/ConteudoFase1';
import Fase1 from './Componentes/Fase1/Fase1';
import Fase2 from './Componentes/Fase2/Fase2';
import Footer from './Componentes/Footer/Footer';
import Quemsomos from './Componentes/Quemsomos/Quemsomos';
import Time from './Componentes/Time/Time';
import Criarconta from './Componentes/Criarconta/CriarcontaTela';


import { Helmet } from 'react-helmet';
import Fase3 from './Componentes/Fase3/Fase3';


export default function App() {
  return (
    <div className='tudo'>
    <Helmet>
      <meta charSet='utf-8'/>
      <title>GiPO</title>
    </Helmet>

      <BrowserRouter>
        <Routes>
          {/* COMPONENTES INDEPENDENTES */}
          <Route path='/header' element={<Header/>}/>
          <Route path='/fases' element={<Fases/>}/>
          <Route path='/quiz1' element={<Quiz1/>}/>
          <Route path='/conteudo' element={<Conteudo/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/conteudo' element={<Conteudo/>}/>
          <Route path='/time' element={<Time/>}/>


          {/* COMPONENTES INTEGRADOS */}
          <Route path='/' element={<Inicial/>}/>
          <Route path='/criarconta' element={<Criarconta/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user' element={<Inicialuser/>}/>
          <Route path='/fase1/*' element={<Fase1/>}/>
          <Route path='/fase2/*' element={<Fase2/>}/>
          <Route path='/fase3/*' element={<Fase3/>}/>
          {/* <Route path='/fase4/*' element={<Fase4/>}/>
          <Route path='/fase5/*' element={<Fase5/>}/> */}
          <Route path='/quemsomos' element={<Quemsomos/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}



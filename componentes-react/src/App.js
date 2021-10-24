import React, { useState } from 'react'
import './App.css'
import Carros from './Componentes/Carros'
import Carteirinha from './Componentes/Carteirinha'
import monica from './img/monica.png'
import chico from './img/chico.png'
import magali from './img/magali.png'
import cebolinha from './img/cebolinha.png'
import Semaforo from './Componentes/Semaforo'


export default()=>{

    const [carro, setCarro] = useState(['Ferrari 458 Italia', 'Porsche Panamera', 'Porsche Boxter',
    'Lamborghini Aventador', 'Lamborghini Huracan', 'Nissan GTR', 'Mini Cooper', 'BMW 320i', 'Mercedes C180'])

    const [carteiraum, setCarteiraum] = useState(['Nome: Chico', 'Rm: 123', 'Curso: ads', 'Turma: H'])
    const [carteiradois, setCarteiradois] = useState(['Nome: Magali', 'Rm: 345', 'Curso: ads', 'Turma: H'])
    const [carteiratres, setCarteiratres] = useState(['Nome: Cebolinha', 'Rm: 678', 'Curso: ads', 'Turma: H'])

    const [nome, setNome] = useState('')
    const [rm, setRm] = useState('')
    const [curso, setCurso] = useState('')
    const [turma, setTurma] = useState('')




    return(
        <>
        <h1>Integrantes - Grupo - 1TDSH</h1>
        <li>Gustavo Diaz Gonzalez, 87142</li>
        <li>João Victor Vasconcellos, 86547</li>
        <li>Matheus Araújo de Oliveira, 87585</li>
        <li>Nicolas Secílio Rodrigues, 88589</li>
        <li>Paulo Gurgel Tudini, 88960</li>
        <li>Raissa Iorio da Silva Oliveira, 86818</li>
        <br/>
        <Carros>
            {carro.map((carro, i)=>(<li>{carro}</li>))}
        </Carros>
        <Carteirinha>
    
            <br/>
            <img src={chico}/>
            {carteiraum.map((carteiraum, i)=>(<li>{carteiraum}</li>))}
            <br/>
            <img src={magali}/>
            {carteiradois.map((carteiradois, i)=>(<li>{carteiradois}</li>))}
            <br/>
            <img src={cebolinha}/>
            {carteiratres.map((carteiratres, i)=>(<li>{carteiratres}</li>))}
            <br/>
            <h2>Digite sua carteirinha:</h2>
            <img src={monica}/>
            <br/>
           
           <p>Nome: {nome}</p>
           <input type = "text" onChange = {(e)=>setNome(e.target.value)}/>
          
           <p>Rm: {rm}</p>
           <input type = "text" onChange = {(e)=>setRm(e.target.value)}/>
         
           <p>Curso: {curso}</p>
           <input type = "text" onChange = {(e)=>setCurso(e.target.value)}/>
          
           <p>Turma: {turma}</p>
           <input type = "text" onChange = {(e)=>setTurma(e.target.value)}/>

        </Carteirinha>
        
        <Semaforo/>
        
        </>
    )
}
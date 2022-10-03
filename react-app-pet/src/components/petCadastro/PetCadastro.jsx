import React, { useState } from 'react'

export default function PetCadastro() {
  const [cadastroPets, setCadastroPets] = useState([
    {
      nome: "Toddy",
      idade: "5 anos",
      raca: "Shih-Tzu",
      tamanho: "Pequeno",
      dono: "Emerson",
      tel: "(11) 4002-8922",
      obs: "Não é agressivo",
    }
  ]);

  const addCadastro = (e) => {
    e.preventDefault();
    setNovoCadastro({nome:"", idade:"", raca:"", tamanho:"", dono:"", tel:"", foto:"", obs:""})
    setCadastroPets([...cadastroPets, novoCadastro]);
  }

  const [novoCadastro, setNovoCadastro] = useState({nome:"", idade:"", raca:"", tamanho:"", dono:"", tel:"", foto:"", obs:""});

}
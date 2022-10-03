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

  const captura = (e) => {
    const {name, value} = e.target;

    if(name === "nome") {
      setNovoCadastro({...novoCadastro, nome: value});
    } else if(name === "idade") {
      setNovoCadastro({...novoCadastro, idade: value});
    } else if(name === "raca") {
      setNovoCadastro({...novoCadastro, raca: value});
    } else if(name === "tamanho") {
      setNovoCadastro({...novoCadastro, tamanho: value});
    } else if(name === "dono") {
      setNovoCadastro({...novoCadastro, dono: value});
    } else if(name === "tel") {
      setNovoCadastro({...novoCadastro, tel: value});
    } else if(name === "foto") {
      setNovoCadastro({...novoCadastro, foto: value});
    } else if(name === "obs") {
      setNovoCadastro({...novoCadastro, obs: value});
    }
  }

}
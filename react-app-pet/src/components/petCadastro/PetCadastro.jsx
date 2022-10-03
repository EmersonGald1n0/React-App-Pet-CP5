import React, { useState } from 'react'
import { DivLista } from '../../style/styled'

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

  return (
    <DivLista>
      <FormPet
        funcaoAddCadastro={addCadastro}
        novoCadastro={novoCadastro}
        funcaoCaptura={captura}
      />
      {cadastroPets.map((cad, i) => (
        <Cadastro
          key={i}
          nome = {cad.nome}
          idade = {cad.idade}
          raca = {cad.raca}
          tamanho = {cad.tamanho}
          dono = {cad.dono}
          tel = {cad.tel}
          foto = {cad.foto}
          obs = {cad.obs}
        />
      ))}
    </DivLista>
  );

}
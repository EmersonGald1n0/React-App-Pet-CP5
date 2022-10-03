import styled from 'styled-components'

export const DivLista = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 95vh;
  background-color: #99FCD6;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Trebuchet MS';
`
export const DivForm = styled.div`
  label {
    color: #FFF;
  }
  input {
    width: 50%;
    padding: 5px;
    margin-top: 10px;
  }
  
  button {
    margin-top: 10px;
    background-color: #525252;
    color: #FFF;
    font-weight: bold;
    padding: 10px 15px;
    transition: 0.5s;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #084EDC;
  }
`
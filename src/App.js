import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [lista,setLista] = useState([])
  let [novoItem, setNovoItem] = useState("")

  useEffect(()=> {
    setLista(["Item 1", "Item 2", "Item 3"])
  }, [])
  return (
    <div class="container">
      <div className='new-item'>
        <input placeholder='Tarefa' value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text"></input>
        <button onClick={()=> adicionarNovoItem()}>Adicionar</button>
      </div>
      <ul className='todo-list'>
        {lista.map((item,index)=> (
          <li key={index} className="todo-item">
            {item}
            <button onClick={()=>deletarItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
    );
    function adicionarNovoItem(){
      if (novoItem.length <= 0){
        alert("Insira um item")
        return
      }
      let itemIndex = lista.indexOf(novoItem)
      if (itemIndex >=0) {
        alert("Tarefa ja existe!")
        return
      }
      setLista([...lista, novoItem])
      setNovoItem("")
    }

    function deletarItem(index){
      let tempArray = [...lista]
      tempArray.splice(index,1)
      setLista(tempArray)
    }
}

export default App;

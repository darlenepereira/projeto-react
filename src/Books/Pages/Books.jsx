import Datas from '../Services/Datas'
import Sidebar from '../Components/Sidebar'
import '../Styles/pages/books.css'
import { useState, useEffect } from 'react'



const Books = () => {

    const [search, setSearch] = useState('')
    const [books, setBooks] = useState ([])

    useEffect(() => {
            setBooks(
                Datas.filter(list => {
                    return list.name.includes(search)
                })
            )
    },[search])


    return (
        <div className='background-div'>
        <Sidebar/>
        <h1 id='title'>Brow Skin Girls</h1>
        <input type="text"
         placeholder='pesquise pelo título' 
         className='input'
         onChange={e =>setSearch(e.target.value)}
         />

            <div id='container'>
                {
                books.map(book => { 
                        return <div key={book.id} className='card' title='Clique na imagem para ler'>
                            <a href={book.link} alt='clique para ler'  target='blank'>
                            <img src={book.image} alt='Capa do Livro'/>
                            </a>                          
                            <h3>{book.name}</h3>
                            <p>Aurota: {book.autor}</p>
                           
                        </div>
                    })
                }
            </div>

        </div>
            
    )
}

export default Books
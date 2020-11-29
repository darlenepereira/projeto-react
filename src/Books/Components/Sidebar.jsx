import { FiArrowLeft } from "react-icons/fi"
import { useHistory } from "react-router-dom"; // Vem de um Hook de dentro do react-router-dom
import { Link } from 'react-router-dom'
import '../Styles/components/aside.css'
import '../Styles/buttonStyle.css'


const Sidebar = () => {
    const { goBack } = useHistory() // Desestruturação de objeto

    

    return (
        <header className="app-sidebar">
            <nav>
                <button type="button" onClick={goBack} className='button-style'>
                    <FiArrowLeft size={24} />
                </button>
                {/* <input type="text" placeholder='pesquisar por título' className='input'/> */}
                <Link to='/About' className=' button-style go-about'>
                        Sobre a Lene
                </Link>
            </nav>
        </header>
    )

}

export default Sidebar
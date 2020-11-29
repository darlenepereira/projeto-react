import { Link } from 'react-router-dom'
//import { FiArrowRight } from 'react-icons/fi' // importando os icons da biblioteca react-icons baixada na pasta através do comando npm install react-icons --save
import '../Styles/pages/home.css' 
import '../Styles/buttonStyle.css'

const Home = () => {
    return(
    <div id='landing-page'>
        <div className='content-wrapper'>
            <main>
                <h1>livros para<h2 id='friday'> As Mulheres</h2> se sentirem em casa</h1>
                <p>Conheça os livros escrito por mulheres negras poderosas</p>
            </main>
            <section className='section-link'>
            <Link to='/Books' className=' button-style enter-app'>
                Power books
            </Link>
            <Link  to='/About' className=' button-style enter-app'>
                Sobre a Lene
            </Link>
            </section>

        </div>

    </div>
    )
}

export default Home
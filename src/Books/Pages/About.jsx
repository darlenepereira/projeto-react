import { Link } from 'react-router-dom'
import Social from '../Services/Social'
import '../Styles/pages/about.css'
import '../Styles/buttonStyle.css'

import Image1 from '../Assets/image1.jpeg'
import Image2 from '../Assets/image2.jpeg'
import Image3 from '../Assets/image3.jpeg'

const About = () => {
    return (
        <>
        <div className='background'>
                <nav>
                    <div className='menu'>
                        <Link to='/' className='button-style enter-app'>
                            Home
                        </Link>
                        <Link to='/Books' className='button-style enter-app'>
                            Power books
                        </Link>
                    </div>
                </nav>

                <header className='banner'>
                    <h1>Darlene Pereira</h1>
                    {/* <p>prometi me abraçar em todos os momentos</p> */}
                </header>
                
                <div className='chamada'>

                <section className='about-me'>
                        <h2>Sobre mim</h2>
                        <p className='text'>Eu amo me dedicar a leituras porque os livros me faz refletir e olhar com outra perspectiva os mesmos temas e ao mesmo tempo aprender sobre algo que eu ainda não sei. Gosto de sair para patinar e conhecer cafeterias, amo exposições e eventos culturais, amo dançar e viajar. Hoje eu aprecio com muita intensidade e amor minha companhia e respeito os meus limites. Aos finais de semana gosto de dedicar ao auto cuidado e a amigos. Sou curiosa e sempre pesquiso e busco me desenvolver sempre. Bora nos conectar !</p>
                        <a href="https://twitter.com/Inca_lenny" target='blank' className='button-style enter-tweeter'>
                            Twitter
                        </a>
                 <main className='container'>
                        {Social.map(redes => {
                            return <div key={redes.id} className='social-cards'>
                                <a href={redes.url} target='blank' className='  enter-social'>
                                <img src={redes.image} alt="Icone das redes sociais" />
                                </a>

                            </div>
                        })
                        }
                </main>
                </section>
                <section className='projects'>
                    <div className='projects_container'>
                        <img  src={Image1}  alt="foto 1 da Darlene" className='projects_img'/>
                        <img src={Image2} alt="foto 1 da Darlene" className='projects_img'/>
                        <img src={Image3} alt="foto 1 da Darlene" className='projects_img'/>
                    </div>
                </section>
                </div>
        </div>
        </>
    )
}

export default About
import './App.css'
import Saudacao from './components/Saudacao'
import Frase from './components/Frase'
import Lista from './components/Lista'
import Imagem from './components/Imagem'
import Botao from './components/Botao'
import Link from './components/Link'
import Titulo from './components/Titulo'
import Hora from './components/Bom'

function App() {
 
  return (
    <>
    <Saudacao  planeta="Mundo"  />
    <br></br>
    <Frase frase= "Somente a dor coletiva gera união"/>
    <br></br>
    <Lista iHer={20} iSte={22} iGio={19} iEdu={901832409832409} iLeo="infinito"/>
    <Imagem img="./src/assets/take.gif"/>
    <Imagem img="https://th.bing.com/th/id/R.629836e557ad0774987d4472497f2764?rik=96lbOPXTXIHrxA&riu=http%3a%2f%2fpa1.narvii.com%2f5773%2f266a27e5cfe070cd8f6096d4067a3666e792b97c_hq.gif&ehk=axceaB8QlSLpP5Ct62ZLy%2byXPIhz1BhAApe0pyOgbVw%3d&risl=&pid=ImgRaw&r=0"/>
    <br></br>
    <Botao/>
    <br></br>
    <Link/>
    <br></br>
    <Titulo titulo="Braço curto" subtitulo="Quase girino"/>
    <Titulo titulo="Somente a dor coletiva" subtitulo="Gera união"/>
    <br></br>
    <Hora queHora={true}/>
    </>
  )
}

export default App

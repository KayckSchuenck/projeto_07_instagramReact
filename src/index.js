import ReactDOM from 'react-dom';
import {IconsFundoMobile} from './icons'
import { Esquerda,Sidebar } from './corpo';
import Navbar from './navbar';


function Corpo(){
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    )
}

function FundoMobile(){
    return (
        <div class="fundo-mobile">
            <IconsFundoMobile />
        </div>
    )
}

function App(){
    return(
        <div class="root">
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
        
    )
}

ReactDOM.render(<App />, document.querySelector("body"));
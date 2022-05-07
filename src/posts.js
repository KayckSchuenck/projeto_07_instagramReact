import React from 'react'

export default function Posts(props){

const [coracaoIcon,setCoracaoIcon]=React.useState("heart-outline");
const [coracaoIconColor,setCoracaoIconColor]=React.useState("white");
  
  function Like(double){
    if(coracaoIcon==="heart-outline"){
      setCoracaoIcon("heart")
      setCoracaoIconColor("danger")
    }
    if(coracaoIcon==="heart"&&double!==true){
      setCoracaoIcon("heart-outline")
      setCoracaoIconColor("none")
    }
  }

    return (
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.imgPerfil} />
                  {props.nomePerfil}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.conteudo} onDoubleClick={()=>Like(true)} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name={coracaoIcon} color={coracaoIconColor} onClick={Like}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.imgCurtida} />
                  <div class="texto">
                      Curtido por <strong>{props.usuarioCurtida}</strong> e <strong>{props.numeroCurtida}</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}
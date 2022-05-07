import {Suggestions,Usuario} from './suggestions';
import Posts from './posts';
import Stories from './stories';

export function Esquerda(){

    const todosStories= [{
        nameStories:"assets/img/9gag.svg",
        userStories:"9gag"
    },
    {
        nameStories:"assets/img/meowed.svg",
        userStories:"meowed"
    },
    {
        nameStories:"assets/img/barked.svg",
        userStories:"barked"
    },
    {
        nameStories:"assets/img/nathanwpylestrangeplanet.svg",
        userStories:"nathanwpylestrangeplanet."
    },
    {
        nameStories:"assets/img/wawawicomics.svg",
        userStories:"wawawicomics"
    },
    {
        nameStories:"assets/img/respondeai.svg",
        userStories:"respondeai"
    },
    {
        nameStories:"assets/img/filomoderna.svg",
        userStories:"filomoderna"
    },
    {
        nameStories:"assets/img/memeriagourmet.svg",
        userStories:"memeriagourmet"
    }];
    
    const todosPosts= [{
              imgPerfil:"assets/img/meowed.svg",
              nomePerfil:"meowed",
              conteudo:"assets/img/gato-telefone.svg",
              imgCurtida:"assets/img/respondeai.svg",
              usuarioCurtida:"respondeai",
              numeroCurtida:"outras 101.523 pessoas"
    },
    {
              imgPerfil:"assets/img/barked.svg",
              nomePerfil:"barked",
              conteudo:"assets/img/dog.svg",
              imgCurtida:"assets/img/adorable_animals.svg",
              usuarioCurtida:"adorable_animals",     
              numeroCurtida:"outras 99.159 pessoas"
    }]

    return (
        <div class="esquerda">
          <div class="stories">
              {todosStories.map(({nameStories,userStories})=>
              (<Stories img={nameStories} user={userStories} />))}
          <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
          </div>  
          {todosPosts.map(({imgPerfil,nomePerfil,conteudo,imgCurtida,usuarioCurtida,numeroCurtida})=>
              (<Posts 
                imgPerfil={imgPerfil} 
                nomePerfil={nomePerfil}
                conteudo={conteudo}
                imgCurtida={imgCurtida}
                usuarioCurtida={usuarioCurtida}
                numeroCurtida={numeroCurtida}   />)
          )}   
    </div>
    )
}

export function Sidebar(){

    const todasSugestoes=[{
        name:"bad.vibes.memes",
        img:"assets/img/bad.vibes.memes.svg",
        reason:"segue voce"
    },
    {
        name:"razoesparaacreditar",
        img:"assets/img/razoesparaacreditar.svg",
        reason:"segue voce"
    },
    {
        name:"adorable_animals",
        img:"assets/img/adorable_animals.svg",
        reason:"segue voce"
    },
    {
        name:"smallcutecats",
        img:"assets/img/smallcutecats.svg",
        reason:"segue voce"
    }]

    return(
        <div class="sidebar">
          <Usuario img="assets/img/catanacomics.svg" user="catanacomics" name="catana" />
          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>   
            </div>
            {todasSugestoes.map(({name,img,reason})=>
            (<Suggestions 
            name={name}
            img={img} 
            reason={reason}   />)
            )}
          </div>
          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>
          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}
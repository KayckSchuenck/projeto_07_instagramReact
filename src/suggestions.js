export function Suggestions(props){
    return (
    <div class="sugestao">
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.reason}</div>
            </div>
        </div>
        <div class="seguir">Seguir</div>
    </div>
    )
}

export function Usuario(props){
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
              <strong>{props.user}</strong>
              {props.name}
            </div>
          </div>
    )
}
export function IconsFundoMobile(){
    let nomes=['home','search-outline','add-circle-outline','heart-outline','person-outline'];
    return (
        nomes.map(item => <ion-icon name={item}></ion-icon>)
    )
}

export function IconsNavBar(){
    let nomes=['paper-plane','compass','heart','person'];
    const icones=nomes.map(item => item+="-outline")
    return (
        icones.map(item => <ion-icon name={item}></ion-icon>)
    )
}
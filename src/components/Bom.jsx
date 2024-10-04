

function BomDia(){
    return(
        <>
        <p>Bom dia!</p>
        </>
    )
}

function BoaNoite() {
    return (
        <>
        <p>Boa Noite!</p>
        </>
    )
}

function Hora(props){
    const queHora = props.queHora;
    if (queHora) {
        return <BomDia/>
    }else{
        return <BoaNoite/>
    }    
}

export default Hora
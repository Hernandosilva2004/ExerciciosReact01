import './DivE.css'

function DivE (props){
    return(
        <>
        
        <div className="reportagem">
            <h1 className="titulo">{props.titulo}</h1>
            <p style={{color:"aqua"}}>{props.paragrafo1}</p>
            <p style={{color:"aquamarine"}}>{props.paragrafo2}</p>
        </div>
        </>
    )
}

export default DivE
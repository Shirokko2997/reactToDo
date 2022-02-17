function PComponent(props){
  return <p style={{color:props.color}}>{props.text}</p>

}




function H1component(props){
    console.log(props);
    var valueToRender 
    if (props.name) 
    {valueToRender=props.name} else {valueToRender=props.labakSzama}
    
    
    return ( 
    <div>
                  <h1>{valueToRender}</h1>
                  <PComponent text={props.labmeret} color='green'/>
                  <PComponent text='szöveg részlet piros betűvel' color='blue'/>
            </div>
      );
  }

  function H2component(props){
      console.log(props)
    return <>
          <h2>{props.name5}</h2>
          <PComponent text={props.h2FootSize} color='red'/>
    
    </>;
  }

  export {H2component};
  export default H1component;
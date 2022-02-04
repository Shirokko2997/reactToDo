

function H1component(props){
    console.log(props);
    return ( <h1>{props.children}</h1>);
  }

  function H2component(props){
      console.log(props)
    return ( <h2></h2>);
  }

  export {H2component};
  export default H1component;
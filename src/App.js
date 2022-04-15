import React from "react";
import "./App.css"
import ReactDOM from "react-dom";



const Header=(props)=>{
    return <h1 style={{color:props.colour}}>{props.name}</h1>
};

const Main=(props)=>{
    return (
    <React.Fragment>
    <h2 style={{color:props.colour}}>{props.name}</h2>
    <ul>{props.items.map((m)=><li>{m}</li>)}</ul>
    </React.Fragment>
    );
};

const Footer=(props)=>{
    return <h3 style={{color:props.colour}}>{props.name}</h3>
};

function App()
{
    const list=[ "Pizza","Beer","Chicken"]
       
    return(
        <div className="App">
           <Header name="Mrinals first Header component without an paramter" colour="red" ></Header>
           <Main name="Mrinals first main component without an paramter" colour="cyan" items={list}></Main>
           <Footer name="Mrinals first footer component without an paramter" colour="yellow"></Footer>
        </div>
    );
}
export default App;
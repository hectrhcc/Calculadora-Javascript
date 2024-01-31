import { useState } from 'react'
import './Estilo.css'
class Calculadora extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    clicked:false ,
    inicio:'0',
    operaciones:''
    }
this.handleClick = this.handleClick.bind(this);
  }
  
   calculo = () => {
    /*let acc = document.getElementById(this.state.operaciones);*/
       
  }
  
  handleClick(id){
    let op=0;
    let num1=0;
    let num2=0;
    switch (id) {
    case 'divide': 
      
      break;
    case 'multiply':
      
      break;
    case 'subtract':
      
      break;
    case 'add': //la suma se hace cuando este los 2 operandos  o cuando se apreta =
       const sumar=true;
      break;
    case 'equals': 
      break;
    case 'seven':
     num1= 7;
      break;
    case 'eight': 
      num2=8;
      break;
     case 'nine': 
      
      break;
     case 'six':
 
      break;
     case 'five':
 
      break;
     case 'four':
 
      break;
     case 'three':
 
      break;
     case 'two':
 
      break;
     case 'one':
 
      break;
     case 'zero':
 
      break;
     case 'decimal':
 
      break;
     case 'clear':
    op=0;   
      break;
  }
     
    this.setState(prevState => ({
    clicked: true,
    inicio:op,
     operaciones:op
  })
);
  }
  
  render(){
    return(
      <>
        <div className="global">
          <div id="display" >
            <div className="operaciones">{this.state.operaciones}</div><div className="entrada"> 
              {this.state.inicio}</div>
            </div>    
            
          <disv className="orden1">       
             <div id="clear"  onClick={() => this.handleClick('clear')}>AC</div>   
              <div id="divide"  onClick="">/</div>
              <div id="multiply"  onClick="">*</div>
           </disv>
          <div className="orden2">
              <div id="seven" onClick={() => this.handleClick('seven')}>7</div>
              <div id="eight" onClick={() => this.handleClick('eight')}>8</div>
              <div id="nine"  onClick="">9</div>
              <div id="subtract"  onClick="">-</div>
          </div>  
          <div className="orden3">
              <div id="four" onClick="">4</div>
              <div id="five"  onClick="">5</div>
              <div id="six"  onClick="">6</div>
              <div id="add"  onClick={() => this.handleClick('add')}>+</div>
          </div>
          <div className="orden4">
          <div id="one"  onClick="">1</div>     
          <div id="two"  onClick="">2</div>
          <div id="three" onClick="">3</div>
          <div id="equals"  onClick="">=</div>
          </div>
          <div className="orden5">
          <div id="zero"  onClick="">0</div>
          <div id="decimal"  onClick="">.</div>
          </div>
          </div>
       </>
    );
  }
}

ReactDOM.render(<Calculadora />, document.getElementById('root'));

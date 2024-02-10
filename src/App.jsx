import { useState } from 'react'
import './Estilo.css'
class Calculadora extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    clicked:false ,
    inicio:'0',
    cadena:''
    }
this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick(id){
    let cadena= this.state.cadena;
    let inicio= this.state.inicio;
    let lastChar = cadena[cadena.length-1];
    let operadorRegex = /[+\-*\/=]/; //   
    switch (id) {
    case '/': 
    case '*':
    case '-':
    case '+': 
        if( cadena.includes('=')) {
    let i = 0;
        while(i < cadena.length){
              if(cadena[i] == '='){
                  cadena = cadena.slice(i+1, cadena.length); 
                console.log(cadena);
               }
              i++;
             }
          cadena+=id;
        }   else if(lastChar==='*' && id!='-'){
     cadena = cadena.replace("*",id);
          }
        
        else if( lastChar==='/'  && id!='-'){
          cadena = cadena.replace("/",id);
        }
         else if( lastChar==='+' && cadena.length===1){
          cadena = cadena.replace("+",id);
        }
        else if( lastChar==='+'){
          cadena = cadena.replace("+",id);
        }
         else if( lastChar==='-' && cadena.length===1){
          cadena = cadena.replace("-",id);
        }
        
         else if( lastChar==='-' && cadena[cadena.length-2]==='*'){
          cadena = cadena.replace("*-",id);
        }
         else if( lastChar==='-' && cadena[cadena.length-2]==='/'){
          cadena = cadena.replace("/-",id);
        }
         else if( lastChar==='-'){
          cadena = cadena.replace("-",id);
        }
        else{cadena+=id; }
        break;
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        if (lastChar === '0' && operadorRegex.test(cadena[cadena.length - 2])) {
  cadena = cadena.replace(/0$/, id);
}
        else  if (lastChar === '.' && cadena[cadena.length - 2] ==='0' ) {
  cadena+= id;
}
        else if(cadena[0]==='0' && cadena.length===1){
     cadena = cadena.replace("0",id);
          }else{
     cadena+=id;     
      //  let num= +id; //convertir a numero Pero ya no es necesario
      }
      break;  
    case 'clear':
     inicio='0';
        id='0';
    cadena='0';
      break;
    case '=': 
      let resultado;
       resultado = eval(cadena); //evaluar si la cadena solo tiene caracteres permitidos 
       //resultado = parseFloat(resultado).toFixed(4)
      cadena+=id; //despues le coloque el =
      //let quintoDecimal = parseInt((resultado * 10000) % 10);
      //if(quintoDecimal >= 5) {
    //postresultado = Math.ceil(resultado * 1000) / 1000; 
  //}
      id=resultado;
      cadena+=resultado;
      break;    
    case '0'://pueden existir varios ceros juntos despues del punto 0.0001 pero no antes 000.01
        //si al anterior caracter es un 0 entonces no se ingresa a excepcion que el numero tenga un .
        if(cadena[0]==='0'  && cadena.length===1){
     ;
          }
        else if (lastChar === '0' && operadorRegex.test(cadena[cadena.length - 2])){
          cadena = cadena.replace(/0$/, id);
        }
     else if (lastChar === '.' && cadena[cadena.length - 2] ==='0'){
          cadena+=id; 
        }
        else{
          cadena+=id;
        }
     break;
    case '.': //pueden existir varios puntos en la cadena pero no contiguos
        if(cadena===''){
          cadena='0.';
          id='0.';
        }
      else if (lastChar ==='.' ) {//si el ultimo elemento es un . entonces no ingresa nada
        ;  
        }
        else{
          cadena+=id;
        }
     break;
  }       
if(operadorRegex.test(id)) {// cuando id tiene operador
    this.setState(prevState => ({
    clicked: true,
    inicio:id,
    cadena:cadena 
    })
  );
}   else if(operadorRegex.test(cadena)){//cuando la cadena tiene algun operador crea una nueva cadena
    let nuevaCadena = cadena.split(operadorRegex);
    let partefinal=nuevaCadena[nuevaCadena.length-1];//ultimos digitos en la cadena
    console.log(partefinal);
    this.setState(prevState => ({
    clicked: true,
    inicio:partefinal,
    cadena:cadena 
    })
  );  
    }
else{//cuando id son numeros
  this.setState(prevState => ({
    clicked: true,
    inicio:cadena,
    cadena:cadena 
    })
  );
}    
} 
  render(){
    return(
      <>
        <div className="global">
           <div className="operaciones">{this.state.cadena}</div>
          <div id="display" >
           <div className="entrada"> 
              {this.state.inicio}</div>
            </div>    
            
          <div className="orden1">       
             <div id="clear"  onClick={() => this.handleClick('clear')}>AC</div>   
              <div id="divide"  onClick={() => this.handleClick('/')}>/</div>
              <div id="multiply"  onClick={() => this.handleClick('*')}>*</div>
           </div>
          <div className="orden2">
              <div id="seven" onClick={() => this.handleClick('7')}>7</div>
              <div id="eight" onClick={() => this.handleClick('8')}>8</div>
              <div id="nine"  onClick={() => this.handleClick('9')}>9</div>
              <div id="subtract"  onClick={() => this.handleClick('-')}>-</div>
          </div>  
          <div className="orden3">
              <div id="four" onClick={() => this.handleClick('4')}>4</div>
              <div id="five"  onClick={() => this.handleClick('5')}>5</div>
              <div id="six"  onClick={() => this.handleClick('6')}>6</div>
              <div id="add"  onClick={() => this.handleClick('+')}>+</div>
          </div>
          <div className="orden4">
          <div id="one"  onClick={() => this.handleClick('1')}>1</div>     
          <div id="two"  onClick={() => this.handleClick('2')}>2</div>
          <div id="three" onClick={() => this.handleClick('3')}>3</div>
          <div id="equals"  onClick={() => this.handleClick('=')}>=</div>
          </div>
          <div className="orden5">
          <div id="zero"  onClick={() => this.handleClick('0')}>0</div>
          <div id="decimal"  onClick={() => this.handleClick('.')}>.</div>
          </div>
          </div>
       </>
    );
  }
}
ReactDOM.render(<Calculadora />, document.getElementById('root'));
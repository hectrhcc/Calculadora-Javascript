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
    
    switch (id) {
    case '/': 
    case '*':
    case '-':
    case '+': 
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
     cadena+=id;     
      //  let num= +id; //convertir a numero Pero ya no es necesario
      break;  
   
    case 'clear':
     id=0;
    cadena=' ';
      break;
    case '=': 
      let resultado;
       resultado = eval(cadena);
      cadena+=id; //despues le coloque el =
      id=resultado;
      cadena+=resultado;
      break;    
    case '0'://pueden existir varios ceros juntos despues del punto 0.0001 pero no antes 000.01
        //si al anterior caracter es un 0 entonces no se ingresa a excepcion que el numero tenga un .
     cadena+=id;
     break;
    case '.': //pueden existir varios puntos en la cadena pero no contiguos
        if(cadena===''){//funciona a la primera pero no en las siguientes
          cadena='0.';
          id='0.';
        }
        else if (cadena[cadena.length-1] ==='.') {//si el ultimo elemento es un . entonces no ingresa
          
        }
        else{
          cadena+=id;
        }
     break;
  } 
    this.setState(prevState => ({
    clicked: true,
    inicio:id,
    cadena:cadena 
    })
  );
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

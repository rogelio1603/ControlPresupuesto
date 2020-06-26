import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'


function App() {

  //Definir el state del presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  
  //Definir el state para mostrar los componentes
  const [mostrarpregunta, actualizarPregunta] = useState(true)

  //Definir el state de los gastos que se realicen en un objeto
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)

  //useEffect que actualiza el rentante
  useEffect(() => {
    if(crearGasto){

      //Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto     
      ]);

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
        {mostrarpregunta ? ( //Se utiliza el parentesis para dar por implicito el return y pueda retornar todo el componente
          <Pregunta 
            guardarPresupuesto = {guardarPresupuesto}
            guardarRestante = {guardarRestante}
            actualizarPregunta = {actualizarPregunta}
          />
        ) : (
          <div className="row">
              <div className="one-half column">
                <Formulario 
                  guardarGasto = {guardarGasto}
                  guardarCrearGasto = {guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />

                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
          </div>
        )} 
        </div>
      </header>
    </div>
  );
}

export default App;

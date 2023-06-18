

// function App  ()  {
//   // Javascript
//   console.log('Hello From component');

//   const now= new Date();
//   const a = 10;
//   const b = 20;
//   console.log(now,a+b);

//   return (
//     <div>
//       <p>Hellow world ,it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   );
// }

// export default App;

import React from 'react';

function Hello(props) {
  return (
    <div><p>
      
      Hello {props.name},you are {props.age} years old! </p>
      </div>
  )
}

function App() {

  const age = 10;
  return (
    <div>
      <h1>Greeting</h1>
      <Hello name='Krish' age={ 10 + 20}/>
      <Hello name='sathis'age=  { age } />
    </div>
  )
}

export default Hello

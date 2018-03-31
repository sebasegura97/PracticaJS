import React from 'react';
import ReactDOM from 'react-dom';
import Media from 'src/playlist/components/media';


const holaMundo = <h1>Hola mundo!</h1>;
// ReactDOM.render(holaMundo, app);

// ReactDOM.render(que voy a renderizar, donde lo haré);

const app = document.getElementById('app')
ReactDOM.render(<Media />, app);

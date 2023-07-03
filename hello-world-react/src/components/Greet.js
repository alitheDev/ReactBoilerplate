import react from 'react';

const Greet = (props) => {
console.log(props)
return <h1>Hello, {props.className}, {props.heroName}</h1>

}

export default Greet
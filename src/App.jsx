import { useState } from 'react';
import { styled } from 'styled-components';
import CodigoN from './assets/EjercicioN.png';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Container>
			<div className="izquierda">
				<p>
					En el código de la derecha, se busca primero usar un bloque try-catch
					para poder validar que la entrada es un número entero. Una vez
					validado esto, procedemos a usar un bucle for para recorrer cada
					número desde 1 hasta 'n'. Si el resto de la división entre el número y
					3, así como el resto de la división entre el número y 5, es igual a 0,
					significa que es divisible por ambos, por lo que en esa parte del
					arreglo iría un 'IEEEEntrevista'. De manera similar, se verifica si es
					divisible solo entre 3 (iría 'IEEE') o si es divisible solo entre 5
					(iría 'Entrevista'). Finalmente, si no es divisible entre ninguno de
					los dos números mencionados, se colocaría en esa parte del arreglo el
					número tal cual se estaba validando.
				</p>
			</div>
			<div className="derecha">
				<img src={CodigoN} />
			</div>
		</Container>
	);
}

export default App;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	// padding: 30px;
	// flex-direction: column;
	// width: 50vw;

	p {
		color: #fdfefd;
		text-align: justify;
		padding: 30px;
	}

	.izquierda {
		width: 500px;
		height: 400px;
		background: #1c1938;
		align-items: center;
		justify-content: center;
		display: flex;
	}

	.derecha {
		width: 500px;
		height: 400px;
		background: #ffffff;
		align-items: center;
		justify-content: center;
		display: flex;
	}

	img {
		width: 93%;
		border-radius: 5px;
	}
`;

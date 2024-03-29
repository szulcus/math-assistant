import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,700&subset=latin-ext');
	
	*, *::before, *::after {
		box-sizing: border-box;
	}
	
	* {
		--color-primary: lightgray;
		--color-secondary: gray;
		--color-decorative-light: #5CB3FF;
		--color-decorative: #1589FF;
		--color-decorative-dark: #1569C7;
		--color-background: #202020;
		--color-light: #ffffff;
		--color-dark: #000000;
	}
	
	body {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		background-color: var(--color-background);
		color: var(--color-primary);
		font-size: 20px;
		font-family: 'Ubuntu', sans-serif;
		overflow: hidden;
	}
`

export default Global
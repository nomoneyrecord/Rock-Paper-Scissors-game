//const game = () => {
//	let playerScore = 0;
//	let computerScore = 0;
//
//	const playGame = () => {
//		const rock = document.getElementById('rock');
//		const paper = document.getElementById('paper');
//		const scissor = document.getElementById('scissor');
//		const playerOptions = [rock,paper,scissor];
//		const computerOptions = ['rock','paper','scissor']
//		
//		playerOptions.forEach(option => {
//			option.addEventListener('click',function(){
//				const choiceNumber = Math.floor(Math.random()*3);
//				const computerChoice = computerOptions[choiceNumber];
//				winner(this.innerText,computerChoice)
//			})
//		})

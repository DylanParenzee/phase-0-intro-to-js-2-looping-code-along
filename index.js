// Code your solutions in this file
 

const writeCards = (arrNames, event) => {
    const newArr = [];
    for(let i=0; i<arrNames.length; i++){
        let greetings = `Thank you, ${arrNames[i]}, for the wonderful ${event} gift!`
        newArr.push(greetings)
        

    } return newArr
}







let countDown = (number) =>{
    while(number >= 0){
        console.log(number--)
    
    }

}
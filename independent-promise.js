//creating individual promises.

//none of those promises are dependent on each other


let cookBeans = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve('beans')
        }, 1000);
    });

}

let steamBroccoli = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('broccoli')
        },1000);
    });
}

let cookRice = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('rice')
        }, 1000);
    });
}

let bakeChicken= () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('chicken')
        }, 1000);
    })
}


//with this way of asyncing , the serveDinner becomes a concurrent function
async function serveDinner() {
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
   }
serveDinner();



//or you could use this format, this way you won't be halting the function.
steamBroccoli().then((resolve)=>{console.log(resolve)})

async function serveDinner() {
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
   }




//or we could use await Promise.all()
// Promise.all() resolves when all of the promises in the argument array have  resolved. it is faster in independent cases.

async function serveDinnerAgain(){
    //pass an array of promises as the argument to Promise.all()
    const foodArray = await Promise.all([steamBroccoli(), cookBeans(), cookRice(), bakeChicken()]);
    
    console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
    //the promise's resolve value will be an array, containing the resolved values of each promise.
}




serveDinner();
serveDinnerAgain();
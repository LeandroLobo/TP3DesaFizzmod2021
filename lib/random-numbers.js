const randomNumbers = () => {

    const obj = {};
    for(let i=0; i<10000; i++){
        let n = Math.ceil(Math.random()*20);
        (obj[n]>0) ?obj[n]++ :obj[n]=1;
    }

    let total = 0;
    for(let key in obj){
        total += obj[key];
    }
    console.log('\n-------------------------------------------');
    console.log(total + ' numbers (between 1 and 20) were sended in object');
    console.log('-------------------------------------------\n');

    return obj;
}

export default randomNumbers;
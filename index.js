const express = require('express'); // require express
const app = express(); // utiliser express

// console.dir(app);

// app.use(()=> {
//     console.log('We got a new request !!');
// });

app.use((req, res)=> {
    console.log('We got a new request !!');
    // console.dir(req);
    // res.send('HELLO, we got your request!');
    // res.send({color: 'red'});
    res.send('<h1>This is my webpage</h1>');
});

// app.get('/', (req, res)=>{
//     console.log(req);
//     res.send('APP.GET on "/" IS WORKING ! YES !!! :p');
// });


app.listen(3000, ()=>{
    console.log('PORT 3000 is listenning ...');
});
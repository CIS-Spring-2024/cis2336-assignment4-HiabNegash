const express= require('express');

const app=express();
const PORT=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
app.post('/submit',(req,res)=>{
    const{item1,item2,item3,item4,item5}=req.body;
    const total=parseInt(item1)+parseInt(item2)+parseInt(item3)+parseInt(item4)+parseInt(item5);
    res.send('Total:$${total}');
});
app.listen(PORT,()=>{
    console.log('Server running on http://localhost:${PORT}');
});

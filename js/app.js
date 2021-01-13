const btnAdd=document.getElementById('btnSave');
btnAdd.addEventListener('click',(e)=>{
    
    let idd, nombred, edadd, ciudadd;
    idd=document.getElementById("id").value;
    nombred=document.getElementById("nombre").value;
    edadd=document.getElementById("edad").value;
    ciudadd=document.getElementById("ciudad").value;
 
    var data = {id:idd, nombre:nombred,edad:edadd, ciudadd:ciudadd};
 
    fetch('http://localhost:1339/api/clientes/', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
 
})

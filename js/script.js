/*
Siento la cutrez del css y el js, si veis la hora
de subida del commit entendereis ...
no me he acordado de como se sacaba fuera del fetch,
me salia un objeto de promesa al que no he sabido
acceder o se me rellenaba el array lo ultimo con
lo que a efectos practicos estaba vacio ...
Me queda por hacer la segunda unidad que en unas horas
es la clase (:
    si veis este comentario es que no me ha dado tiempo a hacerlo bien
*/

const page ="https://jsonplaceholder.typicode.com/users";
const userList = document.getElementById("listaUsuarios");


render(page);

async function render (page){
    const usuarios = [];

    await fetch (page)
    .then ((response) => {
        if(!response.ok){
            throw new Error("Error connection !");
        }
        return response.json();
    })
    .then((response) => {
        response.forEach(element => {
            usuarios.push(element)
        });
    })
    .catch((error) => {
        console.log(error);
    });


    ageAdder(usuarios);

    userLoader (usuarios);

}

const rand = () => Math.floor(Math.random()*40)+20;

function ageAdder (array){
    array.forEach(element => {
        element.age=rand();
    });
}

function userLoader (users) {
    userList.innerHTML="";

    for(const user of users){
        let addUser = document.createElement("li");
        addUser.innerHTML=(
            `<div id="uPersonal">
                <p>Nombre : ${user.name}</p>
                <p>Edad : ${user.age}</p>
                <p>Username : ${user.username}</p>
                <p>Teléfono : ${user.phone}</p>
                <p>Email : ${user.email}</p>
            </div>
            <img src="assets/img/${user.id}.jpeg"/>
            <div id="uTrabajo">
            <p>Compañia : ${user.company.name}</p>
            <p>Dirección : 
                ${user.address.street} , 
                ${user.address.suite} , 
                ${user.address.city}</p>
            </div>`
        )
        userList.appendChild(addUser);
    }
    
}


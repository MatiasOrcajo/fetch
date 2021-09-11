//declaro el contenedor donde iran los datos
const container = document.getElementById('container');

//creo la clase User
class User {
    constructor(name, username, email, phone, company){
        this.name = name,
        this.username = username,
        this.email = email,
        this.phone = phone,
        this.company = company
    }
}

class Data {
    printData = (data) => {
        for (let i = 0; i < data.length; i++) {
            const name = data[i].name;
            const username = data[i].username;
            const email = data[i].email;
            const phone = data[i].username;
            const company = data[i].username;
            
            const user  = new User(name, username, email, phone, company);
    
            const div = document.createElement('div');
            div.setAttribute('class', 'col-lg-4 users-container mt-5')
            div.innerHTML = `
                
                    <div class="text-center" style="margin: 0 auto;">
                        <img src="/images/${i+1}.jfif" alt="" class="mt-2">
                    </div>
                    <div class="mt-3 p-3">
                        <h5>Name: <span>${user.name}</span></h5>
                        <h5>Username: <span>${user.username}</span></h5>
                        <h5>Email: <span>${user.email}</span></h5>
                        <h5>Phone: <span>${user.phone}</span></h5>
                        <h5>Company: <span>${user.company}</span></h5>
                    </div>
            `
            container.appendChild(div);
            
        }
    }
    getData = () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.printData(data));
        
    } 

}

//usando los datos de la api

const printUsers = new Data;
printUsers.getData();

//funcionalidad del buscador

const searchUser = () => {
    document.getElementById('search').addEventListener('keyup', (e) => {
        let value = e.target.value;
        let cards = document.querySelectorAll('.col-lg-4');
        cards.forEach(card => card.textContent.toLocaleLowerCase().includes(value) ? card.classList.remove('display') : card.classList.add('display'));
    })

}

searchUser();





                    
                                                                    


var exo = document.getElementById('stat');
console.log(exo);

const btn = document.querySelector('.btn')

exo.addEventListener('click', (e) => {
console.log(e);

if (e.target.outerText=="1.0") {
    const com = document.getElementById('comment');
    com.innerHTML = "Présence de maladie cardiaque";
    const bar = document.querySelector(".stat");
    bar.style.backgroundColor = 'red'
    com.style.backgroundColor = 'red'
    bar.style.color = 'white'
    
    
}
else{

    const com = document.getElementById('comment');
    com.innerHTML = "Absence de maladie cardiaque";
    const bar = document.querySelector(".stat");
    bar.style.backgroundColor = 'green'
    com.style.backgroundColor = 'green'
    bar.style.color = 'white'
}

});
    
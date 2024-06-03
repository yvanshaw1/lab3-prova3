const app = document.getElementById('app');

//CRIANDO AS TORRES E ADICIONANDO AO ELEMENTO PAI
function addTower() {

    for (let i = 1; i < 4 ; i++) {

        const tower = document.createElement('section');
        
        tower.classList.add('torre');
        tower.id = `torre${i}`
        
        app.appendChild(tower);
    }
}

addTower(3)

//CRIANDO OS DISCOS E ADICIONANDO AO ELEMENTO PAI
const tower1 = document.getElementById('torre1');
const tower2 = document.getElementById('torre2');
const tower3 = document.getElementById('torre3');

function addDisk(diskAmount) {

    for (let i = 1; i <= diskAmount; i++) {

        const disk = document.createElement('div');

        disk.classList.add(`disco${i}`);
        
        tower1.appendChild(disk);
    }
}

addDisk(3)

//MOVER OS DISCOS
let selectedDisk = undefined;

const victory = document.createElement('p')

app.addEventListener('click', function(event) {
    
    let selectedTower = event.target.closest('.torre');

    if(selectedDisk == undefined) {

        selectedDisk = selectedTower.lastElementChild
    }
    
    if(!selectedTower.hasChildNodes() || selectedDisk.clientWidth < selectedTower.lastElementChild.clientWidth) {
        
        selectedTower.appendChild(selectedDisk);
        selectedDisk = undefined;
        
        if(tower2.childElementCount == 3 || tower3.childElementCount == 3) {
            victory.innerText = 'vitória!!! :)'
            app.appendChild(victory)
        }
    }

    if(selectedDisk.clientWidth > selectedTower.lastElementChild.clientWidth) {

        selectedDisk = undefined;
    }
})



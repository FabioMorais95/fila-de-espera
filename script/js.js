let patients = []
const newPatient = document.querySelector('#newPatient')
newPatient.addEventListener('click', showInputName)
const addPatientBtn = document.querySelector('#addPatientBtn')
addPatientBtn.addEventListener('click', addPatient)
const consultPatientBtn = document.querySelector('#consultPatient')
consultPatientBtn.addEventListener('click', consultPatient)
const waitingListBtn = document.querySelector('#list')
waitingListBtn.addEventListener('click', showListPatient)
const ul = document.querySelector('.waitingList')
const resetPasswords = document.querySelector('#resetPassword')
resetPasswords.addEventListener('click', resetPass)
let position = 0
let password = 0

let time = new Date()
let hour = time.getHours()
let minutes = time.getMinutes()
if (hour < 10) {
    hour = `0${hour}`
} else if (minutes < 10) {
    minutes = `0${minutes}`
}
const audio = document.querySelector('#audio')

function addPatient() {
    if (inputName.value == '') {
        alert('Preencha o nome do paciente')
    } else {
        const inputName = document.querySelector('#inputName')
        patients.push(inputName.value)
        addPatientToList()
        newPatientAddedMessage()
        inputName.value = ''
        console.log(patients)
    }
    inputName.focus()
}
function showInputName(e) {
    e.preventDefault()
    const inputName = document.querySelector('#inputName')
    inputName.style.display = 'flex'
    addPatientBtn.style.display = 'block'
}
function consultPatient() {
    patients.splice(0, 1)
    nextPatient()

    document.querySelector('.waitingList').firstChild.remove()

    console.log(patients)
}

function addPatientToList() {
    position++
    let patient = ''
    const ul = document.querySelector('.waitingList')
    const createLi = document.createElement('li')
    patients.forEach((patientName,) => {
        patient = ` ${position}º ${patientName} ${hour}:${minutes}`
        createLi.innerHTML = patient
        ul.appendChild(createLi)

    })
}


function showListPatient() {
    const waitingList = document.querySelector('.waitingList')
    waitingList.classList.toggle('waitingList2')
    const list = document.querySelector('#list')

    if (waitingList.className != 'waitingList') {
        list.textContent = 'Fechar lista de espera'
        waitingList.style.display = 'block'
    } else {
        list.textContent = 'Visualizar lista de espera'
        waitingList.style.display = 'none'
    }
}

cpmspçe
function newPatientAddedMessage() {
    const form = document.querySelector('form')
    const span = document.createElement('span')
    span.innerText = `Paciente adicionado à lista de espera ${hour}:${minutes}`
    form.appendChild(span)
    setTimeout(() => {
        document.querySelector('span').remove()
    }, 2000)
}

function nextPatient() {
    if (patients.length == -1) {
        alert('Sem pacientes na lista')
        return
    }
    else {

        const nextPatient = document.querySelector('#nextPassword')
        password++
        if (password < 10) {
            password = `0${password}`
        }
        audio.play()
        nextPatient.innerText = `Senha: ${password}`
        console.log(password)
    }

}
function resetPass() {
    const confirmation = confirm('TEM CERTEZA QUE DESEJA REINICIAR AS SENHAS?')
    if(confirmation){
        position = 0
        password = 0
        const nextPatient = document.querySelector('#nextPassword')
        nextPatient.innerText = `Senha: 0${password}`
    }
    
}
const result = 5
console.log(result)
import {refs} from '../../refs/refs';
import {getAllContacts, postContact} from '../../api/api';
import {data} from '../../data/data'

const contact = {
    name: '',
    number: '',
};

getAllContacts()
.then()
.then(() => console.log(data.contacts))// list_ read ul li

getAllContacts();

const onHandleInput = (e) => {
    //console.log(e.target);
    const {name, value} = e.target;
    contact[name] = value;
    // console.log(contact);
};

const onHandleSubmit = (e) => {
    e.preventDefault();
    postContact(contact)
    .then(() => refs.contactForm.reset());//обнуление формы

}

refs.contactForm.addEventListener('input', onHandleInput);
refs.contactForm.addEventListener('submit', onHandleSubmit);

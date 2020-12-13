import {data} from '../data/data';
import {refs } from '../refs/refs';

const basesurl = 'https://module-12-1610c-default-rtdb.firebaseio.com';

export const getAllContacts = () => {
    loadingOnStart()
    return fetch(`${basesurl}/contacts.json`)
    .then(response => response.json())
    .then(response => {
        //console.log('response :>>', response);
        const contactsArray = [];
        for (const key in response) {
            if (response.hasOwnProperty(key)) {
                //console.log('key :>>', key);
                contactsArray.push({id: key, ...response[key]})
            }
        }
        //console.log(contactsArray);
        data.contacts = [...contactsArray];
        console.log(data.contacts);
    })
    //.catch(error => console.log(error))
    .finally(loadingOnFinish)
};

export const  postContact = (contact) => {
    loadingOnStart();
    return fetch(`${basesurl}/contacts.json`, {
        method: 'POST',
        body: JSON.stringify(contact),// то, что хотим отправить на firebase
        //body: contact,
        headers: {
            'Content-Type':'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            data.contacts = [...data.contacts, {...contact, id: response.name}];
            
            console.log(data);
            console.log(data.contacts);
        })
        .catch(error => console.log(error))
        .finally(loadingOnFinish)
};

const loadingOnStart = () => {
    refs.loader.innerHTML = '...loading';
};

const loadingOnFinish = () => {
    refs.loader.innerHTML = '';
};

const setError = (error) => {
    refs.loader.innerHTML = error;
};

const resetError = () => {
    refs.loader.innerHTML = '';
};
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl(); 

export function getUsers() {
    return get('users');
}

export function deleteUser(id) { 
    return del(`users/${id}`);
}
function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError)
}

// can't call function delete since it's a reserved word
function del(url) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    return console.log(error); // es-lint-disable-line no-console 
}
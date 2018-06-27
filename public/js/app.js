const CreateUser = document.querySelector('.create-user');

CreateUser.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = CreateUser.querySelector('.username').value;
    const password = CreateUser.querySelector('.password').value;
    console.log('username: ', username, 'Passsword: ', password);
    postRequest('/createUser', {username, password});
});


/**
 * Post
 */
function postRequest (path, data) {
    const contentData = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
  return window.fetch(path, contentData);
}
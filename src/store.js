var UserClass = {
    createUser ({username, password}) {
        console.log('Add user ${username} with password ${password}');
        return Promise.resolve();
    }
};

module.exports = UserClass;
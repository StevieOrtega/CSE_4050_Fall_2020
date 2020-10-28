//get data
db.collection('guides').get().then(snapshot => {
    console.log(snapshot.docs)
});



auth.onAuthStateChanged(user => {
    if(user){
        console.log('user logged in', user);
    }
    else {
        console.log('user logged out');
    }
});


//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
    e.preventDefault();

    //get user info
    const email =signupForm['signup-email'].value;
    const password =signupForm['signup-password'].value;


    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#signup-form');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });

});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});


//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();

    })
})
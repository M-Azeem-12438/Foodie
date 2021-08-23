 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBPNZAFpDCFGy75b7QnFr7mUuNGz2gVU3A",
    authDomain: "react-todo-36a32.firebaseapp.com",
    projectId: "react-todo-36a32",
    storageBucket: "react-todo-36a32.appspot.com",
    messagingSenderId: "416859033435",
    appId: "1:416859033435:web:7114e25a861ef428b1547e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    

  }


  //signOut

  function signOut(){
    // auth.signOut();
    // alert("SignOut Successfully from System");
    window.location.href="index.html"
    
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);
     window.location.href="main.html";
     auth.signOut();

    }else{
      // alert("No Active user Found")
    }
  }) 
const firebaseConfig = {
  apiKey: "AIzaSyDf55qboPcSgHVTlWsxcSPHck7gibumS7M",
  authDomain: "ap-c101-adv-1-4.firebaseapp.com",
  projectId: "ap-c101-adv-1-4",
  storageBucket: "ap-c101-adv-1-4.appspot.com",
  messagingSenderId: "798228784447",
  appId: "1:798228784447:web:002b3f667e1ecf21f0df8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}



// Using the Fetch API with and without Arrow functions

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternalApi);


// Get local text file data
// function getText() {
//
//   // Fetch uses promises
//   fetch('text.txt')
//   .then(function(res) {
//     return res.text();
//   })
//   .then(function(data) {
//     console.log(data);
//     document.getElementById('output').innerHTML = data;
//   })
//   .catch(function(err) {
//     console.log(err);
//   })
// }

// Get local text file data using arrow functions
function getText() {

  // Fetch uses promises
  fetch('text.txt')
  .then(res => res.text())
  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}



// Get local JSON data
// function getJson() {
//
//   // Fetch uses promises
//   fetch('posts.json')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     let output = '';
//     data.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.getElementById('output').innerHTML = output;
//   })
//   .catch(function(err) {
//     console.log(err);
//   })
// }

// Get local JSON data using arrow functions
function getJson() {

  // Fetch uses promises
  fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}


// Get External API data
// function getExternalApi() {
//
//   // Fetch uses promises
//   fetch('https://api.github.com/users')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(data) {
//     console.log(data);
//     let output = '';
//     data.forEach(function(user) {
//       output += `<li>${user.login}</li>`;
//     });
//     document.getElementById('output').innerHTML = output;
//   })
//   .catch(function(err) {
//     console.log(err);
//   })
// }



// Get External API data using arrow functions
function getExternalApi() {

  // Fetch uses promises
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(function(user) {
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

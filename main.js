// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Add .hidden class to error message
let error = document.querySelector('#modal');
error.className = "hidden";

// Add eventListener to empty likeGlyph
const likeGlyph = document.querySelectorAll('.like-glyph');
likeGlyph.forEach(function (likeGlyph) {
  likeGlyph.addEventListener('click', function () {
    mimicServerCall()
      .then(res => {
        console.log(res);
      })
      //When the "server" returns a failure status:
      // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
      .catch(issue => {
        // Display the server error message in the modal
        error.textContent = issue.toUpperCase();
        console.log(issue)
        // Display the error modal by removing the .hidden class
        error.classList.remove('hidden')
        setTimeout(function(){
          // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
          error.className = "hidden"
        }, 3000)
        // Perform frontend actions based on the error
      });
  });
});







// const likeGlyphs = document.querySelectorAll('.like-glyph');

// // Add a click event listener to each "like-glyph" element
// likeGlyphs.forEach(function (likeGlyph) {
//   likeGlyph.addEventListener('click', function () {
//     // Invoke mimicServerCall when a "like-glyph" element is clicked
//     mimicServerCall()
//       .then(function (response) {
//         // Handle a successful response here
//         console.log('Server response:', response);
//         // Perform frontend actions based on the response
//       })
//       .catch(function (error) {
//         // Handle an error if mimicServerCall fails
//         console.error('Error:', error);
//         // Perform frontend actions based on the error
//       });
//   });
// });




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

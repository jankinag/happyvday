document.getElementById('openBoxBtn').addEventListener('click', function() {
  var box = document.getElementById('box');
  box.style.display = 'block'; // Display the box
  var text = document.querySelector('.text');
  text.style.display = 'block'; // Display the text
  var openBoxBtn = document.getElementById('openBoxBtn');
  openBoxBtn.style.display = 'none'; // Hide the button
});
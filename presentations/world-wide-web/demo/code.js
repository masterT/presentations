window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('button').addEventListener('click', function (event) {
    var name = document.getElementById('name').value
    alert('Hello ' + name + '!');
  })
});

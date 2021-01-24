(function () {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.setRequestHeader("x-csrf-token", _csrfToken);  
  xhr.open("POST", '/api/promotions/3/cancel', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({}));
})();

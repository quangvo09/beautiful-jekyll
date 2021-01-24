(function () {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", '/api/promotions/3/cancel', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({}));
})();

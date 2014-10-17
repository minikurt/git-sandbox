function informa () {
  console.log('He terminado.');
}

(function ( i, callback ) {
  for (var j = 1; j <= i; j++)
    {
      window.alert('Soy el número' + j);
    }
    informa();
})(10, informa);

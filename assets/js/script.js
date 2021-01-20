$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('#enviarCorreo').click(function () {
    alert('El correo fue enviado correctamente...');
  });

  $('#receipts > .row h5').on('dblclick', function () {
    $(this).css('color', 'red');
  });

  $('#related > .row > div > .card img').click(function () {
    $('#related > .row > div > .card .card-body').toggle();
  });
});

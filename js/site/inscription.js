window.Parsley.on('form:success', function() {
  $('#info-envoi').html("Votre inscription a &eacute;t&eacute; enregistr&eacute;e. Nous vous contacterons bient&ocirc;t.");
  $('#inscription_form').hide();
})

$(document).ready(function(){
  var $l = $('.langages');
  var $cdigitales = $('.connaissancesdigitales');
  var $cdesign = $('.connaissancesdesign');

  $l.change(function(e){
    if( $('#connaissance12').is(':checked') || $('#connaissance13').is(':checked')){
      $('#langages').prop('required',true);
    } else {
      $('#langages').prop('required',false);
    }
  });

  $cdigitales.change(function(e){
    if( $('#connaissance24').is(':checked') ){
      $('#connaissance2a').prop('required',true);
    } else {
      $('#connaissance2a').prop('required',false);
    }
  });

  $cdesign.change(function(e){
    if( $('#connaissance35').is(':checked') ){
      $('#connaissance3a').prop('required',true);
    } else {
      $('#connaissance3a').prop('required',false);
    }
  });
  $('#date').datepicker({
      format: "dd MM yyyy",
      startView: 2,
      language: "fr",
      autoclose: true
  });
});

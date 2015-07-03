var jour = 0,
    mois = 0,
    annee = 1980,
    selJour = document.getElementById('jour'),
    selMois = document.getElementById('mois'),
    selAnnee = document.getElementById('annee'),
    anneeOk = false,
    moisOk = false,
    valAnnee = false,
    valMois = false;


for (var i = 1; i <= 12; i++) {
  var monOption = document.createElement('option');
  monOption.text = mois + i;
  monOption.value = mois + i;

  selMois.options[i] = monOption;
}

for (var i = 1; i <= 80; i++) {
  var monOption = document.createElement('option');
  monOption.text = annee + i;
  monOption.value = annee + i;

  selAnnee.options[i] = monOption;
}

selAnnee.onchange = function () {
  anneeOk = this.selectedIndex !== 0;
  valAnnee = parseInt(this.options[this.selectedIndex].value, 10) || false;
  if (anneeOk && moisOk) {
    afficherJours();
  }
};

selMois.onchange = function () {
  moisOk = this.selectedIndex !== 0;
  valMois = parseInt(this.options[this.selectedIndex].value, 10) || false;
  if (anneeOk && moisOk) {
    afficherJours();
    selJour.disabled = false;
  } else {
    selJour.disabled = true;
  }
};

function afficherJours() {
  var nbJours = 32 - (new Date(valAnnee, valMois - 1, 32)).getDate();
  for (var i = 1; i <= 31; i++) {
    if (i <= nbJours) {
      var monOption = document.createElement('option');
      monOption.text = jour + i;
      monOption.value = jour + i;
      selJour.options[i] = monOption;
    } else {
      selJour.options[i] = null;
    }
  }
}

// pour formulaire
function postToGoogle() {
  var valid = true;

  // formulaire inscription
  if ($('#inscription_form').length > 0){
    $('#inscription_form').find("input", "textarea").each(
      function(i, elm){
        if (elm.value === ""){
          if ((elm.id !== "langages")
          &&  (elm.id !== "connaissance2a")
          &&  (elm.id !== "connaissance3a")){
            console.log(elm);
            valid = false;
          }
        }
      }
    );

    console.log(valid);
    valid=valid && postRegisterToGoogle();
    console.log(valid);

    if (valid){
      $('#info-envoi').html("Message bien envoyé!");
      $('#inscription_form').hide();
    }
  }

  // formulaire contact
  if ($('#contact_form').length > 0){
    $('#contact_form').find("input", "textarea").each(
      function(i, elm){
        if (elm.value === ""){
          valid = false;
        }
      }
    );

    if (valid){
      $('#info-envoi').html("Message bien envoyé!");
      $('#contact_form')[0].reset();
    }
  }

}

function postRegisterToGoogle() {
  if(! $('#connaissance11').prop("checked") &&
    $('#langages').val().trim() === "") {
      return false;
  }

  if($('#connaissance24').prop("checked") &&
    $('#connaissance2a').val().trim() === "") {
      return false;
  }

  if($('#connaissance35').prop("checked") &&
    $('#connaissance3a').val().trim() === "") {
      return false;
  }

  return true;
}

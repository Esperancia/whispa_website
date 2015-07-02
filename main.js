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
  $('#info-envoi').html("Message bien envoyé!");
  console.log('insc_form:', $('#inscription_form'), 'contact_form:', $('#contact_form'));
  if ($('#inscription_form').length > 0){
    $('#inscription_form')[0].reset();
  }
  if ($('#contact_form').length > 0){
    $('#contact_form')[0].reset();
  }
}

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

// pour formulaire contact
function postContactToGoogle() {
    var name = $('#nom').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var info = $('#info-envoi');

    $.ajax({
        url: "https://docs.google.com/forms/d/1Bo0Gbaa4lKh_ytG1ZQIxSzbdSZWCQ20htZQ2dARlT7g/formResponse",
        data: {
            "entry.1896512487": name,
            "entry.945291491": email,
            "entry.178754131": message
        },
        type: "POST",
        crossDomain: true,
        dataType: "xml",
        statusCode: {
            0: function () {
                $('#nom').val("");
                $('#email').val("");
                $('#message').val("");
                info.html("Message bien envoyé!");
            }
        }
    });
}


// pour formulaire inscription
function Suscription() {
    // var nom = $('#nom').val();
    // var sexe = $('#sexe').val();
    // var email = $('#email').val();
    // var telephone = $('#email').val();
    // var message = $('#message').val();
    var info = $('#info-envoi');
    var data = {};

    $('#inscription').find('input, select, textarea').each(function () {
        data[this.getAttribute('name')] = this.value;
    })
    console.log("data:", data);

    $.ajax({
        url: "https://docs.google.com/forms/d/1XCdpNfvBhK7wsCa_2rdJbMAgkTjhSVriKOz_uk_rBeQ/formResponse",
        data: data,
        type: "POST",
        crossDomain: true,
        dataType: "xml",
        statusCode: {
            0: function () {
                info.text = "Message bien envoyé!";

                $('#inscription').find('input, select, textarea').each(function () {
                    // this.val("");
                })

                info.html(info.text);

            }
        }
    });
}

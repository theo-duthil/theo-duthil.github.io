// Initialisation EmailJS
emailjs.init("HYCA9sSsc1dkhCAUC");

// Fonction pour échapper les caractères spéciaux
function escapeHTML(str) {
    return str.replace(/[&<>"'\/]/g, function (match) {
        switch (match) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case "'": return '&#x27;';
            case '/': return '&#x2F;';
        }
    });
}

// Gestion de l'envoi du formulaire
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Empêche le rechargement de la page

    // Récupération des données du formulaire et échappement des caractères
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    name.value = escapeHTML(name.value);
    email.value = escapeHTML(email.value);
    subject.value = escapeHTML(subject.value);
    message.value = escapeHTML(message.value);

    // Envoi du formulaire via EmailJS
    emailjs.sendForm('service_3odu53f', 'template_45qelxw', document.getElementById('contact-form'))
    .then(function(response) {
        console.log("Réponse d'EmailJS : ", response);
        alert("Message envoyé avec succès ! Merci de m'avoir contacté.");
    }, function(error) {
        console.log("Erreur d'envoi : ", error);
        console.error('Erreur lors de l\'envoi du message :', error);  // Affichage des erreurs dans la console
        alert("Désolé, il y a eu un problème lors de l'envoi du message. Veuillez réessayer.");
    });
    
});






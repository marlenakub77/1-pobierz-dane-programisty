console.log('pobierz-dane-programisty');

$(document).ready(function() {   
    
    $('#get-data').click(function() {
    console.log('#get-data');

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php').done(function(data) {
        console.log(data);
      
        let divId = document.createElement('div');
        $(divId).attr('id', 'dane-programisty');
        $(divId).append(`Post ID: imię ${data.imie}, nazwisko ${data.nazwisko}, zawód ${data.zawod}, firma ${data.firma}`);
        // lub
        // $(divId).append(`Post ID: ${data.nazwisko}`);
        // $(divId).append(`Post ID: ${data.zawod}`);
        // $(divId).append(`Post ID: ${data.firma}`);

        $('body').append(divId);


        console.log(divId);
        });
    });
});



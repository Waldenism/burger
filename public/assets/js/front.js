$('#addBurgerBtn').on('click', function(e) {
	e.preventDefault();

	var burgerName = $('#name').val().trim();

	$.ajax("/burgers", {
      type: "POST",
      data: {burger_name:burgerName}
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );

});

$('devouredBtn').on('click', function(e){
	e.preventDefault();

	$.ajax("", {

	}).then(
		function() {
			console.log('devoured burger');
			location.reload();
		}
	);
	
});
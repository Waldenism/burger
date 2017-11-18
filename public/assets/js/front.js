$('#addBurgerBtn').on('click', function(e) {
	e.preventDefault();
	var burgerName = $('#name').val().trim();

	if (burgerName === '') {
		//err msg
	} else {
		addBurger(burgerName);
		location.reload();
	}
});

$('.devouredBtn').on('click', function(e){
	e.preventDefault();
	var id = $(this).data("id");

	devourBurger(id);
	location.reload();
});

$('.destroyBtn').on('click', function(e) {
	e.preventDefault();
	var id = $(this).data('id');

	destroyBurger(id);
	location.reload();
});

function addBurger(burg) {
	$.ajax({
	  url: '/burgers/make',
      type: "POST",
      data: {burger_name:burg}
    });
};

function devourBurger(burg) {
	$.ajax({
		url: '/burgers/devour',
		type: "PUT",
		data: { burger_name: burg }
	});
};

function destroyBurger(burg) {
	$.ajax({
		url: '/burgers/destroy',
		type: 'PUT',
		data: { burger_name: burg }
	});
};
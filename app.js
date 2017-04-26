// single state object
var state = {
	itemName: '',
};

// state modifier functions
function addItem(state, item) {
	state.itemName = item;
} 

// render functions
function renderNewItem(state, element) {
	var itemHTML = '<li><span class="shopping-item">' + 
		state.itemName + '</span><div class="shopping-item-controls">' +
		'<button class="shopping-item-toggle"><span class="button-label">' +
		'check</span></button> <button class="shopping-item-delete">' +
        '<span class="button-label">delete</span></button></div></li>';
	$(element).append(itemHTML);
}

function toggleChecked(element) {
	$(element).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
}

function deleteItem(element) {	
	$(element).closest('li').remove();
}

// event listeners
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();	
	addItem(state, $('input#shopping-list-entry').val());
	renderNewItem(state, $('.shopping-list'));
	$('input#shopping-list-entry').val('');
});

$('ul').on('click', '.shopping-item-toggle', (function() {
	toggleChecked($(this));
}));

$('ul').on('click', '.shopping-item-delete', (function() {
	deleteItem($(this));
}));


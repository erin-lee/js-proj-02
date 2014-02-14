var $shoppingList = $('.shopping-list'),
  $entry = $('.entry'),
  $item = $('.item'),
  $checked = $('input:checked'),
  arr = [],
  $enter = $('#enter'),
  $remove = $('#remove'),
  $error = $('#error');

$enter.on('click', addItem);

$shoppingList.on('click', 'li', function(e) {
  $this = $(this);
  $this.fadeOut('slow');
  e.preventDefault();
});

// TODO: Need to work on this functionality:
$remove.on('click', removeItem);

function removeItem() {
    $li.each(function(){
     if($li.hasClass('remove'))
     {
      $(this).remove();
     }
  });
}

function addItem(e) {
  input = $entry.val();
  emptyInput = !input.match(/\S/);

  $error.html('');

  // Validate no blank spaces or empty submissions
  if (emptyInput) {
    $error.html('Not a valid entry');
  } else {
    arr.push(input);
    addOrder();
  }

  $entry.focus().val('');
  e.preventDefault();
}

function addOrder() {
  console.log('items now: ' + arr.length);
  num = arr.length;

  $shoppingList.append([
    '<li class="item">',
    '<input type="checkbox", id="item-',
    num,
    '">',
    '<label for="item-"',
    num,
    '>',
    input,
    '</label>',
    '</li>'].join('')
  );

  return false;
}

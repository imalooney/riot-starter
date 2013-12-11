var itemTemplate = $('#templates .item').html();

var newItemHtml = $.render(itemTemplate, { name: 'Dewberry', price: 0.15 });
$('#store').append(newItemHtml);

var items = [
  { name: 'PLUM', price: 3 },
  { name: 'CELERY', price: 0.5 },
  { name: 'SQUASH', price: 2.5 }
];


for (i=0; i<items.length; i++) {
  var item= items[i];
  var newItemHtml = $.render(itemTemplate,{ name: item.name, price: item.price });
  $('#store').append(newItemHtml);
};

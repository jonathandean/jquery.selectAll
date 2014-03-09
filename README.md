jquery.selectall
================

A checkbox named _select-all_ that checks and un-checks all others on the page

```javascript
$('input[name"select-all"]').selectAll();
```

The defaults can be very inefficient. It's better to specify the selector for the group of checkboxes and each row

```javascript
$('input.select-all').selectAll({
  group: 'form.some_form',
  row: 'input.some_inputs'
});
```

You can also specify a callback method for when checkbox change their value

```javascript
$('input.select-all').selectAll({
  onchange: function(checked, unchecked){
    /* do some stuff */
  }
});
```

For example, highlight the checked rows in a table (this "info" class works with twitter bootstrap)

```javascript
$('input.select-all').selectAll({
  onchange: function(checked, unchecked){
    $(checked).closest('tr').addClass('info');
    $(unchecked).closest('tr').removeClass('info');
  }
});
```

As a bonus, throw this in to be able to toggle a checkbox when clicking on its table row

```javascript
$(document).on('click', 'tr', function(e){
  var checkbox = $(this).find('input[type="checkbox"]');
  checkbox.prop('checked', !checkbox.prop('checked'));
  checkbox.trigger('change');
});
```
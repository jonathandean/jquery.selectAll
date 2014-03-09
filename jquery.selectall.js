/**
 * selectAll jQuery plugin by Jonathan Dean (http://jonathandean.com)
 *   With contributions by Brian Cavalier (http://briancavalier.com/)
 *
 * Turns a checkbox into one that selects or deselects other checkboxes on the page
 *
 * Options:
 *   group: Selector specifying a parent element of the checkboxes the selectAll checkbox should manipulate
 *   row: Selector for the checkboxes the selectAll checkbox should manipulate
 *
 * Copyright (c) 2010 Jonathan Dean (http://jonathandean.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 */
(function($, window){
  $.fn.selectAll = function(options){
    /* warning: these defaults are likely to be very ineffecient. try to make them more specific */
    var defaults = {
      group: 'body',
      row: 'input[type=checkbox]',
      onchange: function(checked, unchecked) {}
    }
    ,opts = $.extend(defaults, options)
    ,self = this
    ,checkedItems = opts.row + ":checked"
    ,uncheckedItems = opts.row + ":not(:checked)"
    ;

    function onChange(checked, unchecked) {
      // Fire registered onchange handler
      opts.onchange(checked, unchecked);
    }

    return this.each(function() {
      $(this).bind('change', function(){
        var other_rows = $(opts.group).find(opts.row)
          ,checked = $(this).is(':checked');
        other_rows.attr('checked', checked);
        onChange($(opts.group).find(checkedItems), $(opts.group).find(uncheckedItems));
      });
      $(options.row).bind('change', function() {
        var unchecked = $(opts.group).find(uncheckedItems);
        $(self).attr('checked', (unchecked.length == 0));
        onChange($(opts.group).find(checkedItems), unchecked);
      });
    });
  };
})(jQuery, window);
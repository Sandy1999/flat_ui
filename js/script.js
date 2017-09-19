$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
}); 
/**
 *This calls an end to script for secondary toggle view
 */
$('#year').datepicker({
  dateFormat: 'yy-m-d',
  inline:true,
  onSelect: function(dataText,inst) {
    var year = $(this).datepicker('getdate').getFullYear();
    alert(year);
  }
});
/**
 * 
 */
$( function() {
    $( "#datepicker" ).datepicker({
        format:'yyyy',
        minViewMode:"years",
        maxViewMode:"years",
        autoclose:true,
        viewMode:"years",
        inline:false,
        onSelect: function(dateText, inst){
            var date = new Date(dateText).getFullYear();
           //console.log(date);
             //document.getElementById('datepicker').innerHTML(date);
        }
    });
  } );
$(document).ready(function() {
    var dateToday = new Date();
    $(function() {
        $("#datepicker").datepicker({
            showButtonPanel: true,
            minDate: dateToday
        });
    });

    var current_hour = dateToday.getHours();

    $('#timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        minTime: '10',
        maxTime: '7:00pm',
        defaultTime: current_hour,
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });


    $('#header-res-menu').click(function() {
        $('#header-nav').toggle();
    });
});

/* $(".bt-add-tocart").on('click', function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    //(... rest of your JS code)
    alert('Click');
});
 */
document.querySelector('#bt-add-tocart')
    .onclick = () => {
        console.log('Jueputa');
}
var inp = $('#inputfield')[0]
var events = $.Event('keyup')
events.which = 32
setInterval(function() {
    if ($('.highlight')[0]) {
        inp.focus()
        inp.value = $('.highlight').text()
        $(inp).trigger(events)
    }
}, 100)
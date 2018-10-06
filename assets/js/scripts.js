$(function() {
    console.log('Loaded!');

    Pace.on('done', function() {
        $('.site-border').addClass('show');
    });
});
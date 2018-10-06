$(function() {
    console.log('Loaded!');

    Pace.on('done', function() {
        $('.site-border').show();
        $('.pace .pace-active').hide();
    });
});
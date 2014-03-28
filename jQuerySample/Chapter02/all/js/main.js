// jQuery の初期化
$(function(){
    $('#typo')
    .on('mouseover', function(){
        $(this).stop(true).animate({
            color:'#ebc000',
            backgroundColor:'#ae5e9b'
        },
        500);
    })
    .on('mouseout', function(){
        $(this).stop(true).animate({
            color:'#ffffff',
            backgroundColor:'#3498db'
        },
        500);
    });
    
    $('#typo .inner')
    .css({top:'-100px'})
    .on('click', function(){
        $(this).animate({
            top:'100px'
        },
        1500,
        'swing');
    });
});
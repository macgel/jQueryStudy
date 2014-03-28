// jQuery の初期化
$(function(){
    $('#typo')
    .on('mouseover', function(){
        $(this).css({
            color:'#ebc000',
            backgroundColor:'#ae5e9b'
        });
    })
    .on('mouseout', function(){
        $(this).css({
            color:'',
            backgroundColor:''
        });
    });
    
    $('#typo .inner').on('click', function(){
        $(this).animate({
            opacity:0,
            fontSize:'0px'
        },
        1500);
    });
});
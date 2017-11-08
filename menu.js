$(function(){
    $("#darkmenu li a").click(function(e){
        //e.preventDefault(); //To prevent the default anchor tag behaviour
        var url = this.href;
        $("#main").load(url);
    });
});
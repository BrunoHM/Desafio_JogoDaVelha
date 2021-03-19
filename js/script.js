$(function(){
    
    let jogadas = [];

    const gameData = async () => {
        const response = await fetch('https://pt.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&explaintext&titles=Jogo_da_velha&format=json');
        const responseJson = await response.json();

        Object.keys(responseJson.query.pages).forEach(function(key) {   
            console.log(responseJson.query.pages[key].extract);
            $('#gameInfos').append("<span>"+responseJson.query.pages[key].extract+"</span>");
        });
    }
    gameData();

    $('.quadrado').on('click', function(){
        console.log($('#toggleInfo').text());

        if($('#toggleInfo').text() == "false"){
            $('#gameInfos').toggle();
            $('#toggleInfo').text("true")
        }

        let jogador = $('#jogador').text();
        let cleanId = $(this).attr('id');

        cleanId = cleanId.substring(cleanId.lastIndexOf('-')+1);
        
        if(jogador == 0){
            jogadas[cleanId] = "X"
            $('#jogador').text(1);
        }
        if(jogador == 1){
            jogadas[cleanId] = "O"
            $('#jogador').text(0);
        }
        
        $(this).text(jogadas[cleanId]);
    });

    //function calcVelha(numId){}



});
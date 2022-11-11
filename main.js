function createMatch(player1, hour, player2){
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    
            <strong>${hour}</strong>
      
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.3

function createCard(date, day, games){
    delay += 0.3
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} 
            <span>${day}</span>
        </h2>
        <ul>
            ${games}
        </ul> 
    </div>
    `
}


document.querySelector('#cards').innerHTML= 
    createCard("20/11", "domingo",
        createMatch("qatar", "13:00", "ecuador")
    )+

    createCard("21/11", "segunda",
        createMatch("england", "10:00", "iran") +
        createMatch("senegal", "13:00", "netherlands")+
        createMatch("usa", "16:00", "wales")
    )+

    createCard("22:11", "terça",
        createMatch("argentina", "07:00", "saudi-arabia")+
        createMatch("denmark", "10:00", "tunisia")+
        createMatch("mexico", "13:00", "poland")+
        createMatch("france", "16:00", "australia")
    )+

    createCard("23/11", "quarta",
        createMatch("marocco", "07:00", "croatia") +
        createMatch("germany", "10:00", "japan")+
        createMatch("spain", "13:00", "costa-rica")+
        createMatch("belgium", "16:00", "canada")
    )+

    createCard("24/11" , "quinta",
        createMatch("switzerland", "07:00", "cameroon")+
        createMatch("uruguay", "10:00", "south-korea")+
        createMatch("portugal", "13:00", "ghana")+
        createMatch("brazil", "16:00", "serbia")
        
    ) +

    createCard("25/11", "sexta",
        createMatch("wales", "07:00", "iran")+
        createMatch("qatar", "10:00", "senegal")+
        createMatch("netherlands", "13:00", "ecuador")+
        createMatch("england", "16:00", "usa")
    ) +

    createCard("26/11", "sábado",
        createMatch("tunisia", "07:00", "australia")+
        createMatch("poland", "10:00", "saudi-arabia")+
        createMatch("france", "13:00", "denmark")+
        createMatch("argentina", "16:00", "mexico")
    )+

    createCard("27/11", "domingo",
        createMatch("japan", "07:00", "costa-rica")+
        createMatch("belgium", "10:00", "marocco")+
        createMatch("croatia", "13:00", "canada")+
        createMatch("spain", "16:00", "germany")
    )+

    createCard("28/11", "segunda",
        createMatch("cameroon", "07:00", "serbia")+
        createMatch("south-korea", "10:00", "ghana")+
        createMatch("brazil", "13:00", "switzerland")+
        createMatch("portugal", "16:00", "uruguay")
    )+

    createCard("29/11", "terça", 
        createMatch("ecuador", "12:00", "senegal")+
        createMatch("netherlands", "12:00", "qatar")+
        createMatch("iran", "16:00", "usa")+
        createMatch("wales", "16:00", "england")
    ) +
    createCard("30/11", "quarta",
        createMatch("tunisia", "12:00", "france")+
        createMatch("australia", "12:00", "denmark")+
        createMatch("poland", "16:00", "argentina")+
        createMatch("saudi-arabia", "16:00", "mexico")
    )+

    createCard("01/11", "quinta",
        createMatch("croatia", "12:00", "belgium")+
        createMatch("canada", "12:00", "marocco")+
        createMatch("japan", "16:00", "spain")+
        createMatch("costa-rica", "16:00", "germany")
    )+

    createCard("02/12" , "sexta",
        createMatch("south-korea", "12:00", "portugal")+
        createMatch("ghana", "12:00", "uruguay")+
        createMatch("serbia", "16:00", "switzerland")+
        createMatch("brazil", "16:00", "cameroon")
    )

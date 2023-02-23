const { createApp } = Vue

createApp({
    data() {
        return {
            currentContact: 0,
            newMessage: '',
            contacts: [{
                name: 'BatMan',
                avatar: './img/batman-user.png', 
                visible: true, 
                messages: [ {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?', 
                    status: 'sent'
                    }, {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni', 
                    status: 'sent'
                    },{ 
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                    } ],
                }, {
                name: 'Capitan America',
                avatar: './img/capitanamerica-user.png',
                visible: true,
                messages: [ {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    }, {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    }, {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    } ],
                }, {
                name: 'Hulk',
                avatar: './img/hulk-user.png',
                visible: true,
                messages: [ {
                    date: '28/03/2020 10:10:40',
                    message: 'Doctor Strange va in campagna',
                    status: 'received'
                    }, {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    }, {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                    } ],
                }, {
                name: 'IronMan',
                avatar: './img/ironman-user.png',
                visible: true,
                messages: [ {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    }, {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    } ],
                }, {
                name: 'Flash',
                avatar: './img/flash-user.png',
                visible: true,
                messages: [ {
                    date: '10/01/2020 15:30:55',
                    message:'Ricordati di chiamare Hulk',
                    status: 'sent'
                    }, {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                    } ],
                }, {
                name: 'SuperMan',
                avatar: './img/superman-user.png',
                visible: true,
                messages: [ {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Superman, hai novità?',
                    status: 'sent'
                    }, {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                    }, {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                    } ],
                },{
                name: 'Wolverine',
                avatar: './img/wolverine-user.png',
                visible: true,
                messages: [ {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Tempesta che è il suo compleanno!',
                    status: 'sent'
                    }, {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                    } ],
                }, {
                name: 'Thor',
                avatar: './img/thor-user.png',
                visible: true,
                messages: [ {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                    }, {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                    }, {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                } ], 
            }]
        }
    },
    methods: {
        getConversation(selectedContact) {
            this.currentContact = selectedContact
        },
        sendMessage(currentContact) {
            let newMsg = {
                date: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}),
                message: this.newMessage,
                status: 'sent'
            }

            this.contacts[currentContact].messages.push(newMsg)

            this.newMessage = ''

            function receiveOkMessage(currentContact) {
                let newReceivedMsg = {
                    date: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}),
                    message: 'Ok',
                    status: 'received'
                }
    
                this.contacts[currentContact].messages.push(newReceivedMsg)
            }

            const answerInterval = setInterval(receiveOkMessage(currentContact), 1000) 
        },

    },
    onUpdate() {
        console.log(this.currentContact, receiveOkMessage, answerInterval)
    }
}).mount('#app')
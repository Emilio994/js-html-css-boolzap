// `
/*
Milestone 1:
- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
*/

/*
Milestone 2
- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
- Click sul contatto mostra la conversazione del contatto cliccato
*/

/*
Milestone 3
- Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
- Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/

/*
Milestone 4
-Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
*/

/*
Milestone 5 - opzionale
-Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
-Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 
Consigli utili:
Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
Per gestire le date, può essere utile la libreria day.js
*/


Vue.config.devtools = true;

const app = new Vue ({
    el : '#root',
    data : {
        counter : 0,
        path : 'img/avatar',
        extension : '.jpg',
        myMessage : '',
        mySearch : '',
        user : {
            name :'Username',
            avatar : '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]

    },
    methods : {
        imgPath(contact) {
            return this.path + contact.avatar + this.extension
        },

        setCounter(index) {
            return this.counter = index;
        },

        sendMessage() {
            if (this.myMessage !== '') {
                
                this.contacts[this.counter].messages.push({date : this.myTime(), text : this.myMessage, status : 'sent'})
                this.myMessage = ''; 

                setTimeout(function(){
                app.contacts[app.counter].messages.push({date : app.myTime(), text : 'ok', status : 'received'});
                app.$nextTick(() => {
                    let myIndex = app.contacts[app.counter].messages.length - 1;
                    let myMsg = document.getElementsByClassName('message')[myIndex];
                    myMsg.scrollIntoView();
                });
                }, 1000);
                app.$nextTick(() => {
                    let myIndex = app.contacts[app.counter].messages.length - 1;
                    let myMsg = document.getElementsByClassName('message')[myIndex];
                    myMsg.scrollIntoView();
                });  

            }      
                      
        },

        attachZero(value) {
            return (parseInt(value) < 10 ) ? '0' + parseInt(value) : value.toString();
        },

        myTime() {
            let myDay = this.attachZero(new Date().getDate()); 
            let myMonth = this.attachZero(new Date().getMonth() + 1);
            let myYear = this.attachZero(new Date().getFullYear());
            let myHours = this.attachZero(new Date().getHours());
            let myMinutes = this.attachZero(new Date().getMinutes());
            let mySeconds = this.attachZero(new Date().getSeconds());
            return myDay + '/' + myMonth + '/' + myYear + ' ' + myHours + ':' + myMinutes + ':' + mySeconds; 
        },

        contactSearch(contact) {
            let subject = contact.name.toLowerCase();
            if (this.mySearch == '' || subject.includes(this.mySearch.toLowerCase())) {
                return true;
            }
        },

        deleteMessage(index) {
            this.contacts[this.counter].messages[index].text = 'Message deleted';
            document.getElementsByTagName('button')[index].blur();
        },

    }
        
})













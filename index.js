Vue.createApp({
    data() {
        return {
            message: 'Hello Vue c\est Benjamin qui commennce avec vous !',
            tab: [{
                icon: 'mdi-home',
                showIcon: true,
                isconnect: false,
                autheur: 'Benjamin',
                age: '24',
                showposi: false,
                position: 'Paris',
            }]

        }
    },

    methods: {
        incriseAge() {
            this.tab[0].age++;
        },
        decriseAge() {
            this.tab[0].age--;
        },
        connexion() {
            this.message = 'Bonjour ' + this.tab[0].autheur + ' tu es deja connecté !';
            this.message = 'Aurevoir ' + this.tab[0].icon + ' deconnecte toi !';
        },

    }


}).mount('#app')
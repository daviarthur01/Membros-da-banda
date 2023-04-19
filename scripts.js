members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            ObjetoMembro: {}
        }
    },
    methods: {
        adicionarMembro() {            
                this.members.push(this.ObjetoMembro);
                this.ObjetoMembro = {};
          
        }
    },

};

Vue.createApp(handlingForms).mount('#app');

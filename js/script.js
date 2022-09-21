// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");

const app = new Vue (
    {
        el: '#root',
        data: {
            emails: []
        },
        created(){
            const NUM_MAILS=10

            for(let i=0; i< NUM_MAILS; i++) {

                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    console.log(response);

                    const { data, status } = response;
                    if (status === 200) {
                        this.emails.push(data.response)
                    }
                })
                .catch((error) => {
                    console.log('errore!' , error);
                });  
            }


            
        },
    }
);
const baseUrl = "https://3drestservice20220614103139.azurewebsites.net/api/Printer3D"

Vue.createApp({
    data() {
        return {
          posts: [],
          dataPrinter: {},
          addMessage: "",
          minimumGramPerHour: []
        }
    },
    
    methods: {
        async helperGetPosts() {
            try {
                const response = await axios.get(baseUrl)
                this.posts = await response.data
                this.error = null
            } catch (ex) {
                alert(ex)
            }
        },

        getAllPrinters() {
            this.helperGetPosts(baseUrl)
        },

        async addData(){
            console.table(this.dataPrinter)
            try{
                response = await axios.post(baseUrl, this.dataPrinter)
                this.addMessage = "response" + response.status + "" + response.statusText
                this.getAllPrinters();
            } catch(ex) {
                alert(ex.message)
            }
          },

          async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.dataPrinter = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        sortById() {
            this.posts.sort((p1, p2) => p1.id - p2.id)
        },
        sortByGramPerHourAscending() {
            this.posts.sort((p1, p2) => p1.gramPerHour - p2.gramPerHour)
        },
        sortByGramPerHourDescending() {
            this.posts.sort((p1, p2) => p2.gramPerHour - p1.gramPerHour)
        },
    }
  }).mount("#app")
<!-- src/components/Home.vue -->

  <template>
    <div class="col-sm-6 col-sm-offset-3">
      <div class="well">
        Welcome to this site. We will figure out what we need.
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      getQuote() {
        this.$http
          .get('http://localhost:3001/api/random-quote', (data) => {
            this.quote = data;
          })
          .error((err) => console.log(err))
      }
    }
  }
  </script>
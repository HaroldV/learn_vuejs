Vue.component('common-list',{
  props: ['lists'],
  template:`
    <ul class="list-group">
      <li  v-for="item in lists" class="list-group-item">
        {{item.name}}
      </li>
    </ul>
  `
})

var urlUsers = 'api/user.json'
var urlPosts = 'api/posts.json'

new Vue({

  el:'#main',

  data:{

    posts:[],
    users:[],
    photos:[
      {name: 'foto 1'},
      {name: 'foto 2'},
      {name: 'foto 3'},
    ]

  },

  created: function() {

    this.getUsers();
    this.getPosts();

  },

  methods: {

    getUsers: function () {
      axios.get(urlUsers).then(res => {
        this.users = res.data;
      })
    },

    getPosts: function(){
      axios.get(urlPosts).then(res => {
        this.posts = res.data;
      });
    }

  }

})

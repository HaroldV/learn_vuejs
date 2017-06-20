Vue.component('message',{

  props: ['title','body'],

  data(){
    return {
      isVisible: true
    }
  },

  template:'<article  v-show="isVisible" class="message">\
              <div class="message-header">\
                  <p>{{title}}</p>\
                  <button class="delete pull-right" @click="hideModal">x</button>\
              </div>\
              <div class="message-body">\
                  {{body}}\
              </div>\
            </article>',

  methods:{
    hideModal(){
      this.isVisible = false;
    }
  }
})

new Vue({
  el:'#root',
})

Vue.component('task-list',{

  template:'<div>\
                <task v-for="task in tasks"> {{task.description}}</task>\
            </div>\
  ',

  data(){
    return {
      tasks: [
        { description:'Go to the Store', completed: true},
        { description:'Go to the Room', completed: false},
        { description:'Go to the Car', completed: true},
        { description:'Go to Work', completed: true},
        { description:'Go to the Gym', completed: false},
        { description:'Go to the Street', completed: true},
        { description:'Go to signup', completed: false},
      ]
    }
  }

})

Vue.component('task',{
  template:'<li> <slot> Ola k ace </slot></li>'
})


new Vue ({
  el:'#root'
})

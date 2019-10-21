import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data:{
      items: [
        {task: "Wash Car", priority: "low"},
        {task: "Gone Shopping", priority: "high"},
        {task: "Visited Parents", priority: "low"}
      ],
      newItem: "",
      newPriority: "low"
    },
    methods:{
      addToDo: function(){
        this.items.push({task:this.newItem, priority:this.newPriority});
        this.newItem = "";
        this.newPriority = "";
      }
    }
  });
});

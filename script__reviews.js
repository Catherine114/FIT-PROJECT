Vue.component('task',{
    props: ['data'],
    data() {
      return {
      }
    },
    methods: {
      task_delete(){
        this.$emit('task_done')
      }
    },
    template: `
    <div class="task">
      <div>
        <h3 class="task__title">{{data.title}}</h3>
        <p v-if="data.desc!=''" class="task__desc">{{data.desc}}</p>
      </div>
      <button class="task__delete" @click="task_delete()">❌</button>
    </div>`
  });
  
  var vue = new Vue({
    el: '#app',
    data: {
      string: 'asdasda',
      new_task: {
        title: '',
        desc: ''
      },
      tasks : [
        {
          title: 'Новые тренажеры и хорошая вентилляция!',
          desc: 'Занимаюсь уже месяц, сбоев в расписании не было',
        },
        {
            title: 'Новые тренажеры и хорошая вентилляция!',
            desc: 'Занимаюсь уже месяц, сбоев в расписании не было',
        }
      ]
    },
    methods: {
      add_task(){
        if(this.new_task.title != ''){
          this.tasks.push({
            title: this.new_task.title,
            desc: this.new_task.desc
          });
          this.new_task.title='';
          this.new_task.desc='';
        }
      },
      delete_task(id){
        this.tasks.splice(id,1);
      }
    }
  });
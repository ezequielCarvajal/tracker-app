new Vue({
    el: '#app',
    data () {
    return {
        courses: [],
        title: '',
        time: 0,
        stars: '',
        withOutCourseMsg: 'Aun no has realizado cursos'
    }
    },
    
    computed: {
        totalTime () {
            if(this.courses.length){
                return this.courses.reduce((a, b) => a + parseInt(b.time), 0)
            } 
        }
    },
    methods: {
        addCourse: function (e) {
            e.preventDefault();
            this.courses.push({
                title: this.courses.title,
                time: this.courses.time,
                stars: this.courses.stars
            });
            this.courses.title = '';
            this.courses.time = '';
            this.courses.stars = '';
        }
    }
});


import Vue from 'vue'
import Router from 'vue-router'
import global from './common.vue'
import noFound from './components/noFound'
import index from './components/index.vue'


// student
import student from './components/student/student.vue'
import studentCourse from './components/student/studentCourse.vue'
import chooseClass from './components/student/chooseClass.vue'
import studentGrade from './components/student/studentGrade.vue'


// teacher
import teacher from './components/teacher/teacher.vue'
import teacherCourse from './components/teacher/teacherCourse.vue'
import addCourse from './components/teacher/addCourse.vue'
import addClass from './components/teacher/addClass.vue'
import manageGrade from './components/teacher/manageGrade.vue'
import courseGrade from './components/teacher/courseGrade.vue'


//  admin
import admin from './components/admin/admin.vue'
import schoolInfo from './components/admin/schoolInfo.vue'
import manageStudent from './components/admin/manageStudent.vue'
import manageTeacher from './components/admin/manageTeacher.vue'
import addDepartment from './components/admin/addDepartment.vue'





Vue.use(Router);

var router = new Router({
  routes: [
    // path name component
    {
      path: '*',
      name: 'noFound',
      component: noFound
    },
    {
      path: '/',
      component: index
    },
    {
      path: '/student',
      redirect: '/student/studentCourse',
      component: student,
      children: [
        {
          path: 'studentCourse',
          component: studentCourse
        },
        {
          path: 'chooseClass',
          component: chooseClass
        },
        {
          path: 'studentGrade',
          component: studentGrade
        }
      ]
    },
    {
      path: '/teacher',
      redirect: '/teacher/teacherCourse',
      component: teacher,
      children: [
        {
          path: 'teacherCourse',
          component: teacherCourse
        },
        {
          path: 'addCourse',
          component: addCourse
        },
        {
          path: 'addClass',
          component: addClass
        },
        {
          path: 'manageGrade',
          component: manageGrade
        },
        {
          path: 'manageGrade/:courseID',
          component: courseGrade
        }
      ]
    },
    {
      path: '/admin',
      redirect: '/admin/schoolInfo',
      component: admin,
      children: [
        {
          path: 'schoolInfo',
          component: schoolInfo
        },
        {
          path: 'manageStudent',
          component: manageStudent
        },
        {
          path: 'manageTeacher',
          component: manageTeacher
        },
        {
          path: 'addDepartment',
          component: addDepartment
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    next();
  } else {
    console.log("no token!");
    window.location.href = global.login_location
    next();
  }
})

export default router

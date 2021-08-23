// импортируем шаблон
import lessonTemplates from '../templates/template.hbs'
console.log(lessonTemplates)

import examples from '../templates/examples.hbs'

const lesson = {
  mainTitle: 'module-10',
  themes: [
    {
      id: '1',
      title: 'Плагины и библиотеки',
      examples: ['инструменты: webpack, Babel...', 'Библиотеки: React, Axios...', 'Фреймворки: Vue.js, Angular...'],
    },
    {
      id: '2',
      title: 'Шаблонизатор Handlebars',
    },
    {
      id: '3',
      title: 'JSON',
    },
    { id: '4', title: 'localStorage' },
  ],
}

const examplesArray = lesson.themes[0].examples
console.log(examplesArray)

const template = zzz(lesson)
console.log(template)

const templateExamples = examplesTemplate(examplesArray)

const body = document.querySelector('body')
body.insertAdjacentHTML('afterbegin', template)

// ШАБЛОНЫ

// Webpack: handlebars & handlebars-loader

// 1 импортируем шаблон
import lessonTemplate from '../templates/template.hbs'
import examplesTemplate from '../templates/examples.hbs'
// 2 создаем объект с данными для шаблона
const lesson = {
  mainTitle: 'Module 10',
  themes: [
    {
      id: '1',
      title: 'Плагины и библиотеки',
      examples: [
        'Инструменты: Webpack, Babel...',
        'Библиотеки: React, Axios...',
        'Фреймворки: Vue.js, Angular...',
        'Фреймворки: Vue.js, Angular...',
        'Фреймворки: Vue.js, Angular...',
        'Фреймворки: Vue.js, Angular...',
        'Фреймворки: Vue.js, Angular...',
      ],
    },
    {
      id: '2',
      title: 'шаблонизатор Handlebars',
    },
    {
      id: '3',
      title: 'JSON',
    },
    {
      id: '4',
      title: 'localStorage',
    },
  ],
}
const examplesArray = lesson.themes[0].examples
console.log(examplesArray)

// 3 создаем разметку, вызвав шаблон и передав объект аргументом
const template = lessonTemplate(lesson)
console.log(template)

const templateEx = examplesTemplate(examplesArray)
// console.log(templateEx);

// 4 получаем доступ к элементу, куда будем встраивать сформированный шаблон
const body = document.querySelector('body')
console.log(body)

// 5 встраиваем полченный шаблон
body.insertAdjacentHTML('afterbegin', template)

const firstTitle = document.getElementById('1')
console.log(firstTitle)

firstTitle.insertAdjacentHTML('afterend', templateEx)
// JSON stringify & parse

// localStorage
// setItem(key, value)
// getItem(key)
// removeItem(key)
// clear()

'use strict'
function calendar () {
	let date = new Date()
	let year = date.getFullYear()
	let month = date.getMonth()
	let today = date.getDate()
	let thisDay = date.getDay()
	let firstWeekDay = new Date(year, month, 1).getDay()
	let lastWeekDay = new Date(year, month +1, 0).getDay()
	let lastDay = new Date(year, month +1, 0).getDate()
	let monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
	let weekArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
	thisDay = weekArr[thisDay]
	let thisMonth = monthArr[month]
	
	let table = document.getElementById('tbody')
	let tableRow = document.getElementById('forClone')
	let item = document.querySelectorAll('td')
	let clone = tableRow.cloneNode(true)

	let showDay = document.getElementById ('dateElem')
	let showDate = document.getElementById ('dateView')
	let prevMonth = document.getElementById ('prevMonth')
	let nextMonth = document.getElementById ('nextMonth')
	showDay.innerHTML = today
	showDate.innerHTML = `${thisDay}, <br> ${thisMonth} ${year} года`
	
	
	if (firstWeekDay == 0 || firstWeekDay > 5 && lastWeekDay < 3) {
			table.append(clone)
			item = document.querySelectorAll('td')
	}
	item[today + firstWeekDay -2].className = "bg-light rounded-pill font-weight-bold"

	for (let i = 0; i < lastDay; i++) {
		if (firstWeekDay == 0) {
		item[i + 6].innerHTML = i + 1
		} else {
		item[i + firstWeekDay - 1].innerHTML = i + 1
		item[i].className += ' hover'}
	}
}
calendar()
//тестирование отображения текущей даты 
let toggles = document.querySelectorAll('.toggle')

for (let i = 0; i < toggles.length; i++) { 
  toggles[i].addEventListener('click', function() {
  	if (this.classList.contains('feature') && this.classList.contains('show')) {
	    this.classList.remove('show')
		this.classList.remove('feature')
	} else if (this.classList.contains('feature')) {
		this.classList.add('show')
	} else {
		for (let j = 0; j < toggles.length; j++) {
			toggles[j].classList.remove('show')
			toggles[j].classList.remove('feature')
		}
		this.classList.add('feature')
	}
  })
}

document.addEventListener('DOMContentLoaded', function () {
	const inputs = document.querySelectorAll('.code');

	inputs.forEach((input, index) => {
		input.addEventListener('input', function () {
			const value = this.value;

			if (!/^[0-9]$/.test(value)) {
				this.value = '';
				return;
			}

	
			if (value && index < inputs.length - 1) {
				inputs[index + 1].focus();
			}
		});

		input.addEventListener('keydown', function (event) {
			if (event.key === 'Backspace') {
				if (this.value === '') {
					if (index > 0) {
						inputs[index - 1].focus();
					}
				} else {
					this.value = '';
				}
			}
		});
	});

	
	inputs[0].focus();
});

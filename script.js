function evaluateQuiz() {
	let score = 0;
	let correct = '<span class="correct"> &check; (+4) </span>';
	let incorrect = '<span class="incorrect"> &cross; (-1) </span>';
	if(q1r1.checked || q1r2.checked || q1r3.checked)
		if (q1r3.checked == true) {
			score += 4;
			que1.innerHTML += correct; 
		}
		else {
			score -= 1;
			que1.innerHTML += incorrect; 
		}
	if(q2r1.checked || q2r2.checked || q2r3.checked)
		if (q2r2.checked == true) {
			score += 4;
			que2.innerHTML += correct;
		}
		else {
			score -= 1;
			que2.innerHTML += incorrect;
		}
	if(q3r1.checked || q3r2.checked || q3r3.checked)
		if (q3r3.checked == true) {
			score += 4;
			que3.innerHTML += correct;
		}
		else {
			score -= 1;
			que3.innerHTML += incorrect;
		}
	if(q4r1.checked || q4r2.checked || q4r3.checked)
		if (q4r3.checked == true) {
			score += 4;
			que4.innerHTML += correct;
		}
		else {
			score -= 1;
			que4.innerHTML += incorrect;
		}
	if(q5r1.checked || q5r2.checked || q5r3.checked)
		if (q5r2.checked == true) {
			score += 4;
			que5.innerHTML += correct;
		}
		else {
			score -= 1;
			que5.innerHTML += incorrect;
		}
	console.log("Score =", score);
	let table = `
		<table>
			<caption>Answers</caption>
			<thead>
				<tr>
					<th>Q.No.</th>
					<th>Your Answer</th>
					<th>Correct Answer</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>`+ document.querySelector('input[name="q1"]:checked').value +`</td>
					<td>`+ q1r3.value +`</td>
				</tr>
				<tr>
					<td>2</td>
					<td>`+ document.querySelector('input[name="q2"]:checked').value +`</td>
					<td>`+ q2r2.value +`</td>
				</tr>
				<tr>
					<td>3</td>
					<td>`+ document.querySelector('input[name="q3"]:checked').value +`</td>
					<td>`+ q3r3.value +`</td>
				</tr>
				<tr>
					<td>4</td>
					<td>`+ document.querySelector('input[name="q4"]:checked').value +`</td>
					<td>`+ q4r3.value +`</td>
				</tr>
				<tr>
					<td>5</td>
					<td>`+ document.querySelector('input[name="q5"]:checked').value +`</td>
					<td>`+ q5r2.value +`</td>
				</tr>
			<tbody>
		</table>
	`;
	result.innerHTML = "<h2>Your score:</h2><p class='score'>Your score is " + score + " out of 20!</p>" + table;
	// function showAnswers() { result.innerHTML += table; };

}

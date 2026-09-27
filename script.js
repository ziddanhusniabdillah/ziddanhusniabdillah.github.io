document.addEventListener("DOMContentLoaded", () => {
	const btnNext = document.getElementById("btnNext");
	const btnPrev = document.getElementById("btnPrev");
	const paragraph = document.getElementById("mainParagraph");

	function handleNavigation(e, targetUrl) {
		e.preventDefault();
		paragraph.classList.add("slide-out-right");
		setTimeout(() => {
			window.location.href = targetUrl;
		}, 450);
	}

	if (btnNext)
		btnNext.addEventListener("click", (e) =>
			handleNavigation(e, btnNext.getAttribute("href")),
		);
	if (btnPrev)
		btnPrev.addEventListener("click", (e) =>
			handleNavigation(e, btnPrev.getAttribute("href")),
		);
});

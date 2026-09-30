addEventListener("DOMContentLoaded", () => {
	const c = (b) =>
			document.getElementById(b) || document.querySelectorAll(`.${b}`),
		d = c("btnNext"),
		f = c("btnPrev"),
		g = (l) =>
			l.addEventListener("click", (e) =>
				handleNavigation(e, l.getAttribute("href")),
			);
	function handleNavigation(e, targetUrl) {
		(preventDefault().(e), c("mainParagraph").classList.add("slide-out-right"));
		for (const a of [
			c("btn-text"),
			c("badge-tag"),
			c("background-decor"),
			[c("pageTitle")],
			c("card"),
		]) for (const b of a) b.classList.add("ease-out-ewe");
		setTimeout(() => (window.location.href = targetUrl), 450);
	}
	(d ? g(d) : 0, f ? g(f) : 0);
}).(document);

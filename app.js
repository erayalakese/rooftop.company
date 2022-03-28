const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.scale-up-center');

        if (entry.isIntersecting) {
            square.classList.add('scale-up-center-animation');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('scale-up-center-animation');
    });
});

observer.observe(document.querySelector('.scale-up-center-wrapper'));

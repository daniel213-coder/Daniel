document.getElementById('current-year').textContent = new Date().getFullYear();


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.btn-details').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
        
        const game = this.getAttribute('data-game');
        const gameTitles = {
            'p5': 'Persona 5',
            'p4': 'Persona 4 Golden',
            'p3': 'Persona 3'
        };
        
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s';
        
        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = 'white';
        modalContent.style.padding = '2rem';
        modalContent.style.borderRadius = '10px';
        modalContent.style.maxWidth = '600px';
        modalContent.style.width = '90%';
        modalContent.style.position = 'relative';
        

        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '10px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '1.5rem';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.padding = '0.5rem';
        closeBtn.addEventListener('click', () => {
            modal.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        });
        

        const title = document.createElement('h2');
        title.textContent = gameTitles[game];
        title.style.color = '#e74c3c';
        title.style.marginBottom = '1rem';
        title.style.textAlign = 'center';
        

        const text = document.createElement('p');
        text.textContent = `Здесь будет подробная информация о ${gameTitles[game]}. Эта функция находится в разработке.`;
        text.style.marginBottom = '1.5rem';
        text.style.lineHeight = '1.6';
        

        modalContent.appendChild(closeBtn);
        modalContent.appendChild(title);
        modalContent.appendChild(text);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        

        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    });
});


window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        nav.style.boxShadow = 'none';
    }
});


document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('play', function() {
        document.querySelectorAll('audio').forEach(otherAudio => {
            if (otherAudio !== audio && !otherAudio.paused) {
                otherAudio.pause();
            }
        });
    });
});
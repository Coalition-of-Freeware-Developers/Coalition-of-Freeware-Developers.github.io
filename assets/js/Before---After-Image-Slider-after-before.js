document.addEventListener('DOMContentLoaded', () => {
      const slider = document.querySelector('.slider');
      const beforeImage = document.querySelector('.image-container.before img');
      const sliderWrapper = document.querySelector('.slider-wrapper');
      const infoTexts = document.querySelectorAll('.info-text');

      let isDragging = false;

      slider.addEventListener('mousedown', () => {
        isDragging = true;
        hideInfoTexts();
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const rect = sliderWrapper.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;

        const percentage = Math.max(0, Math.min(offsetX / rect.width, 1));
        const sliderPosition = percentage * 100;

        slider.style.left = `${sliderPosition}%`;
        beforeImage.style.clip = `rect(0, ${percentage * rect.width}px, 400px, 0)`;
      });

      slider.addEventListener('mousedown', hideInfoTexts);
      slider.addEventListener('touchstart', hideInfoTexts);

      function hideInfoTexts() {
        infoTexts.forEach(text => text.classList.add('hidden'));
      }
    });
/**
 * ========================================================
 * NOVELL & JIHAII (BUBUB) - INTERACTIVE BIRTHDAY EXPERIENCE
 * Rich Animations • Audio Synthesizer • Dynamic Interactions
 * ========================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==================== 1. WEB AUDIO API SYNTHESIZER ====================
  // Generates instant, delightful sound effects without needing external files!
  let audioCtx = null;

  function initAudioCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Soft cute pop sound for button clicks & flips
  function playPopSound() {
    try {
      initAudioCtx();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      console.log('Audio sfx error', e);
    }
  }

  // Cheerful chime arpeggio for celebration & wishes
  function playChimeSound() {
    try {
      initAudioCtx();
      if (!audioCtx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = audioCtx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const startTime = now + idx * 0.07;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.2, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    } catch (e) {
      console.log('Chime sfx error', e);
    }
  }

  // Soft wind breath sound for candle blowing
  function playBlowSound() {
    try {
      initAudioCtx();
      if (!audioCtx) return;
      const bufferSize = audioCtx.sampleRate * 0.4;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, audioCtx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.4);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      noise.start();
    } catch (e) {
      console.log('Blow sfx error', e);
    }
  }

  // Sweet crystal bell tone for heart likes
  function playBellSound() {
    try {
      initAudioCtx();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.exponentialRampToValueAtTime(1318.51, now + 0.05); // E6

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {
      console.log('Bell sfx error', e);
    }
  }

  // Crispy French Fries Crunch SFX
  function playCrunchSound() {
    try {
      initAudioCtx();
      if (!audioCtx) return;
      const bufferSize = audioCtx.sampleRate * 0.15;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (audioCtx.sampleRate * 0.04));
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = buffer;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2600, audioCtx.currentTime);
      filter.Q.setValueAtTime(3, audioCtx.currentTime);

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      noise.start();
    } catch (e) {
      console.log('Crunch sfx error', e);
    }
  }

  // Celestial Moon Star Arpeggio SFX
  function playMoonChime() {
    try {
      initAudioCtx();
      if (!audioCtx) return;
      const notes = [1046.50, 1318.51, 1567.98, 2093.00]; // C6, E6, G6, C7
      const now = audioCtx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const start = now + idx * 0.08;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.45);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + 0.45);
      });
    } catch (e) {
      console.log('Moon chime error', e);
    }
  }

  // Sumeru Akademiya Tranquil Chime (Alhaitham)
  function playSumeruChime() {
    try {
      initAudioCtx();
      if (!audioCtx) return;
      const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
      const now = audioCtx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const start = now + idx * 0.1;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + 0.5);
      });
    } catch (e) {
      console.log('Sumeru chime error', e);
    }
  }

  // Grand Birthday Fanfare SFX (Brass & Harp Celebration Arpeggio)
  function playFanfareSound() {
    try {
      initAudioCtx();
      if (!audioCtx) return;
      const notes = [
        { f: 523.25, t: 0.0, d: 0.18 }, // C5
        { f: 659.25, t: 0.11, d: 0.18 }, // E5
        { f: 783.99, t: 0.22, d: 0.22 }, // G5
        { f: 1046.50, t: 0.35, d: 0.55 }, // C6
        { f: 1318.51, t: 0.45, d: 0.65 }  // E6
      ];
      const now = audioCtx.currentTime;
      notes.forEach(({ f, t, d }) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const startTime = now + t;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, startTime);
        gain.gain.setValueAtTime(0.24, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + d);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + d);
      });
    } catch (e) {
      console.log('Fanfare sfx error', e);
    }
  }

  // ==================== 2. FLOATING HEART BURST PARTICLES ====================
  function triggerHeartBurst(x, y, emoji = '💖') {
    const burst = document.createElement('div');
    burst.className = 'floating-heart-burst';
    burst.textContent = emoji;
    burst.style.left = `${x}px`;
    burst.style.top = `${y}px`;
    burst.style.fontSize = `${Math.random() * 14 + 20}px`;
    document.body.appendChild(burst);

    setTimeout(() => {
      if (burst && burst.parentNode) {
        burst.parentNode.removeChild(burst);
      }
    }, 1000);
  }

  // Global click emoji burst removed to prevent visual jitter and distraction
  // triggerHeartBurst is retained for purposeful user interactions (button clicks, rewards)

  // ==================== 3. BACKGROUND CANVAS ====================
  // Animated emoji rain removed to prevent distraction, jitter, and excessive CPU usage
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    canvas.style.display = 'none';
  }

  // ==================== 4. MUSIC PLAYER SYSTEM ====================
  const audioPlayer = document.getElementById('audio-player');
  const vinylBtn = document.getElementById('vinyl-btn');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicPlayBtn = document.getElementById('music-play-btn');
  const musicStatus = document.getElementById('music-status');
  const soundWave = document.getElementById('sound-wave');

  let isPlaying = false;

  function toggleMusic() {
    initAudioCtx();
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }

  function playMusic() {
    if (!audioPlayer) return;
    audioPlayer.play().then(() => {
      isPlaying = true;
      if (vinylBtn) vinylBtn.classList.add('playing');
      if (soundWave) soundWave.classList.add('active');
      if (musicPlayBtn) musicPlayBtn.textContent = '⏸';
      if (musicStatus) musicStatus.textContent = 'Sedang diputar 🎶';
    }).catch(err => {
      console.log('Audio autoplay prevented, user interaction required', err);
    });
  }

  function pauseMusic() {
    if (!audioPlayer) return;
    audioPlayer.pause();
    isPlaying = false;
    if (vinylBtn) vinylBtn.classList.remove('playing');
    if (soundWave) soundWave.classList.remove('active');
    if (musicPlayBtn) musicPlayBtn.textContent = '▶';
    if (musicStatus) musicStatus.textContent = 'Jeda (Klik untuk lanjut) 🎵';
  }

  if (vinylBtn) vinylBtn.addEventListener('click', toggleMusic);
  if (musicToggleBtn) musicToggleBtn.addEventListener('click', toggleMusic);
  if (musicPlayBtn) musicPlayBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusic();
  });

  // ==================== 5. CONFETTI CANNON WRAPPER ====================
  function launchConfettiCelebration() {
    if (typeof confetti === 'function') {
      // Multiple bursts with heart colors
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#ff4d79', '#ff85a1', '#ffd166', '#bda0e8', '#ffffff', '#70d6b6']
      };

      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.4),
        spread: 60
      });

      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.3),
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });

      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.3),
        spread: 120,
        startVelocity: 45,
        decay: 0.92,
        scalar: 1.2
      });
    }
  }

  // ==================== 6. HERO SECTION ACTIONS ====================
  const heartPulseBtn = document.getElementById('heart-pulse-btn');
  if (heartPulseBtn) {
    heartPulseBtn.addEventListener('click', (e) => {
      playChimeSound();
      launchConfettiCelebration();
      const rect = heartPulseBtn.getBoundingClientRect();
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const offsetX = (Math.random() - 0.5) * 60;
          const offsetY = (Math.random() - 0.5) * 60;
          triggerHeartBurst(rect.left + rect.width / 2 + offsetX, rect.top + rect.height / 2 + offsetY, '💖');
        }, i * 80);
      }
    });
  }

  // ==================== 7. BIRTHDAY CAKE SECTION ====================
  const candleFlame = document.getElementById('candle-flame');
  const candleSmoke = document.getElementById('candle-smoke');
  const candleWrap = document.getElementById('candle-wrap');
  const btnBlowCandle = document.getElementById('btn-blow-candle');
  const btnRelightCandle = document.getElementById('btn-relight-candle');
  const wishRevealCard = document.getElementById('wish-reveal-card');
  const btnMoreConfetti = document.getElementById('btn-more-confetti');

  let isCandleLit = true;

  function blowCandle() {
    if (!isCandleLit) return;
    isCandleLit = false;

    playBlowSound();
    if (typeof completeQuest === 'function') completeQuest('candle');

    if (candleFlame) candleFlame.classList.add('extinguished');
    if (candleSmoke) candleSmoke.classList.add('active');

    // Start background song if not yet playing
    if (!isPlaying) {
      playMusic();
    }

    setTimeout(() => {
      playChimeSound();
      launchConfettiCelebration();

      if (wishRevealCard) {
        wishRevealCard.classList.add('show');
        wishRevealCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      if (btnBlowCandle) btnBlowCandle.style.display = 'none';
      if (btnRelightCandle) btnRelightCandle.style.display = 'inline-flex';
    }, 400);
  }

  function relightCandle() {
    isCandleLit = true;
    playPopSound();

    if (candleFlame) candleFlame.classList.remove('extinguished');
    if (candleSmoke) candleSmoke.classList.remove('active');
    if (wishRevealCard) wishRevealCard.classList.remove('show');

    if (btnBlowCandle) btnBlowCandle.style.display = 'inline-flex';
    if (btnRelightCandle) btnRelightCandle.style.display = 'none';
  }

  if (candleWrap) candleWrap.addEventListener('click', blowCandle);
  if (btnBlowCandle) btnBlowCandle.addEventListener('click', blowCandle);
  if (btnRelightCandle) btnRelightCandle.addEventListener('click', relightCandle);
  if (btnMoreConfetti) btnMoreConfetti.addEventListener('click', () => {
    playChimeSound();
    launchConfettiCelebration();
  });

  // ==================== 8. LOVE LETTER ENVELOPE ====================
  const waxSeal = document.getElementById('wax-seal');
  const envelopeCard = document.getElementById('envelope-card');
  const btnFoldLetter = document.getElementById('btn-fold-letter');

  function openEnvelope() {
    playPopSound();
    if (typeof completeQuest === 'function') completeQuest('letter');
    if (envelopeCard) {
      envelopeCard.classList.add('open');
      setTimeout(() => {
        playChimeSound();
        if (!isPlaying) playMusic();
      }, 350);
    }
  }

  function closeEnvelope(e) {
    if (e) e.stopPropagation();
    playPopSound();
    if (envelopeCard) {
      envelopeCard.classList.remove('open');
    }
  }

  if (waxSeal) waxSeal.addEventListener('click', openEnvelope);
  if (envelopeCard) {
    envelopeCard.addEventListener('click', (e) => {
      // Only open if currently closed and not clicking a button inside
      if (!envelopeCard.classList.contains('open')) {
        openEnvelope();
      }
    });
  }
  if (btnFoldLetter) btnFoldLetter.addEventListener('click', closeEnvelope);

  // ==================== 9. POLAROID GALLERY SYSTEM ====================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const polaroidCards = document.querySelectorAll('.polaroid-card');
  const polaroidGrid = document.getElementById('polaroid-grid');
  const btnToggleGallery = document.getElementById('btn-toggle-gallery');
  const toggleGalleryText = document.getElementById('toggle-gallery-text');
  const galleryCounterText = document.getElementById('gallery-counter-text');
  const galleryLoadMoreWrap = document.querySelector('.gallery-load-more-wrap');
  const gallerySection = document.getElementById('gallery-section');

  let isGalleryExpanded = false;

  function updateGalleryDisplay(activeFilter = 'all') {
    let visibleCount = 0;
    const totalCount = polaroidCards.length;

    polaroidCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const isExtra = card.classList.contains('extra-photo');

      if (activeFilter === 'all') {
        if (!isGalleryExpanded && isExtra) {
          card.style.display = 'none';
        } else {
          card.style.display = 'flex';
          visibleCount++;
        }
      } else {
        if (category === activeFilter) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      }
    });

    if (activeFilter === 'all') {
      if (galleryLoadMoreWrap) galleryLoadMoreWrap.style.display = 'block';
      if (galleryCounterText) {
        galleryCounterText.textContent = isGalleryExpanded
          ? `Menampilkan seluruh ${visibleCount} dari ${totalCount} foto kenangan manis ✨`
          : `Menampilkan ${visibleCount} dari ${totalCount} foto kenangan manis ✨`;
      }
      if (toggleGalleryText) {
        toggleGalleryText.textContent = isGalleryExpanded
          ? 'Sembunyikan Sebagian Foto 🌸'
          : `Tampilkan Semua Foto (${totalCount} Momen Indah) ✨`;
      }
    } else {
      if (galleryLoadMoreWrap) galleryLoadMoreWrap.style.display = 'none';
      if (galleryCounterText) {
        galleryCounterText.textContent = `Menampilkan ${visibleCount} foto dari kategori terpilih ✨`;
      }
    }
  }

  // Toggle expand / collapse gallery
  if (btnToggleGallery) {
    btnToggleGallery.addEventListener('click', () => {
      isGalleryExpanded = !isGalleryExpanded;
      if (polaroidGrid) {
        polaroidGrid.classList.toggle('expanded', isGalleryExpanded);
      }
      if (isGalleryExpanded) {
        playChimeSound();
        const rect = btnToggleGallery.getBoundingClientRect();
        triggerHeartBurst(rect.left + rect.width / 2, rect.top, '📸');
      } else {
        playPopSound();
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      const activeTab = document.querySelector('.filter-tab.active');
      const activeFilter = activeTab ? activeTab.getAttribute('data-filter') : 'all';
      updateGalleryDisplay(activeFilter);
    });
  }

  // Filter tabs click
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      playPopSound();
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      updateGalleryDisplay(filter);
    });
  });

  // Initial gallery display setup
  updateGalleryDisplay('all');

  // Like button on polaroids
  const likeButtons = document.querySelectorAll('.btn-like-photo');
  likeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      playBellSound();
      const countEl = btn.querySelector('.like-count');
      if (countEl) {
        let count = parseInt(countEl.textContent, 10) || 0;
        countEl.textContent = count + 1;
      }
      const rect = btn.getBoundingClientRect();
      triggerHeartBurst(rect.left + rect.width / 2, rect.top, '❤️');
    });
  });

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const btnLightboxLove = document.getElementById('btn-lightbox-love');

  let currentPhotoIndex = 0;
  const photoData = [];

  polaroidCards.forEach((card, index) => {
    const img = card.querySelector('.polaroid-img-wrap img');
    const title = card.querySelector('.caption-title');
    const date = card.querySelector('.caption-date');

    if (img) {
      photoData.push({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || '',
        title: title ? title.textContent : 'Momen Berdua',
        caption: date ? date.textContent : ''
      });
    }

    card.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  function openLightbox(index) {
    if (index < 0 || index >= photoData.length) return;
    currentPhotoIndex = index;
    const item = photoData[index];

    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;

    if (lightboxModal) {
      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
    }
    playPopSound();
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      lightboxModal.setAttribute('aria-hidden', 'true');
    }
    playPopSound();
  }

  function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoData.length;
    openLightbox(currentPhotoIndex);
  }

  function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photoData.length) % photoData.length;
    openLightbox(currentPhotoIndex);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); nextPhoto(); });
  if (lightboxPrev) lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); prevPhoto(); });

  if (btnLightboxLove) {
    btnLightboxLove.addEventListener('click', (e) => {
      e.stopPropagation();
      playChimeSound();
      launchConfettiCelebration();
      const rect = btnLightboxLove.getBoundingClientRect();
      triggerHeartBurst(rect.left + rect.width / 2, rect.top, '💖');
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }
  });

  // Expose global helper for marquee filmstrip clicks
  window.openLightboxBySrc = function(src) {
    if (!src) return;
    const cleanSrc = decodeURIComponent(src);
    const targetIndex = photoData.findIndex(p => {
      const pSrc = decodeURIComponent(p.src);
      return pSrc === cleanSrc || pSrc.endsWith(cleanSrc) || cleanSrc.endsWith(pSrc);
    });

    if (targetIndex !== -1) {
      openLightbox(targetIndex);
    } else {
      if (lightboxImg) lightboxImg.src = src;
      if (lightboxTitle) lightboxTitle.textContent = 'Momen Nostalgia Kita 🥰';
      if (lightboxCaption) lightboxCaption.textContent = 'Novell & Jihai';
      if (lightboxModal) {
        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
      }
      playPopSound();
    }
  };

  // ==================== 10. FLIP CARDS INTERACTION ====================
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      playPopSound();
      card.classList.toggle('flipped');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playPopSound();
        card.classList.toggle('flipped');
      }
    });
  });

  // ==================== 11. LOVE METER MACHINE ====================
  const btnCalcLove = document.getElementById('btn-calc-love');
  const meterFill = document.getElementById('meter-fill');
  const meterIndicator = document.getElementById('meter-indicator');
  const meterVerdict = document.getElementById('meter-verdict');

  let isMeasuring = false;

  if (btnCalcLove) {
    btnCalcLove.addEventListener('click', () => {
      if (isMeasuring) return;
      isMeasuring = true;
      playPopSound();

      if (meterVerdict) meterVerdict.classList.remove('show');
      if (meterFill) meterFill.style.width = '0%';
      if (meterIndicator) meterIndicator.textContent = '0%';

      btnCalcLove.disabled = true;
      btnCalcLove.textContent = 'Menghitung cinta... 💓';

      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 14) + 6;
        if (progress > 100) progress = 100;

        playPopSound();
        if (meterFill) meterFill.style.width = `${progress}%`;
        if (meterIndicator) meterIndicator.textContent = `${progress}%`;

        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Overload state!
            if (meterIndicator) meterIndicator.textContent = '9999999% 🔥';
            if (meterVerdict) meterVerdict.classList.add('show');
            playChimeSound();
            launchConfettiCelebration();

            btnCalcLove.disabled = false;
            btnCalcLove.textContent = 'Ukur Lagi! 💖';
            isMeasuring = false;
          }, 300);
        }
      }, 100);
    });
  }

  // ==================== 12. BIRTHDAY COUPONS CLAIM SYSTEM ====================
  const claimButtons = document.querySelectorAll('.btn-claim-coupon');
  claimButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      playChimeSound();
      if (typeof completeQuest === 'function') completeQuest('coupon');

      const couponCard = btn.closest('.coupon-card');
      const couponName = btn.getAttribute('data-coupon') || 'Kupon Hadiah';

      if (couponCard) {
        couponCard.classList.add('claimed');
      }

      const rect = btn.getBoundingClientRect();
      triggerHeartBurst(rect.left + rect.width / 2, rect.top, '🎟️');
      launchConfettiCelebration();

      // Transform button to WhatsApp redeem trigger
      btn.textContent = 'Kirim ke WA Novell 📱';
      btn.style.background = '#25d366';

      btn.onclick = () => {
        const text = encodeURIComponent(`Halo Novell! Aku mau klaim "${couponName}" sekarang yaa sayang! 😋❤️`);
        window.open(`https://wa.me/6289514433486?text=${text}`, '_blank');
      };
    });
  });

  // ==================== 13. MOCHI CAT VIRTUAL PET ====================
  const mochiPet = document.getElementById('mochi-pet');
  const mochiBubble = document.getElementById('mochi-bubble');

  const catDialogues = [
    'Meong! Selamat ulang tahun ke-18 Putri Luna tercinta! 🌙🐾🎂',
    'Happy Sweet 18th Birthday, Ratu Jihan kesayangan Novell! 👑✨',
    'Ini kentang goreng crispy spesial ulang tahun ke-18 buat Jihan! 🍟😋',
    'Kata Alhaitham: "Jihan di usia 18 makin bijak dan paling manis sedunia!" 🍃📖',
    'Warna biru cocok banget sama pesona anggunnya Luna di usia 18! 💙✨',
    'Novell siap nemenin Luna main Genshin sambil ngemil kentang goreng! 🍟🎮',
    'Kata Novell, Luna itu rembulan paling indah di langit malamnya! 🌙💖',
    'Pesan dari Novell: Selamat ulang tahun ke-18, senyum terus yaa sayang! 🥰',
    'Meong! Anak-anak kucing sedunia sepakat kalau Bubub itu tercantik! 🐾',
    'Hari ini Luna ratu 18 tahun, apapun diturutin Novell! 👑💙',
    'Novell sayang Luna 3000%! Ga bakal pernah luntur! 🫶❤️',
    'Cubit pipi Luna dulu boleh gaa? Gemas banget! :3 🐾',
    'Kamu itu rumah dan tempat pulang ternyaman buat Novell! 🏡❤️'
  ];

  let catIndex = 0;

  if (mochiPet) {
    mochiPet.addEventListener('click', () => {
      playBellSound();
      catIndex = (catIndex + 1) % catDialogues.length;
      if (mochiBubble) {
        mochiBubble.textContent = catDialogues[catIndex];
        mochiBubble.style.display = 'block';
        mochiBubble.style.animation = 'none';
        void mochiBubble.offsetWidth; // Trigger reflow
        mochiBubble.style.animation = 'floatSoft 2s ease-in-out infinite';
      }
      const rect = mochiPet.getBoundingClientRect();
      triggerHeartBurst(rect.left + 20, rect.top, '🐾');
    });
  }

  // ==================== 14. WHATSAPP MESSAGE SENDER ====================
  const btnKirimWa = document.getElementById('btn-kirim-wa');
  const pesanInput = document.getElementById('pesan');
  const chipButtons = document.querySelectorAll('.chip-btn');

  // Quick Chips selection
  chipButtons.forEach(chip => {
    chip.addEventListener('click', () => {
      playPopSound();
      const chipText = chip.getAttribute('data-text');
      if (pesanInput) {
        if (pesanInput.value.trim() === '') {
          pesanInput.value = chipText;
        } else {
          pesanInput.value += ' ' + chipText;
        }
        pesanInput.focus();
      }
    });
  });

  if (btnKirimWa) {
    btnKirimWa.addEventListener('click', () => {
      const msg = pesanInput ? pesanInput.value.trim() : '';

      if (!msg) {
        alert('Ketik pesan manismu untuk Novell dulu ya sayang ^^ 💌');
        if (pesanInput) pesanInput.focus();
        return;
      }

      playChimeSound();
      launchConfettiCelebration();

      const encodedMsg = encodeURIComponent(msg);
      const nomor = '6289514433486';
      const waUrl = `https://wa.me/${nomor}?text=Dari%20Jihai%20(Bubub):%20"${encodedMsg}"`;

      window.open(waUrl, '_blank');
    });
  }

  // ==================== 15. HERO SPOTLIGHT CARD INTERACTION ====================
  const heroMainCard = document.getElementById('hero-main-card');
  const heroCompanionBadge = document.getElementById('hero-companion-badge');

  if (heroMainCard) {
    heroMainCard.addEventListener('click', (e) => {
      e.stopPropagation();
      playChimeSound();
      launchConfettiCelebration();
      const rect = heroMainCard.getBoundingClientRect();
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          const rx = rect.left + Math.random() * rect.width;
          const ry = rect.top + Math.random() * (rect.height * 0.6);
          triggerHeartBurst(rx, ry, ['👑', '💖', '✨', '🌸', '🥰'][i % 5]);
        }, i * 80);
      }
    });
  }

  if (heroCompanionBadge) {
    heroCompanionBadge.addEventListener('click', (e) => {
      e.stopPropagation();
      playBellSound();
      const rect = heroCompanionBadge.getBoundingClientRect();
      triggerHeartBurst(rect.left + rect.width / 2, rect.top, '🫶');
      launchConfettiCelebration();
    });
  }

  // ==================== 16. VIDEO CINEMA & REELS THEATER SYSTEM ====================
  const theaterIframePlayer = document.getElementById('theater-iframe-player');
  const theaterPlayer = document.getElementById('theater-main-player');
  const theaterVideoSource = document.getElementById('theater-video-source');
  const theaterNowTitle = document.getElementById('theater-now-title');
  const theaterNowMeta = document.getElementById('theater-now-meta');
  const theaterFooterQuote = document.getElementById('theater-footer-quote');
  const btnTheaterExternal = document.getElementById('btn-theater-external');
  const btnTheaterRestart = document.getElementById('btn-theater-restart');
  const videoFilterTabs = document.querySelectorAll('.video-filter-tab');
  const videoCards = document.querySelectorAll('.video-card');
  const btnPlayCards = document.querySelectorAll('.btn-play-card');

  // Auto-pause background music whenever theater video plays
  if (theaterPlayer) {
    theaterPlayer.addEventListener('play', () => {
      pauseMusic();
      if (typeof completeQuest === 'function') completeQuest('video');
    });
  }

  // Restart active theater video
  if (btnTheaterRestart) {
    btnTheaterRestart.addEventListener('click', () => {
      playPopSound();
      if (typeof completeQuest === 'function') completeQuest('video');
      if (theaterPlayer && theaterPlayer.style.display !== 'none') {
        theaterPlayer.currentTime = 0;
        theaterPlayer.play();
      } else if (theaterIframePlayer && theaterIframePlayer.style.display !== 'none') {
        const cur = theaterIframePlayer.src;
        theaterIframePlayer.src = cur;
      }
    });
  }

  // Play video on Theater Screen (handles both Google Drive cloud iframe & local MP4 video)
  function switchTheaterVideo(opts) {
    pauseMusic();
    if (typeof completeQuest === 'function') completeQuest('video');

    if (theaterNowTitle && opts.title) theaterNowTitle.textContent = opts.title;
    if (theaterNowMeta && opts.meta) theaterNowMeta.textContent = opts.meta;
    if (theaterFooterQuote && opts.quote) theaterFooterQuote.textContent = opts.quote;

    if (opts.type === 'drive') {
      // Pause & hide local player
      if (theaterPlayer) {
        theaterPlayer.pause();
        theaterPlayer.style.display = 'none';
      }
      // Show iframe player & load Google Drive stream
      if (theaterIframePlayer) {
        theaterIframePlayer.style.display = 'block';
        theaterIframePlayer.src = opts.driveEmbed;
      }
      if (btnTheaterExternal && opts.driveLink) {
        btnTheaterExternal.href = opts.driveLink;
        btnTheaterExternal.style.display = 'inline-flex';
      }
    } else {
      // Hide iframe player
      if (theaterIframePlayer) {
        theaterIframePlayer.src = '';
        theaterIframePlayer.style.display = 'none';
      }
      if (btnTheaterExternal) {
        btnTheaterExternal.style.display = 'none';
      }
      // Show local player & play
      if (theaterPlayer && theaterVideoSource) {
        theaterPlayer.style.display = 'block';
        theaterVideoSource.src = opts.src;
        theaterPlayer.load();
        theaterPlayer.play().catch(err => {
          console.log('Video play interaction required', err);
        });
      }
    }

    // Smooth scroll to theater player
    const theaterContainer = document.querySelector('.theater-container');
    if (theaterContainer) {
      theaterContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Card buttons trigger video in theater
  btnPlayCards.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      playPopSound();
      const type = btn.getAttribute('data-type') || 'local';
      const driveEmbed = btn.getAttribute('data-drive-embed');
      const driveLink = btn.getAttribute('data-drive-link');
      const src = btn.getAttribute('data-src');
      const title = btn.getAttribute('data-title');
      const meta = btn.getAttribute('data-meta');
      const quote = btn.getAttribute('data-quote');

      switchTheaterVideo({ type, driveEmbed, driveLink, src, title, meta, quote });
    });
  });

  // Card preview hover: play preview smoothly, pause on leave
  const cardPreviews = document.querySelectorAll('.video-preview-wrap');
  cardPreviews.forEach(wrap => {
    const video = wrap.querySelector('.card-video-el');
    const cardBtn = wrap.closest('.video-card') ? wrap.closest('.video-card').querySelector('.btn-play-card') : null;

    if (video) {
      wrap.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
      });

      wrap.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });

      // Clicking preview plays in theater
      wrap.addEventListener('click', () => {
        if (cardBtn) {
          cardBtn.click();
        }
      });
    }
  });

  // Video Filter Tabs System
  videoFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      playPopSound();
      const filter = tab.getAttribute('data-vfilter');

      videoFilterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      videoCards.forEach(card => {
        const cat = card.getAttribute('data-vcategory');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ==================== 18. LUNA & PERSONAL FAVORITES SYSTEM ====================
  // Theme Toggle: Mode Luna (Celestial Blue) & Blossom Pink
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('jihaikuh_theme');

  function applyTheme(theme) {
    if (theme === 'luna') {
      document.body.classList.add('theme-luna');
      if (themeToggleBtn) {
        themeToggleBtn.querySelector('.theme-toggle-icon').textContent = '🌸';
        themeToggleBtn.querySelector('.theme-toggle-text').textContent = 'Mode Blossom';
      }
    } else {
      document.body.classList.remove('theme-luna');
      if (themeToggleBtn) {
        themeToggleBtn.querySelector('.theme-toggle-icon').textContent = '🌙';
        themeToggleBtn.querySelector('.theme-toggle-text').textContent = 'Mode Luna';
      }
    }
  }

  // Restore saved theme or default to Luna Blue because she loves blue!
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme('luna'); // Default to Luna Blue
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      playPopSound();
      const isLuna = document.body.classList.contains('theme-luna');
      const nextTheme = isLuna ? 'blossom' : 'luna';
      applyTheme(nextTheme);
      localStorage.setItem('jihaikuh_theme', nextTheme);

      // Trigger sparkles
      const rect = themeToggleBtn.getBoundingClientRect();
      triggerHeartBurst(rect.left + rect.width / 2, rect.top, nextTheme === 'luna' ? '🌙' : '🌸');
    });
  }

  // Celestial Moon Widget in Hero
  const celestialMoonBadge = document.getElementById('celestial-moon-badge');
  if (celestialMoonBadge) {
    celestialMoonBadge.addEventListener('click', (e) => {
      e.stopPropagation();
      playMoonChime();
      const rect = celestialMoonBadge.getBoundingClientRect();
      triggerHeartBurst(rect.left + 20, rect.top + 20, '🌙');
      triggerHeartBurst(rect.left + 40, rect.top - 10, '⭐');
      triggerHeartBurst(rect.left + 10, rect.top + 35, '✨');

      if (window.confetti) {
        confetti({
          particleCount: 35,
          spread: 70,
          origin: {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight
          },
          colors: ['#60a5fa', '#38bdf8', '#fde047', '#ffffff']
        });
      }
    });
  }

  // Hero Frame Stickers: French Fries & Alhaitham
  const friesSticker = document.getElementById('hero-fries-sticker');
  if (friesSticker) {
    friesSticker.addEventListener('click', (e) => {
      e.stopPropagation();
      playCrunchSound();
      if (typeof completeQuest === 'function') completeQuest('fries');
      const rect = friesSticker.getBoundingClientRect();
      triggerHeartBurst(rect.left + 20, rect.top, '🍟');
    });
  }

  const alhaithamSticker = document.getElementById('hero-alhaitham-sticker');
  if (alhaithamSticker) {
    alhaithamSticker.addEventListener('click', (e) => {
      e.stopPropagation();
      playSumeruChime();
      const rect = alhaithamSticker.getBoundingClientRect();
      triggerHeartBurst(rect.left + 20, rect.top, '🍃');
      triggerHeartBurst(rect.left + 35, rect.top - 15, '🎧');
    });
  }

  // Luna's Universe Showcase Cards Click Handlers
  const cardLunaMoon = document.getElementById('card-luna-moon');
  if (cardLunaMoon) {
    cardLunaMoon.addEventListener('click', (e) => {
      playMoonChime();
      triggerHeartBurst(e.clientX, e.clientY, '🌙');
      if (window.confetti) {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
          colors: ['#60a5fa', '#fde047', '#ffffff']
        });
      }
    });
  }

  const cardLunaBlue = document.getElementById('card-luna-blue');
  if (cardLunaBlue) {
    cardLunaBlue.addEventListener('click', (e) => {
      playBellSound();
      triggerHeartBurst(e.clientX, e.clientY, '💙');
      triggerHeartBurst(e.clientX + 20, e.clientY - 20, '🌊');
    });
  }

  const cardLunaFries = document.getElementById('card-luna-fries');
  if (cardLunaFries) {
    cardLunaFries.addEventListener('click', (e) => {
      playCrunchSound();
      if (typeof completeQuest === 'function') completeQuest('fries');
      triggerHeartBurst(e.clientX, e.clientY, '🍟');
      triggerHeartBurst(e.clientX + 25, e.clientY - 15, '🐱');
    });
  }

  const cardLunaAlhaitham = document.getElementById('card-luna-alhaitham');
  if (cardLunaAlhaitham) {
    cardLunaAlhaitham.addEventListener('click', (e) => {
      playSumeruChime();
      triggerHeartBurst(e.clientX, e.clientY, '🍃');
      triggerHeartBurst(e.clientX + 25, e.clientY - 15, '📖');
    });
  }

  // ==================== 17. GRAND SURPRISE UNBOXING GATE & QUEST TRACKER ====================
  const surpriseGate = document.getElementById('surprise-gate');
  const gateGiftBox = document.getElementById('gate-gift-box');
  const btnTapUnbox = document.getElementById('btn-tap-unbox');
  const navBtnSurprise = document.getElementById('nav-btn-surprise');
  const questProgressText = document.getElementById('quest-progress-text');
  const questProgressPct = document.getElementById('quest-progress-pct');
  const questProgressFill = document.getElementById('quest-progress-fill');
  const questRewardBanner = document.getElementById('quest-reward-banner');
  const btnClaimReward = document.getElementById('btn-claim-reward');

  let isUnboxing = false;
  const completedQuests = new Set();

  // Prevent auto scroll restoration on page load so view stays at top
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  function lockPageScroll() {
    document.body.classList.add('gate-active');
    document.documentElement.classList.add('gate-active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function unlockPageScroll() {
    document.body.classList.remove('gate-active');
    document.documentElement.classList.remove('gate-active');
  }

  // Ensure scroll is strictly locked initially if gate is active
  if (surpriseGate && !surpriseGate.classList.contains('gate-hidden')) {
    lockPageScroll();
  }

  function unboxGift() {
    if (isUnboxing) return;
    isUnboxing = true;

    // Ensure we are strictly at top 0 while opening animation runs
    window.scrollTo({ top: 0, behavior: 'instant' });

    initAudioCtx();
    playFanfareSound();

    if (gateGiftBox) {
      gateGiftBox.classList.add('opening');
    }

    launchConfettiCelebration();

    // Start background song
    playMusic();

    // Complete first quest
    completeQuest('gift');

    setTimeout(() => {
      if (surpriseGate) {
        surpriseGate.classList.add('gate-hidden');
      }
      unlockPageScroll();
      isUnboxing = false;

      // Cleanly scroll to top so the header and hero show smoothly without jarring jumps
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
  }

  if (gateGiftBox) {
    gateGiftBox.addEventListener('click', unboxGift);
  }

  if (btnTapUnbox) {
    btnTapUnbox.addEventListener('click', (e) => {
      e.stopPropagation();
      unboxGift();
    });
  }

  if (navBtnSurprise) {
    navBtnSurprise.addEventListener('click', () => {
      playPopSound();
      if (surpriseGate) {
        if (gateGiftBox) gateGiftBox.classList.remove('opening');
        surpriseGate.classList.remove('gate-hidden');
        lockPageScroll();
      }
    });
  }

  // Quest Tracker
  function completeQuest(questKey) {
    if (completedQuests.has(questKey)) return;
    completedQuests.add(questKey);

    const itemEl = document.getElementById(`quest-item-${questKey}`);
    if (itemEl) {
      itemEl.classList.add('completed');
      const checkIcon = itemEl.querySelector('.quest-check-icon');
      if (checkIcon) checkIcon.textContent = '✓';
      const actionLink = itemEl.querySelector('.quest-action-link');
      if (actionLink) {
        const badge = document.createElement('span');
        badge.className = 'quest-status-badge';
        badge.textContent = 'Selesai ✨';
        actionLink.replaceWith(badge);
      }
      playBellSound();
    }

    // Update Progress Bar
    const totalQuests = 6;
    const currentCount = completedQuests.size;
    const pct = Math.round((currentCount / totalQuests) * 100);

    if (questProgressText) {
      questProgressText.textContent = `${currentCount} dari ${totalQuests} Terbuka`;
    }
    if (questProgressPct) {
      questProgressPct.textContent = `${pct}%`;
    }
    if (questProgressFill) {
      questProgressFill.style.width = `${pct}%`;
    }

    // Check if 100% completed
    if (currentCount >= totalQuests) {
      setTimeout(() => {
        if (questRewardBanner) {
          questRewardBanner.classList.add('show');
          questRewardBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        playFanfareSound();
        launchConfettiCelebration();
      }, 500);
    }
  }

  if (btnClaimReward) {
    btnClaimReward.addEventListener('click', () => {
      playFanfareSound();
      launchConfettiCelebration();
      const rect = btnClaimReward.getBoundingClientRect();
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          triggerHeartBurst(rect.left + Math.random() * rect.width, rect.top + Math.random() * rect.height, ['👑', '🌙', '💙', '✨', '💖'][i % 5]);
        }, i * 70);
      }
    });
  }

  // ==================== 14. CREATOR HUG / LOVE INTERACTION ====================
  const btnCreatorHug = document.getElementById('btn-creator-hug');
  if (btnCreatorHug) {
    btnCreatorHug.addEventListener('click', (e) => {
      e.preventDefault();
      playChimeSound();
      launchConfettiCelebration();
      const rect = btnCreatorHug.getBoundingClientRect();
      triggerHeartBurst(rect.left + rect.width / 2, rect.top, '💖');
      triggerHeartBurst(window.innerWidth / 2, window.innerHeight / 2, '🥰');
      
      const originalText = btnCreatorHug.innerHTML;
      btnCreatorHug.innerHTML = '<span class="btn-icon">🫂</span> Pelukan Hangat Terkirim! ❤️';
      btnCreatorHug.style.background = '#10b981';
      btnCreatorHug.style.borderColor = '#10b981';
      setTimeout(() => {
        btnCreatorHug.innerHTML = originalText;
        btnCreatorHug.style.background = '';
        btnCreatorHug.style.borderColor = '';
      }, 3500);
    });
  }

});


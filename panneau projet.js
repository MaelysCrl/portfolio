document.addEventListener('DOMContentLoaded', function () {
  // Submenu buttons
  const submenuLinks = document.querySelectorAll('.submenu li a');
  const showAllBtn = document.getElementById('show-all');
  const showDevBtn = document.getElementById('show-dev');
  const showUxuiBtn = document.getElementById('show-uxui');

  // Portfolio cards
  const allCards = document.querySelectorAll('.cardtest');
  const devCards = document.querySelectorAll('.card-dev');
  const uxuiCards = document.querySelectorAll('.card-uxui');

  // Side panel elements
  const sidePanel = document.getElementById('sidePanel');
  const panelTitle = document.getElementById('panelTitle');
  const panelDescription = document.getElementById('panelDescription');
  const panelVideo = document.getElementById('panelVideo');
  const videoSource = document.getElementById('videoSource');
  const panelBadges = document.getElementById('panelBadges');
  const closePanelBtn = document.getElementById('closePanel');

  function setActiveLink(link) {
    submenuLinks.forEach(submenu => submenu.classList.remove('active')); // Remove 'active' from all links
    link.classList.add('active'); // Add 'active' to the clicked link
  }

  // Show All button event
  showAllBtn.addEventListener('click', function () {
    allCards.forEach(card => card.style.display = 'flex');
    setActiveLink(showAllBtn);
  });

  // Show Dev button event
  showDevBtn.addEventListener('click', function () {
    allCards.forEach(card => card.style.display = 'none');
    devCards.forEach(card => card.style.display = 'flex');
    setActiveLink(showDevBtn);
  });

  // Show UX/UI button event
  showUxuiBtn.addEventListener('click', function () {
    allCards.forEach(card => card.style.display = 'none');
    uxuiCards.forEach(card => card.style.display = 'flex');
    setActiveLink(showUxuiBtn);
  });

  // Portfolio card click events
  document.querySelectorAll('.cardtest').forEach(function (card) {
    card.addEventListener('click', function () {
      const title = this.querySelector('.info h1').innerText; // Get the title of the clicked card
      const sousTitre = this.querySelector('.info .subtitle').innerText; // Get subtitle
      const badges = this.querySelector('.badges').innerHTML; // Get badges
      const videoUrl = this.getAttribute('data-video-url'); // Get custom video URL
      const description = this.getAttribute('description');

      panelTitle.innerText = title; // Set the title in the side panel
      panelSubtitle.innerText = sousTitre;
      panelDescription.innerText = description; // Set the description in the side panel
      panelBadges.innerHTML = badges; // Set badges in the side panel
      videoSource.src = videoUrl; // Set video URL in the side panel
      panelVideo.load(); // Reload video with new source

      sidePanel.classList.add('open'); // Open the side panel
    });
  });

  // Close side panel
  closePanelBtn.addEventListener('click', function () {
    sidePanel.classList.remove('open');
  });
});
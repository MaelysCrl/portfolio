    document.getElementById('accessibilityBtn').addEventListener('click', function () {
      var frame = document.getElementById('accessibilityFrame');
      if (frame.style.display === 'none' || frame.style.display === '') {
        frame.style.display = 'block';
      } else {
        frame.style.display = 'none';
      }
    });

    let clickCountPlusSize = 0;
    let clickCountLessSize = 4;
    const maxClicks = 4;


    document.getElementById('increaseTextSize').addEventListener('click', function () {
      if (clickCountPlusSize < maxClicks) {
        let titleFontSize = getComputedStyle(document.documentElement).getPropertyValue('--title-font-size');
        let subtitleFontSize = getComputedStyle(document.documentElement).getPropertyValue('--subtitle-font-size');
        let textFontSize = getComputedStyle(document.documentElement).getPropertyValue('--text-font-size');
        let otherFontSize = getComputedStyle(document.documentElement).getPropertyValue('--other-font-size');

        let newTitleFontSize = parseFloat(titleFontSize) + 0.13;
        let newSubtitleFontSize = parseFloat(subtitleFontSize) + 0.13;
        let newTextFontSize = parseFloat(textFontSize) + 0.13;
        let newOtherFontSize = parseFloat(otherFontSize) + 0.13;

        document.documentElement.style.setProperty('--title-font-size', newTitleFontSize + 'rem');
        document.documentElement.style.setProperty('--subtitle-font-size', newSubtitleFontSize + 'rem');
        document.documentElement.style.setProperty('--text-font-size', newTextFontSize + 'rem');
        document.documentElement.style.setProperty('--other-font-size', newOtherFontSize + 'rem');

        clickCountPlusSize++;
        clickCountLessSize--;

      } else {
        alert("Le texte est au maximum de grandeur");
      }
    });

    document.getElementById('decreaseTextSize').addEventListener('click', function () {
      if (clickCountLessSize < maxClicks) {
        // Récupère la valeur actuelle de la variable CSS
        let titleFontSize = getComputedStyle(document.documentElement).getPropertyValue('--title-font-size');
        let subtitleFontSize = getComputedStyle(document.documentElement).getPropertyValue('--subtitle-font-size');
        let textFontSize = getComputedStyle(document.documentElement).getPropertyValue('--text-font-size');
        let otherFontSize = getComputedStyle(document.documentElement).getPropertyValue('--other-font-size');

        let newTitleFontSize = parseFloat(titleFontSize) - 0.13;
        let newSubtitleFontSize = parseFloat(subtitleFontSize) - 0.13;
        let newTextFontSize = parseFloat(textFontSize) - 0.13;
        let newOtherFontSize = parseFloat(otherFontSize) - 0.13;
        // Met à jour la variable CSS avec la nouvelle valeur
        document.documentElement.style.setProperty('--title-font-size', newTitleFontSize + 'rem');
        document.documentElement.style.setProperty('--subtitle-font-size', newSubtitleFontSize + 'rem');
        document.documentElement.style.setProperty('--text-font-size', newTextFontSize + 'rem');
        document.documentElement.style.setProperty('--other-font-size', newOtherFontSize + 'rem');

        clickCountPlusSize--
          ;
        clickCountLessSize++;
      } else {
        alert("Le texte est au minimum de grandeur");
      }
    });


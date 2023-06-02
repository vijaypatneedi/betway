setTimeout(() => {
    // Find the username and password input elements
    const usernameInput = document.querySelector('.usernameInput input');
    const passwordInput = document.querySelector('.passwordInput input');
  
    // Set the login credentials
    const username = 'Vj_2301';
    const password = 'Prasham@2022';
  
    // Create an "input" event
    const inputEvent = new Event('input', { bubbles: true, cancelable: false });
  
    // Input the values into the corresponding input fields
    usernameInput.value = username;
    usernameInput.dispatchEvent(inputEvent);
  
    passwordInput.value = password;
    passwordInput.dispatchEvent(inputEvent);

    setTimeout(() => {
        // Find the login form element
        const loginForm = document.querySelector('.loginForm');
      
        // Create a "submit" event
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
      
        // Dispatch the "submit" event on the login form
        loginForm.dispatchEvent(submitEvent);
      }, 2000); // 5000 milliseconds = 5 seconds

      

  }, 5000); // 5000 milliseconds = 5 seconds

  setTimeout(() => {
    console.log("inside eventItemContainer");
    const eventItemContainer = document.querySelector('.eventItemCollection');

    if (eventItemContainer) {
      const eventItems = eventItemContainer.querySelectorAll('.oneLineEventItem');
    
      eventItems.forEach((eventItem) => {
        const teamNameHome = eventItem.querySelector('.teamNameHomeTextFirstPart');
        const teamNameAway = eventItem.querySelector('.teamNameAwayTextFirstPart');
        const matchTiming = eventItem.querySelector('.oneLineDateTime');
        const oddsHome = eventItem.querySelectorAll('.baseOutcomeItem:nth-child(2) .odds');
        const oddsAway = eventItem.querySelectorAll('.baseOutcomeItem:nth-child(3) .odds');
    
        console.log('teamNameHome:', teamNameHome);
        console.log('teamNameAway:', teamNameAway);
        console.log('matchTiming:', matchTiming);
        console.log('oddsHome:', oddsHome);
        console.log('oddsAway:', oddsAway);
    
        if (teamNameHome && teamNameAway && matchTiming) {
          const homeText = teamNameHome.textContent.trim();
          const awayText = teamNameAway.textContent.trim();
          const timingText = matchTiming.textContent.trim();
          const homeOdds = Array.from(oddsHome).map((odd) => odd.textContent.trim());
          const awayOdds = Array.from(oddsAway).map((odd) => odd.textContent.trim());
    
          console.log('Team Names:', homeText, 'vs', awayText);
          console.log('Match Timing:', timingText);
          console.log('Home Odds:', homeOdds);
          console.log('Away Odds:', awayOdds);
          console.log('----------------------');
        }
      });
    } else {
      console.log('Event item container not found.');
    }

// Get all the elements with the class "titleText"
const titleTextElements = document.getElementsByClassName("titleText");

// Loop through the elements and find the one with the text content "Tomorrow"
for (let i = 0; i < titleTextElements.length; i++) {
  const titleTextElement = titleTextElements[i];
  if (titleTextElement.textContent.trim() === "Tomorrow") {
    // This is the "Tomorrow" element, so get its grandparent element and all its siblings
    const grandParentElement = titleTextElement.parentElement.parentElement;
    const grandParentSiblings = [];
    let sibling = grandParentElement.nextElementSibling;
    while (sibling) {
      grandParentSiblings.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    // Do something with the grandparent element and its siblings
    console.log('grandParentElement:' , grandParentElement);
    console.log('grandParentSiblings: ', grandParentSiblings);

    // Loop through grandParentSiblings array and select all anchor tags within each div
    let matchRecords;
    grandParentSiblings.forEach(sibling => {
        matchRecords = sibling.querySelectorAll('.scoreboardInfoNamesWrapper a.scoreboardInfoNames');
        console.log('records: ', matchRecords);
    });
    // dispatch click event
    matchRecords[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));

    break;
  }
}

    
         
  }, 10000); // 5000 milliseconds = 5 seconds
  
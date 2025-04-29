document.addEventListener("DOMContentLoaded", function() {
    let quotes = [
      {
        text: "If you're nothing without the suit, then you shouldn't have it",
        source: "— Iron Man/Tony Stark"
      },
      {
        text: "No matter how buried it gets, or how lost you feel, you must promise me, that you will hold on to hope.",
        source: "— Aunt May, *Spider-Man: Into the Spider-Verse*"
      },
      {
        text: "Anyone can wear the mask. You could wear the mask.",
        source: "— Miles Morales"
      },
      {
        text: "I'm just your friendly neighborhood Spider-Man.",
        source: "— Peter Parker"
      },
      {
        text: "Sometimes to do what's right, we have to be steady and give up the thing we want the most.",
        source: "— Peter Parker, *Spider-Man 2*"
      },
      {
        text: "Everyone keeps telling me how my story is supposed to go. Nah. Imma do my own thing",
        source: "— Miles Morales"
      }
    ];
  
    let random = Math.floor(Math.random() * quotes.length);
    let selected = quotes[random];
  
    document.getElementById("quote-text").textContent = '“' + selected.text + '”';
    document.getElementById("quote-source").textContent = selected.source;
  });
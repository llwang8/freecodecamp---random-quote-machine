//function change() {
  
  $(document).ready(function(){
    $("#newquote").click(function(){
        var color = ["chocolate", "firebrick", "maroon", "crimson", "darkorange", "red", "orange",  "darkgoldenrod",  "goldenrod",  "limegreen", "forestgreen", "olive", "olivedrab", "teal", "peru", "royalblue", "slateblue", "blue", "fuchsia", "purple", "indigo", "navy"];
      var quotes = [
        {"quote": "You have to learn the rules of the game. And then you have to play better than anyone else.", "author": "Albert Einstein"}, 
        {"quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.", "author": "Albert Einstein"},
        {"quote": "The difference between stupidity and genius is that genius has its limits.", "author": "Albert Einstein"},
        {"quote": "It has become appallingly obvious that our technology has exceeded our humanity.", "author": "Albert Einstein"},
        {"quote": "Everyone should be respected as an individual, but no one idolized.", "author": "Albert Einstein"},
        {"quote": "Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.", "author": "William Shakespeare"},
        {"quote": "Some are born great, some achieve greatness, and some have greatness thrust upon them.", "author": "William Shakespeare"},
        {"quote": "Come, gentlemen, I hope we shall drink down all unkindness.", "author": "William Shakespeare"},
        {"quote": "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.", "author": "Buddha"},
        {"quote": "You will not be punished for your anger, you will be punished by your anger.", "author": "Buddha"},
        {"quote": "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.", "author": "Buddna"},
        {"quote": "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves.", "author": "Buddha"},
        {"quote": "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.", "author": "Buddha"},
        {"quote": "You can't depend on your eyes when your imagination is out of focus.", "author": "Mark Twain"},
        {"quote": "A man who carries a cat by the tail learns something he can learn in no other way.", "author": "Mark Twain"},
        {"quote": "I don't like to commit myself about heaven and hell - you see, I have friends in both places.", "author": "Mark Twain"},
        {"quote": "Resistence is futile", "author": "Borg"},
        {"quote": "If women ran the world we wouldn't have wars, just intense negotiations every 28 days.", "author": "Robin Williams"},
        {"quote": "Do right. Do your best. Treat others as you want to be treated.", "author": "Lou Holtz"},
        {"quote": "I'll be back", "author": "Arnold Schwarzenegger"},
        {"quote": "You have to learn the rules of the game. And then you have to play better than anyone else.", "author": "Albert Einstein"},
        {"quote": "Never, never, never give up.", "author": "Winston Churchill"},
        {"quote": "Math is when you don't get the exact amount of change.", "author": "Mathnasium"},
        {"quote": "When aliens come to earth, they will speak math not English.", "author": "Mathnasium"}
      ];
        var randcolor = color[Math.floor(Math.random() * color.length)];
        $(".font-special").css("color", randcolor);
        $(".bg-color").css("background", randcolor);
      //random quote
      var randkey = Math.floor(Math.random() * quotes.length);
      var result = quotes[randkey];
      //$.getJSON("quotes.js", function(result){
      //  $.each(result, function(quote, author){
      document.getElementById("quote").innerHTML = result.quote;
      document.getElementById("author").innerHTML = "- by " + result.author;

      //  });
    //});
      
    });
  });

//}
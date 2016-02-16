//function change() {

  $(document).ready(function(){
    $("#newquote").click(function(){
        var color = ["chocolate", "firebrick", "maroon", "crimson", "darkorange", "red", "orange",  "darkgoldenrod",  "goldenrod",  "limegreen", "forestgreen", "olive", "olivedrab", "teal", "peru", "royalblue", "slateblue", "blue", "fuchsia", "purple", "indigo", "navy"];
      var quotes = [
        {"quote": "You have to learn the rules of the game. And then you have to play better than anyone else.", "author": "Albert Einstein"},
        {"quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.", "author": "Albert Einstein"},
        {"quote": "The difference between stupidity and genius is that genius has its limits.", "author": "Albert Einstein"},
        {"quote": "It has become appallingly obvious that our technology has exceeded our humanity.", "author": "Albert Einstein"},
        {"quote": "I hear and I forget. I see and I remember. I do and I understand.", "author": "孔夫子 Confucius"},
        {"quote": "Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.", "author": "William Shakespeare"},
        {"quote": "邦有道，贫且贱焉，耻也；邦无道，富且贵焉，耻也. <br>In a country well governed, poverty is something to be ashamed of. In a country badly governed, wealth is something to be ashamed of.", "author": "孔夫子 Confucius"},
        {"quote": "Better three hours too soon than a minute too late.", "author": "William Shakespeare"},
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
        {"quote": "When aliens come to earth, they will speak math not English.", "author": "Mathnasium"},
        {"quote": "I love math.  It made human cry.", "author": "Cat"},
        {"quote": "Zoombies eat brains.  Don't worry!  Most of you human have nothing to worry about.", "author": "Cat"},
        {"quote": "Cats are like Music.  It is foolish to try to explain their worth to those who don't appreciate them.", "author": "Cat"},
        {"quote": "The city will look up and shout, 'Save Us!' And I will whisper, 'No.'", "author": "Cat"},
        {"quote": "I hate the human that don't hate the human that I hate.", "author": "Cat"},
        {"quote": "You remind me of one of my chinese human  friends, UG Lee.", "author": "Cat"},
        {"quote": "三人行，必有我师。择其善者而行之，其不善者而改之。<br>If I am walking with two other men, each of them will serve as my teacher. I will pick out the good points of the one and imitate them, and the bad points of the other and correct them in myself.", "author": "孔夫子 Confucius"},
        {"quote": "己所不欲，勿施与人。<br>Do not impose on others what you yourself do not desire.", "author": "孔夫子 Confucius"},
        {"quote": "工欲善其事,必先利其器. The expectations of life depend upon diligence; the mechanic that would perfect his work must first sharpen his tools.", "author": "孔夫子 Confucius"},
        {"quote": "学而不思则罔,思而不学则殆。<br>He who learns but does not think, is lost! He who thinks but does not learn is in great danger.", "author": "孔夫子 Confucius"},
        {"quote": "开卷有益。<br>You cannot open a book without learning something.", "author": "孔夫子 Confucius"},
        {"quote": "学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？<br> Isn't it a pleasure to study and practice what you have learned? Isn't it also great when friends visit from distant places? If one remains not annoyed when he is not understood by people around him, isn't he a sage?", "author": "孔夫子 Confucius"},
        {"quote": "弟子，入則孝，出則弟，謹而信，凡愛眾，而親仁。行有餘力，則以學文。<br>A young man should serve his parents at home and be respectful to elders outside his home. He should be earnest and truthful, loving all, but become intimate with humaneness. After doing this, if he has energy to spare, he can study literature and the arts.", "author": "孔夫子 Confucius"},
        {"quote": "非礼勿视，非礼勿听，非礼勿言，非礼勿动. <br>See no evil, hear no evil, speak no evil, do no evil.", "author": "孔夫子 Confucius"},
        {"quote": "Men are April when they woo, December when they wed. Maids are May when they are maids, but the sky changes when they are wives.", "author": "William Shakespeare"}
      ];
        var randcolor = color[Math.floor(Math.random() * color.length)];
        $(".font-special").css("color", randcolor);
        $(".font-quote").css("color", randcolor);
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
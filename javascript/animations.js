var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var poetryLinks = document.getElementById("poetryLinks");
var poemList = document.getElementById("poemList");
var poem = document.getElementById("poem");
var one = document.getElementById("poem1");
var two = document.getElementById("poem2");
var three = document.getElementById("poem3");
var four = document.getElementById("poem4");
var five = document.getElementById("poem5");
var name = document.getElementById("poemName");
var pos = 0;
var speed = 200; // ms per frame
var increment = 8; // frames per step. Must be >
var inView = true;
var twoInView = false;

function layerOneClassChange()
{
  if (twoInView)
  {
    layerTwoMoveOutOfView();
    layerOneMoveOutOfView();
    inView = true;
    console.log("running this")
  }
  if (inView)
  {
    layerOneMoveOutOfView();
  }
  else
  {
    layerOneMoveInView();
  }
}
function layerOneMoveOutOfView()
{
  layerOne.style.opacity = 0;
  setTimeout(function()
  {
    layerOne.style.display = "none";
  }, 1500);
  poetryLinks.style.opacity = 0;
  inView = false;
}
function layerOneMoveInView()
{
  layerOne.style.display = "block";
  setTimeout(function()
  {
    layerOne.style.opacity = 1;
  }, 500);
  poetryLinks.style.transition = 'opacity 1s ease 1s';
  poetryLinks.style.opacity = 1;
  inView = true;
}
function layerTwoClassChange()
{
    layerOneMoveOutOfView();
    layerTwoMoveInView();
    if (layerTwo.style.display == "block")
    {
      layerTwoMoveInView();
    }

}
function layerTwoMoveInView()
{
    layerTwo.style.display = "block";
    setTimeout(function()
    {
      layerTwo.style.opacity = 1;

    }, 500);
    poemList.style.opacity = 1;
    poem.style.opacity = 1;
    twoInView = true;
}
function layerTwoMoveOutOfView()
{
    setTimeout(function()
    {
      layerTwo.style.display = "none";
    }, 500);
    layerTwo.style.opacity = 0;
    poemList.style.opacity = 0;
    poem.style.opacity = 0;
    inView = false;
    twoInView = false;
}
one.onclick = function ()
{
  document.querySelector(".header").innerHTML = "<h2>FAMILY VALUES</h2>";
  return shuffleLetters(document.querySelector('.poem'),
  {
    text: "What was the color of time, before walkin’ on straight lines. Without structure, one’s luck would pray psyches couldn’t rewind. And maybe they’d find a clan, by leaves and horizon. Or just sit under trees, eating fruit, takin’ lies in. Perhaps the scene was yellow, basking man with uncertainty. Perhaps the light was cold, with man forever worry-free. Likely be it a split screen, from which I took the former. The trees are still fruitful, and I house ‘em in the corner. The wrinkles came with bites, and walls cave in. Where wrongs leave rights, and the paper stays thin. So right away we force, the hoax of foundation. The jokes of love, class, and blind segregation. But blind be it the oracle, seeing truth that there was none. Spending money on his esteem, lovin’ fools like he was one. Eyes lined like Maginot, light comin’ from three suns",
    step: 50,
    fps: 20
  });
}
two.onclick = function ()
{
  document.querySelector(".header").innerHTML = "<h2>NEW LESSONS</h2>";
  return shuffleLetters(document.querySelector('.poem'),
  {
    text: "my caging of everything, when I know I don't need something. I know was it for not a man dead, that swayed you from the feelin' here. I take it you can start the day told like him. And could really part on it, try the lies for the back corner. Feet on the lines and what can see you become, the nigga in the heat, I know you in the street. On a life that you start, with parts of the feelin'. And the street still sees 'em. I don't feel, make it up in the pain, I never be that name. The street to peace, don't need a plot for me. Could king if problem and him, the pain to see some. I know you in for the only hand. I know the real for everything. Niggas on the hungry land. Fuck back. die from it, on the lies on it.",
    step: 20,
    fps: 55
  });
}
three.onclick = function ()
{
  document.querySelector(".header").innerHTML = "<h2>FOUR DIRECTIONS</h2>";
  return shuffleLetters(document.querySelector('.poem'),
  {
    text: "Turning eyes inward, just to see the masses. Questioning everything. Counter hearts depart, from practice. Music deafening noise inside me, as the parent city denies it. Then the city’s voice washed out, by the ones who could afford to buy it. The game’s forever running. These poetics aren’t for you, but the magic in the hat. It’s the ones with frontal views, seeing white when you’re black. So just play the telephone, knowing truth is in the back. But save her please. Power through a deep depression. Let blessings free, the truth in one’s confession. What’s right in life, just might be, the heroes will trump the villains. The loved ones will come before, the lonely one civilian.",
    step: 20,
    fps: 20
  });
}
four.onclick = function ()
{
  document.querySelector(".header").innerHTML = "<h2>SECOND LESSON</h2>";
  return shuffleLetters(document.querySelector('.poem'),
  {
    text: "I was a problem, me the peace of him. I beat yo ass for the hood of me. And I know you start me for me. I know everything, the manners, me up in Atlanta, pain of everything. When I thought street. So many problems, too many. Fuck your face. I beat yo ass for the great. I can be seen, could one for yours be in the lies for me. Interred, die on a life to see your problem. King of dead become the hood, pains enough. I hope the street on the lies could part. I can see every martyr in a distance. I feel like the pain. I like the earth. I know it's in the back of him. I can peace so the street bought. I got the kids, your problems, and great pain. Some could see part of me in the only hand. I got you a mind of kings, don't say that on the street. Stay with it. Beside 'em God you start in when I beat the man in the lies. Not a conversed, for the many could see not her. I know your problem is really everything. See not from me in life's counter, just from the God with him.",
    step: 20,
    fps: 55
  });
}
five.onclick = function ()
{
  document.querySelector(".header").innerHTML = "<h2>NEURAL PRINCE</h2>";
}

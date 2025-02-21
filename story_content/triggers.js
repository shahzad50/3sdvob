function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6R5jh7687kL":
        Script1();
        break;
      case "5tJ1IsXRtPl":
        Script2();
        break;
      case "6XmqBQN7w9x":
        Script3();
        break;
      case "5zVvU1i0ib3":
        Script4();
        break;
      case "5zPVVTlqbq8":
        Script5();
        break;
      case "6Q8zqak4UGC":
        Script6();
        break;
      case "62opvBf23aW":
        Script7();
        break;
      case "5qOA0KOcZon":
        Script8();
        break;
      case "6QzPcuEEpvG":
        Script9();
        break;
      case "6pY1Nqbowxw":
        Script10();
        break;
      case "69164fFpsY0":
        Script11();
        break;
      case "5t2y2y2HxWJ":
        Script12();
        break;
      case "67axBcfv3uu":
        Script13();
        break;
      case "6mobM6EsxyU":
        Script14();
        break;
      case "6QQCTt0cdy8":
        Script15();
        break;
      case "6nhmuLnIHIT":
        Script16();
        break;
      case "6BpM6zEPot3":
        Script17();
        break;
      case "5XXtXR4l8R5":
        Script18();
        break;
      case "6lkqf9rDY7m":
        Script19();
        break;
      case "653RlRkKtde":
        Script20();
        break;
      case "6Gw86ozZtEk":
        Script21();
        break;
      case "66uHQ2537B0":
        Script22();
        break;
      case "6H5CBFw5DAe":
        Script23();
        break;
      case "6a6COBkuiz9":
        Script24();
        break;
      case "5iV055RPhDW":
        Script25();
        break;
      case "5l4xjh9uuT4":
        Script26();
        break;
      case "6Lrb8trvBVP":
        Script27();
        break;
      case "6prM67gQKQN":
        Script28();
        break;
      case "5uIvYeF7WtI":
        Script29();
        break;
      case "6NxxH5aqTAx":
        Script30();
        break;
      case "5uGY8Vyh8cK":
        Script31();
        break;
      case "5wzaiTGnvnD":
        Script32();
        break;
      case "6cH4K5L3zCC":
        Script33();
        break;
      case "5rynfhKQTA3":
        Script34();
        break;
      case "5uRh0mHqW82":
        Script35();
        break;
      case "6RkRws1k35W":
        Script36();
        break;
      case "6epGXCw6szn":
        Script37();
        break;
      case "5uyedqYEIWR":
        Script38();
        break;
      case "5iJEnpcx0IS":
        Script39();
        break;
      case "5nvCOLjQPiZ":
        Script40();
        break;
      case "6HX4irKyid6":
        Script41();
        break;
      case "6Rau54eni8I":
        Script42();
        break;
      case "5Vy7FSI5opl":
        Script43();
        break;
      case "67ba9BCe0AO":
        Script44();
        break;
      case "6ocx60YMWXk":
        Script45();
        break;
      case "5mb4ViLBekg":
        Script46();
        break;
      case "6AjZu1N9L5f":
        Script47();
        break;
      case "5wwkOfVj7hn":
        Script48();
        break;
      case "68FSbp63ix0":
        Script49();
        break;
      case "6q1md3Cd8Va":
        Script50();
        break;
      case "5boM8Qton2J":
        Script51();
        break;
      case "6JXafRsgxr5":
        Script52();
        break;
      case "5cUCnQ4gKVV":
        Script53();
        break;
      case "6jEsc12GuXJ":
        Script54();
        break;
      case "620OyGzGDdt":
        Script55();
        break;
      case "6L93V7TM3pc":
        Script56();
        break;
      case "6XKimokwBcy":
        Script57();
        break;
      case "5yE3b0ENwE7":
        Script58();
        break;
      case "6dWEBhyOY89":
        Script59();
        break;
      case "5dq0UgjqBaK":
        Script60();
        break;
      case "6fqxK5toIEy":
        Script61();
        break;
      case "5lm3UBfNB5z":
        Script62();
        break;
      case "5edxuAvBPLO":
        Script63();
        break;
      case "6btkMO4gz5P":
        Script64();
        break;
      case "6nzSAXIDi7t":
        Script65();
        break;
      case "65QjzHMeVoK":
        Script66();
        break;
      case "5dHmA2ELQAB":
        Script67();
        break;
      case "6ZSqCXbyqhn":
        Script68();
        break;
      case "5wzmJ2jK2Lj":
        Script69();
        break;
      case "6YHsySTNrJq":
        Script70();
        break;
      case "6ejgUysokPH":
        Script71();
        break;
      case "5fKkgjKjgYX":
        Script72();
        break;
      case "5vFLwFg1WWd":
        Script73();
        break;
      case "6L1McjY34Od":
        Script74();
        break;
      case "5jybRKAs5wf":
        Script75();
        break;
      case "6opdwUkBLQx":
        Script76();
        break;
      case "5qyswOgYTYd":
        Script77();
        break;
      case "5Uj4o2sZ6Ir":
        Script78();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6iQZpvgYieX');
const duration = 3000;
const easing = 'ease-out';
const id = '62jjzzg2kPD';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6gRm7gzIFIm');
const duration = 3000;
const easing = 'ease-out';
const id = '68E3x3wQcTJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5iAc0NDDGeW');
const duration = 3000;
const easing = 'ease-out';
const id = '6XpJgMApU1P';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6erPKlCla03');
const duration = 3000;
const easing = 'ease-out';
const id = '5VKdc6F2opd';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5Z25aIsMhAk');
const duration = 3000;
const easing = 'ease-out';
const id = '5tNlrk47Fhm';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('65CWP8hguJc');
const duration = 3000;
const easing = 'ease-out';
const id = '6TiQWUYO1Kz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5YxD6lk68Xq');
const duration = 3000;
const easing = 'ease-out';
const id = '5sZQghA3zep';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5X8zTiv8Qn9');
const duration = 3000;
const easing = 'ease-out';
const id = '66vtHKvTLbR';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('5qWPlzjEI4p');
const duration = 3000;
const easing = 'ease-out';
const id = '6aXvLDyDmP2';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6Ja2ZvZtaeT');
const duration = 3000;
const easing = 'ease-out';
const id = '6SAsrF4WRfU';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('5dNLvqaHzc6');
const duration = 3000;
const easing = 'ease-out';
const id = '6Ia1ICyZBGR';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6llE9xEV1zv');
const duration = 3000;
const easing = 'ease-out';
const id = '6gZjAxYuKfW';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5ynWsI3M3H6');
const duration = 3000;
const easing = 'ease-out';
const id = '6LQ6hLJ1Nsc';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5i2w6FYV3Dq');
const duration = 3000;
const easing = 'ease-out';
const id = '6nGnh3f9L8K';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('5tSIBfxber7');
const duration = 3000;
const easing = 'ease-out';
const id = '6e3PPN5XbSa';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6hPlMgZA8mc');
const duration = 3000;
const easing = 'ease-out';
const id = '6hfMkzKFeah';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6CWA0IdhVGI');
const duration = 3000;
const easing = 'ease-out';
const id = '5sdVFF072ok';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('65E22rhTqJH');
const duration = 3000;
const easing = 'ease-out';
const id = '5jXm4JZaV6f';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('5jOIsnIpMTx');
const duration = 3000;
const easing = 'ease-out';
const id = '6a543NULsZ9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('65fBwCmoart');
const duration = 3000;
const easing = 'ease-out';
const id = '5nnXz6cjeLx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('6F0tsPD7mKN');
const duration = 3000;
const easing = 'ease-out';
const id = '6IJ9rG9fbd5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('5gXbtg9JdkJ');
const duration = 3000;
const easing = 'ease-out';
const id = '6mXT49csj1H';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('6A5OUxuMoBj');
const duration = 3000;
const easing = 'ease-out';
const id = '66UsrOV2oRR';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5iawBkM0LGi');
const duration = 3000;
const easing = 'ease-out';
const id = '6HGu6Ml0et7';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('6FNqKsvACl5');
const duration = 3000;
const easing = 'ease-out';
const id = '64fTulg6Oe6';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('6aSIfiri5W8');
const duration = 3000;
const easing = 'ease-out';
const id = '5v4eB310JSJ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('69QgOi5gO5U');
const duration = 3000;
const easing = 'ease-out';
const id = '5pAGX9K43Xr';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('5vG4KxMjEL3');
const duration = 3000;
const easing = 'ease-out';
const id = '5frlgjiUXNn';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script29 = function()
{
  const target = object('6EFxlVow9fy');
const duration = 3000;
const easing = 'ease-out';
const id = '5VGkdoT4hME';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script30 = function()
{
  const target = object('5ZYDIKy7Oj0');
const duration = 3000;
const easing = 'ease-out';
const id = '5nm4ySNaKg5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script31 = function()
{
  const target = object('6knq5hNI6fi');
const duration = 3000;
const easing = 'ease-out';
const id = '6qaLTKEcKnP';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script32 = function()
{
  const target = object('5zVbzIVYzHX');
const duration = 3000;
const easing = 'ease-out';
const id = '61nQyKpErYR';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script33 = function()
{
  const target = object('6atNIIiWYi8');
const duration = 3000;
const easing = 'ease-out';
const id = '655oLUV5rJZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script34 = function()
{
  const target = object('5pQQiW0CYme');
const duration = 3000;
const easing = 'ease-out';
const id = '5zR95vdY6hO';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script35 = function()
{
  const target = object('63ClXVM6ROY');
const duration = 3000;
const easing = 'ease-out';
const id = '5fxiLTdSh9D';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script36 = function()
{
  const target = object('6gNQF4gKLSO');
const duration = 3000;
const easing = 'ease-out';
const id = '6Q0vPaoeSB7';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script37 = function()
{
  const target = object('5cIIxgHvRpf');
const duration = 3000;
const easing = 'ease-out';
const id = '62dDNJ080VC';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script38 = function()
{
  const target = object('68wocQdkSJh');
const duration = 3000;
const easing = 'ease-out';
const id = '62i0bGTIwo0';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script39 = function()
{
  const target = object('5buoMTyMOTb');
const duration = 3000;
const easing = 'ease-out';
const id = '5Wxaw6vjYEx';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};

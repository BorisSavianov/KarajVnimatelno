//  Broqt na ostavashti jivoti
let brOstavashtiJivoti = 3;

// Promenlivi za kolito
let myX = 50,
  myY = 495,

  vragX = 308,
  vragY = 1000,
  vragSkorost = 2,
  vragRazmer = 50;

  jivoti = 3,
  jivotX = 364,
  jivotY = 0;
jivotiSkorost = 2;

  tochki = 99,
  tochkiX = 200,
  tochkiY = 0;


  kolaX = 190,
  kolaY = 0,
  kolaSkorost = 2,
  kolaRazmer = 50;

  truckX = 450,
  truckY = 1200,
  truckSkorost = 1,
  truckRazmer = 50;

  busX = 450,
  busY = 1000,
  busSkorost = 1,
  busRazmer = 50;


  sportnakolaX = 440,
  sportnakolaY = 1200,
  sportnakolaSkorost = 2.5,
  sportnakolaRazmer = 50;

  kolichkaX = 500,
  kolichkaY = 0,
  kolichkaSkorost = 1,
  kolichkaRazmer = 50;
  
  lokvaX = 300,
  lokvaY = 0;
  lokvaSkorost = 2;

  remontX = 120,
  remontY = 0,
  remontSkorost = 1;

//  promenlivi za koordinati na mishkata
let mishkaX, mishkaY;

//  Promenlivi za patrona na tanka
let bulletX = 150; bulletY = 1000;

// Promenlivi za zadachite
let a, c, x

// Promenlivi za radioto, pausata, informaciqta i chistachkite
let musika = false;
pausa = true;
kontroli = false;
zanas = false;
ksi = false;
chistene = false;
tochk = false;

// Promenlivi koito sledqt do koq kola sme stiganli
kola10 = false;
kola25 = false;
kola50 = false;
kola75 = false;
kola100 = false;

// Promenlivi koito sledqt dali sme dostignali nujni tochki
tochk25 = false;
tochk50 = false;
tochk75 = false;
tochk100 = false;

// promenlivi za razlichnite koli
kola1 = true;
kola2 = false;
kola3 = false;
kola4 = false;
kola5 = false;
kola6 = false;

// Promenliva za klaviaturata i mishkata
controls = false;

// Promenlivi za advokata
stop = false;
zatvori1   = false;
zatvori2 = false;
zatvori3 = false;
dropdown = true
translate = false
nachalo = false;
nachalo2 = true;
varel = false;
lokva = false;
sblusuk = false;
sblusuk1 = false;
vzemane = false
vzemane1 = false
tank = false
tank1 = false
technost = false
strelqne = false

// promenliva za timera
let count = 1;

let brOstavashtiPatroni = 3
let currentIndex = 0;
let previousIndex
let intervalId;

//  Kartinkite za backgrounda
const images = [
  "background/bg2.webp",
  "background/bg3.jpg",
  "background/bg4.jpg",
  "background/bg5.jpg",
  "background/bg7.jpg",
  "background/bg10.jpg",
  "background/bg11.png",
  "background/bg12.png",
  "background/bg13.jpg",
  "background/bg14.jpg",
]

// s tova kontrolirame dali zvuka na dvigatelq se chuva ili ne
let dvigatelzvukk = true
let dvigatelzvukt = false
let dvigatelpic = true

//promenliva koqto zasicha kolko puti sme ocelili kamiona ili tira
let vtoriistrel1 = 0
let vtoriistrel2 = 0

// Smenqne mejdu pauza
function smenqne() {
  pausa = !pausa;
  stop = !stop;
}

// smqna na opciite zanas, kak se igrae, kontroli i smqna na kontrolite
function zanas1() {
  zanas = true;
  pausa = true;
  zatvori1 = true;
  document.getElementById("drop2").disabled = true;
  document.getElementById("drop3").disabled = true;
}

function ksi1() {
  ksi = true;
  pausa = true;
  zatvori2 = true;
  document.getElementById("drop1").disabled = true;
  document.getElementById("drop3").disabled = true;
}

function kontroli1() {
  kontroli = true;
  pausa = true;
  zatvori3 = true;
  document.getElementById("drop1").disabled = true;
  document.getElementById("drop2").disabled = true;
}

function kontroli2() {
  controls = !controls;
}

//  Zvuka na tanka i kolite
function dvigateltank(){
  document.getElementById("dvigatel2").addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  document.getElementById("dvigatel2").volume = 0.2;
  document.getElementById("dvigatel2").play();
}


function dvigatelkola(){
  document.getElementById("dvigatel1").addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
  document.getElementById("dvigatel1").volume = 0.2;
  document.getElementById("dvigatel1").play();
}


//  start butona
function skrij() {
  if(dvigatelzvukk == true){
  document.getElementById("zapalvane1").volume = 0.2;
  zapalvane1.play()
  setTimeout(dvigatelkola, 1500)
  }
  intervalId = setInterval(() => {
    if (!pausa) {
        count++
    }
}, 1000);
  document.getElementById("buton").style.display = "none";
  document.getElementById("snimka").style.display = "none";
}

//  greshen otgovor na zadacha
function z1() {
  for (var i = 1; i <= 50; i++) {
    var zadacha = document.getElementById("zadacha" + i);
    if (zadacha) {
      zadacha.style.display = "none";
    }
  
    var otgovori = document.getElementById("otgovori" + i);
    if (otgovori) {
      otgovori.style.display = "none";
    }
  
    var zadachka = document.getElementById("zadachka" + i);
    if (zadachka) {
      zadachka.style.display = "none";
    }
  }
  
  pausa = false;

  x = 0;
    brOstavashtiJivoti = brOstavashtiJivoti - 1;
    jivoti = jivoti - 1;
}

function z2() {
  for (var i = 1; i <= 50; i++) {
    var zadacha = document.getElementById("zadacha" + i);
    if (zadacha) {
      zadacha.style.display = "none";
    }
  
    var otgovori = document.getElementById("otgovori" + i);
    if (otgovori) {
      otgovori.style.display = "none";
    }
  
    var zadachka = document.getElementById("zadachka" + i);
    if (zadachka) {
      zadachka.style.display = "none";
    }
  }
  
  pausa = false;
  x = 0;
}

// Pausata
function pause() {
  lokvaSkorost = 0;
  kolichkaSkorost = 0;
  sportnakolaSkorost = 0;
  truckSkorost = 0;
  vragSkorost = 0;
  kolaSkorost = 0;
  remontSkorost = 0;
  busSkorost = 0;
  jivotiSkorost = 0;

  lokvaSkorost = lokvaSkorost + 0.0;
  kolichkaSkorost = kolichkaSkorost + 0.0;
  sportnakolaSkorost = sportnakolaSkorost + 0.0;
  truckSkorost = truckSkorost + 0.0;
  vragSkorost = vragSkorost + 0.0;
  kolaSkorost = kolaSkorost + 0.0;
  remontSkorost = remontSkorost + 0.0;
  busSkorost = busSkorost + 0.0;
  jivotiSkorost = jivotiSkorost + 0.0;
}

//  Mahane na pausata
function puskane() {
  lokvaSkorost = 2;
  kolichkaSkorost = 1;
  sportnakolaSkorost = 2.5;
  truckSkorost = 1;
  vragSkorost = 2;
  kolaSkorost = 2;
  remontSkorost = 1;
  busSkorost = 1;
  jivotiSkorost = 2;
}

// zavivane s klavish na lqvo
function lqvo() {
  setTimeout(nalqvo, 10);
  setTimeout(nalqvo, 30);
  setTimeout(nalqvo, 50);
  setTimeout(nalqvo, 70);
  setTimeout(nalqvo, 90);
}

// zavivane s klavish na dqsno
function dqsno() {
  setTimeout(nadqsno, 10);
  setTimeout(nadqsno, 30);
  setTimeout(nadqsno, 50);
  setTimeout(nadqsno, 70);
  setTimeout(nadqsno, 90);
}

function nalqvo() {
  myX -= 2;
}

function nadqsno() {
  myX += 2;
}

function chistachki() {
  document.getElementById("gif").style.display = "none";
  technost = false
}

function Play() {
  pausa = false;
}


// Bibitkata
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 66) {
    document.getElementById("bipbip").play().volume = 0.1;
  }
});

// murdane na kolata
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 65) {
    if(pausa === false){
    lqvo();
    }
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 68) {
    if(pausa === false){
    dqsno();
    }
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 37) {
    if(pausa === false){
    lqvo();
    }
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 39) {
    if(pausa === false){
    dqsno();
    }
  }
});

// pausa
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 80 || e.keyCode === 27) {
    if(nachalo === true){
    if(nachalo2 === true){
      smenqne();
    }
    } 
  }
});


function chisto() {
  chistene = false;
}


function update() {

if(vtoriistrel1 === 2){
  truckX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  truckY = 0;
  vtoriistrel1 = 0
}

if(vtoriistrel2 === 2){
  busX = Math.floor(Math.random() * (520 - 125 + 1)) + 125;
  busY = 0;
  vtoriistrel2 = 0
}

if(kola100 === false){
  if(mishkaX > 708){
    if(mishkaX <761){
      if(mishkaY > 21){
        if(mishkaY < 56){
          dvigatelzvukk = !dvigatelzvukk
          mishkaX = 0
          dvigatelpic = !dvigatelpic
        }
      }
    }
  } 
} else {
  document.getElementById("dvigatel1").volume = 0;
  dvigatelzvukk = false
  if(mishkaX > 708){
    if(mishkaX <761){
      if(mishkaY > 21){
        if(mishkaY < 56){
          dvigatelzvukt = !dvigatelzvukt
          mishkaX = 0
          dvigatelpic = !dvigatelpic
        }
      }
    }
  } 
}

if(kola100 === true){
  dvigatelzvukk = false
}

   
  if(dvigatelzvukk === false){
    document.getElementById("dvigatel1").volume = 0;
  } else{
    document.getElementById("dvigatel1").volume = 0.2;
  }

  if(dvigatelzvukt === false){
    document.getElementById("dvigatel2").volume = 0;
  } else{
    document.getElementById("dvigatel2").volume = 0.2;
  }

  // dvijenieto na patrona
  if(strelqne === true){
  bulletY = bulletY - 2;
  } 

// zasichane na sblusuk s patrona
  if(areColliding(vragX, vragY - 70, 70, 110, bulletX, bulletY, 20, 40))
  {
    if(dvigatelzvukt == true){
      document.getElementById("ocelen").play()
    }
      console.log("ima sblusuk mejdu patron i vrag");
      vragY = 0;
      vragX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      bulletY = 1000
      strelqne = false
  }


  if(areColliding(kolaX, kolaY - 70, 60, 70, bulletX, bulletY, 20, 40))
  {
    if(dvigatelzvukt == true){
      document.getElementById("ocelen").play()
    }
      console.log("ima sblusuk mejdu patron i vrag");
      kolaY = 0;
      kolaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      bulletY = 1000
      strelqne = false
  }

  if(areColliding(kolichkaX, kolichkaY - 70, 60, 70, bulletX, bulletY, 20, 40))
  {
    if(dvigatelzvukt == true){
      document.getElementById("ocelen").play()
    }
      console.log("ima sblusuk mejdu patron i vrag");
      kolichkaY = 0;
      kolichkaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      bulletY = 1000
      strelqne = false
  }

  if(areColliding(sportnakolaX, sportnakolaY - 70, 55, 70, bulletX, bulletY, 20, 40))
  {
    if(dvigatelzvukt == true){
      document.getElementById("ocelen").play()
    }
      console.log("ima sblusuk mejdu patron i vrag");
      sportnakolaY = 0;
      sportnakolaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      bulletY = 1000
      strelqne = false
  }

  if(areColliding(busX + 31, busY - 345, 133, 335, bulletX, bulletY, 20, 40))
  {
    if(dvigatelzvukt == true){
      document.getElementById("ocelen").play()
    }
      console.log("ima sblusuk mejdu patron i vrag");
      bulletY = 1000
      strelqne = false
      vtoriiistrel1 +=1
  }

  if(areColliding(truckX , truckY - 140, 100, 150, bulletX, bulletY, 20, 40))
  {
    if(dvigatelzvukt == true){
      document.getElementById("ocelen").play()
    }
      console.log("ima sblusuk mejdu patron i vrag");
      bulletY = 1000
      strelqne = false
      vtoriistrel1 +=1
  }

// Prevejdane na vsichko
  document.getElementById("drop6").addEventListener("click", function(){
    if(translate == true){
      translate = false
    } else if(translate == false){
      translate = true
    }
  });

  if(translate == true){
    for (var i = 1; i <= 50; i++) {
      var element = document.getElementById("zadacha" + i);
      if (element) {
        element.innerHTML = "What is the answer to";
      }
    }
    
    document.getElementById("drop1").innerText = "About us";
    document.getElementById("drop2").innerText = "How to play";
    document.getElementById("drop3").innerText = "Сontrols";
    document.getElementById("drop4").innerText = "Mouse / Keybord";
    document.getElementById("drop5").innerText = "Change backgorund";
    document.getElementById("drop6").innerText = "Change language";
    document.getElementById("button1").innerText = "Play Radio";
    document.getElementById("button2").innerText = "Stop Radio";
    document.getElementById("button3").innerText = "New Game";
    document.getElementById("buttona").innerText = "Pause";
    document.getElementById("buton").innerText = "Start";
  } else {
    for (var i = 1; i <= 50; i++) {
      var element = document.getElementById("zadacha" + i);
      if (element) {
        element.innerHTML = "Колко е";
      }
    }
    document.getElementById("drop1").innerText = "За нас";
    document.getElementById("drop2").innerText = "Как се играе";
    document.getElementById("drop3").innerText = "Контроли";
    document.getElementById("drop4").innerText = "Мишка / Клавиатура";
    document.getElementById("drop5").innerText = "Смяна на фона";
    document.getElementById("drop6").innerText = "Смяна на езика";
    document.getElementById("button1").innerText = "Пусни Радио";
    document.getElementById("button2").innerText = "Стоп Радио";
    document.getElementById("button3").innerText = "Нова Игра";
    document.getElementById("buttona").innerText = "Пауза";
    document.getElementById("buton").innerText = "Начало";
  }

  // Butonite ot dropdown menu-to e neizpolzvaemo predi da zapochnem igrata
if(dropdown == true){
  document.getElementById("drop1").disabled = true;
  document.getElementById("drop2").disabled = true;
  document.getElementById("drop3").disabled = true;
  document.getElementById("drop4").disabled = true;
}else{
  document.getElementById("drop1").disabled = false;
  document.getElementById("drop2").disabled = false;
  document.getElementById("drop3").disabled = false;
  document.getElementById("drop4").disabled = false;
}

// izbirane na tapet na sluchaen sluchaj
document.getElementById("drop5").addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * images.length);
  while (randomIndex === previousIndex) {
    randomIndex = Math.floor(Math.random() * images.length);
    break
  }
  previousIndex = randomIndex;
  document.body.style.backgroundImage = `url(${images[randomIndex]})`;
});

  // smqna mejdu mishka i klaviatura
  if (controls === true) {
    if(pausa === false){
    myX = mouseX - 30;
    }
  }


  // Taka mojem da kontrolirame koga se poqvqvat koletite i da napravim poqvqvaneto postepenno
  if (busY > 20000) {
    busY = 0;
  }

  if (sportnakolaY > 30000) {
    sportnakolaY = 0;
  }

  if (truckY > 10000) {
    truckY = 0;
  }

  if (vragY > 7500) {
    vragY = 0;
  }

  // zasicha kolko tochki imame i ako imame 10,25,50,75 ili 100 da pokaje zapitvane za novo prevozno sredstvo
  if (tochki == 10) {
    tochk = true;
  } else {
    tochk = false;
  }

  if (tochki == 25) {
    tochk25 = true;
  } else {
    tochk25 = false;
  }

  if (tochki == 50) {
    tochk50 = true;
  } else {
    tochk50 = false;
  }

  if (tochki == 75) {
    tochk75 = true;
  } else {
    tochk75 = false;
  }

  if (tochki == 100) {
    tochk100 = true;
    remontY = 1000
  } else {
    tochk100 = false;
  }

  // kolata na igracha da ne izliza ot putq
  if (myX < 125) {
    myX = 125;
  } else if (myX > 625) {
    myX = 625;
  }

  // zasichane na klik s mishkata
  if (tochk == true) {
    pausa = true;
    if (mishkaX > 276.5) {
      if (mishkaX < 306.5) {
        if (mishkaY > 304.5) {
          if (mishkaY < 329.5) {
            pausa = false;
            tochk = false;
            kola10 = true;
            tochki = 11;
            vzemane = true
            vzemane1 = true
          }
        }
      }
    }
    if (mishkaX > 495.5) {
      if (mishkaX < 527.5) {
        if (mishkaY > 304.5) {
          if (mishkaY < 329.5) {
            pausa = false;
            tochk = false;
            kola10 = false;
            tochki = 11;
          }
        }
      }
    }
  }

  if (tochk25 == true) {
    pausa = true;
    if (mishkaX > 276.5) {
      if (mishkaX < 306.5) {
        if (mishkaY > 304.5) {
          if (mishkaY < 329.5) {
            pausa = false;
            tochk = false;
            kola25 = true;
            tochki = 26;
            vzemane = true
            vzemane1 = true
          }
        }
      }
    }
    if (mishkaX > 495.5) {
      if (mishkaX < 527.5) {
        if (mishkaY > 304.5) {
          if (mishkaY < 329.5) {
            pausa = false;
            tochk = false;
            kola25 = false;
            tochki = 26;
          }
        }
      }
    }
  }

  if (tochk50 == true) {
    pausa = true;
    if (mishkaX > 276.5) {
      if (mishkaX < 306.5) {
        if (mishkaY > 304.5) {
          if (mishkaY < 329.5) {
            pausa = false;
            tochk = false;
            kola50 = true;
            tochki = 51;
            vzemane = true
            vzemane1 = true
          }
        }
      }
    }
    if (mishkaX > 505) {
      if (mishkaX < 534) {
        if (mishkaY > 305) {
          if (mishkaY < 332) {
            pausa = false;
            tochk = false;
            kola50 = false;
            tochki = 51;
          }
        }
      }
    }
  }

  if (tochk75 == true) {
    pausa = true;
    if (mishkaX > 276.5) {
      if (mishkaX < 306.5) {
        if (mishkaY > 304.5) {
          if (mishkaY < 329.5) {
            pausa = false;
            tochk = false;
            kola75 = true;
            tochki = 76;
            vzemane = true
            vzemane1 = true
          }
        }
      }
    }
    if (mishkaX > 495.5) {
      if (mishkaX < 527.5) {
        if (mishkaY > 304.5) {
          if (mishkaY < 329.5) {
            pausa = false;
            tochk = false;
            kola75 = false;
            tochki = 76;
          }
        }
      }
    }
  }

  if (tochk100 == true) {
    pausa = true;
    if (mishkaX > 276.5) {
      if (mishkaX < 306.5) {
        if (mishkaY > 304.5) {
          if (mishkaY < 329.5) {
            pausa = false;
            tochk = false;
            kola100 = true;
            tochki = 101;
            tank = true
            tank1 = true
            document.getElementById("dvigatel1").volume = 0.0;
              document.getElementById("zapalvane2").volume = 0.2;
              zapalvane2.play()
              setTimeout(dvigateltank, 1500)
              dvigatelzvukt = true
              dvigatelpic = true
          }
        }
      }
    }

    if (mishkaX > 505) {
      if (mishkaX < 533) {
        if (mishkaY > 303) {
          if (mishkaY < 322) {
            pausa = false;
            tochk = false;
            kola100 = false;
            tochki = 101;
          }
        }
      }
    }
  }

  // chisloto "X" pokazva suotvetnite zadacha, uslovie, otgovori
  const elementIds = ["zadacha", "otgovori", "zadachka"];
  elementIds.forEach(id => {
    const el = document.getElementById(`${id}${x}`);
    if (el) el.style.display = "block";
  });
  
  if (pausa == true) {
    document.getElementById("back").style.display = "block";
    pause();
  } else if (pausa == false) {
    document.getElementById("back").style.display = "none";
    puskane();
  }

// Kogato cuknem "Q" chistachkite se poqvqvat i se mahat zaedno s sluzta sled 2 sekundi
  document.addEventListener("keydown", function (e) {
    if (e.keyCode == 81) {
      chistene = true;
      setTimeout(chisto, 2000);
      setTimeout(chistachki, 2000);
      document.getElementById("gif").style.display = "block";
    }
  });

  // radioto
  if (musika == true) {
    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 50) {
        document.getElementById("music2").volume = 0.1;
        music2.play();
        document.getElementById("music").volume = 0;
        document.getElementById("music3").volume = 0;
        document.getElementById("music4").volume = 0;
        document.getElementById("music5").volume = 0;
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 49) {
        document.getElementById("music").volume = 0.1;
        music.play();
        document.getElementById("music2").volume = 0;
        document.getElementById("music3").volume = 0;
        document.getElementById("music4").volume = 0;
        document.getElementById("music4").volume = 0;
        document.getElementById("music5").volume = 0;
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 51) {
        document.getElementById("music3").volume = 0.1;
        music3.play();
        document.getElementById("music").volume = 0;
        document.getElementById("music2").volume = 0;
        document.getElementById("music4").volume = 0;
        document.getElementById("music4").volume = 0;
        document.getElementById("music5").volume = 0;
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 52) {
        document.getElementById("music4").volume = 0.1;
        music4.play();
        document.getElementById("music2").volume = 0;
        document.getElementById("music3").volume = 0;
        document.getElementById("music").volume = 0;
        document.getElementById("music5").volume = 0;
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 53) {
        document.getElementById("music5").volume = 0.1;
        music5.play();
        document.getElementById("music").volume = 0;
        document.getElementById("music2").volume = 0;
        document.getElementById("music3").volume = 0;
        document.getElementById("music4").volume = 0;
      }
    });
  } else {
    document.getElementById("music").volume = 0;
    document.getElementById("music2").volume = 0;
    document.getElementById("music3").volume = 0;
    document.getElementById("music4").volume = 0;
    document.getElementById("music5").volume = 0;
  }

  // ako kolite izlqzat ot putq se vrushtat obratno
  if (vragY > 700 && vragY < 750) {
    vragY = 0;
    vragX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  }

  if (kolichkaY > 700 && kolichkaY > 750) {
    kolichkaY = 0;
    kolichkaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  }

  if (remontY > 700 && remontY < 750) {
    remontY = 0;
    remontX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  }

  if (lokvaY > 750 && lokvaY < 800) {
    lokvaY = 0;
    lokvaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  }

  if (sportnakolaY > 700 && sportnakolaY < 750) {
    sportnakolaY = 0;
    sportnakolaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  }

  if (busY > 900 && busY < 950) {
    busY = 0;
    busX = Math.floor(Math.random() * (520 - 125 + 1)) + 125;
  }

  if (truckY > 700 && truckY < 750) {
    truckY = 0;
    truckX = Math.floor(Math.random() * (570 - 125 + 1)) + 125;
  }

  if (kolaY > 700 && kolaY < 750) {
    kolaY = 0;
    kolaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  }

  if (jivotY > 5000 && jivotY < 5050) {
    jivotY = 0;
    jivotX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  }

  // skorostta na kolite
  busY = busY + busSkorost;
  remontY = remontY + remontSkorost;
  kolichkaY = kolichkaY + kolichkaSkorost;
  lokvaY = lokvaY + lokvaSkorost;
  sportnakolaY = sportnakolaY + sportnakolaSkorost;
  kolaY = kolaY + kolaSkorost;
  truckY = truckY + truckSkorost;
  vragY = vragY + vragSkorost;
  jivotY = jivotY + jivotiSkorost;

  // zasichane na sblusuk za purvi put
  if (!sblusuk1 && areColliding(myX, myY, 50, 50, kolichkaX, kolichkaY - 70, 60, 70)) {
    sblusuk = true
    sblusuk1 = true
  }

  if (!sblusuk1 && areColliding(myX, myY, 50, 120, sportnakolaX, sportnakolaY - 70, 55, 70)) {
    sblusuk = true
    sblusuk1 = true
  }

  if (!sblusuk1 && areColliding(myX, myY, 20, 100, busX, busY - 320, 135, 335)) {
    sblusuk = true
    sblusuk1 = true
  }

  if (!sblusuk1 && areColliding(myX, myY, 20, 80, truckX - 40, truckY - 138, 120, 150)) {
    sblusuk = true
    sblusuk1 = true
  }

  if (!sblusuk1 && areColliding(myX, myY, 50, 80, kolaX, kolaY - 70, 60, 70)) {
    sblusuk = true
    sblusuk1 = true
  }

  if (!sblusuk1 && areColliding(myX, myY, 50, 80, vragX, vragY - 70, 60, 70)) {
    sblusuk = true
    sblusuk1 = true
  }

  // zasichane na sblusuk s kolata na igracha
  if (areColliding(myX, myY, 80, 80, remontX, remontY - 70, 50, 50)) {
    document.getElementById("tochka").play();
    tochki = tochki + 1;
    remontY = 0;
    remontX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
  }

  if (areColliding(myX, myY, 50, 50, kolichkaX, kolichkaY - 70, 60, 70)) {
    x = Math.floor(Math.random() * 50 + 1);
    pausa = true;
    document.getElementById("sblusuk").play();
    console.log("ima sblusuk mejdu dvete koli");
    kolichkaY = 0;
    kolichkaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
    jivoti = jivoti - 1;
    brOstavashtiJivoti = brOstavashtiJivoti - 1;
    console.log("jivoti=", jivoti);
  }

  if (
    areColliding(myX, myY, 50, 120, sportnakolaX, sportnakolaY - 70, 55, 70)
  ) {
    x = Math.floor(Math.random() * 50 + 1);
    pausa = true;
    document.getElementById("sblusuk").play();
    console.log("ima sblusuk mejdu dvete koli");
    sportnakolaY = 0;
    sportnakolaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
    jivoti = jivoti - 1;
    brOstavashtiJivoti = brOstavashtiJivoti - 1;
    console.log("jivoti=", jivoti);
  }

  if (areColliding(myX, myY, 20, 100, busX, busY - 320, 135, 335)) {
    pausa = true;
    x = Math.floor(Math.random() * 50 + 1);
    document.getElementById("sblusuk").play();
    console.log("ima sblusuk mejdu dvete koli");
    busY = 0;
    busX = Math.floor(Math.random() * (520 - 125 + 1)) + 125;
    jivoti = jivoti - 1;
    brOstavashtiJivoti = brOstavashtiJivoti - 1;
    console.log("jivoti=", jivoti);
  }

  if (areColliding(myX, myY, 20, 80, truckX - 40, truckY - 138, 120, 150)) {
    pausa = true;
    x = Math.floor(Math.random() * 50 + 1);
    document.getElementById("sblusuk").play();
    console.log("ima sblusuk mejdu dvete koli");
    truckY = 0;
    truckX = Math.floor(Math.random() * (550 - 125 + 1)) + 125;
    jivoti = jivoti - 1;
    brOstavashtiJivoti = brOstavashtiJivoti - 1;
    console.log("jivoti=", jivoti);
  }

  if (areColliding(myX, myY, 50, 80, kolaX, kolaY - 70, 60, 70)) {
    pausa = true;
    x = Math.floor(Math.random() * 1 + 1);
    document.getElementById("sblusuk").play();
    console.log("ima sblusuk mejdu dvete koli");
    kolaY = 0;

    kolaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
    jivoti = jivoti - 1;
    brOstavashtiJivoti = brOstavashtiJivoti - 1;
    kolaY = 0;
    console.log("jivoti=", jivoti);
  }

  if (areColliding(myX, myY, 50, 80, vragX, vragY - 70, 60, 70)) {
    pausa = true;
    x = Math.floor(Math.random() * 50 + 1);
    document.getElementById("sblusuk").play();
    console.log("ima sblusuk mejdu dvete koli");
    vragY = 0;
    vragX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
    jivoti = jivoti - 1;
    brOstavashtiJivoti = brOstavashtiJivoti - 1;
    console.log("jivoti=", jivoti);
  }

  if (areColliding(myX, myY, 80, 80, jivotX, jivotY - 70, 40, 40)) {
    jivotY = 700;
    jivoti = jivoti + 1;
    brOstavashtiJivoti = brOstavashtiJivoti + 1;
    console.log("jivoti", jivoti);
    jivotX = Math.floor(Math.random() * (610 - 125 + 1)) + 170;
    document.getElementById("jivot").play();
  }


// zasichane na sblusak s ostanalite koli
  if (areColliding(kolaX, kolaY, 70, 100, kolichkaX, kolichkaY, 60, 90)) {
    if (kolaY > kolichkaY) {
      kolichkaY = kolaY - 100;
    } else {
      kolaY = kolichkaY - 100;
    }
  }
  if (areColliding(kolaX, kolaY, 70, 100, vragX, vragY, 70, 100)) {
    if (kolaY > vragY) {
      vragY = kolaY - 100;
    } else {
      kolaY = vragY - 100;
    }
  }
  if (areColliding(vragX, vragY, 70, 100, kolichkaX, kolichkaY, 70, 90)) {
    if (vragY > kolichkaY) {
      kolichkaY = vragY - 100;
    } else {
      vragY = kolichkaY - 100;
    }
  }
  if (areColliding(kolaX, kolaY, 70, 100, sportnakolaX, sportnakolaY, 55, 100)) {
    if (kolaY > sportnakolaY) {
      sportnakolaY = kolaY - 100;
    } else {
      kolaY = sportnakolaY - 100;
    }
  }
  if (areColliding(vragX, vragY, 70, 100, sportnakolaX, sportnakolaY, 55, 100)) {
    if (vragY > sportnakolaY) {
      sportnakolaY = vragY - 100;
    } else {
      vragY = sportnakolaY - 100;
    }
  }
  if (areColliding(sportnakolaX,sportnakolaY,55,100,kolichkaX,kolichkaY,70,100)) {
    if (sportnakolaY > kolichkaY) {
      kolichkaY = sportnakolaY - 100;
    } else {
      sportnakolaY = kolichkaY - 100;
    }
  }
  if (areColliding(kolaX, kolaY, 70, 140, truckX, truckY - 20, 85, 200)) {
    if (kolaY > truckY) {
      truckY = kolaY - 115;
    } else {
      kolaY = truckY - 135;
    }
  }
  if (areColliding(vragX, vragY, 70, 140, truckX, truckY, 100, 200)) {
    if (vragY > truckY) {
      truckY = vragY - 100;
    } else {
      vragY = truckY - 135;
    }
  }
  if (areColliding(truckX, truckY, 100, 200, kolichkaX, kolichkaY, 70, 140)) {
    if (truckY > kolichkaY) {
      kolichkaY = truckY - 135;
    } else {
      truckY = kolichkaY - 100;
    }
  }
  if (
    areColliding(sportnakolaX, sportnakolaY, 55, 140, truckX, truckY, 100, 140)
  ) {
    if (sportnakolaY > truckY) {
      truckY = sportnakolaY - 100;
    } else {
      sportnakolaY = truckY - 135;
    }
  }
  if (areColliding(kolaX, kolaY, 70, 350, busX, busY, 100, 350)) {
    if (kolaY > busY) {
      busY = kolaY - 100;
    } else {
      kolaY = busY - 350;
    }
  }
  if (areColliding(vragX, vragY, 70, 350, busX, busY, 100, 350)) {
    if (vragY > busY) {
      busY = vragY - 100;
    } else {
      vragY = busY - 350;
    }
  }
  if (areColliding(busX, busY, 100, 350, kolichkaX, kolichkaY, 70, 350)) {
    if (busY > kolichkaY) {
      kolichkaY = busY - 350;
    } else {
      busY = kolichkaY - 100;
    }
  }
  if (areColliding(sportnakolaX, sportnakolaY, 55, 350, busX, busY, 100, 250)) {
    if (sportnakolaY > busY) {
      busY = sportnakolaY - 100;
    } else {
      sportnakolaY = busY - 350;
    }
  }
  if (areColliding(truckX, truckY, 100, 400, busX, busY, 100, 250)) {
    if (truckY > busY) {
      busY = truckY - 140;
    } else {
      truckY = busY - 350;
    }
  }
}

function draw() {

  // risuvane na neshtata kojto vinagi se pokazvat
  drawImage(gumi, jivotX, jivotY - 70, 60, 60);
  drawImage(bullet, kolaX, kolaY - 90, 70, 100);
  drawImage(cloud, kolichkaX, kolichkaY - 90, 70, 100);
  drawImage(prepqdstvie, lokvaX, lokvaY - 90, 50, 100);
  drawImage(chuk, remontX, remontY - 70, 50, 50);
  drawImage(bomb, vragX, vragY - 90, 70, 100);
  drawImage(cactus, busX, busY - 290, 200, 350);
  drawImage(tir, truckX, truckY - 120, 100, 140);
  drawImage(cherry, sportnakolaX, sportnakolaY - 90, 70, 100);

  if(nachalo2 === false){
    drawImage(fon,0,0,800,600)
  }

  if(nachalo === false){
    drawImage(fon,0,0,800,600)
    } 

  drawImage(chuk, 35, 85, 40, 40);

  // risuvane na tochkite
  var canvas = document.getElementById("canvas-id");
  var ctx = canvas.getContext("2d");
  ctx.font = "30px sans-serif";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(tochki, 90, 95);

  // risuvane na ikonka na radio ako muzikata e vkluchena
  if (musika == true) {
    drawImage(radio, 17, 110, 120, 100);
  }

  // risuvane na novite koli kogato gi otkluchim
  if (kola1 == true) {
    drawImage(nachalnakola, myX, myY + 1, 70, 110);
  }
  if (kola2 == true) {
    drawImage(kolichka10, myX - 30, myY + 1, 130, 120);
  }
  if (kola3 == true) {
    drawImage(kolichka25, myX - 21, myY - 5, 100, 130);
  }
  if (kola4 == true) {
    drawImage(kolichka50, myX, myY - 4, 65, 130);
  }
  if (kola5 == true) {
    drawImage(kolichka75, myX - 20, myY, 70, 130);
  }
  if (kola6 == true) {
    drawImage(cat, bulletX, bulletY , 20, 45);

    // Istrel na patron ot tanka
    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 32) {
      strelqne = true
      drawImage(cat, bulletX, bulletY, 50, 50);
      bulletX = myX + 25;
      bulletY = myY - 40;
      }
    });
   
    // prehvane na patrona ot igralnoto pole ako nqmame patroni
    if(brOstavashtiPatroni < 0){
      bulletY = 1000
    }

    // risuvane na tolkova patroni kolkoto imame
    if (brOstavashtiPatroni >= 3) {
      drawImage(cat, 700, 57, 25, 45);
    }
  
    if (brOstavashtiPatroni >= 2) {
      drawImage(cat, 725, 57, 25, 45);
    }
  
    if (brOstavashtiPatroni >= 1) {
      drawImage(cat, 750, 57, 25, 45);
    }

// risuvane na tanka
    drawImage(kolichka100, myX - 15, myY - 20, 100, 130);

    // zasichane na sblusuk mejdu tanka i ostanalite koli
    if (areColliding(bulletX, bulletY, 72, 80, lokvaX, lokvaY - 90, 60, 100)) {
      lokvaY = 0
      lokvaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      bulletY = 1000
      strelqne = false
    }

    if (areColliding(myX, myY, 72, 80, remontX, remontY - 70, 58, 50)) {
      document.getElementById("tochka").play();
      tochki = tochki + 1;
      remontY = 0;
      remontX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
    }

    if (areColliding(myX + 2, myY, 72, 80, lokvaX, lokvaY - 90, 60, 100)) {
      technost = true
      console.log("izpolzvaj chistachkite");
      document.getElementById("lokva").play();
    }

    if (areColliding(myX, myY, 72, 80, kolichkaX, kolichkaY - 70, 60, 70)) {
      x = Math.floor(Math.random() * 50 + 1);
      pausa = true;
      document.getElementById("sblusuk").play();
      console.log("ima sblusuk mejdu dvete koli");
      kolichkaY = 0;
      kolichkaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      jivoti = jivoti - 1;
      brOstavashtiJivoti = brOstavashtiJivoti - 1;
      console.log("jivoti=", jivoti);
    }

    if (
      areColliding(myX, myY, 50, 120, sportnakolaX, sportnakolaY - 70, 55, 70)
    ) {
      x = Math.floor(Math.random() * 50 + 1);
      pausa = true;
      document.getElementById("sblusuk").play();
      console.log("ima sblusuk mejdu dvete koli");
      sportnakolaY = 0;
      sportnakolaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      jivoti = jivoti - 1;
      brOstavashtiJivoti = brOstavashtiJivoti - 1;
      console.log("jivoti=", jivoti);
    }

    if (areColliding(myX, myY, 72, 80, busX + 31, busY - 345, 133, 335)) {
      pausa = true;
      x = Math.floor(Math.random() * 50 + 1);
      document.getElementById("sblusuk").play();
      console.log("ima sblusuk mejdu dvete koli");
      busY = 0;
      busX = Math.floor(Math.random() * (520 - 125 + 1)) + 125;
      jivoti = jivoti - 1;
      brOstavashtiJivoti = brOstavashtiJivoti - 1;
      console.log("jivoti=", jivoti);
    }

    if (areColliding(myX, myY, 72, 80, truckX, truckY - 140, 100, 150)) {
      pausa = true;
      x = Math.floor(Math.random() * 50 + 1);
      document.getElementById("sblusuk").play();
      console.log("ima sblusuk mejdu dvete koli");
      truckY = 0;
      truckX = Math.floor(Math.random() * (550 - 125 + 1)) + 125;
      jivoti = jivoti - 1;
      brOstavashtiJivoti = brOstavashtiJivoti - 1;
      console.log("jivoti=", jivoti);
    }

    if (areColliding(myX, myY, 72, 80, kolaX, kolaY - 70, 70, 70)) {
      pausa = true;
      x = Math.floor(Math.random() * 50 + 1);
      document.getElementById("sblusuk").play();
      console.log("ima sblusuk mejdu dvete koli");
      kolaY = 0;

      kolaX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      jivoti = jivoti - 1;
      brOstavashtiJivoti = brOstavashtiJivoti - 1;
      kolaY = 0;
      console.log("jivoti=", jivoti);
    }

    if (areColliding(myX, myY, 72, 80, vragX, vragY - 70, 70, 70)) {
      pausa = true;
      x = Math.floor(Math.random() * 50 + 1);
      document.getElementById("sblusuk").play();
      console.log("ima sblusuk mejdu dvete koli");
      vragY = 0;
      vragX = Math.floor(Math.random() * (610 - 125 + 1)) + 125;
      jivoti = jivoti - 1;
      brOstavashtiJivoti = brOstavashtiJivoti - 1;
      console.log("jivoti=", jivoti);
    }

    if (areColliding(myX, myY, 72, 80, jivotX, jivotY - 70, 50, 40)) {
      jivotY = 700;
      jivoti = jivoti + 1;
      brOstavashtiJivoti = brOstavashtiJivoti + 1;
      console.log("jivoti", jivoti);
      jivotX = Math.floor(Math.random() * (610 - 125 + 1)) + 170;
      document.getElementById("jivot").play();
    }
  }

  // premahvane na kolata koqto ne sme izbrali i pokavane na tazi, koqto sme
  if (kola10 == true) {
    kola1 = false;
    kola2 = true;
  }

  if (kola25 == true) {
    kola1 = false;
    kola2 = false;
    kola3 = true;
  }

  if (kola50 == true) {
    kola1 = false;
    kola2 = false;
    kola3 = false;
    kola4 = true;
  }

  if (kola75 == true) {
    kola5 = true;
    kola1 = false;
    kola2 = false;
    kola3 = false;
    kola4 = false;
  }

  if (kola100 == true) { 
    kola1 = false;
    kola2 = false;
    kola3 = false;
    kola4 = false;
    kola5 = false;
    kola6 = true;
  }

  // stop znaka pri pausa
  if (stop === true) {
    drawImage(pausee,300,200,200,200);
  }

  // risuvane na kartinkite za kak se igrae, kontrolite i zanas kogato cuknem suotvetnite butoni
  if (ksi == true) {
    zatvori1 = true
    zatvori2 = false
    zatvori3 = false
    document.getElementById("drop1").disabled = true;
    document.getElementById("drop2").disabled = true;
    document.getElementById("drop3").disabled = true;
    if(translate == false){
    drawImage(instrukcii, 150, 0, 475, 600);
    } else {
      drawImage(Instructions, 150, 0, 475, 600);
    }
  } if (kontroli == true) {
    zatvori2 = true
    zatvori1 = false
    zatvori3 = false
    document.getElementById("drop1").disabled = true;
    document.getElementById("drop2").disabled = true;
    document.getElementById("drop3").disabled = true;
    if(translate == false){
    drawImage(Kontroli, 70, 50, 650, 500);
    } else {
      drawImage(Controls, 70, 50, 650, 500)
    }
  } if (zanas == true) {
    zatvori3 = true
    zatvori2 = false
    zatvori1 = false
    document.getElementById("drop1").disabled = true;
    document.getElementById("drop2").disabled = true;
    document.getElementById("drop3").disabled = true;
    if(translate == false){
    drawImage(Zanas, 175, 0, 450, 550);
    } else{
    drawImage(AboutUs, 175, 0, 450, 550);
    }
  }

  // risuvane na hikscheto za zatvarqne na kartinkite kak se igrae, kontrolite i zanas
  if (zatvori1 == true) {
    if (mishkaX > 388) {
      if (mishkaX < 424) {
        if (mishkaY > 26)
          if (mishkaY < 63) {
            ksi = false;
            kontroli = false;
            zanas = false;
            zatvori1 = false;
            pausa = false;
            stop = false
            document.getElementById("drop1").disabled = false;
            document.getElementById("drop2").disabled = false;
            document.getElementById("drop3").disabled = false;
          }
      }
    }
  }

  if (zatvori2 == true) {
    if (mishkaX > 575) {
      if (mishkaX < 603) {
        if (mishkaY > 115)
          if (mishkaY < 145) {
            ksi = false;
            kontroli = false;
            zanas = false;
            zatvori2 = false;
            pausa = false;
            stop = false
            document.getElementById("drop1").disabled = false;
            document.getElementById("drop2").disabled = false;
            document.getElementById("drop3").disabled = false;
          }
      }
    }
  }

  if (zatvori3 == true) {
    if (mishkaX > 388) {
      if (mishkaX < 424) {
        if (mishkaY > 26)
          if (mishkaY < 63) {
            ksi = false;
            kontroli = false;
            zanas = false;
            zatvori3 = false;
            pausa = false;
            stop = false
            document.getElementById("drop1").disabled = false;
            document.getElementById("drop2").disabled = false;
            document.getElementById("drop3").disabled = false;
          }
      }
    }
  }

// ako imame poveche ot tri jivota pokazva kolko poveche imame: ako imame 5 jivota shte se narisuvat 3 gumi ot lqvo shte se narisuva +2
  if (brOstavashtiJivoti > 3) {
    ctx.font = "20px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(brOstavashtiJivoti - 3, 20, 62);
  }

  if (brOstavashtiJivoti > 3) {
    ctx.font = "20px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("+", 7, 62);
  }

  // risuvane na jivotite
  if (brOstavashtiJivoti > 2) {
    drawImage(gumi, 30, 57, 25, 25);
  }

  if (brOstavashtiJivoti > 1) {
    drawImage(gumi, 55, 57, 25, 25);
  }

  if (brOstavashtiJivoti > 0) {
    drawImage(gumi, 80, 57, 25, 25);
  }

  // ako zagubim pokazva kolko vreme sme oceleli i premahva kolite ot putq
  if (brOstavashtiJivoti <= 0) {
    const timerDisplay = document.getElementById("timer");
    document.getElementById("timer").style.display = "block";
    if(translate == true){
      timerDisplay.textContent = "You survived" + " " + count + " " + "seconds";
    } else {
    timerDisplay.textContent = "Ти оцеля" + " " + count + " " + "секунди";
    }
    document.getElementById("drop1").disabled = true;
    document.getElementById("drop2").disabled = true;
    document.getElementById("drop3").disabled = true;
    document.getElementById("drop4").disabled = true;
    document.getElementById("snimka").style.display = "block";
    document.getElementById("gameover").style.display = "block";
    vragX = 1;
    kolaX = 1;
    truckX = 1;
    busX = 1;
    sportnakolaX = 1;
    kolichkaX = 1;
    lokvaX = 1;
    remontX = 1;
    jivotX = 1;
    pausa = true

  }

  // ako se blusnem vuv varel se pokazva jele
  if(technost == true){
  drawImage(grass, 1, 200, 800, 400)
  }

  // zasichane ako za purvi put se bluskame s varela
  if (!lokva && areColliding(myX, myY, 50, 100, lokvaX, lokvaY - 90, 50, 100)) {
    varel = true
    lokva = true
    technost = true
    pausa = true
    lokvaY = 0
    console.log("izpolzvaj chistachkite");
    document.getElementById("lokva").play();
  }
  
  // zasichane na sblusuk s varela
  if (areColliding(myX, myY, 50, 100, lokvaX, lokvaY - 90, 50, 100)) {
    technost = true
    console.log("izpolzvaj chistachkite");
    document.getElementById("lokva").play();
  }

  // risuvane na kartinkata na dvigatelq v cherveno ili zeleno
  if(dvigatelpic === true){
    drawImage(dvigatel1,710,10,50,50)
  } else {
    drawImage(dvigatel2,710,10,50,48)
  }


  // prevejdane na kartinkite na bulgarski ili anglijski
  if (tochk == true) {
    if(translate == false){
    drawImage(iskash10, 200, 40, 400, 550);
    drawImage(ne, 490, 300, 34, 25);
    drawImage(da, 270, 300, 44, 35);
    } else{
      drawImage(want10, 200, 40, 400, 550);
      drawImage(no, 490, 300, 40, 30);
      drawImage(yes, 270, 300, 44, 35);
    }
  }

  if (tochk25 == true) {
        if(translate == false){
    drawImage(iskash25, 200, 40, 400, 550);
    drawImage(ne, 490, 300, 40, 30);
    drawImage(da, 270, 300, 44, 35);
        } else {
          drawImage(want25, 200, 40, 400, 550);
          drawImage(no, 490, 300, 40, 30);
          drawImage(yes, 270, 300, 44, 35);
        }
  }

  if (tochk50 == true) {
        if(translate == false){
    drawImage(iskash50, 225, 40, 375, 550);
    drawImage(ne, 500, 302, 45, 35);
    drawImage(da, 270, 300, 44, 35);
        } else {
          drawImage(want50, 200, 40, 400, 550);
          drawImage(no, 500, 300, 40, 30);
          drawImage(yes, 270, 300, 44, 35);
        }
  }

  if (tochk75 == true) {
        if(translate == false){
    drawImage(iskash75, 200, 40, 400, 550);
    drawImage(ne, 490, 300, 40, 30);
    drawImage(da, 270, 300, 44, 35);
        }else {
          drawImage(want75, 200, 40, 400, 550);
          drawImage(no, 490, 300, 40, 30);
          drawImage(yes, 270, 300, 44, 35);
        }
  }

  if (tochk100 == true) {
        if(translate == false){
    drawImage(iskash100, 175, 40, 450, 550);
    drawImage(ne, 500, 300, 40, 30);
    drawImage(da, 270, 300, 44, 35);
        } else {
          drawImage(want100, 190, 40, 450, 550);
          drawImage(no, 500, 300, 40, 30);
          drawImage(yes, 270, 300, 44, 35);
        }
  }

  if (nachalo === false) {
    if(translate === true){
      drawImage(georgi2, 600, 400, 200, 200);
      drawImage(govor1en, 375, 275, 300, 200);
    } else {
    drawImage(georgi2, 600, 400, 200, 200);
    drawImage(govor1, 375, 275, 300, 200);
    }
    if(mishkaX > 604.5 && mishkaX < 622.5 && mishkaY > 317 && mishkaY < 330){
      nachalo = true
      nachalo2 = false
      mishkaX = 0
    }
  }

  if (nachalo2 === false) {
    if(translate === true){
      drawImage(georgi3, 600, 400, 200, 200);
      drawImage(govor2en, 375, 275, 300, 200);
    } else {
    drawImage(georgi3, 600, 400, 200, 200);
    drawImage(govor2, 375, 275, 300, 200);
    }
    if(mishkaX > 624.5 && mishkaX < 642.5 && mishkaY > 302 && mishkaY < 315){
      nachalo2 = true
      kontroli1()
      mishkaX = 0
      dropdown = false
      vragY = 2000;
      vragX = 400;
      kolaY = 0;
      truckY = 2000;
      truckX = 500;
      busY = 2000;
      busX = 600;
      sportnakolaY = 2000;
      sportnakolaX = 300;
      kolichkaY = 0;
      lokvaY = 0;
      remontY = 0;
      jivotY = 0; 
    }
  }

  if (varel == true) {
    if(translate == true){
      drawImage(georgi2, 600, 400, 200, 200);
      drawImage(govor3en, 375, 275, 300, 200);
    } else {
    drawImage(georgi2, 600, 400, 200, 200);
    drawImage(govor3, 375, 275, 300, 200);
      }
    if(mishkaX > 628.5 && mishkaX < 644.5 && mishkaY > 307 && mishkaY < 324){
      varel = false
      pausa = false
      mishkaX = 0
    }
  }

  if (sblusuk == true) {
    if(translate == true){
      drawImage(georgi1, 600, 360, 200, 245);
      drawImage(govor4en, 400, 450, 250, 150);
    } else {
    drawImage(georgi1, 600, 400, 200, 200);
    drawImage(govor4, 400, 450, 250, 150);
    }

    if(mishkaX > 611.5 && mishkaX < 630.5 && mishkaY > 500 && mishkaY < 510){
      sblusuk = false
      mishkaX = 0
    }
  }

  if (vzemane == true) {
    if(translate == true){
      drawImage(georgi4, 600, 400, 200, 200);
      drawImage(govor5en, 375, 275, 300, 200);
    } else {
    drawImage(georgi4, 600, 400, 200, 200);
    drawImage(govor5, 375, 275, 300, 200);
    }
    if(mishkaX > 625.5 && mishkaX < 645.5 && mishkaY > 302 && mishkaY < 321){
      vzemane = false
      mishkaX = 0
    }
  }

  if (tank == true) {
    if(translate == true){
      drawImage(georgi4, 600, 400, 200, 200);
      drawImage(govor6en, 375, 275, 300, 200);
    } else {
    drawImage(georgi4, 600, 400, 200, 200);
    drawImage(govor6, 375, 275, 300, 200);
    }
    if(mishkaX > 615.5 && mishkaX < 637.5 && mishkaY > 314 && mishkaY < 331){
      tank = false
      mishkaX = 0
    }
  }


}

// zvuk na strelba ot tanka
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    if(kola100 === true){
  brOstavashtiPatroni -= 1
  document.getElementById("strelba")
  strelba.play()
      }
  }
});

// zasichane na mishkata
function mouseup() {
  // Pri klik s lqv buton - pokaji koordinatite na mishkata
  console.log("Mouse clicked at", mouseX, mouseY);
  mishkaX = mouseX;
  mishkaY = mouseY;
}

function keyup(key) {
  // Pechatane na koda na natisnatiq klavish
  console.log("Pressed", key);
}

// puskane na muzikata
function playMusic() {
  musika = true;
  document.getElementById("music").volume = 0.1;
  music.play();
}

// pauzirane na muzikata
function pauseMusic() {
  musika = false;
  document.getElementById("music").volume = 0;
  document.getElementById("music2").volume = 0;
  document.getElementById("music3").volume = 0;
  document.getElementById("music4").volume = 0;
  document.getElementById("music5").volume = 0;
}

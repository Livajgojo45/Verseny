function szamolas() {
    var testmagassag = document.getElementById("magassag").value;
    testmagassag = Number(testmagassag);

    var konyokszelesseg = document.getElementById("konyokszelesseg").value;
    konyokszelesseg = Number(konyokszelesseg);

    var terdszelesseg = document.getElementById("terdszelesseg").value;
    terdszelesseg = Number(terdszelesseg);

    var csuklokerulet = document.getElementById("csuklokerulet").value;
    csuklokerulet = Number(csuklokerulet);

    var bokakerulet = document.getElementById("bokakerulet").value;
    bokakerulet = Number(bokakerulet);

    var tricepszredo = document.getElementById("tricepszredo").value;
    bokakerulet = Number(tricepszredo);

    var lapockaredo = document.getElementById("lapockaredo").value;
    bokakerulet = Number(lapockaredo);

    var combredo = document.getElementById("combredo").value;
    combredo = Number(combredo);

    var koldokredo = document.getElementById("koldokredo").value;
    koldokredo = Number(koldokredo);

    var alszarredo = document.getElementById("alszarredo").value;
    alszarredo = Number(alszarredo);

    var nyujtott_felkarkerulet = document.getElementById("nyujtott_felkarkerulet").value;
    nyujtott_felkarkerulet = Number(nyujtott_felkarkerulet);

    var mellkaskerulet = document.getElementById("mellkaskerulet").value;
    mellkaskerulet = Number(mellkaskerulet);

    var alkarkerulet = document.getElementById("alkarkerulet").value;
    alkarkerulet = Number(alkarkerulet);

    var combkerulet = document.getElementById("combkerulet").value;
    combkerulet = Number(combkerulet);

    var alszarkerulet = document.getElementById("alszarkerulet").value;
    alszarkerulet = Number(alszarkerulet);

    var vallszelesseg = document.getElementById("vallszelesseg").value;
    vallszelesseg = Number(vallszelesseg);

    var mellkasszelesseg = document.getElementById("mellkasszelesseg").value;
    mellkasszelesseg = Number(mellkasszelesseg);

    var csiposzelesseg = document.getElementById("csiposzelesseg").value;
    csiposzelesseg = Number(csiposzelesseg);

    var mellkasmelyseg = document.getElementById("mellkasmelyseg").value;
    mellkasmelyseg = Number(mellkasmelyseg);

    var tc = 0;
    tc = 170.18/testmagassag;

    var zc1 = 0;
    zc1 = (tc * konyokszelesseg - 6.48) / 0.35;

    var zc2 = 0;
    zc2 = (tc * terdszelesseg - 9.52 ) / 0.48;

    var zc3 = 0;
    zc3 = (tc * csuklokerulet - 16.35 ) / 3.14 / 0.72;

    var zc4 = 0;
    zc4 = (tc * bokakerulet - 21.71) / 3.14 / 1.33;

    var zb1 = 0;
    zb1 = ( tc * tricepszredo - 15.41 ) / 4.47;

    var zb2 = 0;
    zb2 = ( tc * lapockaredo - 17.5 ) / 5.17;

    var zb3 = 0;
    zb3 = ( tc * combredo - 27 ) / 8.33;

    var zb4 = 0;
    zb4 = ( tc * koldokredo - 25.4 ) / 7.78;

    var zb5 = 0;
    zb5 = ( tc * alszarredo - 16 ) / 4.67;

    var zi1 = 0;
    zi1 = ( ( nyujtott_felkarkerulet - 0.314 * tricepszredo ) * tc - 22.05) / 3.67;

    var zi2 = 0;
    zi2 = ( ( mellkaskerulet - 0.314 * lapockaredo ) * tc - 82.36 ) / 4.68;

    var zi3 = 0;
    zi3 = ( tc * alkarkerulet - 25.13 ) / 1.41;

    var zi4 = 0;
    zi4 = ( ( combkerulet - 0.314 * combredo) * tc - 44.34 ) / 3.59;

    var zi5 = 0;
    zi5 = ( ( alszarkerulet - 0.314 * alszarredo ) * tc - 30.22) / 1.97;

    var zm1 = 0;
    zm1 = ( vallszelesseg * tc - 38.04 ) / 1.92;

    var zm2 = 0;
    zm2 = ( mellkasszelesseg * tc - 27.92 ) / 1.74;

    var zm3 = 0;
    zm3 = ( csiposzelesseg * tc - 28.84 ) / 1.75;

    var zm4 = 0;
    zm4 = ( mellkasmelyseg * tc - 17.5 ) / 1.38;


    var csonttomeg = 0;
    csonttomeg = ( 1.75 * 0.25 * ( zc1 + zc2 + zc3 + zc4 ) + 10.49 ) / ( tc * tc * tc )
    csonttomeg = Math.round(csonttomeg*100)/100

    var zsirtomeg = 0;
    zsirtomeg = ( 3.25 * 0.2 * ( zb1 + zb2 + zb3 + zc4 + zb5 ) + 12.13 ) / ( tc * tc * tc )
    zsirtomeg = Math.round(zsirtomeg*100)/100

    var izomtomeg = 0;
    izomtomeg = ( 2.99 * 0.2 * ( zi1 + zi2 + zi3 + zi4 + zi5 ) + 25.55 ) / ( tc * tc * tc )
    izomtomeg = Math.round(izomtomeg*100)/100

    var zsigertomeg
    zsigertomeg = ( 1.9 * 0.25 * ( zm1 + zm2 + zm3 + zm4 ) + 16.41 ) / ( tc * tc * tc )
    zsigertomeg = Math.round(zsigertomeg*100)/100

    var becsult_testtomeg = 0;
    becsult_testtomeg = csonttomeg + zsirtomeg + izomtomeg + zsigertomeg
    becsult_testtomeg = Math.round(becsult_testtomeg*100)/100

    document.getElementById("csonttomeg_eredmeny").innerText=csonttomeg;
    document.getElementById("zsirtomeg_eredmeny").innerText=zsirtomeg;
    document.getElementById("izomtomeg_eredmeny").innerText=izomtomeg;
    document.getElementById("zsigertomeg_eredmeny").innerText=zsigertomeg;
    document.getElementById("becsult_testtomeg_eredmeny").innerText=becsult_testtomeg;
}
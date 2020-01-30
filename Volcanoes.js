let volcanoes = require('./volcanoes.json');
eruptedIn70s();

// Find the volcanoes in Italy
// Create a function to count volcanoes for a given country. Return the number of volcanoes for the country
//           function countEruptions(country)
// Count the number of volcanoes between 1900 and 2000
// Add up how many people died in all eruptions. There is a field called DEATH in the valcano data use it.
//      The DEATH attribute is sometimes a string so to convert it to a number 
//      you need to do something like this --- volcano.DEATH*1 to convert it to a number
let catchTheCount;
catchTheCount = countEruptions('Italy');
console.log('Eruptions in Italy ' + catchTheCount);
let betweenYears;
betweenYears = eruptionsBetween(1990, 2000);
console.log(betweenYears + ' eruptions between those 2 years.');
let totalDeaths;
totalDeaths = deathsFromVolcanoes();
console.log('Total deaths from volcanoes: ' + totalDeaths);
let elevationEruptions;
elevationEruptions = ElevationEruption(1000);
console.log(elevationEruptions + ' deaths came from above 1000 feet of elevation.');



function deathsFromVolcanoes() {

    let totalDead = 0; {
        for (const volcano of volcanoes)
            totalDead += volcano.DEATHS * 1;




    }
    return totalDead;
}

function ElevationEruption(elevation) {

    let count = 0;

    for (const vol of volcanoes) {
        if (vol.Elevation >= elevation)
            
        count++;

    }



    return count;
}




function eruptedIn70s() {
    for (const volcano of volcanoes) {
        if (volcano.Year == 1970)
            console.table(volcano);
    }
}

function eruptedIn(country) {
    for (const vol of volcanoes) {

        if (vol.Country == country)
            console.table(vol);
    }


}


function countEruptions(country) {

    let count = 0; {
        for (const vol of volcanoes)
            if (vol.Country == country)
                count++;


    }
    return count;
}

function eruptionsBetween(year1, year2) {
    let add = 0;

    for (const vol of volcanoes) {
        if (vol.Year >= year1 && vol.Year <= year2)
            console.table(vol);
        add++
    }
    return add++;


}
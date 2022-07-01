const SOUND_SPEED=761.207
const SEC_PER_HOUR= 3600

let secBetween, timeInHours, distInMiles; //Statement 1

//Get seconds between lighting and thunder
secBetween= window.prompt()

timeInHours=secBetween/SEC_PER_HOUR
distInMiles= SOUND_SPEED*timeInHours

 console.log(" Miles from ligfhtning strikes: ")
 console.log (distInMiles)
const Person = require('./person.js');

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "";
    this.waitingList = [];
    this.passengers = [];
  }

  /*
      To keep a track of everyone, you will have three different lists:

      waitingList: people waiting for the elevator -they made the request and they're waiting the elevator to come
      passengers: people currently in the elevator
      requests: a list of pending requests. Floors where the elevator must stop.

  */

  start() {
    var moveElevator = setInterval(this.update, 1000);
  }

  stop() {
    clearInterval(moveElevator);
  }

  update() {
    this.log();
    this._passengersEnter();
    this._passengersLeave();
  }

    _passengersEnter(person) {
    this.passengers.push(person);
    this.waitingList.splice(this.waitingList.indexOf(person), 1);
    console.log(`${person.name} entered in floor ${person.originFloor} with destination ${person.destinationFloor}`);
}

    _passengersLeave(person) {
    this.passengers.pop(person);
    console.log(`${person.name} has left the elevator`)
}


  floorUp() {
    this.floor < 10
    ? (this.floor++, this.direction = 'Up')
    : console.log("The elevator is in the last floor");
    }

  floorDown() {
    this.floor > 0
      ? (this.floor--, this.direction = 'Down')
      : console.log("The elevator is in the first floor");
    }

    call(person) {
//When a person calls the elevator (the call function is executed), we will add that person into the waitingList array.
      this.waitingList.push(person);
//Also, add the (originFloor) to the requests array to let the elevator know where it has to stop to pick the passenger up.
      this.requests.push(person.originFloor);
    }


  log() {
    console.log(`Direction: ${this.direction}`);
    console.log(`Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

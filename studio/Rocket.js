"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.totalCapacityKg = 0;
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMass = 0;
        items.forEach(function (item) {
            totalMass += item.massKg;
        });
        return totalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalMass = 0;
        totalMass += this.sumMass(this.astronauts);
        totalMass += this.sumMass(this.cargoItems);
        return totalMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var isAdded = false;
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            isAdded = true;
        }
        return isAdded;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var isAdded = false;
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            isAdded = true;
        }
        return isAdded;
    };
    return Rocket;
}());
exports.Rocket = Rocket;

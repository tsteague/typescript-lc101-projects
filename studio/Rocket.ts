import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket
{
  name: string;
  totalCapacityKg: number = 0;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor( name: string, totalCapacityKg: number )
  {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass( items: Payload[] ): number
  {
    let totalMass: number = 0;

    items.forEach( function(item) {
      totalMass += item.massKg; 
    })
    return totalMass;
  }

  currentMassKg(): number
  {
    let totalMass: number = 0;
  
    totalMass += this.sumMass( this.astronauts );
    totalMass += this.sumMass( this.cargoItems );

    return totalMass;
  }

  canAdd( item: Payload ): boolean
  {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo( cargo: Cargo ): boolean
  {
    let isAdded: boolean = false;
    if ( this.canAdd(cargo) )
    {
      this.cargoItems.push( cargo );
      isAdded = true;
    }

    return isAdded;
  }

  addAstronaut( astronaut: Astronaut ): boolean
  {
    let isAdded: boolean = false;
    if ( this.canAdd(astronaut) )
    {
      this.astronauts.push( astronaut );
      isAdded = true;
    }

    return isAdded;
  }
}

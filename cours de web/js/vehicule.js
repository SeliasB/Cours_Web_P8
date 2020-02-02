class vehicule {
	
constructor (name) {
this.name = name || "vehicule";

}

}

class voiture extends vehicule {

  constructor() {
    super(); //qu'est-ce que cela implique ?
    this.name = "voiture";
    this.roues = 4;
    this.porte = 5;
    this.moteur = {	
      puissance: 60,
	  marche: false,
	  type: "thermique"
    };
    this.voyants = {
      marche: false
    }

  }
  contact() {
    console.log("on allume le contact");
    this.allumelesVoyants();
  }

allumelesVoyants(){
  console.log("Les voyants s'allume");
  this.voyants.marche = true;
}

decontact(){
  console.log("on coupe le contact");
  this.eteindreLesVoyants();
}

eteindreLesVoyants(){
  console.log("Les voyants s'éteigne");
  this.voyants.marche = false;
}

  demarre() {
    console.log("demarre le moteur");
	this.moteur.marche = true ;
  }
  coupe(){
    console.log("on coupe le moteur");
    this.moteur.marche = false;
  }
}

class sportive extends voiture {

constructor(name) {
  super(name || "voiture");
  this.porte = 5;
  this.moteur.puissance = 450;

}

}

class moto extends voiture {
	
constructor(name) {
	super(name || "moto");
    this.roues = 2;
    this.moteur = {	
      puissance: 120,
	  marche: false,
	  type: "thermique",
    };
    this.voyants = {
      marche: false
    }

}
}

class scooter extends moto {
	
constructor(name) {
	super(name || "scooter");
    this.roues = 2;
    this.moteur = {	
      puissance: 120,
	  marche: false,
	  type: "electrique",
	  batterie: 78
    };
    this.voyants = {
      marche: false
    }

}
}

class velo extends vehicule {
	
constructor(name) {
	super(name || "velo")
    this.roues = 2;
    
    }

}




const test_vehicule = () => { 

  console.log("test vehicule");

  let maVoiture = new sportive("ma porche");

  console.log(maVoiture.moteur);

  maVoiture.contact();
  maVoiture.demarre();
  console.log(maVoiture.moteur.marche);
};

const test_scooter = () => { 

  console.log("Je monte sur mon scooter");

  let monScooter = new scooter("ma super mobilette");

  console.log("la batterie est pleine à "|| monScooter.moteur.batterie||"%");

  monScooter.contact();
  monScooter.demarre();
  console.log(monScooter.moteur.marche);
};
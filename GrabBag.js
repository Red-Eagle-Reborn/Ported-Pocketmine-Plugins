var shiled = false;

function procCmd(cmd) {
	var c = cmd.split(" ");
	if(cmd == "blowup") {
		if(c[1]) {
			var radius = parseInt(c[1]);
			explode(getPlayerX(),getPlayerY(),getPlayerZ(),radius);
		}
	}
	if(cmd == "burn") {
		if(c[1]) {
			var sec = parseInt(c[1]);
			Entity.setFireTicks(getPlayerEnt(),sec);
		}
	}
	if(cmd == "clearinv") {
		for(var i=0;i < 40; i++) {
			Player.clearInventorySlot(i);
		}
	}
	if(cmd == "entities") {
		if(c[1] == "nuke") {
			if(c[2] == "all") {
				for(var i=0;i<55;i++) {
					Entity.remove(i);
				}
			}
		}
	}
	if(cmd == "fly") {
		if(Level.getGameMode() == 0) {
			Player.setCanfly(1);
		} else {
			clientMessage("Survival Only");
		}
	}
	if(cmd == "gmc") {
		if(Level.getGameMode() == 0) {
			Level.setGameMode(1);
		}
	}
	if(cmd == "gms") {
		if(Level.getGameMode() == 1) {
			Level.setGameMode(0);
		}
	}
	if(cmd == "heal") {
		if(Level.getGameMode() == 1) {
			var cc = parseInt(c[1]);
			Entity.setHealth(getPlayerEnt(),Entity.getHealth(getPlayerEnt()) + cc);
		}
	}
	if(cmd == "shield") {
		shiled = true;
	}
}

function attackHook(a,v) {
	if(v == getPlayerEnt() && shiled == true) {
		preventDefault();
	}
}

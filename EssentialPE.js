var god = false;
var xx;
var yy;
var zz;
function procCmd(cmd) {
    if(cmd == "clearinventory" || cmd == "ci") {
        for(var i = 0; i < 40; i++) Player.clearInventorySlot(i);
    }
    if(cmd == "god") {
        godd = true;
    }
    if(cmd == "heal") {
        Player.setHealth(20);
    }
    if(cmd == "more") {
        if(Level.getGameMode() == 0) {
            addItemInventory(Player.getCarriedItem(),Player.getCarriedItemData(),64);
        }
    }
    if(cmd == "sethome") {
        xx = getPlayerX();
        yy = getPlayerY();
        zz = getPlayerZ();
    }
    if(cmd == "home") {
        setPosition(getPlayerEnt(),xx,yy,zz);
    }a
}

function newLevel() {
    xx=ModPE.readData("xx");
    yy=ModPE.readData("yy");
    zz=ModPE.readData("zz");
}

function leaveGame() {
    ModPE.saveData("xx",xx);
    ModPE.saveData("yy",yy);
    ModPE.saveData("zz",zz);
}

function attackHook(a,v) {
    if(v == getPlayerEnt() && godd == true) {
        preventDefault();
    }
}

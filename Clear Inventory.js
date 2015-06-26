function procCmd(cmd) {
var c = cmd.split(" ");
	if(cmd == "clearinv") {
		if(!c[1]) {
			clientMessage("/clearinv <playerName>");
		}
		if(c[1]) {
			if(c[1] == Player.getName()) {
				for(var i = 0;i < 40; i++) {
					Player.clearInventorySlot(i)
				}
			}
		}
	}
}

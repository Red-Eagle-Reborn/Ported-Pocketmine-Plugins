function entityRemovedHook(entity) {
	if(Entity.getEntityTypeId(entity) == 81) {
		onPosition(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity));
	}
}

function onPosition(x,y,z) {
	setPosition(getPlayerEnt(),x,y+3,z);
}

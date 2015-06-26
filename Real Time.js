var dtk = 2;
function modTick() {
    dtk--;
    if(dtk<=0) {
        dtk=2;
        Level.setTime(parseInt(Level.getTime()-1))
    }
}

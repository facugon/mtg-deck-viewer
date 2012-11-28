function autoMagicCardsInfo(obj){
    var keyValue = obj.getAttribute('keyvalue');
    keyValue = keyValue.replace(/_/g, " ").replace(/\]/g, "&").replace(/\[/g, "'");
    var win = window.open("http://magiccards.info/query?q=" + keyValue , "Magic Card Info");
}

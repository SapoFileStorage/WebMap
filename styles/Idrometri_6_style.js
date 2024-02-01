var size = 0;
var placement = 'point';

var style_Idrometri_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = "";
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Century Gothic\', sans-serif";
    var labelFill = "#FFFFFF";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = -20;
    var placement = 'point';
    if (feature.get("Nome") !== null) {
        labelText = String(feature.get("Nome"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({
            radius: 8.0 + size,
            stroke: new ol.style.Stroke({
                color: 'rgba(255,238,53,1.0)',
                lineDash: null,
                lineCap: 'butt',
                lineJoin: 'miter',
                width: 1.52
            }),
            fill: new ol.style.Fill({color: 'rgba(255,238,53,1.0)'})
        }),
        text: new ol.style.Text({
            text: labelText,
            font: labelFont,
            fill: new ol.style.Fill({ color: labelFill }),
            stroke: new ol.style.Stroke({ color: bufferColor, width: bufferWidth }),
            offsetX: offsetX,
            offsetY: offsetY,
            placement: 'top', // Modifica il posizionamento del testo sopra il punto
            textAlign: textAlign
        })
    })];

    return style;
};

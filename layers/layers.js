var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Allertemeteo_1 = new ol.format.GeoJSON();
var features_Allertemeteo_1 = format_Allertemeteo_1.readFeatures(json_Allertemeteo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Allertemeteo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Allertemeteo_1.addFeatures(features_Allertemeteo_1);
var lyr_Allertemeteo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Allertemeteo_1, 
                style: style_Allertemeteo_1,
                interactive: true,
                title: '<img src="styles/legend/Allertemeteo_1.png" /> Allerte meteo'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Allertemeteo_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Allertemeteo_1];
lyr_Allertemeteo_1.set('fieldAliases', {'id': 'id', 'Link': 'Link', });
lyr_Allertemeteo_1.set('fieldImages', {'id': 'TextEdit', 'Link': 'JsonEdit', });
lyr_Allertemeteo_1.set('fieldLabels', {'id': 'no label', 'Link': 'header label', });
lyr_Allertemeteo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
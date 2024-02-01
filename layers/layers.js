var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Fiumidamonitorare_2 = new ol.format.GeoJSON();
var features_Fiumidamonitorare_2 = format_Fiumidamonitorare_2.readFeatures(json_Fiumidamonitorare_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fiumidamonitorare_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fiumidamonitorare_2.addFeatures(features_Fiumidamonitorare_2);
var lyr_Fiumidamonitorare_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fiumidamonitorare_2, 
                style: style_Fiumidamonitorare_2,
                interactive: true,
    title: 'Fiumi da monitorare<br />\
    <img src="styles/legend/Fiumidamonitorare_2_0.png" /> 0<br />\
    <img src="styles/legend/Fiumidamonitorare_2_1.png" /> 1<br />\
    <img src="styles/legend/Fiumidamonitorare_2_2.png" /> 2<br />\
    <img src="styles/legend/Fiumidamonitorare_2_3.png" /> 3<br />\
    <img src="styles/legend/Fiumidamonitorare_2_4.png" /> 4<br />\
    <img src="styles/legend/Fiumidamonitorare_2_5.png" /> 5<br />\
    <img src="styles/legend/Fiumidamonitorare_2_6.png" /> 6<br />\
    <img src="styles/legend/Fiumidamonitorare_2_7.png" /> 99<br />\
    <img src="styles/legend/Fiumidamonitorare_2_8.png" /> <br />'
        });
var format_TrattadiinterventoLOTTO2_3 = new ol.format.GeoJSON();
var features_TrattadiinterventoLOTTO2_3 = format_TrattadiinterventoLOTTO2_3.readFeatures(json_TrattadiinterventoLOTTO2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrattadiinterventoLOTTO2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrattadiinterventoLOTTO2_3.addFeatures(features_TrattadiinterventoLOTTO2_3);
var lyr_TrattadiinterventoLOTTO2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrattadiinterventoLOTTO2_3, 
                style: style_TrattadiinterventoLOTTO2_3,
                interactive: true,
                title: '<img src="styles/legend/TrattadiinterventoLOTTO2_3.png" /> Tratta di intervento LOTTO2'
            });
var format_TrattadiinterventoLOTTO1_4 = new ol.format.GeoJSON();
var features_TrattadiinterventoLOTTO1_4 = format_TrattadiinterventoLOTTO1_4.readFeatures(json_TrattadiinterventoLOTTO1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrattadiinterventoLOTTO1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrattadiinterventoLOTTO1_4.addFeatures(features_TrattadiinterventoLOTTO1_4);
var lyr_TrattadiinterventoLOTTO1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrattadiinterventoLOTTO1_4, 
                style: style_TrattadiinterventoLOTTO1_4,
                interactive: true,
                title: '<img src="styles/legend/TrattadiinterventoLOTTO1_4.png" /> Tratta di intervento LOTTO1'
            });
var format_Areedicantiere_5 = new ol.format.GeoJSON();
var features_Areedicantiere_5 = format_Areedicantiere_5.readFeatures(json_Areedicantiere_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areedicantiere_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areedicantiere_5.addFeatures(features_Areedicantiere_5);
var lyr_Areedicantiere_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areedicantiere_5, 
                style: style_Areedicantiere_5,
                interactive: true,
                title: '<img src="styles/legend/Areedicantiere_5.png" /> Aree di cantiere'
            });
var format_Idrometri_6 = new ol.format.GeoJSON();
var features_Idrometri_6 = format_Idrometri_6.readFeatures(json_Idrometri_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Idrometri_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Idrometri_6.addFeatures(features_Idrometri_6);
var lyr_Idrometri_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Idrometri_6, 
                style: style_Idrometri_6,
                interactive: true,
                title: '<img src="styles/legend/Idrometri_6.png" /> Idrometri'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Fiumidamonitorare_2.setVisible(true);lyr_TrattadiinterventoLOTTO2_3.setVisible(true);lyr_TrattadiinterventoLOTTO1_4.setVisible(true);lyr_Areedicantiere_5.setVisible(true);lyr_Idrometri_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Fiumidamonitorare_2,lyr_TrattadiinterventoLOTTO2_3,lyr_TrattadiinterventoLOTTO1_4,lyr_Areedicantiere_5,lyr_Idrometri_6];
lyr_Fiumidamonitorare_2.set('fieldAliases', {'CODICE': 'CODICE', 'CLASSE': 'CLASSE', 'FONTE': 'FONTE', 'TLR': 'TLR', 'DENTRO': 'DENTRO', 'REV': 'REV', 'ORDINE': 'ORDINE', 'NOME': 'NOME', 'DENOM': 'DENOM', 'RECET': 'RECET', 'BATT': 'BATT', 'LOCALITA': 'LOCALITA', 'TIPO': 'TIPO', 'CLASS': 'CLASS', 'CAT': 'CAT', });
lyr_TrattadiinterventoLOTTO2_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TrattadiinterventoLOTTO1_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Areedicantiere_5.set('fieldAliases', {'id': 'id', });
lyr_Idrometri_6.set('fieldAliases', {'Nome': 'Nome', 'Link Idro.': 'Link Idro.', });
lyr_Fiumidamonitorare_2.set('fieldImages', {'CODICE': 'Range', 'CLASSE': 'Range', 'FONTE': 'TextEdit', 'TLR': 'Range', 'DENTRO': 'Range', 'REV': 'Range', 'ORDINE': 'Range', 'NOME': 'TextEdit', 'DENOM': 'TextEdit', 'RECET': 'Range', 'BATT': 'TextEdit', 'LOCALITA': 'TextEdit', 'TIPO': 'TextEdit', 'CLASS': 'Range', 'CAT': 'Range', });
lyr_TrattadiinterventoLOTTO2_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TrattadiinterventoLOTTO1_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Areedicantiere_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Idrometri_6.set('fieldImages', {'Nome': 'TextEdit', 'Link Idro.': '', });
lyr_Fiumidamonitorare_2.set('fieldLabels', {'CODICE': 'no label', 'CLASSE': 'no label', 'FONTE': 'no label', 'TLR': 'no label', 'DENTRO': 'no label', 'REV': 'no label', 'ORDINE': 'no label', 'NOME': 'no label', 'DENOM': 'no label', 'RECET': 'no label', 'BATT': 'no label', 'LOCALITA': 'no label', 'TIPO': 'no label', 'CLASS': 'no label', 'CAT': 'no label', });
lyr_TrattadiinterventoLOTTO2_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TrattadiinterventoLOTTO1_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Areedicantiere_5.set('fieldLabels', {'id': 'no label', });
lyr_Idrometri_6.set('fieldLabels', {'Nome': 'header label - always visible', 'Link Idro.': 'inline label - visible with data', });
lyr_Idrometri_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
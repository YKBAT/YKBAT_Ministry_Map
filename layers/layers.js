var wms_layers = [];


        var lyr_ESRIMAP_0 = new ol.layer.Tile({
            'title': 'ESRI MAP',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
'
            })
        });
var format_Jayawijaya_Papua_Pegunungan_1 = new ol.format.GeoJSON();
var features_Jayawijaya_Papua_Pegunungan_1 = format_Jayawijaya_Papua_Pegunungan_1.readFeatures(json_Jayawijaya_Papua_Pegunungan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jayawijaya_Papua_Pegunungan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jayawijaya_Papua_Pegunungan_1.addFeatures(features_Jayawijaya_Papua_Pegunungan_1);
var lyr_Jayawijaya_Papua_Pegunungan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jayawijaya_Papua_Pegunungan_1, 
                style: style_Jayawijaya_Papua_Pegunungan_1,
                popuplayertitle: 'Jayawijaya_Papua_Pegunungan',
                interactive: true,
                title: '<img src="styles/legend/Jayawijaya_Papua_Pegunungan_1.png" /> Jayawijaya_Papua_Pegunungan'
            });
var format_YKBATMinistryLocations_2 = new ol.format.GeoJSON();
var features_YKBATMinistryLocations_2 = format_YKBATMinistryLocations_2.readFeatures(json_YKBATMinistryLocations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YKBATMinistryLocations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YKBATMinistryLocations_2.addFeatures(features_YKBATMinistryLocations_2);
var lyr_YKBATMinistryLocations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YKBATMinistryLocations_2, 
                style: style_YKBATMinistryLocations_2,
                popuplayertitle: 'YKBAT Ministry Locations',
                interactive: true,
                title: '<img src="styles/legend/YKBATMinistryLocations_2.png" /> YKBAT Ministry Locations'
            });
var format_Kota_Jayapura_Papua_3 = new ol.format.GeoJSON();
var features_Kota_Jayapura_Papua_3 = format_Kota_Jayapura_Papua_3.readFeatures(json_Kota_Jayapura_Papua_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kota_Jayapura_Papua_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kota_Jayapura_Papua_3.addFeatures(features_Kota_Jayapura_Papua_3);
var lyr_Kota_Jayapura_Papua_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kota_Jayapura_Papua_3, 
                style: style_Kota_Jayapura_Papua_3,
                popuplayertitle: 'Kota_Jayapura_Papua',
                interactive: true,
                title: '<img src="styles/legend/Kota_Jayapura_Papua_3.png" /> Kota_Jayapura_Papua'
            });
var format_Mamberamo_Tengah_Papua_Pegunungan_4 = new ol.format.GeoJSON();
var features_Mamberamo_Tengah_Papua_Pegunungan_4 = format_Mamberamo_Tengah_Papua_Pegunungan_4.readFeatures(json_Mamberamo_Tengah_Papua_Pegunungan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mamberamo_Tengah_Papua_Pegunungan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mamberamo_Tengah_Papua_Pegunungan_4.addFeatures(features_Mamberamo_Tengah_Papua_Pegunungan_4);
var lyr_Mamberamo_Tengah_Papua_Pegunungan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mamberamo_Tengah_Papua_Pegunungan_4, 
                style: style_Mamberamo_Tengah_Papua_Pegunungan_4,
                popuplayertitle: 'Mamberamo_Tengah_Papua_Pegunungan',
                interactive: true,
                title: '<img src="styles/legend/Mamberamo_Tengah_Papua_Pegunungan_4.png" /> Mamberamo_Tengah_Papua_Pegunungan'
            });
var format_Tolikara_Papua_Pegunungan_5 = new ol.format.GeoJSON();
var features_Tolikara_Papua_Pegunungan_5 = format_Tolikara_Papua_Pegunungan_5.readFeatures(json_Tolikara_Papua_Pegunungan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tolikara_Papua_Pegunungan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tolikara_Papua_Pegunungan_5.addFeatures(features_Tolikara_Papua_Pegunungan_5);
var lyr_Tolikara_Papua_Pegunungan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tolikara_Papua_Pegunungan_5, 
                style: style_Tolikara_Papua_Pegunungan_5,
                popuplayertitle: 'Tolikara_Papua_Pegunungan',
                interactive: true,
                title: '<img src="styles/legend/Tolikara_Papua_Pegunungan_5.png" /> Tolikara_Papua_Pegunungan'
            });
var format_Lanny_Jaya_Papua_Pegunungan_6 = new ol.format.GeoJSON();
var features_Lanny_Jaya_Papua_Pegunungan_6 = format_Lanny_Jaya_Papua_Pegunungan_6.readFeatures(json_Lanny_Jaya_Papua_Pegunungan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lanny_Jaya_Papua_Pegunungan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lanny_Jaya_Papua_Pegunungan_6.addFeatures(features_Lanny_Jaya_Papua_Pegunungan_6);
var lyr_Lanny_Jaya_Papua_Pegunungan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lanny_Jaya_Papua_Pegunungan_6, 
                style: style_Lanny_Jaya_Papua_Pegunungan_6,
                popuplayertitle: 'Lanny_Jaya_Papua_Pegunungan',
                interactive: true,
                title: '<img src="styles/legend/Lanny_Jaya_Papua_Pegunungan_6.png" /> Lanny_Jaya_Papua_Pegunungan'
            });

lyr_ESRIMAP_0.setVisible(true);lyr_Jayawijaya_Papua_Pegunungan_1.setVisible(true);lyr_YKBATMinistryLocations_2.setVisible(true);lyr_Kota_Jayapura_Papua_3.setVisible(true);lyr_Mamberamo_Tengah_Papua_Pegunungan_4.setVisible(true);lyr_Tolikara_Papua_Pegunungan_5.setVisible(true);lyr_Lanny_Jaya_Papua_Pegunungan_6.setVisible(true);
var layersList = [lyr_ESRIMAP_0,lyr_Jayawijaya_Papua_Pegunungan_1,lyr_YKBATMinistryLocations_2,lyr_Kota_Jayapura_Papua_3,lyr_Mamberamo_Tengah_Papua_Pegunungan_4,lyr_Tolikara_Papua_Pegunungan_5,lyr_Lanny_Jaya_Papua_Pegunungan_6];
lyr_Jayawijaya_Papua_Pegunungan_1.set('fieldAliases', {'regency': 'regency', 'province': 'province', });
lyr_YKBATMinistryLocations_2.set('fieldAliases', {'Ministry Location': 'Ministry Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Kota_Jayapura_Papua_3.set('fieldAliases', {'regency': 'regency', 'province': 'province', });
lyr_Mamberamo_Tengah_Papua_Pegunungan_4.set('fieldAliases', {'regency': 'regency', 'province': 'province', });
lyr_Tolikara_Papua_Pegunungan_5.set('fieldAliases', {'regency': 'regency', 'province': 'province', });
lyr_Lanny_Jaya_Papua_Pegunungan_6.set('fieldAliases', {'regency': 'regency', 'province': 'province', });
lyr_Jayawijaya_Papua_Pegunungan_1.set('fieldImages', {'regency': 'TextEdit', 'province': 'TextEdit', });
lyr_YKBATMinistryLocations_2.set('fieldImages', {'Ministry Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Kota_Jayapura_Papua_3.set('fieldImages', {'regency': 'TextEdit', 'province': 'TextEdit', });
lyr_Mamberamo_Tengah_Papua_Pegunungan_4.set('fieldImages', {'regency': 'TextEdit', 'province': 'TextEdit', });
lyr_Tolikara_Papua_Pegunungan_5.set('fieldImages', {'regency': 'TextEdit', 'province': 'TextEdit', });
lyr_Lanny_Jaya_Papua_Pegunungan_6.set('fieldImages', {'regency': 'TextEdit', 'province': 'TextEdit', });
lyr_Jayawijaya_Papua_Pegunungan_1.set('fieldLabels', {'regency': 'inline label - always visible', 'province': 'no label', });
lyr_YKBATMinistryLocations_2.set('fieldLabels', {'Ministry Location': 'inline label - always visible', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_Kota_Jayapura_Papua_3.set('fieldLabels', {'regency': 'inline label - always visible', 'province': 'no label', });
lyr_Mamberamo_Tengah_Papua_Pegunungan_4.set('fieldLabels', {'regency': 'inline label - always visible', 'province': 'no label', });
lyr_Tolikara_Papua_Pegunungan_5.set('fieldLabels', {'regency': 'inline label - always visible', 'province': 'no label', });
lyr_Lanny_Jaya_Papua_Pegunungan_6.set('fieldLabels', {'regency': 'inline label - always visible', 'province': 'no label', });
lyr_Lanny_Jaya_Papua_Pegunungan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
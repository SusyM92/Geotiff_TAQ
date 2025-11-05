var wms_layers = [];


        var lyr_earth_0 = new ol.layer.Tile({
            'title': 'earth',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_14_fuso_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1-4_fuso",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/14_fuso_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1479401.531484, 5740107.127282, 1484263.585288, 5744351.359495]
                            })
                        });

lyr_earth_0.setVisible(true);lyr_14_fuso_1.setVisible(true);
var layersList = [lyr_earth_0,lyr_14_fuso_1];

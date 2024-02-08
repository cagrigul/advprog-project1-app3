require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/widgets/Home",
  "esri/widgets/Legend",
  "esri/widgets/LayerList",
  "esri/widgets/Search",
  "esri/layers/FeatureLayer"
], function(WebScene, SceneView, Home, Legend, LayerList, Search, FeatureLayer) {
  
  var scene = new WebScene({
    portalItem: {
      id: "b53bf05e5362403abb48837050967c00"
    }
  });
  
 var view = new SceneView({
  container: "viewDiv",
  map: scene,
  environment: {
    lighting: {
      date: new Date('2024-02-07T18:00:00Z'),
      directShadowsEnabled: false, 
      cameraTrackingEnabled: false
    }
  }
});

  var homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, "top-left");

  var legend = new Legend({
    view: view
  });
  view.ui.add(legend, "bottom-right");

  // 

  var layerList = new LayerList({
    view: view
  });
  view.ui.add(layerList, "top-right");
});

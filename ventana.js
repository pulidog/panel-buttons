qx.Class.define("mapas2.ventana",
{
  extend : qx.ui.window.Window,

  construct : function()
  {
    this.base(arguments, "mapas2");

    // hide the window buttons
    this.setShowClose(false);
    this.setShowMaximize(false);
    this.setShowMinimize(false);

    // adjust size
    this.setWidth(250);
    this.setHeight(300);
    
    // set id for a mapas2
    
    this.setId('map')    
    this.addCssClass("map");
      // create the composite
//    var composite = new qx.ui.container.Composite()

//    // configure it with a horizontal box layout with a spacing of '5'
//    composite.setLayout(new qx.ui.layout.HBox(5));

//    // add some children
//    composite.add(new qx.html.Element("canvas", null, {
//                            id : "map",
////                            width : 250,
////                            height : 300
//                        })
//                        );

    var layout = new qx.ui.layout.Grid(0, 0);
    layout.setRowFlex(1, 1);
    layout.setColumnFlex(0, 1);
    this.setLayout(layout);
    this.setContentPadding(0);
    // toolbar
    var toolbar = new qx.ui.toolbar.ToolBar();
	toolbar.set({
		width:245,
		height:38
	});
    this.add(toolbar, {row: 0, column: 0, colSpan: 2});
    
//	var ToolBar_4350 = new qx.ui.toolbar.ToolBar();
//	ToolBar_4350.set({
//		width:245,
//		height:38
//	});
//	ToolBar_4350.setLayoutProperties({"left":248,"top":107});
	var Button_4390 = new qx.ui.toolbar.Button();
	Button_4390.set({
		label:"Button"
	});
	toolbar.add(Button_4390);
	var Button_4432 = new qx.ui.toolbar.Button();
	Button_4432.set({
		label:"Button"
	});
	toolbar.add(Button_4432);
	var CheckBox_4469 = new qx.ui.toolbar.CheckBox();
	CheckBox_4469.set({
		label:"CheckBox"
	});
	toolbar.add(CheckBox_4469);
	var MenuButton_4509 = new qx.ui.toolbar.MenuButton();
	MenuButton_4509.set({
		label:"MenuButton"
	});
	toolbar.add(MenuButton_4509);
	var Part_4552 = new qx.ui.toolbar.Part();
	toolbar.add(Part_4552);
	var RadioButton_4590 = new qx.ui.toolbar.RadioButton();
	RadioButton_4590.set({
		label:"RadioButton"
	});
	toolbar.add(RadioButton_4590);
//	this.add(ToolBar_4350);

//    var map = new mapas2.ui.OpenLayersMap(); 

//    var map = new ol.Map({
//          target: 'osmMap',
//          layers: [
//            new ol.layer.Tile({
//              source: new ol.source.MapQuest({layer: 'sat'})
//            })
//          ],
//          view: new ol.View({
//            center: ol.proj.transform([37.41, 8.82],
//             'EPSG:4326', 'EPSG:3857'),
//            zoom: 4
//          })
//        });
      

    }


  
});

var xml = "";

xml += '<mxGraphModel dx="868" dy="473" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="0" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">';
xml += '<root>';
xml += '<mxCell id="0"/>';
xml += '<mxCell id="1" parent="0"/>';

function makeCell(value, config, parent, geometry){
  var id = Math.random().toString(36).split(".")[1];
  xml += '<mxCell id="' + id + '" value="' + value + '" style="' + (typeof config == "string" ? config : Object.keys(config).map(function(k){ return k + "=" + config[k] + ";"; }).join("") ) + '" vertex="1" parent="' + parent.toString() + '">';
  xml += '<mxGeometry ' + Object.keys(geometry).map(function(k){ return k + '="' + geometry[k].toString() + '"'; }).join(" ") + ' as="geometry"/>';
  xml += '</mxCell>';
  return id;
}

function rgb2hex(x){
  return "#" + ((256*256*256) + (x[0] * 256 * 256) + (x[1] * 256) + x[2]).toString(16).substr(1);
}
function primary2secondary(x){
  return x.map(function(a){ return a + 51; }).map(function(a){ if(a > 255) return 255; return a; });
}


function makeContainer(label,icon,color,w,h,groupId){

makeCell(
  "",
  {
    "html": "1",
    "shape": "mxgraph.basic.corner_round_rect",
    "dx": "20",

    "gradientDirection": "east",
    "fillColor": rgb2hex(color),
    "gradientColor": rgb2hex(primary2secondary(color)),
    
    "strokeColor": "none"
  },
  groupId,
  {
    "width": w,
    "height": "80"
  }
);

makeCell(
  "",
  {
    "html": "1",
    "shape": "ellipse",
    "fillColor": "RGBA(255,255,255,0.8)",
    "strokeColor": "none"
  },
  groupId,
  {
    "x": "4",
    "y": "4",
    "width": "72",
    "height": "72"
  }
);

makeCell(
  label,
  {
    "shape": icon,

    "verticalLabelPosition": "middle",
    "verticalAlign": "middle",
    "labelPosition": "right",
    "align": "left",
    "spacingLeft": "20",

    "fontFamily": "Lucida Console",
    "fontColor": "#FFFFFF",
    "fontSize": "16",

    "strokeColor": rgb2hex(color),
    "fillColor": rgb2hex(primary2secondary(color))
  },
  groupId,
  {
    "x": "20",
    "y": "20",
    "width": "40",
    "height": "40"
  }
);

makeCell(
  "",
  {
    "html": "1",
    "fillColor": "rgba(" + primaryrgb.join(",") + ",0.1)",
    "strokeColor": "none"
  },
  groupId,
  {
    "x": "0",
    "y": "80",
    "width": w,
    "height": h - 80
  }
);

}



function makeIcon(label,shape,color,x,y,w,h,groupId){
  return makeCell(
    label,
    {
      "shape": shape,
  
      "verticalLabelPosition": "bottom",
      "verticalAlign": "top",
      "align": "center",
  
      "html": "1",
      "strokeColor": rgb2hex(color),
      "fillColor": rgb2hex(primary2secondary(color)),
      "fontColor": rgb2hex(color),
  
      "fontFamily": "Lucida Console",
      "fontSize": "10",  
    },
    groupId,
    {
      "x": x + ((50-w) / 2),
      "y": y + (50-h),
      "width": w,
      "height": h
    }
  );
}

function makeTitle(label,x,y,w,h,groupId){
  return makeCell(
    label,
    {
      "shape": "text",
      "whiteSpace": "wrap",
      "fontSize": "24",
      "fontStyle": "2",
      "verticalAlign": "middle",
      "align": "center",
  
      "html": "1",
      "strokeColor": "none",
      "fillColor": "none",
      "fontColor": "#666666",
  
      "fontFamily": "Verdana",
    },
    1,
    {
      "x": x,
      "y": y,
      "width": w,
      "height": h
    }
  );
}

var primaryrgb = [215,78,20];

var group1 = makeCell(
  "", "group", "1",
  {
    "x": 350,
    "y": 45,
    "width": "190",
    "height": "170"
  }
);

makeContainer("Tealium&#10;CDN","mxgraph.aws3.internet",primaryrgb,190,170,group1)
makeTitle("Tealium Layer",350,-40,190,40);
makeIcon("Loader" ,"mxgraph.azure.script_file",primaryrgb, 10,90,50,50,group1);
makeIcon("Tags"   ,"mxgraph.azure.script_file",primaryrgb, 70,90,50,50,group1);
makeIcon("Privacy","mxgraph.azure.script_file",primaryrgb,130,90,50,50,group1);

var group2 = makeCell(
  "", "group", "1",
  {
    "x": "640",
    "y": 0,
    "width": "190",
    "height": "260"
  }
);


var primaryrgb = [20,127,193];

makeContainer("Tealium&#10;IQ","mxgraph.bpmn.service_task",primaryrgb,190,260,group2)
makeTitle("Vendor Layer",640,-40,190,40);

makeIcon("Data&#10;Definitions"  ,"mxgraph.office.concepts.book_journal" ,primaryrgb, 10,90,50,50,group2);
makeIcon("Tags"          ,"mxgraph.azure.script_file"         ,primaryrgb, 70,90,50,50,group2);
makeIcon("Load&#10;Rules"        ,"mxgraph.aws4.rule_2"       ,primaryrgb,130,90,50,50,group2);

makeIcon("Extensions"    ,"mxgraph.azure.startup_task" ,primaryrgb, 10,180,50,50,group2);
makeIcon("User&#10;Management","mxgraph.office.users.user_services"   ,primaryrgb, 70,180,50,50,group2);
makeIcon("Publish"    ,"mxgraph.ios7.icons.pointer"    ,primaryrgb,130,180,50,50,group2);

var group3 = makeCell(
  "", "group", "1",
  {
    "x": "0",
    "y": "90",
    "width": "250",
    "height": "170"
  }
);

var primaryrgb = [0,134,79];

makeContainer("Customer&#10;Browsers","mxgraph.azure.computer",primaryrgb,250,170,group3)
makeTitle("Customer Layer",0,-40,250,40);
makeIcon("Mobile&#10;Phones" ,"mxgraph.android.phone2" ,primaryrgb, 10,90,30,50,group3);
makeIcon("Computers"         ,"mxgraph.azure.laptop"   ,primaryrgb, 70,90,50,30,group3);
makeIcon("Tablets"           ,"mxgraph.android.tab2"   ,primaryrgb,130,90,40,50,group3);
makeIcon("Consoles"          ,"mxgraph.cisco19.joystick_keyboard"   ,primaryrgb,190,90,50,30,group3);

var group4 = makeCell(
  "", "group", "1",
  {
    "x": "375",
    "y": "300",
    "width": "140",
    "height": "410"
  }
);

var primaryrgb = [79,0,134];

makeContainer("Tags","mxgraph.azure.script_file",primaryrgb,140,410,group4)
makeIcon("Analytics" ,"mxgraph.mscae.general.graph" ,primaryrgb, 45,90,50,50,group4);
makeIcon("Webchat"         ,"mxgraph.ios7.icons.chat"   ,primaryrgb, 45,170,50,40,group4);
makeIcon("Reviews"           ,"mxgraph.office.security.token"   ,primaryrgb,45,250,40,50,group4);
makeIcon("Beacons"          ,"mxgraph.networks.radio_tower"   ,primaryrgb,45,330,20,50,group4);


var group5 = makeCell(
  "", "group", "1",
  {
    "x": "640",
    "y": "640",
    "width": "190",
    "height": "260"
  }
);

var primaryrgb = [24,80,157];

makeContainer("AdTech&#10;Vendors","mxgraph.gcp2.globe_world",primaryrgb,190,260,group5)

makeIcon("Facebook"  ,"mxgraph.webicons.facebook" ,primaryrgb, 10,90,50,50,group5);
makeIcon("Twitter"          ,"mxgraph.webicons.twitter"         ,primaryrgb, 70,90,50,50,group5);
makeIcon("LinkedIn"        ,"mxgraph.webicons.linkedin"       ,primaryrgb,130,90,50,50,group5);

makeIcon("Google Ads"    ,"mxgraph.gcp2.google_ads" ,primaryrgb, 10,180,50,50,group5);
makeIcon("Google Ad&#10;Manager","mxgraph.gcp2.google_ad_manager"   ,primaryrgb, 70,180,50,50,group5);
makeIcon("GA 360"    ,"mxgraph.gcp2.google_analytics_360"    ,primaryrgb,130,180,50,50,group5);



var group6 = makeCell(
  "", "group", "1",
  {
    "x": "670",
    "y": "280",
    "width": "140",
    "height": "330"
  }
);

var primaryrgb = [255,0,0];

makeContainer("Adobe","mxgraph.weblogos.adobe_pdf",primaryrgb,140,330,group6)
makeIcon("Visitor&#10;Service" ,"mxgraph.office.users.online_user" ,primaryrgb, 45,90,50,50,group6);
makeIcon("Analytics" ,"mxgraph.mscae.general.graph"   ,primaryrgb, 45,170,50,40,group6);
makeIcon("Target"           ,"mxgraph.gcp2.biomedical_beaker"   ,primaryrgb,45,250,40,50,group6);



var group7 = makeCell(
  "", "group", "1",
  {
    "x": "30",
    "y": "400",
    "width": "190",
    "height": "170"
  }
);

var primaryrgb = [28,105,138];

makeContainer("Observe&#10;Point","mxgraph.gcp2.cloud_computer",primaryrgb,190,170,group7)
makeIcon("Site&#10;Audits" ,"mxgraph.gcp2.search_api" ,primaryrgb, 10,90,50,50,group7);
makeIcon("Web&#10;Journeys","mxgraph.gcp2.systems_check"   ,primaryrgb, 70,90,50,50,group7);
makeIcon("Speed&#10;Tests","mxgraph.gcp2.thumbs_up"   ,primaryrgb, 130,90,50,50,group7);





xml += '</root></mxGraphModel>';

var fs = require("fs");
fs.writeFileSync("tiq.xml",xml);
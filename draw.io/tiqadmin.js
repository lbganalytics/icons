/*

    [0,134,79],   // #00864F
    [24,80,157],  // #18509D
    [138,28,105], // #8A1C69
    [215,78,20],  // #D74E14

*/

var primaryrgb = [215,20,78];
function rgb2hex(x){
  return "#" + ((256*256*256) + (x[0] * 256 * 256) + (x[1] * 256) + x[2]).toString(16).substr(1);
}
function primary2secondary(x){
  return x.map(function(a){ return a + 34; }).map(function(a){ if(a > 255) return 255; return a; });
}

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


var groupId = makeCell(
  "",
  "group",
  "1",
  {
    "width": "190",
    "height": "170"
  }
);

makeCell(
  "",
  {
    "html": "1",
    "shape": "mxgraph.basic.corner_round_rect",
    "dx": "20",
    "gradientDirection": "west",

    "fillColor": rgb2hex(primaryrgb),
    "gradientColor": rgb2hex(primary2secondary(primaryrgb)),
    "fontColor": "#FFFFFF",

    "fontFamily": "Lucida Console",
    
    "strokeColor": "none"
  },
  groupId,
  {
    "width": "190",
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
  "Tealium&#10;IQ",
  {
    "shape": "image",
    "image": "https://lbganalytics.github.io/icons/tealium.png",

    "imageAspect": "0",
    "aspect": "fixed",

    "verticalLabelPosition": "middle",
    "verticalAlign": "middle",
    "labelPosition": "right",
    "align": "left",

    "fontFamily": "Lucida Console",
    "fontColor": "#FFFFFF",
    "fontSize": "16"
  },
  groupId,
  {
    /*"x": "-32",
    "y": "-32",*/
    "width": "80",
    "height": "80"
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
    "y": "80",
    "width": "190",
    "height": "90"
  }
);

makeCell(
  "Tags",
  {
    "shape": "mxgraph.azure.script_file",

    "verticalLabelPosition": "bottom",
    "verticalAlign": "top",
    "align": "center",

    "html": "1",
    "strokeColor": rgb2hex(primaryrgb),
    "fillColor": rgb2hex(primaryrgb),
    "fontColor": rgb2hex(primaryrgb),

    "fontFamily": "Lucida Console"    
  },
  groupId,
  {
    "x": "10",
    "y": "90",
    "width": "50",
    "height": "50"
  }
);


makeCell(
  "Load&#10;Rules",
  {
    "shape": "mxgraph.aws4.rule_2",

    "verticalLabelPosition": "bottom",
    "verticalAlign": "top",
    "align": "center",

    "html": "1",
    "strokeColor": rgb2hex(primaryrgb),
    "fillColor": rgb2hex(primaryrgb),
    "fontColor": rgb2hex(primaryrgb),

    "fontFamily": "Lucida Console"    
  },
  groupId,
  {
    "x": "70",
    "y": "90",
    "width": "50",
    "height": "50"
  }
);


makeCell(
  "Extensions",
  {
    "shape": "mxgraph.azure.startup_task",

    "verticalLabelPosition": "bottom",
    "verticalAlign": "top",
    "align": "center",

    "html": "1",
    "strokeColor": rgb2hex(primaryrgb),
    "fillColor": rgb2hex(primaryrgb),
    "fontColor": rgb2hex(primaryrgb),

    "fontFamily": "Lucida Console"    
  },
  groupId,
  {
    "x": "130",
    "y": "90",
    "width": "50",
    "height": "50"
  }
);

xml += '</root></mxGraphModel>';

console.log(xml);
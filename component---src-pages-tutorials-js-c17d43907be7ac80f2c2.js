(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[141],{17663:function(e,t,n){"use strict";n.d(t,{z:function(){return i},b:function(){return o}});var a=n(98810),l=n(40652),r=n(37658),o=function(e){var t=e.src,n=e.to,o=e.href,i=e.headingClass,s=e.title,c=e.children,m=e.link;e.html;return a.createElement(l.xu,{to:n,href:o,className:" col-12 col-6-ns col-4-l pa8 tdn middarkgrey gallery-box-min-height gallery-box-max-height",radius:"4",style:{width:"fit-content",display:"inline-grid",justifyContent:"center",alignItems:"center"}},a.createElement("div",{style:{minHeight:"15rem"}},a.createElement("h2",{id:s,style:{margin:"0 0 0 0",textTransform:"capitalize"},className:r.O.h2+" darkgrey "+i},s)),a.createElement("div",{style:{height:"20rem",width:"20rem",textAlign:"center",display:"block"}},a.createElement("img",{style:{maxHeight:"200px",maxWidth:"200px",alignContent:"center"},src:t,className:"tutorial-img mt2"})),a.createElement("div",{className:r.O.p+" mt2 midgrey"},c),a.createElement("div",{style:{margin:"0 0 0 0"},align:"center"},a.createElement("a",{href:m,target:"_blank"}," ",a.createElement("button",{className:""+r.O.greenbutton},a.createElement("b",null,"Try Now")))))},i=(n(20691),function(e){var t=e.src,n=e.to,o=e.href,i=e.headingClass,s=e.title,c=e.children,m=e.binder,d=e.html,g=e.json;return console.log(t,n,o,i,s,c,m,d,g),console.log("html, json ::",d,g),null==g?null:a.createElement(l.xu,{to:n,href:o,className:"col-12 col-6-ns col-4-l pa8 tdn middarkgrey gallery-box-min-height gallery-box-max-height",radius:"4"},a.createElement("h2",{className:"post-content "+r.O.h2+" darkgrey "+i,style:{fontWeight:"bold"}},notebookTitle),a.createElement("h2",{className:"post-content "+r.O.h2+" darkgrey "+i},Author),a.createElement("h4",{className:"post-content "+r.O.h2+" darkgrey "+i},"filename: ",s),a.createElement("p",{dangerouslySetInnerHTML:{__html:text}}),a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.createElement("br",null),a.createElement("a",{href:d,target:"_blank"}," ",a.createElement("button",{className:""+r.O.greybutton},a.createElement("b",null,"View now"))),a.createElement("br",null),a.createElement("a",{href:m,target:"_blank"}," ",a.createElement("button",{className:""+r.O.greenbutton},a.createElement("b",null,"Run now")))))})},61402:function(e,t,n){"use strict";n.r(t);var a=n(98810),l=n(33073),r=n(85799),o=n(37658),i=n(6457),s=n(17663);t.default=function(e){var t=e.data,n=e.location,c="Tutorials",m=(0,i.A)();return a.createElement(a.Fragment,null,a.createElement(i.U,{data:t,location:n,title:c,type:"website",description:"This is the tutorials page.",image:m}),a.createElement(r.A,{mainClass:"bg-whitegrey-l2 pb-vw3",bodyClass:"bg-white"},a.createElement("div",{className:"bg-concepts"},a.createElement("div",{className:o.O.page.xl+" pt12 pb4 pt-vw1-ns pb-vw1-ns white pl10 pl0-ns"},a.createElement("h1",{className:o.O.sectionHeading+" gh-integration-header-shadow"}," ",c," "),a.createElement("p",{className:o.O.sectionSubHeading},"This is a gallery of example ",a.createElement("strong",null,a.createElement(l.Link,{to:"/docs/userguide/notebook",className:"link dim white"},"BioDynaMo notebooks:"))," click on the images to inspect the underlying document."))),a.createElement("div",{className:o.O.page.xl+" mt-vw3"},a.createElement("section",{className:"grid-12 gutter-row-20 gutter-20-ns gutter-36-l"},t.notebooks.edges.map((function(e){return a.createElement(s.b,{html:"/notebooks/"+e.node.relativePath,title:e.node.name.charAt(0).toUpperCase()+e.node.name.slice(1).replace("_"," "),src:"/images/notebooks/"+e.node.name+".png",binder:"https://mybinder.org/v2/gh/BioDynaMo/binder-demo/dockerfile?filepath=%2F"+e.node.name+"%2F"+e.node.name+".ipynb"})})),t.jupyter_notebooks.edges.map((function(e){return a.createElement(s.z,{html:"/jupyter/"+e.node.relativePath,title:e.node.name.charAt(0).toUpperCase()+e.node.name.slice(1).replace("-"," "),src:e.node.absolutePath,binder:"https://mybinder.org/v2/gh/BioDynaMo/binder-demo/dockerfile?filepath=%2F"+e.node.name+"%2F"+e.node.name+".ipynb"})}))))))}},20691:function(){}}]);
//# sourceMappingURL=component---src-pages-tutorials-js-c17d43907be7ac80f2c2.js.map
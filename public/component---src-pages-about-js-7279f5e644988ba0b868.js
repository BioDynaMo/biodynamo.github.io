(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(65),m=a(186),l=(a(190),a(188)),c=function(e){var t=e.src,a=e.to,n=e.href,i=e.headingClass,s=e.name,o=e.position;return r.a.createElement(l.a,{to:a,href:n,className:"col-12 col-6-ns col-4-l pa8 tdn middarkgrey setup-box-min-height  team-box-max-width setup-box-max-height",radius:"4"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:t,className:"teampic"}),r.a.createElement("h5",{className:m.a.h5+" "+i+" img-overlay-1"},r.a.createElement("span",null,s)),r.a.createElement("h5",{className:m.a.h5+" "+i+" img-overlay-2"},o)))};c.propTypes={position:s.a.node,name:s.a.string.isRequired,to:s.a.string,href:s.a.string,headingClass:s.a.string};var p=c,d=a(197),g=a(198);a.d(t,"pageQuery",(function(){return h}));var u=function(e){var t=e.data,a=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{data:t,location:a,type:"website",title:"About BioDynaMo",description:"Short description of what BioDynaMo is."}),r.a.createElement(g.a,{mainClass:"bg-whitegrey-l2 pb-vw3",bodyClass:"bg-white"},r.a.createElement("div",{className:"bg-concepts"},r.a.createElement("div",{className:m.a.page.xl+" pt12 pb4 pt-vw1-ns pb-vw1-ns white pl10 pl0-ns"},r.a.createElement("h1",{className:m.a.h4+" gh-integration-header-shadow"},r.a.createElement(o.Link,{to:"/about/",className:"link dim white"},"About BioDynaMo")))),r.a.createElement("div",{className:m.a.page.xl+" pb-vw4 pb-vw3-ns pt-vw4 pt-vw3-ns"},r.a.createElement("h2",{className:m.a.h2+" pt20 nt20"},"Our Project"),r.a.createElement("p",{className:m.a.excerpt+" midgrey-l2 mt2"},"This is what we do!"),r.a.createElement("div",{className:"mt3"}),r.a.createElement("h2",{className:m.a.h2+" pt20 nt20"},"Our Team"),r.a.createElement("div",{className:"mt5"}),r.a.createElement("section",{className:"grid-16 gutter-row-20 gutter-20-ns gutter-36-l"},r.a.createElement(p,{href:"/",name:"Nathaniel Randomness",src:"/bradley.png",headingClass:"mt2",position:"Lead Engineer"}),r.a.createElement(p,{href:"/",name:"Test Member",src:"/bradley.png",headingClass:"mt2",position:"Position"}),r.a.createElement(p,{href:"/",name:"Test Member",src:"/bradley.png",headingClass:"mt2",position:"Position"}),r.a.createElement(p,{href:"/",name:"Test Member",src:"/bradley.png",headingClass:"mt2",position:"Position"})),r.a.createElement("div",{className:"mt5"}),r.a.createElement("h2",{className:m.a.h2+" pt20 nt20"},"Our Alumni"),r.a.createElement("div",{className:"mt5"}),r.a.createElement("section",{className:"grid-16 gutter-row-28 gutter-20-ns gutter-36-l"},r.a.createElement(p,{href:"/",name:"Test Alumni",src:"/bradley.png",headingClass:"mt2",position:"Position"}),r.a.createElement(p,{href:"/",name:"Test Alumni",src:"/bradley.png",headingClass:"mt2",position:"Position"}),r.a.createElement(p,{href:"/",name:"Test Alumni",src:"/bradley.png",headingClass:"mt2",position:"Position"}),r.a.createElement(p,{href:"/",name:"Test Alumni",src:"/bradley.png",headingClass:"mt2",position:"Position"})))))};u.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired};t.default=u;var h="1531574144"},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),s=a.n(i),o=a(192),m=a.n(o),l=(a(190),a(187)),c=a.n(l),p=a(189),d=a.n(p),g=a(205),u=(a(206),function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}});u.defaultProps={fetchAuthorData:!1},u.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=u,y=function(e){var t=e.image;return r.a.createElement(c.a,null,r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:t}),r.a.createElement("meta",{property:"og:image",content:t}),r.a.createElement("meta",{property:"og:image:width",content:"1000"}),r.a.createElement("meta",{property:"og:image:height",content:"523"}))};y.propTypes={image:s.a.string};var E=y,w=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,i=e.title,s=e.overwriteDefaultImage,o=e.image,m=t.ghostPost,l=t.site.siteMetadata,p=h(m.primary_author,n),u=d.a.map(Object(g.a)(m,{visibility:"public",fn:function(e){return e}}),"name"),y=u[0]||{name:"General",slug:"general"},w=s&&m.feature_image?m.feature_image:o;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,m.meta_title||i||m.title),r.a.createElement("meta",{name:"description",content:m.meta_description||m.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:l.title}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:m.og_title||i||m.meta_title||m.title}),r.a.createElement("meta",{property:"og:description",content:m.og_description||m.excerpt||m.meta_description}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:m.published_at}),r.a.createElement("meta",{property:"article:modified_time",content:m.updated_at}),u.map((function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})})),r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:m.twitter_title||i||m.meta_title||m.title}),r.a.createElement("meta",{name:"twitter:description",content:m.twitter_description||m.excerpt||m.meta_description}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),r.a.createElement("meta",{name:"twitter:data1",content:p.name}),r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),r.a.createElement("meta",{name:"twitter:data2",content:y}),r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(u.length?'"keywords": "'+d.a.join(u,", ")+'",':"")+'\n                        "headline": "'+(m.meta_title||i||m.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+m.published_at+'",\n                        "dateModified": "'+m.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+w+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(m.meta_description||m.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+l.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(E,{image:w}))};w.defaultProps={fetchAuthorData:!1},w.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=w,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,i=n.frontmatter,s=t.site.siteMetadata,o=i.date?new Date(i.date).toISOString():new Date("2018-10-15").toISOString(),m=i.keywords&&i.keywords.length?i.keywords[0]:null,l=N();return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,i.meta_title||i.title),r.a.createElement("meta",{name:"description",content:i.meta_description||n.excerpt}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:s.title}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:i.meta_title||i.title}),r.a.createElement("meta",{property:"og:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"article:published_time",content:o}),i.keywords&&i.keywords.length?i.keywords.map((function(e,t){return r.a.createElement("meta",{property:"article:tag",content:e,key:t})})):null,r.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),r.a.createElement("meta",{name:"twitter:title",content:i.meta_title||i.title}),r.a.createElement("meta",{name:"twitter:description",content:i.meta_description||n.excerpt}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),r.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),m?r.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,m?r.a.createElement("meta",{name:"twitter:data2",content:m}):null,r.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),r.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(i.keywords&&i.keywords.length?'"keywords": "'+d.a.join(i.keywords,", ")+'",':"")+'\n                        "headline": "'+(i.meta_title||i.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+l+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(i.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),r.a.createElement(E,{image:l}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var R=b,q=function(e){var t=e.data,a=e.canonical,n=e.title,i=e.description,s=e.image,o=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,n),r.a.createElement("meta",{name:"description",content:i}),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:n}),r.a.createElement("meta",{property:"og:description",content:i}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{name:"twitter:title",content:n}),r.a.createElement("meta",{name:"twitter:description",content:i}),r.a.createElement("meta",{name:"twitter:url",content:a}),r.a.createElement("meta",{name:"twitter:site",content:"@ghost"}),r.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(o&&"series"===o?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "/bdm_logo.png",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+i+'"\n                    }\n                ')),r.a.createElement(E,{image:s}))};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string,type:s.a.oneOf(["website","series"]).isRequired};var _=q,v=function(e){var t=e.data,a=e.type,n=e.title,i=e.description,s=e.image,o=e.fetchAuthorData,l=e.overwriteDefaultImage,c=e.location,p=t||{},d=p.ghostPost,g=p.markdownRemark,u=t.site.siteMetadata,h=m.a.resolve(u.siteUrl,c.pathname,"/");if("article"===a){if(d)return r.a.createElement(f,{data:t,canonical:h,fetchAuthorData:o,title:n,image:s,overwriteDefaultImage:l});if(g)return r.a.createElement(R,{data:t,canonical:h})}else if("website"===a||"series"===a)return r.a.createElement(_,{data:t,canonical:h,title:n,description:i,image:"/bdm_logo.png",type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var k=v,A="http://local:8000",P={faq:m.a.resolve(A,"/images/meta/Ghost-FAQ.jpg"),integrations:m.a.resolve(A,"/images/meta/Ghost-Integrations.jpg"),tutorials:m.a.resolve(A,"/images/meta/Ghost-Tutorials.jpg"),default:m.a.resolve(A,"/images/meta/Ghost-Docs.jpg")},x=function(e){return P[e=e||"default"]};x.proptypes={section:s.a.string.isRequired};var N=x;a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return N}))}}]);
//# sourceMappingURL=component---src-pages-about-js-7279f5e644988ba0b868.js.map
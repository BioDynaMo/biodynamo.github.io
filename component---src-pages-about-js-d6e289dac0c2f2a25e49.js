(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(1),s=a.n(r),o=a(71),m=a(197),l=(a(104),a(200)),c=function(e){var t=e.src,a=e.to,n=e.href,r=e.headingClass,s=e.name,o=e.position;return i.a.createElement(l.a,{to:a,href:n,className:"col-12 col-6-ns col-4-l pa8 tdn middarkgrey setup-box-min-height  team-box-max-width setup-box-max-height",radius:"4"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{src:t,className:"teampic"}),i.a.createElement("h5",{className:m.a.h5+" "+r+" img-overlay-1"},i.a.createElement("span",null,s)),i.a.createElement("h5",{className:m.a.h5+" "+r+" img-overlay-2"},o)))};c.propTypes={position:s.a.node,name:s.a.string.isRequired,to:s.a.string,href:s.a.string,headingClass:s.a.string};var p=c,d=a(204),g=a(208),u=function(e){var t=e.data,a=e.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{data:t,location:a,type:"website",title:"About BioDynaMo",description:"Short description of what BioDynaMo is."}),i.a.createElement(g.a,{mainClass:"bg-whitegrey-l2 pb-vw3",bodyClass:"bg-white"},i.a.createElement("div",{className:"bg-concepts"},i.a.createElement("div",{className:m.a.page.xl+" pt12 pb4 pt-vw1-ns pb-vw1-ns white pl10 pl0-ns"},i.a.createElement("h1",{className:m.a.h4+" gh-integration-header-shadow"},i.a.createElement(o.Link,{to:"/about/",className:"link dim white"},"About BioDynaMo")))),i.a.createElement("div",{className:m.a.page.xl+" pb-vw4 pb-vw3-ns pt-vw4 pt-vw3-ns"},i.a.createElement("h2",{className:m.a.h2+" pt20 nt20"},"Our Project"),i.a.createElement("p",{className:m.a.excerpt+" midgrey-l2 mt2"},"This is what we do!"),i.a.createElement("div",{className:"mt3"}),i.a.createElement("h2",{className:m.a.h2+" pt20 nt20"},"Our Team"),i.a.createElement("div",{className:"mt5"}),i.a.createElement("section",{className:"grid-16 gutter-row-20 gutter-20-ns gutter-36-l"},i.a.createElement(p,{href:"/",name:"Nathaniel Randomness",src:"/bradley.png",headingClass:"mt2",position:"Lead Engineer"}),i.a.createElement(p,{href:"/",name:"Test Member",src:"/bradley.png",headingClass:"mt2",position:"Position"}),i.a.createElement(p,{href:"/",name:"Test Member",src:"/bradley.png",headingClass:"mt2",position:"Position"}),i.a.createElement(p,{href:"/",name:"Test Member",src:"/bradley.png",headingClass:"mt2",position:"Position"})),i.a.createElement("div",{className:"mt5"}),i.a.createElement("h2",{className:m.a.h2+" pt20 nt20"},"Our Alumni"),i.a.createElement("div",{className:"mt5"}),i.a.createElement("section",{className:"grid-16 gutter-row-28 gutter-20-ns gutter-36-l"},i.a.createElement(p,{href:"/",name:"Test Alumni",src:"/bradley.png",headingClass:"mt2",position:"Position"}),i.a.createElement(p,{href:"/",name:"Test Alumni",src:"/bradley.png",headingClass:"mt2",position:"Position"}),i.a.createElement(p,{href:"/",name:"Test Alumni",src:"/bradley.png",headingClass:"mt2",position:"Position"}),i.a.createElement(p,{href:"/",name:"Test Alumni",src:"/bradley.png",headingClass:"mt2",position:"Position"})))))};u.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired};t.default=u},204:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),s=a.n(r),o=a(201),m=a.n(o),l=(a(70),a(104),a(198)),c=a.n(l),p=a(199),d=a.n(p),g=a(213),u=(a(214),function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}});u.defaultProps={fetchAuthorData:!1},u.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=u,y=function(e){var t=e.image;return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:"1000"}),i.a.createElement("meta",{property:"og:image:height",content:"523"}))};y.propTypes={image:s.a.string};var E=y,w=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,o=e.image,m=t.ghostPost,l=t.site.siteMetadata,p=h(m.primary_author,n),u=d.a.map(Object(g.a)(m,{visibility:"public",fn:function(e){return e}}),"name"),y=u[0]||{name:"General",slug:"general"},w=s&&m.feature_image?m.feature_image:o;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,m.meta_title||r||m.title),i.a.createElement("meta",{name:"description",content:m.meta_description||m.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:l.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:m.og_title||r||m.meta_title||m.title}),i.a.createElement("meta",{property:"og:description",content:m.og_description||m.excerpt||m.meta_description}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:m.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:m.updated_at}),u.map((function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})})),i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:m.twitter_title||r||m.meta_title||m.title}),i.a.createElement("meta",{name:"twitter:description",content:m.twitter_description||m.excerpt||m.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:p.name}),i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),i.a.createElement("meta",{name:"twitter:data2",content:y}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(u.length?'"keywords": "'+d.a.join(u,", ")+'",':"")+'\n                        "headline": "'+(m.meta_title||r||m.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+m.published_at+'",\n                        "dateModified": "'+m.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+w+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(m.meta_description||m.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+l.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(E,{image:w}))};w.defaultProps={fetchAuthorData:!1},w.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var b=w,f=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,r=n.frontmatter,s=t.site.siteMetadata,o=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),m=r.keywords&&r.keywords.length?r.keywords[0]:null,l=N();return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||n.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:s.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:r.meta_title||r.title}),i.a.createElement("meta",{property:"og:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:o}),r.keywords&&r.keywords.length?r.keywords.map((function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})})):null,i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),i.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),m?i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,m?i.a.createElement("meta",{name:"twitter:data2",content:m}):null,i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+d.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+l+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(E,{image:l}))};f.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var R=f,q=function(e){var t=e.data,a=e.canonical,n=e.title,r=e.description,s=e.image,o=e.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{name:"twitter:title",content:n}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:site",content:"@ghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(o&&"series"===o?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "/images/bdm_logo.png",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),i.a.createElement(E,{image:s}))};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string,type:s.a.oneOf(["website","series"]).isRequired};var _=q,v=function(e){var t=e.data,a=e.type,n=e.title,r=e.description,s=e.image,o=e.fetchAuthorData,l=e.overwriteDefaultImage,c=e.location,p=t||{},d=p.ghostPost,g=p.markdownRemark,u=t.site.siteMetadata,h=m.a.resolve(u.siteUrl,c.pathname,"/");if("article"===a){if(d)return i.a.createElement(b,{data:t,canonical:h,fetchAuthorData:o,title:n,image:s,overwriteDefaultImage:l});if(g)return i.a.createElement(R,{data:t,canonical:h})}else if("website"===a||"series"===a)return i.a.createElement(_,{data:t,canonical:h,title:n,description:r,image:"/images/bdm_logo.png",type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var k=v,A="http://local:8000",P={faq:m.a.resolve(A,"/images/meta/Ghost-FAQ.jpg"),integrations:m.a.resolve(A,"/images/meta/Ghost-Integrations.jpg"),tutorials:m.a.resolve(A,"/images/meta/Ghost-Tutorials.jpg"),default:m.a.resolve(A,"/images/meta/Ghost-Docs.jpg")},x=function(e){return P[e=e||"default"]};x.proptypes={section:s.a.string.isRequired};var N=x;a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return N}))}}]);
//# sourceMappingURL=component---src-pages-about-js-d6e289dac0c2f2a25e49.js.map
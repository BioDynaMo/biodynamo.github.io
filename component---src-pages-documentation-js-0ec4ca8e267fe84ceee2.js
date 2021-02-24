(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(e,t,a){"use strict";a.r(t);a(205);var n=a(0),i=a.n(n),r=a(1),s=a.n(r),o=a(197),l=a(208),m=a(200),c=function(e){var t=e.to,a=e.href,n=e.icon,r=e.iconClass,s=e.headingClass,l=e.title,c=e.children;return i.a.createElement(m.a,{to:t,href:a,className:"col-12 col-6-ns col-4-l pa8 tdn middarkgrey setup-box-min-height",radius:"4"},i.a.createElement(m.b,{name:n,className:r}),i.a.createElement("h4",{className:o.a.h4+" darkgrey "+s},l),i.a.createElement("div",{className:o.a.small+" mt1 midgrey"},c),i.a.createElement("span",{className:"black dib mt2 link fw5 f7 f5-ns flex items-center"},"Learn more",i.a.createElement(m.b,{name:"arrow-right",className:"w3 h3 ml2 fill-black"})))};c.propTypes={children:s.a.node.isRequired,icon:s.a.string.isRequired,title:s.a.string.isRequired,to:s.a.string,href:s.a.string,iconClass:s.a.string,headingClass:s.a.string};var p=c,d=a(204),g=function(e){var t=e.data,a=e.location,n=Object(d.b)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{data:t,location:a,type:"website",title:"Documentation",description:"Path to all documentation.",image:n}),i.a.createElement(l.a,{mainClass:"bg-whitegrey-l2 pb-vw3",bodyClass:"bg-white"},i.a.createElement("section",{className:"bg-setup"},i.a.createElement("div",{className:o.a.page.xl+" tc-ns pt-vw6 pt-vw5-ns pb-vw5 white"},i.a.createElement("h1",{className:o.a.sectionHeading+" gh-integration-header-shadow"},"Documentation"))),i.a.createElement("div",{className:o.a.page.xl+" mt-vw3"},i.a.createElement("section",{className:"grid-12 gutter-row-20 gutter-20-ns gutter-36-l"},i.a.createElement(p,{to:"/docs/userguide/",title:"User Guide",icon:"presentation-code",iconClass:"w9 h9",headingClass:"mt2"},i.a.createElement("p",{className:o.a.small+" mw70"},"Learn the fundamentals of BioDynaMo and how to get started.")),i.a.createElement(p,{to:"/docs/devguide/",title:"Developer Guide",icon:"terminal",iconClass:"w9 h9",headingClass:"mt2"},i.a.createElement("p",{className:o.a.small+" mw70"},"Learn how to build and contribute to the BioDynaMo project.")),i.a.createElement(p,{href:"/api",title:"API Reference",icon:"network",iconClass:"w9 h9",headingClass:"mt2"},i.a.createElement("p",{className:o.a.small+" mw70"},"Learn the technical details to apply BioDynaMo to your own use case."))))))};g.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired};t.default=g},204:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),s=a.n(r),o=a(201),l=a.n(o),m=(a(70),a(104),a(198)),c=a.n(m),p=a(199),d=a.n(p),g=a(213),u=(a(214),function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}});u.defaultProps={fetchAuthorData:!1},u.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=u,w=function(e){var t=e.image;return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:"1000"}),i.a.createElement("meta",{property:"og:image:height",content:"523"}))};w.propTypes={image:s.a.string};var y=w,E=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,o=e.image,l=t.ghostPost,m=t.site.siteMetadata,p=h(l.primary_author,n),u=d.a.map(Object(g.a)(l,{visibility:"public",fn:function(e){return e}}),"name"),w=u[0]||{name:"General",slug:"general"},E=s&&l.feature_image?l.feature_image:o;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,l.meta_title||r||l.title),i.a.createElement("meta",{name:"description",content:l.meta_description||l.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:m.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:l.og_title||r||l.meta_title||l.title}),i.a.createElement("meta",{property:"og:description",content:l.og_description||l.excerpt||l.meta_description}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:l.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:l.updated_at}),u.map((function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})})),i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:l.twitter_title||r||l.meta_title||l.title}),i.a.createElement("meta",{name:"twitter:description",content:l.twitter_description||l.excerpt||l.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:p.name}),i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),i.a.createElement("meta",{name:"twitter:data2",content:w}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(u.length?'"keywords": "'+d.a.join(u,", ")+'",':"")+'\n                        "headline": "'+(l.meta_title||r||l.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l.published_at+'",\n                        "dateModified": "'+l.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+E+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(l.meta_description||l.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:E}))};E.defaultProps={fetchAuthorData:!1},E.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=E,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,r=n.frontmatter,s=t.site.siteMetadata,o=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),l=r.keywords&&r.keywords.length?r.keywords[0]:null,m=P();return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||n.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:s.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:r.meta_title||r.title}),i.a.createElement("meta",{property:"og:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:o}),r.keywords&&r.keywords.length?r.keywords.map((function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})})):null,i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),i.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),l?i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,l?i.a.createElement("meta",{name:"twitter:data2",content:l}):null,i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+d.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+m+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:m}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var R=b,q=function(e){var t=e.data,a=e.canonical,n=e.title,r=e.description,s=e.image,o=e.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{name:"twitter:title",content:n}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:site",content:"@ghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(o&&"series"===o?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "/images/bdm_logo.png",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),i.a.createElement(y,{image:s}))};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string,type:s.a.oneOf(["website","series"]).isRequired};var _=q,k=function(e){var t=e.data,a=e.type,n=e.title,r=e.description,s=e.image,o=e.fetchAuthorData,m=e.overwriteDefaultImage,c=e.location,p=t||{},d=p.ghostPost,g=p.markdownRemark,u=t.site.siteMetadata,h=l.a.resolve(u.siteUrl,c.pathname,"/");if("article"===a){if(d)return i.a.createElement(f,{data:t,canonical:h,fetchAuthorData:o,title:n,image:s,overwriteDefaultImage:m});if(g)return i.a.createElement(R,{data:t,canonical:h})}else if("website"===a||"series"===a)return i.a.createElement(_,{data:t,canonical:h,title:n,description:r,image:"/images/bdm_logo.png",type:a});return null};k.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var v=k,A="http://local:8000",D={faq:l.a.resolve(A,"/images/meta/Ghost-FAQ.jpg"),integrations:l.a.resolve(A,"/images/meta/Ghost-Integrations.jpg"),tutorials:l.a.resolve(A,"/images/meta/Ghost-Tutorials.jpg"),default:l.a.resolve(A,"/images/meta/Ghost-Docs.jpg")},j=function(e){return D[e=e||"default"]};j.proptypes={section:s.a.string.isRequired};var P=j;a.d(t,"a",(function(){return v})),a.d(t,"b",(function(){return P}))}}]);
//# sourceMappingURL=component---src-pages-documentation-js-0ec4ca8e267fe84ceee2.js.map
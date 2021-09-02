(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[9],{1215:function(e,n){e.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";function r(e,n,t,o){this.message=e,this.expected=n,this.found=t,this.location=o,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}!function(e,n){function t(){this.constructor=e}t.prototype=n.prototype,e.prototype=new t}(r,Error),r.buildMessage=function(e,n){var t={literal:function(e){return'"'+o(e.text)+'"'},class:function(e){var n,t="";for(n=0;n<e.parts.length;n++)t+=e.parts[n]instanceof Array?i(e.parts[n][0])+"-"+i(e.parts[n][1]):i(e.parts[n]);return"["+(e.inverted?"^":"")+t+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}return"Expected "+function(e){var n,r,o,i=new Array(e.length);for(n=0;n<e.length;n++)i[n]=(o=e[n],t[o.type](o));if(i.sort(),i.length>0){for(n=1,r=1;n<i.length;n++)i[n-1]!==i[n]&&(i[r]=i[n],r++);i.length=r}switch(i.length){case 1:return i[0];case 2:return i[0]+" or "+i[1];default:return i.slice(0,-1).join(", ")+", or "+i[i.length-1]}}(e)+" but "+function(e){return e?'"'+o(e)+'"':"end of input"}(n)+" found."},e.exports={SyntaxError:r,parse:function(e,n){n=void 0!==n?n:{};var t,o={},i={declaration:Ne},a=Ne,s=ke("(",!1),c=ke(")",!1),u="simple",l=ke("simple",!1),h="object",f=ke("object",!1),m="table",d=ke("table",!1),p="auto",g=ke("auto",!1),b="primary",S=ke("primary",!1),y="index",v=ke("index",!1),k="unique",w=ke("unique",!1),E=function(e,n){return n},C=ke("#",!1),A=ke(";",!1),x=ke("[",!1),q=ke("]",!1),N=",",O=ke(",",!1),P=ke("int",!1),j="uint",F=ke("uint",!1),z="short",R=ke("short",!1),D="ushort",T=ke("ushort",!1),B="byte",I=ke("byte",!1),M="ubyte",G=ke("ubyte",!1),_="float",U=ke("float",!1),L="char",Z=ke("char",!1),V="string",W=ke("string",!1),J="lstring",Y=ke("lstring",!1),$="enum",H=ke("enum",!1),K="double",Q=ke("double",!1),X="bigint",ee=ke("bigint",!1),ne=ke("set",!1),te=/^[a-zA-Z_]/,re=we([["a","z"],["A","Z"],"_"],!1,!1),oe=/^[a-zA-Z0-9_]/,ie=we([["a","z"],["A","Z"],["0","9"],"_"],!1,!1),ae=(ke('"',!1),we(['"'],!0,!1),/^[^\n\r]/),se=we(["\n","\r"],!0,!1),ce=Ee("integer"),ue=/^[0-9]/,le=we([["0","9"]],!1,!1),he=Ee("whitespace"),fe=/^[ \t\n\r]/,me=we([" ","\t","\n","\r"],!1,!1),de=0,pe=0,ge=[{line:1,column:1}],be=0,Se=[],ye=0;if("startRule"in n){if(!(n.startRule in i))throw new Error("Can't start parsing from rule \""+n.startRule+'".');a=i[n.startRule]}function ve(){return e.substring(pe,de)}function ke(e,n){return{type:"literal",text:e,ignoreCase:n}}function we(e,n,t){return{type:"class",parts:e,inverted:n,ignoreCase:t}}function Ee(e){return{type:"other",description:e}}function Ce(n){var t,r=ge[n];if(r)return r;for(t=n-1;!ge[t];)t--;for(r={line:(r=ge[t]).line,column:r.column};t<n;)10===e.charCodeAt(t)?(r.line++,r.column=1):r.column++,t++;return ge[n]=r,r}function Ae(e,n){var t=Ce(e),r=Ce(n);return{start:{offset:e,line:t.line,column:t.column},end:{offset:n,line:r.line,column:r.column}}}function xe(e){de<be||(de>be&&(be=de,Se=[]),Se.push(e))}function qe(e,n,t){return new r(r.buildMessage(e,n),e,n,t)}function Ne(){var n,t,r,i,a,u,l;return n=de,Ie()!==o&&(t=Oe())!==o&&Ie()!==o&&(r=Pe())!==o&&Ie()!==o&&(i=Fe())!==o&&Ie()!==o?(40===e.charCodeAt(de)?(a="(",de++):(a=o,0===ye&&xe(s)),a!==o&&Ie()!==o&&(u=function(){var e,n,t,r,i;if(e=de,(n=Re())!==o)if(Ie()!==o){for(t=[],r=de,Ie()!==o&&(i=Re())!==o?(pe=r,r=E(0,i)):(de=r,r=o);r!==o;)t.push(r),r=de,Ie()!==o&&(i=Re())!==o?(pe=r,r=E(0,i)):(de=r,r=o);t!==o&&(r=Ie())!==o?(pe=e,s=t,(a=n).name&&s.unshift(a),e=n=s):(de=e,e=o)}else de=e,e=o;else de=e,e=o;var a,s;return e}())!==o&&Ie()!==o?(41===e.charCodeAt(de)?(l=")",de++):(l=o,0===ye&&xe(c)),l!==o&&Ie()!==o?(pe=n,n={type:t,name:r,comment:i,fields:u}):(de=n,n=o)):(de=n,n=o)):(de=n,n=o),n}function Oe(){var n;return e.substr(de,6)===u?(n=u,de+=6):(n=o,0===ye&&xe(l)),n===o&&(e.substr(de,6)===h?(n=h,de+=6):(n=o,0===ye&&xe(f)),n===o&&(e.substr(de,5)===m?(n=m,de+=5):(n=o,0===ye&&xe(d)))),n}function Pe(){var n,t,r,i;return(n=Te())===o&&(n=de,(t=Te())!==o&&(r=je())!==o?n=t=[t,r]:(de=n,n=o),n===o&&(n=de,(t=Te())!==o?(e.substr(de,4)===p?(r=p,de+=4):(r=o,0===ye&&xe(g)),r!==o?n=t=[t,r]:(de=n,n=o)):(de=n,n=o),n===o&&(n=de,(t=Te())!==o&&(r=je())!==o?(e.substr(de,4)===p?(i=p,de+=4):(i=o,0===ye&&xe(g)),i!==o?n=t=[t,r,i]:(de=n,n=o)):(de=n,n=o)))),n}function je(){var n;return e.substr(de,7)===b?(n=b,de+=7):(n=o,0===ye&&xe(S)),n===o&&(e.substr(de,5)===y?(n=y,de+=5):(n=o,0===ye&&xe(v)),n===o&&(e.substr(de,6)===k?(n=k,de+=6):(n=o,0===ye&&xe(w)))),n}function Fe(){var e;return(e=Be())===o&&(e=Ie()),e}function ze(){var n,t,r,i,a;return n=de,(t=Ie())!==o&&(r=function(){var n;return 35===e.charCodeAt(de)?(n="#",de++):(n=o,0===ye&&xe(C)),n}())!==o&&(i=Be())!==o&&(a=Ie())!==o?n=t=[t,r,i,a]:(de=n,n=o),n}function Re(){var n,t,r,i,a,u,l,h;return n=de,(t=De())!==o&&Ie()!==o&&(r=Te())!==o&&Ie()!==o?(59===e.charCodeAt(de)?(i=";",de++):(i=o,0===ye&&xe(A)),i!==o&&Ie()!==o&&(a=Fe())!==o?(pe=n,n=t={type:t,name:r,comment:a}):(de=n,n=o)):(de=n,n=o),n===o&&(n=de,(t=De())!==o&&Ie()!==o?(91===e.charCodeAt(de)?(r="[",de++):(r=o,0===ye&&xe(x)),r!==o&&Ie()!==o&&(i=function(){var n;(n=function(){var n,t,r;if(ye++,n=de,Ie()!==o){if(t=[],ue.test(e.charAt(de))?(r=e.charAt(de),de++):(r=o,0===ye&&xe(le)),r!==o)for(;r!==o;)t.push(r),ue.test(e.charAt(de))?(r=e.charAt(de),de++):(r=o,0===ye&&xe(le));else t=o;t!==o?(pe=n,n=parseInt(ve(),10)):(de=n,n=o)}else de=n,n=o;ye--,n===o&&(o,0===ye&&xe(ce));return n}())===o&&(n=Te());return n}())!==o&&Ie()!==o?(93===e.charCodeAt(de)?(a="]",de++):(a=o,0===ye&&xe(q)),a!==o&&Ie()!==o&&(u=Te())!==o&&Ie()!==o?(59===e.charCodeAt(de)?(l=";",de++):(l=o,0===ye&&xe(A)),l!==o&&Ie()!==o&&(h=Fe())!==o?(pe=n,n=t=function(e,n,t,r){return{type:e,size:n,name:t,comment:r}}(t,i,u,h)):(de=n,n=o)):(de=n,n=o)):(de=n,n=o)):(de=n,n=o),n===o&&(n=de,(t=De())!==o&&Ie()!==o?(40===e.charCodeAt(de)?(r="(",de++):(r=o,0===ye&&xe(s)),r!==o&&Ie()!==o&&(i=function(){var n,t,r,i,a,s;if(n=de,(t=Te())!==o){for(r=[],i=de,44===e.charCodeAt(de)?(a=N,de++):(a=o,0===ye&&xe(O)),a!==o&&Ie()!==o&&(s=Te())!==o?(pe=i,i=a=E(0,s)):(de=i,i=o);i!==o;)r.push(i),i=de,44===e.charCodeAt(de)?(a=N,de++):(a=o,0===ye&&xe(O)),a!==o&&Ie()!==o&&(s=Te())!==o?(pe=i,i=a=E(0,s)):(de=i,i=o);r!==o?(pe=n,c=t,(u=r).unshift(c),n=t=u):(de=n,n=o)}else de=n,n=o;var c,u;return n}())!==o&&Ie()!==o?(41===e.charCodeAt(de)?(a=")",de++):(a=o,0===ye&&xe(c)),a!==o&&Ie()!==o&&(u=Te())!==o&&Ie()!==o?(59===e.charCodeAt(de)?(l=";",de++):(l=o,0===ye&&xe(A)),l!==o&&Ie()!==o&&(h=Fe())!==o?(pe=n,n=t=function(e,n,t,r){return{type:e,vals:n,name:t,comment:r}}(t,i,u,h)):(de=n,n=o)):(de=n,n=o)):(de=n,n=o)):(de=n,n=o),n===o&&(n=ze()))),n}function De(){var n,t,r;return"int"===e.substr(de,3)?(n="int",de+=3):(n=o,0===ye&&xe(P)),n===o&&(e.substr(de,4)===j?(n=j,de+=4):(n=o,0===ye&&xe(F)),n===o&&(e.substr(de,5)===z?(n=z,de+=5):(n=o,0===ye&&xe(R)),n===o&&(e.substr(de,6)===D?(n=D,de+=6):(n=o,0===ye&&xe(T)),n===o&&(e.substr(de,4)===B?(n=B,de+=4):(n=o,0===ye&&xe(I)),n===o&&(e.substr(de,5)===M?(n=M,de+=5):(n=o,0===ye&&xe(G)),n===o&&(e.substr(de,5)===_?(n=_,de+=5):(n=o,0===ye&&xe(U)),n===o&&(e.substr(de,4)===L?(n=L,de+=4):(n=o,0===ye&&xe(Z)),n===o&&(e.substr(de,6)===V?(n=V,de+=6):(n=o,0===ye&&xe(W)),n===o&&(e.substr(de,7)===J?(n=J,de+=7):(n=o,0===ye&&xe(Y)),n===o&&(e.substr(de,4)===$?(n=$,de+=4):(n=o,0===ye&&xe(H)),n===o&&(e.substr(de,6)===K?(n=K,de+=6):(n=o,0===ye&&xe(Q)),n===o&&(e.substr(de,6)===X?(n=X,de+=6):(n=o,0===ye&&xe(ee)),n===o&&("set"===e.substr(de,3)?(n="set",de+=3):(n=o,0===ye&&xe(ne)),n===o&&(n=de,(t=Oe())!==o&&Ie()!==o&&(r=Pe())!==o?(pe=n,n=t=t+" "+r):(de=n,n=o))))))))))))))),n}function Te(){var n,t,r,i,a;if(n=de,t=de,te.test(e.charAt(de))?(r=e.charAt(de),de++):(r=o,0===ye&&xe(re)),r!==o){for(i=[],oe.test(e.charAt(de))?(a=e.charAt(de),de++):(a=o,0===ye&&xe(ie));a!==o;)i.push(a),oe.test(e.charAt(de))?(a=e.charAt(de),de++):(a=o,0===ye&&xe(ie));i!==o?t=r=[r,i]:(de=t,t=o)}else de=t,t=o;return t!==o&&(pe=n,t=ve()),n=t}function Be(){var n,t,r;for(n=de,t=[],ae.test(e.charAt(de))?(r=e.charAt(de),de++):(r=o,0===ye&&xe(se));r!==o;)t.push(r),ae.test(e.charAt(de))?(r=e.charAt(de),de++):(r=o,0===ye&&xe(se));return t!==o&&(pe=n,t=t.join("").replace(/^"/,"").replace(/"$/,"")),n=t}function Ie(){var n,t;for(ye++,n=[],fe.test(e.charAt(de))?(t=e.charAt(de),de++):(t=o,0===ye&&xe(me));t!==o;)n.push(t),fe.test(e.charAt(de))?(t=e.charAt(de),de++):(t=o,0===ye&&xe(me));return ye--,n===o&&(t=o,0===ye&&xe(he)),n}if((t=a())!==o&&de===e.length)return t;throw t!==o&&de<e.length&&xe({type:"end"}),qe(Se,be<e.length?e.charAt(be):null,be<e.length?Ae(be,be+1):Ae(be,be))}}},function(e,n){e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),i=t(2),a=t.n(i),s=t(0),c=t.n(s),u={bigInteract:'table interact\n"interaction between two regions"\n    (\n    string chrom;        "Chromosome (or contig, scaffold, etc.). For interchromosomal, use 2 records"\n    uint chromStart;     "Start position of lower region. For interchromosomal, set to chromStart of this region"\n    uint chromEnd;       "End position of upper region. For interchromosomal, set to chromEnd of this region"\n    string name;         "Name of item, for display.  Usually \'sourceName/targetName/exp\' or empty"\n    uint score;          "Score (0-1000)"\n    double value;        "Strength of interaction or other data value. Typically basis for score"\n    string exp;          "Experiment name (metadata for filtering). Use . if not applicable"\n    string color;        "Item color.  Specified as r,g,b or hexadecimal #RRGGBB or html color name, as in //www.w3.org/TR/css3-color/#html4. Use 0 and spectrum setting to shade by score"\n    string sourceChrom;  "Chromosome of source region (directional) or lower region. For non-directional interchromosomal, chrom of this region."\n    uint sourceStart;    "Start position in chromosome of source/lower/this region"\n    uint sourceEnd;      "End position in chromosome of source/lower/this region"\n    string sourceName;   "Identifier of source/lower/this region"\n    string sourceStrand; "Orientation of source/lower/this region: + or -.  Use . if not applicable"\n    string targetChrom;  "Chromosome of target region (directional) or upper region. For non-directional interchromosomal, chrom of other region"\n    uint targetStart;    "Start position in chromosome of target/upper/this region"\n    uint targetEnd;      "End position in chromosome of target/upper/this region"\n    string targetName;   "Identifier of target/upper/this region"\n    string targetStrand; "Orientation of target/upper/this region: + or -.  Use . if not applicable"\n\n    )\n',bigMaf:'table bedMaf\n"Bed3 with MAF block"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start position in chromosome"\n    uint   chromEnd;   "End position in chromosome"\n    lstring mafBlock;   "MAF block"\n    )\n',bigPsl:'table bigPsl\n"bigPsl pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint score;         "Score (0-1000)"\n    char[1] strand;     "+ or - indicates whether the query aligns to the + or - strand on the reference"\n    uint thickStart;    "Start of where display should be thick (start codon)"\n    uint thickEnd;      "End of where display should be thick (stop codon)"\n    uint reserved;       "RGB value (use R,G,B string in input file)"\n    int blockCount;     "Number of blocks"\n    int[blockCount] blockSizes; "Comma separated list of block sizes"\n    int[blockCount] chromStarts; "Start positions relative to chromStart"\n\n    uint    oChromStart;"Start position in other chromosome"\n    uint    oChromEnd;  "End position in other chromosome"\n    char[1] oStrand;    "+ or -, - means that psl was reversed into BED-compatible coordinates" \n    uint    oChromSize; "Size of other chromosome."\n    int[blockCount] oChromStarts; "Start positions relative to oChromStart or from oChromStart+oChromSize depending on strand"\n\n    lstring  oSequence;  "Sequence on other chrom (or empty)"\n    string   oCDS;       "CDS in NCBI format"\n\n    uint    chromSize;"Size of target chromosome"\n\n    uint match;        "Number of bases matched."\n    uint misMatch; " Number of bases that don\'t match "\n    uint repMatch; " Number of bases that match but are part of repeats "\n    uint nCount;   " Number of \'N\' bases "\n    uint seqType;    "0=empty, 1=nucleotide, 2=amino_acid"\n    )\n\n',bigNarrowPeak:'table bigNarrowPeak\n"BED6+4 Peaks of signal enrichment based on pooled, normalized (interpreted) data."\n(\n    string chrom;        "Reference sequence chromosome or scaffold"\n    uint   chromStart;   "Start position in chromosome"\n    uint   chromEnd;     "End position in chromosome"\n    string name;\t "Name given to a region (preferably unique). Use . if no name is assigned"\n    uint   score;        "Indicates how dark the peak will be displayed in the browser (0-1000) "\n    char[1]  strand;     "+ or - or . for unknown"\n    float  signalValue;  "Measurement of average enrichment for the region"\n    float  pValue;       "Statistical significance of signal value (-log10). Set to -1 if not used."\n    float  qValue;       "Statistical significance with multiple-test correction applied (FDR -log10). Set to -1 if not used."\n    int   peak;         "Point-source called for this peak; 0-based offset from chromStart. Set to -1 if no point-source called."\n)\n',bigGenePred:'table bigGenePred\n"bigGenePred gene models"\n   (\n   string chrom;       "Reference sequence chromosome or scaffold"\n   uint   chromStart;  "Start position in chromosome"\n   uint   chromEnd;    "End position in chromosome"\n   string name;        "Name or ID of item, ideally both human readable and unique"\n   uint score;         "Score (0-1000)"\n   char[1] strand;     "+ or - for strand"\n   uint thickStart;    "Start of where display should be thick (start codon)"\n   uint thickEnd;      "End of where display should be thick (stop codon)"\n   uint reserved;       "RGB value (use R,G,B string in input file)"\n   int blockCount;     "Number of blocks"\n   int[blockCount] blockSizes; "Comma separated list of block sizes"\n   int[blockCount] chromStarts; "Start positions relative to chromStart"\n   string name2;       "Alternative/human readable name"\n   string cdsStartStat; "Status of CDS start annotation (none, unknown, incomplete, or complete)"\n   string cdsEndStat;   "Status of CDS end annotation (none, unknown, incomplete, or complete)"\n   int[blockCount] exonFrames; "Exon frame {0,1,2}, or -1 if no frame for exon"\n   string type;        "Transcript type"\n   string geneName;    "Primary identifier for gene"\n   string geneName2;   "Alternative/human readable gene name"\n   string geneType;    "Gene type"\n   )\n\n',bigLink:'\n\ntable bigLink\n"bigLink pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint qStart;        "start of alignment on query sequence"\n    )\n\n',bigChain:'\ntable bigChain\n"bigChain pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint score;         "Score (0-1000)"\n    char[1] strand;     "+ or - for strand"\n    uint tSize;         "size of target sequence"\n    string qName;       "name of query sequence"\n    uint qSize;         "size of query sequence"\n    uint qStart;        "start of alignment on query sequence"\n    uint qEnd;          "end of alignment on query sequence"\n    uint chainScore;    "score from chain"\n    )\n\n',mafFrames:'table mafFrames\n"codon frame assignment for MAF components"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start range in chromosome"\n    uint   chromEnd;   "End range in chromosome"\n    string src;        "Name of sequence source in MAF"\n    ubyte frame;       "frame (0,1,2) for first base(+) or last bast(-)"\n    char[1] strand;    "+ or -"\n    string name;       "Name of gene used to define frame"\n    int    prevFramePos;  "target position of the previous base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous"\n    int    nextFramePos;  "target position of the next base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous"\n    ubyte  isExonStart;  "does this start the CDS portion of an exon?"\n    ubyte  isExonEnd;    "does this end the CDS portion of an exon?"\n    )\n',mafSummary:'table mafSummary\n"Positions and scores for alignment blocks"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start position in chromosome"\n    uint   chromEnd;   "End position in chromosome"\n    string src;        "Sequence name or database of alignment"\n    float  score;      "Floating point score."\n    char[1] leftStatus;  "Gap/break annotation for preceding block"\n    char[1] rightStatus; "Gap/break annotation for following block"\n    )\n',defaultBedSchema:'table defaultBedSchema\n"BED12"\n    (\n    string chrom;      "The name of the chromosome (e.g. chr3, chrY, chr2_random) or scaffold (e.g. scaffold10671)."\n    uint   chromStart; "The starting position of the feature in the chromosome or scaffold. The first base in a chromosome is numbered 0."\n    uint   chromEnd;   "The ending position of the feature in the chromosome or scaffold. The chromEnd base is not included in the display of the feature. For example, the first 100 bases of a chromosome are defined as chromStart=0, chromEnd=100, and span the bases numbered 0-99."\n    string   name;   "Defines the name of the BED line."\n    float   score;   "Feature score, doesn\'t care about the 0-1000 limit as in bed"\n    char   strand;   "Defines the strand. Either \'.\' (=no strand) or \'+\' or \'-\'"\n    uint thickStart; "The starting position at which the feature is drawn thickly (for example, the start codon in gene displays). When there is no thick part, thickStart and thickEnd are usually set to the chromStart position."\n    uint thickEnd; "The ending position at which the feature is drawn thickly (for example the stop codon in gene displays)."\n    string itemRgb; "An RGB value of the form R,G,B (e.g. 255,0,0). "\n    uint blockCount; " The number of blocks (exons) in the BED line."\n    uint[blockCount] blockSizes; " A comma-separated list of the block sizes. The number of items in this list should correspond to blockCount."\n    uint[blockCount] blockStarts; "A comma-separated list of block starts. All of the blockStart positions should be calculated relative to chromStart. The number of items in this list should correspond to blockCount."\n    )\n'};Object.keys(u).forEach((function(e){u[e]=c.a.parse(u[e].trim())}));var l=u,h=t(3),f=t.n(h);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){f()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=["uint","int","float","long"],t=e.fields.map((function(e){var t={};return!e.size&&n.includes(e.type)&&(t.isNumeric=!0),e.size&&"char"!==e.type&&(t.isArray=!0),e.size&&n.includes(e.type)&&(t.arrayIsNumeric=!0),d(d({},e),t)}));return d(d({},e),{},{fields:t})}var g=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o()(this,e),n.autoSql?this.autoSql=p(c.a.parse(n.autoSql)):n.type?this.autoSql=p(l[n.type]||function(e){throw new Error("Type not found")}()):this.autoSql=p(l.defaultBedSchema)}return a()(e,[{key:"parseLine",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=this.autoSql,r=n.uniqueId,o=e;if(!Array.isArray(e)){if(e.startsWith("track")||e.startsWith("browser"))throw new Error("track and browser line parsing is not supported, please filter:\n".concat(e));o=e.split("\t")}var i={};r&&(i.uniqueId=r);for(var a=0;a<t.fields.length;a+=1){var s=t.fields[a],c=o[a],u=s.isNumeric,l=s.isArray,h=s.arrayIsNumeric,f=s.name;if(null===c||void 0===c)break;if("."!==c){if(u){var m=Number(c);c=Number.isNaN(m)?c:m}else l&&(""===(c=c.split(","))[c.length-1]&&c.pop(),h&&(c=c.map((function(e){return Number(e)}))));i[f]=c}}return i.chrom&&(i.chrom=decodeURIComponent(i.chrom)),i.strand={".":0,"-":-1,"+":1}[i.strand]||0,i}}]),e}();n.default=g}])}}]);
//# sourceMappingURL=9.a62bbb8f.chunk.js.map
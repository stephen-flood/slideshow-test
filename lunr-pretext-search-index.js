var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "slideshow-4",
  "level": "1",
  "url": "slideshow-4.html",
  "type": "Section",
  "number": "",
  "title": "Explanation",
  "body": " Explanation   What This Is  This is a PreTeXt  slideshow designed mostly for testing new features. As of 2019-11-16 it is only initiated, and not comprehensive. If you improve a feature, please add examples here.   "
},
{
  "id": "slideshow-5",
  "level": "1",
  "url": "slideshow-5.html",
  "type": "Section",
  "number": "",
  "title": "Lists",
  "body": " Lists   Ordered Lists, All At Once   Two conversions: print-on-demand, electronic PDF  Extensive use of the tcolorbox package (CSS-like)  Evolving styling\/themes (Andrew Rechnitzer, David Farmer)     Ordered Lists, With Features  These are enumerated with capital letters.   Two conversions: print-on-demand, electronic PDF  Extensive use of the tcolorbox package (CSS-like)  Evolving styling\/themes (Andrew Rechnitzer, David Farmer)   These are inline   print-on-demand  electronic PDF   And these have pauses.   Two conversions: print-on-demand, electronic PDF  Extensive use of the tcolorbox package (CSS-like)  Evolving styling\/themes (Andrew Rechnitzer, David Farmer)     Unordered Lists, All At Once   XML syntax is a nested hierarchy (a tree)  <foo> <\/foo>  <bar\/>  <baz qux=\"corge\">   Does not have to be UGLY !  PreTeXt is author-friendly (Principle #2)     Unordered Lists, With Pause    XML syntax is a nested hierarchy (a tree)  <foo> <\/foo>  <bar\/>  <baz qux=\"corge\">   Does not have to be UGLY !  PreTeXt is author-friendly (Principle #2)     Description Lists, All At Once    Central Processing Unit (CPU)  Controls most of the activities of the computer, performs the arithmetic and logical operations, and contains a small amount of very fast memory.    Memory  Provides storage for the instructions for the CPU and the data they manipulate.    Input\/Output (I\/O)  Communicates with the outside world and with mass storage devices (e.g., disks).    Bus!  A communication pathway with a protocol specifying exactly how the pathway is used. (The punctuation is just for testing.)      Description Lists, With Pauses    Central Processing Unit (CPU)  Controls most of the activities of the computer, performs the arithmetic and logical operations, and contains a small amount of very fast memory.    Memory  Provides storage for the instructions for the CPU and the data they manipulate.    Input\/Output (I\/O)  Communicates with the outside world and with mass storage devices (e.g., disks).    Bus!  A communication pathway with a protocol specifying exactly how the pathway is used. (The punctuation is just for testing.)      Blocks: <definition>   indefinite integral integral indefinite integral    indefinite integral of    Suppose that . Then the indefinite integral of is and is written as .      Blocks: <theorem>  This should also test other theorem-like , such as <corollary> .   The Fundamental Theorem of Calculus  Fundamental Theorem of Calculus   If is continuous, and the derivative of is , then test: buried in theorem\/statement\/p    Left to the reader.     "
},
{
  "id": "definition-indefinite-integral",
  "level": "2",
  "url": "slideshow-5-8.html#definition-indefinite-integral",
  "type": "Definition",
  "number": "1",
  "title": "",
  "body": " indefinite integral integral indefinite integral    indefinite integral of    Suppose that . Then the indefinite integral of is and is written as .   "
},
{
  "id": "theorem-FTC",
  "level": "2",
  "url": "slideshow-5-9.html#theorem-FTC",
  "type": "Theorem",
  "number": "2",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus  Fundamental Theorem of Calculus   If is continuous, and the derivative of is , then test: buried in theorem\/statement\/p    Left to the reader.   "
},
{
  "id": "slideshow-6",
  "level": "1",
  "url": "slideshow-6.html",
  "type": "Section",
  "number": "",
  "title": "Sage Cell",
  "body": " Sage Cell   Ramanujan and Integration  This Sage Cell should execute properly, but some extra CSS is being applied. It is also difficult to edit properly. Perhaps the two are related. You may need to zoom out your browser to see all the content, especially after running the cell.  We have some mathematics on the page, to look for Javascript interference with MathJax. An identity due to Ramanujan: .   And some more mathematics. An identity due to Ramanujan: .   "
},
{
  "id": "slideshow-7",
  "level": "1",
  "url": "slideshow-7.html",
  "type": "Section",
  "number": "",
  "title": "Other features",
  "body": " Other features   Pausing  Pausing doesn't always act how you expect from latex . The first and third lines are always visible.  But this one needs you to advance the slide.  (Visible from the outset.)    Subslides  Subslides are another way to achieve pausing without lists.   This is a subslide. It always comes after a pause.   You can also pause within it.  Of course!    But this is still visible from the outset.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

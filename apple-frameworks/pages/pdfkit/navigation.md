> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/navigation](https://developer.apple.com/documentation/pdfkit/navigation)

# Navigation (Swift)

**Framework:** PDFKit  
**Kind:** API Collection

Operations for moving through page history and seeking to a page in a document.

## Topics

### Determining Valid History Operations

- [canGoBack](pdfview/cangoback.md): Returns a Boolean value indicating whether the user can navigate to the previous page in the page history.
- [canGoForward](pdfview/cangoforward.md): Returns a Boolean value indicating whether the user can navigate to the next page in the page history.
- [canGoToFirstPage](pdfview/cangotofirstpage.md): Returns a Boolean value indicating whether the user can navigate to the first page of the document.
- [canGoToLastPage](pdfview/cangotolastpage.md): Returns a Boolean value indicating whether the user can navigate to the last page of the document.
- [canGoToNextPage](pdfview/cangotonextpage.md): Returns a Boolean value indicating whether the user can navigate to the next page of the document.
- [canGoToPreviousPage](pdfview/cangotopreviouspage.md): Returns a Boolean value indicating whether the user can navigate to the previous page of the document.

### Navigating History for a Document

- [goBack(\_:)](pdfview/goback%28__%29.md): Navigates back one step in the page history.
- [goForward(\_:)](pdfview/goforward%28__%29.md): Navigates forward one step in the page history.
- [goToFirstPage(\_:)](pdfview/gotofirstpage%28__%29.md): Navigates to the first page of the document.
- [goToLastPage(\_:)](pdfview/gotolastpage%28__%29.md): Navigates to the last page of the document.
- [goToNextPage(\_:)](pdfview/gotonextpage%28__%29.md): Navigates to the next page of the document.
- [goToPreviousPage(\_:)](pdfview/gotopreviouspage%28__%29.md): Navigates to the previous page of the document.

### Using Seek in a Document

- [go(to:)](pdfview/go%28to_%29-6x8y2.md): Scrolls to the specified page.
- [go(to:)](pdfview/go%28to_%29-5lh5d.md): Navigates to the specified destination.
- [go(to:)](pdfview/go%28to_%29-3t5go.md): Scrolls to the first character of the specified selection.
- [go(to:on:)](pdfview/go%28to_on_%29.md): Navigates to the specified rectangle on the specified page.

## See Also

### Navigating Within a Document

- [currentPage](pdfview/currentpage.md): Returns the current page.
- [currentDestination](pdfview/currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.
- [visiblePages](pdfview/visiblepages.md): Returns an array of `PDFPage` objects that represent the currently visible pages.

# Navigation (Objective-C)

**Framework:** PDFKit  
**Kind:** API Collection

Operations for moving through page history and seeking to a page in a document.

## Topics

### Determining Valid History Operations

- [canGoBack](pdfview/cangoback.md): Returns a Boolean value indicating whether the user can navigate to the previous page in the page history.
- [canGoForward](pdfview/cangoforward.md): Returns a Boolean value indicating whether the user can navigate to the next page in the page history.
- [canGoToFirstPage](pdfview/cangotofirstpage.md): Returns a Boolean value indicating whether the user can navigate to the first page of the document.
- [canGoToLastPage](pdfview/cangotolastpage.md): Returns a Boolean value indicating whether the user can navigate to the last page of the document.
- [canGoToNextPage](pdfview/cangotonextpage.md): Returns a Boolean value indicating whether the user can navigate to the next page of the document.
- [canGoToPreviousPage](pdfview/cangotopreviouspage.md): Returns a Boolean value indicating whether the user can navigate to the previous page of the document.

### Navigating History for a Document

- [goBack:](pdfview/goback%28__%29.md): Navigates back one step in the page history.
- [goForward:](pdfview/goforward%28__%29.md): Navigates forward one step in the page history.
- [goToFirstPage:](pdfview/gotofirstpage%28__%29.md): Navigates to the first page of the document.
- [goToLastPage:](pdfview/gotolastpage%28__%29.md): Navigates to the last page of the document.
- [goToNextPage:](pdfview/gotonextpage%28__%29.md): Navigates to the next page of the document.
- [goToPreviousPage:](pdfview/gotopreviouspage%28__%29.md): Navigates to the previous page of the document.

### Using Seek in a Document

- [goToPage:](pdfview/go%28to_%29-6x8y2.md): Scrolls to the specified page.
- [goToDestination:](pdfview/go%28to_%29-5lh5d.md): Navigates to the specified destination.
- [goToSelection:](pdfview/go%28to_%29-3t5go.md): Scrolls to the first character of the specified selection.
- [goToRect:onPage:](pdfview/go%28to_on_%29.md): Navigates to the specified rectangle on the specified page.

## See Also

### Navigating Within a Document

- [currentPage](pdfview/currentpage.md): Returns the current page.
- [currentDestination](pdfview/currentdestination.md): Returns a `PDFDestination` object representing the current page and the current point in the view specified in page space.
- [visiblePages](pdfview/visiblepages.md): Returns an array of `PDFPage` objects that represent the currently visible pages.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/document-interactions](https://developer.apple.com/documentation/pdfkit/document-interactions)

# Document Interactions (Swift)

**Framework:** PDFKit  
**Kind:** API Collection

Handle selections, work with annotation actions, convert page and view points, and work with mouse events in a document.

## Topics

### Handling Selections

- [currentSelection](pdfview/currentselection.md): The current selection.
- [setCurrentSelection(\_:animate:)](pdfview/setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [selectAll(\_:)](pdfview/selectall%28__%29.md): Selects all text in the document.
- [clearSelection()](pdfview/clearselection%28%29.md): Clears the selection.
- [copy(\_:)](pdfview/copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible(\_:)](pdfview/scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](pdfview/highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.

### Working with Annotation Actions

- [annotationsChanged(on:)](pdfview/annotationschanged%28on_%29.md): Tells the PDF view that an annotation on the specified page has changed.
- [Link Annotations](link-annotations.md): Validate and handle links in a PDF view.

### Converting Page and View Points

- [page(for:nearest:)](pdfview/page%28for_nearest_%29.md): Returns the page containing a point specified in view coordinates.
- [convert(\_:to:)](pdfview/convert%28__to_%29-9twqk.md): Converts a point from view space to page space.
- [convert(\_:to:)](pdfview/convert%28__to_%29-8cp0c.md): Converts a rectangle from view space to page space.
- [convert(\_:from:)](pdfview/convert%28__from_%29-4evlx.md): Converts a point from page space to view space.
- [convert(\_:from:)](pdfview/convert%28__from_%29-9xv1z.md): Converts a rectangle from page space to view space.

### Working with Mouse Position and Events

- [areaOfInterest(forMouse:)](pdfview/areaofinterest%28formouse_%29.md): Returns the type of area the mouse cursor is over.
- [areaOfInterest(for:)](pdfview/areaofinterest%28for_%29.md): Returns the type of area for a specific cursor location point.
- [PDFAreaOfInterest](pdfareaofinterest.md): The mouse position over PDF view areas.
- [setCursorFor(\_:)](pdfview/setcursorfor%28__%29.md): Sets the type of mouse cursor according to the type of area the mouse cursor is over.
- [perform(\_:)](pdfview/perform%28__%29.md): Performs the specified action.
- [Drag Operations](drag-operations.md): Define drag operations allowed for a view.

# Document Interactions (Objective-C)

**Framework:** PDFKit  
**Kind:** API Collection

Handle selections, work with annotation actions, convert page and view points, and work with mouse events in a document.

## Topics

### Handling Selections

- [currentSelection](pdfview/currentselection.md): The current selection.
- [setCurrentSelection:animate:](pdfview/setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [selectAll:](pdfview/selectall%28__%29.md): Selects all text in the document.
- [clearSelection](pdfview/clearselection%28%29.md): Clears the selection.
- [copy:](pdfview/copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible:](pdfview/scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](pdfview/highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.

### Working with Annotation Actions

- [annotationsChangedOnPage:](pdfview/annotationschanged%28on_%29.md): Tells the PDF view that an annotation on the specified page has changed.
- [Link Annotations](link-annotations.md): Validate and handle links in a PDF view.

### Converting Page and View Points

- [pageForPoint:nearest:](pdfview/page%28for_nearest_%29.md): Returns the page containing a point specified in view coordinates.
- [convertPoint:toPage:](pdfview/convert%28__to_%29-9twqk.md): Converts a point from view space to page space.
- [convertRect:toPage:](pdfview/convert%28__to_%29-8cp0c.md): Converts a rectangle from view space to page space.
- [convertPoint:fromPage:](pdfview/convert%28__from_%29-4evlx.md): Converts a point from page space to view space.
- [convertRect:fromPage:](pdfview/convert%28__from_%29-9xv1z.md): Converts a rectangle from page space to view space.

### Working with Mouse Position and Events

- [areaOfInterestForMouse:](pdfview/areaofinterest%28formouse_%29.md): Returns the type of area the mouse cursor is over.
- [areaOfInterestForPoint:](pdfview/areaofinterest%28for_%29.md): Returns the type of area for a specific cursor location point.
- [PDFAreaOfInterest](pdfareaofinterest.md): The mouse position over PDF view areas.
- [setCursorForAreaOfInterest:](pdfview/setcursorfor%28__%29.md): Sets the type of mouse cursor according to the type of area the mouse cursor is over.
- [performAction:](pdfview/perform%28__%29.md): Performs the specified action.
- [Drag Operations](drag-operations.md): Define drag operations allowed for a view.

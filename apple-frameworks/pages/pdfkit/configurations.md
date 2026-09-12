> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/configurations](https://developer.apple.com/documentation/pdfkit/configurations)

# Configurations (Swift)

**Framework:** PDFKit  
**Kind:** API Collection

Define display modes, scaling, rendering, printing and graphics properties.

## Topics

### Working with Display Modes and Characteristics

- [displayMode](pdfview/displaymode.md): The current display mode.
- [PDFDisplayMode](pdfdisplaymode.md): A wrapper for the chosen display mode constant.
- [Additional Display Configurations](additional-display-configurations.md): Operations for setting up page breaks, a display box, and display direction.
- [Book Display](book-display.md): Operations to setup a book display for a PDF view.
- [Graphics Properties](graphics-properties.md): Operations to define the background color, antialiasing, and greeking for a PDF view.

### Scaling the View

- [scaleFactor](pdfview/scalefactor.md): The current scale factor for the view.
- [scaleFactorForSizeToFit](pdfview/scalefactorforsizetofit.md): The “size to fit” scale factor that `autoScales` would use for scaling the current document and layout.
- [maxScaleFactor](pdfview/maxscalefactor.md): The maximum scaling factor for the PDF document.
- [minScaleFactor](pdfview/minscalefactor.md): The minimum scaling factor for the PDF document.
- [autoScales](pdfview/autoscales.md): A Boolean value indicating whether autoscaling is set.
- [rowSize(for:)](pdfview/rowsize%28for_%29.md): Returns the size needed to display a row of the current document page.
- [Zoom Operations](zoom-operations.md): Zoom operations for a PDF View.

### Rendering the View and Printing

- [draw(\_:)](pdfview/draw%28__%29.md): Deprecated. Draw and render a visible page.
- [drawPagePost(\_:)](pdfview/drawpagepost%28__%29.md): Deprecated. Perform post-page rendering.
- [print(with:autoRotate:)](pdfview/print%28with_autorotate_%29.md): Prints the document with the specified printer information.
- [print(with:autoRotate:pageScaling:)](pdfview/print%28with_autorotate_pagescaling_%29.md): Prints the document with the specified printer and page-scaling information.

### Specializing the View

- [documentView](pdfview/documentview.md): The innermost view used by `PDFView` or by your `PDFView` subclass.
- [layoutDocumentView()](pdfview/layoutdocumentview%28%29.md): Performs layout of the inner views.
- [Draw Operations](draw-operations.md): Draw in a PDF page.

# Configurations (Objective-C)

**Framework:** PDFKit  
**Kind:** API Collection

Define display modes, scaling, rendering, printing and graphics properties.

## Topics

### Working with Display Modes and Characteristics

- [displayMode](pdfview/displaymode.md): The current display mode.
- [PDFDisplayMode](pdfdisplaymode.md): A wrapper for the chosen display mode constant.
- [Additional Display Configurations](additional-display-configurations.md): Operations for setting up page breaks, a display box, and display direction.
- [Book Display](book-display.md): Operations to setup a book display for a PDF view.
- [Graphics Properties](graphics-properties.md): Operations to define the background color, antialiasing, and greeking for a PDF view.

### Scaling the View

- [scaleFactor](pdfview/scalefactor.md): The current scale factor for the view.
- [scaleFactorForSizeToFit](pdfview/scalefactorforsizetofit.md): The “size to fit” scale factor that `autoScales` would use for scaling the current document and layout.
- [maxScaleFactor](pdfview/maxscalefactor.md): The maximum scaling factor for the PDF document.
- [minScaleFactor](pdfview/minscalefactor.md): The minimum scaling factor for the PDF document.
- [autoScales](pdfview/autoscales.md): A Boolean value indicating whether autoscaling is set.
- [rowSizeForPage:](pdfview/rowsize%28for_%29.md): Returns the size needed to display a row of the current document page.
- [Zoom Operations](zoom-operations.md): Zoom operations for a PDF View.

### Rendering the View and Printing

- [drawPage:](pdfview/draw%28__%29.md): Deprecated. Draw and render a visible page.
- [drawPagePost:](pdfview/drawpagepost%28__%29.md): Deprecated. Perform post-page rendering.
- [printWithInfo:autoRotate:](pdfview/print%28with_autorotate_%29.md): Prints the document with the specified printer information.
- [printWithInfo:autoRotate:pageScaling:](pdfview/print%28with_autorotate_pagescaling_%29.md): Prints the document with the specified printer and page-scaling information.

### Specializing the View

- [documentView](pdfview/documentview.md): The innermost view used by `PDFView` or by your `PDFView` subclass.
- [layoutDocumentView](pdfview/layoutdocumentview%28%29.md): Performs layout of the inner views.
- [Draw Operations](draw-operations.md): Draw in a PDF page.

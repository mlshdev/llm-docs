> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/drawpagepost(_:)](https://developer.apple.com/documentation/pdfkit/pdfview/drawpagepost(_:))

# drawPagePost(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Perform post-page rendering.

## Declaration

```swift
func drawPagePost(_ page: PDFPage)
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method draws the text highlighting (if any) for the page. This method does not apply scaling or rotating to the current context to map to page space; instead, the context is in view-space coordinates (in which the origin is at the lower-left corner of the current PDF view).

## See Also

### Rendering the View and Printing

- [draw(\_:)](draw%28__%29.md): Deprecated. Draw and render a visible page.
- [print(with:autoRotate:)](print%28with_autorotate_%29.md): Prints the document with the specified printer information.
- [print(with:autoRotate:pageScaling:)](print%28with_autorotate_pagescaling_%29.md): Prints the document with the specified printer and page-scaling information.

# drawPagePost: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.12)

Perform post-page rendering.

## Declaration

```objectivec
- (void) drawPagePost:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method draws the text highlighting (if any) for the page. This method does not apply scaling or rotating to the current context to map to page space; instead, the context is in view-space coordinates (in which the origin is at the lower-left corner of the current PDF view).

## See Also

### Rendering the View and Printing

- [drawPage:](draw%28__%29.md): Deprecated. Draw and render a visible page.
- [printWithInfo:autoRotate:](print%28with_autorotate_%29.md): Prints the document with the specified printer information.
- [printWithInfo:autoRotate:pageScaling:](print%28with_autorotate_pagescaling_%29.md): Prints the document with the specified printer and page-scaling information.

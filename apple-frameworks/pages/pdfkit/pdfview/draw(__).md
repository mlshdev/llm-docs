> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/draw(_:)](https://developer.apple.com/documentation/pdfkit/pdfview/draw(_:))

# draw(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Draw and render a visible page.

## Declaration

```swift
func draw(_ page: PDFPage)
```

<a id="Discussion"></a>

## Discussion

Do not invoke this method, except by invoking it on `super` from a subclass.

The `PDFView` class calls [draw(\_:)](draw%28__%29.md) as necessary for each visible page that requires rendering. In the `PDFView` class, this method erases `page` to white, calls `[page drawInRect: pageRect withBox: [self displayBox]]` , and then draws the selection, if any.

You can override this method to draw on top of a PDF page or to control how pages are drawn. In these cases, invoke this method on `super` and then perform custom drawing on top of the PDF page.

## See Also

### Rendering the View and Printing

- [drawPagePost(\_:)](drawpagepost%28__%29.md): Deprecated. Perform post-page rendering.
- [print(with:autoRotate:)](print%28with_autorotate_%29.md): Prints the document with the specified printer information.
- [print(with:autoRotate:pageScaling:)](print%28with_autorotate_pagescaling_%29.md): Prints the document with the specified printer and page-scaling information.

# drawPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.12)

Draw and render a visible page.

## Declaration

```objectivec
- (void) drawPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

Do not invoke this method, except by invoking it on `super` from a subclass.

The `PDFView` class calls [drawPage:](draw%28__%29.md) as necessary for each visible page that requires rendering. In the `PDFView` class, this method erases `page` to white, calls `[page drawInRect: pageRect withBox: [self displayBox]]` , and then draws the selection, if any.

You can override this method to draw on top of a PDF page or to control how pages are drawn. In these cases, invoke this method on `super` and then perform custom drawing on top of the PDF page.

## See Also

### Rendering the View and Printing

- [drawPagePost:](drawpagepost%28__%29.md): Deprecated. Perform post-page rendering.
- [printWithInfo:autoRotate:](print%28with_autorotate_%29.md): Prints the document with the specified printer information.
- [printWithInfo:autoRotate:pageScaling:](print%28with_autorotate_pagescaling_%29.md): Prints the document with the specified printer and page-scaling information.

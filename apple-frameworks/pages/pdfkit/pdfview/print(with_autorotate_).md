> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/print(with:autorotate:)](https://developer.apple.com/documentation/pdfkit/pdfview/print(with:autorotate:))

# print(with:autoRotate:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Prints the document with the specified printer information.

## Declaration

```swift
func print(with printInfo: NSPrintInfo, autoRotate doRotate: Bool)
```

<a id="Discussion"></a>

## Discussion

If `autoRotate` is set to [true](https://developer.apple.com/documentation/swift/true), then ths method ignores the orientation attribute in the `NSPrintInfo` object and instead chooses the orientation that best fits the page to the paper size. This orientation occurs on a page-by-page basis.

## See Also

### Rendering the View and Printing

- [draw(\_:)](draw%28__%29.md): Deprecated. Draw and render a visible page.
- [drawPagePost(\_:)](drawpagepost%28__%29.md): Deprecated. Perform post-page rendering.
- [print(with:autoRotate:pageScaling:)](print%28with_autorotate_pagescaling_%29.md): Prints the document with the specified printer and page-scaling information.

# printWithInfo:autoRotate: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Prints the document with the specified printer information.

## Declaration

```objectivec
- (void) printWithInfo:(NSPrintInfo *) printInfo autoRotate:(BOOL) doRotate;
```

<a id="Discussion"></a>

## Discussion

If `autoRotate` is set to [true](https://developer.apple.com/documentation/swift/true), then ths method ignores the orientation attribute in the `NSPrintInfo` object and instead chooses the orientation that best fits the page to the paper size. This orientation occurs on a page-by-page basis.

## See Also

### Rendering the View and Printing

- [drawPage:](draw%28__%29.md): Deprecated. Draw and render a visible page.
- [drawPagePost:](drawpagepost%28__%29.md): Deprecated. Perform post-page rendering.
- [printWithInfo:autoRotate:pageScaling:](print%28with_autorotate_pagescaling_%29.md): Prints the document with the specified printer and page-scaling information.

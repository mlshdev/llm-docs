> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/print(with:autorotate:pagescaling:)](https://developer.apple.com/documentation/pdfkit/pdfview/print(with:autorotate:pagescaling:))

# print(with:autoRotate:pageScaling:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Prints the document with the specified printer and page-scaling information.

## Declaration

```swift
func print(with printInfo: NSPrintInfo, autoRotate doRotate: Bool, pageScaling scale: PDFPrintScalingMode)
```

<a id="Discussion"></a>

## Discussion

If `pageScaling` is set to `kPDFPrintPageScaleToFit`, each page is scaled up or down to best fit the paper size. If `pageScaling` is set to `kPDFPrintPageScaleDownToFit`, only large pages are scaled down to fit; small pages are not scaled up to fit. Specifying `kPDFPrintPageScaleNone` for `pageScaling` is equivalent to calling [print(with:autoRotate:)](print%28with_autorotate_%29.md). See PDFDocument for more information on page-scaling types.

## See Also

### Rendering the View and Printing

- [draw(\_:)](draw%28__%29.md): Deprecated. Draw and render a visible page.
- [drawPagePost(\_:)](drawpagepost%28__%29.md): Deprecated. Perform post-page rendering.
- [print(with:autoRotate:)](print%28with_autorotate_%29.md): Prints the document with the specified printer information.

# printWithInfo:autoRotate:pageScaling: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Prints the document with the specified printer and page-scaling information.

## Declaration

```objectivec
- (void) printWithInfo:(NSPrintInfo *) printInfo autoRotate:(BOOL) doRotate pageScaling:(PDFPrintScalingMode) scale;
```

<a id="Discussion"></a>

## Discussion

If `pageScaling` is set to `kPDFPrintPageScaleToFit`, each page is scaled up or down to best fit the paper size. If `pageScaling` is set to `kPDFPrintPageScaleDownToFit`, only large pages are scaled down to fit; small pages are not scaled up to fit. Specifying `kPDFPrintPageScaleNone` for `pageScaling` is equivalent to calling [printWithInfo:autoRotate:](print%28with_autorotate_%29.md). See PDFDocument for more information on page-scaling types.

## See Also

### Rendering the View and Printing

- [drawPage:](draw%28__%29.md): Deprecated. Draw and render a visible page.
- [drawPagePost:](drawpagepost%28__%29.md): Deprecated. Perform post-page rendering.
- [printWithInfo:autoRotate:](print%28with_autorotate_%29.md): Prints the document with the specified printer information.

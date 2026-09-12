> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderer/writepdf(to:withactions:)](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderer/writepdf(to:withactions:))

# writePDF(to:withActions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a PDF from a set of drawing instructions and saves it to a specified URL.

## Declaration

```swift
func writePDF(to url: URL, withActions actions: (UIGraphicsPDFRendererContext) -> Void) throws
```

## Parameters

- `url`: The URL where the complete PDF file is saved.
- `actions`: A [UIGraphicsPDFRenderer.DrawingActions](drawingactions.md) closure that, when invoked by the renderer, executes a set of drawing instructions to create the output PDF.

<a id="Discussion"></a>

## Discussion

You provide a set of drawing instructions as the block argument to this method, and the method attempts to write the resulting PDF to the supplied URL.

You can call this method repeatedly to create multiple PDFs, each of which has identical dimensions and format.

## See Also

### Managing the PDF data

- [pdfData(actions:)](pdfdata%28actions_%29.md): Creates a PDF from a set of drawing instructions and returns it as a data object.
- [UIGraphicsPDFRenderer.DrawingActions](drawingactions.md): A closure for drawing PDF content.

# writePDFToURL:withActions:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a PDF from a set of drawing instructions and saves it to a specified URL.

## Declaration

```objectivec
- (BOOL) writePDFToURL:(NSURL *) url withActions:(UIGraphicsPDFDrawingActions) actions error:(NSError **) error;
```

## Parameters

- `url`: The URL where the complete PDF file is saved.
- `actions`: A [UIGraphicsPDFDrawingActions](drawingactions.md) closure that, when invoked by the renderer, executes a set of drawing instructions to create the output PDF.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object that is populated if there is a problem saving the completed PDF file.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the PDF has been saved successfully, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You provide a set of drawing instructions as the block argument to this method, and the method attempts to write the resulting PDF to the supplied URL.

You can call this method repeatedly to create multiple PDFs, each of which has identical dimensions and format.

## See Also

### Managing the PDF data

- [PDFDataWithActions:](pdfdata%28actions_%29.md): Creates a PDF from a set of drawing instructions and returns it as a data object.
- [UIGraphicsPDFDrawingActions](drawingactions.md): A closure for drawing PDF content.

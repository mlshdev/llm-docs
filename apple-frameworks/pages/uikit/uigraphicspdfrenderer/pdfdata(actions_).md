> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderer/pdfdata(actions:)](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderer/pdfdata(actions:))

# pdfData(actions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a PDF from a set of drawing instructions and returns it as a data object.

## Declaration

```swift
func pdfData(actions: (UIGraphicsPDFRendererContext) -> Void) -> Data
```

## Parameters

- `actions`: A [UIGraphicsPDFRenderer.DrawingActions](drawingactions.md) block that, when invoked by the renderer, executes a set of drawing instructions to create the output PDF.

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) object that contains the encoded PDF.

<a id="Discussion"></a>

## Discussion

You provide a set of drawing instructions as the block argument to this method, and the method returns the resulting PDF encoded in a [Data](../../foundation/data.md) object.

You can call this method repeatedly to create multiple PDFs, each of which has identical dimensions and format.

## See Also

### Managing the PDF data

- [writePDF(to:withActions:)](writepdf%28to_withactions_%29.md): Creates a PDF from a set of drawing instructions and saves it to a specified URL.
- [UIGraphicsPDFRenderer.DrawingActions](drawingactions.md): A closure for drawing PDF content.

# PDFDataWithActions: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a PDF from a set of drawing instructions and returns it as a data object.

## Declaration

```objectivec
- (NSData *) PDFDataWithActions:(UIGraphicsPDFDrawingActions) actions;
```

## Parameters

- `actions`: A [UIGraphicsPDFDrawingActions](drawingactions.md) block that, when invoked by the renderer, executes a set of drawing instructions to create the output PDF.

<a id="return-value"></a>

## Return Value

A [Data](../../foundation/data.md) object that contains the encoded PDF.

<a id="Discussion"></a>

## Discussion

You provide a set of drawing instructions as the block argument to this method, and the method returns the resulting PDF encoded in a [Data](../../foundation/data.md) object.

You can call this method repeatedly to create multiple PDFs, each of which has identical dimensions and format.

## See Also

### Managing the PDF data

- [writePDFToURL:withActions:error:](writepdf%28to_withactions_%29.md): Creates a PDF from a set of drawing instructions and saves it to a specified URL.
- [UIGraphicsPDFDrawingActions](drawingactions.md): A closure for drawing PDF content.

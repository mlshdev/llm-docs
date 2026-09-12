> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderer/drawingactions](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderer/drawingactions)

# UIGraphicsPDFRenderer.DrawingActions (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A closure for drawing PDF content.

## Declaration

```swift
typealias DrawingActions = (UIGraphicsPDFRendererContext) -> Void
```

<a id="Discussion"></a>

## Discussion

`UIGraphicsPDFDrawingActions` defines a block type that takes a [UIGraphicsPDFRendererContext](../uigraphicspdfrenderercontext.md) object as an argument and has no return value.

You provide a block of this type as an argument to the PDF drawing methods on [UIGraphicsPDFRenderer](../uigraphicspdfrenderer.md). Your block should use the provided PDF renderer context to perform the drawing operations you want the renderer to execute.

See [Creating a PDF with a PDF renderer](../uigraphicspdfrenderer.md#Creating-a-PDF-with-a-PDF-renderer) for an example use of a `UIGraphicsPDFDrawingActions` block.

## See Also

### Managing the PDF data

- [pdfData(actions:)](pdfdata%28actions_%29.md): Creates a PDF from a set of drawing instructions and returns it as a data object.
- [writePDF(to:withActions:)](writepdf%28to_withactions_%29.md): Creates a PDF from a set of drawing instructions and saves it to a specified URL.

# UIGraphicsPDFDrawingActions (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A closure for drawing PDF content.

## Declaration

```objectivec
typedef void (^)(UIGraphicsPDFRendererContext *) UIGraphicsPDFDrawingActions;
```

<a id="Discussion"></a>

## Discussion

`UIGraphicsPDFDrawingActions` defines a block type that takes a [UIGraphicsPDFRendererContext](../uigraphicspdfrenderercontext.md) object as an argument and has no return value.

You provide a block of this type as an argument to the PDF drawing methods on [UIGraphicsPDFRenderer](../uigraphicspdfrenderer.md). Your block should use the provided PDF renderer context to perform the drawing operations you want the renderer to execute.

See [Creating a PDF with a PDF renderer](../uigraphicspdfrenderer.md#Creating-a-PDF-with-a-PDF-renderer) for an example use of a `UIGraphicsPDFDrawingActions` block.

## See Also

### Managing the PDF data

- [PDFDataWithActions:](pdfdata%28actions_%29.md): Creates a PDF from a set of drawing instructions and returns it as a data object.
- [writePDFToURL:withActions:error:](writepdf%28to_withactions_%29.md): Creates a PDF from a set of drawing instructions and saves it to a specified URL.

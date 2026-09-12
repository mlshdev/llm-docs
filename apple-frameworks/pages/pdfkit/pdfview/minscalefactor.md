> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/minscalefactor](https://developer.apple.com/documentation/pdfkit/pdfview/minscalefactor)

# minScaleFactor (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The minimum scaling factor for the PDF document.

## Declaration

```swift
var minScaleFactor: CGFloat { get set }
```

## See Also

### Scaling the View

- [scaleFactor](scalefactor.md): The current scale factor for the view.
- [scaleFactorForSizeToFit](scalefactorforsizetofit.md): The “size to fit” scale factor that `autoScales` would use for scaling the current document and layout.
- [maxScaleFactor](maxscalefactor.md): The maximum scaling factor for the PDF document.
- [autoScales](autoscales.md): A Boolean value indicating whether autoscaling is set.
- [rowSize(for:)](rowsize%28for_%29.md): Returns the size needed to display a row of the current document page.
- [Zoom Operations](../zoom-operations.md): Zoom operations for a PDF View.

# minScaleFactor (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The minimum scaling factor for the PDF document.

## Declaration

```objectivec
@property (nonatomic) CGFloat minScaleFactor;
```

## See Also

### Scaling the View

- [scaleFactor](scalefactor.md): The current scale factor for the view.
- [scaleFactorForSizeToFit](scalefactorforsizetofit.md): The “size to fit” scale factor that `autoScales` would use for scaling the current document and layout.
- [maxScaleFactor](maxscalefactor.md): The maximum scaling factor for the PDF document.
- [autoScales](autoscales.md): A Boolean value indicating whether autoscaling is set.
- [rowSizeForPage:](rowsize%28for_%29.md): Returns the size needed to display a row of the current document page.
- [Zoom Operations](../zoom-operations.md): Zoom operations for a PDF View.

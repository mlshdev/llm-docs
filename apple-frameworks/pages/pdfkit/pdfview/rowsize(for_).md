> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/rowsize(for:)](https://developer.apple.com/documentation/pdfkit/pdfview/rowsize(for:))

# rowSize(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the size needed to display a row of the current document page.

## Declaration

```swift
func rowSize(for page: PDFPage) -> CGSize
```

```swift
func rowSize(for page: PDFPage) -> NSSize
```

<a id="Discussion"></a>

## Discussion

The size is dependent on the current scale factor and display attributes.

## See Also

### Scaling the View

- [scaleFactor](scalefactor.md): The current scale factor for the view.
- [scaleFactorForSizeToFit](scalefactorforsizetofit.md): The “size to fit” scale factor that `autoScales` would use for scaling the current document and layout.
- [maxScaleFactor](maxscalefactor.md): The maximum scaling factor for the PDF document.
- [minScaleFactor](minscalefactor.md): The minimum scaling factor for the PDF document.
- [autoScales](autoscales.md): A Boolean value indicating whether autoscaling is set.
- [Zoom Operations](../zoom-operations.md): Zoom operations for a PDF View.

# rowSizeForPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the size needed to display a row of the current document page.

## Declaration

```objectivec
- (CGSize) rowSizeForPage:(PDFPage *) page;
```

```objectivec
- (NSSize) rowSizeForPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

The size is dependent on the current scale factor and display attributes.

## See Also

### Scaling the View

- [scaleFactor](scalefactor.md): The current scale factor for the view.
- [scaleFactorForSizeToFit](scalefactorforsizetofit.md): The “size to fit” scale factor that `autoScales` would use for scaling the current document and layout.
- [maxScaleFactor](maxscalefactor.md): The maximum scaling factor for the PDF document.
- [minScaleFactor](minscalefactor.md): The minimum scaling factor for the PDF document.
- [autoScales](autoscales.md): A Boolean value indicating whether autoscaling is set.
- [Zoom Operations](../zoom-operations.md): Zoom operations for a PDF View.

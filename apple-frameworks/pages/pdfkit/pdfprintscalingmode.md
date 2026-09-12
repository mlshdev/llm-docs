> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfprintscalingmode](https://developer.apple.com/documentation/pdfkit/pdfprintscalingmode)

# PDFPrintScalingMode (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

The type of scaling to be used when printing a page (see [PDFDocument](pdfdocument.md)).

## Declaration

```swift
enum PDFPrintScalingMode
```

## Topics

### Enumeration Cases

- [PDFPrintScalingMode.pageScaleDownToFit](pdfprintscalingmode/pagescaledowntofit.md): Scale large pages down to fit the paper size (smaller pages do not get scaled up).
- [PDFPrintScalingMode.pageScaleNone](pdfprintscalingmode/pagescalenone.md): Do not apply scaling to the page when printing.
- [PDFPrintScalingMode.pageScaleToFit](pdfprintscalingmode/pagescaletofit.md): Scale each page up or down to best fit the paper size.

### Initializers

- [init(rawValue:)](pdfprintscalingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Printing Documents for macOS

- [printOperation(for:scalingMode:autoRotate:)](pdfdocument/printoperation%28for_scalingmode_autorotate_%29.md): Returns a print operation suitable for printing the PDF document.

# PDFPrintScalingMode (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** macOS 10.4+

The type of scaling to be used when printing a page (see [PDFDocument](pdfdocument.md)).

## Declaration

```objectivec
enum PDFPrintScalingMode : NSInteger;
```

## Topics

### Enumeration Cases

- [kPDFPrintPageScaleDownToFit](pdfprintscalingmode/pagescaledowntofit.md): Scale large pages down to fit the paper size (smaller pages do not get scaled up).
- [kPDFPrintPageScaleNone](pdfprintscalingmode/pagescalenone.md): Do not apply scaling to the page when printing.
- [kPDFPrintPageScaleToFit](pdfprintscalingmode/pagescaletofit.md): Scale each page up or down to best fit the paper size.

## See Also

### Printing Documents for macOS

- [printOperationForPrintInfo:scalingMode:autoRotate:](pdfdocument/printoperation%28for_scalingmode_autorotate_%29.md): Returns a print operation suitable for printing the PDF document.

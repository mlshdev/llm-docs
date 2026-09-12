> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/printoperation(for:scalingmode:autorotate:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/printoperation(for:scalingmode:autorotate:))

# printOperation(for:scalingMode:autoRotate:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a print operation suitable for printing the PDF document.

## Declaration

```swift
func printOperation(for printInfo: NSPrintInfo?, scalingMode scaleMode: PDFPrintScalingMode, autoRotate doRotate: Bool) -> NSPrintOperation?
```

## See Also

### Printing Documents for macOS

- [PDFPrintScalingMode](../pdfprintscalingmode.md): The type of scaling to be used when printing a page (see [PDFDocument](../pdfdocument.md)).

# printOperationForPrintInfo:scalingMode:autoRotate: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a print operation suitable for printing the PDF document.

## Declaration

```objectivec
- (NSPrintOperation *) printOperationForPrintInfo:(NSPrintInfo *) printInfo scalingMode:(PDFPrintScalingMode) scaleMode autoRotate:(BOOL) doRotate;
```

## See Also

### Printing Documents for macOS

- [PDFPrintScalingMode](../pdfprintscalingmode.md): The type of scaling to be used when printing a page (see [PDFDocument](../pdfdocument.md)).

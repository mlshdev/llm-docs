> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdisplaybox](https://developer.apple.com/documentation/pdfkit/pdfdisplaybox)

# PDFDisplayBox (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The following box types may be used with `PDFPage` drawing and bounds-setting methods. See the Adobe PDF Specification for more information on box types, units, and coordinate systems.

## Declaration

```swift
enum PDFDisplayBox
```

## Topics

### Constants

- [PDFDisplayBox.mediaBox](pdfdisplaybox/mediabox.md): A rectangle defining the boundaries of the physical medium for display or printing, expressed in default user-space units.
- [PDFDisplayBox.cropBox](pdfdisplaybox/cropbox.md): A rectangle defining the boundaries of the visible region , expressed in default user-space units. Default value equal to `kPDFDisplayBoxMediaBox`.
- [PDFDisplayBox.bleedBox](pdfdisplaybox/bleedbox.md): A rectangle defining the boundaries of the clip region for the page contents in a production environment. Default value equal to `kPDFDisplayBoxCropBox`.
- [PDFDisplayBox.trimBox](pdfdisplaybox/trimbox.md): A rectangle defining the intended boundaries of the finished page. Default value equal to `kPDFDisplayBoxCropBox`.
- [PDFDisplayBox.artBox](pdfdisplaybox/artbox.md): A rectangle defining the boundaries of the page’s meaningful content including surrounding white space intended for display. Default value equal to `kPDFDisplayBoxCropBox`.

### Initializers

- [init(rawValue:)](pdfdisplaybox/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting Types

- [PDFDisplayDirection](pdfdisplaydirection.md)

# PDFDisplayBox (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The following box types may be used with `PDFPage` drawing and bounds-setting methods. See the Adobe PDF Specification for more information on box types, units, and coordinate systems.

## Declaration

```objectivec
enum PDFDisplayBox : NSInteger;
```

## Topics

### Constants

- [kPDFDisplayBoxMediaBox](pdfdisplaybox/mediabox.md): A rectangle defining the boundaries of the physical medium for display or printing, expressed in default user-space units.
- [kPDFDisplayBoxCropBox](pdfdisplaybox/cropbox.md): A rectangle defining the boundaries of the visible region , expressed in default user-space units. Default value equal to `kPDFDisplayBoxMediaBox`.
- [kPDFDisplayBoxBleedBox](pdfdisplaybox/bleedbox.md): A rectangle defining the boundaries of the clip region for the page contents in a production environment. Default value equal to `kPDFDisplayBoxCropBox`.
- [kPDFDisplayBoxTrimBox](pdfdisplaybox/trimbox.md): A rectangle defining the intended boundaries of the finished page. Default value equal to `kPDFDisplayBoxCropBox`.
- [kPDFDisplayBoxArtBox](pdfdisplaybox/artbox.md): A rectangle defining the boundaries of the page’s meaningful content including surrounding white space intended for display. Default value equal to `kPDFDisplayBoxCropBox`.

## See Also

### Supporting Types

- [PDFDisplayDirection](pdfdisplaydirection.md)

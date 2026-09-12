> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdisplaybox/bleedbox](https://developer.apple.com/documentation/pdfkit/pdfdisplaybox/bleedbox)

# PDFDisplayBox.bleedBox (Swift)

**Framework:** PDFKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A rectangle defining the boundaries of the clip region for the page contents in a production environment. Default value equal to `kPDFDisplayBoxCropBox`.

## Declaration

```swift
case bleedBox
```

## See Also

### Constants

- [PDFDisplayBox.mediaBox](mediabox.md): A rectangle defining the boundaries of the physical medium for display or printing, expressed in default user-space units.
- [PDFDisplayBox.cropBox](cropbox.md): A rectangle defining the boundaries of the visible region , expressed in default user-space units. Default value equal to `kPDFDisplayBoxMediaBox`.
- [PDFDisplayBox.trimBox](trimbox.md): A rectangle defining the intended boundaries of the finished page. Default value equal to `kPDFDisplayBoxCropBox`.
- [PDFDisplayBox.artBox](artbox.md): A rectangle defining the boundaries of the page’s meaningful content including surrounding white space intended for display. Default value equal to `kPDFDisplayBoxCropBox`.

# kPDFDisplayBoxBleedBox (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

A rectangle defining the boundaries of the clip region for the page contents in a production environment. Default value equal to `kPDFDisplayBoxCropBox`.

## Declaration

```objectivec
kPDFDisplayBoxBleedBox
```

## See Also

### Constants

- [kPDFDisplayBoxMediaBox](mediabox.md): A rectangle defining the boundaries of the physical medium for display or printing, expressed in default user-space units.
- [kPDFDisplayBoxCropBox](cropbox.md): A rectangle defining the boundaries of the visible region , expressed in default user-space units. Default value equal to `kPDFDisplayBoxMediaBox`.
- [kPDFDisplayBoxTrimBox](trimbox.md): A rectangle defining the intended boundaries of the finished page. Default value equal to `kPDFDisplayBoxCropBox`.
- [kPDFDisplayBoxArtBox](artbox.md): A rectangle defining the boundaries of the page’s meaningful content including surrounding white space intended for display. Default value equal to `kPDFDisplayBoxCropBox`.

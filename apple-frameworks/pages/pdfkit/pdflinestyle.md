> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdflinestyle](https://developer.apple.com/documentation/pdfkit/pdflinestyle)

# PDFLineStyle (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The following constants specify the available line ending styles.

## Declaration

```swift
enum PDFLineStyle
```

## Topics

### Constants

- [PDFLineStyle.none](pdflinestyle/none.md): No line ending.
- [PDFLineStyle.square](pdflinestyle/square.md): A square line ending filled with the annotation’s interior color, if any.
- [PDFLineStyle.circle](pdflinestyle/circle.md): A circular line ending filled with the annotation’s interior color, if any.
- [PDFLineStyle.diamond](pdflinestyle/diamond.md): A diamond-shaped line ending filled with the annotation’s interior color, if any.
- [PDFLineStyle.openArrow](pdflinestyle/openarrow.md): An open arrowhead line ending, composed from two short lines meeting in an acute angle at the line end.
- [PDFLineStyle.closedArrow](pdflinestyle/closedarrow.md): A closed arrowhead line ending, consisting of a triangle with the acute vertex at the line end and filled with the annotation’s interior color, if any.

### Initializers

- [init(rawValue:)](pdflinestyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Line Properties

- [lineEndingStyles](pdfannotationkey/lineendingstyles.md): An array of string values that specifies the styles to use for the ends of lines.
- [linePoints](pdfannotationkey/linepoints.md): An array of floating point values that specifies the starting and ending points, in page-space coordinates, of a line.
- [PDFAnnotationLineEndingStyle](pdfannotationlineendingstyle.md)

# PDFLineStyle (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The following constants specify the available line ending styles.

## Declaration

```objectivec
enum PDFLineStyle : NSInteger;
```

## Topics

### Constants

- [kPDFLineStyleNone](pdflinestyle/none.md): No line ending.
- [kPDFLineStyleSquare](pdflinestyle/square.md): A square line ending filled with the annotation’s interior color, if any.
- [kPDFLineStyleCircle](pdflinestyle/circle.md): A circular line ending filled with the annotation’s interior color, if any.
- [kPDFLineStyleDiamond](pdflinestyle/diamond.md): A diamond-shaped line ending filled with the annotation’s interior color, if any.
- [kPDFLineStyleOpenArrow](pdflinestyle/openarrow.md): An open arrowhead line ending, composed from two short lines meeting in an acute angle at the line end.
- [kPDFLineStyleClosedArrow](pdflinestyle/closedarrow.md): A closed arrowhead line ending, consisting of a triangle with the acute vertex at the line end and filled with the annotation’s interior color, if any.

## See Also

### Configuring Line Properties

- [PDFAnnotationKeyLineEndingStyles](pdfannotationkey/lineendingstyles.md): An array of string values that specifies the styles to use for the ends of lines.
- [PDFAnnotationKeyLinePoints](pdfannotationkey/linepoints.md): An array of floating point values that specifies the starting and ending points, in page-space coordinates, of a line.
- [PDFAnnotationLineEndingStyle](pdfannotationlineendingstyle.md)

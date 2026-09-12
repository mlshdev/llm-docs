> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfannotationlineendingstyle](https://developer.apple.com/documentation/pdfkit/pdfannotationlineendingstyle)

# PDFAnnotationLineEndingStyle (Swift)

**Framework:** PDFKit  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

## Declaration

```swift
struct PDFAnnotationLineEndingStyle
```

## Topics

### Choosing a Line-Ending Style

- [circle](pdfannotationlineendingstyle/circle.md): A style that displays a circle line ending and fills it with the annotation’s interior color.
- [closedArrow](pdfannotationlineendingstyle/closedarrow.md): A style that displays a closed arrowhead line ending and fills it with the annotation’s interior color.
- [diamond](pdfannotationlineendingstyle/diamond.md)
- [none](pdfannotationlineendingstyle/none.md)
- [openArrow](pdfannotationlineendingstyle/openarrow.md): A style that displays an open arrowhead line ending.
- [square](pdfannotationlineendingstyle/square.md): A style that displays a square line ending and fills it with the annotation’s interior color.

### Creating a Line-Ending Style

- [init(rawValue:)](pdfannotationlineendingstyle/init%28rawvalue_%29.md): Creates a line-ending style using the specified raw string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Line Properties

- [lineEndingStyles](pdfannotationkey/lineendingstyles.md): An array of string values that specifies the styles to use for the ends of lines.
- [PDFLineStyle](pdflinestyle.md): The following constants specify the available line ending styles.
- [linePoints](pdfannotationkey/linepoints.md): An array of floating point values that specifies the starting and ending points, in page-space coordinates, of a line.

# PDFAnnotationLineEndingStyle (Objective-C)

**Framework:** PDFKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

## Declaration

```objectivec
typedef NSString * const PDFAnnotationLineEndingStyle;
```

## Topics

### Choosing a Line-Ending Style

- [PDFAnnotationLineEndingStyleCircle](pdfannotationlineendingstyle/circle.md): A style that displays a circle line ending and fills it with the annotation’s interior color.
- [PDFAnnotationLineEndingStyleClosedArrow](pdfannotationlineendingstyle/closedarrow.md): A style that displays a closed arrowhead line ending and fills it with the annotation’s interior color.
- [PDFAnnotationLineEndingStyleDiamond](pdfannotationlineendingstyle/diamond.md)
- [PDFAnnotationLineEndingStyleNone](pdfannotationlineendingstyle/none.md)
- [PDFAnnotationLineEndingStyleOpenArrow](pdfannotationlineendingstyle/openarrow.md): A style that displays an open arrowhead line ending.
- [PDFAnnotationLineEndingStyleSquare](pdfannotationlineendingstyle/square.md): A style that displays a square line ending and fills it with the annotation’s interior color.

## See Also

### Configuring Line Properties

- [PDFAnnotationKeyLineEndingStyles](pdfannotationkey/lineendingstyles.md): An array of string values that specifies the styles to use for the ends of lines.
- [PDFLineStyle](pdflinestyle.md): The following constants specify the available line ending styles.
- [PDFAnnotationKeyLinePoints](pdfannotationkey/linepoints.md): An array of floating point values that specifies the starting and ending points, in page-space coordinates, of a line.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfmarkuptype](https://developer.apple.com/documentation/pdfkit/pdfmarkuptype)

# PDFMarkupType (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The styles available for markup annotations in PDFKit.

## Declaration

```swift
enum PDFMarkupType
```

## Topics

### Constants

- [PDFMarkupType.highlight](pdfmarkuptype/highlight.md): Highlight style for the markup.
- [PDFMarkupType.strikeOut](pdfmarkuptype/strikeout.md): Strikethrough style for the markup.
- [PDFMarkupType.underline](pdfmarkuptype/underline.md): Underline style for the markup.
- [PDFMarkupType.redact](pdfmarkuptype/redact.md): The redaction style for markup.

### Initializers

- [init(rawValue:)](pdfmarkuptype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Text Markup Annotations

- [markupType](pdfannotation/markuptype.md): The markup type that the annotation displays, either highlight, strikethrough, underline, or redact.
- [quadrilateralPoints](pdfannotation/quadrilateralpoints.md): An array of values that represents the points bounding the marked-up text.

# PDFMarkupType (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The styles available for markup annotations in PDFKit.

## Declaration

```objectivec
enum PDFMarkupType : NSInteger;
```

## Topics

### Constants

- [kPDFMarkupTypeHighlight](pdfmarkuptype/highlight.md): Highlight style for the markup.
- [kPDFMarkupTypeStrikeOut](pdfmarkuptype/strikeout.md): Strikethrough style for the markup.
- [kPDFMarkupTypeUnderline](pdfmarkuptype/underline.md): Underline style for the markup.
- [kPDFMarkupTypeRedact](pdfmarkuptype/redact.md): The redaction style for markup.

## See Also

### Configuring Text Markup Annotations

- [markupType](pdfannotation/markuptype.md): The markup type that the annotation displays, either highlight, strikethrough, underline, or redact.
- [quadrilateralPoints](pdfannotation/quadrilateralpoints.md): An array of values that represents the points bounding the marked-up text.

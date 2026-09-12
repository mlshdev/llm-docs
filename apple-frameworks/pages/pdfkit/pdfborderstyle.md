> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfborderstyle](https://developer.apple.com/documentation/pdfkit/pdfborderstyle)

# PDFBorderStyle (Swift)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

PDF Kit annotation borders may have the following styles.

## Declaration

```swift
enum PDFBorderStyle
```

## Topics

### Constants

- [PDFBorderStyle.solid](pdfborderstyle/solid.md): Solid border.
- [PDFBorderStyle.dashed](pdfborderstyle/dashed.md): Dashed border.
- [PDFBorderStyle.beveled](pdfborderstyle/beveled.md): Beveled border.
- [PDFBorderStyle.inset](pdfborderstyle/inset.md): Inset border.
- [PDFBorderStyle.underline](pdfborderstyle/underline.md): Underline border.

### Initializers

- [init(rawValue:)](pdfborderstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Border Styles and Characteristics

- [style](pdfborder/style.md): Sets the border style.
- [lineWidth](pdfborder/linewidth.md): Sets the line width (in points) for the border.
- [dashPattern](pdfborder/dashpattern.md): Gets the dash pattern for the border as an array of NSNumber objects.
- [borderKeyValues](pdfborder/borderkeyvalues.md): A dictionary that contains a deep copy of all border properties.
- [PDFBorderKey](pdfborderkey.md)

# PDFBorderStyle (Objective-C)

**Framework:** PDFKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

PDF Kit annotation borders may have the following styles.

## Declaration

```objectivec
enum PDFBorderStyle : NSInteger;
```

## Topics

### Constants

- [kPDFBorderStyleSolid](pdfborderstyle/solid.md): Solid border.
- [kPDFBorderStyleDashed](pdfborderstyle/dashed.md): Dashed border.
- [kPDFBorderStyleBeveled](pdfborderstyle/beveled.md): Beveled border.
- [kPDFBorderStyleInset](pdfborderstyle/inset.md): Inset border.
- [kPDFBorderStyleUnderline](pdfborderstyle/underline.md): Underline border.

## See Also

### Working with Border Styles and Characteristics

- [style](pdfborder/style.md): Sets the border style.
- [lineWidth](pdfborder/linewidth.md): Sets the line width (in points) for the border.
- [dashPattern](pdfborder/dashpattern.md): Gets the dash pattern for the border as an array of NSNumber objects.
- [borderKeyValues](pdfborder/borderkeyvalues.md): A dictionary that contains a deep copy of all border properties.
- [PDFBorderKey](pdfborderkey.md)

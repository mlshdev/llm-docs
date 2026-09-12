> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfborder/borderkeyvalues](https://developer.apple.com/documentation/pdfkit/pdfborder/borderkeyvalues)

# borderKeyValues (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A dictionary that contains a deep copy of all border properties.

## Declaration

```swift
var borderKeyValues: [AnyHashable : Any] { get }
```

## See Also

### Working with Border Styles and Characteristics

- [style](style.md): Sets the border style.
- [PDFBorderStyle](../pdfborderstyle.md): PDF Kit annotation borders may have the following styles.
- [lineWidth](linewidth.md): Sets the line width (in points) for the border.
- [dashPattern](dashpattern.md): Gets the dash pattern for the border as an array of NSNumber objects.
- [PDFBorderKey](../pdfborderkey.md)

# borderKeyValues (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A dictionary that contains a deep copy of all border properties.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDictionary * borderKeyValues;
```

## See Also

### Working with Border Styles and Characteristics

- [style](style.md): Sets the border style.
- [PDFBorderStyle](../pdfborderstyle.md): PDF Kit annotation borders may have the following styles.
- [lineWidth](linewidth.md): Sets the line width (in points) for the border.
- [dashPattern](dashpattern.md): Gets the dash pattern for the border as an array of NSNumber objects.
- [PDFBorderKey](../pdfborderkey.md)

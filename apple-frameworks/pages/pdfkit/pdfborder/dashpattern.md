> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfborder/dashpattern](https://developer.apple.com/documentation/pdfkit/pdfborder/dashpattern)

# dashPattern (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Gets the dash pattern for the border as an array of NSNumber objects.

## Declaration

```swift
var dashPattern: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Refer to the description for `NSBezierPath` for more information.

## See Also

### Working with Border Styles and Characteristics

- [style](style.md): Sets the border style.
- [PDFBorderStyle](../pdfborderstyle.md): PDF Kit annotation borders may have the following styles.
- [lineWidth](linewidth.md): Sets the line width (in points) for the border.
- [borderKeyValues](borderkeyvalues.md): A dictionary that contains a deep copy of all border properties.
- [PDFBorderKey](../pdfborderkey.md)

# dashPattern (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Gets the dash pattern for the border as an array of NSNumber objects.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray * dashPattern;
```

<a id="Discussion"></a>

## Discussion

Refer to the description for `NSBezierPath` for more information.

## See Also

### Working with Border Styles and Characteristics

- [style](style.md): Sets the border style.
- [PDFBorderStyle](../pdfborderstyle.md): PDF Kit annotation borders may have the following styles.
- [lineWidth](linewidth.md): Sets the line width (in points) for the border.
- [borderKeyValues](borderkeyvalues.md): A dictionary that contains a deep copy of all border properties.
- [PDFBorderKey](../pdfborderkey.md)

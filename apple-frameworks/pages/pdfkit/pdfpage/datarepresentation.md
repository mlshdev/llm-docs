> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/datarepresentation](https://developer.apple.com/documentation/pdfkit/pdfpage/datarepresentation)

# dataRepresentation (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the PDF data (that is, a PDF document) representing this page. This method does not preserve external page links.

## Declaration

```swift
var dataRepresentation: Data? { get }
```

## See Also

### Instance Properties

- [pageRef](pageref.md)

# dataRepresentation (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the PDF data (that is, a PDF document) representing this page. This method does not preserve external page links.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * dataRepresentation;
```

## See Also

### Instance Properties

- [pageRef](pageref.md)

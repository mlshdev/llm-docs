> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdestination/page](https://developer.apple.com/documentation/pdfkit/pdfdestination/page)

# page (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the page that the destination refers to.

## Declaration

```swift
weak var page: PDFPage? { get }
```

<a id="return-value"></a>

## Return Value

The page referred to by the destination.

## See Also

### Getting Pages and Points

- [point](point.md): Returns the point, in page space, that the destination refers to.
- [kPDFDestinationUnspecifiedValue](../kpdfdestinationunspecifiedvalue.md)

# page (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the page that the destination refers to.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) PDFPage * page;
```

<a id="return-value"></a>

## Return Value

The page referred to by the destination.

## See Also

### Getting Pages and Points

- [point](point.md): Returns the point, in page space, that the destination refers to.
- [kPDFDestinationUnspecifiedValue](../kpdfdestinationunspecifiedvalue.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdestination/point](https://developer.apple.com/documentation/pdfkit/pdfdestination/point)

# point (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the point, in page space, that the destination refers to.

## Declaration

```swift
var point: CGPoint { get }
```

```swift
var point: NSPoint { get }
```

<a id="return-value"></a>

## Return Value

The point, in page space, referred to by the destination.

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Getting Pages and Points

- [page](page.md): Returns the page that the destination refers to.
- [kPDFDestinationUnspecifiedValue](../kpdfdestinationunspecifiedvalue.md)

# point (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the point, in page space, that the destination refers to.

## Declaration

```objectivec
@property (nonatomic, readonly) CGPoint point;
```

```objectivec
@property (nonatomic, readonly) NSPoint point;
```

<a id="return-value"></a>

## Return Value

The point, in page space, referred to by the destination.

<a id="Discussion"></a>

## Discussion

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Getting Pages and Points

- [page](page.md): Returns the page that the destination refers to.
- [kPDFDestinationUnspecifiedValue](../kpdfdestinationunspecifiedvalue.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfactionremotegoto/point](https://developer.apple.com/documentation/pdfkit/pdfactionremotegoto/point)

# point (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Sets the point, in page space, on the page referenced by the remote go-to action.

## Declaration

```swift
var point: CGPoint { get set }
```

```swift
var point: NSPoint { get set }
```

## Parameters

- `point`: The point on the remote page to go to. If either the x value or the y value of the point is `kPDFDestinationUnspecifiedValue`, no position on the page is specified.

<a id="Discussion"></a>

## Discussion

Page space is a 72-dpi coordinate system with the origin at the lower-left corner of the current page.

# point (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Sets the point, in page space, on the page referenced by the remote go-to action.

## Declaration

```objectivec
@property (nonatomic) CGPoint point;
```

```objectivec
@property (nonatomic) NSPoint point;
```

## Parameters

- `point`: The point on the remote page to go to. If either the x value or the y value of the point is `kPDFDestinationUnspecifiedValue`, no position on the page is specified.

<a id="Discussion"></a>

## Discussion

Page space is a 72-dpi coordinate system with the origin at the lower-left corner of the current page.

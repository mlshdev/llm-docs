> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/isdragging](https://developer.apple.com/documentation/uikit/uiscrollview/isdragging)

# isDragging (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the user has begun scrolling the content.

## Declaration

```swift
var isDragging: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value held by this property might require some time or distance of scrolling before it returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the scrolling state

- [isTracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [isDecelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [isScrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming()](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollView.DecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

# dragging (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the user has begun scrolling the content.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDragging) BOOL dragging;
```

<a id="Discussion"></a>

## Discussion

The value held by this property might require some time or distance of scrolling before it returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the scrolling state

- [tracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [decelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [scrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollViewDecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

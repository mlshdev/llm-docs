> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/isdecelerating](https://developer.apple.com/documentation/uikit/uiscrollview/isdecelerating)

# isDecelerating (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.

## Declaration

```swift
var isDecelerating: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The returned value is [true](https://developer.apple.com/documentation/swift/true) if user isn’t dragging the content but scrolling is still occurring.

## See Also

### Managing the scrolling state

- [isTracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [isDragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [isScrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming()](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollView.DecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

# decelerating (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDecelerating) BOOL decelerating;
```

<a id="Discussion"></a>

## Discussion

The returned value is [true](https://developer.apple.com/documentation/swift/true) if user isn’t dragging the content but scrolling is still occurring.

## See Also

### Managing the scrolling state

- [tracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [dragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [scrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollViewDecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

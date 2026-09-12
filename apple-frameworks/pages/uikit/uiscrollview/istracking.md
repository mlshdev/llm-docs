> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/istracking](https://developer.apple.com/documentation/uikit/uiscrollview/istracking)

# isTracking (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the user has touched the content to initiate scrolling.

## Declaration

```swift
var isTracking: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the user has touched the content view but might not have yet have started dragging it.

## See Also

### Managing the scrolling state

- [isDragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [isDecelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [isScrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming()](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollView.DecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

# tracking (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the user has touched the content to initiate scrolling.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTracking) BOOL tracking;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the user has touched the content view but might not have yet have started dragging it.

## See Also

### Managing the scrolling state

- [dragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [decelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [scrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollViewDecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

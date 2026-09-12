> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/isscrollanimating](https://developer.apple.com/documentation/uikit/uiscrollview/isscrollanimating)

# isScrollAnimating (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the scroll view is currently animating a scroll update.

## Declaration

```swift
var isScrollAnimating: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Call [stopScrollingAndZooming()](stopscrollingandzooming%28%29.md) to stop the animation.

## See Also

### Managing the scrolling state

- [isTracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [isDragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [isDecelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [stopScrollingAndZooming()](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollView.DecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

# scrollAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

A Boolean value that indicates whether the scroll view is currently animating a scroll update.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isScrollAnimating) BOOL scrollAnimating;
```

<a id="Discussion"></a>

## Discussion

Call [stopScrollingAndZooming](stopscrollingandzooming%28%29.md) to stop the animation.

## See Also

### Managing the scrolling state

- [tracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [dragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [decelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [stopScrollingAndZooming](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollViewDecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/decelerationrate-swift.property](https://developer.apple.com/documentation/uikit/uiscrollview/decelerationrate-swift.property)

# decelerationRate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A floating-point value that determines the rate of deceleration after the user lifts their finger.

## Declaration

```swift
var decelerationRate: UIScrollView.DecelerationRate { get set }
```

<a id="Discussion"></a>

## Discussion

The default rate is [normal](decelerationrate-swift.struct/normal.md). For possible deceleration rates, see [UIScrollView.DecelerationRate](decelerationrate-swift.struct.md).

## See Also

### Managing the scrolling state

- [isTracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [isDragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [isDecelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [isScrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming()](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [UIScrollView.DecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

# decelerationRate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A floating-point value that determines the rate of deceleration after the user lifts their finger.

## Declaration

```objectivec
@property (nonatomic) UIScrollViewDecelerationRate decelerationRate;
```

<a id="Discussion"></a>

## Discussion

The default rate is [UIScrollViewDecelerationRateNormal](decelerationrate-swift.struct/normal.md). For possible deceleration rates, see [UIScrollViewDecelerationRate](decelerationrate-swift.struct.md).

## See Also

### Managing the scrolling state

- [tracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [dragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [decelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [scrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [stopScrollingAndZooming](stopscrollingandzooming%28%29.md): Stops active scroll and zoom animations.
- [UIScrollViewDecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

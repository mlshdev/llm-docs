> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/stopscrollingandzooming()](https://developer.apple.com/documentation/uikit/uiscrollview/stopscrollingandzooming())

# stopScrollingAndZooming() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

Stops active scroll and zoom animations.

## Declaration

```swift
func stopScrollingAndZooming()
```

<a id="Discussion"></a>

## Discussion

The scroll view’s content offset remains at the value it has when you call this method, unless:

- The scroll view is bouncing, in which case the content offset returns to the edge of the document.
- The scroll view is paging its content, in which case the content offset updates to a page boundary.

## See Also

### Managing the scrolling state

- [isTracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [isDragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [isDecelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [isScrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollView.DecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

# stopScrollingAndZooming (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

Stops active scroll and zoom animations.

## Declaration

```objectivec
- (void) stopScrollingAndZooming;
```

<a id="Discussion"></a>

## Discussion

The scroll view’s content offset remains at the value it has when you call this method, unless:

- The scroll view is bouncing, in which case the content offset returns to the edge of the document.
- The scroll view is paging its content, in which case the content offset updates to a page boundary.

## See Also

### Managing the scrolling state

- [tracking](istracking.md): A Boolean value that indicates whether the user has touched the content to initiate scrolling.
- [dragging](isdragging.md): A Boolean value that indicates whether the user has begun scrolling the content.
- [decelerating](isdecelerating.md): A Boolean value that indicates whether the content is moving in the scroll view after the user lifted their finger.
- [scrollAnimating](isscrollanimating.md): A Boolean value that indicates whether the scroll view is currently animating a scroll update.
- [decelerationRate](decelerationrate-swift.property.md): A floating-point value that determines the rate of deceleration after the user lifts their finger.
- [UIScrollViewDecelerationRate](decelerationrate-swift.struct.md): Deceleration rates for the scroll view.

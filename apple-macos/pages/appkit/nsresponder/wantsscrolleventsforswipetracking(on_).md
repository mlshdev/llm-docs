> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/wantsscrolleventsforswipetracking(on:)](https://developer.apple.com/documentation/appkit/nsresponder/wantsscrolleventsforswipetracking(on:))

# wantsScrollEventsForSwipeTracking(on:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to track gesture scroll events such as a swipe.

## Declaration

```swift
func wantsScrollEventsForSwipeTracking(on axis: NSEvent.GestureAxis) -> Bool
```

## Parameters

- `axis`: The event gesture axis of the swipe, which defines the scroll direction.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if gesture scroll events are to be forwarded up the responder chain; otherwise [false](https://developer.apple.com/documentation/swift/false). The default implementation returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method in your swipe controller and return [true](https://developer.apple.com/documentation/swift/true) to inform views that perform elastic scrolling to forward gesture scroll events up the responder chain. The events are forwarded only on the following condition: the content to be scrolled is already at the edge of the scrolled direction when the scroll gesture begins. Otherwise, the view performs elastic scrolling. The default implementation returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [trackSwipeEvent(options:dampenAmountThresholdMin:max:usingHandler:)](../nsevent/trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md): Allows tracking and user interface feedback of scroll wheel events.

### Touch and Gesture Events

- [beginGesture(with:)](begingesture%28with_%29.md): Deprecated. Informs the receiver that the user has begun a touch gesture.
- [endGesture(with:)](endgesture%28with_%29.md): Deprecated. Informs the receiver that the user has ended a touch gesture.
- [magnify(with:)](magnify%28with_%29.md): Informs the receiver that the user has begun a pinch gesture.
- [rotate(with:)](rotate%28with_%29.md): Informs the receiver that the user has begun a rotation gesture.
- [swipe(with:)](swipe%28with_%29.md): Informs the receiver that the user has begun a swipe gesture.
- [touchesBegan(with:)](touchesbegan%28with_%29.md): Informs the receiver that new set of touches has been recognized.
- [touchesMoved(with:)](touchesmoved%28with_%29.md): Informs the receiver that one or more touches has moved.
- [touchesCancelled(with:)](touchescancelled%28with_%29.md): Informs the receiver that tracking of touches has been cancelled for any reason.
- [touchesEnded(with:)](touchesended%28with_%29.md): Returns that a set of touches have been removed.
- [wantsForwardedScrollEvents(for:)](wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnify(with:)](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [NSEvent.GestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

# wantsScrollEventsForSwipeTrackingOnAxis: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Implement this method to track gesture scroll events such as a swipe.

## Declaration

```objectivec
- (BOOL) wantsScrollEventsForSwipeTrackingOnAxis:(NSEventGestureAxis) axis;
```

## Parameters

- `axis`: The event gesture axis of the swipe, which defines the scroll direction.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if gesture scroll events are to be forwarded up the responder chain; otherwise [false](https://developer.apple.com/documentation/swift/false). The default implementation returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Implement this method in your swipe controller and return [true](https://developer.apple.com/documentation/swift/true) to inform views that perform elastic scrolling to forward gesture scroll events up the responder chain. The events are forwarded only on the following condition: the content to be scrolled is already at the edge of the scrolled direction when the scroll gesture begins. Otherwise, the view performs elastic scrolling. The default implementation returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [trackSwipeEventWithOptions:dampenAmountThresholdMin:max:usingHandler:](../nsevent/trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md): Allows tracking and user interface feedback of scroll wheel events.

### Touch and Gesture Events

- [beginGestureWithEvent:](begingesture%28with_%29.md): Deprecated. Informs the receiver that the user has begun a touch gesture.
- [endGestureWithEvent:](endgesture%28with_%29.md): Deprecated. Informs the receiver that the user has ended a touch gesture.
- [magnifyWithEvent:](magnify%28with_%29.md): Informs the receiver that the user has begun a pinch gesture.
- [rotateWithEvent:](rotate%28with_%29.md): Informs the receiver that the user has begun a rotation gesture.
- [swipeWithEvent:](swipe%28with_%29.md): Informs the receiver that the user has begun a swipe gesture.
- [touchesBeganWithEvent:](touchesbegan%28with_%29.md): Informs the receiver that new set of touches has been recognized.
- [touchesMovedWithEvent:](touchesmoved%28with_%29.md): Informs the receiver that one or more touches has moved.
- [touchesCancelledWithEvent:](touchescancelled%28with_%29.md): Informs the receiver that tracking of touches has been cancelled for any reason.
- [touchesEndedWithEvent:](touchesended%28with_%29.md): Returns that a set of touches have been removed.
- [wantsForwardedScrollEventsForAxis:](wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnifyWithEvent:](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [NSEventGestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

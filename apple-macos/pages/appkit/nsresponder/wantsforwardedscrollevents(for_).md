> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/wantsforwardedscrollevents(for:)](https://developer.apple.com/documentation/appkit/nsresponder/wantsforwardedscrollevents(for:))

# wantsForwardedScrollEvents(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns whether to forward elastic scrolling gesture events up the responder.

## Declaration

```swift
func wantsForwardedScrollEvents(for axis: NSEvent.GestureAxis) -> Bool
```

## Parameters

- `axis`: The gesture axis. See [NSEvent.GestureAxis](../nsevent/gestureaxis.md) for the possible values.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) when forward gesture scroll events should be forwarded up the responder chain when the scrolling content is already at the edge of the scrolled direction at the beginning of the scroll gesture; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Some views process gesture scroll events to perform elastic scrolling. In some cases, you may want to track gesture scroll events like a swipe, see [trackSwipeEvent(options:dampenAmountThresholdMin:max:usingHandler:)](../nsevent/trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md).

Implement this method and return [true](https://developer.apple.com/documentation/swift/true) in your swipe controller and views that perform elastic scrolling will forward gesture scroll events up the responder chain on the following condition: the content to be scrolled is already at the edge of the scrolled direction at the beginning of the scroll gesture.

Otherwise, the view will perform elastic scrolling.

## See Also

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
- [smartMagnify(with:)](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTracking(on:)](wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEvent.GestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

# wantsForwardedScrollEventsForAxis: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns whether to forward elastic scrolling gesture events up the responder.

## Declaration

```objectivec
- (BOOL) wantsForwardedScrollEventsForAxis:(NSEventGestureAxis) axis;
```

## Parameters

- `axis`: The gesture axis. See [NSEventGestureAxis](../nsevent/gestureaxis.md) for the possible values.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) when forward gesture scroll events should be forwarded up the responder chain when the scrolling content is already at the edge of the scrolled direction at the beginning of the scroll gesture; [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Some views process gesture scroll events to perform elastic scrolling. In some cases, you may want to track gesture scroll events like a swipe, see [trackSwipeEventWithOptions:dampenAmountThresholdMin:max:usingHandler:](../nsevent/trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md).

Implement this method and return [true](https://developer.apple.com/documentation/swift/true) in your swipe controller and views that perform elastic scrolling will forward gesture scroll events up the responder chain on the following condition: the content to be scrolled is already at the edge of the scrolled direction at the beginning of the scroll gesture.

Otherwise, the view will perform elastic scrolling.

## See Also

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
- [smartMagnifyWithEvent:](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTrackingOnAxis:](wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEventGestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

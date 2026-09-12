> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/touchescancelled(with:)](https://developer.apple.com/documentation/appkit/nsresponder/touchescancelled(with:))

# touchesCancelled(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Informs the receiver that tracking of touches has been cancelled for any reason.

## Declaration

```swift
func touchesCancelled(with event: NSEvent)
```

## Parameters

- `event`: An event object representing the cancellation of a touch event.

<a id="Discussion"></a>

## Discussion

The event will be sent to the view under the touch in the key window.

## See Also

### Touch and Gesture Events

- [beginGesture(with:)](begingesture%28with_%29.md): Deprecated. Informs the receiver that the user has begun a touch gesture.
- [endGesture(with:)](endgesture%28with_%29.md): Deprecated. Informs the receiver that the user has ended a touch gesture.
- [magnify(with:)](magnify%28with_%29.md): Informs the receiver that the user has begun a pinch gesture.
- [rotate(with:)](rotate%28with_%29.md): Informs the receiver that the user has begun a rotation gesture.
- [swipe(with:)](swipe%28with_%29.md): Informs the receiver that the user has begun a swipe gesture.
- [touchesBegan(with:)](touchesbegan%28with_%29.md): Informs the receiver that new set of touches has been recognized.
- [touchesMoved(with:)](touchesmoved%28with_%29.md): Informs the receiver that one or more touches has moved.
- [touchesEnded(with:)](touchesended%28with_%29.md): Returns that a set of touches have been removed.
- [wantsForwardedScrollEvents(for:)](wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnify(with:)](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTracking(on:)](wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEvent.GestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

# touchesCancelledWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Informs the receiver that tracking of touches has been cancelled for any reason.

## Declaration

```objectivec
- (void) touchesCancelledWithEvent:(NSEvent *) event;
```

## Parameters

- `event`: An event object representing the cancellation of a touch event.

<a id="Discussion"></a>

## Discussion

The event will be sent to the view under the touch in the key window.

## See Also

### Touch and Gesture Events

- [beginGestureWithEvent:](begingesture%28with_%29.md): Deprecated. Informs the receiver that the user has begun a touch gesture.
- [endGestureWithEvent:](endgesture%28with_%29.md): Deprecated. Informs the receiver that the user has ended a touch gesture.
- [magnifyWithEvent:](magnify%28with_%29.md): Informs the receiver that the user has begun a pinch gesture.
- [rotateWithEvent:](rotate%28with_%29.md): Informs the receiver that the user has begun a rotation gesture.
- [swipeWithEvent:](swipe%28with_%29.md): Informs the receiver that the user has begun a swipe gesture.
- [touchesBeganWithEvent:](touchesbegan%28with_%29.md): Informs the receiver that new set of touches has been recognized.
- [touchesMovedWithEvent:](touchesmoved%28with_%29.md): Informs the receiver that one or more touches has moved.
- [touchesEndedWithEvent:](touchesended%28with_%29.md): Returns that a set of touches have been removed.
- [wantsForwardedScrollEventsForAxis:](wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnifyWithEvent:](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTrackingOnAxis:](wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEventGestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

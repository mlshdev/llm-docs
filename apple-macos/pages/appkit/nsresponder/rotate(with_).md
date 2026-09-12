> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/rotate(with:)](https://developer.apple.com/documentation/appkit/nsresponder/rotate(with:))

# rotate(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs the receiver that the user has begun a rotation gesture.

## Declaration

```swift
func rotate(with event: NSEvent)
```

## Parameters

- `event`: An event object representing the rotate gesture.

<a id="Discussion"></a>

## Discussion

The event will be sent to the view under the touch in the key window.

## See Also

### Touch and Gesture Events

- [beginGesture(with:)](begingesture%28with_%29.md): Deprecated. Informs the receiver that the user has begun a touch gesture.
- [endGesture(with:)](endgesture%28with_%29.md): Deprecated. Informs the receiver that the user has ended a touch gesture.
- [magnify(with:)](magnify%28with_%29.md): Informs the receiver that the user has begun a pinch gesture.
- [swipe(with:)](swipe%28with_%29.md): Informs the receiver that the user has begun a swipe gesture.
- [touchesBegan(with:)](touchesbegan%28with_%29.md): Informs the receiver that new set of touches has been recognized.
- [touchesMoved(with:)](touchesmoved%28with_%29.md): Informs the receiver that one or more touches has moved.
- [touchesCancelled(with:)](touchescancelled%28with_%29.md): Informs the receiver that tracking of touches has been cancelled for any reason.
- [touchesEnded(with:)](touchesended%28with_%29.md): Returns that a set of touches have been removed.
- [wantsForwardedScrollEvents(for:)](wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnify(with:)](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTracking(on:)](wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEvent.GestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

# rotateWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs the receiver that the user has begun a rotation gesture.

## Declaration

```objectivec
- (void) rotateWithEvent:(NSEvent *) event;
```

## Parameters

- `event`: An event object representing the rotate gesture.

<a id="Discussion"></a>

## Discussion

The event will be sent to the view under the touch in the key window.

## See Also

### Touch and Gesture Events

- [beginGestureWithEvent:](begingesture%28with_%29.md): Deprecated. Informs the receiver that the user has begun a touch gesture.
- [endGestureWithEvent:](endgesture%28with_%29.md): Deprecated. Informs the receiver that the user has ended a touch gesture.
- [magnifyWithEvent:](magnify%28with_%29.md): Informs the receiver that the user has begun a pinch gesture.
- [swipeWithEvent:](swipe%28with_%29.md): Informs the receiver that the user has begun a swipe gesture.
- [touchesBeganWithEvent:](touchesbegan%28with_%29.md): Informs the receiver that new set of touches has been recognized.
- [touchesMovedWithEvent:](touchesmoved%28with_%29.md): Informs the receiver that one or more touches has moved.
- [touchesCancelledWithEvent:](touchescancelled%28with_%29.md): Informs the receiver that tracking of touches has been cancelled for any reason.
- [touchesEndedWithEvent:](touchesended%28with_%29.md): Returns that a set of touches have been removed.
- [wantsForwardedScrollEventsForAxis:](wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnifyWithEvent:](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTrackingOnAxis:](wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEventGestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

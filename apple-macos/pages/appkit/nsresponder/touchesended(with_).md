> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/touchesended(with:)](https://developer.apple.com/documentation/appkit/nsresponder/touchesended(with:))

# touchesEnded(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns that a set of touches have been removed.

## Declaration

```swift
func touchesEnded(with event: NSEvent)
```

## Parameters

- `event`: An event object representing the ending of a touch event.

<a id="Discussion"></a>

## Discussion

The system sends the event to the view under the touch in the key window. To get the set of touches that ended for this view (or descendants of this view) call [touches(matching:in:)](../nsevent/touches%28matching_in_%29.md) on `event` and pass [ended](../nstouch/phase-swift.struct/ended.md) for the phase.

This isn’t always the point of removal with the touch device. A touch that transitions from active to resting may be part of an [touchesEnded(with:)](touchesended%28with_%29.md) set.

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
- [wantsForwardedScrollEvents(for:)](wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnify(with:)](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTracking(on:)](wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEvent.GestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

# touchesEndedWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns that a set of touches have been removed.

## Declaration

```objectivec
- (void) touchesEndedWithEvent:(NSEvent *) event;
```

## Parameters

- `event`: An event object representing the ending of a touch event.

<a id="Discussion"></a>

## Discussion

The system sends the event to the view under the touch in the key window. To get the set of touches that ended for this view (or descendants of this view) call [touchesMatchingPhase:inView:](../nsevent/touches%28matching_in_%29.md) on `event` and pass [NSTouchPhaseEnded](../nstouch/phase-swift.struct/ended.md) for the phase.

This isn’t always the point of removal with the touch device. A touch that transitions from active to resting may be part of an [touchesEndedWithEvent:](touchesended%28with_%29.md) set.

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
- [wantsForwardedScrollEventsForAxis:](wantsforwardedscrollevents%28for_%29.md): Returns whether to forward elastic scrolling gesture events up the responder.
- [smartMagnifyWithEvent:](smartmagnify%28with_%29.md): Informs the receiver that the user performed a smart zoom gesture.
- [wantsScrollEventsForSwipeTrackingOnAxis:](wantsscrolleventsforswipetracking%28on_%29.md): Implement this method to track gesture scroll events such as a swipe.
- [NSEventGestureAxis](../nsevent/gestureaxis.md): Constants that specify the direction of travel for a gesture.

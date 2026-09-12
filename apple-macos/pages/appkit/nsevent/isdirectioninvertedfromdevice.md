> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/isdirectioninvertedfromdevice](https://developer.apple.com/documentation/appkit/nsevent/isdirectioninvertedfromdevice)

# isDirectionInvertedFromDevice (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the user has changed the device inversion.

## Declaration

```swift
var isDirectionInvertedFromDevice: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) if the direction is inverted; otherwise, [false](https://developer.apple.com/documentation/swift/false).

This property is valid for `NSEventScrollWheel` and [NSEvent.EventType.swipe](eventtype/swipe.md) events. The user may choose to change the scrolling behavior such that it feels like they are moving the content instead of the scroll bar.

To accomplish this, [deltaX](deltax.md) and [deltaY](deltay.md) and [scrollingDeltaX](scrollingdeltax.md) and [scrollingDeltaY](scrollingdeltay.md) values are automatically inverted for NSEventScrollWheel events according to the user’s preferences.

The direction of fluid swipes matches the direction of scrolling and as such for NSEventTypeSwipe events gestureAmount is inverted. However, for some uses of NSEventScrollWheel and NSEventTypeSwipe events, the behavior should not respect the user preference. This property allows you to determine when the event has been inverted and compensate by multiplying by `-1` if needed.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.

# directionInvertedFromDevice (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the user has changed the device inversion.

## Declaration

```objectivec
@property (readonly, getter=isDirectionInvertedFromDevice) BOOL directionInvertedFromDevice;
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) if the direction is inverted; otherwise, [false](https://developer.apple.com/documentation/swift/false).

This property is valid for `NSEventScrollWheel` and [NSEventTypeSwipe](eventtype/swipe.md) events. The user may choose to change the scrolling behavior such that it feels like they are moving the content instead of the scroll bar.

To accomplish this, [deltaX](deltax.md) and [deltaY](deltay.md) and [scrollingDeltaX](scrollingdeltax.md) and [scrollingDeltaY](scrollingdeltay.md) values are automatically inverted for NSEventScrollWheel events according to the user’s preferences.

The direction of fluid swipes matches the direction of scrolling and as such for NSEventTypeSwipe events gestureAmount is inverted. However, for some uses of NSEventScrollWheel and NSEventTypeSwipe events, the behavior should not respect the user preference. This property allows you to determine when the event has been inverted and compensate by multiplying by `-1` if needed.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.

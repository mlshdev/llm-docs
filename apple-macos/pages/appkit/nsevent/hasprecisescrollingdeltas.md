> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/hasprecisescrollingdeltas](https://developer.apple.com/documentation/appkit/nsevent/hasprecisescrollingdeltas)

# hasPreciseScrollingDeltas (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether precise scrolling deltas are available.

## Declaration

```swift
var hasPreciseScrollingDeltas: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) if precise scrolling deltas are available; otherwise, [false](https://developer.apple.com/documentation/swift/false).

This property is valid for [NSScrollWheel](../nsscrollwheel.md) events. A generic scroll wheel issues rather coarse scroll deltas. Some mice and trackpads provide much more precise delta. This method determines how the values of the [scrollingDeltaX](scrollingdeltax.md) and [scrollingDeltaY](scrollingdeltay.md) should be interpreted.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [isDirectionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

# hasPreciseScrollingDeltas (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether precise scrolling deltas are available.

## Declaration

```objectivec
@property (readonly) BOOL hasPreciseScrollingDeltas;
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) if precise scrolling deltas are available; otherwise, [false](https://developer.apple.com/documentation/swift/false).

This property is valid for [NSScrollWheel](../nsscrollwheel.md) events. A generic scroll wheel issues rather coarse scroll deltas. Some mice and trackpads provide much more precise delta. This method determines how the values of the [scrollingDeltaX](scrollingdeltax.md) and [scrollingDeltaY](scrollingdeltay.md) should be interpreted.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [directionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

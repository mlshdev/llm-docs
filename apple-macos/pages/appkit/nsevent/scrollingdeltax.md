> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/scrollingdeltax](https://developer.apple.com/documentation/appkit/nsevent/scrollingdeltax)

# scrollingDeltaX (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroll wheel’s horizontal delta.

## Declaration

```swift
var scrollingDeltaX: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This is the preferred property for accessing [NSScrollWheel](../nsscrollwheel.md) delta values. When [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md) is [false](https://developer.apple.com/documentation/swift/false), your application may need to modify the raw value before using it.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [isDirectionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

# scrollingDeltaX (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroll wheel’s horizontal delta.

## Declaration

```objectivec
@property (readonly) CGFloat scrollingDeltaX;
```

<a id="Discussion"></a>

## Discussion

This is the preferred property for accessing [NSScrollWheel](../nsscrollwheel.md) delta values. When [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md) is [false](https://developer.apple.com/documentation/swift/false), your application may need to modify the raw value before using it.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [directionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

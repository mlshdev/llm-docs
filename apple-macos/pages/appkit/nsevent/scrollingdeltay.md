> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/scrollingdeltay](https://developer.apple.com/documentation/appkit/nsevent/scrollingdeltay)

# scrollingDeltaY (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroll wheel’s vertical delta.

## Declaration

```swift
var scrollingDeltaY: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This is the preferred property for accessing [NSScrollWheel](../nsscrollwheel.md) delta values. When [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md) is [false](https://developer.apple.com/documentation/swift/false), multiply the value returned by this method by the line or row height. Otherwise scroll by the returned amount.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [isDirectionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

# scrollingDeltaY (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The scroll wheel’s vertical delta.

## Declaration

```objectivec
@property (readonly) CGFloat scrollingDeltaY;
```

<a id="Discussion"></a>

## Discussion

This is the preferred property for accessing [NSScrollWheel](../nsscrollwheel.md) delta values. When [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md) is [false](https://developer.apple.com/documentation/swift/false), multiply the value returned by this method by the line or row height. Otherwise scroll by the returned amount.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [directionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/deltaz](https://developer.apple.com/documentation/appkit/nsevent/deltaz)

# deltaZ (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.

## Declaration

```swift
var deltaZ: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This value is typically `0.0`.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [isDirectionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

# deltaZ (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.

## Declaration

```objectivec
@property (readonly) CGFloat deltaZ;
```

<a id="Discussion"></a>

## Discussion

This value is typically `0.0`.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [directionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

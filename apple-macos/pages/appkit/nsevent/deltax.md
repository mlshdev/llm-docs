> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/deltax](https://developer.apple.com/documentation/appkit/nsevent/deltax)

# deltaX (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.

## Declaration

```swift
var deltaX: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property is only valid for scroll wheel, mouse-move, mouse-drag, and swipe events. For swipe events, a nonzero value represents a horizontal swipe; `-1.0` corresponds to swipe right and `1.0` corresponds to swipe left.

For scroll wheel events, use [scrollingDeltaX](scrollingdeltax.md) instead.

## See Also

### Getting scroll wheel and flick events

- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [isDirectionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

# deltaX (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.

## Declaration

```objectivec
@property (readonly) CGFloat deltaX;
```

<a id="Discussion"></a>

## Discussion

This property is only valid for scroll wheel, mouse-move, mouse-drag, and swipe events. For swipe events, a nonzero value represents a horizontal swipe; `-1.0` corresponds to swipe right and `1.0` corresponds to swipe left.

For scroll wheel events, use [scrollingDeltaX](scrollingdeltax.md) instead.

## See Also

### Getting scroll wheel and flick events

- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [momentumPhase](momentumphase.md): The momentum phase for a scroll or flick gesture.
- [directionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

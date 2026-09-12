> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/momentumphase](https://developer.apple.com/documentation/appkit/nsevent/momentumphase)

# momentumPhase (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The momentum phase for a scroll or flick gesture.

## Declaration

```swift
var momentumPhase: NSEvent.Phase { get }
```

<a id="Discussion"></a>

## Discussion

This property is valid for [NSScrollWheel](../nsscrollwheel.md) events. With the Magic Mouse and some trackpads, the user can use a scroll wheel or flick gesture resulting in a stream of scroll events that dissipate over time.

The location of these scroll wheel events changes as the user moves the cursor. These events are attached to the view that is under the cursor when the flick occurs. A custom view can use this method to recognize these momentum scroll events and further route the event to the appropriate sub component.

See [NSEvent.Phase](phase-swift.struct.md) for possible values.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [isDirectionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

# momentumPhase (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The momentum phase for a scroll or flick gesture.

## Declaration

```objectivec
@property (readonly) NSEventPhase momentumPhase;
```

<a id="Discussion"></a>

## Discussion

This property is valid for [NSScrollWheel](../nsscrollwheel.md) events. With the Magic Mouse and some trackpads, the user can use a scroll wheel or flick gesture resulting in a stream of scroll events that dissipate over time.

The location of these scroll wheel events changes as the user moves the cursor. These events are attached to the view that is under the cursor when the flick occurs. A custom view can use this method to recognize these momentum scroll events and further route the event to the appropriate sub component.

See [NSEventPhase](phase-swift.struct.md) for possible values.

## See Also

### Getting scroll wheel and flick events

- [deltaX](deltax.md): The x-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaY](deltay.md): The y-coordinate change for scroll wheel, mouse-move, mouse-drag, and swipe events.
- [deltaZ](deltaz.md): The z-coordinate change for a scroll wheel, mouse-move, or mouse-drag event.
- [hasPreciseScrollingDeltas](hasprecisescrollingdeltas.md): A Boolean value that indicates whether precise scrolling deltas are available.
- [scrollingDeltaX](scrollingdeltax.md): The scroll wheel’s horizontal delta.
- [scrollingDeltaY](scrollingdeltay.md): The scroll wheel’s vertical delta.
- [directionInvertedFromDevice](isdirectioninvertedfromdevice.md): A Boolean value that indicates whether the user has changed the device inversion.

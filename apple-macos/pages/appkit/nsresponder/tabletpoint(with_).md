> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/tabletpoint(with:)](https://developer.apple.com/documentation/appkit/nsresponder/tabletpoint(with:))

# tabletPoint(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that a tablet-point event has occurred.

## Declaration

```swift
func tabletPoint(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the tablet-point event.

<a id="Discussion"></a>

## Discussion

Tablet events are represented by `NSEvent` objects of type [NSTabletPoint](../nstabletpoint.md). They describe the current state of a transducer (that is, a pointing device) that is in proximity to its tablet, reflecting changes such as location, pressure, tilt, and rotation. See the [NSEvent](../nsevent.md) reference for the methods that allow you to extract this and other information from `event`. The default implementation of `NSResponder` passes the message to the next responder.

## See Also

### Responding to Other Kinds of Events

- [cursorUpdate(with:)](cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged(with:)](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletProximity(with:)](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested(\_:)](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLook(with:)](quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.
- [changeMode(with:)](changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

# tabletPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the receiver that a tablet-point event has occurred.

## Declaration

```objectivec
- (void) tabletPoint:(NSEvent *) event;
```

## Parameters

- `event`: An object encapsulating information about the tablet-point event.

<a id="Discussion"></a>

## Discussion

Tablet events are represented by `NSEvent` objects of type [NSTabletPoint](../nstabletpoint.md). They describe the current state of a transducer (that is, a pointing device) that is in proximity to its tablet, reflecting changes such as location, pressure, tilt, and rotation. See the [NSEvent](../nsevent.md) reference for the methods that allow you to extract this and other information from `event`. The default implementation of `NSResponder` passes the message to the next responder.

## See Also

### Responding to Other Kinds of Events

- [cursorUpdate:](cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged:](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletProximity:](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested:](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel:](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLookWithEvent:](quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.
- [changeModeWithEvent:](changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

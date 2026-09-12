> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/changemode(with:)](https://developer.apple.com/documentation/appkit/nsresponder/changemode(with:))

# changeMode(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Informs the responder that performed a double-tap on the side of an Apple Pencil.

## Declaration

```swift
func changeMode(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the change-mode event.

<a id="Discussion"></a>

## Discussion

The default implementation passes the event to the next responder.

## See Also

### Responding to Other Kinds of Events

- [cursorUpdate(with:)](cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged(with:)](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint(with:)](tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity(with:)](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested(\_:)](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLook(with:)](quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.

# changeModeWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Informs the responder that performed a double-tap on the side of an Apple Pencil.

## Declaration

```objectivec
- (void) changeModeWithEvent:(NSEvent *) event;
```

## Parameters

- `event`: An object encapsulating information about the change-mode event.

<a id="Discussion"></a>

## Discussion

The default implementation passes the event to the next responder.

## See Also

### Responding to Other Kinds of Events

- [cursorUpdate:](cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged:](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint:](tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity:](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested:](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel:](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLookWithEvent:](quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.

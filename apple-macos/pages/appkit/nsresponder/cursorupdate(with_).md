> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/cursorupdate(with:)](https://developer.apple.com/documentation/appkit/nsresponder/cursorupdate(with:))

# cursorUpdate(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs the receiver that the mouse cursor has moved into a cursor rectangle.

## Declaration

```swift
func cursorUpdate(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the cursor-update event ([NSCursorUpdate](../nscursorupdate.md)).

<a id="Discussion"></a>

## Discussion

Override this method to set the cursor image. The default implementation uses cursor rectangles, if cursor rectangles are currently valid.  If they are not, it calls `super` to send the message up the responder chain.

If the responder implements this method, but decides not to handle a particular event, it should invoke the superclass implementation of this method.

## See Also

### Responding to Other Kinds of Events

- [flagsChanged(with:)](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint(with:)](tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity(with:)](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested(\_:)](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLook(with:)](quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.
- [changeMode(with:)](changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

# cursorUpdate: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Informs the receiver that the mouse cursor has moved into a cursor rectangle.

## Declaration

```objectivec
- (void) cursorUpdate:(NSEvent *) event;
```

## Parameters

- `event`: An object encapsulating information about the cursor-update event ([NSCursorUpdate](../nscursorupdate.md)).

<a id="Discussion"></a>

## Discussion

Override this method to set the cursor image. The default implementation uses cursor rectangles, if cursor rectangles are currently valid.  If they are not, it calls `super` to send the message up the responder chain.

If the responder implements this method, but decides not to handle a particular event, it should invoke the superclass implementation of this method.

## See Also

### Responding to Other Kinds of Events

- [flagsChanged:](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint:](tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity:](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [helpRequested:](helprequested%28__%29.md): Displays context-sensitive help for the receiver if help has been registered.
- [scrollWheel:](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLookWithEvent:](quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.
- [changeModeWithEvent:](changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

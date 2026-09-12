> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/helprequested(_:)](https://developer.apple.com/documentation/appkit/nsresponder/helprequested(_:))

# helpRequested(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays context-sensitive help for the receiver if help has been registered.

## Declaration

```swift
func helpRequested(_ eventPtr: NSEvent)
```

## Parameters

- `eventPtr`: An object encapsulating information about the help-request event.

<a id="Discussion"></a>

## Discussion

[NSWindow](../nswindow.md) invokes this method automatically when the user clicks for help and help has been registered using [setContextHelp(\_:for:)](../nshelpmanager/setcontexthelp%28__for_%29.md). Otherwise, `NSWindow` passes the message to the next responder. Subclasses are not required to override this method.

> **Note**

>  Current hardware does not invoke this method and application code should not call it directly. To provide context-sensitive help, use help tags (tooltips). For more information, see [macOS Human Interface Guidelines - Help Tags (Tooltips)](https://developer.apple.com/design/human-interface-guidelines/macos/user-interaction/help/#help-tags).

## See Also

### Related Documentation

- [showContextHelp(\_:)](showcontexthelp%28__%29.md): Implemented by subclasses to invoke the help system, displaying information relevant to the receiver and its current state.

### Responding to Other Kinds of Events

- [cursorUpdate(with:)](cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged(with:)](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint(with:)](tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity(with:)](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLook(with:)](quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.
- [changeMode(with:)](changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

# helpRequested: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Displays context-sensitive help for the receiver if help has been registered.

## Declaration

```objectivec
- (void) helpRequested:(NSEvent *) eventPtr;
```

## Parameters

- `eventPtr`: An object encapsulating information about the help-request event.

<a id="Discussion"></a>

## Discussion

[NSWindow](../nswindow.md) invokes this method automatically when the user clicks for help and help has been registered using [setContextHelp:forObject:](../nshelpmanager/setcontexthelp%28__for_%29.md). Otherwise, `NSWindow` passes the message to the next responder. Subclasses are not required to override this method.

> **Note**

>  Current hardware does not invoke this method and application code should not call it directly. To provide context-sensitive help, use help tags (tooltips). For more information, see [macOS Human Interface Guidelines - Help Tags (Tooltips)](https://developer.apple.com/design/human-interface-guidelines/macos/user-interaction/help/#help-tags).

## See Also

### Related Documentation

- [showContextHelp:](showcontexthelp%28__%29.md): Implemented by subclasses to invoke the help system, displaying information relevant to the receiver and its current state.

### Responding to Other Kinds of Events

- [cursorUpdate:](cursorupdate%28with_%29.md): Informs the receiver that the mouse cursor has moved into a cursor rectangle.
- [flagsChanged:](flagschanged%28with_%29.md): Informs the receiver that the user has pressed or released a modifier key (Shift, Control, and so on).
- [tabletPoint:](tabletpoint%28with_%29.md): Informs the receiver that a tablet-point event has occurred.
- [tabletProximity:](tabletproximity%28with_%29.md): Informs the receiver that a tablet-proximity event has occurred.
- [scrollWheel:](scrollwheel%28with_%29.md): Informs the receiver that the mouse’s scroll wheel has moved.
- [quickLookWithEvent:](quicklook%28with_%29.md): Performs a Quick Look on the content at the location specified by the supplied event.
- [changeModeWithEvent:](changemode%28with_%29.md): Informs the responder that performed a double-tap on the side of an Apple Pencil.

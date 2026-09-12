> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/modalwindow](https://developer.apple.com/documentation/appkit/nsapplication/modalwindow)

# modalWindow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The modal window displayed by the app.

## Declaration

```swift
var modalWindow: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the current standalone modal window or `nil` if no modal window is being displayed. This property does not contain sheets that are attached to other windows. To retrieve a sheet, use the [attachedSheet](../nswindow/attachedsheet.md) method of [NSWindow](../nswindow.md).

## See Also

### Running a Modal Window

- [runModal(for:)](runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal()](stopmodal%28%29.md): Stops a modal event loop.
- [stopModal(withCode:)](stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [abortModal()](abortmodal%28%29.md): Aborts the event loop started by [runModal(for:)](runmodal%28for_%29.md) or [runModalSession(\_:)](runmodalsession%28__%29.md).
- [beginModalSession(for:)](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession(\_:)](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](beginmodalsession%28for_%29.md).
- [NSApplication.ModalResponse](modalresponse.md): A set of button return values for modal dialogs.
- [NSApplication.ModalSession](modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSession(for:)](beginmodalsession%28for_%29.md) and [endModalSession(\_:)](endmodalsession%28__%29.md) messages.

# modalWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The modal window displayed by the app.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSWindow * modalWindow;
```

<a id="Discussion"></a>

## Discussion

This property contains the current standalone modal window or `nil` if no modal window is being displayed. This property does not contain sheets that are attached to other windows. To retrieve a sheet, use the [attachedSheet](../nswindow/attachedsheet.md) method of [NSWindow](../nswindow.md).

## See Also

### Running a Modal Window

- [runModalForWindow:](runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal](stopmodal%28%29.md): Stops a modal event loop.
- [stopModalWithCode:](stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [abortModal](abortmodal%28%29.md): Aborts the event loop started by [runModalForWindow:](runmodal%28for_%29.md) or [runModalSession:](runmodalsession%28__%29.md).
- [beginModalSessionForWindow:](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession:](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](beginmodalsession%28for_%29.md).
- [NSModalResponse](modalresponse.md): A set of button return values for modal dialogs.
- [NSModalSession](modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSessionForWindow:](beginmodalsession%28for_%29.md) and [endModalSession:](endmodalsession%28__%29.md) messages.
- [NSModalPanelRunLoopMode](../nsmodalpanelrunloopmode.md): The mode set when waiting for input from a modal panel, such as a save or open panel.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmodalpanelrunloopmode](https://developer.apple.com/documentation/appkit/nsmodalpanelrunloopmode)

# NSModalPanelRunLoopMode

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The mode set when waiting for input from a modal panel, such as a save or open panel.

## Declaration

```objectivec
extern NSRunLoopMode NSModalPanelRunLoopMode;
```

## See Also

### Running a Modal Window

- [runModalForWindow:](nsapplication/runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal](nsapplication/stopmodal%28%29.md): Stops a modal event loop.
- [stopModalWithCode:](nsapplication/stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [abortModal](nsapplication/abortmodal%28%29.md): Aborts the event loop started by [runModalForWindow:](nsapplication/runmodal%28for_%29.md) or [runModalSession:](nsapplication/runmodalsession%28__%29.md).
- [beginModalSessionForWindow:](nsapplication/beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession:](nsapplication/runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](nsapplication/beginmodalsession%28for_%29.md).
- [modalWindow](nsapplication/modalwindow.md): The modal window displayed by the app.
- [NSModalResponse](nsapplication/modalresponse.md): A set of button return values for modal dialogs.
- [NSModalSession](nsapplication/modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSessionForWindow:](nsapplication/beginmodalsession%28for_%29.md) and [endModalSession:](nsapplication/endmodalsession%28__%29.md) messages.

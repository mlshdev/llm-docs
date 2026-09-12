> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/abortmodal()](https://developer.apple.com/documentation/appkit/nsapplication/abortmodal())

# abortModal() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Aborts the event loop started by [runModal(for:)](runmodal%28for_%29.md) or [runModalSession(\_:)](runmodalsession%28__%29.md).

## Declaration

```swift
func abortModal()
```

<a id="Discussion"></a>

## Discussion

When stopped with this method, [runModal(for:)](runmodal%28for_%29.md) and [runModalSession(\_:)](runmodalsession%28__%29.md) return `NSModalResponseAbort`.

[abortModal()](abortmodal%28%29.md) must be used instead of [stopModal()](stopmodal%28%29.md) or [stopModal(withCode:)](stopmodal%28withcode_%29.md) when you need to stop a modal event loop from anywhere other than a callout from that event loop. In other words, if you want to stop the loop in response to a user’s actions within the modal window, use [stopModal()](stopmodal%28%29.md); otherwise, use [abortModal()](abortmodal%28%29.md). For example, use [abortModal()](abortmodal%28%29.md) when running in a different thread from AppKit’s main thread or when responding to an `NSTimer` that you have added to the `NSModalPanelRunLoopMode` mode of the default `NSRunLoop`.

## See Also

### Related Documentation

- [endModalSession(\_:)](endmodalsession%28__%29.md): Finishes a modal session.

### Running a Modal Window

- [runModal(for:)](runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal()](stopmodal%28%29.md): Stops a modal event loop.
- [stopModal(withCode:)](stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [beginModalSession(for:)](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession(\_:)](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](beginmodalsession%28for_%29.md).
- [modalWindow](modalwindow.md): The modal window displayed by the app.
- [NSApplication.ModalResponse](modalresponse.md): A set of button return values for modal dialogs.
- [NSApplication.ModalSession](modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSession(for:)](beginmodalsession%28for_%29.md) and [endModalSession(\_:)](endmodalsession%28__%29.md) messages.

# abortModal (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Aborts the event loop started by [runModalForWindow:](runmodal%28for_%29.md) or [runModalSession:](runmodalsession%28__%29.md).

## Declaration

```objectivec
- (void) abortModal;
```

<a id="Discussion"></a>

## Discussion

When stopped with this method, [runModalForWindow:](runmodal%28for_%29.md) and [runModalSession:](runmodalsession%28__%29.md) return `NSModalResponseAbort`.

[abortModal](abortmodal%28%29.md) must be used instead of [stopModal](stopmodal%28%29.md) or [stopModalWithCode:](stopmodal%28withcode_%29.md) when you need to stop a modal event loop from anywhere other than a callout from that event loop. In other words, if you want to stop the loop in response to a user’s actions within the modal window, use [stopModal](stopmodal%28%29.md); otherwise, use [abortModal](abortmodal%28%29.md). For example, use [abortModal](abortmodal%28%29.md) when running in a different thread from AppKit’s main thread or when responding to an `NSTimer` that you have added to the `NSModalPanelRunLoopMode` mode of the default `NSRunLoop`.

## See Also

### Related Documentation

- [endModalSession:](endmodalsession%28__%29.md): Finishes a modal session.

### Running a Modal Window

- [runModalForWindow:](runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal](stopmodal%28%29.md): Stops a modal event loop.
- [stopModalWithCode:](stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [beginModalSessionForWindow:](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession:](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](beginmodalsession%28for_%29.md).
- [modalWindow](modalwindow.md): The modal window displayed by the app.
- [NSModalResponse](modalresponse.md): A set of button return values for modal dialogs.
- [NSModalSession](modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSessionForWindow:](beginmodalsession%28for_%29.md) and [endModalSession:](endmodalsession%28__%29.md) messages.
- [NSModalPanelRunLoopMode](../nsmodalpanelrunloopmode.md): The mode set when waiting for input from a modal panel, such as a save or open panel.

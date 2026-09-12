> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/stopmodal(withcode:)](https://developer.apple.com/documentation/appkit/nsapplication/stopmodal(withcode:))

# stopModal(withCode:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops a modal event loop, allowing you to return a custom result code.

## Declaration

```swift
func stopModal(withCode returnCode: NSApplication.ModalResponse)
```

## Parameters

- `returnCode`: The result code you want returned from the [runModal(for:)](runmodal%28for_%29.md) or [runModalSession(\_:)](runmodalsession%28__%29.md) method. The meaning of this result code is up to you.

<a id="Discussion"></a>

## Discussion

This method should always be paired with a previous invocation of [runModal(for:)](runmodal%28for_%29.md) or [beginModalSession(for:)](beginmodalsession%28for_%29.md). When [runModal(for:)](runmodal%28for_%29.md) is stopped with this method, it returns the given `returnCode`. In macOS 10.9 and later, you can use this method to stop a [runModal(for:)](runmodal%28for_%29.md) loop outside of an event callback, such as from within a method repeatedly invoked by an [Timer](https://developer.apple.com/documentation/foundation/timer) object or a method running in a different thread.

## See Also

### Running a Modal Window

- [runModal(for:)](runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal()](stopmodal%28%29.md): Stops a modal event loop.
- [abortModal()](abortmodal%28%29.md): Aborts the event loop started by [runModal(for:)](runmodal%28for_%29.md) or [runModalSession(\_:)](runmodalsession%28__%29.md).
- [beginModalSession(for:)](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession(\_:)](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](beginmodalsession%28for_%29.md).
- [modalWindow](modalwindow.md): The modal window displayed by the app.
- [NSApplication.ModalResponse](modalresponse.md): A set of button return values for modal dialogs.
- [NSApplication.ModalSession](modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSession(for:)](beginmodalsession%28for_%29.md) and [endModalSession(\_:)](endmodalsession%28__%29.md) messages.

# stopModalWithCode: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops a modal event loop, allowing you to return a custom result code.

## Declaration

```objectivec
- (void) stopModalWithCode:(NSModalResponse) returnCode;
```

## Parameters

- `returnCode`: The result code you want returned from the [runModalForWindow:](runmodal%28for_%29.md) or [runModalSession:](runmodalsession%28__%29.md) method. The meaning of this result code is up to you.

<a id="Discussion"></a>

## Discussion

This method should always be paired with a previous invocation of [runModalForWindow:](runmodal%28for_%29.md) or [beginModalSessionForWindow:](beginmodalsession%28for_%29.md). When [runModalForWindow:](runmodal%28for_%29.md) is stopped with this method, it returns the given `returnCode`. In macOS 10.9 and later, you can use this method to stop a [runModalForWindow:](runmodal%28for_%29.md) loop outside of an event callback, such as from within a method repeatedly invoked by an [NSTimer](https://developer.apple.com/documentation/foundation/timer) object or a method running in a different thread.

## See Also

### Running a Modal Window

- [runModalForWindow:](runmodal%28for_%29.md): Starts a modal event loop for the specified window.
- [stopModal](stopmodal%28%29.md): Stops a modal event loop.
- [abortModal](abortmodal%28%29.md): Aborts the event loop started by [runModalForWindow:](runmodal%28for_%29.md) or [runModalSession:](runmodalsession%28__%29.md).
- [beginModalSessionForWindow:](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession:](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](beginmodalsession%28for_%29.md).
- [modalWindow](modalwindow.md): The modal window displayed by the app.
- [NSModalResponse](modalresponse.md): A set of button return values for modal dialogs.
- [NSModalSession](modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSessionForWindow:](beginmodalsession%28for_%29.md) and [endModalSession:](endmodalsession%28__%29.md) messages.
- [NSModalPanelRunLoopMode](../nsmodalpanelrunloopmode.md): The mode set when waiting for input from a modal panel, such as a save or open panel.

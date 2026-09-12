> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/runmodal(for:)](https://developer.apple.com/documentation/appkit/nsapplication/runmodal(for:))

# runModal(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts a modal event loop for the specified window.

## Declaration

```swift
func runModal(for window: NSWindow) -> NSApplication.ModalResponse
```

## Parameters

- `window`: The window to be displayed modally. If it is not already visible, the window is centered on the screen using the value in its [center()](../nswindow/center%28%29.md) method and made visible and key. If it is already visible, it is simply made key.

<a id="return-value"></a>

## Return Value

An integer indicating the reason that this method returned. See [NSApplication.ModalResponse](modalresponse.md) possible return values.

<a id="Discussion"></a>

## Discussion

This method runs a modal event loop for the specified window synchronously. It displays the specified window, makes it key, starts the run loop, and processes events for that window. (You do not need to show the window yourself.) While the app is in that loop, it does not respond to any other events (including mouse, keyboard, or window-close events) unless they are associated with the window. It also does not perform any tasks (such as firing timers) that are not associated with the modal run loop. In other words, this method consumes only enough CPU time to process events and dispatch them to the action methods associated with the modal window.

You can exit the modal loop by calling the [stopModal()](stopmodal%28%29.md), [stopModal(withCode:)](stopmodal%28withcode_%29.md), or [abortModal()](abortmodal%28%29.md) methods from your modal window code. If you use the [stopModal(withCode:)](stopmodal%28withcode_%29.md) method to stop the modal event loop, this method returns the argument passed to [stopModal(withCode:)](stopmodal%28withcode_%29.md). If you use [stopModal()](stopmodal%28%29.md) instead, this method returns the constant [stop](modalresponse/stop.md). If you use [abortModal()](abortmodal%28%29.md), this method returns the constant [abort](modalresponse/abort.md).

## See Also

### Related Documentation

- [run()](run%28%29.md): Starts the main event loop.

### Running a Modal Window

- [stopModal()](stopmodal%28%29.md): Stops a modal event loop.
- [stopModal(withCode:)](stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [abortModal()](abortmodal%28%29.md): Aborts the event loop started by [runModal(for:)](runmodal%28for_%29.md) or [runModalSession(\_:)](runmodalsession%28__%29.md).
- [beginModalSession(for:)](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession(\_:)](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](beginmodalsession%28for_%29.md).
- [modalWindow](modalwindow.md): The modal window displayed by the app.
- [NSApplication.ModalResponse](modalresponse.md): A set of button return values for modal dialogs.
- [NSApplication.ModalSession](modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSession(for:)](beginmodalsession%28for_%29.md) and [endModalSession(\_:)](endmodalsession%28__%29.md) messages.

# runModalForWindow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts a modal event loop for the specified window.

## Declaration

```objectivec
- (NSModalResponse) runModalForWindow:(NSWindow *) window;
```

## Parameters

- `window`: The window to be displayed modally. If it is not already visible, the window is centered on the screen using the value in its [center](../nswindow/center%28%29.md) method and made visible and key. If it is already visible, it is simply made key.

<a id="return-value"></a>

## Return Value

An integer indicating the reason that this method returned. See [NSModalResponse](modalresponse.md) possible return values.

<a id="Discussion"></a>

## Discussion

This method runs a modal event loop for the specified window synchronously. It displays the specified window, makes it key, starts the run loop, and processes events for that window. (You do not need to show the window yourself.) While the app is in that loop, it does not respond to any other events (including mouse, keyboard, or window-close events) unless they are associated with the window. It also does not perform any tasks (such as firing timers) that are not associated with the modal run loop. In other words, this method consumes only enough CPU time to process events and dispatch them to the action methods associated with the modal window.

You can exit the modal loop by calling the [stopModal](stopmodal%28%29.md), [stopModalWithCode:](stopmodal%28withcode_%29.md), or [abortModal](abortmodal%28%29.md) methods from your modal window code. If you use the [stopModalWithCode:](stopmodal%28withcode_%29.md) method to stop the modal event loop, this method returns the argument passed to [stopModalWithCode:](stopmodal%28withcode_%29.md). If you use [stopModal](stopmodal%28%29.md) instead, this method returns the constant [NSModalResponseStop](modalresponse/stop.md). If you use [abortModal](abortmodal%28%29.md), this method returns the constant [NSModalResponseAbort](modalresponse/abort.md).

## See Also

### Related Documentation

- [run](run%28%29.md): Starts the main event loop.

### Running a Modal Window

- [stopModal](stopmodal%28%29.md): Stops a modal event loop.
- [stopModalWithCode:](stopmodal%28withcode_%29.md): Stops a modal event loop, allowing you to return a custom result code.
- [abortModal](abortmodal%28%29.md): Aborts the event loop started by [runModalForWindow:](runmodal%28for_%29.md) or [runModalSession:](runmodalsession%28__%29.md).
- [beginModalSessionForWindow:](beginmodalsession%28for_%29.md): Sets up a modal session with the given window and returns a pointer to the `NSModalSession` structure representing the session.
- [runModalSession:](runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](beginmodalsession%28for_%29.md).
- [modalWindow](modalwindow.md): The modal window displayed by the app.
- [NSModalResponse](modalresponse.md): A set of button return values for modal dialogs.
- [NSModalSession](modalsession.md): Variables of type `NSModalSession` point to information used by the system between `NSApplication`’s [beginModalSessionForWindow:](beginmodalsession%28for_%29.md) and [endModalSession:](endmodalsession%28__%29.md) messages.
- [NSModalPanelRunLoopMode](../nsmodalpanelrunloopmode.md): The mode set when waiting for input from a modal panel, such as a save or open panel.

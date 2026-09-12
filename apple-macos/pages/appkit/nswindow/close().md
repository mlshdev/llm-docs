> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/close()](https://developer.apple.com/documentation/appkit/nswindow/close())

# close() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the window from the screen.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

If the window is set to be released when closed, a `release` message is sent to the object after the current event is completed. For an `NSWindow` object, the default is to be released on closing, while for an [NSPanel](../nspanel.md) object, the default is not to be released. You can use the [isReleasedWhenClosed](isreleasedwhenclosed.md) property to change the default behavior.

A window doesn’t have to be visible to receive the close message. For example, when the application terminates, it sends the close message to all windows in its window list, even those that are not currently visible.

The close method posts a [willCloseNotification](willclosenotification.md) notification to the default notification center.

The close method differs in two important ways from the [performClose(\_:)](performclose%28__%29.md) method:

- It does not attempt to send a [windowShouldClose(\_:)](../nswindowdelegate/windowshouldclose%28__%29.md) message to the window or its delegate.
- It does not simulate the user clicking the close button by momentarily highlighting the button.

Use [performClose(\_:)](performclose%28__%29.md) if you need these features.

## See Also

### Related Documentation

- [orderOut(\_:)](orderout%28__%29.md): Removes the window from the screen list, which hides the window.

### Closing Windows

- [performClose(\_:)](performclose%28__%29.md): Simulates the user clicking the close button by momentarily highlighting the button and then closing the window.
- [isReleasedWhenClosed](isreleasedwhenclosed.md): A Boolean value that indicates whether the window is released when it receives the `close` message.

# close (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the window from the screen.

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

If the window is set to be released when closed, a `release` message is sent to the object after the current event is completed. For an `NSWindow` object, the default is to be released on closing, while for an [NSPanel](../nspanel.md) object, the default is not to be released. You can use the [releasedWhenClosed](isreleasedwhenclosed.md) property to change the default behavior.

A window doesn’t have to be visible to receive the close message. For example, when the application terminates, it sends the close message to all windows in its window list, even those that are not currently visible.

The close method posts a [NSWindowWillCloseNotification](willclosenotification.md) notification to the default notification center.

The close method differs in two important ways from the [performClose:](performclose%28__%29.md) method:

- It does not attempt to send a [windowShouldClose:](../nswindowdelegate/windowshouldclose%28__%29.md) message to the window or its delegate.
- It does not simulate the user clicking the close button by momentarily highlighting the button.

Use [performClose:](performclose%28__%29.md) if you need these features.

## See Also

### Related Documentation

- [orderOut:](orderout%28__%29.md): Removes the window from the screen list, which hides the window.

### Closing Windows

- [performClose:](performclose%28__%29.md): Simulates the user clicking the close button by momentarily highlighting the button and then closing the window.
- [releasedWhenClosed](isreleasedwhenclosed.md): A Boolean value that indicates whether the window is released when it receives the `close` message.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/update()](https://developer.apple.com/documentation/appkit/nswindow/update())

# update() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Updates the window.

## Declaration

```swift
func update()
```

<a id="Discussion"></a>

## Discussion

The `NSWindow` implementation of this method does nothing more than post an [didUpdateNotification](didupdatenotification.md) notification to the default notification center. A subclass can override this method to perform specialized operations, but it should send an update message to `super` just before returning. For example, the `NSMenu` class implements this method to disable and enable menu commands.

An `NSWindow` object is automatically sent an `update` message on every pass through the event loop and before it’s displayed onscreen. You can manually cause an `update` message to be sent to all visible `NSWindow` objects through the `NSApplication` [updateWindows()](../nsapplication/updatewindows%28%29.md) method.

## See Also

### Related Documentation

- [setWindowsNeedUpdate(\_:)](../nsapplication/setwindowsneedupdate%28__%29.md): Sets whether the receiver’s windows need updating when the receiver has finished processing the current event.

### Updating Windows

- [disableScreenUpdatesUntilFlush()](disablescreenupdatesuntilflush%28%29.md): Deprecated. Disables the window’s screen updates until the window is flushed.

# update (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Updates the window.

## Declaration

```objectivec
- (void) update;
```

<a id="Discussion"></a>

## Discussion

The `NSWindow` implementation of this method does nothing more than post an [NSWindowDidUpdateNotification](didupdatenotification.md) notification to the default notification center. A subclass can override this method to perform specialized operations, but it should send an update message to `super` just before returning. For example, the `NSMenu` class implements this method to disable and enable menu commands.

An `NSWindow` object is automatically sent an `update` message on every pass through the event loop and before it’s displayed onscreen. You can manually cause an `update` message to be sent to all visible `NSWindow` objects through the `NSApplication` [updateWindows](../nsapplication/updatewindows%28%29.md) method.

## See Also

### Related Documentation

- [setWindowsNeedUpdate:](../nsapplication/setwindowsneedupdate%28__%29.md): Sets whether the receiver’s windows need updating when the receiver has finished processing the current event.

### Updating Windows

- [disableScreenUpdatesUntilFlush](disablescreenupdatesuntilflush%28%29.md): Deprecated. Disables the window’s screen updates until the window is flushed.

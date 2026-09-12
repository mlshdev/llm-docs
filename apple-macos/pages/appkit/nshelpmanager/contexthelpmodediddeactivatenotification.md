> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/contexthelpmodediddeactivatenotification](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelpmodediddeactivatenotification)

# contextHelpModeDidDeactivateNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when the application exits context-sensitive help mode. This happens when the user clicks the mouse button while the cursor is anywhere on the screen after displaying a context-sensitive help topic.

## Declaration

```swift
class let contextHelpModeDidDeactivateNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the help manager. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSHelpManager.ContextHelpModeDidDeactivateMessage](contexthelpmodediddeactivatemessage.md).

## See Also

### Notifications

- [contextHelpModeDidActivateNotification](contexthelpmodedidactivatenotification.md): Posted when the application enters context-sensitive help mode. This typically happens when the user holds down the Help key.

# NSContextHelpModeDidDeactivateNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when the application exits context-sensitive help mode. This happens when the user clicks the mouse button while the cursor is anywhere on the screen after displaying a context-sensitive help topic.

## Declaration

```objectivec
extern NSNotificationName NSContextHelpModeDidDeactivateNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the help manager. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSHelpManager.ContextHelpModeDidDeactivateMessage](contexthelpmodediddeactivatemessage.md).

## See Also

### Notifications

- [NSContextHelpModeDidActivateNotification](contexthelpmodedidactivatenotification.md): Posted when the application enters context-sensitive help mode. This typically happens when the user holds down the Help key.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/contexthelpmodedidactivatenotification](https://developer.apple.com/documentation/appkit/nshelpmanager/contexthelpmodedidactivatenotification)

# contextHelpModeDidActivateNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when the application enters context-sensitive help mode. This typically happens when the user holds down the Help key.

## Declaration

```swift
class let contextHelpModeDidActivateNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the help manager. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSHelpManager.ContextHelpModeDidActivateMessage](contexthelpmodedidactivatemessage.md).

## See Also

### Notifications

- [contextHelpModeDidDeactivateNotification](contexthelpmodediddeactivatenotification.md): Posted when the application exits context-sensitive help mode. This happens when the user clicks the mouse button while the cursor is anywhere on the screen after displaying a context-sensitive help topic.

# NSContextHelpModeDidActivateNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when the application enters context-sensitive help mode. This typically happens when the user holds down the Help key.

## Declaration

```objectivec
extern NSNotificationName NSContextHelpModeDidActivateNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the help manager. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSHelpManager.ContextHelpModeDidActivateMessage](contexthelpmodedidactivatemessage.md).

## See Also

### Notifications

- [NSContextHelpModeDidDeactivateNotification](contexthelpmodediddeactivatenotification.md): Posted when the application exits context-sensitive help mode. This happens when the user clicks the mouse button while the cursor is anywhere on the screen after displaying a context-sensitive help topic.

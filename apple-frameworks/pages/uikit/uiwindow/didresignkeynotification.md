> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/didresignkeynotification](https://developer.apple.com/documentation/uikit/uiwindow/didresignkeynotification)

# didResignKeyNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts whenever a window resigns its status as main window.

## Declaration

```swift
nonisolated class let didResignKeyNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the window that resigned its main window status. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the main actor. In iOS 15 and later, the system posts this notification when the window is no longer the key window of its scene. In iOS 14 and earlier, the system posts this notification when the window is no longer the key window of the app.

## See Also

### Responding to window-related notifications

- [didBecomeVisibleNotification](didbecomevisiblenotification.md): A notification that posts when a window becomes visible.
- [didBecomeHiddenNotification](didbecomehiddennotification.md): A notification that posts when a window becomes hidden.
- [didBecomeKeyNotification](didbecomekeynotification.md): A notification that posts whenever a window becomes the key window.

# UIWindowDidResignKeyNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts whenever a window resigns its status as main window.

## Declaration

```objectivec
extern NSNotificationName const UIWindowDidResignKeyNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the window that resigned its main window status. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the main actor. In iOS 15 and later, the system posts this notification when the window is no longer the key window of its scene. In iOS 14 and earlier, the system posts this notification when the window is no longer the key window of the app.

## See Also

### Responding to window-related notifications

- [UIWindowDidBecomeVisibleNotification](didbecomevisiblenotification.md): A notification that posts when a window becomes visible.
- [UIWindowDidBecomeHiddenNotification](didbecomehiddennotification.md): A notification that posts when a window becomes hidden.
- [UIWindowDidBecomeKeyNotification](didbecomekeynotification.md): A notification that posts whenever a window becomes the key window.

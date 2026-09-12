> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/didbecomekeynotification](https://developer.apple.com/documentation/uikit/uiwindow/didbecomekeynotification)

# didBecomeKeyNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts whenever a window becomes the key window.

## Declaration

```swift
nonisolated class let didBecomeKeyNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the window that became key. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the main actor. In iOS 15 and later, the system posts this notification when the window becomes the key window of its scene. In iOS 14 and earlier, the system posts this notification when the window becomes the key window of the app.

## See Also

### Responding to window-related notifications

- [didBecomeVisibleNotification](didbecomevisiblenotification.md): A notification that posts when a window becomes visible.
- [didBecomeHiddenNotification](didbecomehiddennotification.md): A notification that posts when a window becomes hidden.
- [didResignKeyNotification](didresignkeynotification.md): A notification that posts whenever a window resigns its status as main window.

# UIWindowDidBecomeKeyNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts whenever a window becomes the key window.

## Declaration

```objectivec
extern NSNotificationName const UIWindowDidBecomeKeyNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the window that became key. This notification doesn’t contain a `userInfo` dictionary.

The system posts this notification on the main actor. In iOS 15 and later, the system posts this notification when the window becomes the key window of its scene. In iOS 14 and earlier, the system posts this notification when the window becomes the key window of the app.

## See Also

### Responding to window-related notifications

- [UIWindowDidBecomeVisibleNotification](didbecomevisiblenotification.md): A notification that posts when a window becomes visible.
- [UIWindowDidBecomeHiddenNotification](didbecomehiddennotification.md): A notification that posts when a window becomes hidden.
- [UIWindowDidResignKeyNotification](didresignkeynotification.md): A notification that posts whenever a window resigns its status as main window.

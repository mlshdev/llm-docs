> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/didbecomehiddennotification](https://developer.apple.com/documentation/uikit/uiwindow/didbecomehiddennotification)

# didBecomeHiddenNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts when a window becomes hidden.

## Declaration

```swift
nonisolated class let didBecomeHiddenNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the hidden window. This notification doesn’t contain a `userInfo` dictionary.

Switching between apps doesn’t generate visibility-related notifications for windows. Window visibility changes reflect changes to the window’s [isHidden](../uiview/ishidden.md) property and reflect only the window’s visibility within the app.

The system posts this notification on the main actor.

## See Also

### Responding to window-related notifications

- [didBecomeVisibleNotification](didbecomevisiblenotification.md): A notification that posts when a window becomes visible.
- [didBecomeKeyNotification](didbecomekeynotification.md): A notification that posts whenever a window becomes the key window.
- [didResignKeyNotification](didresignkeynotification.md): A notification that posts whenever a window resigns its status as main window.

# UIWindowDidBecomeHiddenNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts when a window becomes hidden.

## Declaration

```objectivec
extern NSNotificationName const UIWindowDidBecomeHiddenNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the hidden window. This notification doesn’t contain a `userInfo` dictionary.

Switching between apps doesn’t generate visibility-related notifications for windows. Window visibility changes reflect changes to the window’s [hidden](../uiview/ishidden.md) property and reflect only the window’s visibility within the app.

The system posts this notification on the main actor.

## See Also

### Responding to window-related notifications

- [UIWindowDidBecomeVisibleNotification](didbecomevisiblenotification.md): A notification that posts when a window becomes visible.
- [UIWindowDidBecomeKeyNotification](didbecomekeynotification.md): A notification that posts whenever a window becomes the key window.
- [UIWindowDidResignKeyNotification](didresignkeynotification.md): A notification that posts whenever a window resigns its status as main window.

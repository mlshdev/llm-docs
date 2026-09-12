> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/didbecomevisiblenotification](https://developer.apple.com/documentation/uikit/uiwindow/didbecomevisiblenotification)

# didBecomeVisibleNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts when a window becomes visible.

## Declaration

```swift
nonisolated class let didBecomeVisibleNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the visible window. This notification doesn’t contain a `userInfo` dictionary.

Switching between apps doesn’t generate visibility-related notifications for windows. Window visibility changes reflect changes to the window’s [isHidden](../uiview/ishidden.md) property and reflect only the window’s visibility within the app.

The system posts this notification on the main actor.

## See Also

### Responding to window-related notifications

- [didBecomeHiddenNotification](didbecomehiddennotification.md): A notification that posts when a window becomes hidden.
- [didBecomeKeyNotification](didbecomekeynotification.md): A notification that posts whenever a window becomes the key window.
- [didResignKeyNotification](didresignkeynotification.md): A notification that posts whenever a window resigns its status as main window.

# UIWindowDidBecomeVisibleNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts when a window becomes visible.

## Declaration

```objectivec
extern NSNotificationName const UIWindowDidBecomeVisibleNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the visible window. This notification doesn’t contain a `userInfo` dictionary.

Switching between apps doesn’t generate visibility-related notifications for windows. Window visibility changes reflect changes to the window’s [hidden](../uiview/ishidden.md) property and reflect only the window’s visibility within the app.

The system posts this notification on the main actor.

## See Also

### Responding to window-related notifications

- [UIWindowDidBecomeHiddenNotification](didbecomehiddennotification.md): A notification that posts when a window becomes hidden.
- [UIWindowDidBecomeKeyNotification](didbecomekeynotification.md): A notification that posts whenever a window becomes the key window.
- [UIWindowDidResignKeyNotification](didresignkeynotification.md): A notification that posts whenever a window resigns its status as main window.

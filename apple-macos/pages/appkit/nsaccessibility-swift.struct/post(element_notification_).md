> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/post(element:notification:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post(element:notification:))

# post(element:notification:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Sends a notification to any observing assistive apps.

## Declaration

```swift
static func post(element: Any, notification: NSAccessibility.Notification)
```

<a id="Discussion"></a>

## Discussion

Sends `notification` to any assistive applications that register to receive the notification from the user interface object `element` in your app. Accessibility notifications require special handling, so they can’t post using [NotificationCenter](https://developer.apple.com/documentation/foundation/notificationcenter).

## See Also

### Posting Notifications

- [post(element:notification:userInfo:)](post%28element_notification_userinfo_%29.md): Sends a notification and an optional user info dictionary to any observing assistive apps.

# NSAccessibilityPostNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Sends a notification to any observing assistive apps.

## Declaration

```objectivec
extern void NSAccessibilityPostNotification(id element, NSAccessibilityNotificationName notification);
```

<a id="Discussion"></a>

## Discussion

Sends `notification` to any assistive applications that register to receive the notification from the user interface object `element` in your app. Accessibility notifications require special handling, so they can’t post using [NSNotificationCenter](https://developer.apple.com/documentation/foundation/notificationcenter).

## See Also

### Posting Notifications

- [NSAccessibilityPostNotificationWithUserInfo](post%28element_notification_userinfo_%29.md): Sends a notification and an optional user info dictionary to any observing assistive apps.

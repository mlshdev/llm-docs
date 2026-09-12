> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/post(element:notification:userinfo:)](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/post(element:notification:userinfo:))

# post(element:notification:userInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Sends a notification and an optional user info dictionary to any observing assistive apps.

## Declaration

```swift
static func post(element: Any, notification: NSAccessibility.Notification, userInfo: [NSAccessibility.NotificationUserInfoKey : Any]?)
```

<a id="Discussion"></a>

## Discussion

Sends `notification` and `userInfo` to any assistive apps that register to receive the notification from the UI object `element` in your app. The system restricts the `userInfo` dictionary values to the same values as it restricts the accessibility attributes. The `userInfo` dictionary can also be `nil` (most accessibility notifications don’t require it).

## See Also

### Posting Notifications

- [post(element:notification:)](post%28element_notification_%29.md): Sends a notification to any observing assistive apps.

# NSAccessibilityPostNotificationWithUserInfo (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.7+

Sends a notification and an optional user info dictionary to any observing assistive apps.

## Declaration

```objectivec
extern void NSAccessibilityPostNotificationWithUserInfo(id element, NSAccessibilityNotificationName notification, NSDictionary<NSString *,id> *userInfo);
```

<a id="Discussion"></a>

## Discussion

Sends `notification` and `userInfo` to any assistive apps that register to receive the notification from the UI object `element` in your app. The system restricts the `userInfo` dictionary values to the same values as it restricts the accessibility attributes. The `userInfo` dictionary can also be `nil` (most accessibility notifications don’t require it).

## See Also

### Posting Notifications

- [NSAccessibilityPostNotification](post%28element_notification_%29.md): Sends a notification to any observing assistive apps.

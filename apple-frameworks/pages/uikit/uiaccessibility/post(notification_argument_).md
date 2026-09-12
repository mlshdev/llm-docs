> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/post(notification:argument:)](https://developer.apple.com/documentation/uikit/uiaccessibility/post(notification:argument:))

# post(notification:argument:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Posts a notification to assistive apps.

## Declaration

```swift
@MainActor static func post(notification: UIAccessibility.Notification, argument: Any?)
```

## Parameters

- `notification`: The notification to post (see “Notifications” in [UIAccessibility](../uiaccessibility-protocol.md) for a list of notifications).
- `argument`: The argument specified by the notification. Pass `nil` unless a notification specifies otherwise.

<a id="Discussion"></a>

## Discussion

Your application might need to post accessibility notifications if you have user interface components that change very frequently or that appear and disappear.

## See Also

### Notifications

- [Notification names](../notification-names.md): The names of notifications that the accessibility system generates.
- [Notification dictionary keys](../notification-dictionary-keys.md): Handle notifications with keys in the user info dictionary.

# UIAccessibilityPostNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Posts a notification to assistive apps.

## Declaration

```objectivec
extern void UIAccessibilityPostNotification(UIAccessibilityNotifications notification, id argument);
```

## Parameters

- `notification`: The notification to post (see “Notifications” in [UIAccessibility](../uiaccessibility-protocol.md) for a list of notifications).
- `argument`: The argument specified by the notification. Pass `nil` unless a notification specifies otherwise.

<a id="Discussion"></a>

## Discussion

Your application might need to post accessibility notifications if you have user interface components that change very frequently or that appear and disappear.

## See Also

### Notifications

- [Notification names](../notification-names.md): The names of notifications that the accessibility system generates.
- [Notification dictionary keys](../notification-dictionary-keys.md): Handle notifications with keys in the user info dictionary.

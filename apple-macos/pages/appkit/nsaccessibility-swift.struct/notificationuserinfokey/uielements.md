> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey/uielements](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey/uielements)

# uiElements (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

An array of elements for the notification.

## Declaration

```swift
static let uiElements: NSAccessibility.NotificationUserInfoKey
```

<a id="Discussion"></a>

## Discussion

The value is an array of accessibility elements for the notification. For example, in the [layoutChanged](../notification/layoutchanged.md) notification, use this key to include an array of elements that you add or change.

## See Also

### Constants

- [announcement](announcement.md): The announcement as a localized string.
- [priority](priority.md): A priority level that can help an assistive app determine how to handle the corresponding notification.
- [NSAccessibilityPriorityLevel](../../nsaccessibilityprioritylevel.md): A data type for notification priority levels.

# NSAccessibilityUIElementsKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

An array of elements for the notification.

## Declaration

```objectivec
extern NSAccessibilityNotificationUserInfoKey const NSAccessibilityUIElementsKey;
```

<a id="Discussion"></a>

## Discussion

The value is an array of accessibility elements for the notification. For example, in the [NSAccessibilityLayoutChangedNotification](../notification/layoutchanged.md) notification, use this key to include an array of elements that you add or change.

## See Also

### Constants

- [NSAccessibilityAnnouncementKey](announcement.md): The announcement as a localized string.
- [NSAccessibilityPriorityKey](priority.md): A priority level that can help an assistive app determine how to handle the corresponding notification.
- [NSAccessibilityPriorityLevel](../../nsaccessibilityprioritylevel.md): A data type for notification priority levels.

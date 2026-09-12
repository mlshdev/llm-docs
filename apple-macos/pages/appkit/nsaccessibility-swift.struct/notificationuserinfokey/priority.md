> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey/priority](https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey/priority)

# priority (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

A priority level that can help an assistive app determine how to handle the corresponding notification.

## Declaration

```swift
static let priority: NSAccessibility.NotificationUserInfoKey
```

<a id="Discussion"></a>

## Discussion

An example of using this key is VoiceOver which decides whether to speak an announcement immediately or after the current speech has finished. For a list of possible values, see [NSAccessibilityPriorityLevel](../../nsaccessibilityprioritylevel.md).

## See Also

### Constants

- [announcement](announcement.md): The announcement as a localized string.
- [uiElements](uielements.md): An array of elements for the notification.
- [NSAccessibilityPriorityLevel](../../nsaccessibilityprioritylevel.md): A data type for notification priority levels.

# NSAccessibilityPriorityKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

A priority level that can help an assistive app determine how to handle the corresponding notification.

## Declaration

```objectivec
extern NSAccessibilityNotificationUserInfoKey const NSAccessibilityPriorityKey;
```

<a id="Discussion"></a>

## Discussion

An example of using this key is VoiceOver which decides whether to speak an announcement immediately or after the current speech has finished. For a list of possible values, see [NSAccessibilityPriorityLevel](../../nsaccessibilityprioritylevel.md).

## See Also

### Constants

- [NSAccessibilityAnnouncementKey](announcement.md): The announcement as a localized string.
- [NSAccessibilityUIElementsKey](uielements.md): An array of elements for the notification.
- [NSAccessibilityPriorityLevel](../../nsaccessibilityprioritylevel.md): A data type for notification priority levels.

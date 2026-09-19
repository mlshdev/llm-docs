> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibility-swift.struct/notificationuserinfokey/announcement

# announcement (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The announcement as a localized string.

## Declaration

```swift
static let announcement: NSAccessibility.NotificationUserInfoKey
```

<a id="Discussion"></a>

## Discussion

This key is required for [NSAccessibilityProtocol](../../nsaccessibilityprotocol.md) and should be used in conjunction with [priority](priority.md) to help assistive apps determine the importance of the announcement.

## See Also

### Constants

- [uiElements](uielements.md): An array of elements for the notification.
- [priority](priority.md): A priority level that can help an assistive app determine how to handle the corresponding notification.
- [NSAccessibilityPriorityLevel](../../nsaccessibilityprioritylevel.md): A data type for notification priority levels.

# NSAccessibilityAnnouncementKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

The announcement as a localized string.

## Declaration

```objectivec
extern NSAccessibilityNotificationUserInfoKey const NSAccessibilityAnnouncementKey;
```

<a id="Discussion"></a>

## Discussion

This key is required for [NSAccessibility](../../nsaccessibilityprotocol.md) and should be used in conjunction with [NSAccessibilityPriorityKey](priority.md) to help assistive apps determine the importance of the announcement.

## See Also

### Constants

- [NSAccessibilityUIElementsKey](uielements.md): An array of elements for the notification.
- [NSAccessibilityPriorityKey](priority.md): A priority level that can help an assistive app determine how to handle the corresponding notification.
- [NSAccessibilityPriorityLevel](../../nsaccessibilityprioritylevel.md): A data type for notification priority levels.

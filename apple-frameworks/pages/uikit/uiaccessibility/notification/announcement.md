> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/notification/announcement](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/announcement)

# announcement (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that an app posts when it needs to convey an announcement to the assistive app.

## Declaration

```swift
nonisolated static let announcement: UIAccessibility.Notification
```

<a id="Discussion"></a>

## Discussion

This notification includes a parameter that is an [NSString](../../../foundation/nsstring.md) object that contains the announcement. An assistive app outputs the announcement string in the parameter.

Use this notification to provide accessibility information about events that don’t update the app’s UI, or that update the UI only briefly.

Post this notification using the [post(notification:argument:)](../post%28notification_argument_%29.md) function.

## See Also

### VoiceOver

- [voiceOverStatusDidChangeNotification](../voiceoverstatusdidchangenotification.md): A notification that UIKit posts when VoiceOver starts or stops.
- [announcementDidFinishNotification](../announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.
- [UIAccessibilityVoiceOverStatusChanged](../../uiaccessibilityvoiceoverstatuschanged.md): Deprecated. A notification that UIKit posts when VoiceOver starts or stops.

# UIAccessibilityAnnouncementNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that an app posts when it needs to convey an announcement to the assistive app.

## Declaration

```objectivec
extern const UIAccessibilityNotifications UIAccessibilityAnnouncementNotification;
```

<a id="Discussion"></a>

## Discussion

This notification includes a parameter that is an [NSString](../../../foundation/nsstring.md) object that contains the announcement. An assistive app outputs the announcement string in the parameter.

Use this notification to provide accessibility information about events that don’t update the app’s UI, or that update the UI only briefly.

Post this notification using the [UIAccessibilityPostNotification](../post%28notification_argument_%29.md) function.

## See Also

### VoiceOver

- [UIAccessibilityVoiceOverStatusDidChangeNotification](../voiceoverstatusdidchangenotification.md): A notification that UIKit posts when VoiceOver starts or stops.
- [UIAccessibilityAnnouncementDidFinishNotification](../announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.
- [UIAccessibilityVoiceOverStatusChanged](../../uiaccessibilityvoiceoverstatuschanged.md): Deprecated. A notification that UIKit posts when VoiceOver starts or stops.

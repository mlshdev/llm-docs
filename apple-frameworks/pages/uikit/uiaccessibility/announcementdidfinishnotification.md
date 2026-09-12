> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/announcementdidfinishnotification](https://developer.apple.com/documentation/uikit/uiaccessibility/announcementdidfinishnotification)

# announcementDidFinishNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that UIKit posts when the system finishes reading an announcement.

## Declaration

```swift
nonisolated static let announcementDidFinishNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The parameter is a dictionary with two keys, [announcementStringValueUserInfoKey](announcementstringvalueuserinfokey.md) and [announcementWasSuccessfulUserInfoKey](announcementwassuccessfuluserinfokey.md). Observe this notification using the default notification center.

## See Also

### VoiceOver

- [announcement](notification/announcement.md): A notification that an app posts when it needs to convey an announcement to the assistive app.
- [voiceOverStatusDidChangeNotification](voiceoverstatusdidchangenotification.md): A notification that UIKit posts when VoiceOver starts or stops.
- [UIAccessibilityVoiceOverStatusChanged](../uiaccessibilityvoiceoverstatuschanged.md): Deprecated. A notification that UIKit posts when VoiceOver starts or stops.

# UIAccessibilityAnnouncementDidFinishNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that UIKit posts when the system finishes reading an announcement.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityAnnouncementDidFinishNotification;
```

<a id="Discussion"></a>

## Discussion

The parameter is a dictionary with two keys, [UIAccessibilityAnnouncementKeyStringValue](announcementstringvalueuserinfokey.md) and [UIAccessibilityAnnouncementKeyWasSuccessful](announcementwassuccessfuluserinfokey.md). Observe this notification using the default notification center.

## See Also

### VoiceOver

- [UIAccessibilityAnnouncementNotification](notification/announcement.md): A notification that an app posts when it needs to convey an announcement to the assistive app.
- [UIAccessibilityVoiceOverStatusDidChangeNotification](voiceoverstatusdidchangenotification.md): A notification that UIKit posts when VoiceOver starts or stops.
- [UIAccessibilityVoiceOverStatusChanged](../uiaccessibilityvoiceoverstatuschanged.md): Deprecated. A notification that UIKit posts when VoiceOver starts or stops.

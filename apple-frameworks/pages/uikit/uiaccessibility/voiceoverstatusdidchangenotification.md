> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/voiceoverstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/voiceoverstatusdidchangenotification)

# voiceOverStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A notification that UIKit posts when VoiceOver starts or stops.

## Declaration

```swift
nonisolated static let voiceOverStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Use this notification to customize your app’s UI for VoiceOver users. For example, if you display a UI element that briefly overlays other parts of your UI, you can make the display persistent for VoiceOver users, but allow it to not appear for users who aren’t using VoiceOver. You can also use the [isVoiceOverRunning](isvoiceoverrunning.md) function to determine whether VoiceOver is currently running.

Observe this notification using the default notification center. This notification doesn’t include a parameter.

## See Also

### VoiceOver

- [announcement](notification/announcement.md): A notification that an app posts when it needs to convey an announcement to the assistive app.
- [announcementDidFinishNotification](announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.
- [UIAccessibilityVoiceOverStatusChanged](../uiaccessibilityvoiceoverstatuschanged.md): Deprecated. A notification that UIKit posts when VoiceOver starts or stops.

# UIAccessibilityVoiceOverStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A notification that UIKit posts when VoiceOver starts or stops.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityVoiceOverStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

Use this notification to customize your app’s UI for VoiceOver users. For example, if you display a UI element that briefly overlays other parts of your UI, you can make the display persistent for VoiceOver users, but allow it to not appear for users who aren’t using VoiceOver. You can also use the [UIAccessibilityIsVoiceOverRunning](isvoiceoverrunning.md) function to determine whether VoiceOver is currently running.

Observe this notification using the default notification center. This notification doesn’t include a parameter.

## See Also

### VoiceOver

- [UIAccessibilityAnnouncementNotification](notification/announcement.md): A notification that an app posts when it needs to convey an announcement to the assistive app.
- [UIAccessibilityAnnouncementDidFinishNotification](announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.
- [UIAccessibilityVoiceOverStatusChanged](../uiaccessibilityvoiceoverstatuschanged.md): Deprecated. A notification that UIKit posts when VoiceOver starts or stops.

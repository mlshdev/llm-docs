> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityvoiceoverstatuschanged](https://developer.apple.com/documentation/uikit/uiaccessibilityvoiceoverstatuschanged)

# UIAccessibilityVoiceOverStatusChanged (Swift)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 11.0)

A notification that UIKit posts when VoiceOver starts or stops.

> Use [voiceOverStatusDidChangeNotification](uiaccessibility/voiceoverstatusdidchangenotification.md) instead.

## Declaration

```swift
nonisolated let UIAccessibilityVoiceOverStatusChanged: String
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter.

Use this notification to customize your application’s user interface (UI) for VoiceOver users. For example, if you display a UI element that briefly overlays other parts of your UI, you can make the display persistent for VoiceOver users, but allow it to disappear as designed for users who are not using VoiceOver. You can also use the [isVoiceOverRunning](uiaccessibility/isvoiceoverrunning.md) function to determine whether VoiceOver is currently running.

Observe this notification using the default notification center.

## See Also

### VoiceOver

- [announcement](uiaccessibility/notification/announcement.md): A notification that an app posts when it needs to convey an announcement to the assistive app.
- [voiceOverStatusDidChangeNotification](uiaccessibility/voiceoverstatusdidchangenotification.md): A notification that UIKit posts when VoiceOver starts or stops.
- [announcementDidFinishNotification](uiaccessibility/announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.

# UIAccessibilityVoiceOverStatusChanged (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 11.0) · iPadOS 4.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 11.0)

A notification that UIKit posts when VoiceOver starts or stops.

> Use [UIAccessibilityVoiceOverStatusDidChangeNotification](uiaccessibility/voiceoverstatusdidchangenotification.md) instead.

## Declaration

```objectivec
extern NSString * const UIAccessibilityVoiceOverStatusChanged;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter.

Use this notification to customize your application’s user interface (UI) for VoiceOver users. For example, if you display a UI element that briefly overlays other parts of your UI, you can make the display persistent for VoiceOver users, but allow it to disappear as designed for users who are not using VoiceOver. You can also use the [UIAccessibilityIsVoiceOverRunning](uiaccessibility/isvoiceoverrunning.md) function to determine whether VoiceOver is currently running.

Observe this notification using the default notification center.

## See Also

### VoiceOver

- [UIAccessibilityAnnouncementNotification](uiaccessibility/notification/announcement.md): A notification that an app posts when it needs to convey an announcement to the assistive app.
- [UIAccessibilityVoiceOverStatusDidChangeNotification](uiaccessibility/voiceoverstatusdidchangenotification.md): A notification that UIKit posts when VoiceOver starts or stops.
- [UIAccessibilityAnnouncementDidFinishNotification](uiaccessibility/announcementdidfinishnotification.md): A notification that UIKit posts when the system finishes reading an announcement.

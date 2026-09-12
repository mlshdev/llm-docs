> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/notification/resumeassistivetechnology](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/resumeassistivetechnology)

# resumeAssistiveTechnology (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that resumes an assistive app’s operations temporarily.

## Declaration

```swift
nonisolated static let resumeAssistiveTechnology: UIAccessibility.Notification
```

<a id="Discussion"></a>

## Discussion

When posting the notification, specify the assistive app to resume as the parameter. You must post this notification to balance out the previous posting of a [pauseAssistiveTechnology](pauseassistivetechnology.md) notification. Post this notification using the [post(notification:argument:)](../post%28notification_argument_%29.md) function.

## See Also

### Assistive apps

- [assistiveTouchStatusDidChangeNotification](../assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.
- [guidedAccessStatusDidChangeNotification](../guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [pauseAssistiveTechnology](pauseassistivetechnology.md): A notification that pauses an assistive app’s operations temporarily.
- [UIAccessibility.AssistiveTechnologyIdentifier](../assistivetechnologyidentifier.md): Identifiers for assistive apps.

# UIAccessibilityResumeAssistiveTechnologyNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that resumes an assistive app’s operations temporarily.

## Declaration

```objectivec
extern const UIAccessibilityNotifications UIAccessibilityResumeAssistiveTechnologyNotification;
```

<a id="Discussion"></a>

## Discussion

When posting the notification, specify the assistive app to resume as the parameter. You must post this notification to balance out the previous posting of a [UIAccessibilityPauseAssistiveTechnologyNotification](pauseassistivetechnology.md) notification. Post this notification using the [UIAccessibilityPostNotification](../post%28notification_argument_%29.md) function.

## See Also

### Assistive apps

- [UIAccessibilityAssistiveTouchStatusDidChangeNotification](../assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.
- [UIAccessibilityGuidedAccessStatusDidChangeNotification](../guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [UIAccessibilityPauseAssistiveTechnologyNotification](pauseassistivetechnology.md): A notification that pauses an assistive app’s operations temporarily.
- [UIAccessibilityAssistiveTechnologyIdentifier](../assistivetechnologyidentifier.md): Identifiers for assistive apps.

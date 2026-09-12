> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/notification/pauseassistivetechnology](https://developer.apple.com/documentation/uikit/uiaccessibility/notification/pauseassistivetechnology)

# pauseAssistiveTechnology (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that pauses an assistive app’s operations temporarily.

## Declaration

```swift
nonisolated static let pauseAssistiveTechnology: UIAccessibility.Notification
```

<a id="Discussion"></a>

## Discussion

When posting the notification, specify the assistive app to pause as the parameter. For example, you might want to pause scanning in Switch Control while your app is playing an animation. You must balance this notification by posting a [resumeAssistiveTechnology](resumeassistivetechnology.md) notification to resume the assistive app’s operations. Post this notification using the [post(notification:argument:)](../post%28notification_argument_%29.md) function.

## See Also

### Assistive apps

- [assistiveTouchStatusDidChangeNotification](../assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.
- [guidedAccessStatusDidChangeNotification](../guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [resumeAssistiveTechnology](resumeassistivetechnology.md): A notification that resumes an assistive app’s operations temporarily.
- [UIAccessibility.AssistiveTechnologyIdentifier](../assistivetechnologyidentifier.md): Identifiers for assistive apps.

# UIAccessibilityPauseAssistiveTechnologyNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A notification that pauses an assistive app’s operations temporarily.

## Declaration

```objectivec
extern const UIAccessibilityNotifications UIAccessibilityPauseAssistiveTechnologyNotification;
```

<a id="Discussion"></a>

## Discussion

When posting the notification, specify the assistive app to pause as the parameter. For example, you might want to pause scanning in Switch Control while your app is playing an animation. You must balance this notification by posting a [UIAccessibilityResumeAssistiveTechnologyNotification](resumeassistivetechnology.md) notification to resume the assistive app’s operations. Post this notification using the [UIAccessibilityPostNotification](../post%28notification_argument_%29.md) function.

## See Also

### Assistive apps

- [UIAccessibilityAssistiveTouchStatusDidChangeNotification](../assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.
- [UIAccessibilityGuidedAccessStatusDidChangeNotification](../guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [UIAccessibilityResumeAssistiveTechnologyNotification](resumeassistivetechnology.md): A notification that resumes an assistive app’s operations temporarily.
- [UIAccessibilityAssistiveTechnologyIdentifier](../assistivetechnologyidentifier.md): Identifiers for assistive apps.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/assistivetouchstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/assistivetouchstatusdidchangenotification)

# assistiveTouchStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A notification that indicates a change in the status of AssistiveTouch.

## Declaration

```swift
nonisolated static let assistiveTouchStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The user must enable Guided Access for this notification to post.

## See Also

### Assistive apps

- [guidedAccessStatusDidChangeNotification](guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [pauseAssistiveTechnology](notification/pauseassistivetechnology.md): A notification that pauses an assistive app’s operations temporarily.
- [resumeAssistiveTechnology](notification/resumeassistivetechnology.md): A notification that resumes an assistive app’s operations temporarily.
- [UIAccessibility.AssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

# UIAccessibilityAssistiveTouchStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A notification that indicates a change in the status of AssistiveTouch.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityAssistiveTouchStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The user must enable Guided Access for this notification to post.

## See Also

### Assistive apps

- [UIAccessibilityGuidedAccessStatusDidChangeNotification](guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [UIAccessibilityPauseAssistiveTechnologyNotification](notification/pauseassistivetechnology.md): A notification that pauses an assistive app’s operations temporarily.
- [UIAccessibilityResumeAssistiveTechnologyNotification](notification/resumeassistivetechnology.md): A notification that resumes an assistive app’s operations temporarily.
- [UIAccessibilityAssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

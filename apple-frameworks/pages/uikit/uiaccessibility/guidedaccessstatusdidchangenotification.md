> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/guidedaccessstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/guidedaccessstatusdidchangenotification)

# guidedAccessStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that indicates when a Guided Access session starts or ends.

## Declaration

```swift
nonisolated static let guidedAccessStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

Use the [isGuidedAccessEnabled](isguidedaccessenabled.md) property to determine whether the Guided Access setting is enabled.

## See Also

### Assistive apps

- [assistiveTouchStatusDidChangeNotification](assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.
- [pauseAssistiveTechnology](notification/pauseassistivetechnology.md): A notification that pauses an assistive app’s operations temporarily.
- [resumeAssistiveTechnology](notification/resumeassistivetechnology.md): A notification that resumes an assistive app’s operations temporarily.
- [UIAccessibility.AssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

# UIAccessibilityGuidedAccessStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that indicates when a Guided Access session starts or ends.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityGuidedAccessStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

Use the [UIAccessibilityIsGuidedAccessEnabled](isguidedaccessenabled.md) property to determine whether the Guided Access setting is enabled.

## See Also

### Assistive apps

- [UIAccessibilityAssistiveTouchStatusDidChangeNotification](assistivetouchstatusdidchangenotification.md): A notification that indicates a change in the status of AssistiveTouch.
- [UIAccessibilityPauseAssistiveTechnologyNotification](notification/pauseassistivetechnology.md): A notification that pauses an assistive app’s operations temporarily.
- [UIAccessibilityResumeAssistiveTechnologyNotification](notification/resumeassistivetechnology.md): A notification that resumes an assistive app’s operations temporarily.
- [UIAccessibilityAssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

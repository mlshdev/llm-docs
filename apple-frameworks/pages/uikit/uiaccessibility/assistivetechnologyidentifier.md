> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/assistivetechnologyidentifier](https://developer.apple.com/documentation/uikit/uiaccessibility/assistivetechnologyidentifier)

# UIAccessibility.AssistiveTechnologyIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 5.0+

Identifiers for assistive apps.

## Declaration

```swift
struct AssistiveTechnologyIdentifier
```

<a id="overview"></a>

## Overview

Manage pausing and resuming assistive apps with these identifiers.

## Topics

### Identifiers

- [notificationSwitchControl](assistivetechnologyidentifier/notificationswitchcontrol.md): The Switch Control accessibility feature.
- [notificationVoiceOver](assistivetechnologyidentifier/notificationvoiceover.md): The VoiceOver assistive app.

### Initializer

- [init(rawValue:)](assistivetechnologyidentifier/init%28rawvalue_%29.md): Creates an assistive app identifier with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notification keys

- [announcementStringValueUserInfoKey](announcementstringvalueuserinfokey.md): The text of the announcement.
- [announcementWasSuccessfulUserInfoKey](announcementwassuccessfuluserinfokey.md): A Boolean value that indicates whether the announcement is successful.
- [focusedElementUserInfoKey](focusedelementuserinfokey.md): The element currently in focus by the assistive app.
- [unfocusedElementUserInfoKey](unfocusedelementuserinfokey.md): The element previously in focus by the assistive app.
- [assistiveTechnologyUserInfoKey](assistivetechnologyuserinfokey.md): The identifier of the assistive app.

# UIAccessibilityAssistiveTechnologyIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 5.0+

Identifiers for assistive apps.

## Declaration

```objectivec
typedef NSString * UIAccessibilityAssistiveTechnologyIdentifier;
```

<a id="overview"></a>

## Overview

Manage pausing and resuming assistive apps with these identifiers.

## Topics

### Identifiers

- [UIAccessibilityNotificationSwitchControlIdentifier](assistivetechnologyidentifier/notificationswitchcontrol.md): The Switch Control accessibility feature.
- [UIAccessibilityNotificationVoiceOverIdentifier](assistivetechnologyidentifier/notificationvoiceover.md): The VoiceOver assistive app.

## See Also

### Notification keys

- [UIAccessibilityAnnouncementKeyStringValue](announcementstringvalueuserinfokey.md): The text of the announcement.
- [UIAccessibilityAnnouncementKeyWasSuccessful](announcementwassuccessfuluserinfokey.md): A Boolean value that indicates whether the announcement is successful.
- [UIAccessibilityFocusedElementKey](focusedelementuserinfokey.md): The element currently in focus by the assistive app.
- [UIAccessibilityUnfocusedElementKey](unfocusedelementuserinfokey.md): The element previously in focus by the assistive app.
- [UIAccessibilityAssistiveTechnologyKey](assistivetechnologyuserinfokey.md): The identifier of the assistive app.

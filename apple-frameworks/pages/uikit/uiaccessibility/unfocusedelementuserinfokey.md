> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/unfocusedelementuserinfokey](https://developer.apple.com/documentation/uikit/uiaccessibility/unfocusedelementuserinfokey)

# unfocusedElementUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The element previously in focus by the assistive app.

## Declaration

```swift
nonisolated static let unfocusedElementUserInfoKey: String
```

## See Also

### Notification keys

- [announcementStringValueUserInfoKey](announcementstringvalueuserinfokey.md): The text of the announcement.
- [announcementWasSuccessfulUserInfoKey](announcementwassuccessfuluserinfokey.md): A Boolean value that indicates whether the announcement is successful.
- [focusedElementUserInfoKey](focusedelementuserinfokey.md): The element currently in focus by the assistive app.
- [assistiveTechnologyUserInfoKey](assistivetechnologyuserinfokey.md): The identifier of the assistive app.
- [UIAccessibility.AssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

# UIAccessibilityUnfocusedElementKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The element previously in focus by the assistive app.

## Declaration

```objectivec
extern NSString * const UIAccessibilityUnfocusedElementKey;
```

## See Also

### Notification keys

- [UIAccessibilityAnnouncementKeyStringValue](announcementstringvalueuserinfokey.md): The text of the announcement.
- [UIAccessibilityAnnouncementKeyWasSuccessful](announcementwassuccessfuluserinfokey.md): A Boolean value that indicates whether the announcement is successful.
- [UIAccessibilityFocusedElementKey](focusedelementuserinfokey.md): The element currently in focus by the assistive app.
- [UIAccessibilityAssistiveTechnologyKey](assistivetechnologyuserinfokey.md): The identifier of the assistive app.
- [UIAccessibilityAssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

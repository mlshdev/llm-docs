> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/announcementwassuccessfuluserinfokey](https://developer.apple.com/documentation/uikit/uiaccessibility/announcementwassuccessfuluserinfokey)

# announcementWasSuccessfulUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the announcement is successful.

## Declaration

```swift
nonisolated static let announcementWasSuccessfulUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../foundation/nsnumber.md) object that the system interprets as a Boolean value.

## See Also

### Notification keys

- [announcementStringValueUserInfoKey](announcementstringvalueuserinfokey.md): The text of the announcement.
- [focusedElementUserInfoKey](focusedelementuserinfokey.md): The element currently in focus by the assistive app.
- [unfocusedElementUserInfoKey](unfocusedelementuserinfokey.md): The element previously in focus by the assistive app.
- [assistiveTechnologyUserInfoKey](assistivetechnologyuserinfokey.md): The identifier of the assistive app.
- [UIAccessibility.AssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

# UIAccessibilityAnnouncementKeyWasSuccessful (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the announcement is successful.

## Declaration

```objectivec
extern NSString * const UIAccessibilityAnnouncementKeyWasSuccessful;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../foundation/nsnumber.md) object that the system interprets as a Boolean value.

## See Also

### Notification keys

- [UIAccessibilityAnnouncementKeyStringValue](announcementstringvalueuserinfokey.md): The text of the announcement.
- [UIAccessibilityFocusedElementKey](focusedelementuserinfokey.md): The element currently in focus by the assistive app.
- [UIAccessibilityUnfocusedElementKey](unfocusedelementuserinfokey.md): The element previously in focus by the assistive app.
- [UIAccessibilityAssistiveTechnologyKey](assistivetechnologyuserinfokey.md): The identifier of the assistive app.
- [UIAccessibilityAssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

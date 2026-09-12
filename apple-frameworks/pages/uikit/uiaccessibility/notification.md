> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/notification](https://developer.apple.com/documentation/uikit/uiaccessibility/notification)

# UIAccessibility.Notification (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

An accessibility notification that an app can send.

## Declaration

```swift
struct Notification
```

## Topics

### Notifications

- [announcement](notification/announcement.md): A notification that an app posts when it needs to convey an announcement to the assistive app.
- [layoutChanged](notification/layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [screenChanged](notification/screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
- [pageScrolled](notification/pagescrolled.md): A notification that an app posts when a scroll action completes.
- [pauseAssistiveTechnology](notification/pauseassistivetechnology.md): A notification that pauses an assistive app’s operations temporarily.
- [resumeAssistiveTechnology](notification/resumeassistivetechnology.md): A notification that resumes an assistive app’s operations temporarily.
- [UIAccessibility.AssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

### Initializer

- [init(rawValue:)](notification/init%28rawvalue_%29.md): Creates an accessibility notification with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling notifications

- [Notification names](../notification-names.md): The names of notifications that the accessibility system generates.
- [Notification dictionary keys](../notification-dictionary-keys.md): Handle notifications with keys in the user info dictionary.
- [post(notification:argument:)](post%28notification_argument_%29.md): Posts a notification to assistive apps.

# UIAccessibilityNotifications (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

An accessibility notification that an app can send.

## Declaration

```objectivec
typedef uint32_t UIAccessibilityNotifications;
```

## Topics

### Notifications

- [UIAccessibilityAnnouncementNotification](notification/announcement.md): A notification that an app posts when it needs to convey an announcement to the assistive app.
- [UIAccessibilityLayoutChangedNotification](notification/layoutchanged.md): A notification that an app posts when the layout of a screen changes.
- [UIAccessibilityScreenChangedNotification](notification/screenchanged.md): A notification that an app posts when a new view appears that occupies a major portion of the screen.
- [UIAccessibilityPageScrolledNotification](notification/pagescrolled.md): A notification that an app posts when a scroll action completes.
- [UIAccessibilityPauseAssistiveTechnologyNotification](notification/pauseassistivetechnology.md): A notification that pauses an assistive app’s operations temporarily.
- [UIAccessibilityResumeAssistiveTechnologyNotification](notification/resumeassistivetechnology.md): A notification that resumes an assistive app’s operations temporarily.
- [UIAccessibilityAssistiveTechnologyIdentifier](assistivetechnologyidentifier.md): Identifiers for assistive apps.

## See Also

### Handling notifications

- [Notification names](../notification-names.md): The names of notifications that the accessibility system generates.
- [Notification dictionary keys](../notification-dictionary-keys.md): Handle notifications with keys in the user info dictionary.
- [UIAccessibilityPostNotification](post%28notification_argument_%29.md): Posts a notification to assistive apps.

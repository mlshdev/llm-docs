> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinotificationfeedbackgenerator/feedbacktype](https://developer.apple.com/documentation/uikit/uinotificationfeedbackgenerator/feedbacktype)

# UINotificationFeedbackGenerator.FeedbackType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The type of notification that a notification feedback generator object generates.

## Declaration

```swift
enum FeedbackType
```

## Topics

### Constants

- [UINotificationFeedbackGenerator.FeedbackType.error](feedbacktype/error.md): A notification feedback type that indicates a task has failed.
- [UINotificationFeedbackGenerator.FeedbackType.success](feedbacktype/success.md): A notification feedback type that indicates a task has completed successfully.
- [UINotificationFeedbackGenerator.FeedbackType.warning](feedbacktype/warning.md): A notification feedback type that indicates a task has produced a warning.

### Initializers

- [init(rawValue:)](feedbacktype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Producing notification feedback

- [notificationOccurred(\_:)](notificationoccurred%28__%29.md): Triggers notification feedback.
- [notificationOccurred(\_:at:)](notificationoccurred%28__at_%29.md): Triggers notification feedback at the specified location.

# UINotificationFeedbackType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The type of notification that a notification feedback generator object generates.

## Declaration

```objectivec
enum UINotificationFeedbackType : NSInteger;
```

## Topics

### Constants

- [UINotificationFeedbackTypeError](feedbacktype/error.md): A notification feedback type that indicates a task has failed.
- [UINotificationFeedbackTypeSuccess](feedbacktype/success.md): A notification feedback type that indicates a task has completed successfully.
- [UINotificationFeedbackTypeWarning](feedbacktype/warning.md): A notification feedback type that indicates a task has produced a warning.

## See Also

### Producing notification feedback

- [notificationOccurred:](notificationoccurred%28__%29.md): Triggers notification feedback.
- [notificationOccurred:atLocation:](notificationoccurred%28__at_%29.md): Triggers notification feedback at the specified location.

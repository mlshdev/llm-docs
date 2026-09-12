> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinotificationfeedbackgenerator/notificationoccurred(_:at:)](https://developer.apple.com/documentation/uikit/uinotificationfeedbackgenerator/notificationoccurred(_:at:))

# notificationOccurred(\_:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+

Triggers notification feedback at the specified location.

## Declaration

```swift
func notificationOccurred(_ notificationType: UINotificationFeedbackGenerator.FeedbackType, at location: CGPoint)
```

## See Also

### Producing notification feedback

- [notificationOccurred(\_:)](notificationoccurred%28__%29.md): Triggers notification feedback.
- [UINotificationFeedbackGenerator.FeedbackType](feedbacktype.md): The type of notification that a notification feedback generator object generates.

# notificationOccurred:atLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+

Triggers notification feedback at the specified location.

## Declaration

```objectivec
- (void) notificationOccurred:(UINotificationFeedbackType) notificationType atLocation:(CGPoint) location;
```

## See Also

### Producing notification feedback

- [notificationOccurred:](notificationoccurred%28__%29.md): Triggers notification feedback.
- [UINotificationFeedbackType](feedbacktype.md): The type of notification that a notification feedback generator object generates.

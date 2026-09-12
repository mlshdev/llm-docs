> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinotificationfeedbackgenerator/notificationoccurred(_:)](https://developer.apple.com/documentation/uikit/uinotificationfeedbackgenerator/notificationoccurred(_:))

# notificationOccurred(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Triggers notification feedback.

## Declaration

```swift
func notificationOccurred(_ notificationType: UINotificationFeedbackGenerator.FeedbackType)
```

## Parameters

- `notificationType`: The type of notification feedback. For a list of valid notification types, see the [UINotificationFeedbackGenerator.FeedbackType](feedbacktype.md) enumeration.

<a id="Discussion"></a>

## Discussion

This method tells the generator that a task or action has succeeded, failed, or produced a warning. In response, the generator may play the appropriate haptics, based on the provided [UINotificationFeedbackGenerator.FeedbackType](feedbacktype.md) value.

For more information on setting up a feedback generator, see the [UIFeedbackGenerator](../uifeedbackgenerator.md) class.

## See Also

### Related Documentation

- [prepare()](../uifeedbackgenerator/prepare%28%29.md): Prepares the generator to trigger feedback.

### Producing notification feedback

- [notificationOccurred(\_:at:)](notificationoccurred%28__at_%29.md): Triggers notification feedback at the specified location.
- [UINotificationFeedbackGenerator.FeedbackType](feedbacktype.md): The type of notification that a notification feedback generator object generates.

# notificationOccurred: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Triggers notification feedback.

## Declaration

```objectivec
- (void) notificationOccurred:(UINotificationFeedbackType) notificationType;
```

## Parameters

- `notificationType`: The type of notification feedback. For a list of valid notification types, see the [UINotificationFeedbackType](feedbacktype.md) enumeration.

<a id="Discussion"></a>

## Discussion

This method tells the generator that a task or action has succeeded, failed, or produced a warning. In response, the generator may play the appropriate haptics, based on the provided [UINotificationFeedbackType](feedbacktype.md) value.

For more information on setting up a feedback generator, see the [UIFeedbackGenerator](../uifeedbackgenerator.md) class.

## See Also

### Related Documentation

- [prepare](../uifeedbackgenerator/prepare%28%29.md): Prepares the generator to trigger feedback.

### Producing notification feedback

- [notificationOccurred:atLocation:](notificationoccurred%28__at_%29.md): Triggers notification feedback at the specified location.
- [UINotificationFeedbackType](feedbacktype.md): The type of notification that a notification feedback generator object generates.

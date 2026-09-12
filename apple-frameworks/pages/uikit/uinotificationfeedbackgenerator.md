> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinotificationfeedbackgenerator](https://developer.apple.com/documentation/uikit/uinotificationfeedbackgenerator)

# UINotificationFeedbackGenerator (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A concrete feedback generator subclass that creates haptics to communicate successes, failures, and warnings.

## Declaration

```swift
@MainActor class UINotificationFeedbackGenerator
```

<a id="overview"></a>

## Overview

Use notification feedback to communicate that a task or action succeeded, failed, or produced a warning of some kind.

For more information, read [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md).

## Topics

### Producing notification feedback

- [notificationOccurred(\_:)](uinotificationfeedbackgenerator/notificationoccurred%28__%29.md): Triggers notification feedback.
- [notificationOccurred(\_:at:)](uinotificationfeedbackgenerator/notificationoccurred%28__at_%29.md): Triggers notification feedback at the specified location.
- [UINotificationFeedbackGenerator.FeedbackType](uinotificationfeedbackgenerator/feedbacktype.md): The type of notification that a notification feedback generator object generates.

## Relationships

### Inherits From

- [UIFeedbackGenerator](uifeedbackgenerator.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIInteraction](uiinteraction.md)

## See Also

### Haptic feedback

- [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md): Provide tactile feedback when people perform certain actions in your app.
- [UIFeedbackGenerator](uifeedbackgenerator.md): The abstract superclass for all feedback generators.
- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to simulate physical impacts.
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate a change in selection.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate events on a drawing canvas.

# UINotificationFeedbackGenerator (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A concrete feedback generator subclass that creates haptics to communicate successes, failures, and warnings.

## Declaration

```objectivec
@interface UINotificationFeedbackGenerator : UIFeedbackGenerator
```

<a id="overview"></a>

## Overview

Use notification feedback to communicate that a task or action succeeded, failed, or produced a warning of some kind.

For more information, read [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md).

## Topics

### Producing notification feedback

- [notificationOccurred:](uinotificationfeedbackgenerator/notificationoccurred%28__%29.md): Triggers notification feedback.
- [notificationOccurred:atLocation:](uinotificationfeedbackgenerator/notificationoccurred%28__at_%29.md): Triggers notification feedback at the specified location.
- [UINotificationFeedbackType](uinotificationfeedbackgenerator/feedbacktype.md): The type of notification that a notification feedback generator object generates.

## Relationships

### Inherits From

- [UIFeedbackGenerator](uifeedbackgenerator.md)

## See Also

### Haptic feedback

- [UIFeedbackGenerator](uifeedbackgenerator.md): The abstract superclass for all feedback generators.
- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to simulate physical impacts.
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate a change in selection.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate events on a drawing canvas.

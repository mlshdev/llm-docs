> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifeedbackgenerator](https://developer.apple.com/documentation/uikit/uifeedbackgenerator)

# UIFeedbackGenerator (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The abstract superclass for all feedback generators.

## Declaration

```swift
@MainActor class UIFeedbackGenerator
```

<a id="overview"></a>

## Overview

Don’t subclass or create instances of this class yourself. Instead, instantiate one of the concrete feedback generator subclasses:

- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md). Use impact feedback to indicate when an impact occurs. For example, you might trigger impact feedback when a user interface object collides with something or snaps into place.
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md). Use selection feedback to indicate a change in selection.
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md). Use notification feedback to indicate successes, failures, and warnings.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md). Use canvas feedback to indicate when a drawing event occurs, such as an object snapping to a guide or ruler.

For more information, read [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md).

## Topics

### Initializing a feedback generator

- [init(view:)](uifeedbackgenerator/init%28view_%29.md): Creates a feedback generator and attaches it to the specified view.

### Preparing to generate feedback

- [prepare()](uifeedbackgenerator/prepare%28%29.md): Prepares the generator to trigger feedback.

### Deprecated

- [init()](uifeedbackgenerator/init%28%29.md): Deprecated. Creates a feedback generator.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md)
- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md)
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md)
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Haptic feedback

- [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md): Provide tactile feedback when people perform certain actions in your app.
- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to simulate physical impacts.
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to communicate successes, failures, and warnings.
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate a change in selection.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate events on a drawing canvas.

# UIFeedbackGenerator (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

The abstract superclass for all feedback generators.

## Declaration

```objectivec
@interface UIFeedbackGenerator : NSObject
```

<a id="overview"></a>

## Overview

Don’t subclass or create instances of this class yourself. Instead, instantiate one of the concrete feedback generator subclasses:

- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md). Use impact feedback to indicate when an impact occurs. For example, you might trigger impact feedback when a user interface object collides with something or snaps into place.
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md). Use selection feedback to indicate a change in selection.
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md). Use notification feedback to indicate successes, failures, and warnings.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md). Use canvas feedback to indicate when a drawing event occurs, such as an object snapping to a guide or ruler.

For more information, read [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md).

## Topics

### Initializing a feedback generator

- [feedbackGeneratorForView:](uifeedbackgenerator/init%28view_%29.md): Creates a feedback generator and attaches it to the specified view.

### Preparing to generate feedback

- [prepare](uifeedbackgenerator/prepare%28%29.md): Prepares the generator to trigger feedback.

### Deprecated

- [init](uifeedbackgenerator/init%28%29.md): Deprecated. Creates a feedback generator.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md)
- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md)
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md)
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Haptic feedback

- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to simulate physical impacts.
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to communicate successes, failures, and warnings.
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate a change in selection.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate events on a drawing canvas.

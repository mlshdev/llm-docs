> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiselectionfeedbackgenerator](https://developer.apple.com/documentation/uikit/uiselectionfeedbackgenerator)

# UISelectionFeedbackGenerator (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A concrete feedback generator subclass that creates haptics to indicate a change in selection.

## Declaration

```swift
@MainActor class UISelectionFeedbackGenerator
```

<a id="overview"></a>

## Overview

Use selection feedback to communicate movement through a series of discrete values. For example, you might trigger selection feedback to indicate that a UI element’s values are changing.

The following code example shows how to play selection feedback in response to a long-press gesture.

```swift
var feedback = UISelectionFeedbackGenerator()

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Create a selection feedback object and associate it with the view.
    feedback = UISelectionFeedbackGenerator(view: view)
    
    // Add a custom long-press gesture to the view.
    let longPressGesture = UILongPressGestureRecognizer(target: self, action: #selector(longPress(_:)))
    longPressGesture.numberOfTouchesRequired = 2
    view.addGestureRecognizer(longPressGesture)
}

@objc
private func longPress(_ sender: UILongPressGestureRecognizer) {
    if sender.state == .began {
        // Play selection feedback to indicate a selection change.
        feedback.selectionChanged(at: sender.location(in: view))
        
        // Update the UI in response to a selection change.
        // ...
    }
}
```

For more information, read [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md).

## Topics

### Reporting selection changes

- [selectionChanged()](uiselectionfeedbackgenerator/selectionchanged%28%29.md): Triggers selection feedback.
- [selectionChanged(at:)](uiselectionfeedbackgenerator/selectionchanged%28at_%29.md): Triggers selection feedback at the specified location.

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
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to communicate successes, failures, and warnings.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate events on a drawing canvas.

# UISelectionFeedbackGenerator (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A concrete feedback generator subclass that creates haptics to indicate a change in selection.

## Declaration

```objectivec
@interface UISelectionFeedbackGenerator : UIFeedbackGenerator
```

<a id="overview"></a>

## Overview

Use selection feedback to communicate movement through a series of discrete values. For example, you might trigger selection feedback to indicate that a UI element’s values are changing.

The following code example shows how to play selection feedback in response to a long-press gesture.

```swift
var feedback = UISelectionFeedbackGenerator()

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Create a selection feedback object and associate it with the view.
    feedback = UISelectionFeedbackGenerator(view: view)
    
    // Add a custom long-press gesture to the view.
    let longPressGesture = UILongPressGestureRecognizer(target: self, action: #selector(longPress(_:)))
    longPressGesture.numberOfTouchesRequired = 2
    view.addGestureRecognizer(longPressGesture)
}

@objc
private func longPress(_ sender: UILongPressGestureRecognizer) {
    if sender.state == .began {
        // Play selection feedback to indicate a selection change.
        feedback.selectionChanged(at: sender.location(in: view))
        
        // Update the UI in response to a selection change.
        // ...
    }
}
```

For more information, read [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md).

## Topics

### Reporting selection changes

- [selectionChanged](uiselectionfeedbackgenerator/selectionchanged%28%29.md): Triggers selection feedback.
- [selectionChangedAtLocation:](uiselectionfeedbackgenerator/selectionchanged%28at_%29.md): Triggers selection feedback at the specified location.

## Relationships

### Inherits From

- [UIFeedbackGenerator](uifeedbackgenerator.md)

## See Also

### Haptic feedback

- [UIFeedbackGenerator](uifeedbackgenerator.md): The abstract superclass for all feedback generators.
- [UIImpactFeedbackGenerator](uiimpactfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to simulate physical impacts.
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to communicate successes, failures, and warnings.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate events on a drawing canvas.

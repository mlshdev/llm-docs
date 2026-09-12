> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimpactfeedbackgenerator](https://developer.apple.com/documentation/uikit/uiimpactfeedbackgenerator)

# UIImpactFeedbackGenerator (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A concrete feedback generator subclass that creates haptics to simulate physical impacts.

## Declaration

```swift
@MainActor class UIImpactFeedbackGenerator
```

<a id="overview"></a>

## Overview

Use impact feedback to indicate when an impact occurs. For example, you might trigger impact feedback when a user interface object collides with another object.

The following code example shows how to use a pan gesture to drag a square, playing haptic feedback to indicate when the square collides with the edge of its superview.

```swift
var feedback = UIImpactFeedbackGenerator()

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Create an impact feedback object and associate it with the view.
    feedback = UIImpactFeedbackGenerator(view: view)
    
    // Draw a basic square and add it to the view hierarchy.
    let center = CGPoint(x: view.center.x - 50, y: view.center.y - 50)
    let square = UIView(frame: CGRect(origin: center,
                                     size: CGSize(width: 100, height: 100)))
    square.backgroundColor = .tintColor
    view.addSubview(square)
    
    // Add a pan gesture to allow dragging the square.
    let panGesture = UIPanGestureRecognizer(target: self, action: #selector(dragSquare(_:)))
    square.isUserInteractionEnabled = true
    square.addGestureRecognizer(panGesture)
}

@objc
private func dragSquare(_ sender: UIPanGestureRecognizer) {
    guard let square = sender.view else { return }
    
    if sender.state == .began {
        // Prepare the feedback object.
        feedback.prepare()
    }

    // Move the square in response to a pan gesture.
    let distance = sender.translation(in: view)
    square.center = CGPoint(x: square.center.x + distance.x, y: square.center.y + distance.y)
    sender.setTranslation(CGPoint.zero, in: view)

    // Play impact feedback if the square bumps into the edge of its superview.
    if square.hitEdge(of: view) {
        feedback.impactOccurred(intensity: 1, at: sender.location(in: view))
    }
}
```

For more information, read [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md).

## Topics

### Initializing the feedback generator

- [init(style:view:)](uiimpactfeedbackgenerator/init%28style_view_%29.md): Creates an impact feedback generator with the specified style and view.
- [UIImpactFeedbackGenerator.FeedbackStyle](uiimpactfeedbackgenerator/feedbackstyle.md): The mass of the objects in the collision simulated by an impact feedback generator object.

### Reporting impacts

- [impactOccurred()](uiimpactfeedbackgenerator/impactoccurred%28%29.md): Triggers impact feedback.
- [impactOccurred(intensity:)](uiimpactfeedbackgenerator/impactoccurred%28intensity_%29.md): Triggers impact feedback with a specific intensity.
- [impactOccurred(at:)](uiimpactfeedbackgenerator/impactoccurred%28at_%29.md): Triggers impact feedback at the specified location.
- [impactOccurred(intensity:at:)](uiimpactfeedbackgenerator/impactoccurred%28intensity_at_%29.md): Triggers impact feedback with a specific intensity at the specified location.

### Deprecated

- [init(style:)](uiimpactfeedbackgenerator/init%28style_%29.md): Deprecated. Creates an impact feedback generator with the specified style.

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
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to communicate successes, failures, and warnings.
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate a change in selection.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate events on a drawing canvas.

# UIImpactFeedbackGenerator (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

A concrete feedback generator subclass that creates haptics to simulate physical impacts.

## Declaration

```objectivec
@interface UIImpactFeedbackGenerator : UIFeedbackGenerator
```

<a id="overview"></a>

## Overview

Use impact feedback to indicate when an impact occurs. For example, you might trigger impact feedback when a user interface object collides with another object.

The following code example shows how to use a pan gesture to drag a square, playing haptic feedback to indicate when the square collides with the edge of its superview.

```swift
var feedback = UIImpactFeedbackGenerator()

override func viewDidLoad() {
    super.viewDidLoad()
    
    // Create an impact feedback object and associate it with the view.
    feedback = UIImpactFeedbackGenerator(view: view)
    
    // Draw a basic square and add it to the view hierarchy.
    let center = CGPoint(x: view.center.x - 50, y: view.center.y - 50)
    let square = UIView(frame: CGRect(origin: center,
                                     size: CGSize(width: 100, height: 100)))
    square.backgroundColor = .tintColor
    view.addSubview(square)
    
    // Add a pan gesture to allow dragging the square.
    let panGesture = UIPanGestureRecognizer(target: self, action: #selector(dragSquare(_:)))
    square.isUserInteractionEnabled = true
    square.addGestureRecognizer(panGesture)
}

@objc
private func dragSquare(_ sender: UIPanGestureRecognizer) {
    guard let square = sender.view else { return }
    
    if sender.state == .began {
        // Prepare the feedback object.
        feedback.prepare()
    }

    // Move the square in response to a pan gesture.
    let distance = sender.translation(in: view)
    square.center = CGPoint(x: square.center.x + distance.x, y: square.center.y + distance.y)
    sender.setTranslation(CGPoint.zero, in: view)

    // Play impact feedback if the square bumps into the edge of its superview.
    if square.hitEdge(of: view) {
        feedback.impactOccurred(intensity: 1, at: sender.location(in: view))
    }
}
```

For more information, read [Playing haptic feedback in your app](../applepencil/playing-haptic-feedback-in-your-app.md).

## Topics

### Initializing the feedback generator

- [feedbackGeneratorWithStyle:forView:](uiimpactfeedbackgenerator/init%28style_view_%29.md): Creates an impact feedback generator with the specified style and view.
- [UIImpactFeedbackStyle](uiimpactfeedbackgenerator/feedbackstyle.md): The mass of the objects in the collision simulated by an impact feedback generator object.

### Reporting impacts

- [impactOccurred](uiimpactfeedbackgenerator/impactoccurred%28%29.md): Triggers impact feedback.
- [impactOccurredWithIntensity:](uiimpactfeedbackgenerator/impactoccurred%28intensity_%29.md): Triggers impact feedback with a specific intensity.
- [impactOccurredAtLocation:](uiimpactfeedbackgenerator/impactoccurred%28at_%29.md): Triggers impact feedback at the specified location.
- [impactOccurredWithIntensity:atLocation:](uiimpactfeedbackgenerator/impactoccurred%28intensity_at_%29.md): Triggers impact feedback with a specific intensity at the specified location.

### Deprecated

- [initWithStyle:](uiimpactfeedbackgenerator/init%28style_%29.md): Deprecated. Creates an impact feedback generator with the specified style.

## Relationships

### Inherits From

- [UIFeedbackGenerator](uifeedbackgenerator.md)

## See Also

### Haptic feedback

- [UIFeedbackGenerator](uifeedbackgenerator.md): The abstract superclass for all feedback generators.
- [UINotificationFeedbackGenerator](uinotificationfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to communicate successes, failures, and warnings.
- [UISelectionFeedbackGenerator](uiselectionfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate a change in selection.
- [UICanvasFeedbackGenerator](uicanvasfeedbackgenerator.md): A concrete feedback generator subclass that creates haptics to indicate events on a drawing canvas.

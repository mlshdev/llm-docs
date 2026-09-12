> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uirotationgesturerecognizer](https://developer.apple.com/documentation/uikit/uirotationgesturerecognizer)

# UIRotationGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A continuous gesture recognizer that interprets rotation gestures involving two touches.

## Declaration

```swift
@MainActor class UIRotationGestureRecognizer
```

## Mentioned In

- [Handling rotation gestures](handling-rotation-gestures.md)

<a id="overview"></a>

## Overview

[UIRotationGestureRecognizer](uirotationgesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).

The user must press two fingers on a view while rotating it. When the user moves the fingers opposite each other in a circular motion, the underlying view rotates in a corresponding direction and speed.

Rotation is a continuous gesture. It begins when the user moves the two fingers enough to create a rotation gesture. The gesture changes when a finger moves while both fingers remain touching. It ends when the user lifts both fingers. At each stage in the gesture, the gesture recognizer sends its action message.

## Topics

### Interpreting the gesture

- [rotation](uirotationgesturerecognizer/rotation.md): The rotation of the gesture in radians.
- [velocity](uirotationgesturerecognizer/velocity.md): The velocity of the rotation gesture in radians per second.

## Relationships

### Inherits From

- [UIGestureRecognizer](uigesturerecognizer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Standard gestures

- [Handling UIKit gestures](handling-uikit-gestures.md): Use gesture recognizers to simplify touch handling and create a consistent user experience.
- [Coordinating multiple gesture recognizers](coordinating-multiple-gesture-recognizers.md): Discover how to use multiple gesture recognizers on the same view.
- [Adopting hover support for Apple Pencil](adopting-hover-support-for-apple-pencil.md): Enhance user feedback for your iPadOS app with a hover preview for Apple Pencil input.
- [Supporting gesture interaction in your apps](supporting-gesture-interaction-in-your-apps.md): Enrich your app’s user experience by supporting standard and custom gesture interaction.
- [UIHoverGestureRecognizer](uihovergesturerecognizer.md): A continuous gesture recognizer that interprets pointer movement over a view.
- [UILongPressGestureRecognizer](uilongpressgesturerecognizer.md): A continuous gesture recognizer that interprets long-press gestures.
- [UIPanGestureRecognizer](uipangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures.
- [UIPinchGestureRecognizer](uipinchgesturerecognizer.md): A continuous gesture recognizer that interprets pinching gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

# UIRotationGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A continuous gesture recognizer that interprets rotation gestures involving two touches.

## Declaration

```objectivec
@interface UIRotationGestureRecognizer : UIGestureRecognizer
```

## Mentioned In

- [Handling rotation gestures](handling-rotation-gestures.md)

<a id="overview"></a>

## Overview

[UIRotationGestureRecognizer](uirotationgesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).

The user must press two fingers on a view while rotating it. When the user moves the fingers opposite each other in a circular motion, the underlying view rotates in a corresponding direction and speed.

Rotation is a continuous gesture. It begins when the user moves the two fingers enough to create a rotation gesture. The gesture changes when a finger moves while both fingers remain touching. It ends when the user lifts both fingers. At each stage in the gesture, the gesture recognizer sends its action message.

## Topics

### Interpreting the gesture

- [rotation](uirotationgesturerecognizer/rotation.md): The rotation of the gesture in radians.
- [velocity](uirotationgesturerecognizer/velocity.md): The velocity of the rotation gesture in radians per second.

## Relationships

### Inherits From

- [UIGestureRecognizer](uigesturerecognizer.md)

## See Also

### Standard gestures

- [Handling UIKit gestures](handling-uikit-gestures.md): Use gesture recognizers to simplify touch handling and create a consistent user experience.
- [Coordinating multiple gesture recognizers](coordinating-multiple-gesture-recognizers.md): Discover how to use multiple gesture recognizers on the same view.
- [Adopting hover support for Apple Pencil](adopting-hover-support-for-apple-pencil.md): Enhance user feedback for your iPadOS app with a hover preview for Apple Pencil input.
- [Supporting gesture interaction in your apps](supporting-gesture-interaction-in-your-apps.md): Enrich your app’s user experience by supporting standard and custom gesture interaction.
- [UIHoverGestureRecognizer](uihovergesturerecognizer.md): A continuous gesture recognizer that interprets pointer movement over a view.
- [UILongPressGestureRecognizer](uilongpressgesturerecognizer.md): A continuous gesture recognizer that interprets long-press gestures.
- [UIPanGestureRecognizer](uipangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures.
- [UIPinchGestureRecognizer](uipinchgesturerecognizer.md): A continuous gesture recognizer that interprets pinching gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

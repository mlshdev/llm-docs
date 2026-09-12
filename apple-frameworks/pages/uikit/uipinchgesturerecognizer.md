> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipinchgesturerecognizer](https://developer.apple.com/documentation/uikit/uipinchgesturerecognizer)

# UIPinchGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A continuous gesture recognizer that interprets pinching gestures involving two touches.

## Declaration

```swift
@MainActor class UIPinchGestureRecognizer
```

## Mentioned In

- [Handling pinch gestures](handling-pinch-gestures.md)

<a id="overview"></a>

## Overview

[UIPinchGestureRecognizer](uipinchgesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).

The user must press two fingers on a view while pinching it. When the user moves the two fingers toward each other, the conventional meaning is zoom out; when the user moves the two fingers away from each other, the conventional meaning is zoom in.

Pinching is a continuous gesture. The gesture begins ([UIGestureRecognizer.State.began](uigesturerecognizer/state-swift.enum/began.md)) when the user moves the two fingers enough to create a pinch gesture. The gesture changes ([UIGestureRecognizer.State.changed](uigesturerecognizer/state-swift.enum/changed.md)) when a finger moves (while both fingers remain touching). The gesture ends ([UIGestureRecognizer.State.ended](uigesturerecognizer/state-swift.enum/ended.md)) when the user lifts both fingers from the view.

## Topics

### Interpreting the pinching gesture

- [scale](uipinchgesturerecognizer/scale.md): The scale factor relative to the points of the two touches in screen coordinates.
- [velocity](uipinchgesturerecognizer/velocity.md): The velocity of the pinch in scale factor per second.

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
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

# UIPinchGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A continuous gesture recognizer that interprets pinching gestures involving two touches.

## Declaration

```objectivec
@interface UIPinchGestureRecognizer : UIGestureRecognizer
```

## Mentioned In

- [Handling pinch gestures](handling-pinch-gestures.md)

<a id="overview"></a>

## Overview

[UIPinchGestureRecognizer](uipinchgesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).

The user must press two fingers on a view while pinching it. When the user moves the two fingers toward each other, the conventional meaning is zoom out; when the user moves the two fingers away from each other, the conventional meaning is zoom in.

Pinching is a continuous gesture. The gesture begins ([UIGestureRecognizerStateBegan](uigesturerecognizer/state-swift.enum/began.md)) when the user moves the two fingers enough to create a pinch gesture. The gesture changes ([UIGestureRecognizerStateChanged](uigesturerecognizer/state-swift.enum/changed.md)) when a finger moves (while both fingers remain touching). The gesture ends ([UIGestureRecognizerStateEnded](uigesturerecognizer/state-swift.enum/ended.md)) when the user lifts both fingers from the view.

## Topics

### Interpreting the pinching gesture

- [scale](uipinchgesturerecognizer/scale.md): The scale factor relative to the points of the two touches in screen coordinates.
- [velocity](uipinchgesturerecognizer/velocity.md): The velocity of the pinch in scale factor per second.

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
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

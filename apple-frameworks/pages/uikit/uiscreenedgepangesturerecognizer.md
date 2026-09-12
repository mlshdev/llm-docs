> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreenedgepangesturerecognizer](https://developer.apple.com/documentation/uikit/uiscreenedgepangesturerecognizer)

# UIScreenEdgePanGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.

## Declaration

```swift
@MainActor class UIScreenEdgePanGestureRecognizer
```

## Mentioned In

- [Handling pan gestures](handling-pan-gestures.md)

<a id="overview"></a>

## Overview

The system uses screen edge gestures in some cases to initiate view controller transitions. You can use this class to replicate the same gesture behavior for your own actions.

After creating a screen edge pan gesture recognizer, assign an appropriate value to the [edges](uiscreenedgepangesturerecognizer/edges.md) property before attaching the gesture recognizer to your view. You use this property to specify the edges where the gesture can start. This gesture recognizer ignores any touches beyond the first touch.

## Topics

### Specifying the starting edges

- [edges](uiscreenedgepangesturerecognizer/edges.md): The acceptable starting edges for the gesture.
- [UIRectEdge](uirectedge.md): Constants that specify the edges of a rectangle.

## Relationships

### Inherits From

- [UIPanGestureRecognizer](uipangesturerecognizer.md)

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
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

# UIScreenEdgePanGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+

A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.

## Declaration

```objectivec
@interface UIScreenEdgePanGestureRecognizer : UIPanGestureRecognizer
```

## Mentioned In

- [Handling pan gestures](handling-pan-gestures.md)

<a id="overview"></a>

## Overview

The system uses screen edge gestures in some cases to initiate view controller transitions. You can use this class to replicate the same gesture behavior for your own actions.

After creating a screen edge pan gesture recognizer, assign an appropriate value to the [edges](uiscreenedgepangesturerecognizer/edges.md) property before attaching the gesture recognizer to your view. You use this property to specify the edges where the gesture can start. This gesture recognizer ignores any touches beyond the first touch.

## Topics

### Specifying the starting edges

- [edges](uiscreenedgepangesturerecognizer/edges.md): The acceptable starting edges for the gesture.
- [UIRectEdge](uirectedge.md): Constants that specify the edges of a rectangle.

## Relationships

### Inherits From

- [UIPanGestureRecognizer](uipangesturerecognizer.md)

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
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

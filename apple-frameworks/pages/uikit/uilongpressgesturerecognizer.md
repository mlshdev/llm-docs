> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilongpressgesturerecognizer](https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer)

# UILongPressGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A continuous gesture recognizer that interprets long-press gestures.

## Declaration

```swift
@MainActor class UILongPressGestureRecognizer
```

<a id="overview"></a>

## Overview

[UILongPressGestureRecognizer](uilongpressgesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).

The user must press one or more fingers on a view and hold them there for a minimum period of time before the action triggers. While down, the userʼs fingers canʼt move more than a specified distance or the gesture fails.

A long-press gesture is continuous. The gesture begins ([UIGestureRecognizer.State.began](uigesturerecognizer/state-swift.enum/began.md)) when the user presses the number of allowable fingers ([numberOfTouchesRequired](uilongpressgesturerecognizer/numberoftouchesrequired.md)) for the specified period ([minimumPressDuration](uilongpressgesturerecognizer/minimumpressduration.md)) and the touches don’t move beyond the allowable range of movement ([allowableMovement](uilongpressgesturerecognizer/allowablemovement.md)). The gesture recognizer transitions to the Change state whenever a finger moves, and it ends ([UIGestureRecognizer.State.ended](uigesturerecognizer/state-swift.enum/ended.md)) when the user lifts any of the fingers.

## Topics

### Configuring the gesture recognizer

- [minimumPressDuration](uilongpressgesturerecognizer/minimumpressduration.md): The minimum time that the user must press on the view for the gesture to be recognized.
- [numberOfTouchesRequired](uilongpressgesturerecognizer/numberoftouchesrequired.md): The number of fingers that must touch the view for gesture recognition.
- [numberOfTapsRequired](uilongpressgesturerecognizer/numberoftapsrequired.md): The number of taps on the view necessary for gesture recognition.
- [allowableMovement](uilongpressgesturerecognizer/allowablemovement.md): The maximum movement of the fingers on the view before the gesture fails.

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
- [UIPanGestureRecognizer](uipangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures.
- [UIPinchGestureRecognizer](uipinchgesturerecognizer.md): A continuous gesture recognizer that interprets pinching gestures involving two touches.
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

# UILongPressGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A continuous gesture recognizer that interprets long-press gestures.

## Declaration

```objectivec
@interface UILongPressGestureRecognizer : UIGestureRecognizer
```

<a id="overview"></a>

## Overview

[UILongPressGestureRecognizer](uilongpressgesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).

The user must press one or more fingers on a view and hold them there for a minimum period of time before the action triggers. While down, the userʼs fingers canʼt move more than a specified distance or the gesture fails.

A long-press gesture is continuous. The gesture begins ([UIGestureRecognizerStateBegan](uigesturerecognizer/state-swift.enum/began.md)) when the user presses the number of allowable fingers ([numberOfTouchesRequired](uilongpressgesturerecognizer/numberoftouchesrequired.md)) for the specified period ([minimumPressDuration](uilongpressgesturerecognizer/minimumpressduration.md)) and the touches don’t move beyond the allowable range of movement ([allowableMovement](uilongpressgesturerecognizer/allowablemovement.md)). The gesture recognizer transitions to the Change state whenever a finger moves, and it ends ([UIGestureRecognizerStateEnded](uigesturerecognizer/state-swift.enum/ended.md)) when the user lifts any of the fingers.

## Topics

### Configuring the gesture recognizer

- [minimumPressDuration](uilongpressgesturerecognizer/minimumpressduration.md): The minimum time that the user must press on the view for the gesture to be recognized.
- [numberOfTouchesRequired](uilongpressgesturerecognizer/numberoftouchesrequired.md): The number of fingers that must touch the view for gesture recognition.
- [numberOfTapsRequired](uilongpressgesturerecognizer/numberoftapsrequired.md): The number of taps on the view necessary for gesture recognition.
- [allowableMovement](uilongpressgesturerecognizer/allowablemovement.md): The maximum movement of the fingers on the view before the gesture fails.

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
- [UIPanGestureRecognizer](uipangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures.
- [UIPinchGestureRecognizer](uipinchgesturerecognizer.md): A continuous gesture recognizer that interprets pinching gestures involving two touches.
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

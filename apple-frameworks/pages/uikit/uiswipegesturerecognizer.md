> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswipegesturerecognizer](https://developer.apple.com/documentation/uikit/uiswipegesturerecognizer)

# UISwipeGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A discrete gesture recognizer that interprets swiping gestures in one or more directions.

## Declaration

```swift
@MainActor class UISwipeGestureRecognizer
```

## Mentioned In

- [Handling swipe gestures](handling-swipe-gestures.md)

<a id="overview"></a>

## Overview

[UISwipeGestureRecognizer](uiswipegesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).` `

[UISwipeGestureRecognizer](uiswipegesturerecognizer.md) recognizes a swipe when the user moves the specified number of touches ([numberOfTouchesRequired](uiswipegesturerecognizer/numberoftouchesrequired.md)) in an allowable direction ([direction](uiswipegesturerecognizer/direction-swift.property.md)) far enough to create a swipe. Swipes can be slow or fast. A slow swipe requires high directional precision but a small distance; a fast swipe requires low directional precision but a large distance. Because a swipe is a discrete gesture, the system sends the associated action message just once per gesture.

You can determine the location where a swipe begins by calling the [UIGestureRecognizer](uigesturerecognizer.md) methods [location(in:)](uigesturerecognizer/location%28in_%29.md) and [location(ofTouch:in:)](uigesturerecognizer/location%28oftouch_in_%29.md). The former method provides the centroid if the gesture contains more than one touch; the latter provides the location of a particular touch.

## Topics

### Configuring the gesture

- [direction](uiswipegesturerecognizer/direction-swift.property.md): The permitted direction of the swipe for this gesture recognizer.
- [numberOfTouchesRequired](uiswipegesturerecognizer/numberoftouchesrequired.md): The number of touches necessary for swipe recognition.
- [UISwipeGestureRecognizer.Direction](uiswipegesturerecognizer/direction-swift.struct.md): The direction of the swipe.

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
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

# UISwipeGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A discrete gesture recognizer that interprets swiping gestures in one or more directions.

## Declaration

```objectivec
@interface UISwipeGestureRecognizer : UIGestureRecognizer
```

## Mentioned In

- [Handling swipe gestures](handling-swipe-gestures.md)

<a id="overview"></a>

## Overview

[UISwipeGestureRecognizer](uiswipegesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).` `

[UISwipeGestureRecognizer](uiswipegesturerecognizer.md) recognizes a swipe when the user moves the specified number of touches ([numberOfTouchesRequired](uiswipegesturerecognizer/numberoftouchesrequired.md)) in an allowable direction ([direction](uiswipegesturerecognizer/direction-swift.property.md)) far enough to create a swipe. Swipes can be slow or fast. A slow swipe requires high directional precision but a small distance; a fast swipe requires low directional precision but a large distance. Because a swipe is a discrete gesture, the system sends the associated action message just once per gesture.

You can determine the location where a swipe begins by calling the [UIGestureRecognizer](uigesturerecognizer.md) methods [locationInView:](uigesturerecognizer/location%28in_%29.md) and [locationOfTouch:inView:](uigesturerecognizer/location%28oftouch_in_%29.md). The former method provides the centroid if the gesture contains more than one touch; the latter provides the location of a particular touch.

## Topics

### Configuring the gesture

- [direction](uiswipegesturerecognizer/direction-swift.property.md): The permitted direction of the swipe for this gesture recognizer.
- [numberOfTouchesRequired](uiswipegesturerecognizer/numberoftouchesrequired.md): The number of touches necessary for swipe recognition.
- [UISwipeGestureRecognizerDirection](uiswipegesturerecognizer/direction-swift.struct.md): The direction of the swipe.

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
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipangesturerecognizer](https://developer.apple.com/documentation/uikit/uipangesturerecognizer)

# UIPanGestureRecognizer (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A continuous gesture recognizer that interprets panning gestures.

## Declaration

```swift
@MainActor class UIPanGestureRecognizer
```

## Mentioned In

- [Handling pan gestures](handling-pan-gestures.md)

<a id="overview"></a>

## Overview

[UIPanGestureRecognizer](uipangesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).

Clients of this class can, in their action methods, query the [UIPanGestureRecognizer](uipangesturerecognizer.md) object for the current translation of the gesture ([translation(in:)](uipangesturerecognizer/translation%28in_%29.md)) and the velocity of the translation ([velocity(in:)](uipangesturerecognizer/velocity%28in_%29.md)). They can specify a view’s coordinate system to use for the translation and velocity values. Clients can also reset the translation to a desired value.

A panning gesture is continuous. The user must press one or more fingers on a view while panning it. The gesture begins ([UIGestureRecognizer.State.began](uigesturerecognizer/state-swift.enum/began.md)) when the user moves the minimum number of fingers allowed ([minimumNumberOfTouches](uipangesturerecognizer/minimumnumberoftouches.md)) enough distance for recognition as a pan. It changes ([UIGestureRecognizer.State.changed](uigesturerecognizer/state-swift.enum/changed.md)) when the user moves a finger while pressing with the minimum number of fingers. It ends ([UIGestureRecognizer.State.ended](uigesturerecognizer/state-swift.enum/ended.md)) when the user lifts all fingers.

## Topics

### Configuring the gesture recognizer

- [maximumNumberOfTouches](uipangesturerecognizer/maximumnumberoftouches.md): The maximum number of fingers that can touch the view for gesture recognition.
- [minimumNumberOfTouches](uipangesturerecognizer/minimumnumberoftouches.md): The minimum number of fingers that can touch the view for gesture recognition.

### Tracking the location and velocity of the gesture

- [translation(in:)](uipangesturerecognizer/translation%28in_%29.md): Interprets the pan gesture in the coordinate system of the specified view.
- [setTranslation(\_:in:)](uipangesturerecognizer/settranslation%28__in_%29.md): Sets the translation value in the coordinate system of the specified view.
- [velocity(in:)](uipangesturerecognizer/velocity%28in_%29.md): Interprets the velocity of the pan gesture in the coordinate system of the specified view.

### Tracking scroll events

- [allowedScrollTypesMask](uipangesturerecognizer/allowedscrolltypesmask.md): A scroll type mask that enables recognition of scroll events.
- [UIScrollTypeMask](uiscrolltypemask.md): A bit mask identifying the scroll type of a pan gesture.
- [UIScrollType](uiscrolltype.md): Constants that define the type of the scroll.

## Relationships

### Inherits From

- [UIGestureRecognizer](uigesturerecognizer.md)

### Inherited By

- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md)

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
- [UIPinchGestureRecognizer](uipinchgesturerecognizer.md): A continuous gesture recognizer that interprets pinching gestures involving two touches.
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

# UIPanGestureRecognizer (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A continuous gesture recognizer that interprets panning gestures.

## Declaration

```objectivec
@interface UIPanGestureRecognizer : UIGestureRecognizer
```

## Mentioned In

- [Handling pan gestures](handling-pan-gestures.md)

<a id="overview"></a>

## Overview

[UIPanGestureRecognizer](uipangesturerecognizer.md) is a concrete subclass of [UIGestureRecognizer](uigesturerecognizer.md).

Clients of this class can, in their action methods, query the [UIPanGestureRecognizer](uipangesturerecognizer.md) object for the current translation of the gesture ([translationInView:](uipangesturerecognizer/translation%28in_%29.md)) and the velocity of the translation ([velocityInView:](uipangesturerecognizer/velocity%28in_%29.md)). They can specify a view’s coordinate system to use for the translation and velocity values. Clients can also reset the translation to a desired value.

A panning gesture is continuous. The user must press one or more fingers on a view while panning it. The gesture begins ([UIGestureRecognizerStateBegan](uigesturerecognizer/state-swift.enum/began.md)) when the user moves the minimum number of fingers allowed ([minimumNumberOfTouches](uipangesturerecognizer/minimumnumberoftouches.md)) enough distance for recognition as a pan. It changes ([UIGestureRecognizerStateChanged](uigesturerecognizer/state-swift.enum/changed.md)) when the user moves a finger while pressing with the minimum number of fingers. It ends ([UIGestureRecognizerStateEnded](uigesturerecognizer/state-swift.enum/ended.md)) when the user lifts all fingers.

## Topics

### Configuring the gesture recognizer

- [maximumNumberOfTouches](uipangesturerecognizer/maximumnumberoftouches.md): The maximum number of fingers that can touch the view for gesture recognition.
- [minimumNumberOfTouches](uipangesturerecognizer/minimumnumberoftouches.md): The minimum number of fingers that can touch the view for gesture recognition.

### Tracking the location and velocity of the gesture

- [translationInView:](uipangesturerecognizer/translation%28in_%29.md): Interprets the pan gesture in the coordinate system of the specified view.
- [setTranslation:inView:](uipangesturerecognizer/settranslation%28__in_%29.md): Sets the translation value in the coordinate system of the specified view.
- [velocityInView:](uipangesturerecognizer/velocity%28in_%29.md): Interprets the velocity of the pan gesture in the coordinate system of the specified view.

### Tracking scroll events

- [allowedScrollTypesMask](uipangesturerecognizer/allowedscrolltypesmask.md): A scroll type mask that enables recognition of scroll events.
- [UIScrollTypeMask](uiscrolltypemask.md): A bit mask identifying the scroll type of a pan gesture.
- [UIScrollType](uiscrolltype.md): Constants that define the type of the scroll.

## Relationships

### Inherits From

- [UIGestureRecognizer](uigesturerecognizer.md)

### Inherited By

- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md)

## See Also

### Standard gestures

- [Handling UIKit gestures](handling-uikit-gestures.md): Use gesture recognizers to simplify touch handling and create a consistent user experience.
- [Coordinating multiple gesture recognizers](coordinating-multiple-gesture-recognizers.md): Discover how to use multiple gesture recognizers on the same view.
- [Adopting hover support for Apple Pencil](adopting-hover-support-for-apple-pencil.md): Enhance user feedback for your iPadOS app with a hover preview for Apple Pencil input.
- [Supporting gesture interaction in your apps](supporting-gesture-interaction-in-your-apps.md): Enrich your app’s user experience by supporting standard and custom gesture interaction.
- [UIHoverGestureRecognizer](uihovergesturerecognizer.md): A continuous gesture recognizer that interprets pointer movement over a view.
- [UILongPressGestureRecognizer](uilongpressgesturerecognizer.md): A continuous gesture recognizer that interprets long-press gestures.
- [UIPinchGestureRecognizer](uipinchgesturerecognizer.md): A continuous gesture recognizer that interprets pinching gestures involving two touches.
- [UIRotationGestureRecognizer](uirotationgesturerecognizer.md): A continuous gesture recognizer that interprets rotation gestures involving two touches.
- [UIScreenEdgePanGestureRecognizer](uiscreenedgepangesturerecognizer.md): A continuous gesture recognizer that interprets panning gestures that start near an edge of the screen.
- [UISwipeGestureRecognizer](uiswipegesturerecognizer.md): A discrete gesture recognizer that interprets swiping gestures in one or more directions.
- [UITapGestureRecognizer](uitapgesturerecognizer.md): A discrete gesture recognizer that interprets single or multiple taps.

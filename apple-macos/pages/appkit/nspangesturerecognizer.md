> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspangesturerecognizer](https://developer.apple.com/documentation/appkit/nspangesturerecognizer)

# NSPanGestureRecognizer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A continuous gesture recognizer for panning gestures.

## Declaration

```swift
class NSPanGestureRecognizer
```

<a id="overview"></a>

## Overview

The gesture is recognized when the user clicks all of specified buttons, drags the mouse, and releases one or more of the buttons. Use the pan gesture recognizer object to retrieve the distance traveled during the pan and the location of the mouse as it pans.

Upon creation, the gesture recognizer is configured to recognize pan gestures involving only the primary button. It also delays sending primary button events to the view by setting the [delaysPrimaryMouseButtonEvents](nsgesturerecognizer/delaysprimarymousebuttonevents.md) property to [true](https://developer.apple.com/documentation/swift/true). To change the set of buttons to track, modify the [buttonMask](nspangesturerecognizer/buttonmask.md) property.

In this gesture recognizer, the [location(in:)](nsgesturerecognizer/location%28in_%29.md) method always reports the current mouse point, which changes as the user drags the mouse.

## Topics

### Configuring the gesture recognizer

- [buttonMask](nspangesturerecognizer/buttonmask.md): A bit mask of the button (or buttons) required to recognize this gesture.

### Setting the number of touches

- [maximumNumberOfTouches](nspangesturerecognizer/maximumnumberoftouches.md): The maximum number of touches allowed to recognize this gesture
- [minimumNumberOfTouches](nspangesturerecognizer/minimumnumberoftouches.md): The minimum number of touches needed to recognize this gesture

### Tracking the location and velocity of the gesture

- [translation(in:)](nspangesturerecognizer/translation%28in_%29.md): The distance traveled by the mouse during the gesture.
- [setTranslation(\_:in:)](nspangesturerecognizer/settranslation%28__in_%29.md): Changes the current translation value of the gesture recognizer.
- [velocity(in:)](nspangesturerecognizer/velocity%28in_%29.md): The velocity of the pan, measured in points per second.

### Deprecated

- [numberOfTouchesRequired](nspangesturerecognizer/numberoftouchesrequired.md): Deprecated. The number of necessary touches on a Touch Bar for the gesture recognizer to match.

## Relationships

### Inherits From

- [NSGestureRecognizer](nsgesturerecognizer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Standard Gestures

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md): A discrete gesture recognizer that tracks a specified number of mouse clicks.
- [NSPressGestureRecognizer](nspressgesturerecognizer.md): A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md): A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md): A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

# NSPanGestureRecognizer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A continuous gesture recognizer for panning gestures.

## Declaration

```objectivec
@interface NSPanGestureRecognizer : NSGestureRecognizer
```

<a id="overview"></a>

## Overview

The gesture is recognized when the user clicks all of specified buttons, drags the mouse, and releases one or more of the buttons. Use the pan gesture recognizer object to retrieve the distance traveled during the pan and the location of the mouse as it pans.

Upon creation, the gesture recognizer is configured to recognize pan gestures involving only the primary button. It also delays sending primary button events to the view by setting the [delaysPrimaryMouseButtonEvents](nsgesturerecognizer/delaysprimarymousebuttonevents.md) property to [true](https://developer.apple.com/documentation/swift/true). To change the set of buttons to track, modify the [buttonMask](nspangesturerecognizer/buttonmask.md) property.

In this gesture recognizer, the [locationInView:](nsgesturerecognizer/location%28in_%29.md) method always reports the current mouse point, which changes as the user drags the mouse.

## Topics

### Configuring the gesture recognizer

- [buttonMask](nspangesturerecognizer/buttonmask.md): A bit mask of the button (or buttons) required to recognize this gesture.

### Setting the number of touches

- [maximumNumberOfTouches](nspangesturerecognizer/maximumnumberoftouches.md): The maximum number of touches allowed to recognize this gesture
- [minimumNumberOfTouches](nspangesturerecognizer/minimumnumberoftouches.md): The minimum number of touches needed to recognize this gesture

### Tracking the location and velocity of the gesture

- [translationInView:](nspangesturerecognizer/translation%28in_%29.md): The distance traveled by the mouse during the gesture.
- [setTranslation:inView:](nspangesturerecognizer/settranslation%28__in_%29.md): Changes the current translation value of the gesture recognizer.
- [velocityInView:](nspangesturerecognizer/velocity%28in_%29.md): The velocity of the pan, measured in points per second.

### Deprecated

- [numberOfTouchesRequired](nspangesturerecognizer/numberoftouchesrequired.md): Deprecated. The number of necessary touches on a Touch Bar for the gesture recognizer to match.

## Relationships

### Inherits From

- [NSGestureRecognizer](nsgesturerecognizer.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Standard Gestures

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md): A discrete gesture recognizer that tracks a specified number of mouse clicks.
- [NSPressGestureRecognizer](nspressgesturerecognizer.md): A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md): A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md): A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

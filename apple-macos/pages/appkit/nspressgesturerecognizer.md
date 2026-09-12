> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspressgesturerecognizer](https://developer.apple.com/documentation/appkit/nspressgesturerecognizer)

# NSPressGestureRecognizer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.

## Declaration

```swift
class NSPressGestureRecognizer
```

<a id="overview"></a>

## Overview

Use a press gesture recognizer to configure which button the user must hold and the length of time they must hold it. You can also specify how far the mouse can move for a valid gesture.

Upon creation, the gesture recognizer recognizes press gestures involving only the primary button. It also delays sending primary button events to the view by setting the [delaysPrimaryMouseButtonEvents](nsgesturerecognizer/delaysprimarymousebuttonevents.md) property to [true](https://developer.apple.com/documentation/swift/true). To change the set of buttons to track, modify the [buttonMask](nspressgesturerecognizer/buttonmask.md) property.

## Topics

### Configuring the gesture recognizer

- [allowableMovement](nspressgesturerecognizer/allowablemovement.md): The maximum movement of the mouse in the view before the gesture fails.
- [buttonMask](nspressgesturerecognizer/buttonmask.md): A bit mask of the buttons required to recognize this press.
- [minimumPressDuration](nspressgesturerecognizer/minimumpressduration.md): The minimum time (in seconds) that the user must hold the mouse button in the view for a valid gesture.
- [numberOfTouchesRequired](nspressgesturerecognizer/numberoftouchesrequired.md): The number of necessary touches on a Touch Bar for the gesture recognizer to match.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Standard Gestures

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md): A discrete gesture recognizer that tracks a specified number of mouse clicks.
- [NSPanGestureRecognizer](nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md): A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md): A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

# NSPressGestureRecognizer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.

## Declaration

```objectivec
@interface NSPressGestureRecognizer : NSGestureRecognizer
```

<a id="overview"></a>

## Overview

Use a press gesture recognizer to configure which button the user must hold and the length of time they must hold it. You can also specify how far the mouse can move for a valid gesture.

Upon creation, the gesture recognizer recognizes press gestures involving only the primary button. It also delays sending primary button events to the view by setting the [delaysPrimaryMouseButtonEvents](nsgesturerecognizer/delaysprimarymousebuttonevents.md) property to [true](https://developer.apple.com/documentation/swift/true). To change the set of buttons to track, modify the [buttonMask](nspressgesturerecognizer/buttonmask.md) property.

## Topics

### Configuring the gesture recognizer

- [allowableMovement](nspressgesturerecognizer/allowablemovement.md): The maximum movement of the mouse in the view before the gesture fails.
- [buttonMask](nspressgesturerecognizer/buttonmask.md): A bit mask of the buttons required to recognize this press.
- [minimumPressDuration](nspressgesturerecognizer/minimumpressduration.md): The minimum time (in seconds) that the user must hold the mouse button in the view for a valid gesture.
- [numberOfTouchesRequired](nspressgesturerecognizer/numberoftouchesrequired.md): The number of necessary touches on a Touch Bar for the gesture recognizer to match.

## Relationships

### Inherits From

- [NSGestureRecognizer](nsgesturerecognizer.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Standard Gestures

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md): A discrete gesture recognizer that tracks a specified number of mouse clicks.
- [NSPanGestureRecognizer](nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md): A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md): A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

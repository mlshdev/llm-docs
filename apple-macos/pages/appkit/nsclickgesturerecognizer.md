> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsclickgesturerecognizer](https://developer.apple.com/documentation/appkit/nsclickgesturerecognizer)

# NSClickGestureRecognizer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A discrete gesture recognizer that tracks a specified number of mouse clicks.

## Declaration

```swift
class NSClickGestureRecognizer
```

<a id="overview"></a>

## Overview

When configuring this gesture recognizer, you can specify which mouse buttons must be clicked and how many clicks must occur before the action method is called. The user must click the specified mouse button the required number of times without dragging the mouse for the gesture to be recognized.

The gesture recognizer automatically sets the values of the [delaysPrimaryMouseButtonEvents](nsgesturerecognizer/delaysprimarymousebuttonevents.md), [delaysSecondaryMouseButtonEvents](nsgesturerecognizer/delayssecondarymousebuttonevents.md), and [delaysOtherMouseButtonEvents](nsgesturerecognizer/delaysothermousebuttonevents.md) properties to [true](https://developer.apple.com/documentation/swift/true) for each button in the [buttonMask](nsclickgesturerecognizer/buttonmask.md) property.

## Topics

### Configuring the Gesture

- [buttonMask](nsclickgesturerecognizer/buttonmask.md): A bit mask of the button (or buttons) required to recognize this click.
- [numberOfClicksRequired](nsclickgesturerecognizer/numberofclicksrequired.md): The number of clicks required to match.
- [numberOfTouchesRequired](nsclickgesturerecognizer/numberoftouchesrequired.md): The number of touches required in an [NSTouchBar](nstouchbar.md) object for the gesture recognizer to match.

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

- [NSPressGestureRecognizer](nspressgesturerecognizer.md): A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.
- [NSPanGestureRecognizer](nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md): A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md): A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

# NSClickGestureRecognizer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A discrete gesture recognizer that tracks a specified number of mouse clicks.

## Declaration

```objectivec
@interface NSClickGestureRecognizer : NSGestureRecognizer
```

<a id="overview"></a>

## Overview

When configuring this gesture recognizer, you can specify which mouse buttons must be clicked and how many clicks must occur before the action method is called. The user must click the specified mouse button the required number of times without dragging the mouse for the gesture to be recognized.

The gesture recognizer automatically sets the values of the [delaysPrimaryMouseButtonEvents](nsgesturerecognizer/delaysprimarymousebuttonevents.md), [delaysSecondaryMouseButtonEvents](nsgesturerecognizer/delayssecondarymousebuttonevents.md), and [delaysOtherMouseButtonEvents](nsgesturerecognizer/delaysothermousebuttonevents.md) properties to [true](https://developer.apple.com/documentation/swift/true) for each button in the [buttonMask](nsclickgesturerecognizer/buttonmask.md) property.

## Topics

### Configuring the Gesture

- [buttonMask](nsclickgesturerecognizer/buttonmask.md): A bit mask of the button (or buttons) required to recognize this click.
- [numberOfClicksRequired](nsclickgesturerecognizer/numberofclicksrequired.md): The number of clicks required to match.
- [numberOfTouchesRequired](nsclickgesturerecognizer/numberoftouchesrequired.md): The number of touches required in an [NSTouchBar](nstouchbar.md) object for the gesture recognizer to match.

## Relationships

### Inherits From

- [NSGestureRecognizer](nsgesturerecognizer.md)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Standard Gestures

- [NSPressGestureRecognizer](nspressgesturerecognizer.md): A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.
- [NSPanGestureRecognizer](nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md): A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md): A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

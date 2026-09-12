> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmagnificationgesturerecognizer](https://developer.apple.com/documentation/appkit/nsmagnificationgesturerecognizer)

# NSMagnificationGestureRecognizer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

## Declaration

```swift
class NSMagnificationGestureRecognizer
```

<a id="overview"></a>

## Overview

This object tracks pinch gestures on a track pad or other input device and stores the resulting magnification value for you to use in your code.

This gesture recognizer automatically sets the value of the [delaysMagnificationEvents](nsgesturerecognizer/delaysmagnificationevents.md) property to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Finding the Magnification Factor

- [magnification](nsmagnificationgesturerecognizer/magnification.md): The amount of magnification to apply.

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
- [NSPressGestureRecognizer](nspressgesturerecognizer.md): A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.
- [NSPanGestureRecognizer](nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md): A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.

# NSMagnificationGestureRecognizer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

## Declaration

```objectivec
@interface NSMagnificationGestureRecognizer : NSGestureRecognizer
```

<a id="overview"></a>

## Overview

This object tracks pinch gestures on a track pad or other input device and stores the resulting magnification value for you to use in your code.

This gesture recognizer automatically sets the value of the [delaysMagnificationEvents](nsgesturerecognizer/delaysmagnificationevents.md) property to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Finding the Magnification Factor

- [magnification](nsmagnificationgesturerecognizer/magnification.md): The amount of magnification to apply.

## Relationships

### Inherits From

- [NSGestureRecognizer](nsgesturerecognizer.md)

## See Also

### Standard Gestures

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md): A discrete gesture recognizer that tracks a specified number of mouse clicks.
- [NSPressGestureRecognizer](nspressgesturerecognizer.md): A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.
- [NSPanGestureRecognizer](nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.
- [NSRotationGestureRecognizer](nsrotationgesturerecognizer.md): A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrotationgesturerecognizer](https://developer.apple.com/documentation/appkit/nsrotationgesturerecognizer)

# NSRotationGestureRecognizer (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.

## Declaration

```swift
class NSRotationGestureRecognizer
```

<a id="overview"></a>

## Overview

This rotation gesture implies that the underlying view should rotate in a matching direction. The gesture is recognized when the trackpad touches end.

Upon creation, the gesture recognizer sets the value of the [delaysRotationEvents](nsgesturerecognizer/delaysrotationevents.md) property to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Interpreting the gesture

- [rotation](nsrotationgesturerecognizer/rotation.md): The rotation of the gesture in radians.
- [rotationInDegrees](nsrotationgesturerecognizer/rotationindegrees.md): The rotation of the gesture in degrees.

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
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md): A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

# NSRotationGestureRecognizer (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A continuous gesture recognizer that tracks two trackpad touches moving opposite each other in a circular motion.

## Declaration

```objectivec
@interface NSRotationGestureRecognizer : NSGestureRecognizer
```

<a id="overview"></a>

## Overview

This rotation gesture implies that the underlying view should rotate in a matching direction. The gesture is recognized when the trackpad touches end.

Upon creation, the gesture recognizer sets the value of the [delaysRotationEvents](nsgesturerecognizer/delaysrotationevents.md) property to [true](https://developer.apple.com/documentation/swift/true).

## Topics

### Interpreting the gesture

- [rotation](nsrotationgesturerecognizer/rotation.md): The rotation of the gesture in radians.
- [rotationInDegrees](nsrotationgesturerecognizer/rotationindegrees.md): The rotation of the gesture in degrees.

## Relationships

### Inherits From

- [NSGestureRecognizer](nsgesturerecognizer.md)

## See Also

### Standard Gestures

- [NSClickGestureRecognizer](nsclickgesturerecognizer.md): A discrete gesture recognizer that tracks a specified number of mouse clicks.
- [NSPressGestureRecognizer](nspressgesturerecognizer.md): A discrete gesture recognizer that tracks whether the user holds down a mouse button for a minimum amount of time before releasing it.
- [NSPanGestureRecognizer](nspangesturerecognizer.md): A continuous gesture recognizer for panning gestures.
- [NSMagnificationGestureRecognizer](nsmagnificationgesturerecognizer.md): A continuous gesture recognizer that tracks a pinch gesture that magnifies content.

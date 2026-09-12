> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entityrotationgesturerecognizer](https://developer.apple.com/documentation/realitykit/entityrotationgesturerecognizer)

# EntityRotationGestureRecognizer

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

A gesture recognizer that uses rotation gestures involving two touches to rotate a given entity.

## Declaration

```swift
@MainActor @objc @preconcurrency class EntityRotationGestureRecognizer
```

## Topics

### Creating a recognizer

- [init(target:action:)](entityrotationgesturerecognizer/init%28target_action_%29.md)

### Using the recognizer

- [entity](entityrotationgesturerecognizer/entity.md): The entity the receiver is associated with
- [canPrevent(\_:)](entityrotationgesturerecognizer/canprevent%28__%29.md)
- [touchesBegan(\_:with:)](entityrotationgesturerecognizer/touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down on the associated entity.

## Relationships

### Inherits From

- [UIRotationGestureRecognizer](../uikit/uirotationgesturerecognizer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [EntityGestureRecognizer](entitygesturerecognizer.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### UIKit and AppKit gestures

- [ARView.EntityGestures](arview/entitygestures.md): The set of possible entity gesture recognizers.
- [EntityScaleGestureRecognizer](entityscalegesturerecognizer.md): A gesture recognizer that uses a pinch gesture to scale or zoom an entity.
- [EntityTranslationGestureRecognizer](entitytranslationgesturerecognizer.md): A gesture recognizer that uses a pan gesture to move an entity.
- [EntityGestureRecognizer](entitygesturerecognizer.md): A gesture recognizer that works on entities.

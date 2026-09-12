> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitygesturerecognizer](https://developer.apple.com/documentation/realitykit/entitygesturerecognizer)

# EntityGestureRecognizer

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

A gesture recognizer that works on entities.

## Declaration

```swift
protocol EntityGestureRecognizer : UIGestureRecognizer
```

## Topics

### Using the gesture recognizer

- [entity](entitygesturerecognizer/entity.md): The entity the receiver is associated with
- [location(in:)](entitygesturerecognizer/location%28in_%29.md): Returns the unprojected location of the gesture represented by the receiver in the space of the given entity.

## Relationships

### Inherits From

- [UIGestureRecognizer](../uikit/uigesturerecognizer.md)

### Conforming Types

- [EntityRotationGestureRecognizer](entityrotationgesturerecognizer.md)
- [EntityScaleGestureRecognizer](entityscalegesturerecognizer.md)
- [EntityTranslationGestureRecognizer](entitytranslationgesturerecognizer.md)

## See Also

### UIKit and AppKit gestures

- [ARView.EntityGestures](arview/entitygestures.md): The set of possible entity gesture recognizers.
- [EntityRotationGestureRecognizer](entityrotationgesturerecognizer.md): A gesture recognizer that uses rotation gestures involving two touches to rotate a given entity.
- [EntityScaleGestureRecognizer](entityscalegesturerecognizer.md): A gesture recognizer that uses a pinch gesture to scale or zoom an entity.
- [EntityTranslationGestureRecognizer](entitytranslationgesturerecognizer.md): A gesture recognizer that uses a pan gesture to move an entity.

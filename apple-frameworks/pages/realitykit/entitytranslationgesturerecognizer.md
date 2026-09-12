> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitytranslationgesturerecognizer](https://developer.apple.com/documentation/realitykit/entitytranslationgesturerecognizer)

# EntityTranslationGestureRecognizer

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+

A gesture recognizer that uses a pan gesture to move an entity.

## Declaration

```swift
@MainActor @objc @preconcurrency class EntityTranslationGestureRecognizer
```

<a id="overview"></a>

## Overview

A gesture recognizer that handles pan and dragging gestures on an entity.

## Topics

### Creating a recognizer

- [init(target:action:)](entitytranslationgesturerecognizer/init%28target_action_%29.md)

### Using the recognizer

- [entity](entitytranslationgesturerecognizer/entity.md): The entity the receiver is associated with
- [canPrevent(\_:)](entitytranslationgesturerecognizer/canprevent%28__%29.md)
- [location(in:)](entitytranslationgesturerecognizer/location%28in_%29.md): Returns the unprojected location of the gesture represented by the receiver in the space of the given entity.
- [reset()](entitytranslationgesturerecognizer/reset%28%29.md): Overridden to reset internal state when a gesture recognition attempt completes.
- [setTranslation(\_:in:)](entitytranslationgesturerecognizer/settranslation%28__in_%29.md): Sets the translation of the receiver in the entity’s coordinate space
- [touchesBegan(\_:with:)](entitytranslationgesturerecognizer/touchesbegan%28__with_%29.md): Sent to the gesture recognizer when one or more fingers touch down on the associated entity.
- [touchesCancelled(\_:with:)](entitytranslationgesturerecognizer/touchescancelled%28__with_%29.md): Sent to the gesture recognizer when a system event (such as an incoming phone call) cancels a touch event.
- [touchesEnded(\_:with:)](entitytranslationgesturerecognizer/touchesended%28__with_%29.md): Sent to the gesture recognizer when one or more fingers lift from the associated view.
- [touchesMoved(\_:with:)](entitytranslationgesturerecognizer/touchesmoved%28__with_%29.md): Sent to the gesture recognizer when one or more fingers move in the associated view.
- [translation(in:)](entitytranslationgesturerecognizer/translation%28in_%29.md): The translation of the gesture in the space of the specified entity.
- [velocity(in:)](entitytranslationgesturerecognizer/velocity%28in_%29.md): The velocity of the translation gesture in the space of the specified entity.

## Relationships

### Inherits From

- [UIGestureRecognizer](../uikit/uigesturerecognizer.md)

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
- [EntityRotationGestureRecognizer](entityrotationgesturerecognizer.md): A gesture recognizer that uses rotation gestures involving two touches to rotate a given entity.
- [EntityScaleGestureRecognizer](entityscalegesturerecognizer.md): A gesture recognizer that uses a pinch gesture to scale or zoom an entity.
- [EntityGestureRecognizer](entitygesturerecognizer.md): A gesture recognizer that works on entities.

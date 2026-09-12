> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton3d](https://developer.apple.com/documentation/arkit/arskeleton3d)

# ARSkeleton3D (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The skeleton of a human body that ARKit tracks in 3D space.

## Declaration

```swift
class ARSkeleton3D
```

<a id="overview"></a>

## Overview

An [ARBodyAnchor](arbodyanchor.md) contains one instance of this [ARSkeleton](arskeleton.md) subclass to provide its joint positions in 3D space. The [jointLocalTransforms](arskeleton3d/jointlocaltransforms-1m5a1.md) property describes a joint’s 3D offset from its parent joint. The [jointModelTransforms](arskeleton3d/jointmodeltransforms-dno4.md) property describes a joint’s 3D offset from the body anchor’s [transform](aranchor/transform.md).

## Topics

### Getting a Joint’s Pose

- [jointLocalTransforms](arskeleton3d/jointlocaltransforms-66gbm.md): The local space transforms for each joint.
- [jointModelTransforms](arskeleton3d/jointmodeltransforms-i6yu.md): The model space transforms for each joint.
- [localTransform(for:)](arskeleton3d/localtransform%28for_%29.md): Returns the local transform for a joint with a given name.
- [modelTransform(for:)](arskeleton3d/modeltransform%28for_%29.md): Returns the model transform for a joint with a given name.

## Relationships

### Inherits From

- [ARSkeleton](arskeleton.md)

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

### Body Data

- [Capturing Body Motion in 3D](capturing-body-motion-in-3d.md): Track a person in the physical environment and visualize their motion by applying the same body movements to a virtual character.
- [ARBody2D](arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [ARSkeleton2D](arskeleton2d.md): An object that describes the locations of a body’s joints in the camera feed.
- [ARSkeleton](arskeleton.md): The interface for the skeleton of a tracked body.
- [ARSkeletonDefinition](arskeletondefinition.md): The hierarchy of joints and their names.

# ARSkeleton3D (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The skeleton of a human body that ARKit tracks in 3D space.

## Declaration

```objectivec
@interface ARSkeleton3D : ARSkeleton
```

<a id="overview"></a>

## Overview

An [ARBodyAnchor](arbodyanchor.md) contains one instance of this [ARSkeleton](arskeleton.md) subclass to provide its joint positions in 3D space. The [jointLocalTransforms](arskeleton3d/jointlocaltransforms-1m5a1.md) property describes a joint’s 3D offset from its parent joint. The [jointModelTransforms](arskeleton3d/jointmodeltransforms-dno4.md) property describes a joint’s 3D offset from the body anchor’s [transform](aranchor/transform.md).

## Topics

### Getting a Joint’s Pose

- [jointLocalTransforms](arskeleton3d/jointlocaltransforms-1m5a1.md): The local space transforms for each joint.
- [jointModelTransforms](arskeleton3d/jointmodeltransforms-dno4.md): The model space transforms for each joint.
- [localTransformForJointName:](arskeleton3d/localtransformforjointname_.md): Returns the local transform for a joint with a given name.
- [modelTransformForJointName:](arskeleton3d/modeltransformforjointname_.md): Returns the model transform for a joint with a given name.

## Relationships

### Inherits From

- [ARSkeleton](arskeleton.md)

## See Also

### Body Data

- [Capturing Body Motion in 3D](capturing-body-motion-in-3d.md): Track a person in the physical environment and visualize their motion by applying the same body movements to a virtual character.
- [ARBody2D](arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [ARSkeleton2D](arskeleton2d.md): An object that describes the locations of a body’s joints in the camera feed.
- [ARSkeleton](arskeleton.md): The interface for the skeleton of a tracked body.
- [ARSkeletonDefinition](arskeletondefinition.md): The hierarchy of joints and their names.

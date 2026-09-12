> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton](https://developer.apple.com/documentation/arkit/arskeleton)

# ARSkeleton (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The interface for the skeleton of a tracked body.

## Declaration

```swift
class ARSkeleton
```

<a id="overview"></a>

## Overview

As a collection of joints, this protocol describes the state of a human body whose movements ARKit can track.

The [ARSkeleton3D](arskeleton3d.md) subclass provides you with the position of a tracked body’s joints in 3D space, specifically with its [jointLocalTransforms](arskeleton3d/jointlocaltransforms-1m5a1.md) and [jointModelTransforms](arskeleton3d/jointmodeltransforms-dno4.md) properties.

The [ARSkeleton2D](arskeleton2d.md) subclass provides you with the position of a tracked body’s joints in 2D space, by way of its [jointLandmarks](arskeleton2d/jointlandmarks-3en0x.md) property.

## Topics

### Getting Joint Information

- [definition](arskeleton/definition.md): The particular configuration of joints that define a body’s current state.
- [isJointTracked(\_:)](arskeleton/isjointtracked%28__%29.md): Tells you whether ARKit tracks a joint at a particular index.
- [ARSkeleton.JointName](arskeleton/jointname.md): A name identifier for a joint.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ARSkeleton2D](arskeleton2d.md)
- [ARSkeleton3D](arskeleton3d.md)

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
- [ARSkeleton3D](arskeleton3d.md): The skeleton of a human body that ARKit tracks in 3D space.
- [ARSkeleton2D](arskeleton2d.md): An object that describes the locations of a body’s joints in the camera feed.
- [ARSkeletonDefinition](arskeletondefinition.md): The hierarchy of joints and their names.

# ARSkeleton (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The interface for the skeleton of a tracked body.

## Declaration

```objectivec
@interface ARSkeleton : NSObject
```

<a id="overview"></a>

## Overview

As a collection of joints, this protocol describes the state of a human body whose movements ARKit can track.

The [ARSkeleton3D](arskeleton3d.md) subclass provides you with the position of a tracked body’s joints in 3D space, specifically with its [jointLocalTransforms](arskeleton3d/jointlocaltransforms-1m5a1.md) and [jointModelTransforms](arskeleton3d/jointmodeltransforms-dno4.md) properties.

The [ARSkeleton2D](arskeleton2d.md) subclass provides you with the position of a tracked body’s joints in 2D space, by way of its [jointLandmarks](arskeleton2d/jointlandmarks-3en0x.md) property.

## Topics

### Getting Joint Information

- [definition](arskeleton/definition.md): The particular configuration of joints that define a body’s current state.
- [jointCount](arskeleton/jointcount.md): The skeleton’s total number of joints.
- [isJointTracked:](arskeleton/isjointtracked%28__%29.md): Tells you whether ARKit tracks a joint at a particular index.
- [ARSkeletonJointName](arskeleton/jointname.md): A name identifier for a joint.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ARSkeleton2D](arskeleton2d.md)
- [ARSkeleton3D](arskeleton3d.md)

## See Also

### Body Data

- [Capturing Body Motion in 3D](capturing-body-motion-in-3d.md): Track a person in the physical environment and visualize their motion by applying the same body movements to a virtual character.
- [ARBody2D](arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [ARSkeleton3D](arskeleton3d.md): The skeleton of a human body that ARKit tracks in 3D space.
- [ARSkeleton2D](arskeleton2d.md): An object that describes the locations of a body’s joints in the camera feed.
- [ARSkeletonDefinition](arskeletondefinition.md): The hierarchy of joints and their names.

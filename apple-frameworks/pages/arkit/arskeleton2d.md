> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeleton2d](https://developer.apple.com/documentation/arkit/arskeleton2d)

# ARSkeleton2D (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object that describes the locations of a body’s joints in the camera feed.

## Declaration

```swift
class ARSkeleton2D
```

<a id="overview"></a>

## Overview

[ARSkeleton2D](arskeleton2d.md) provides you with a 2D body’s joints in a flat hierarchy so you can access them efficiently. The joint locations are normalized within the range \[0..1\] in the coordinate space of the current frame’s camera image, where 0 is the upper left, and 1 is the bottom right.

To access a skeleton’s joints by name, you use [landmarkForJointNamed:](arskeleton2d/landmarkforjointnamed_.md). To access a named joint by index (for example, for performance reasons), you query the definition for the named joint index using [index(for:)](arskeletondefinition/index%28for_%29.md), then access [jointLandmarks](arskeleton2d/jointlandmarks-12vkw.md) using the resulting index.

## Topics

### Getting Joint Landmarks

- [jointLandmarks](arskeleton2d/jointlandmarks-12vkw.md): The joint landmarks in normalized coordinates.
- [landmark(for:)](arskeleton2d/landmark%28for_%29.md): Returns the location of a joint with a given name.

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
- [ARSkeleton3D](arskeleton3d.md): The skeleton of a human body that ARKit tracks in 3D space.
- [ARSkeleton](arskeleton.md): The interface for the skeleton of a tracked body.
- [ARSkeletonDefinition](arskeletondefinition.md): The hierarchy of joints and their names.

# ARSkeleton2D (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object that describes the locations of a body’s joints in the camera feed.

## Declaration

```objectivec
@interface ARSkeleton2D : ARSkeleton
```

<a id="overview"></a>

## Overview

[ARSkeleton2D](arskeleton2d.md) provides you with a 2D body’s joints in a flat hierarchy so you can access them efficiently. The joint locations are normalized within the range \[0..1\] in the coordinate space of the current frame’s camera image, where 0 is the upper left, and 1 is the bottom right.

To access a skeleton’s joints by name, you use [landmarkForJointNamed:](arskeleton2d/landmarkforjointnamed_.md). To access a named joint by index (for example, for performance reasons), you query the definition for the named joint index using [index(for:)](arskeletondefinition/index%28for_%29.md), then access [jointLandmarks](arskeleton2d/jointlandmarks-12vkw.md) using the resulting index.

## Topics

### Getting Joint Landmarks

- [jointLandmarks](arskeleton2d/jointlandmarks-3en0x.md): The joint landmarks in normalized coordinates.
- [landmarkForJointNamed:](arskeleton2d/landmarkforjointnamed_.md): Returns the location of a joint with a given name.

## Relationships

### Inherits From

- [ARSkeleton](arskeleton.md)

## See Also

### Body Data

- [Capturing Body Motion in 3D](capturing-body-motion-in-3d.md): Track a person in the physical environment and visualize their motion by applying the same body movements to a virtual character.
- [ARBody2D](arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [ARSkeleton3D](arskeleton3d.md): The skeleton of a human body that ARKit tracks in 3D space.
- [ARSkeleton](arskeleton.md): The interface for the skeleton of a tracked body.
- [ARSkeletonDefinition](arskeletondefinition.md): The hierarchy of joints and their names.

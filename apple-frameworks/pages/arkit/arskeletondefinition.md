> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskeletondefinition](https://developer.apple.com/documentation/arkit/arskeletondefinition)

# ARSkeletonDefinition (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The hierarchy of joints and their names.

## Declaration

```swift
class ARSkeletonDefinition
```

<a id="overview"></a>

## Overview

A skeleton definition establishes the relationship of joints that make up a 3D or 2D body’s [skeleton](arbody2d/skeleton.md), in which joints connect to other joints to compose a single skeleton in a parent-child hierarchy. Use [parentIndices](arskeletondefinition/parentindices-82iw2.md) to identify the hierarchy for a given skeleton definition.

ARKit names particular joints that are crucial to body tracking. You can access named joints by calling [indexForJointName:](arskeletondefinition/indexforjointname_.md) and passing in one of the available [jointNames](arskeletondefinition/jointnames.md) identifiers.

## Topics

### Locating in the Physical Environment

- [neutralBodySkeleton3D](arskeletondefinition/neutralbodyskeleton3d.md): The 3D skeleton in neutral pose.
- [defaultBody3D](arskeletondefinition/defaultbody3d.md): The default skeleton definition for bodies defined in 3D.

### Locating in Screen Space

- [defaultBody2D](arskeletondefinition/defaultbody2d.md): The default skeleton definition for bodies defined in 2D.

### Getting Joint Information

- [jointNames](arskeletondefinition/jointnames.md): A collection of unique joint names.
- [jointCount](arskeletondefinition/jointcount.md): The skeleton’s total number of joints.
- [index(for:)](arskeletondefinition/index%28for_%29.md): Returns the index for a given joint identifier.
- [parentIndices](arskeletondefinition/parentindices-u2u9.md): The parent index for each joint.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [ARSkeleton](arskeleton.md): The interface for the skeleton of a tracked body.

# ARSkeletonDefinition (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The hierarchy of joints and their names.

## Declaration

```objectivec
@interface ARSkeletonDefinition : NSObject
```

<a id="overview"></a>

## Overview

A skeleton definition establishes the relationship of joints that make up a 3D or 2D body’s [skeleton](arbody2d/skeleton.md), in which joints connect to other joints to compose a single skeleton in a parent-child hierarchy. Use [parentIndices](arskeletondefinition/parentindices-82iw2.md) to identify the hierarchy for a given skeleton definition.

ARKit names particular joints that are crucial to body tracking. You can access named joints by calling [indexForJointName:](arskeletondefinition/indexforjointname_.md) and passing in one of the available [jointNames](arskeletondefinition/jointnames.md) identifiers.

## Topics

### Locating in the Physical Environment

- [neutralBodySkeleton3D](arskeletondefinition/neutralbodyskeleton3d.md): The 3D skeleton in neutral pose.
- [defaultBody3DSkeletonDefinition](arskeletondefinition/defaultbody3d.md): The default skeleton definition for bodies defined in 3D.

### Locating in Screen Space

- [defaultBody2DSkeletonDefinition](arskeletondefinition/defaultbody2d.md): The default skeleton definition for bodies defined in 2D.

### Getting Joint Information

- [jointNames](arskeletondefinition/jointnames.md): A collection of unique joint names.
- [jointCount](arskeletondefinition/jointcount.md): The skeleton’s total number of joints.
- [indexForJointName:](arskeletondefinition/indexforjointname_.md): Returns the index for a given joint identifier.
- [parentIndices](arskeletondefinition/parentindices-82iw2.md): The parent index for each joint.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Body Data

- [Capturing Body Motion in 3D](capturing-body-motion-in-3d.md): Track a person in the physical environment and visualize their motion by applying the same body movements to a virtual character.
- [ARBody2D](arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [ARSkeleton3D](arskeleton3d.md): The skeleton of a human body that ARKit tracks in 3D space.
- [ARSkeleton2D](arskeleton2d.md): An object that describes the locations of a body’s joints in the camera feed.
- [ARSkeleton](arskeleton.md): The interface for the skeleton of a tracked body.

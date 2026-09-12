> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arbodyanchor](https://developer.apple.com/documentation/arkit/arbodyanchor)

# ARBodyAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An anchor that tracks the position and movement of a human body in the rear-facing camera.

## Declaration

```swift
class ARBodyAnchor
```

<a id="overview"></a>

## Overview

This [ARAnchor](aranchor.md) subclass tracks the movement of a single person. You enable body tracking by running your session using [ARBodyTrackingConfiguration](arbodytrackingconfiguration.md).

When ARKit recognizes a person in the back camera feed, it calls your delegate’s [session(\_:didAdd:)](arsessiondelegate/session%28__didadd_%29.md) function with [ARBodyAnchor](arbodyanchor.md). A body anchor’s [transform](aranchor/transform.md) position defines the world position of the body’s hip joint.

You can also check within the frame’s [anchors](arframe/anchors.md) for a body that ARKit is tracking.

<a id="Place-a-Skeleton-on-a-Surface"></a>

### Place a Skeleton on a Surface

Because a body anchor’s origin maps to the hip joint, you calculate the current offset of the feet to the hip to place the body’s skeleton on a surface. By passing the foot joint index to [jointModelTransforms](arskeleton3d/jointmodeltransforms-dno4.md), you get the foot’s offset from skeleton’s origin.

```swift
static var hipToFootOffset: Float {
    // Get an index for a foot. 
    let footIndex = ARSkeletonDefinition.defaultBody3D.index(forJointName: .leftFoot)
    // Get the foot's world-space offset from the hip. 
    let footTransform = ARSkeletonDefinition.defaultBody3D.neutralBodySkeleton3D!.jointModelTransforms[footIndex]
    // Return the height by getting just the y-value. 
    let distanceFromHipOnY = abs(footTransform.columns.3.y) 
    return distanceFromHipOnY
}
```

## Topics

### Interpreting 3D Motion

- [skeleton](arbodyanchor/skeleton.md): The tracked body in 3D.

### Getting Scale Information

- [estimatedScaleFactor](arbodyanchor/estimatedscalefactor.md): A factor that relates the body’s default height with the height ARKit estimates at runtime.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [ARTrackable](artrackable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Body Position Tracking

- [Capturing Body Motion in 3D](capturing-body-motion-in-3d.md): Track a person in the physical environment and visualize their motion by applying the same body movements to a virtual character.
- [Rigging a Model for Motion Capture](rigging-a-model-for-motion-capture.md): Configure custom 3D models so ARKit’s human body-tracking feature can control them.
- [Validating a Model for Motion Capture](validating-a-model-for-motion-capture.md): Verify that your character model matches ARKit’s Motion Capture requirements.

# ARBodyAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An anchor that tracks the position and movement of a human body in the rear-facing camera.

## Declaration

```objectivec
@interface ARBodyAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

This [ARAnchor](aranchor.md) subclass tracks the movement of a single person. You enable body tracking by running your session using [ARBodyTrackingConfiguration](arbodytrackingconfiguration.md).

When ARKit recognizes a person in the back camera feed, it calls your delegate’s [session:didAddAnchors:](arsessiondelegate/session%28__didadd_%29.md) function with [ARBodyAnchor](arbodyanchor.md). A body anchor’s [transform](aranchor/transform.md) position defines the world position of the body’s hip joint.

You can also check within the frame’s [anchors](arframe/anchors.md) for a body that ARKit is tracking.

<a id="Place-a-Skeleton-on-a-Surface"></a>

### Place a Skeleton on a Surface

Because a body anchor’s origin maps to the hip joint, you calculate the current offset of the feet to the hip to place the body’s skeleton on a surface. By passing the foot joint index to [jointModelTransforms](arskeleton3d/jointmodeltransforms-dno4.md), you get the foot’s offset from skeleton’s origin.

```swift
static var hipToFootOffset: Float {
    // Get an index for a foot. 
    let footIndex = ARSkeletonDefinition.defaultBody3D.index(forJointName: .leftFoot)
    // Get the foot's world-space offset from the hip. 
    let footTransform = ARSkeletonDefinition.defaultBody3D.neutralBodySkeleton3D!.jointModelTransforms[footIndex]
    // Return the height by getting just the y-value. 
    let distanceFromHipOnY = abs(footTransform.columns.3.y) 
    return distanceFromHipOnY
}
```

## Topics

### Interpreting 3D Motion

- [skeleton](arbodyanchor/skeleton.md): The tracked body in 3D.

### Getting Scale Information

- [estimatedScaleFactor](arbodyanchor/estimatedscalefactor.md): A factor that relates the body’s default height with the height ARKit estimates at runtime.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARTrackable](artrackable.md)

## See Also

### Body Position Tracking

- [Capturing Body Motion in 3D](capturing-body-motion-in-3d.md): Track a person in the physical environment and visualize their motion by applying the same body movements to a virtual character.
- [Rigging a Model for Motion Capture](rigging-a-model-for-motion-capture.md): Configure custom 3D models so ARKit’s human body-tracking feature can control them.
- [Validating a Model for Motion Capture](validating-a-model-for-motion-capture.md): Verify that your character model matches ARKit’s Motion Capture requirements.

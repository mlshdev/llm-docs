> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnconstraint](https://developer.apple.com/documentation/scenekit/scnconstraint)

# SCNConstraint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The abstract superclass for objects that automatically adjust the position, rotation, or scale of a node based on specified rules.

## Declaration

```swift
class SCNConstraint
```

<a id="overview"></a>

## Overview

To control the transform (position, rotation, and scale) of one or more [SCNNode](scnnode.md) objects with constraints, create and configure instances of the [SCNConstraint](scnconstraint.md) subclass that provides the behavior you want, then add those constraint objects to each node’s [constraints](scnnode/constraints.md) array.

When SceneKit prepares to render a scene, it examines the list of constraints attached to each node to determine the transform for that node, then applies the new transformation before displaying the scene.

## Topics

### Tuning a Constraint’s Effect on Nodes

- [influenceFactor](scnconstraint/influencefactor.md): The influence of the constraint on the node’s transformation.

### Initializers

- [init(coder:)](scnconstraint/init%28coder_%29.md)

### Instance Properties

- [isEnabled](scnconstraint/isenabled.md)
- [isIncremental](scnconstraint/isincremental.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SCNAccelerationConstraint](scnaccelerationconstraint.md)
- [SCNAvoidOccluderConstraint](scnavoidoccluderconstraint.md)
- [SCNBillboardConstraint](scnbillboardconstraint.md)
- [SCNDistanceConstraint](scndistanceconstraint.md)
- [SCNIKConstraint](scnikconstraint.md)
- [SCNLookAtConstraint](scnlookatconstraint.md)
- [SCNReplicatorConstraint](scnreplicatorconstraint.md)
- [SCNSliderConstraint](scnsliderconstraint.md)
- [SCNTransformConstraint](scntransformconstraint.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)

# SCNConstraint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The abstract superclass for objects that automatically adjust the position, rotation, or scale of a node based on specified rules.

## Declaration

```objectivec
@interface SCNConstraint : NSObject
```

<a id="overview"></a>

## Overview

To control the transform (position, rotation, and scale) of one or more [SCNNode](scnnode.md) objects with constraints, create and configure instances of the [SCNConstraint](scnconstraint.md) subclass that provides the behavior you want, then add those constraint objects to each node’s [constraints](scnnode/constraints.md) array.

When SceneKit prepares to render a scene, it examines the list of constraints attached to each node to determine the transform for that node, then applies the new transformation before displaying the scene.

## Topics

### Tuning a Constraint’s Effect on Nodes

- [influenceFactor](scnconstraint/influencefactor.md): The influence of the constraint on the node’s transformation.

### Instance Properties

- [enabled](scnconstraint/isenabled.md)
- [incremental](scnconstraint/isincremental.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SCNAccelerationConstraint](scnaccelerationconstraint.md)
- [SCNAvoidOccluderConstraint](scnavoidoccluderconstraint.md)
- [SCNBillboardConstraint](scnbillboardconstraint.md)
- [SCNDistanceConstraint](scndistanceconstraint.md)
- [SCNIKConstraint](scnikconstraint.md)
- [SCNLookAtConstraint](scnlookatconstraint.md)
- [SCNReplicatorConstraint](scnreplicatorconstraint.md)
- [SCNSliderConstraint](scnsliderconstraint.md)
- [SCNTransformConstraint](scntransformconstraint.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)

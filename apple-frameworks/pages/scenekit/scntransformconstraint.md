> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntransformconstraint](https://developer.apple.com/documentation/scenekit/scntransformconstraint)

# SCNTransformConstraint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constraint that runs a specified closure, block in Objective-C, to compute a new transform (position, rotation, and scale) for each node that the constraint affects.

## Declaration

```swift
class SCNTransformConstraint
```

<a id="overview"></a>

## Overview

To attach constraints to an [SCNNode](scnnode.md) object, use its [constraints](scnnode/constraints.md) property.

When Scene Kit prepares to render a scene, it evaluates the list of constraints attached to each node to determine the transformation for that node, then applies the new transformation before rendering. To evaluate a transform constraint, Scene Kit runs the block you provided when creating the constraint. In this block, your app computes a new transformation to be applied to the node. Optionally, your app may reference the node’s current transformation in computing the new transformation.

## Topics

### Creating a Transform Constraint

- [init(inWorldSpace:with:)](scntransformconstraint/init%28inworldspace_with_%29.md): Creates a new transform constraint.

### Initializers

- [init(inWorldSpace:withBlock:)](scntransformconstraint/init%28inworldspace_withblock_%29.md)

### Type Methods

- [orientationConstraint(inWorldSpace:with:)](scntransformconstraint/orientationconstraint%28inworldspace_with_%29.md)
- [positionConstraint(inWorldSpace:with:)](scntransformconstraint/positionconstraint%28inworldspace_with_%29.md)

## Relationships

### Inherits From

- [SCNConstraint](scnconstraint.md)

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

# SCNTransformConstraint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A constraint that runs a specified closure, block in Objective-C, to compute a new transform (position, rotation, and scale) for each node that the constraint affects.

## Declaration

```objectivec
@interface SCNTransformConstraint : SCNConstraint
```

<a id="overview"></a>

## Overview

To attach constraints to an [SCNNode](scnnode.md) object, use its [constraints](scnnode/constraints.md) property.

When Scene Kit prepares to render a scene, it evaluates the list of constraints attached to each node to determine the transformation for that node, then applies the new transformation before rendering. To evaluate a transform constraint, Scene Kit runs the block you provided when creating the constraint. In this block, your app computes a new transformation to be applied to the node. Optionally, your app may reference the node’s current transformation in computing the new transformation.

## Topics

### Creating a Transform Constraint

- [transformConstraintInWorldSpace:withBlock:](scntransformconstraint/init%28inworldspace_with_%29.md): Creates a new transform constraint.

### Type Methods

- [orientationConstraintInWorldSpace:withBlock:](scntransformconstraint/orientationconstraint%28inworldspace_with_%29.md)
- [positionConstraintInWorldSpace:withBlock:](scntransformconstraint/positionconstraint%28inworldspace_with_%29.md)

## Relationships

### Inherits From

- [SCNConstraint](scnconstraint.md)

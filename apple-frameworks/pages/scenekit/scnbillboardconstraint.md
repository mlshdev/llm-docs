> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbillboardconstraint](https://developer.apple.com/documentation/scenekit/scnbillboardconstraint)

# SCNBillboardConstraint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constraint that orients a node to always point toward the current camera.

## Declaration

```swift
class SCNBillboardConstraint
```

<a id="overview"></a>

## Overview

An [SCNBillboardConstraint](scnbillboardconstraint.md) object automatically adjusts a node’s orientation so that its local z-axis always points toward the [pointOfView](scnscenerenderer/pointofview.md) node currently being used to render the scene. For example, you can use a billboard constraint to efficiently render parts of a scene using two-dimensional sprite images instead of three-dimensional geometry—by mapping sprites onto planes affected by a billboard constraint, the sprites maintain their orientation with respect to the viewer. To attach constraints to an [SCNNode](scnnode.md) object, use its [constraints](scnnode/constraints.md) property.

## Topics

### Working with a Constraint’s Degrees of Freedom

- [freeAxes](scnbillboardconstraint/freeaxes.md): An option that specifies which degrees of freedom the constraint affects.

### Constants

- [SCNBillboardAxis](scnbillboardaxis.md): Options for locking the orientation of nodes affected by a billboard constraint.

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

## See Also

### Orientation Constraints

- [SCNLookAtConstraint](scnlookatconstraint.md): A constraint that orients a node to always point toward a specified other node.

# SCNBillboardConstraint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constraint that orients a node to always point toward the current camera.

## Declaration

```objectivec
@interface SCNBillboardConstraint : SCNConstraint
```

<a id="overview"></a>

## Overview

An [SCNBillboardConstraint](scnbillboardconstraint.md) object automatically adjusts a node’s orientation so that its local z-axis always points toward the [pointOfView](scnscenerenderer/pointofview.md) node currently being used to render the scene. For example, you can use a billboard constraint to efficiently render parts of a scene using two-dimensional sprite images instead of three-dimensional geometry—by mapping sprites onto planes affected by a billboard constraint, the sprites maintain their orientation with respect to the viewer. To attach constraints to an [SCNNode](scnnode.md) object, use its [constraints](scnnode/constraints.md) property.

## Topics

### Creating a Billboard Constraint

- [billboardConstraint](scnbillboardconstraint/billboardconstraint.md): Deprecated. Creates a new billboard constraint.

### Working with a Constraint’s Degrees of Freedom

- [freeAxes](scnbillboardconstraint/freeaxes.md): An option that specifies which degrees of freedom the constraint affects.

### Constants

- [SCNBillboardAxis](scnbillboardaxis.md): Options for locking the orientation of nodes affected by a billboard constraint.

## Relationships

### Inherits From

- [SCNConstraint](scnconstraint.md)

## See Also

### Orientation Constraints

- [SCNLookAtConstraint](scnlookatconstraint.md): A constraint that orients a node to always point toward a specified other node.

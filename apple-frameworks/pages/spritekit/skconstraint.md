> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint](https://developer.apple.com/documentation/spritekit/skconstraint)

# SKConstraint (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A specification for constraining a node’s position or rotation.

## Declaration

```swift
class SKConstraint
```

## Mentioned In

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md)

<a id="overview"></a>

## Overview

An [SKConstraint](skconstraint.md) object describes a mathematical constraint on a node’s position or orientation. You attach constraints to nodes; after a scene processes any actions and physics interactions, it applies constraints attached to nodes in its node tree. Use constraints to ensure that certain relationships are true before the system renders a scene. For example, you might use a constraint to:

- Change a node’s [zRotation](sknode/zrotation.md) property so that it always points at another node or a position in the scene.
- Keep a node within a specified distance of another node or a point in the scene.
- Keep a node inside a specified rectangle.
- Restrict the [zRotation](sknode/zrotation.md) property of a node so that it has a more limited rotation range of motion.

To use constraints, create an [NSArray](../foundation/nsarray.md) object that contains one or more constraint objects and assign the array to a node’s [constraints](sknode/constraints.md) property. When the system evaluates a scene, it executes the constraints on a node in the order they appear in the [constraints](sknode/constraints.md) array.

You can’t change a constraint after you create it. However, you can selectively disable or enable a constraint by setting its [enabled](skconstraint/enabled.md) property. You can also use the [referenceNode](skconstraint/referencenode.md) property to convert positions to the referenced coordinate system before applying the constraint.

## Topics

### Creating Position Constraints

Limit a node’s movement in one axis or both.

- [Creating Position Constraints](creating-position-constraints.md): Create a position constraint and add it to a node.
- [positionX(\_:y:)](skconstraint/positionx%28__y_%29.md): Creates a constraint that restricts both coordinates of a node’s position.
- [positionX(\_:)](skconstraint/positionx%28__%29.md): Creates a constraint that restricts the x-coordinate of a node’s position.
- [positionY(\_:)](skconstraint/positiony%28__%29.md): Creates a constraint that restricts the y-coordinate of a node’s position.

### Creating Orientation Constraints

Provide limitations on a node’s rotation, or create rules the system uses to update a node’s rotation for you.

- [Creating a Look-At Constraint](creating-a-look-at-constraint.md): Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.
- [orient(to:offset:)](skconstraint/orient%28to_offset_%29-1h1tw.md): Creates a constraint that forces a node to rotate to face another node.
- [orient(to:offset:)](skconstraint/orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [orient(to:in:offset:)](skconstraint/orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
- [zRotation(\_:)](skconstraint/zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.

### Creating Distance Constraints

Create a rule the system uses to update a node’s position relative to another node in the scene.

- [distance(\_:to:)](skconstraint/distance%28__to_%29-6507j.md): Creates a constraint that keeps a node within a certain distance of another node.
- [distance(\_:to:)](skconstraint/distance%28__to_%29-7yk7n.md): Creates a constraint that keeps a node within a certain distance of a point.
- [distance(\_:to:in:)](skconstraint/distance%28__to_in_%29.md): Creates a constraint that keeps a node within a certain distance of a point in another node’s coordinate system.

### Controlling the Coordinate System Where a Constraint is Applied

- [referenceNode](skconstraint/referencenode.md): The node whose coordinate system should be used to apply the constraint.

### Enabling and Disabling a Constraint

- [enabled](skconstraint/enabled.md): A Boolean value that specifies whether the constraint is applied.

### Initializers

- [init(coder:)](skconstraint/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

## See Also

### Constraints

- [SKReachConstraints](skreachconstraints.md): A specification of the degree of freedom when solving inverse kinematics.

# SKConstraint (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A specification for constraining a node’s position or rotation.

## Declaration

```objectivec
@interface SKConstraint : NSObject
```

## Mentioned In

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md)

<a id="overview"></a>

## Overview

An [SKConstraint](skconstraint.md) object describes a mathematical constraint on a node’s position or orientation. You attach constraints to nodes; after a scene processes any actions and physics interactions, it applies constraints attached to nodes in its node tree. Use constraints to ensure that certain relationships are true before the system renders a scene. For example, you might use a constraint to:

- Change a node’s [zRotation](sknode/zrotation.md) property so that it always points at another node or a position in the scene.
- Keep a node within a specified distance of another node or a point in the scene.
- Keep a node inside a specified rectangle.
- Restrict the [zRotation](sknode/zrotation.md) property of a node so that it has a more limited rotation range of motion.

To use constraints, create an [NSArray](../foundation/nsarray.md) object that contains one or more constraint objects and assign the array to a node’s [constraints](sknode/constraints.md) property. When the system evaluates a scene, it executes the constraints on a node in the order they appear in the [constraints](sknode/constraints.md) array.

You can’t change a constraint after you create it. However, you can selectively disable or enable a constraint by setting its [enabled](skconstraint/enabled.md) property. You can also use the [referenceNode](skconstraint/referencenode.md) property to convert positions to the referenced coordinate system before applying the constraint.

## Topics

### Creating Position Constraints

Limit a node’s movement in one axis or both.

- [Creating Position Constraints](creating-position-constraints.md): Create a position constraint and add it to a node.
- [positionX:Y:](skconstraint/positionx%28__y_%29.md): Creates a constraint that restricts both coordinates of a node’s position.
- [positionX:](skconstraint/positionx%28__%29.md): Creates a constraint that restricts the x-coordinate of a node’s position.
- [positionY:](skconstraint/positiony%28__%29.md): Creates a constraint that restricts the y-coordinate of a node’s position.

### Creating Orientation Constraints

Provide limitations on a node’s rotation, or create rules the system uses to update a node’s rotation for you.

- [Creating a Look-At Constraint](creating-a-look-at-constraint.md): Make a node automatically rotate itself based on the changing position of another node, by using orientation constraints.
- [orientToNode:offset:](skconstraint/orient%28to_offset_%29-1h1tw.md): Creates a constraint that forces a node to rotate to face another node.
- [orientToPoint:offset:](skconstraint/orient%28to_offset_%29-9lq3h.md): Creates a constraint that forces a node to rotate to face a fixed point.
- [orientToPoint:inNode:offset:](skconstraint/orient%28to_in_offset_%29.md): Creates a constraint that forces a node to rotate to face a point in another node’s coordinate system.
- [zRotation:](skconstraint/zrotation%28__%29.md): Creates a constraint that limits the orientation of a node.

### Creating Distance Constraints

Create a rule the system uses to update a node’s position relative to another node in the scene.

- [distance:toNode:](skconstraint/distance%28__to_%29-6507j.md): Creates a constraint that keeps a node within a certain distance of another node.
- [distance:toPoint:](skconstraint/distance%28__to_%29-7yk7n.md): Creates a constraint that keeps a node within a certain distance of a point.
- [distance:toPoint:inNode:](skconstraint/distance%28__to_in_%29.md): Creates a constraint that keeps a node within a certain distance of a point in another node’s coordinate system.

### Controlling the Coordinate System Where a Constraint is Applied

- [referenceNode](skconstraint/referencenode.md): The node whose coordinate system should be used to apply the constraint.

### Enabling and Disabling a Constraint

- [enabled](skconstraint/enabled.md): A Boolean value that specifies whether the constraint is applied.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Constraints

- [SKReachConstraints](skreachconstraints.md): A specification of the degree of freedom when solving inverse kinematics.

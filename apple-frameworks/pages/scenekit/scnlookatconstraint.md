> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlookatconstraint](https://developer.apple.com/documentation/scenekit/scnlookatconstraint)

# SCNLookAtConstraint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constraint that orients a node to always point toward a specified other node.

## Declaration

```swift
class SCNLookAtConstraint
```

<a id="overview"></a>

## Overview

For example, you can use a look-at constraint to ensure that a camera or spotlight always follows the movement of a game character. To attach constraints to an [SCNNode](scnnode.md) object, use its [constraints](scnnode/constraints.md) property.

A node points in the direction of the negative z-axis of its local coordinate system. This axis defines the view direction for nodes containing cameras and the lighting direction for nodes containing spotlights or directional lights, as well as the orientation of the node’s geometry and child nodes. When Scene Kit evaluates a look-at constraint, it updates the constrained node’s [transform](scnnode/transform.md) property so that the node’s negative z-axis points toward the constraint’s target node.

## Topics

### Creating a Look-At Constraint

- [init(target:)](scnlookatconstraint/init%28target_%29.md): Creates a look-at constraint for a specified target node.

### Modifying a Constraint

- [isGimbalLockEnabled](scnlookatconstraint/isgimballockenabled.md): A Boolean value that specifies whether constrained nodes are allowed to rotate.
- [target](scnlookatconstraint/target.md): The node toward which constrained nodes will point after being reoriented.

### Instance Properties

- [localFront](scnlookatconstraint/localfront.md)
- [targetOffset](scnlookatconstraint/targetoffset.md)
- [worldUp](scnlookatconstraint/worldup.md)

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

- [SCNBillboardConstraint](scnbillboardconstraint.md): A constraint that orients a node to always point toward the current camera.

# SCNLookAtConstraint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A constraint that orients a node to always point toward a specified other node.

## Declaration

```objectivec
@interface SCNLookAtConstraint : SCNConstraint
```

<a id="overview"></a>

## Overview

For example, you can use a look-at constraint to ensure that a camera or spotlight always follows the movement of a game character. To attach constraints to an [SCNNode](scnnode.md) object, use its [constraints](scnnode/constraints.md) property.

A node points in the direction of the negative z-axis of its local coordinate system. This axis defines the view direction for nodes containing cameras and the lighting direction for nodes containing spotlights or directional lights, as well as the orientation of the node’s geometry and child nodes. When Scene Kit evaluates a look-at constraint, it updates the constrained node’s [transform](scnnode/transform.md) property so that the node’s negative z-axis points toward the constraint’s target node.

## Topics

### Creating a Look-At Constraint

- [lookAtConstraintWithTarget:](scnlookatconstraint/init%28target_%29.md): Creates a look-at constraint for a specified target node.

### Modifying a Constraint

- [gimbalLockEnabled](scnlookatconstraint/isgimballockenabled.md): A Boolean value that specifies whether constrained nodes are allowed to rotate.
- [target](scnlookatconstraint/target.md): The node toward which constrained nodes will point after being reoriented.

### Instance Properties

- [localFront](scnlookatconstraint/localfront.md)
- [targetOffset](scnlookatconstraint/targetoffset.md)
- [worldUp](scnlookatconstraint/worldup.md)

## Relationships

### Inherits From

- [SCNConstraint](scnconstraint.md)

## See Also

### Orientation Constraints

- [SCNBillboardConstraint](scnbillboardconstraint.md): A constraint that orients a node to always point toward the current camera.

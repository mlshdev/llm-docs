> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnikconstraint](https://developer.apple.com/documentation/scenekit/scnikconstraint)

# SCNIKConstraint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constraint that applies inverse kinematics to make a chain of nodes “reach” toward a target point.

## Declaration

```swift
class SCNIKConstraint
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929777@2x.png)

*Inverse kinematics (IK)* is an iterative process that finds positions for the joints connecting a chain of rigid bodies in order to move the body at the end of that chain as close as possible to a desired point in space. For example, a chain of bodies might model a robot arm, and the node at the end of the chain—called an *end effector*—might model the hand or tool at the end of the arm. To create IK-based behavior in a SceneKit app or game, follow these steps:

1. Build a hierarchy of nodes whose [position](scnnode/position.md) and [pivot](scnnode/pivot.md) properties describe the joints between them. For example, the node representing a robot’s lower arm should be a child of its upper arm node, and the lower arm node’s [pivot](scnnode/pivot.md) property should be placed so that adjusting its [rotation](scnnode/rotation.md) property appears to bend the arm at an elbow joint. The robot’s hand should in turn be a child node of the lower arm node.
2. Create an [SCNIKConstraint](scnikconstraint.md) object whose [chainRootNode](scnikconstraint/chainrootnode.md) property refers to the highest node in the hierarchy whose orientation should be adjusted by the constraint. Continuing the previous example, the root of the chain should be the node containing the upper arm (not the robot’s body, whose orientation remains fixed).
3. Apply the IK constraint to the end effector node of the chain with that node’s [constraints](scnnode/constraints.md) property. In the robot arm example, the end effector is the hand or tool at the end of the arm.
4. (Optional) Limit the range of motion of one or more joints in the chain with the [setMaxAllowedRotationAngle(\_:forJoint:)](scnikconstraint/setmaxallowedrotationangle%28__forjoint_%29.md) method.
5. To set the constrained nodes in motion, provide a target position for the constraint with its [targetPosition](scnikconstraint/targetposition.md) property. You can animate a change to this property

> **Note**

>  SceneKit’s physics and inverse kinematics simulations are separate. When SceneKit prepares to render a scene, it processes the physics simulation before applying constraints (including IK constraints). As a result, the effects of an IK constraint override the results of the physics simulation. To use physics with a node also affected by constraints, the node’s [physicsBody](scnnode/physicsbody.md) object must be a kinematic physics body.

## Topics

### Creating an Inverse Kinematics Constraint

- [init(chainRootNode:)](scnikconstraint/init%28chainrootnode_%29.md): Initializes an inverse kinematics constraint whose chain of nodes begins with the specified node.
- [inverseKinematicsConstraint(chainRootNode:)](scnikconstraint/inversekinematicsconstraint%28chainrootnode_%29.md): Creates an inverse kinematics constraint whose chain of nodes begins with the specified node.

### Adjusting the Constraint’s Limits of Motion

- [chainRootNode](scnikconstraint/chainrootnode.md): The parent node of the hierarchy affected by the constraint.
- [maxAllowedRotationAngle(forJoint:)](scnikconstraint/maxallowedrotationangle%28forjoint_%29.md): Returns the rotation limit, in degrees, for the specified node.
- [setMaxAllowedRotationAngle(\_:forJoint:)](scnikconstraint/setmaxallowedrotationangle%28__forjoint_%29.md): Sets the rotation limit, in degrees, for the specified node.

### Applying Inverse Kinematics to the Constrained Node

- [targetPosition](scnikconstraint/targetposition.md): The desired position for the constrained node, in the scene’s world coordinate space. Animatable.

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

# SCNIKConstraint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A constraint that applies inverse kinematics to make a chain of nodes “reach” toward a target point.

## Declaration

```objectivec
@interface SCNIKConstraint : SCNConstraint
```

<a id="overview"></a>

## Overview

![](https://developer.apple.com/images/com.apple.scenekit/media-2929777@2x.png)

*Inverse kinematics (IK)* is an iterative process that finds positions for the joints connecting a chain of rigid bodies in order to move the body at the end of that chain as close as possible to a desired point in space. For example, a chain of bodies might model a robot arm, and the node at the end of the chain—called an *end effector*—might model the hand or tool at the end of the arm. To create IK-based behavior in a SceneKit app or game, follow these steps:

1. Build a hierarchy of nodes whose [position](scnnode/position.md) and [pivot](scnnode/pivot.md) properties describe the joints between them. For example, the node representing a robot’s lower arm should be a child of its upper arm node, and the lower arm node’s [pivot](scnnode/pivot.md) property should be placed so that adjusting its [rotation](scnnode/rotation.md) property appears to bend the arm at an elbow joint. The robot’s hand should in turn be a child node of the lower arm node.
2. Create an [SCNIKConstraint](scnikconstraint.md) object whose [chainRootNode](scnikconstraint/chainrootnode.md) property refers to the highest node in the hierarchy whose orientation should be adjusted by the constraint. Continuing the previous example, the root of the chain should be the node containing the upper arm (not the robot’s body, whose orientation remains fixed).
3. Apply the IK constraint to the end effector node of the chain with that node’s [constraints](scnnode/constraints.md) property. In the robot arm example, the end effector is the hand or tool at the end of the arm.
4. (Optional) Limit the range of motion of one or more joints in the chain with the [setMaxAllowedRotationAngle:forJoint:](scnikconstraint/setmaxallowedrotationangle%28__forjoint_%29.md) method.
5. To set the constrained nodes in motion, provide a target position for the constraint with its [targetPosition](scnikconstraint/targetposition.md) property. You can animate a change to this property

> **Note**

>  SceneKit’s physics and inverse kinematics simulations are separate. When SceneKit prepares to render a scene, it processes the physics simulation before applying constraints (including IK constraints). As a result, the effects of an IK constraint override the results of the physics simulation. To use physics with a node also affected by constraints, the node’s [physicsBody](scnnode/physicsbody.md) object must be a kinematic physics body.

## Topics

### Creating an Inverse Kinematics Constraint

- [initWithChainRootNode:](scnikconstraint/init%28chainrootnode_%29.md): Initializes an inverse kinematics constraint whose chain of nodes begins with the specified node.
- [inverseKinematicsConstraintWithChainRootNode:](scnikconstraint/inversekinematicsconstraint%28chainrootnode_%29.md): Creates an inverse kinematics constraint whose chain of nodes begins with the specified node.

### Adjusting the Constraint’s Limits of Motion

- [chainRootNode](scnikconstraint/chainrootnode.md): The parent node of the hierarchy affected by the constraint.
- [maxAllowedRotationAngleForJoint:](scnikconstraint/maxallowedrotationangle%28forjoint_%29.md): Returns the rotation limit, in degrees, for the specified node.
- [setMaxAllowedRotationAngle:forJoint:](scnikconstraint/setmaxallowedrotationangle%28__forjoint_%29.md): Sets the rotation limit, in degrees, for the specified node.

### Applying Inverse Kinematics to the Constrained Node

- [targetPosition](scnikconstraint/targetposition.md): The desired position for the constrained node, in the scene’s world coordinate space. Animatable.

## Relationships

### Inherits From

- [SCNConstraint](scnconstraint.md)

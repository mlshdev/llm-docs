> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnikconstraint/init(chainrootnode:)](https://developer.apple.com/documentation/scenekit/scnikconstraint/init(chainrootnode:))

# init(chainRootNode:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Initializes an inverse kinematics constraint whose chain of nodes begins with the specified node.

## Declaration

```swift
init(chainRootNode: SCNNode)
```

## Parameters

- `chainRootNode`: The parent node of the hierarchy to be affected by the constraint.

<a id="return-value"></a>

## Return Value

A new constraint object.

<a id="Discussion"></a>

## Discussion

The root node is the highest node in the hierarchy moved by the constraint. For example, a robot arm may have two arm segments and a hand connected to a body. The upper arm is a child node of the body, the lower arm is a child node of the upper arm, and the hand is a child node of the lower arm. In this case, the upper arm is the chain root node, because the body should not move to follow the hand.

The node you apply the constraint to (using that node’s [constraints](../scnnode/constraints.md) property) is the *end effector* of the chain—the lowest node in the hierarchy. When you set the constraint’s [targetPosition](targetposition.md) property, SceneKit attempts to move this node toward the target point by rotating it relative to its parent node (and rotating its parent and ancestor nodes, up the chain ending with the `chainRoot` node). Continuing the above example, the end effector of the robot arm is its hand.

## See Also

### Creating an Inverse Kinematics Constraint

- [inverseKinematicsConstraint(chainRootNode:)](inversekinematicsconstraint%28chainrootnode_%29.md): Creates an inverse kinematics constraint whose chain of nodes begins with the specified node.

# initWithChainRootNode: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an inverse kinematics constraint whose chain of nodes begins with the specified node.

## Declaration

```objectivec
- (instancetype) initWithChainRootNode:(SCNNode *) chainRootNode;
```

## Parameters

- `chainRootNode`: The parent node of the hierarchy to be affected by the constraint.

<a id="return-value"></a>

## Return Value

A new constraint object.

<a id="Discussion"></a>

## Discussion

The root node is the highest node in the hierarchy moved by the constraint. For example, a robot arm may have two arm segments and a hand connected to a body. The upper arm is a child node of the body, the lower arm is a child node of the upper arm, and the hand is a child node of the lower arm. In this case, the upper arm is the chain root node, because the body should not move to follow the hand.

The node you apply the constraint to (using that node’s [constraints](../scnnode/constraints.md) property) is the *end effector* of the chain—the lowest node in the hierarchy. When you set the constraint’s [targetPosition](targetposition.md) property, SceneKit attempts to move this node toward the target point by rotating it relative to its parent node (and rotating its parent and ancestor nodes, up the chain ending with the `chainRoot` node). Continuing the above example, the end effector of the robot arm is its hand.

## See Also

### Creating an Inverse Kinematics Constraint

- [inverseKinematicsConstraintWithChainRootNode:](inversekinematicsconstraint%28chainrootnode_%29.md): Creates an inverse kinematics constraint whose chain of nodes begins with the specified node.

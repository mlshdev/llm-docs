> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnikconstraint/setmaxallowedrotationangle(_:forjoint:)](https://developer.apple.com/documentation/scenekit/scnikconstraint/setmaxallowedrotationangle(_:forjoint:))

# setMaxAllowedRotationAngle(\_:forJoint:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Sets the rotation limit, in degrees, for the specified node.

## Declaration

```swift
func setMaxAllowedRotationAngle(_ angle: CGFloat, forJoint node: SCNNode)
```

## Parameters

- `angle`: The maximum rotation, in degrees, that SceneKit should apply to the specified node when evaluating the constraint.
- `node`: A node affected by the constraint—either the node whose [constraints](../scnnode/constraints.md) property references the constraint, or one of that node’s parent or ancestor nodes up to the node specified by the constraint’s [chainRootNode](chainrootnode.md) property.

<a id="Discussion"></a>

## Discussion

When SceneKit evaluates the IK constraint, it checks the target orientations of each node in the chain relative to their initial orientations (as of when the constraint was applied to a node). For each node in the chain, SceneKit limits the rotation (in any direction) between the initial and target orientations to the `angle` value specified with this method.

The default rotation limit for each joint is 180 degrees in either direction, allowing unconstrained rotation.

## See Also

### Adjusting the Constraint’s Limits of Motion

- [chainRootNode](chainrootnode.md): The parent node of the hierarchy affected by the constraint.
- [maxAllowedRotationAngle(forJoint:)](maxallowedrotationangle%28forjoint_%29.md): Returns the rotation limit, in degrees, for the specified node.

# setMaxAllowedRotationAngle:forJoint: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Sets the rotation limit, in degrees, for the specified node.

## Declaration

```objectivec
- (void) setMaxAllowedRotationAngle:(CGFloat) angle forJoint:(SCNNode *) node;
```

## Parameters

- `angle`: The maximum rotation, in degrees, that SceneKit should apply to the specified node when evaluating the constraint.
- `node`: A node affected by the constraint—either the node whose [constraints](../scnnode/constraints.md) property references the constraint, or one of that node’s parent or ancestor nodes up to the node specified by the constraint’s [chainRootNode](chainrootnode.md) property.

<a id="Discussion"></a>

## Discussion

When SceneKit evaluates the IK constraint, it checks the target orientations of each node in the chain relative to their initial orientations (as of when the constraint was applied to a node). For each node in the chain, SceneKit limits the rotation (in any direction) between the initial and target orientations to the `angle` value specified with this method.

The default rotation limit for each joint is 180 degrees in either direction, allowing unconstrained rotation.

## See Also

### Adjusting the Constraint’s Limits of Motion

- [chainRootNode](chainrootnode.md): The parent node of the hierarchy affected by the constraint.
- [maxAllowedRotationAngleForJoint:](maxallowedrotationangle%28forjoint_%29.md): Returns the rotation limit, in degrees, for the specified node.

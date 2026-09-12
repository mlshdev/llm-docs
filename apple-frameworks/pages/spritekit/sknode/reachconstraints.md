> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/reachconstraints](https://developer.apple.com/documentation/spritekit/sknode/reachconstraints)

# reachConstraints (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The reach constraints to apply to the node when executing a reach action.

## Declaration

```swift
@NSCopying var reachConstraints: SKReachConstraints? { get set }
```

<a id="Discussion"></a>

## Discussion

To use inverse kinematics, create a new [SKReachConstraints](../skreachconstraints.md) object and assign it to this property. When a reach action calculates the new positions of this node, the possible values for this node are restricted to the constraints defined by this object. For more information on the inverse kinematic actions, see [SKAction](../skaction.md).

## See Also

### Constraining Node Position or Rotation

- [constraints](constraints.md): A list of constraints to apply to the node.

# reachConstraints (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The reach constraints to apply to the node when executing a reach action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) SKReachConstraints * reachConstraints;
```

<a id="Discussion"></a>

## Discussion

To use inverse kinematics, create a new [SKReachConstraints](../skreachconstraints.md) object and assign it to this property. When a reach action calculates the new positions of this node, the possible values for this node are restricted to the constraints defined by this object. For more information on the inverse kinematic actions, see [SKAction](../skaction.md).

## See Also

### Constraining Node Position or Rotation

- [constraints](constraints.md): A list of constraints to apply to the node.

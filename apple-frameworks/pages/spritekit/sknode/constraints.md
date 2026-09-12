> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/constraints](https://developer.apple.com/documentation/spritekit/sknode/constraints)

# constraints (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A list of constraints to apply to the node.

## Declaration

```swift
var constraints: [SKConstraint]? { get set }
```

<a id="Discussion"></a>

## Discussion

Assign an array of [SKConstraint](../skconstraint.md) objects to the node. The scene processes these constraints before the scene is rendered. The constraints are processed in array order. If multiple nodes in the node tree have constraints, there is no guaranteed order that the nodes are processed in.

## See Also

### Constraining Node Position or Rotation

- [reachConstraints](reachconstraints.md): The reach constraints to apply to the node when executing a reach action.

# constraints (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A list of constraints to apply to the node.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<SKConstraint *> * constraints;
```

<a id="Discussion"></a>

## Discussion

Assign an array of [SKConstraint](../skconstraint.md) objects to the node. The scene processes these constraints before the scene is rendered. The constraints are processed in array order. If multiple nodes in the node tree have constraints, there is no guaranteed order that the nodes are processed in.

## See Also

### Constraining Node Position or Rotation

- [reachConstraints](reachconstraints.md): The reach constraints to apply to the node when executing a reach action.

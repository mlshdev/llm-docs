> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/physicsbody](https://developer.apple.com/documentation/spritekit/sknode/physicsbody)

# physicsBody (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The physics body associated with the node.

## Declaration

```swift
var physicsBody: SKPhysicsBody? { get set }
```

## Mentioned In

- [Configuring a Physics Body](../configuring-a-physics-body.md)
- [Getting Started with Physics Bodies](../getting-started-with-physics-bodies.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates that the node does not participate in the physics simulation at all. If a physics body is provided, when the scene’s physics are simulated, the physics body updates the node’s position and rotates the node.

## See Also

### Adding Physics Behaviors

- [Getting Started with Physics Bodies](../getting-started-with-physics-bodies.md): Create and assign a physics body to enable physics.

# physicsBody (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The physics body associated with the node.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKPhysicsBody * physicsBody;
```

## Mentioned In

- [Configuring a Physics Body](../configuring-a-physics-body.md)
- [Getting Started with Physics Bodies](../getting-started-with-physics-bodies.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates that the node does not participate in the physics simulation at all. If a physics body is provided, when the scene’s physics are simulated, the physics body updates the node’s position and rotates the node.

## See Also

### Adding Physics Behaviors

- [Getting Started with Physics Bodies](../getting-started-with-physics-bodies.md): Create and assign a physics body to enable physics.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skscene/physicsworld

# physicsWorld (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The physics simulation associated with the scene.

## Declaration

```swift
var physicsWorld: SKPhysicsWorld { get }
```

<a id="Discussion"></a>

## Discussion

Every scene automatically creates a physics world object to simulate physics on nodes in the scene. You use this property to access the scene’s global physics properties, such as gravity. To add physics to a particular node, see [physicsBody](../sknode/physicsbody.md).

# physicsWorld (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The physics simulation associated with the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) SKPhysicsWorld * physicsWorld;
```

<a id="Discussion"></a>

## Discussion

Every scene automatically creates a physics world object to simulate physics on nodes in the scene. You use this property to access the scene’s global physics properties, such as gravity. To add physics to a particular node, see [physicsBody](../sknode/physicsbody.md).

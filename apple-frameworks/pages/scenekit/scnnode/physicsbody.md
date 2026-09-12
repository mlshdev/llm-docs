> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/physicsbody](https://developer.apple.com/documentation/scenekit/scnnode/physicsbody)

# physicsBody (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The physics body associated with the node.

## Declaration

```swift
var physicsBody: SCNPhysicsBody? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, specifying that the node does not participate in the physics simulation at all. If you provide a physics body, SceneKit updates the node’s position and orientation each time it processes a step of its physics simulation. For more information on SceneKit’s physics system, see [SCNPhysicsWorld](../scnphysicsworld.md).

## See Also

### Adding Physics to a Node

- [physicsField](physicsfield.md): The physics field associated with the node.

# physicsBody (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The physics body associated with the node.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNPhysicsBody * physicsBody;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, specifying that the node does not participate in the physics simulation at all. If you provide a physics body, SceneKit updates the node’s position and orientation each time it processes a step of its physics simulation. For more information on SceneKit’s physics system, see [SCNPhysicsWorld](../scnphysicsworld.md).

## See Also

### Adding Physics to a Node

- [physicsField](physicsfield.md): The physics field associated with the node.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/physicsworld](https://developer.apple.com/documentation/scenekit/scnscene/physicsworld)

# physicsWorld (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The physics simulation associated with the scene.

## Declaration

```swift
var physicsWorld: SCNPhysicsWorld { get }
```

<a id="Discussion"></a>

## Discussion

Every scene automatically creates a physics world object to simulate physics on nodes in the scene. You use this property to access the scene’s global physics properties, such as gravity, and to manage physics interactions between nodes. To make a node in the scene participate in the physics simulation, use either or both of its [physicsBody](../scnnode/physicsbody.md) and [physicsField](../scnnode/physicsfield.md) properties.

# physicsWorld (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The physics simulation associated with the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNPhysicsWorld * physicsWorld;
```

<a id="Discussion"></a>

## Discussion

Every scene automatically creates a physics world object to simulate physics on nodes in the scene. You use this property to access the scene’s global physics properties, such as gravity, and to manage physics interactions between nodes. To make a node in the scene participate in the physics simulation, use either or both of its [physicsBody](../scnnode/physicsbody.md) and [physicsField](../scnnode/physicsfield.md) properties.

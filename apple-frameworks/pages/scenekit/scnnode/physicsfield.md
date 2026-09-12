> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/physicsfield](https://developer.apple.com/documentation/scenekit/scnnode/physicsfield)

# physicsField (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The physics field associated with the node.

## Declaration

```swift
var physicsField: SCNPhysicsField? { get set }
```

<a id="Discussion"></a>

## Discussion

Physics fields apply forces to other physics bodies in a specified area around their node. For example, a SCNPhysicsDragField field slows all physics bodies that pass through its area. For a full list of field types and their effects, see [SCNPhysicsField](../scnphysicsfield.md).

A node can contain both a physics body that defines collision behavior and a physics field that defines forces in its area. For example, two nodes containing physics bodies and radial gravity fields will be attracted to one another, but will bounce off each other when they collide.

## See Also

### Adding Physics to a Node

- [physicsBody](physicsbody.md): The physics body associated with the node.

# physicsField (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The physics field associated with the node.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNPhysicsField * physicsField;
```

<a id="Discussion"></a>

## Discussion

Physics fields apply forces to other physics bodies in a specified area around their node. For example, a SCNPhysicsDragField field slows all physics bodies that pass through its area. For a full list of field types and their effects, see [SCNPhysicsField](../scnphysicsfield.md).

A node can contain both a physics body that defines collision behavior and a physics field that defines forces in its area. For example, two nodes containing physics bodies and radial gravity fields will be attracted to one another, but will bounce off each other when they collide.

## See Also

### Adding Physics to a Node

- [physicsBody](physicsbody.md): The physics body associated with the node.

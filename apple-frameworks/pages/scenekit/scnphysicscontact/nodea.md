> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscontact/nodea](https://developer.apple.com/documentation/scenekit/scnphysicscontact/nodea)

# nodeA (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node containing the first body in the contact.

## Declaration

```swift
var nodeA: SCNNode { get }
```

<a id="Discussion"></a>

## Discussion

Use the node’s [physicsBody](../scnnode/physicsbody.md) property to examine physics characteristics of the node.

## See Also

### Inspecting the Contact Properties

- [nodeB](nodeb.md): The node containing the second body in the contact.
- [contactPoint](contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [contactNormal](contactnormal.md): The normal vector at the contact point between the two physics bodies, in scene coordinates.
- [collisionImpulse](collisionimpulse.md): The force over time of the collision, in newton-seconds.
- [penetrationDistance](penetrationdistance.md): The distance of overlap, in units of scene coordinate space, between the two physics bodies.

# nodeA (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The node containing the first body in the contact.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNNode * nodeA;
```

<a id="Discussion"></a>

## Discussion

Use the node’s [physicsBody](../scnnode/physicsbody.md) property to examine physics characteristics of the node.

## See Also

### Inspecting the Contact Properties

- [nodeB](nodeb.md): The node containing the second body in the contact.
- [contactPoint](contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [contactNormal](contactnormal.md): The normal vector at the contact point between the two physics bodies, in scene coordinates.
- [collisionImpulse](collisionimpulse.md): The force over time of the collision, in newton-seconds.
- [penetrationDistance](penetrationdistance.md): The distance of overlap, in units of scene coordinate space, between the two physics bodies.

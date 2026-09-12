> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscontact/contactnormal](https://developer.apple.com/documentation/scenekit/scnphysicscontact/contactnormal)

# contactNormal (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The normal vector at the contact point between the two physics bodies, in scene coordinates.

## Declaration

```swift
var contactNormal: SCNVector3 { get }
```

<a id="Discussion"></a>

## Discussion

This vector tells you which direction the bodies were moving relative to one another at the time of the collision. For example, in a game you can examine this vector to have enemy characters take damage when struck from above by the player character but damage the player character instead when they collide side-to-side.

## See Also

### Inspecting the Contact Properties

- [nodeA](nodea.md): The node containing the first body in the contact.
- [nodeB](nodeb.md): The node containing the second body in the contact.
- [contactPoint](contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [collisionImpulse](collisionimpulse.md): The force over time of the collision, in newton-seconds.
- [penetrationDistance](penetrationdistance.md): The distance of overlap, in units of scene coordinate space, between the two physics bodies.

# contactNormal (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The normal vector at the contact point between the two physics bodies, in scene coordinates.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNVector3 contactNormal;
```

<a id="Discussion"></a>

## Discussion

This vector tells you which direction the bodies were moving relative to one another at the time of the collision. For example, in a game you can examine this vector to have enemy characters take damage when struck from above by the player character but damage the player character instead when they collide side-to-side.

## See Also

### Inspecting the Contact Properties

- [nodeA](nodea.md): The node containing the first body in the contact.
- [nodeB](nodeb.md): The node containing the second body in the contact.
- [contactPoint](contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [collisionImpulse](collisionimpulse.md): The force over time of the collision, in newton-seconds.
- [penetrationDistance](penetrationdistance.md): The distance of overlap, in units of scene coordinate space, between the two physics bodies.

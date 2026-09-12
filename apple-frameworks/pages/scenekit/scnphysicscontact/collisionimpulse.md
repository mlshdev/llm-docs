> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscontact/collisionimpulse](https://developer.apple.com/documentation/scenekit/scnphysicscontact/collisionimpulse)

# collisionImpulse (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The force over time of the collision, in newton-seconds.

## Declaration

```swift
var collisionImpulse: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value tells you how hard the bodies struck each other in a collision. For example, in a game you might allow a character to proceed unhindered after a minor collision, but take damage when struck with sufficient force.

## See Also

### Inspecting the Contact Properties

- [nodeA](nodea.md): The node containing the first body in the contact.
- [nodeB](nodeb.md): The node containing the second body in the contact.
- [contactPoint](contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [contactNormal](contactnormal.md): The normal vector at the contact point between the two physics bodies, in scene coordinates.
- [penetrationDistance](penetrationdistance.md): The distance of overlap, in units of scene coordinate space, between the two physics bodies.

# collisionImpulse (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The force over time of the collision, in newton-seconds.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat collisionImpulse;
```

<a id="Discussion"></a>

## Discussion

This property’s value tells you how hard the bodies struck each other in a collision. For example, in a game you might allow a character to proceed unhindered after a minor collision, but take damage when struck with sufficient force.

## See Also

### Inspecting the Contact Properties

- [nodeA](nodea.md): The node containing the first body in the contact.
- [nodeB](nodeb.md): The node containing the second body in the contact.
- [contactPoint](contactpoint.md): The contact point between the two physics bodies, in scene coordinates.
- [contactNormal](contactnormal.md): The normal vector at the contact point between the two physics bodies, in scene coordinates.
- [penetrationDistance](penetrationdistance.md): The distance of overlap, in units of scene coordinate space, between the two physics bodies.

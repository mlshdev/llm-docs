> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsballsocketjoint/bodya](https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/bodya)

# bodyA (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The first physics body connected by the joint.

## Declaration

```swift
var bodyA: SCNPhysicsBody { get }
```

## See Also

### Managing the Characteristics of a Ball and Socket Joint

- [anchorA](anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [bodyB](bodyb.md): The second physics body connected by the joint.
- [anchorB](anchorb.md): The point at which the joint connects, relative to the node containing the second body.

# bodyA (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The first physics body connected by the joint.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNPhysicsBody * bodyA;
```

## See Also

### Managing the Characteristics of a Ball and Socket Joint

- [anchorA](anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [bodyB](bodyb.md): The second physics body connected by the joint.
- [anchorB](anchorb.md): The point at which the joint connects, relative to the node containing the second body.

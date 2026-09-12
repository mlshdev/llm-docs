> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsballsocketjoint/bodyb](https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/bodyb)

# bodyB (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The second physics body connected by the joint.

## Declaration

```swift
var bodyB: SCNPhysicsBody? { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is `nil` if the joint was created using the [init(body:anchor:)](init%28body_anchor_%29.md) method.

## See Also

### Managing the Characteristics of a Ball and Socket Joint

- [bodyA](bodya.md): The first physics body connected by the joint.
- [anchorA](anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [anchorB](anchorb.md): The point at which the joint connects, relative to the node containing the second body.

# bodyB (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The second physics body connected by the joint.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SCNPhysicsBody * bodyB;
```

<a id="Discussion"></a>

## Discussion

This property’s value is `nil` if the joint was created using the [jointWithBody:anchor:](init%28body_anchor_%29.md) method.

## See Also

### Managing the Characteristics of a Ball and Socket Joint

- [bodyA](bodya.md): The first physics body connected by the joint.
- [anchorA](anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [anchorB](anchorb.md): The point at which the joint connects, relative to the node containing the second body.

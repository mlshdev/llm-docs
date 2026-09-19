> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint/anchorb

# anchorB (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The point at which the joint connects, relative to the node containing the second body.

## Declaration

```swift
var anchorB: SCNVector3 { get set }
```

## See Also

### Managing the Characteristics of a Ball and Socket Joint

- [bodyA](bodya.md): The first physics body connected by the joint.
- [anchorA](anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [bodyB](bodyb.md): The second physics body connected by the joint.

# anchorB (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The point at which the joint connects, relative to the node containing the second body.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 anchorB;
```

## See Also

### Managing the Characteristics of a Ball and Socket Joint

- [bodyA](bodya.md): The first physics body connected by the joint.
- [anchorA](anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [bodyB](bodyb.md): The second physics body connected by the joint.

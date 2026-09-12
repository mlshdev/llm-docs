> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/islocal](https://developer.apple.com/documentation/scenekit/scnparticlesystem/islocal)

# isLocal (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that specifies whether the particle simulation runs in the local coordinate space of the node containing it.

## Declaration

```swift
var isLocal: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false) (the default), all positions, distances, and velocities in the particle system are in the scene’s world coordinate system. If [true](https://developer.apple.com/documentation/swift/true), the particle system runs in the local coordinate space of the node containing it.

Use this property to choose whether particles spawned by a moving emitter follow the system as it moves.

## See Also

### Controlling Particle Simulation

- [reset()](reset%28%29.md): Returns the particle system to its initial state.
- [speedFactor](speedfactor.md): A multiplier for the speed at which SceneKit runs the particle simulation. Animatable.

# local (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that specifies whether the particle simulation runs in the local coordinate space of the node containing it.

## Declaration

```objectivec
@property (nonatomic, getter=isLocal) BOOL local;
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false) (the default), all positions, distances, and velocities in the particle system are in the scene’s world coordinate system. If [true](https://developer.apple.com/documentation/swift/true), the particle system runs in the local coordinate space of the node containing it.

Use this property to choose whether particles spawned by a moving emitter follow the system as it moves.

## See Also

### Controlling Particle Simulation

- [reset](reset%28%29.md): Returns the particle system to its initial state.
- [speedFactor](speedfactor.md): A multiplier for the speed at which SceneKit runs the particle simulation. Animatable.

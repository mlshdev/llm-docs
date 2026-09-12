> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/speedfactor](https://developer.apple.com/documentation/scenekit/scnparticlesystem/speedfactor)

# speedFactor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A multiplier for the speed at which SceneKit runs the particle simulation. Animatable.

## Declaration

```swift
var speedFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to speed up or slow down the overall behavior of a particle system without changing the many individual properties (such as [acceleration](acceleration.md), [particleAngularVelocity](particleangularvelocity.md), and [particleBounce](particlebounce.md)) that affect the motion of particles.

The default value is 1.0. Lower values slow down the effect; higher values make the effect run faster.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Controlling Particle Simulation

- [isLocal](islocal.md): A Boolean value that specifies whether the particle simulation runs in the local coordinate space of the node containing it.
- [reset()](reset%28%29.md): Returns the particle system to its initial state.

# speedFactor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A multiplier for the speed at which SceneKit runs the particle simulation. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat speedFactor;
```

<a id="Discussion"></a>

## Discussion

Use this property to speed up or slow down the overall behavior of a particle system without changing the many individual properties (such as [acceleration](acceleration.md), [particleAngularVelocity](particleangularvelocity.md), and [particleBounce](particlebounce.md)) that affect the motion of particles.

The default value is 1.0. Lower values slow down the effect; higher values make the effect run faster.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Controlling Particle Simulation

- [local](islocal.md): A Boolean value that specifies whether the particle simulation runs in the local coordinate space of the node containing it.
- [reset](reset%28%29.md): Returns the particle system to its initial state.

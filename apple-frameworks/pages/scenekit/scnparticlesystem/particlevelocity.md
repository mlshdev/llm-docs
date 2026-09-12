> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlevelocity](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlevelocity)

# particleVelocity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The initial speed, in units per second, for newly spawned particles. Animatable.

## Declaration

```swift
var particleVelocity: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Particles begin moving at this speed in the direction determined by the [birthDirection](birthdirection.md) or [emittingDirection](emittingdirection.md) property. Their directions and speeds may change thereafter according to the [acceleration](acceleration.md) property or physics effects (see the [isAffectedByGravity](isaffectedbygravity.md), [isAffectedByPhysicsFields](isaffectedbyphysicsfields.md), and [colliderNodes](collidernodes.md) properties). You can randomize the speed of newly spawned particles with the [particleAngularVelocityVariation](particleangularvelocityvariation.md) property.

Particle speed is measured in units (of the local coordinate space containing the particle system) per second.

The default value is `0.0` units per second, specifying that newly emitted particles are stationary until otherwise influenced.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleAngularVelocityVariation](particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpan](particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.
- [particleLifeSpanVariation](particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

# particleVelocity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The initial speed, in units per second, for newly spawned particles. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleVelocity;
```

<a id="Discussion"></a>

## Discussion

Particles begin moving at this speed in the direction determined by the [birthDirection](birthdirection.md) or [emittingDirection](emittingdirection.md) property. Their directions and speeds may change thereafter according to the [acceleration](acceleration.md) property or physics effects (see the [affectedByGravity](isaffectedbygravity.md), [affectedByPhysicsFields](isaffectedbyphysicsfields.md), and [colliderNodes](collidernodes.md) properties). You can randomize the speed of newly spawned particles with the [particleAngularVelocityVariation](particleangularvelocityvariation.md) property.

Particle speed is measured in units (of the local coordinate space containing the particle system) per second.

The default value is `0.0` units per second, specifying that newly emitted particles are stationary until otherwise influenced.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleAngularVelocityVariation](particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpan](particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.
- [particleLifeSpanVariation](particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

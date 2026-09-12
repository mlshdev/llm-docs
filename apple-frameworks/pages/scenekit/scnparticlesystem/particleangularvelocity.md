> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particleangularvelocity](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particleangularvelocity)

# particleAngularVelocity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The initial spin rate, in degrees per second, of newly spawned particles. Animatable.

## Declaration

```swift
var particleAngularVelocity: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A particle’s angle (or orientation) is independent from its direction of motion. For example, a smoke effect may use a small image of a cloud for each particle, which stays at the same angle as the smoke rises, but a snow effect may use an image that flips and rotates as each snowflake falls. The [orientationMode](orientationmode.md) property determines whether and how particles are allowed to rotate, and the [particleAngle](particleangle.md) and [particleAngularVelocity](particleangularvelocity.md) properties determine rotation angles and rates. You can randomize the rotations of newly spawned particles with the [particleAngleVariation](particleanglevariation.md) property.

The default value is `0.0` degrees per second, specifying no rotation.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocityVariation](particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpan](particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.
- [particleLifeSpanVariation](particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

# particleAngularVelocity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The initial spin rate, in degrees per second, of newly spawned particles. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleAngularVelocity;
```

<a id="Discussion"></a>

## Discussion

A particle’s angle (or orientation) is independent from its direction of motion. For example, a smoke effect may use a small image of a cloud for each particle, which stays at the same angle as the smoke rises, but a snow effect may use an image that flips and rotates as each snowflake falls. The [orientationMode](orientationmode.md) property determines whether and how particles are allowed to rotate, and the [particleAngle](particleangle.md) and [particleAngularVelocity](particleangularvelocity.md) properties determine rotation angles and rates. You can randomize the rotations of newly spawned particles with the [particleAngleVariation](particleanglevariation.md) property.

The default value is `0.0` degrees per second, specifying no rotation.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocityVariation](particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpan](particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.
- [particleLifeSpanVariation](particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

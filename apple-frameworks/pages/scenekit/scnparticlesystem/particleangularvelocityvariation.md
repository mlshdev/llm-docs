> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particleangularvelocityvariation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particleangularvelocityvariation)

# particleAngularVelocityVariation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.

## Declaration

```swift
var particleAngularVelocityVariation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [particleAngularVelocity](particleangularvelocity.md) property. SceneKit randomly adjusts the initial angular velocity of each particle by up to half the [particleAngularVelocityVariation](particleangularvelocityvariation.md) value. For example, if the [particleAngularVelocity](particleangularvelocity.md) value is `10.0` degrees per second and the [particleAngularVelocityVariation](particleangularvelocityvariation.md) value is `5.0` degrees per second, newly spawned particles spin at random speeds between `7.5` and `12.5` degrees per second.

The default value is `0.0` degrees per second, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleLifeSpan](particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.
- [particleLifeSpanVariation](particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

# particleAngularVelocityVariation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleAngularVelocityVariation;
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [particleAngularVelocity](particleangularvelocity.md) property. SceneKit randomly adjusts the initial angular velocity of each particle by up to half the [particleAngularVelocityVariation](particleangularvelocityvariation.md) value. For example, if the [particleAngularVelocity](particleangularvelocity.md) value is `10.0` degrees per second and the [particleAngularVelocityVariation](particleangularvelocityvariation.md) value is `5.0` degrees per second, newly spawned particles spin at random speeds between `7.5` and `12.5` degrees per second.

The default value is `0.0` degrees per second, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleLifeSpan](particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.
- [particleLifeSpanVariation](particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlelifespanvariation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlelifespanvariation)

# particleLifeSpanVariation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range, in seconds, of randomized particle life spans. Animatable.

## Declaration

```swift
var particleLifeSpanVariation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [particleLifeSpan](particlelifespan.md) property. SceneKit randomly adjusts the life span of each particle by up to half the [particleLifeSpanVariation](particlelifespanvariation.md) value. For example, if the [particleLifeSpan](particlelifespan.md) value is `1.0` seconds and the [particleLifeSpanVariation](particlelifespanvariation.md) value is `0.5` seconds, each particle appears for a random duration between `0.75` and `1.25` seconds before being removed from the scene.

The default value is `0.0` seconds, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleAngularVelocityVariation](particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpan](particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.

# particleLifeSpanVariation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The range, in seconds, of randomized particle life spans. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleLifeSpanVariation;
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [particleLifeSpan](particlelifespan.md) property. SceneKit randomly adjusts the life span of each particle by up to half the [particleLifeSpanVariation](particlelifespanvariation.md) value. For example, if the [particleLifeSpan](particlelifespan.md) value is `1.0` seconds and the [particleLifeSpanVariation](particlelifespanvariation.md) value is `0.5` seconds, each particle appears for a random duration between `0.75` and `1.25` seconds before being removed from the scene.

The default value is `0.0` seconds, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleAngularVelocityVariation](particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpan](particlelifespan.md): The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.

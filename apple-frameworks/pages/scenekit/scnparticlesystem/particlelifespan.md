> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlelifespan](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlelifespan)

# particleLifeSpan (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.

## Declaration

```swift
var particleLifeSpan: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

After each particle is spawned, it appears in the scene for a period of this duration before being removed from the scene. You can randomize the life spans of newly spawned particles with the [particleLifeSpanVariation](particlelifespanvariation.md) property.

The default value is `1.0` seconds.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleAngularVelocityVariation](particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpanVariation](particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

# particleLifeSpan (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The duration, in seconds, for which each particle is rendered before being removed from the scene. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleLifeSpan;
```

<a id="Discussion"></a>

## Discussion

After each particle is spawned, it appears in the scene for a period of this duration before being removed from the scene. You can randomize the life spans of newly spawned particles with the [particleLifeSpanVariation](particlelifespanvariation.md) property.

The default value is `1.0` seconds.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Motion

- [particleAngle](particleangle.md): The rotation angle, in degrees, of newly spawned particles. Animatable.
- [particleAngleVariation](particleanglevariation.md): The range, in degrees of randomized initial particle angles. Animatable.
- [particleVelocity](particlevelocity.md): The initial speed, in units per second, for newly spawned particles. Animatable.
- [particleVelocityVariation](particlevelocityvariation.md): The range, in units per second, of randomized initial particle speeds. Animatable.
- [particleAngularVelocity](particleangularvelocity.md): The initial spin rate, in degrees per second, of newly spawned particles. Animatable.
- [particleAngularVelocityVariation](particleangularvelocityvariation.md): The range, in degrees per second, of randomized initial angular velocities for particles. Animatable.
- [particleLifeSpanVariation](particlelifespanvariation.md): The range, in seconds, of randomized particle life spans. Animatable.

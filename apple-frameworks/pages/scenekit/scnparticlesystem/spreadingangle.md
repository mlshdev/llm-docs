> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/spreadingangle](https://developer.apple.com/documentation/scenekit/scnparticlesystem/spreadingangle)

# spreadingAngle (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range, in degrees, of randomized initial particle directions. Animatable.

## Declaration

```swift
var spreadingAngle: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the direction specified by the [emittingDirection](emittingdirection.md) or [birthDirection](birthdirection.md) property. For example, at the default value of `0.0` degrees, all particles emit in the same direction. Increasing the spreading angle to `30.0` degrees allows particles to emit in any direction within a space shaped like a cone whose central angle is 30°.

This property has no effect if the [birthDirection](birthdirection.md) property value is [SCNParticleBirthDirection.random](../scnparticlebirthdirection/random.md).

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Locations

- [emitterShape](emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [birthDirection](birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [emittingDirection](emittingdirection.md): The initial direction for newly spawned particles. Animatable.

# spreadingAngle (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The range, in degrees, of randomized initial particle directions. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat spreadingAngle;
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the direction specified by the [emittingDirection](emittingdirection.md) or [birthDirection](birthdirection.md) property. For example, at the default value of `0.0` degrees, all particles emit in the same direction. Increasing the spreading angle to `30.0` degrees allows particles to emit in any direction within a space shaped like a cone whose central angle is 30°.

This property has no effect if the [birthDirection](birthdirection.md) property value is [SCNParticleBirthDirectionRandom](../scnparticlebirthdirection/random.md).

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Locations

- [emitterShape](emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [birthDirection](birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [emittingDirection](emittingdirection.md): The initial direction for newly spawned particles. Animatable.

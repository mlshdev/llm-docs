> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/emittingdirection](https://developer.apple.com/documentation/scenekit/scnparticlesystem/emittingdirection)

# emittingDirection (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The initial direction for newly spawned particles. Animatable.

## Declaration

```swift
var emittingDirection: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

If the the [emitterShape](emittershape.md) property value is `nil` or the [birthDirection](birthdirection.md) property value is [SCNParticleBirthDirection.constant](../scnparticlebirthdirection/constant.md), newly spawned particles emit in the direction specified by this property. You can randomize the direction of newly spawned particles with the [spreadingAngle](spreadingangle.md) property.

The default value is the vector `{0.0, 0.0, 1.0}`, specifying that particles emit in the direction of the positive z-axis.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Locations

- [emitterShape](emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [birthDirection](birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [spreadingAngle](spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

# emittingDirection (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The initial direction for newly spawned particles. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 emittingDirection;
```

<a id="Discussion"></a>

## Discussion

If the the [emitterShape](emittershape.md) property value is `nil` or the [birthDirection](birthdirection.md) property value is [SCNParticleBirthDirectionConstant](../scnparticlebirthdirection/constant.md), newly spawned particles emit in the direction specified by this property. You can randomize the direction of newly spawned particles with the [spreadingAngle](spreadingangle.md) property.

The default value is the vector `{0.0, 0.0, 1.0}`, specifying that particles emit in the direction of the positive z-axis.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Particle Emission Locations

- [emitterShape](emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [birthDirection](birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [spreadingAngle](spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/birthdirection](https://developer.apple.com/documentation/scenekit/scnparticlesystem/birthdirection)

# birthDirection (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The possible initial directions for newly spawned particles, relative to the emitter shape.

## Declaration

```swift
var birthDirection: SCNParticleBirthDirection { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines initial directions for new particles relative to the geometry specified in the [emitterShape](emittershape.md) property. This property has no effect if the [emitterShape](emittershape.md) property value is `nil`.

For example, if the emitter shape is an [SCNSphere](../scnsphere.md) geometry and the birth location is [SCNParticleBirthDirection.surfaceNormal](../scnparticlebirthdirection/surfacenormal.md), new particles radiate away from the center of the sphere. You can randomize the direction of newly spawned particles with the [spreadingAngle](spreadingangle.md) property.

The default value is [SCNParticleBirthDirection.constant](../scnparticlebirthdirection/constant.md), specifying that all particles use the same base [emittingDirection](emittingdirection.md) value.  For possible values, see [SCNParticleBirthDirection](../scnparticlebirthdirection.md).

## See Also

### Managing Particle Emission Locations

- [emitterShape](emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [emittingDirection](emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

# birthDirection (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The possible initial directions for newly spawned particles, relative to the emitter shape.

## Declaration

```objectivec
@property (nonatomic) SCNParticleBirthDirection birthDirection;
```

<a id="Discussion"></a>

## Discussion

This property defines initial directions for new particles relative to the geometry specified in the [emitterShape](emittershape.md) property. This property has no effect if the [emitterShape](emittershape.md) property value is `nil`.

For example, if the emitter shape is an [SCNSphere](../scnsphere.md) geometry and the birth location is [SCNParticleBirthDirectionSurfaceNormal](../scnparticlebirthdirection/surfacenormal.md), new particles radiate away from the center of the sphere. You can randomize the direction of newly spawned particles with the [spreadingAngle](spreadingangle.md) property.

The default value is [SCNParticleBirthDirectionConstant](../scnparticlebirthdirection/constant.md), specifying that all particles use the same base [emittingDirection](emittingdirection.md) value.  For possible values, see [SCNParticleBirthDirection](../scnparticlebirthdirection.md).

## See Also

### Managing Particle Emission Locations

- [emitterShape](emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [emittingDirection](emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

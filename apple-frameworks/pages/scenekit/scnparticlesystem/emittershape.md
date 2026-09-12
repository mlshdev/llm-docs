> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/emittershape](https://developer.apple.com/documentation/scenekit/scnparticlesystem/emittershape)

# emitterShape (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The shape of the region of space where the system spawns new particles.

## Declaration

```swift
var emitterShape: SCNGeometry? { get set }
```

<a id="Discussion"></a>

## Discussion

To randomize the locations where new particles spawn, assign a geometry to this property. This geometry defines the shape of the space where new particles may spawn, and the [birthLocation](birthlocation.md) and [birthDirection](birthdirection.md) properties define locations within and directions relative to the shape. For example, assigning a sphere geometry causes particles to spawn at random locations along the surface of the sphere (or within the volume of the sphere, according to the [birthLocation](birthlocation.md) property).

> **Note**

>  For best results, use an instance of one of the SceneKit basic geometry classes ([SCNPlane](../scnplane.md), [SCNBox](../scnbox.md), [SCNSphere](../scnsphere.md), [SCNPyramid](../scnpyramid.md), [SCNCone](../scncone.md), [SCNCylinder](../scncylinder.md), [SCNCapsule](../scncapsule.md), [SCNTube](../scntube.md), and [SCNTorus](../scntorus.md)). These classes provide a more efficient simulation and more even appearance to the rendered particle system.

The default value is `nil`, specifying that all new particles emit from a single point. For particle systems attached to a node, this point is the origin of the node’s coordinate system. For particle systems attached directly to a scene using the [addParticleSystem(\_:transform:)](../scnscene/addparticlesystem%28__transform_%29.md) method, use that method’s `transform` parameter to specify the emission point.

## See Also

### Managing Particle Emission Locations

- [birthLocation](birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [birthDirection](birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [emittingDirection](emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

# emitterShape (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The shape of the region of space where the system spawns new particles.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNGeometry * emitterShape;
```

<a id="Discussion"></a>

## Discussion

To randomize the locations where new particles spawn, assign a geometry to this property. This geometry defines the shape of the space where new particles may spawn, and the [birthLocation](birthlocation.md) and [birthDirection](birthdirection.md) properties define locations within and directions relative to the shape. For example, assigning a sphere geometry causes particles to spawn at random locations along the surface of the sphere (or within the volume of the sphere, according to the [birthLocation](birthlocation.md) property).

> **Note**

>  For best results, use an instance of one of the SceneKit basic geometry classes ([SCNPlane](../scnplane.md), [SCNBox](../scnbox.md), [SCNSphere](../scnsphere.md), [SCNPyramid](../scnpyramid.md), [SCNCone](../scncone.md), [SCNCylinder](../scncylinder.md), [SCNCapsule](../scncapsule.md), [SCNTube](../scntube.md), and [SCNTorus](../scntorus.md)). These classes provide a more efficient simulation and more even appearance to the rendered particle system.

The default value is `nil`, specifying that all new particles emit from a single point. For particle systems attached to a node, this point is the origin of the node’s coordinate system. For particle systems attached directly to a scene using the [addParticleSystem:withTransform:](../scnscene/addparticlesystem%28__transform_%29.md) method, use that method’s `transform` parameter to specify the emission point.

## See Also

### Managing Particle Emission Locations

- [birthLocation](birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [birthDirection](birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [emittingDirection](emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

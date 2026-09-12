> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlebirthlocation/volume](https://developer.apple.com/documentation/scenekit/scnparticlebirthlocation/volume)

# SCNParticleBirthLocation.volume (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

New particles can be created at any location within the volume of the emitter shape.

## Declaration

```swift
case volume
```

<a id="Discussion"></a>

## Discussion

This value applies only when the [emitterShape](../scnparticlesystem/emittershape.md) property specifies one of SceneKit’s built-in basic geometries ([SCNPlane](../scnplane.md), [SCNBox](../scnbox.md), [SCNSphere](../scnsphere.md), [SCNPyramid](../scnpyramid.md), [SCNCone](../scncone.md), [SCNCylinder](../scncylinder.md), [SCNCapsule](../scncapsule.md), [SCNTube](../scntube.md), and [SCNTorus](../scntorus.md)).

## See Also

### Constants

- [SCNParticleBirthLocation.surface](surface.md): New particles can be created at any location on the surface of the emitter shape.
- [SCNParticleBirthLocation.vertex](vertex.md): New particles can be created at only at the locations of the vertices in the emitter shape.

# SCNParticleBirthLocationVolume (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

New particles can be created at any location within the volume of the emitter shape.

## Declaration

```objectivec
SCNParticleBirthLocationVolume
```

<a id="Discussion"></a>

## Discussion

This value applies only when the [emitterShape](../scnparticlesystem/emittershape.md) property specifies one of SceneKit’s built-in basic geometries ([SCNPlane](../scnplane.md), [SCNBox](../scnbox.md), [SCNSphere](../scnsphere.md), [SCNPyramid](../scnpyramid.md), [SCNCone](../scncone.md), [SCNCylinder](../scncylinder.md), [SCNCapsule](../scncapsule.md), [SCNTube](../scntube.md), and [SCNTorus](../scntorus.md)).

## See Also

### Constants

- [SCNParticleBirthLocationSurface](surface.md): New particles can be created at any location on the surface of the emitter shape.
- [SCNParticleBirthLocationVertex](vertex.md): New particles can be created at only at the locations of the vertices in the emitter shape.

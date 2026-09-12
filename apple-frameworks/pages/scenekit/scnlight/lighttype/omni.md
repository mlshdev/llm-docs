> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/lighttype/omni](https://developer.apple.com/documentation/scenekit/scnlight/lighttype/omni)

# omni (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An omnidirectional light, also known as a *point light*.

## Declaration

```swift
static let omni: SCNLight.LightType
```

<a id="Discussion"></a>

## Discussion

Because an omnidirectional light casts equal illumination in all directions, the orientation of the node containing the light has no effect. Spotlight angle and shadow attributes do not apply to directional lights.

## See Also

### Type Properties

- [IES](ies.md): A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.
- [ambient](ambient.md): A light that illuminates all objects in the scene from all directions.
- [directional](directional.md): A light source with a uniform direction and constant intensity.
- [probe](probe.md): A sample of the environment around a point in a scene to be used in environment-based lighting.
- [spot](spot.md): A light source that illuminates a cone-shaped area.
- [area](area.md)

# SCNLightTypeOmni (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An omnidirectional light, also known as a *point light*.

## Declaration

```objectivec
extern SCNLightType const SCNLightTypeOmni;
```

<a id="Discussion"></a>

## Discussion

Because an omnidirectional light casts equal illumination in all directions, the orientation of the node containing the light has no effect. Spotlight angle and shadow attributes do not apply to directional lights.

## See Also

### Type Properties

- [SCNLightTypeIES](ies.md): A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.
- [SCNLightTypeAmbient](ambient.md): A light that illuminates all objects in the scene from all directions.
- [SCNLightTypeDirectional](directional.md): A light source with a uniform direction and constant intensity.
- [SCNLightTypeProbe](probe.md): A sample of the environment around a point in a scene to be used in environment-based lighting.
- [SCNLightTypeSpot](spot.md): A light source that illuminates a cone-shaped area.
- [SCNLightTypeArea](area.md)

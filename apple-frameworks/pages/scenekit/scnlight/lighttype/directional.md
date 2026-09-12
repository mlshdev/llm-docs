> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/lighttype/directional](https://developer.apple.com/documentation/scenekit/scnlight/lighttype/directional)

# directional (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A light source with a uniform direction and constant intensity.

## Declaration

```swift
static let directional: SCNLight.LightType
```

<a id="Discussion"></a>

## Discussion

Because a directional light illuminates all objects in the scene from the same direction and with the same intensity, so the position of the node containing the light has no effect. Attenuation and spotlight angle attributes do not apply to directional lights.

## See Also

### Type Properties

- [IES](ies.md): A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.
- [ambient](ambient.md): A light that illuminates all objects in the scene from all directions.
- [omni](omni.md): An omnidirectional light, also known as a *point light*.
- [probe](probe.md): A sample of the environment around a point in a scene to be used in environment-based lighting.
- [spot](spot.md): A light source that illuminates a cone-shaped area.
- [area](area.md)

# SCNLightTypeDirectional (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A light source with a uniform direction and constant intensity.

## Declaration

```objectivec
extern SCNLightType const SCNLightTypeDirectional;
```

<a id="Discussion"></a>

## Discussion

Because a directional light illuminates all objects in the scene from the same direction and with the same intensity, so the position of the node containing the light has no effect. Attenuation and spotlight angle attributes do not apply to directional lights.

## See Also

### Type Properties

- [SCNLightTypeIES](ies.md): A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.
- [SCNLightTypeAmbient](ambient.md): A light that illuminates all objects in the scene from all directions.
- [SCNLightTypeOmni](omni.md): An omnidirectional light, also known as a *point light*.
- [SCNLightTypeProbe](probe.md): A sample of the environment around a point in a scene to be used in environment-based lighting.
- [SCNLightTypeSpot](spot.md): A light source that illuminates a cone-shaped area.
- [SCNLightTypeArea](area.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/lighttype/ies](https://developer.apple.com/documentation/scenekit/scnlight/lighttype/ies)

# IES (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.

## Declaration

```swift
static let IES: SCNLight.LightType
```

<a id="Discussion"></a>

## Discussion

The intensity of a photometric light varies in different directions from the light source, much like the illumination from a real-world light source. The position of the containing node determines the location of the light source, and the orientation of the node determines the relative directions specified by the photometric profile. Spotlight angle attributes do not apply to photometric lights.

For more information about photometric lights, see the [iesProfileURL](../iesprofileurl.md) property.

## See Also

### Type Properties

- [ambient](ambient.md): A light that illuminates all objects in the scene from all directions.
- [directional](directional.md): A light source with a uniform direction and constant intensity.
- [omni](omni.md): An omnidirectional light, also known as a *point light*.
- [probe](probe.md): A sample of the environment around a point in a scene to be used in environment-based lighting.
- [spot](spot.md): A light source that illuminates a cone-shaped area.
- [area](area.md)

# SCNLightTypeIES (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.

## Declaration

```objectivec
extern SCNLightType const SCNLightTypeIES;
```

<a id="Discussion"></a>

## Discussion

The intensity of a photometric light varies in different directions from the light source, much like the illumination from a real-world light source. The position of the containing node determines the location of the light source, and the orientation of the node determines the relative directions specified by the photometric profile. Spotlight angle attributes do not apply to photometric lights.

For more information about photometric lights, see the [IESProfileURL](../iesprofileurl.md) property.

## See Also

### Type Properties

- [SCNLightTypeAmbient](ambient.md): A light that illuminates all objects in the scene from all directions.
- [SCNLightTypeDirectional](directional.md): A light source with a uniform direction and constant intensity.
- [SCNLightTypeOmni](omni.md): An omnidirectional light, also known as a *point light*.
- [SCNLightTypeProbe](probe.md): A sample of the environment around a point in a scene to be used in environment-based lighting.
- [SCNLightTypeSpot](spot.md): A light source that illuminates a cone-shaped area.
- [SCNLightTypeArea](area.md)

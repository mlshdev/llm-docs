> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/lighttype/probe](https://developer.apple.com/documentation/scenekit/scnlight/lighttype/probe)

# probe (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A sample of the environment around a point in a scene to be used in environment-based lighting.

## Declaration

```swift
static let probe: SCNLight.LightType
```

<a id="Discussion"></a>

## Discussion

A light probe describes a point in a scene in terms of the variations in color and intensity of the illumination it receives from all directions. This information can then be used in shading of materials based on their location in the scene. For example, a white object placed near blue and red walls will appear bluish on surfaces facing the blue wall and reddish on surfaces facing the red wall.

You can place light probes in a scene and generate their lighting contributions using the Xcode scene editor, or import light probes from scene file formats that support them. Lighting-related properties of the [SCNLight](../../scnlight.md) class do not apply to light probes; their contribution to scene rendering depends entirely on the light probe content generated in Xcode.

## See Also

### Type Properties

- [IES](ies.md): A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.
- [ambient](ambient.md): A light that illuminates all objects in the scene from all directions.
- [directional](directional.md): A light source with a uniform direction and constant intensity.
- [omni](omni.md): An omnidirectional light, also known as a *point light*.
- [spot](spot.md): A light source that illuminates a cone-shaped area.
- [area](area.md)

# SCNLightTypeProbe (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A sample of the environment around a point in a scene to be used in environment-based lighting.

## Declaration

```objectivec
extern SCNLightType const SCNLightTypeProbe;
```

<a id="Discussion"></a>

## Discussion

A light probe describes a point in a scene in terms of the variations in color and intensity of the illumination it receives from all directions. This information can then be used in shading of materials based on their location in the scene. For example, a white object placed near blue and red walls will appear bluish on surfaces facing the blue wall and reddish on surfaces facing the red wall.

You can place light probes in a scene and generate their lighting contributions using the Xcode scene editor, or import light probes from scene file formats that support them. Lighting-related properties of the [SCNLight](../../scnlight.md) class do not apply to light probes; their contribution to scene rendering depends entirely on the light probe content generated in Xcode.

## See Also

### Type Properties

- [SCNLightTypeIES](ies.md): A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.
- [SCNLightTypeAmbient](ambient.md): A light that illuminates all objects in the scene from all directions.
- [SCNLightTypeDirectional](directional.md): A light source with a uniform direction and constant intensity.
- [SCNLightTypeOmni](omni.md): An omnidirectional light, also known as a *point light*.
- [SCNLightTypeSpot](spot.md): A light source that illuminates a cone-shaped area.
- [SCNLightTypeArea](area.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/lighttype](https://developer.apple.com/documentation/scenekit/scnlight/lighttype)

# SCNLight.LightType (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Constants specifying the general behavior of a light, used by the [type](type.md) property.

## Declaration

```swift
struct LightType
```

<a id="Overview"></a>

## Overview

Each of the four scenes in the figure below has the same content illuminated by a single [SCNLight](../scnlight.md) object. The node containing the light source has the same position and orientation in each scene—all differences between the four pictures are due to the light’s [type](type.md) property.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929780@2x.png)

![](https://developer.apple.com/images/com.apple.scenekit/media-2929783@2x.png)

## Topics

### Type Properties

- [IES](lighttype/ies.md): A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.
- [ambient](lighttype/ambient.md): A light that illuminates all objects in the scene from all directions.
- [directional](lighttype/directional.md): A light source with a uniform direction and constant intensity.
- [omni](lighttype/omni.md): An omnidirectional light, also known as a *point light*.
- [probe](lighttype/probe.md): A sample of the environment around a point in a scene to be used in environment-based lighting.
- [spot](lighttype/spot.md): A light source that illuminates a cone-shaped area.
- [area](lighttype/area.md)

### Initializers

- [init(rawValue:)](lighttype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying a Light’s Appearance

- [type](type.md): A constant identifying the general behavior of the light.
- [color](color.md): The color of the light. Animatable.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

# SCNLightType (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants specifying the general behavior of a light, used by the [type](type.md) property.

## Declaration

```objectivec
typedef NSString * SCNLightType;
```

<a id="Overview"></a>

## Overview

Each of the four scenes in the figure below has the same content illuminated by a single [SCNLight](../scnlight.md) object. The node containing the light source has the same position and orientation in each scene—all differences between the four pictures are due to the light’s [type](type.md) property.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929780@2x.png)

![](https://developer.apple.com/images/com.apple.scenekit/media-2929783@2x.png)

## Topics

### Type Properties

- [SCNLightTypeIES](lighttype/ies.md): A light source whose shape, direction, and intensity of illumination is determined by a photometric profile.
- [SCNLightTypeAmbient](lighttype/ambient.md): A light that illuminates all objects in the scene from all directions.
- [SCNLightTypeDirectional](lighttype/directional.md): A light source with a uniform direction and constant intensity.
- [SCNLightTypeOmni](lighttype/omni.md): An omnidirectional light, also known as a *point light*.
- [SCNLightTypeProbe](lighttype/probe.md): A sample of the environment around a point in a scene to be used in environment-based lighting.
- [SCNLightTypeSpot](lighttype/spot.md): A light source that illuminates a cone-shaped area.
- [SCNLightTypeArea](lighttype/area.md)

## See Also

### Modifying a Light’s Appearance

- [type](type.md): A constant identifying the general behavior of the light.
- [color](color.md): The color of the light. Animatable.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/type](https://developer.apple.com/documentation/scenekit/scnlight/type)

# type (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constant identifying the general behavior of the light.

## Declaration

```swift
var type: SCNLight.LightType { get set }
```

<a id="Discussion"></a>

## Discussion

A light’s type determines the shape and directionality of illumination provided by the light, as well as the set of attributes available for modifying the light’s behavior. For example, light types include omnidirectional lights and spotlights. See `Light Types` for the full set of types and their behaviors.

## See Also

### Modifying a Light’s Appearance

- [SCNLight.LightType](lighttype.md): Constants specifying the general behavior of a light, used by the [type](type.md) property.
- [color](color.md): The color of the light. Animatable.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

# type (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant identifying the general behavior of the light.

## Declaration

```objectivec
@property (nonatomic, copy) SCNLightType type;
```

<a id="Discussion"></a>

## Discussion

A light’s type determines the shape and directionality of illumination provided by the light, as well as the set of attributes available for modifying the light’s behavior. For example, light types include omnidirectional lights and spotlights. See `Light Types` for the full set of types and their behaviors.

## See Also

### Modifying a Light’s Appearance

- [SCNLightType](lighttype.md): Constants specifying the general behavior of a light, used by the [type](type.md) property.
- [color](color.md): The color of the light. Animatable.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

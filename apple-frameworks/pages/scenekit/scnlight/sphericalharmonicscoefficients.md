> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/sphericalharmonicscoefficients](https://developer.apple.com/documentation/scenekit/scnlight/sphericalharmonicscoefficients)

# sphericalHarmonicsCoefficients (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Data describing the estimated lighting environment in all directions for a light probe.

## Declaration

```swift
var sphericalHarmonicsCoefficients: Data { get }
```

<a id="Discussion"></a>

## Discussion

Spherical harmonic coefficients describe the distribution of light around a point in a format that can be used efficiently in real-time rendering. SceneKit supports spherical harmonics only for lights of the [probe](lighttype/probe.md) type.

The data is an 32-bit floating-point values, containing three noninterleaved data sets corresponding to the red, green, and blue sets of coefficients. SceneKit supports only level 2 spherical harmonics, so the array has 3 sets of 9 values, or 27 values total.

## See Also

### Related Documentation

- [ARDirectionalLightEstimate](../../arkit/ardirectionallightestimate.md): Estimated environmental lighting information associated with a captured video frame in a face-tracking AR session.
- [MDLLightProbe](../../modelio/mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.

### Modifying a Light’s Appearance

- [type](type.md): A constant identifying the general behavior of the light.
- [SCNLight.LightType](lighttype.md): Constants specifying the general behavior of a light, used by the [type](type.md) property.
- [color](color.md): The color of the light. Animatable.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.

# sphericalHarmonicsCoefficients (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Data describing the estimated lighting environment in all directions for a light probe.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * sphericalHarmonicsCoefficients;
```

<a id="Discussion"></a>

## Discussion

Spherical harmonic coefficients describe the distribution of light around a point in a format that can be used efficiently in real-time rendering. SceneKit supports spherical harmonics only for lights of the [SCNLightTypeProbe](lighttype/probe.md) type.

The data is an 32-bit floating-point values, containing three noninterleaved data sets corresponding to the red, green, and blue sets of coefficients. SceneKit supports only level 2 spherical harmonics, so the array has 3 sets of 9 values, or 27 values total.

## See Also

### Related Documentation

- [ARDirectionalLightEstimate](../../arkit/ardirectionallightestimate.md): Estimated environmental lighting information associated with a captured video frame in a face-tracking AR session.
- [MDLLightProbe](../../modelio/mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.

### Modifying a Light’s Appearance

- [type](type.md): A constant identifying the general behavior of the light.
- [SCNLightType](lighttype.md): Constants specifying the general behavior of a light, used by the [type](type.md) property.
- [color](color.md): The color of the light. Animatable.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.

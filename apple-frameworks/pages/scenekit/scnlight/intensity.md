> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/intensity](https://developer.apple.com/documentation/scenekit/scnlight/intensity)

# intensity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The luminous flux, in lumens, or total brightness of the light. Animatable.

## Declaration

```swift
var intensity: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When working with photometric lights (see the [iesProfileURL](iesprofileurl.md) property) or physically-based rendering (see [physicallyBased](../scnmaterial/lightingmodel-swift.struct/physicallybased.md)), you can leave the [color](color.md) property at its default white color and use the [intensity](intensity.md) and [temperature](temperature.md) to control the light using realistic parameters. When working with physically-based materials, this value the luminous flux of the light source. The default value is `1000` lumens.

When not using physically-based rendering, this value (divided by 1000) serves as a multiplier for the the [color](color.md) property. The default value of of `1000` leaves the light color unmodulated; you can use higher values, for example, to brighten a light whose color is already the maximum red value.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Modifying a Light’s Appearance

- [type](type.md): A constant identifying the general behavior of the light.
- [SCNLight.LightType](lighttype.md): Constants specifying the general behavior of a light, used by the [type](type.md) property.
- [color](color.md): The color of the light. Animatable.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

# intensity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The luminous flux, in lumens, or total brightness of the light. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat intensity;
```

<a id="Discussion"></a>

## Discussion

When working with photometric lights (see the [IESProfileURL](iesprofileurl.md) property) or physically-based rendering (see [SCNLightingModelPhysicallyBased](../scnmaterial/lightingmodel-swift.struct/physicallybased.md)), you can leave the [color](color.md) property at its default white color and use the [intensity](intensity.md) and [temperature](temperature.md) to control the light using realistic parameters. When working with physically-based materials, this value the luminous flux of the light source. The default value is `1000` lumens.

When not using physically-based rendering, this value (divided by 1000) serves as a multiplier for the the [color](color.md) property. The default value of of `1000` leaves the light color unmodulated; you can use higher values, for example, to brighten a light whose color is already the maximum red value.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Modifying a Light’s Appearance

- [type](type.md): A constant identifying the general behavior of the light.
- [SCNLightType](lighttype.md): Constants specifying the general behavior of a light, used by the [type](type.md) property.
- [color](color.md): The color of the light. Animatable.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

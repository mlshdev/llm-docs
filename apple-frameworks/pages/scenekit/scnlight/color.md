> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/color](https://developer.apple.com/documentation/scenekit/scnlight/color)

# color (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The color of the light. Animatable.

## Declaration

```swift
var color: Any { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an [NSColor](https://developer.apple.com/documentation/appkit/nscolor) or [CGColor](../../coregraphics/cgcolor.md) object. The default color is white.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Modifying a Light’s Appearance

- [type](type.md): A constant identifying the general behavior of the light.
- [SCNLight.LightType](lighttype.md): Constants specifying the general behavior of a light, used by the [type](type.md) property.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

# color (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The color of the light. Animatable.

## Declaration

```objectivec
@property (nonatomic, retain) id color;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an [NSColor](https://developer.apple.com/documentation/appkit/nscolor) or [CGColorRef](../../coregraphics/cgcolor.md) object. The default color is white.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Modifying a Light’s Appearance

- [type](type.md): A constant identifying the general behavior of the light.
- [SCNLightType](lighttype.md): Constants specifying the general behavior of a light, used by the [type](type.md) property.
- [temperature](temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

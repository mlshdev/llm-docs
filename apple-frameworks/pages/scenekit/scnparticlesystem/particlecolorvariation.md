> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlecolorvariation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlecolorvariation)

# particleColorVariation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The ranges of randomized particle color components. Animatable.

## Declaration

```swift
var particleColorVariation: SCNVector4 { get set }
```

<a id="Discussion"></a>

## Discussion

This vector randomizes the color specified by the [particleColor](particlecolor.md) property. The components of the vector specify ranges of variation in hue, saturation, brightness, and alpha, in that order.

For example, consider the effects of different [particleColorVariation](particlecolorvariation.md) vectors on a system whose [particleColor](particlecolor.md) property specifies a fully opaque red as the base color:

- The vector `{0.25, 0.0, 0.0, 0.0}` allows newly spawned particles to take on any hue within a quarter of the color wheel centered on red (that is, ranging from purple through magenta, red, orange, and yellow to green). Particles retain full saturation, brightness, and alpha.
- The vector `{0.0, 0.0, 0.0, 1.0}` allows newly spawned particles to vary in alpha between full and half opacity. (The range of variation is centered on the base value, but clamped to a maximum of `1.0`.) Particles retain the same hue, saturation, and brightness as the base color.
- The vector `{0.0, 1.0, 1.0, 0.0}` allows newly spawned particles to vary in saturation and brightness, resulting in random shades of red. Particles retain the same hue and alpha as the base color.

The default value is [SCNVector4Zero](../scnvector4zero.md), specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

# particleColorVariation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The ranges of randomized particle color components. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNVector4 particleColorVariation;
```

<a id="Discussion"></a>

## Discussion

This vector randomizes the color specified by the [particleColor](particlecolor.md) property. The components of the vector specify ranges of variation in hue, saturation, brightness, and alpha, in that order.

For example, consider the effects of different [particleColorVariation](particlecolorvariation.md) vectors on a system whose [particleColor](particlecolor.md) property specifies a fully opaque red as the base color:

- The vector `{0.25, 0.0, 0.0, 0.0}` allows newly spawned particles to take on any hue within a quarter of the color wheel centered on red (that is, ranging from purple through magenta, red, orange, and yellow to green). Particles retain full saturation, brightness, and alpha.
- The vector `{0.0, 0.0, 0.0, 1.0}` allows newly spawned particles to vary in alpha between full and half opacity. (The range of variation is centered on the base value, but clamped to a maximum of `1.0`.) Particles retain the same hue, saturation, and brightness as the base color.
- The vector `{0.0, 1.0, 1.0, 0.0}` allows newly spawned particles to vary in saturation and brightness, resulting in random shades of red. Particles retain the same hue and alpha as the base color.

The default value is [SCNVector4Zero](../scnvector4zero.md), specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

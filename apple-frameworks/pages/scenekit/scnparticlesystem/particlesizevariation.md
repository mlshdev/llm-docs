> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlesizevariation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlesizevariation)

# particleSizeVariation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range of randomized particle sizes. Animatable.

## Declaration

```swift
var particleSizeVariation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [particleSize](particlesize.md) property. SceneKit randomly adjusts the size of each particle by up to half the [particleSizeVariation](particlesizevariation.md) value. For example, if the [particleSize](particlesize.md) value is `1.0` and the [particleSizeVariation](particlesizevariation.md) value is `0.5`, newly spawned particles are randomly sized between `0.75` and `1.25` units wide and high.

The default value is `0.0`, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

# particleSizeVariation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The range of randomized particle sizes. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleSizeVariation;
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [particleSize](particlesize.md) property. SceneKit randomly adjusts the size of each particle by up to half the [particleSizeVariation](particlesizevariation.md) value. For example, if the [particleSize](particlesize.md) value is `1.0` and the [particleSizeVariation](particlesizevariation.md) value is `0.5`, newly spawned particles are randomly sized between `0.75` and `1.25` units wide and high.

The default value is `0.0`, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

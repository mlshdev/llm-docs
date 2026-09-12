> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/fresnelexponent](https://developer.apple.com/documentation/scenekit/scnparticlesystem/fresnelexponent)

# fresnelExponent (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.

## Declaration

```swift
var fresnelExponent: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property only takes effect when the [particleImage](particleimage.md) property is an array of six images defining a cube map. In this case, SceneKit renders each particle as a reflective sphere.

The *fresnel exponent* modulates the reflectivity of a surface from different view angles. At the default value of `1.0`, reflections have the same intensity across the entire surface of the particle. At higher values, the edges of the particle are more reflective than the center.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

# fresnelExponent (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat fresnelExponent;
```

<a id="Discussion"></a>

## Discussion

This property only takes effect when the [particleImage](particleimage.md) property is an array of six images defining a cube map. In this case, SceneKit renders each particle as a reflective sphere.

The *fresnel exponent* modulates the reflectivity of a surface from different view angles. At the default value of `1.0`, reflections have the same intensity across the entire surface of the particle. At higher values, the edges of the particle are more reflective than the center.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

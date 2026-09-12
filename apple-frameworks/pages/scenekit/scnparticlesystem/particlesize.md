> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlesize](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlesize)

# particleSize (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.

## Declaration

```swift
var particleSize: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit uses this value for both the width and height of the [particleImage](particleimage.md) texture at render time. (If you use the [stretchFactor](stretchfactor.md) property to stretch particles in their direction of motion, the [particleSize](particlesize.md) value determines the width and height before stretching.) You can randomize the sizes of newly spawned particles with the [particleSizeVariation](particlesizevariation.md) property.

The default value is `1.0`, specifying that particle images appear one unit high and one unit wide in the scene’s world coordinate space.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

# particleSize (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleSize;
```

<a id="Discussion"></a>

## Discussion

SceneKit uses this value for both the width and height of the [particleImage](particleimage.md) texture at render time. (If you use the [stretchFactor](stretchfactor.md) property to stretch particles in their direction of motion, the [particleSize](particlesize.md) value determines the width and height before stretching.) You can randomize the sizes of newly spawned particles with the [particleSizeVariation](particlesizevariation.md) property.

The default value is `1.0`, specifying that particle images appear one unit high and one unit wide in the scene’s world coordinate space.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

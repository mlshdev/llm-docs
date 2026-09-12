> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/stretchfactor](https://developer.apple.com/documentation/scenekit/scnparticlesystem/stretchfactor)

# stretchFactor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A multiplier for stretching particle images along their direction of motion. Animatable.

## Declaration

```swift
var stretchFactor: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to create visual effects that show streaks of motion, such as fireworks. If the [orientationMode](orientationmode.md) property value is [SCNParticleOrientationMode.free](../scnparticleorientationmode/free.md), a non-default stretch factor stretches particle images in the y-axis direction of each particle’s local coordinate space.

The default value is `0.0`, specifying that particle images maintain their original aspect ratio.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.

# stretchFactor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A multiplier for stretching particle images along their direction of motion. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat stretchFactor;
```

<a id="Discussion"></a>

## Discussion

Use this property to create visual effects that show streaks of motion, such as fireworks. If the [orientationMode](orientationmode.md) property value is [SCNParticleOrientationModeFree](../scnparticleorientationmode/free.md), a non-default stretch factor stretches particle images in the y-axis direction of each particle’s local coordinate space.

The default value is `0.0`, specifying that particle images maintain their original aspect ratio.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.

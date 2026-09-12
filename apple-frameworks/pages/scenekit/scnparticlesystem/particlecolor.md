> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlecolor](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlecolor)

# particleColor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The color of newly spawned particles. Animatable.

## Declaration

```swift
var particleColor: UIColor { get set }
```

```swift
var particleColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

This color tints or shades the texture provided by the [particleImage](particleimage.md) property. You can use this property to implement a range of many possible visual effects using the same artwork. For example, a small, blurry, white circle texture can be tinted yellow or orange to simulate fire, shaded gray or black to simulate smoke, or left alone to simulate falling snow.

The default color is white, causing the particle image to appear without tint or shading.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

# particleColor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The color of newly spawned particles. Animatable.

## Declaration

```objectivec
@property (nonatomic, retain) UIColor * particleColor;
```

```objectivec
@property (nonatomic, retain) NSColor * particleColor;
```

<a id="Discussion"></a>

## Discussion

This color tints or shades the texture provided by the [particleImage](particleimage.md) property. You can use this property to implement a range of many possible visual effects using the same artwork. For example, a small, blurry, white circle texture can be tinted yellow or orange to simulate fire, shaded gray or black to simulate smoke, or left alone to simulate falling snow.

The default color is white, causing the particle image to appear without tint or shading.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [particleImage](particleimage.md): The texture image SceneKit uses to render each particle.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

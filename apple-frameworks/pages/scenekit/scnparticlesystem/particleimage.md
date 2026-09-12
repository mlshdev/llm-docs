> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particleimage](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particleimage)

# particleImage (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The texture image SceneKit uses to render each particle.

## Declaration

```swift
var particleImage: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Texture images help to determine visual effect rendered by the particle system. The [particleColor](particlecolor.md) property colorizes the image before rendering. You may specify an image using an [NSImage](https://developer.apple.com/documentation/appkit/nsimage) (in macOS) or [UIImage](../../uikit/uiimage.md) (in iOS) instance, or an [NSString](../../foundation/nsstring.md) or [NSURL](../../foundation/nsurl.md) instance containing the path or URL to an image file.

If the value is `nil` (the default), SceneKit renders each particle as a small white square (colorized by the [particleColor](particlecolor.md) property).

To specify a sequence of frames for animating each particle, arrange the frames as a grid in a single image, as shown in [Figure 1](https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524153-particleimage#1965925), then use the properties listed in Animating Particle Images to identify frames in the grid and set the speed and style of the animation.

![](https://developer.apple.com/images/com.apple.scenekit/media-1965925@2x.png)

You can also create particles that appear reflective by assigning an array of images to this property. SceneKit treats the six images in the array as a cube map and renders each particle as a solid-color, reflective sphere. The particle system’s [fresnelExponent](fresnelexponent.md) property controls each sphere’s reflectivity. For details on cube map textures, see [SCNMaterialProperty](../scnmaterialproperty.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

# particleImage (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The texture image SceneKit uses to render each particle.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id particleImage;
```

<a id="Discussion"></a>

## Discussion

Texture images help to determine visual effect rendered by the particle system. The [particleColor](particlecolor.md) property colorizes the image before rendering. You may specify an image using an [NSImage](https://developer.apple.com/documentation/appkit/nsimage) (in macOS) or [UIImage](../../uikit/uiimage.md) (in iOS) instance, or an [NSString](../../foundation/nsstring.md) or [NSURL](../../foundation/nsurl.md) instance containing the path or URL to an image file.

If the value is `nil` (the default), SceneKit renders each particle as a small white square (colorized by the [particleColor](particlecolor.md) property).

To specify a sequence of frames for animating each particle, arrange the frames as a grid in a single image, as shown in [Figure 1](https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524153-particleimage#1965925), then use the properties listed in Animating Particle Images to identify frames in the grid and set the speed and style of the animation.

![](https://developer.apple.com/images/com.apple.scenekit/media-1965925@2x.png)

You can also create particles that appear reflective by assigning an array of images to this property. SceneKit treats the six images in the array as a cube map and renders each particle as a solid-color, reflective sphere. The particle system’s [fresnelExponent](fresnelexponent.md) property controls each sphere’s reflectivity. For details on cube map textures, see [SCNMaterialProperty](../scnmaterialproperty.md).

## See Also

### Specifying Particle Appearance

- [particleSize](particlesize.md): The rendered size, in units of the scene’s world coordinate space, of the particle image. Animatable.
- [particleSizeVariation](particlesizevariation.md): The range of randomized particle sizes. Animatable.
- [particleColor](particlecolor.md): The color of newly spawned particles. Animatable.
- [particleColorVariation](particlecolorvariation.md): The ranges of randomized particle color components. Animatable.
- [fresnelExponent](fresnelexponent.md): The reflectivity exponent SceneKit uses when rendering the particle’s image as a cube map. Animatable.
- [stretchFactor](stretchfactor.md): A multiplier for stretching particle images along their direction of motion. Animatable.

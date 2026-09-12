> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterialproperty/magnificationfilter](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/magnificationfilter)

# magnificationFilter (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.

## Declaration

```swift
var magnificationFilter: SCNFilterMode { get set }
```

<a id="Discussion"></a>

## Discussion

Texture filtering determines the appearance of a material property’s contents when portions of the material surface appear larger or smaller than the original texture image. For example, the texture coordinates at a point near the camera may correspond to a small fraction of a pixel in the texture image. SceneKit uses the magnification filter to determine the color of the sampled texel at that point.

The default magnification filter is [SCNFilterMode.linear](../scnfiltermode/linear.md). See [SCNWrapMode](../scnwrapmode.md) for available modes and their effects.

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [mipFilter](mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

# magnificationFilter (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.

## Declaration

```objectivec
@property (nonatomic) SCNFilterMode magnificationFilter;
```

<a id="Discussion"></a>

## Discussion

Texture filtering determines the appearance of a material property’s contents when portions of the material surface appear larger or smaller than the original texture image. For example, the texture coordinates at a point near the camera may correspond to a small fraction of a pixel in the texture image. SceneKit uses the magnification filter to determine the color of the sampled texel at that point.

The default magnification filter is [SCNFilterModeLinear](../scnfiltermode/linear.md). See [SCNWrapMode](../scnwrapmode.md) for available modes and their effects.

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [mipFilter](mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

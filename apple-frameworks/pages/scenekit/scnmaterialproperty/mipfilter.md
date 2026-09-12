> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterialproperty/mipfilter](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/mipfilter)

# mipFilter (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.

## Declaration

```swift
var mipFilter: SCNFilterMode { get set }
```

<a id="Discussion"></a>

## Discussion

Mipmapping is a technique that can increase rendering performance when rendering a texture image at smaller sizes. SceneKit automatically creates several mipmap levels for the material property’s image contents, each at a fraction of the original image’s size. When rendering, SceneKit automatically samples texels from the mipmap level closest to the size being rendered.

If the value of this property is [SCNFilterMode.none](../scnfiltermode/none.md), SceneKit does not use mipmapping. If the value of this property is [SCNFilterMode.linear](../scnfiltermode/linear.md), SceneKit determines pixel colors using trilinear filtering. First it linearly interpolates a texel color from each of the two mipmap levels closest to the target size, then it linearly interpolates between the two results to determine the final color. This technique provides higher rendering quality at moderate performance cost.

In iOS 10, tvOS 10, watchOS 3, and macOS 10.12, the default mipmapping filter mode is [SCNFilterMode.nearest](../scnfiltermode/nearest.md). In earlier OS versions, the default mode is [SCNFilterMode.none](../scnfiltermode/none.md).

The figure below shows the effects of enabling mipmapping. In the image on the left, mipmapping is disabled, causing pixelated artifacts as the checkerboard pattern recedes into the distance. Enabling linear mipmapping results in a smoother appearance.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929775@2x.png)

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

# mipFilter (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.

## Declaration

```objectivec
@property (nonatomic) SCNFilterMode mipFilter;
```

<a id="Discussion"></a>

## Discussion

Mipmapping is a technique that can increase rendering performance when rendering a texture image at smaller sizes. SceneKit automatically creates several mipmap levels for the material property’s image contents, each at a fraction of the original image’s size. When rendering, SceneKit automatically samples texels from the mipmap level closest to the size being rendered.

If the value of this property is [SCNFilterModeNone](../scnfiltermode/none.md), SceneKit does not use mipmapping. If the value of this property is [SCNFilterModeLinear](../scnfiltermode/linear.md), SceneKit determines pixel colors using trilinear filtering. First it linearly interpolates a texel color from each of the two mipmap levels closest to the target size, then it linearly interpolates between the two results to determine the final color. This technique provides higher rendering quality at moderate performance cost.

In iOS 10, tvOS 10, watchOS 3, and macOS 10.12, the default mipmapping filter mode is [SCNFilterModeNearest](../scnfiltermode/nearest.md). In earlier OS versions, the default mode is [SCNFilterModeNone](../scnfiltermode/none.md).

The figure below shows the effects of enabling mipmapping. In the image on the left, mipmapping is disabled, causing pixelated artifacts as the checkerboard pattern recedes into the distance. Enabling linear mipmapping results in a smoother appearance.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929775@2x.png)

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

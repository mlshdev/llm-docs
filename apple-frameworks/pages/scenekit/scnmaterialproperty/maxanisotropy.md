> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterialproperty/maxanisotropy](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/maxanisotropy)

# maxAnisotropy (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.

## Declaration

```swift
var maxAnisotropy: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Anisotropic filtering is a process that increases the quality of texture rendering when a textured surface appears at an extreme angle relative to the camera. This process works by sampling from multiple mipmap levels of a texture for each rendered pixel—the term anisotropy refers to the number of samples per pixel. A higher anisotropy improves rendering quality, but at a cost to rendering performance.

For example, the image on the left in the figure below uses no anisotropic filtering, resulting in rendering artifacts as the checkerboard pattern recedes into the distance. The other images use higher [maxAnisotropy](maxanisotropy.md) values, reducing rendering artifacts. Anisotropic filtering requires mipmaps, so this property only takes effect if the value of the [mipFilter](mipfilter.md) property is not [SCNFilterMode.none](../scnfiltermode/none.md).

![](https://developer.apple.com/images/com.apple.scenekit/media-2929776@2x.png)

SceneKit automatically increases or decreases anisotropy for each rendered pixel as needed to maximize rendering quality, up to the limit specified by this property. The maximum anisotropy level used when rendering is dependent on the graphics hardware in use. Set this property’s value to the `MAXFLOAT` constant (the default) to use the highest anisotropy level supported by the GPU. A [maxAnisotropy](maxanisotropy.md) value of `1.0` or lower disables anisotropic filtering.

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

# maxAnisotropy (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.

## Declaration

```objectivec
@property (nonatomic) CGFloat maxAnisotropy;
```

<a id="Discussion"></a>

## Discussion

Anisotropic filtering is a process that increases the quality of texture rendering when a textured surface appears at an extreme angle relative to the camera. This process works by sampling from multiple mipmap levels of a texture for each rendered pixel—the term anisotropy refers to the number of samples per pixel. A higher anisotropy improves rendering quality, but at a cost to rendering performance.

For example, the image on the left in the figure below uses no anisotropic filtering, resulting in rendering artifacts as the checkerboard pattern recedes into the distance. The other images use higher [maxAnisotropy](maxanisotropy.md) values, reducing rendering artifacts. Anisotropic filtering requires mipmaps, so this property only takes effect if the value of the [mipFilter](mipfilter.md) property is not [SCNFilterModeNone](../scnfiltermode/none.md).

![](https://developer.apple.com/images/com.apple.scenekit/media-2929776@2x.png)

SceneKit automatically increases or decreases anisotropy for each rendered pixel as needed to maximize rendering quality, up to the limit specified by this property. The maximum anisotropy level used when rendering is dependent on the graphics hardware in use. Set this property’s value to the `MAXFLOAT` constant (the default) to use the highest anisotropy level supported by the GPU. A [maxAnisotropy](maxanisotropy.md) value of `1.0` or lower disables anisotropic filtering.

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

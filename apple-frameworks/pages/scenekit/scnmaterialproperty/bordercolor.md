> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterialproperty/bordercolor](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/bordercolor)

# borderColor (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

> Deprecated

## Declaration

```swift
var borderColor: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

When the material property’s contents are a texture image and its texture wrapping properties are set to [SCNWrapMode.clampToBorder](../scnwrapmode/clamptoborder.md), the border color appears in areas of a textured geometry not covered by the texture image, as shown in .

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
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.

# borderColor (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · macOS 10.8+ (deprecated in 10.12)

A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

> Deprecated

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id borderColor;
```

<a id="Discussion"></a>

## Discussion

When the material property’s contents are a texture image and its texture wrapping properties are set to [SCNWrapModeClampToBorder](../scnwrapmode/clamptoborder.md), the border color appears in areas of a textured geometry not covered by the texture image, as shown in .

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
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.

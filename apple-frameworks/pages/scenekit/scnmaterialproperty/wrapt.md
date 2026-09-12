> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterialproperty/wrapt](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/wrapt)

# wrapT (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The wrapping behavior for the T texture coordinate.

## Declaration

```swift
var wrapT: SCNWrapMode { get set }
```

<a id="Discussion"></a>

## Discussion

Wrapping modes determine texture mapping behavior for cases where a material’s texture coordinates extend outside the range from `0.0` to `1.0`. For example, if you use the [contentsTransform](contentstransform.md) property to shrink a texture relative to the surface of a geometry, you use the wrap mode properties to determine whether the texture repeats across the surface.

The T texture coordinate measures the vertical axis of a texture image, increasing from `0.0` at the bottom of the image to `1.0` at the top.

The default wrap mode is [SCNWrapMode.clamp](../scnwrapmode/clamp.md). See [SCNWrapMode](../scnwrapmode.md) for available modes and their effects.

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

# wrapT (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The wrapping behavior for the T texture coordinate.

## Declaration

```objectivec
@property (nonatomic) SCNWrapMode wrapT;
```

<a id="Discussion"></a>

## Discussion

Wrapping modes determine texture mapping behavior for cases where a material’s texture coordinates extend outside the range from `0.0` to `1.0`. For example, if you use the [contentsTransform](contentstransform.md) property to shrink a texture relative to the surface of a geometry, you use the wrap mode properties to determine whether the texture repeats across the surface.

The T texture coordinate measures the vertical axis of a texture image, increasing from `0.0` at the bottom of the image to `1.0` at the top.

The default wrap mode is [SCNWrapModeClamp](../scnwrapmode/clamp.md). See [SCNWrapMode](../scnwrapmode.md) for available modes and their effects.

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

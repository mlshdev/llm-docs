> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterialproperty/contentstransform](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/contentstransform)

# contentsTransform (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The transformation applied to the material property’s visual contents. Animatable.

## Declaration

```swift
var contentsTransform: SCNMatrix4 { get set }
```

```swift
var contentsTransform: SCNMatrix4 { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit applies this transformation to the texture coordinates provided by the geometry object the material is attached to, then uses the resulting coordinates to map the material property’s [contents](contents.md) across the surface of the material. (This transformation has no effect if the material property’s [contents](contents.md) object is a constant color.)

For example, you can use this property to grow, offset, or rotate a texture relative to the surface of a material, as illustrated below.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929785@2x.png)

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Configuring Texture Mapping Attributes

- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

# contentsTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The transformation applied to the material property’s visual contents. Animatable.

## Declaration

```objectivec
@property (nonatomic) SCNMatrix4 contentsTransform;
```

```objectivec
@property (nonatomic) SCNMatrix4 contentsTransform;
```

<a id="Discussion"></a>

## Discussion

SceneKit applies this transformation to the texture coordinates provided by the geometry object the material is attached to, then uses the resulting coordinates to map the material property’s [contents](contents.md) across the surface of the material. (This transformation has no effect if the material property’s [contents](contents.md) object is a constant color.)

For example, you can use this property to grow, offset, or rotate a texture relative to the surface of a material, as illustrated below.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929785@2x.png)

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Configuring Texture Mapping Attributes

- [wrapS](wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](../scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](wrapt.md) and [wrapS](wraps.md) properties.
- [minificationFilter](minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](../scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md), and [mipFilter](mipfilter.md) properties.
- [maxAnisotropy](maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

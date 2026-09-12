> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnfiltermode](https://developer.apple.com/documentation/scenekit/scnfiltermode)

# SCNFilterMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Texture filtering modes, used by the [minificationFilter](scnmaterialproperty/minificationfilter.md), [magnificationFilter](scnmaterialproperty/magnificationfilter.md), and [mipFilter](scnmaterialproperty/mipfilter.md) properties.

## Declaration

```swift
enum SCNFilterMode
```

<a id="overview"></a>

## Overview

Texture filtering determines the appearance of a material property’s contents when portions of the material surface appear larger or smaller than the original texture image. For example, when a texture is applied to a plane that recedes away from the camera into the distance:

- The texture coordinates at a point near the camera may correspond to a small fraction of a pixel in the original image. SceneKit uses the [magnificationFilter](scnmaterialproperty/magnificationfilter.md) property to determine the color of the sampled texel at that point.
- The texture coordinates at a point far from the camera may correspond to an area of several pixels in the original image. SceneKit uses the [minificationFilter](scnmaterialproperty/minificationfilter.md) property to determine the color of the sampled texel at that point.

SceneKit also uses the filter specified by the [mipFilter](scnmaterialproperty/mipfilter.md) property when generating mipmap levels for a texture image.

## Topics

### Constants

- [SCNFilterMode.none](scnfiltermode/none.md): No texture filtering is applied.
- [SCNFilterMode.nearest](scnfiltermode/nearest.md): Texture filtering returns the color from only one texel, whose location is nearest to the coordinates being sampled.
- [SCNFilterMode.linear](scnfiltermode/linear.md): Texture filtering sample texels from the neighborhood of the coordinates being sampled and linearly interpolates their colors.

### Initializers

- [init(rawValue:)](scnfiltermode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](scnmaterialproperty/contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](scnmaterialproperty/wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](scnmaterialproperty/wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](scnmaterialproperty/wrapt.md) and [wrapS](scnmaterialproperty/wraps.md) properties.
- [minificationFilter](scnmaterialproperty/minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](scnmaterialproperty/magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](scnmaterialproperty/mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [maxAnisotropy](scnmaterialproperty/maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](scnmaterialproperty/mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](scnmaterialproperty/bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

# SCNFilterMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Texture filtering modes, used by the [minificationFilter](scnmaterialproperty/minificationfilter.md), [magnificationFilter](scnmaterialproperty/magnificationfilter.md), and [mipFilter](scnmaterialproperty/mipfilter.md) properties.

## Declaration

```objectivec
enum SCNFilterMode : NSInteger;
```

<a id="overview"></a>

## Overview

Texture filtering determines the appearance of a material property’s contents when portions of the material surface appear larger or smaller than the original texture image. For example, when a texture is applied to a plane that recedes away from the camera into the distance:

- The texture coordinates at a point near the camera may correspond to a small fraction of a pixel in the original image. SceneKit uses the [magnificationFilter](scnmaterialproperty/magnificationfilter.md) property to determine the color of the sampled texel at that point.
- The texture coordinates at a point far from the camera may correspond to an area of several pixels in the original image. SceneKit uses the [minificationFilter](scnmaterialproperty/minificationfilter.md) property to determine the color of the sampled texel at that point.

SceneKit also uses the filter specified by the [mipFilter](scnmaterialproperty/mipfilter.md) property when generating mipmap levels for a texture image.

## Topics

### Constants

- [SCNFilterModeNone](scnfiltermode/none.md): No texture filtering is applied.
- [SCNFilterModeNearest](scnfiltermode/nearest.md): Texture filtering returns the color from only one texel, whose location is nearest to the coordinates being sampled.
- [SCNFilterModeLinear](scnfiltermode/linear.md): Texture filtering sample texels from the neighborhood of the coordinates being sampled and linearly interpolates their colors.

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](scnmaterialproperty/contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](scnmaterialproperty/wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](scnmaterialproperty/wrapt.md): The wrapping behavior for the T texture coordinate.
- [SCNWrapMode](scnwrapmode.md): Modes to apply to texture wrapping, used by the [wrapT](scnmaterialproperty/wrapt.md) and [wrapS](scnmaterialproperty/wraps.md) properties.
- [minificationFilter](scnmaterialproperty/minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](scnmaterialproperty/magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](scnmaterialproperty/mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [maxAnisotropy](scnmaterialproperty/maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](scnmaterialproperty/mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](scnmaterialproperty/bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

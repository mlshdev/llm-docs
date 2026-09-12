> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnwrapmode](https://developer.apple.com/documentation/scenekit/scnwrapmode)

# SCNWrapMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Modes to apply to texture wrapping, used by the [wrapT](scnmaterialproperty/wrapt.md) and [wrapS](scnmaterialproperty/wraps.md) properties.

## Declaration

```swift
enum SCNWrapMode
```

<a id="overview"></a>

## Overview

Wrapping modes determine texture mapping behavior for cases where a material’s texture coordinates extend outside the range from `0.0` to `1.0`. For example, if you use the [contentsTransform](scnmaterialproperty/contentstransform.md) property to shrink a texture relative to the surface of a geometry, you use the wrap mode properties to determine whether the texture repeats across the surface. The figure below shows the effect of each wrapping mode on an otherwise identical material.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929787@2x.png)

## Topics

### Constants

- [SCNWrapMode.clamp](scnwrapmode/clamp.md): Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.
- [SCNWrapMode.repeat](scnwrapmode/repeat.md): Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.
- [SCNWrapMode.clampToBorder](scnwrapmode/clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNWrapMode.mirror](scnwrapmode/mirror.md): Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.
- [SCNClamp](scnclamp.md): Equivalent to [SCNWrapMode.clamp](scnwrapmode/clamp.md).
- [SCNRepeat](scnrepeat.md): Equivalent to [SCNWrapMode.repeat](scnwrapmode/repeat.md).
- [SCNClampToBorder](scnclamptoborder.md): Equivalent to [SCNWrapMode.clampToBorder](scnwrapmode/clamptoborder.md).
- [SCNMirror](scnmirror.md): Equivalent to [SCNWrapMode.mirror](scnwrapmode/mirror.md).

### Initializers

- [init(rawValue:)](scnwrapmode/init%28rawvalue_%29.md)

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
- [minificationFilter](scnmaterialproperty/minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](scnmaterialproperty/magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](scnmaterialproperty/mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](scnmaterialproperty/minificationfilter.md), [magnificationFilter](scnmaterialproperty/magnificationfilter.md), and [mipFilter](scnmaterialproperty/mipfilter.md) properties.
- [maxAnisotropy](scnmaterialproperty/maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](scnmaterialproperty/mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](scnmaterialproperty/bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

# SCNWrapMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Modes to apply to texture wrapping, used by the [wrapT](scnmaterialproperty/wrapt.md) and [wrapS](scnmaterialproperty/wraps.md) properties.

## Declaration

```objectivec
enum SCNWrapMode : NSInteger;
```

<a id="overview"></a>

## Overview

Wrapping modes determine texture mapping behavior for cases where a material’s texture coordinates extend outside the range from `0.0` to `1.0`. For example, if you use the [contentsTransform](scnmaterialproperty/contentstransform.md) property to shrink a texture relative to the surface of a geometry, you use the wrap mode properties to determine whether the texture repeats across the surface. The figure below shows the effect of each wrapping mode on an otherwise identical material.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929787@2x.png)

## Topics

### Constants

- [SCNWrapModeClamp](scnwrapmode/clamp.md): Texture coordinates are clamped to the range from `0.0` to `1.0`, inclusive.
- [SCNWrapModeRepeat](scnwrapmode/repeat.md): Texture sampling uses only the fractional part of texture coordinates, passing through the range from `0.0` to (but not including) `1.0`.
- [SCNWrapModeClampToBorder](scnwrapmode/clamptoborder.md): Texture sampling uses texture colors for coordinates in the range from `0.0` to `1.0` (inclusive) and the material property’s [borderColor](scnmaterialproperty/bordercolor.md) value otherwise.
- [SCNWrapModeMirror](scnwrapmode/mirror.md): Texture sampling of texture coordinates outside range from `0.0` to `1.0` should behave as if the range reverses before repeating.
- [SCNClamp](scnclamp.md): Equivalent to [SCNWrapModeClamp](scnwrapmode/clamp.md).
- [SCNRepeat](scnrepeat.md): Equivalent to [SCNWrapModeRepeat](scnwrapmode/repeat.md).
- [SCNClampToBorder](scnclamptoborder.md): Equivalent to [SCNWrapModeClampToBorder](scnwrapmode/clamptoborder.md).
- [SCNMirror](scnmirror.md): Equivalent to [SCNWrapModeMirror](scnwrapmode/mirror.md).

## See Also

### Configuring Texture Mapping Attributes

- [contentsTransform](scnmaterialproperty/contentstransform.md): The transformation applied to the material property’s visual contents. Animatable.
- [wrapS](scnmaterialproperty/wraps.md): The wrapping behavior for the S texture coordinate.
- [wrapT](scnmaterialproperty/wrapt.md): The wrapping behavior for the T texture coordinate.
- [minificationFilter](scnmaterialproperty/minificationfilter.md): Texture filtering for rendering the material property’s image contents at a size smaller than that of the original image.
- [magnificationFilter](scnmaterialproperty/magnificationfilter.md): Texture filtering for rendering the material property’s image contents at a size larger than that of the original image.
- [mipFilter](scnmaterialproperty/mipfilter.md): Texture filtering for using mipmaps to render the material property’s image contents at a size smaller than that of the original image.
- [SCNFilterMode](scnfiltermode.md): Texture filtering modes, used by the [minificationFilter](scnmaterialproperty/minificationfilter.md), [magnificationFilter](scnmaterialproperty/magnificationfilter.md), and [mipFilter](scnmaterialproperty/mipfilter.md) properties.
- [maxAnisotropy](scnmaterialproperty/maxanisotropy.md): The amount of anisotropic texture filtering to be used when rendering the material property’s image contents.
- [mappingChannel](scnmaterialproperty/mappingchannel.md): The source of texture coordinates for mapping the material property’s image contents.
- [borderColor](scnmaterialproperty/bordercolor.md): Deprecated. A color used to fill in areas of a material’s surface not covered by the material property’s image contents.

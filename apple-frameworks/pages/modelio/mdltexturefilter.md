> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturefilter](https://developer.apple.com/documentation/modelio/mdltexturefilter)

# MDLTextureFilter (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of filtering modes for a renderer to use when sampling from a texture.

## Declaration

```swift
class MDLTextureFilter
```

<a id="overview"></a>

## Overview

A texture filter, together with a [MDLTexture](mdltexture.md) object and transform information, form a [MDLTextureSampler](mdltexturesampler.md) object, which describes a texture and its rendering parameters for use in rendering one aspect of a [MDLMaterial](mdlmaterial.md) object’s surface appearance.

## Topics

### Managing Texture Coordinate Wrap Modes

- [sWrapMode](mdltexturefilter/swrapmode.md): The coordinate wrapping mode for texture t-coordinates.
- [tWrapMode](mdltexturefilter/twrapmode.md): The coordinate wrapping mode for texture t-coordinates.
- [rWrapMode](mdltexturefilter/rwrapmode.md): The coordinate wrapping mode for texture r-coordinates.

### Managing Texture Filter Modes

- [minFilter](mdltexturefilter/minfilter.md): The filter mode for rendering textures at sizes smaller than that of the original image.
- [magFilter](mdltexturefilter/magfilter.md): The filter mode for rendering textures at sizes larger than that of the original image.
- [mipFilter](mdltexturefilter/mipfilter.md): The filter mode for rendering textures using mipmapping.

### Constants

- [MDLMaterialTextureWrapMode](mdlmaterialtexturewrapmode.md): Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.
- [MDLMaterialTextureFilterMode](mdlmaterialtexturefiltermode.md): Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.
- [MDLMaterialMipMapFilterMode](mdlmaterialmipmapfiltermode.md): Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Textures

- [MDLTexture](mdltexture.md): A source of texel data to be used in rendering material surface appearances.
- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

# MDLTextureFilter (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of filtering modes for a renderer to use when sampling from a texture.

## Declaration

```objectivec
@interface MDLTextureFilter : NSObject
```

<a id="overview"></a>

## Overview

A texture filter, together with a [MDLTexture](mdltexture.md) object and transform information, form a [MDLTextureSampler](mdltexturesampler.md) object, which describes a texture and its rendering parameters for use in rendering one aspect of a [MDLMaterial](mdlmaterial.md) object’s surface appearance.

## Topics

### Managing Texture Coordinate Wrap Modes

- [sWrapMode](mdltexturefilter/swrapmode.md): The coordinate wrapping mode for texture t-coordinates.
- [tWrapMode](mdltexturefilter/twrapmode.md): The coordinate wrapping mode for texture t-coordinates.
- [rWrapMode](mdltexturefilter/rwrapmode.md): The coordinate wrapping mode for texture r-coordinates.

### Managing Texture Filter Modes

- [minFilter](mdltexturefilter/minfilter.md): The filter mode for rendering textures at sizes smaller than that of the original image.
- [magFilter](mdltexturefilter/magfilter.md): The filter mode for rendering textures at sizes larger than that of the original image.
- [mipFilter](mdltexturefilter/mipfilter.md): The filter mode for rendering textures using mipmapping.

### Constants

- [MDLMaterialTextureWrapMode](mdlmaterialtexturewrapmode.md): Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.
- [MDLMaterialTextureFilterMode](mdlmaterialtexturefiltermode.md): Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.
- [MDLMaterialMipMapFilterMode](mdlmaterialmipmapfiltermode.md): Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Textures

- [MDLTexture](mdltexture.md): A source of texel data to be used in rendering material surface appearances.
- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

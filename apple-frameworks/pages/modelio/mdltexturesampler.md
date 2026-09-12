> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturesampler](https://developer.apple.com/documentation/modelio/mdltexturesampler)

# MDLTextureSampler (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

## Declaration

```swift
class MDLTextureSampler
```

<a id="overview"></a>

## Overview

You use texture samplers as material property values with the [MDLMaterialProperty](mdlmaterialproperty.md) class.

## Topics

### Working with Texture Parameters

- [texture](mdltexturesampler/texture.md): The texture object that provides image data for sampling.
- [hardwareFilter](mdltexturesampler/hardwarefilter.md): An object that describes filtering modes for sampling from the texture.
- [transform](mdltexturesampler/transform.md): The transformation to be applied to texture coordinate data before sampling from the texture.

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
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.

# MDLTextureSampler (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

## Declaration

```objectivec
@interface MDLTextureSampler : NSObject
```

<a id="overview"></a>

## Overview

You use texture samplers as material property values with the [MDLMaterialProperty](mdlmaterialproperty.md) class.

## Topics

### Working with Texture Parameters

- [texture](mdltexturesampler/texture.md): The texture object that provides image data for sampling.
- [hardwareFilter](mdltexturesampler/hardwarefilter.md): An object that describes filtering modes for sampling from the texture.
- [transform](mdltexturesampler/transform.md): The transformation to be applied to texture coordinate data before sampling from the texture.

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
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.

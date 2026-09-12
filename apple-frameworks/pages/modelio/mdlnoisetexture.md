> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlnoisetexture](https://developer.apple.com/documentation/modelio/mdlnoisetexture)

# MDLNoiseTexture (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator of texel data that creates a field of random noise.

## Declaration

```swift
class MDLNoiseTexture
```

<a id="overview"></a>

## Overview

Like other procedural [MDLTexture](mdltexture.md) subclasses, the [MDLNoiseTexture](mdlnoisetexture.md) class generates texel data only when that data is first referenced, and then caches it for future use.

## Topics

### Creating a Noise Texture

- [init(scalarNoiseWithSmoothness:name:textureDimensions:channelCount:channelEncoding:grayscale:)](mdlnoisetexture/init%28scalarnoisewithsmoothness_name_texturedimensions_channelcount_channelencoding_grayscale_%29.md): Initializes a noise texture that creates random color noise.
- [init(vectorNoiseWithSmoothness:name:textureDimensions:channelEncoding:)](mdlnoisetexture/init%28vectornoisewithsmoothness_name_texturedimensions_channelencoding_%29.md): Initializes a noise texture that creates random directional noise.

### Initializers

- [init(cellularNoiseWithFrequency:name:textureDimensions:channelEncoding:)](mdlnoisetexture/init%28cellularnoisewithfrequency_name_texturedimensions_channelencoding_%29.md)

## Relationships

### Inherits From

- [MDLTexture](mdltexture.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Textures

- [MDLTexture](mdltexture.md): A source of texel data to be used in rendering material surface appearances.
- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

# MDLNoiseTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator of texel data that creates a field of random noise.

## Declaration

```objectivec
@interface MDLNoiseTexture : MDLTexture
```

<a id="overview"></a>

## Overview

Like other procedural [MDLTexture](mdltexture.md) subclasses, the [MDLNoiseTexture](mdlnoisetexture.md) class generates texel data only when that data is first referenced, and then caches it for future use.

## Topics

### Creating a Noise Texture

- [initScalarNoiseWithSmoothness:name:textureDimensions:channelCount:channelEncoding:grayscale:](mdlnoisetexture/init%28scalarnoisewithsmoothness_name_texturedimensions_channelcount_channelencoding_grayscale_%29.md): Initializes a noise texture that creates random color noise.
- [initVectorNoiseWithSmoothness:name:textureDimensions:channelEncoding:](mdlnoisetexture/init%28vectornoisewithsmoothness_name_texturedimensions_channelencoding_%29.md): Initializes a noise texture that creates random directional noise.

### Instance Methods

- [initCellularNoiseWithFrequency:name:textureDimensions:channelEncoding:](mdlnoisetexture/init%28cellularnoisewithfrequency_name_texturedimensions_channelencoding_%29.md)

## Relationships

### Inherits From

- [MDLTexture](mdltexture.md)

## See Also

### Textures

- [MDLTexture](mdltexture.md): A source of texel data to be used in rendering material surface appearances.
- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

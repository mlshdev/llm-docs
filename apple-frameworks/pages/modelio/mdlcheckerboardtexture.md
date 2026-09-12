> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcheckerboardtexture](https://developer.apple.com/documentation/modelio/mdlcheckerboardtexture)

# MDLCheckerboardTexture (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator of texel data that creates a checkerboard pattern with two specified colors.

## Declaration

```swift
class MDLCheckerboardTexture
```

<a id="overview"></a>

## Overview

Like other procedural [MDLTexture](mdltexture.md) subclasses, the [MDLCheckerboardTexture](mdlcheckerboardtexture.md) class generates texel data only when that data is first referenced, and then caches it for future use.

## Topics

### Creating a Checkerboard Texture

- [init(divisions:name:dimensions:channelCount:channelEncoding:color1:color2:)](mdlcheckerboardtexture/init%28divisions_name_dimensions_channelcount_channelencoding_color1_color2_%29.md): Initializes a checkerboard texture with the specified colors and other properties.

### Configuring the Checkerboard Pattern

- [color1](mdlcheckerboardtexture/color1.md): The color for half of the squares in the checkerboard pattern.
- [color2](mdlcheckerboardtexture/color2.md): The color for the other half of the squares in the checkerboard pattern.
- [divisions](mdlcheckerboardtexture/divisions.md): The number of squares along each dimension in the checkerboard pattern.

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
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

# MDLCheckerboardTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator of texel data that creates a checkerboard pattern with two specified colors.

## Declaration

```objectivec
@interface MDLCheckerboardTexture : MDLTexture
```

<a id="overview"></a>

## Overview

Like other procedural [MDLTexture](mdltexture.md) subclasses, the [MDLCheckerboardTexture](mdlcheckerboardtexture.md) class generates texel data only when that data is first referenced, and then caches it for future use.

## Topics

### Creating a Checkerboard Texture

- [initWithDivisions:name:dimensions:channelCount:channelEncoding:color1:color2:](mdlcheckerboardtexture/init%28divisions_name_dimensions_channelcount_channelencoding_color1_color2_%29.md): Initializes a checkerboard texture with the specified colors and other properties.

### Configuring the Checkerboard Pattern

- [color1](mdlcheckerboardtexture/color1.md): The color for half of the squares in the checkerboard pattern.
- [color2](mdlcheckerboardtexture/color2.md): The color for the other half of the squares in the checkerboard pattern.
- [divisions](mdlcheckerboardtexture/divisions.md): The number of squares along each dimension in the checkerboard pattern.

## Relationships

### Inherits From

- [MDLTexture](mdltexture.md)

## See Also

### Textures

- [MDLTexture](mdltexture.md): A source of texel data to be used in rendering material surface appearances.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

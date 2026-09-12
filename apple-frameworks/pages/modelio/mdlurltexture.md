> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlurltexture](https://developer.apple.com/documentation/modelio/mdlurltexture)

# MDLURLTexture (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A lightweight reference to a URL from which to load texture data.

## Declaration

```swift
class MDLURLTexture
```

<a id="overview"></a>

## Overview

Unlike the superclass [MDLTexture](mdltexture.md), the [MDLURLTexture](mdlurltexture.md) class loads texel data from the file at that URL only when that data is first referenced, and then caches it for future use.

## Topics

### Creating a URL Texture

- [init(url:name:)](mdlurltexture/init%28url_name_%29-1y03u.md): Initializes a texture that loads its texel data from a file at the specified URL.

### Inspecting the Texture URL

- [url](mdlurltexture/url.md): The URL from which to load texture data.

### Initializers

- [init(URL:name:)](mdlurltexture/init%28url_name_%29-5dfk1.md)

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
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

# MDLURLTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A lightweight reference to a URL from which to load texture data.

## Declaration

```objectivec
@interface MDLURLTexture : MDLTexture
```

<a id="overview"></a>

## Overview

Unlike the superclass [MDLTexture](mdltexture.md), the [MDLURLTexture](mdlurltexture.md) class loads texel data from the file at that URL only when that data is first referenced, and then caches it for future use.

## Topics

### Creating a URL Texture

- [initWithURL:name:](mdlurltexture/init%28url_name_%29-1y03u.md): Initializes a texture that loads its texel data from a file at the specified URL.

### Inspecting the Texture URL

- [URL](mdlurltexture/url.md): The URL from which to load texture data.

## Relationships

### Inherits From

- [MDLTexture](mdltexture.md)

## See Also

### Textures

- [MDLTexture](mdltexture.md): A source of texel data to be used in rendering material surface appearances.
- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

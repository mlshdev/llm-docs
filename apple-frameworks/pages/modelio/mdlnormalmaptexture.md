> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlnormalmaptexture](https://developer.apple.com/documentation/modelio/mdlnormalmaptexture)

# MDLNormalMapTexture (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator of texel data that computes a normal map from a supplied texture.

## Declaration

```swift
class MDLNormalMapTexture
```

<a id="overview"></a>

## Overview

This class examines the shapes of contrasting areas in an input texture to generate a normal map that produces an embossed appearance when rendered with lighting. The figure below shows the normal map generated from an example texture and the effect of using this normal map with lighting in a typical renderer.

![](https://developer.apple.com/images/com.apple.modelio/media-1965618@2x.png)

Like other procedural [MDLTexture](mdltexture.md) subclasses, the [MDLNormalMapTexture](mdlnormalmaptexture.md) class generates texel data only when that data is first referenced, and caches it for future use.

## Topics

### Creating a Normal Map Texture

- [init(byGeneratingNormalMapWith:name:smoothness:contrast:)](mdlnormalmaptexture/init%28bygeneratingnormalmapwith_name_smoothness_contrast_%29.md): Initializes a normal map to be generated from the specified texture.

### Initializers

- [init(byGeneratingNormalMapWithTexture:name:smoothness:contrast:)](mdlnormalmaptexture/init%28bygeneratingnormalmapwithtexture_name_smoothness_contrast_%29.md)

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
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

# MDLNormalMapTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator of texel data that computes a normal map from a supplied texture.

## Declaration

```objectivec
@interface MDLNormalMapTexture : MDLTexture
```

<a id="overview"></a>

## Overview

This class examines the shapes of contrasting areas in an input texture to generate a normal map that produces an embossed appearance when rendered with lighting. The figure below shows the normal map generated from an example texture and the effect of using this normal map with lighting in a typical renderer.

![](https://developer.apple.com/images/com.apple.modelio/media-1965618@2x.png)

Like other procedural [MDLTexture](mdltexture.md) subclasses, the [MDLNormalMapTexture](mdlnormalmaptexture.md) class generates texel data only when that data is first referenced, and caches it for future use.

## Topics

### Creating a Normal Map Texture

- [initByGeneratingNormalMapWithTexture:name:smoothness:contrast:](mdlnormalmaptexture/init%28bygeneratingnormalmapwith_name_smoothness_contrast_%29.md): Initializes a normal map to be generated from the specified texture.

## Relationships

### Inherits From

- [MDLTexture](mdltexture.md)

## See Also

### Textures

- [MDLTexture](mdltexture.md): A source of texel data to be used in rendering material surface appearances.
- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLColorSwatchTexture](mdlcolorswatchtexture.md): A generator of texel data that creates a gradient between two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

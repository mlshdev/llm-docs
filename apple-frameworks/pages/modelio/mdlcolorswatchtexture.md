> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlcolorswatchtexture](https://developer.apple.com/documentation/modelio/mdlcolorswatchtexture)

# MDLColorSwatchTexture (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator of texel data that creates a gradient between two specified colors.

## Declaration

```swift
class MDLColorSwatchTexture
```

<a id="overview"></a>

## Overview

A MDLColorSwatchTexture object procedurally generates texel data by creating a gradient between two colors. Like other procedural [MDLTexture](mdltexture.md) subclasses, the [MDLColorSwatchTexture](mdlcolorswatchtexture.md) class generates texel data only when that data is first referenced, and caches it for future use.

## Topics

### Creating a Color Swatch Texture

- [init(colorGradientFrom:to:name:textureDimensions:)](mdlcolorswatchtexture/init%28colorgradientfrom_to_name_texturedimensions_%29.md): Initializes a texture that creates a vertical gradient between two colors.
- [init(colorTemperatureGradientFrom:toColorTemperature:name:textureDimensions:)](mdlcolorswatchtexture/init%28colortemperaturegradientfrom_tocolortemperature_name_texturedimensions_%29.md): Initializes a texture that creates a vertical gradient between two color temperatures.

### Initializers

- [init(colorGradientFrom:toColor:name:textureDimensions:)](mdlcolorswatchtexture/init%28colorgradientfrom_tocolor_name_texturedimensions_%29.md)

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
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

# MDLColorSwatchTexture (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A generator of texel data that creates a gradient between two specified colors.

## Declaration

```objectivec
@interface MDLColorSwatchTexture : MDLTexture
```

<a id="overview"></a>

## Overview

A MDLColorSwatchTexture object procedurally generates texel data by creating a gradient between two colors. Like other procedural [MDLTexture](mdltexture.md) subclasses, the [MDLColorSwatchTexture](mdlcolorswatchtexture.md) class generates texel data only when that data is first referenced, and caches it for future use.

## Topics

### Creating a Color Swatch Texture

- [initWithColorGradientFrom:toColor:name:textureDimensions:](mdlcolorswatchtexture/init%28colorgradientfrom_to_name_texturedimensions_%29.md): Initializes a texture that creates a vertical gradient between two colors.
- [initWithColorTemperatureGradientFrom:toColorTemperature:name:textureDimensions:](mdlcolorswatchtexture/init%28colortemperaturegradientfrom_tocolortemperature_name_texturedimensions_%29.md): Initializes a texture that creates a vertical gradient between two color temperatures.

## Relationships

### Inherits From

- [MDLTexture](mdltexture.md)

## See Also

### Textures

- [MDLTexture](mdltexture.md): A source of texel data to be used in rendering material surface appearances.
- [MDLCheckerboardTexture](mdlcheckerboardtexture.md): A generator of texel data that creates a checkerboard pattern with two specified colors.
- [MDLNoiseTexture](mdlnoisetexture.md): A generator of texel data that creates a field of random noise.
- [MDLNormalMapTexture](mdlnormalmaptexture.md): A generator of texel data that computes a normal map from a supplied texture.
- [MDLSkyCubeTexture](mdlskycubetexture.md): A generator of texel data that creates cube textures using a physically realistic simulation of the sunlit sky.
- [MDLURLTexture](mdlurltexture.md): A lightweight reference to a URL from which to load texture data.
- [MDLTextureFilter](mdltexturefilter.md): A description of filtering modes for a renderer to use when sampling from a texture.
- [MDLTextureSampler](mdltexturesampler.md): An object that pairs a source of texture data with sampling parameters to be used in rendering the texture.

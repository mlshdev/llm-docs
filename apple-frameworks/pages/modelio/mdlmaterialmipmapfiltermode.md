> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialmipmapfiltermode](https://developer.apple.com/documentation/modelio/mdlmaterialmipmapfiltermode)

# MDLMaterialMipMapFilterMode (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.

## Declaration

```swift
enum MDLMaterialMipMapFilterMode
```

## Topics

### Constants

- [MDLMaterialMipMapFilterMode.nearest](mdlmaterialmipmapfiltermode/nearest.md): Sampling a texture at a size between mipmap levels should return a texel value from the nearest mipmap level.
- [MDLMaterialMipMapFilterMode.linear](mdlmaterialmipmapfiltermode/linear.md): Sampling a texture at a size between mipmap levels should linearly interpolate between mipmap levels.

### Initializers

- [init(rawValue:)](mdlmaterialmipmapfiltermode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MDLMaterialTextureWrapMode](mdlmaterialtexturewrapmode.md): Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.
- [MDLMaterialTextureFilterMode](mdlmaterialtexturefiltermode.md): Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.

# MDLMaterialMipMapFilterMode (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.

## Declaration

```objectivec
enum MDLMaterialMipMapFilterMode : NSUInteger;
```

## Topics

### Constants

- [MDLMaterialMipMapFilterModeNearest](mdlmaterialmipmapfiltermode/nearest.md): Sampling a texture at a size between mipmap levels should return a texel value from the nearest mipmap level.
- [MDLMaterialMipMapFilterModeLinear](mdlmaterialmipmapfiltermode/linear.md): Sampling a texture at a size between mipmap levels should linearly interpolate between mipmap levels.

## See Also

### Constants

- [MDLMaterialTextureWrapMode](mdlmaterialtexturewrapmode.md): Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.
- [MDLMaterialTextureFilterMode](mdlmaterialtexturefiltermode.md): Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.

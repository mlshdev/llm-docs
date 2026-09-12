> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialtexturefiltermode](https://developer.apple.com/documentation/modelio/mdlmaterialtexturefiltermode)

# MDLMaterialTextureFilterMode (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.

## Declaration

```swift
enum MDLMaterialTextureFilterMode
```

## Topics

### Constants

- [MDLMaterialTextureFilterMode.nearest](mdlmaterialtexturefiltermode/nearest.md): Sampling at texture coordinates between texels should return the value of the nearest texel.
- [MDLMaterialTextureFilterMode.linear](mdlmaterialtexturefiltermode/linear.md): Sampling at texture coordinates between texels should linearly interpolate between texel values.

### Initializers

- [init(rawValue:)](mdlmaterialtexturefiltermode/init%28rawvalue_%29.md)

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
- [MDLMaterialMipMapFilterMode](mdlmaterialmipmapfiltermode.md): Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.

# MDLMaterialTextureFilterMode (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.

## Declaration

```objectivec
enum MDLMaterialTextureFilterMode : NSUInteger;
```

## Topics

### Constants

- [MDLMaterialTextureFilterModeNearest](mdlmaterialtexturefiltermode/nearest.md): Sampling at texture coordinates between texels should return the value of the nearest texel.
- [MDLMaterialTextureFilterModeLinear](mdlmaterialtexturefiltermode/linear.md): Sampling at texture coordinates between texels should linearly interpolate between texel values.

## See Also

### Constants

- [MDLMaterialTextureWrapMode](mdlmaterialtexturewrapmode.md): Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.
- [MDLMaterialMipMapFilterMode](mdlmaterialmipmapfiltermode.md): Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.

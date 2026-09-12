> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialtexturewrapmode](https://developer.apple.com/documentation/modelio/mdlmaterialtexturewrapmode)

# MDLMaterialTextureWrapMode (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.

## Declaration

```swift
enum MDLMaterialTextureWrapMode
```

## Topics

### Constants

- [MDLMaterialTextureWrapMode.clamp](mdlmaterialtexturewrapmode/clamp.md): Sampling at any texture coordinate outside the `0.0` to `1.0` range returns the texel color from the nearest edge.
- [MDLMaterialTextureWrapMode.repeat](mdlmaterialtexturewrapmode/repeat.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a repeated tiling effect.
- [MDLMaterialTextureWrapMode.mirror](mdlmaterialtexturewrapmode/mirror.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a mirrored tiling effect.

### Initializers

- [init(rawValue:)](mdlmaterialtexturewrapmode/init%28rawvalue_%29.md)

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

- [MDLMaterialTextureFilterMode](mdlmaterialtexturefiltermode.md): Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.
- [MDLMaterialMipMapFilterMode](mdlmaterialmipmapfiltermode.md): Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.

# MDLMaterialTextureWrapMode (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Modes for sampling textures at coordinates outside the texture bounds, used by the [sWrapMode](mdltexturefilter/swrapmode.md), [tWrapMode](mdltexturefilter/twrapmode.md), and [rWrapMode](mdltexturefilter/rwrapmode.md) properties.

## Declaration

```objectivec
enum MDLMaterialTextureWrapMode : NSUInteger;
```

## Topics

### Constants

- [MDLMaterialTextureWrapModeClamp](mdlmaterialtexturewrapmode/clamp.md): Sampling at any texture coordinate outside the `0.0` to `1.0` range returns the texel color from the nearest edge.
- [MDLMaterialTextureWrapModeRepeat](mdlmaterialtexturewrapmode/repeat.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a repeated tiling effect.
- [MDLMaterialTextureWrapModeMirror](mdlmaterialtexturewrapmode/mirror.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a mirrored tiling effect.

## See Also

### Constants

- [MDLMaterialTextureFilterMode](mdlmaterialtexturefiltermode.md): Modes for sampling textures at coordinates between texels, used by the [minFilter](mdltexturefilter/minfilter.md) and [magFilter](mdltexturefilter/magfilter.md) properties.
- [MDLMaterialMipMapFilterMode](mdlmaterialmipmapfiltermode.md): Modes for sampling textures at sizes between mipmap levels, used by the [mipFilter](mdltexturefilter/mipfilter.md) property.

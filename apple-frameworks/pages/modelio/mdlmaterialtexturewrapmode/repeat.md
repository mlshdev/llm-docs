> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmaterialtexturewrapmode/repeat](https://developer.apple.com/documentation/modelio/mdlmaterialtexturewrapmode/repeat)

# MDLMaterialTextureWrapMode.repeat (Swift)

**Framework:** Model I/O  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sampling at texture coordinates outside the `0.0` to `1.0` range results in a repeated tiling effect.

## Declaration

```swift
case `repeat`
```

<a id="Discussion"></a>

## Discussion

This effect disregards the whole part of a texture coordinate. For example, sampling at a coordinate value of `2.7` or `5.7` returns the texel color for the coordinate value of `0.7`. The visual effect of this mode is to repeat the texture image endlessly across a surface rendered with the texture.

## See Also

### Constants

- [MDLMaterialTextureWrapMode.clamp](clamp.md): Sampling at any texture coordinate outside the `0.0` to `1.0` range returns the texel color from the nearest edge.
- [MDLMaterialTextureWrapMode.mirror](mirror.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a mirrored tiling effect.

# MDLMaterialTextureWrapModeRepeat (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sampling at texture coordinates outside the `0.0` to `1.0` range results in a repeated tiling effect.

## Declaration

```objectivec
MDLMaterialTextureWrapModeRepeat
```

<a id="Discussion"></a>

## Discussion

This effect disregards the whole part of a texture coordinate. For example, sampling at a coordinate value of `2.7` or `5.7` returns the texel color for the coordinate value of `0.7`. The visual effect of this mode is to repeat the texture image endlessly across a surface rendered with the texture.

## See Also

### Constants

- [MDLMaterialTextureWrapModeClamp](clamp.md): Sampling at any texture coordinate outside the `0.0` to `1.0` range returns the texel color from the nearest edge.
- [MDLMaterialTextureWrapModeMirror](mirror.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a mirrored tiling effect.

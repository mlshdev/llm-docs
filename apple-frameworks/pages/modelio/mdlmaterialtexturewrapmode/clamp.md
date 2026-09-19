> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlmaterialtexturewrapmode/clamp

# MDLMaterialTextureWrapMode.clamp (Swift)

**Framework:** Model I/O  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sampling at any texture coordinate outside the `0.0` to `1.0` range returns the texel color from the nearest edge.

## Declaration

```swift
case clamp
```

## See Also

### Constants

- [MDLMaterialTextureWrapMode.repeat](repeat.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a repeated tiling effect.
- [MDLMaterialTextureWrapMode.mirror](mirror.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a mirrored tiling effect.

# MDLMaterialTextureWrapModeClamp (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sampling at any texture coordinate outside the `0.0` to `1.0` range returns the texel color from the nearest edge.

## Declaration

```objectivec
MDLMaterialTextureWrapModeClamp
```

## See Also

### Constants

- [MDLMaterialTextureWrapModeRepeat](repeat.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a repeated tiling effect.
- [MDLMaterialTextureWrapModeMirror](mirror.md): Sampling at texture coordinates outside the `0.0` to `1.0` range results in a mirrored tiling effect.

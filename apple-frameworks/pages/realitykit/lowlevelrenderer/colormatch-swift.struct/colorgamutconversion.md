> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/colormatch-swift.struct/colorgamutconversion](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/colormatch-swift.struct/colorgamutconversion)

# colorGamutConversion

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 3×3 half-precision matrix that converts RGB values from the renderer’s working color space to the output display’s color space.

## Declaration

```swift
var colorGamutConversion: simd_half3x3 { get set }
```

## See Also

### Configuring color matching

- [enableClampValues](enableclampvalues.md): A Boolean value that indicates whether output values are clamped to `[0, 1]` after gamut conversion.

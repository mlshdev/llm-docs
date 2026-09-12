> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/colormatch-swift.struct/enableclampvalues](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/colormatch-swift.struct/enableclampvalues)

# enableClampValues

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether output values are clamped to `[0, 1]` after gamut conversion.

## Declaration

```swift
var enableClampValues: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this to `true` when the output texture uses a non-extended pixel format.

## See Also

### Configuring color matching

- [colorGamutConversion](colorgamutconversion.md): A 3×3 half-precision matrix that converts RGB values from the renderer’s working color space to the output display’s color space.

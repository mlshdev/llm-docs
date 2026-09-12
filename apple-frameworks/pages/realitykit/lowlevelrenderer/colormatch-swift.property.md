> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/colormatch-swift.property](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/colormatch-swift.property)

# colorMatch

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The active color gamut conversion. The renderer applies this value only when `enableColorMatch` is `true` in `Configuration`.

## Declaration

```swift
final var colorMatch: LowLevelRenderer.ColorMatch { get set }
```

## See Also

### Managing color matching

- [LowLevelRenderer.ColorMatch](colormatch-swift.struct.md): A color gamut conversion applied during resolve.
- [setColorMatch(targetingColorSpace:)](setcolormatch%28targetingcolorspace_%29.md): Updates the color match by computing a gamut conversion matrix from the renderer’s working color space to the given target display color space.
- [workingColorSpace](workingcolorspace.md): The color space in which the renderer performs all shading calculations.

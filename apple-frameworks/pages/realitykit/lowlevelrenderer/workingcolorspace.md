> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/workingcolorspace](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/workingcolorspace)

# workingColorSpace

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The color space in which the renderer performs all shading calculations.

## Declaration

```swift
final var workingColorSpace: CGColorSpace { get }
```

<a id="discussion"></a>

## Discussion

Do not assume a fixed working color space. Query this property and pass its value as `workingColorSpace:` to `ColorMatch.init(workingColorSpace:targetColorSpace:)` to compute a correct gamut conversion matrix.

## See Also

### Managing color matching

- [colorMatch](colormatch-swift.property.md): The active color gamut conversion. The renderer applies this value only when `enableColorMatch` is `true` in `Configuration`.
- [LowLevelRenderer.ColorMatch](colormatch-swift.struct.md): A color gamut conversion applied during resolve.
- [setColorMatch(targetingColorSpace:)](setcolormatch%28targetingcolorspace_%29.md): Updates the color match by computing a gamut conversion matrix from the renderer’s working color space to the given target display color space.

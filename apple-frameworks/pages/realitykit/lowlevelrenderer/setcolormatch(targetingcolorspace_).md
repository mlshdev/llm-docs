> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/setcolormatch(targetingcolorspace:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/setcolormatch(targetingcolorspace:))

# setColorMatch(targetingColorSpace:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Updates the color match by computing a gamut conversion matrix from the renderer’s working color space to the given target display color space.

## Declaration

```swift
final func setColorMatch(targetingColorSpace targetColorSpace: CGColorSpace) throws(LowLevelRendererError)
```

## Parameters

- `targetColorSpace`: The target display color space to convert to.

<a id="discussion"></a>

## Discussion

> **Throws**

> [LowLevelRendererError](../lowlevelrenderererror.md) if the target color space is not a supported linear gamut.

## See Also

### Managing color matching

- [colorMatch](colormatch-swift.property.md): The active color gamut conversion. The renderer applies this value only when `enableColorMatch` is `true` in `Configuration`.
- [LowLevelRenderer.ColorMatch](colormatch-swift.struct.md): A color gamut conversion applied during resolve.
- [workingColorSpace](workingcolorspace.md): The color space in which the renderer performs all shading calculations.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/colormatch-swift.struct/init(workingcolorspace:targetcolorspace:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/colormatch-swift.struct/init(workingcolorspace:targetcolorspace:))

# init(workingColorSpace:targetColorSpace:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a color match from a working color space and a target display color space.

## Declaration

```swift
init(workingColorSpace: CGColorSpace, targetColorSpace: CGColorSpace) throws(LowLevelRendererError)
```

## Parameters

- `workingColorSpace`: The color space in which the renderer performs shading calculations.
- `targetColorSpace`: The color space of the output display to convert to.

<a id="discussion"></a>

## Discussion

> **Throws**

> [LowLevelRendererError](../../lowlevelrenderererror.md) if either color space is not a supported linear gamut.

## See Also

### Creating a color match

- [init(colorGamutConversion:enableClampValues:)](init%28colorgamutconversion_enableclampvalues_%29.md): Creates a color match using an explicit gamut conversion matrix.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/colormatch-swift.struct](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/colormatch-swift.struct)

# LowLevelRenderer.ColorMatch

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A color gamut conversion applied during resolve.

## Declaration

```swift
struct ColorMatch
```

<a id="overview"></a>

## Overview

The `colorGamutConversion` matrix transforms from the renderer’s working color space to the output display’s color space. Use `LowLevelRenderer.ColorMatch.init(workingColorSpace:targetColorSpace:)` to compute the correct matrix from a `CGColorSpace` pair, rather than constructing it manually.

## Topics

### Creating a color match

- [init(workingColorSpace:targetColorSpace:)](colormatch-swift.struct/init%28workingcolorspace_targetcolorspace_%29.md): Creates a color match from a working color space and a target display color space.
- [init(colorGamutConversion:enableClampValues:)](colormatch-swift.struct/init%28colorgamutconversion_enableclampvalues_%29.md): Creates a color match using an explicit gamut conversion matrix.

### Configuring color matching

- [colorGamutConversion](colormatch-swift.struct/colorgamutconversion.md): A 3×3 half-precision matrix that converts RGB values from the renderer’s working color space to the output display’s color space.
- [enableClampValues](colormatch-swift.struct/enableclampvalues.md): A Boolean value that indicates whether output values are clamped to `[0, 1]` after gamut conversion.

## See Also

### Managing color matching

- [colorMatch](colormatch-swift.property.md): The active color gamut conversion. The renderer applies this value only when `enableColorMatch` is `true` in `Configuration`.
- [setColorMatch(targetingColorSpace:)](setcolormatch%28targetingcolorspace_%29.md): Updates the color match by computing a gamut conversion matrix from the renderer’s working color space to the given target display color space.
- [workingColorSpace](workingcolorspace.md): The color space in which the renderer performs all shading calculations.

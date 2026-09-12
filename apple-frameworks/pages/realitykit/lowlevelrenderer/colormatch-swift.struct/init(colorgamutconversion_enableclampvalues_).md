> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/colormatch-swift.struct/init(colorgamutconversion:enableclampvalues:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/colormatch-swift.struct/init(colorgamutconversion:enableclampvalues:))

# init(colorGamutConversion:enableClampValues:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a color match using an explicit gamut conversion matrix.

## Declaration

```swift
init(colorGamutConversion: simd_half3x3 = matrix_identity_half3x3, enableClampValues: Bool = false)
```

## Parameters

- `colorGamutConversion`: A 3×3 matrix that converts RGB values from the renderer’s working color space to the output display’s color space. Defaults to identity.
- `enableClampValues`: If `true`, output values are clamped to `[0, 1]` after gamut conversion. Defaults to `false`.

## See Also

### Creating a color match

- [init(workingColorSpace:targetColorSpace:)](init%28workingcolorspace_targetcolorspace_%29.md): Creates a color match from a working color space and a target display color space.

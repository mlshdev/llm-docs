> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_multidimensionaltable](https://developer.apple.com/documentation/accelerate/vimage_multidimensionaltable)

# vImage_MultidimensionalTable (Swift)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque pointer that represents a multidimensional lookup table.

## Declaration

```swift
typealias vImage_MultidimensionalTable = OpaquePointer
```

## Mentioned In

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md)

## See Also

### Transforming with a multidimensional lookup table

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [Cropping to the subject in a chroma-keyed image](cropping-to-the-subject-in-a-chroma-keyed-image.md): Convert a chroma-key color to alpha values and trim transparent pixels using Accelerate.
- [Applying transformations to selected colors in an image](applying-transformations-to-selected-colors-in-an-image.md): Desaturate a range of colors in an image with a multidimensional lookup table.
- [vImageMultidimensionalTable_Create(\_:\_:\_:\_:\_:\_:\_:)](vimagemultidimensionaltable_create%28______________%29.md): Creates a multidimensional lookup table.
- [vImageMultiDimensionalInterpolatedLookupTable_PlanarF(\_:\_:\_:\_:\_:\_:)](vimagemultidimensionalinterpolatedlookuptable_planarf%28____________%29.md): Uses a multidimensional lookup table to transform a 32-bit planar image.
- [vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12(\_:\_:\_:\_:\_:\_:)](vimagemultidimensionalinterpolatedlookuptable_planar16q12%28____________%29.md): Uses a multidimensional lookup table to transform a 16Q12 planar image.
- [vImageMultidimensionalTable_Retain(\_:)](vimagemultidimensionaltable_retain%28__%29.md): Retains a multidimensional table.
- [vImageMultidimensionalTable_Release(\_:)](vimagemultidimensionaltable_release%28__%29.md): Releases a multidimensional table.
- [vImageMDTableUsageHint](vimagemdtableusagehint.md): Constants that indicate the use for a multidimensional lookup table.
- [vImage_InterpolationMethod](vimage_interpolationmethod.md): Constants that represent different interpolation methods.

# vImage_MultidimensionalTable (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An opaque pointer that represents a multidimensional lookup table.

## Declaration

```objectivec
typedef struct vImage_MultidimensionalTableData * vImage_MultidimensionalTable;
```

## Mentioned In

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md)

## See Also

### Transforming with a multidimensional lookup table

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [vImageMultidimensionalTable_Create](vimagemultidimensionaltable_create%28______________%29.md): Creates a multidimensional lookup table.
- [vImageMultiDimensionalInterpolatedLookupTable_PlanarF](vimagemultidimensionalinterpolatedlookuptable_planarf%28____________%29.md): Uses a multidimensional lookup table to transform a 32-bit planar image.
- [vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12](vimagemultidimensionalinterpolatedlookuptable_planar16q12%28____________%29.md): Uses a multidimensional lookup table to transform a 16Q12 planar image.
- [vImageMultidimensionalTable_Retain](vimagemultidimensionaltable_retain%28__%29.md): Retains a multidimensional table.
- [vImageMultidimensionalTable_Release](vimagemultidimensionaltable_release%28__%29.md): Releases a multidimensional table.
- [vImageMDTableUsageHint](vimagemdtableusagehint.md): Constants that indicate the use for a multidimensional lookup table.
- [vImage_InterpolationMethod](vimage_interpolationmethod.md): Constants that represent different interpolation methods.

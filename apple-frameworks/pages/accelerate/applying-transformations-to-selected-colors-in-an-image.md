> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-transformations-to-selected-colors-in-an-image](https://developer.apple.com/documentation/accelerate/applying-transformations-to-selected-colors-in-an-image)

# Applying transformations to selected colors in an image

**Framework:** Accelerate  
**Kind:** Sample Code  
**Availability:** macOS 14.0+ · Xcode 15.2+

Desaturate a range of colors in an image with a multidimensional lookup table.

<a id="Overview"></a>

## Overview

This sample code app allows you to desaturate the colors in an image based on their similarity to a selected color. For example, the image below shows an original image (left) and the transformed image (right) where the app has transformed the cake sprinkles that aren’t yellow to grayscale.

![A comparison of the original image of colorful cake sprinkles with its selectively-desaturated counterpart.](https://developer.apple.com/images/com.apple.accelerate/comparison_2x.png)

Before exploring the code, try building and running the app to familiarize yourself with the effect of the different transformations on the image. In the app, click the smaller image to select a color and the app displays the transformed result as the larger image.

<a id="Create-the-lookup-table-data"></a>

### Create the lookup table data

The multidimensional lookup table that this sample code project uses is a 3D cube with `entriesPerChannel` values along each axis.

The app defines the `targetLabColor` variable as the color that the user selects in the user interface.

```swift
let targetLabColor = ColorConverter.rgbToLab(red: targetRGB[0],
                                             green: targetRGB.count > 1 ? targetRGB[1] : targetRGB[0],
                                             blue: targetRGB.count > 2 ? targetRGB[2] : targetRGB[0])
```

The code below performs `entriesPerChannel` iterations from `0` to `1` over each color channel to populate the multidimensional lookup table data. With each iteration, the code calls [simd_distance](../simd/simd_distance-2dror.md) to compute the Euclidean distance in L\*a\*b\* color space between the target color and the color that red, green, and blue loops define.

The distance between the two colors forms the basis for the amount of desaturation or darkening that the app applies to each color value in the lookup table.

```swift
var bufferIndex = 0
let multiplier = CGFloat(UInt16.max)
for red in ramp {
    for green in ramp {
        for blue in ramp {
           
            let srcLabColor = ColorConverter.rgbToLab(red: red, green: green, blue: blue)
            
            let distance = simd_distance(targetLabColor, srcLabColor)
            
            let effectMultiplier = 1 - simd_smoothstep(0, tolerance, distance)
            
            let src = NSColor(red: red,
                              green: green,
                              blue: blue,
                              alpha: 1)
            
            let dest = NSColor(hue: src.hueComponent,
                               saturation: src.saturationComponent * (desaturate ? CGFloat(effectMultiplier) : 1),
                               brightness: src.brightnessComponent * (darken ? CGFloat(effectMultiplier) : 1),
                               alpha: 1)
            
            lookupTableData[ bufferIndex ] = UInt16(dest.redComponent * multiplier)
            bufferIndex += 1
            
            lookupTableData[ bufferIndex ] = UInt16(dest.greenComponent * multiplier)
            bufferIndex += 1
            
            lookupTableData[ bufferIndex ] = UInt16(dest.blueComponent * multiplier)
            bufferIndex += 1
        }
    }
}
```

For more information about creating multidimensional lookup table data, see [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md).

<a id="Create-the-multidimensional-lookup"></a>

### Create the multidimensional lookup

The [vImage.MultidimensionalLookupTable](vimage/multidimensionallookuptable.md) structure uses the lookup table to transform the source image, either desaturating or darkening colors that aren’t close to the selected target color.

The code below creates a multidimension lookup table structure, applies the lookup table to the three source planar buffers, and writes the result to the three destination buffers:

```swift
let lookupTable = vImage.MultidimensionalLookupTable(
    entryCountPerSourceChannel: entryCountPerSourceChannel,
    destinationChannelCount: destChannelCount,
    data: lookupTableData)

lookupTable.apply(sources: rgbSourceBuffers,
                  destinations: [ redDestinationBuffer,
                                  greenDestinationBuffer,
                                  blueDestinationBuffer ],
                  interpolation: .full)
```

The three destination planar buffers contain the transformed image.

<a id="Create-a-Core-Graphics-image"></a>

### Create a Core Graphics image

The code below interleaves the three planar buffers into a single RGB buffer. Finally, the [makeCGImage(cgImageFormat:)](vimage/pixelbuffer/makecgimage%28cgimageformat_%29.md) function returns a Core Graphics image that the app displays in the user interface.

```swift
interleavedDestinationBuffer.interleave(planarSourceBuffers: [ redDestinationBuffer,
                                                               greenDestinationBuffer,
                                                               blueDestinationBuffer ])
```

## See Also

### Transforming with a multidimensional lookup table

- [Applying color transforms to images with a multidimensional lookup table](applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md): Precompute translation values to optimize color space conversion and other pointwise operations.
- [Cropping to the subject in a chroma-keyed image](cropping-to-the-subject-in-a-chroma-keyed-image.md): Convert a chroma-key color to alpha values and trim transparent pixels using Accelerate.
- [vImageMultidimensionalTable_Create(\_:\_:\_:\_:\_:\_:\_:)](vimagemultidimensionaltable_create%28______________%29.md): Creates a multidimensional lookup table.
- [vImageMultiDimensionalInterpolatedLookupTable_PlanarF(\_:\_:\_:\_:\_:\_:)](vimagemultidimensionalinterpolatedlookuptable_planarf%28____________%29.md): Uses a multidimensional lookup table to transform a 32-bit planar image.
- [vImageMultiDimensionalInterpolatedLookupTable_Planar16Q12(\_:\_:\_:\_:\_:\_:)](vimagemultidimensionalinterpolatedlookuptable_planar16q12%28____________%29.md): Uses a multidimensional lookup table to transform a 16Q12 planar image.
- [vImageMultidimensionalTable_Retain(\_:)](vimagemultidimensionaltable_retain%28__%29.md): Retains a multidimensional table.
- [vImageMultidimensionalTable_Release(\_:)](vimagemultidimensionaltable_release%28__%29.md): Releases a multidimensional table.
- [vImage_MultidimensionalTable](vimage_multidimensionaltable.md): An opaque pointer that represents a multidimensional lookup table.
- [vImageMDTableUsageHint](vimagemdtableusagehint.md): Constants that indicate the use for a multidimensional lookup table.
- [vImage_InterpolationMethod](vimage_interpolationmethod.md): Constants that represent different interpolation methods.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimageconvert_ordereduniformblue](https://developer.apple.com/documentation/accelerate/kvimageconvert_ordereduniformblue)

# kvImageConvert_OrderedUniformBlue (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that indicates the conversion will distribute the noise uniformly.

## Declaration

```swift
var kvImageConvert_OrderedUniformBlue: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

The following shows an 8-bit RGB image converted to a 1-bit planar image with [vImageConvert_Planar8toPlanar1(\_:\_:\_:\_:\_:)](vimageconvert_planar8toplanar1%28__________%29.md) using [kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md). The image on the left uses [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md), and the image on the right uses [kvImageConvert_OrderedUniformBlue](kvimageconvert_ordereduniformblue.md):

![Photos showing images with different noise distributions applied during dithering.](https://developer.apple.com/images/com.apple.accelerate/media-3358023@2x.png)

To learn about converting an RGB image to grayscale, see [Converting color images to grayscale](converting-color-images-to-grayscale.md).

## See Also

### Constants

- [kvImageConvert_DitherNone](kvimageconvert_dithernone.md): A constant that indicates the conversion will not apply dithering.
- [kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md): A constant that indicates the conversion will add randomized, pre-computed blue noise to the image.
- [kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md): A constant that indicates the conversion will add reproducible, pre-computed blue noise to the image.
- [kvImageConvert_DitherFloydSteinberg](kvimageconvert_ditherfloydsteinberg.md): A constant that indicates the conversion will add Floyd-Steinberg dithering to the image.
- [kvImageConvert_DitherAtkinson](kvimageconvert_ditheratkinson.md): A constant that indicates the conversion will add Atkinson dithering to the image.
- [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md): A constant that indicates the conversion will distribute the noise according to a Gaussian distribution.
- [kvImageConvert_OrderedNoiseShapeMask](kvimageconvert_orderednoiseshapemask.md)

# kvImageConvert_OrderedUniformBlue (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that indicates the conversion will distribute the noise uniformly.

## Declaration

```objectivec
kvImageConvert_OrderedUniformBlue
```

<a id="Discussion"></a>

## Discussion

The following shows an 8-bit RGB image converted to a 1-bit planar image with [vImageConvert_Planar8toPlanar1](vimageconvert_planar8toplanar1%28__________%29.md) using [kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md). The image on the left uses [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md), and the image on the right uses [kvImageConvert_OrderedUniformBlue](kvimageconvert_ordereduniformblue.md):

![Photos showing images with different noise distributions applied during dithering.](https://developer.apple.com/images/com.apple.accelerate/media-3358023@2x.png)

To learn about converting an RGB image to grayscale, see [Converting color images to grayscale](converting-color-images-to-grayscale.md).

## See Also

### Constants

- [kvImageConvert_DitherNone](kvimageconvert_dithernone.md): A constant that indicates the conversion will not apply dithering.
- [kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md): A constant that indicates the conversion will add randomized, pre-computed blue noise to the image.
- [kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md): A constant that indicates the conversion will add reproducible, pre-computed blue noise to the image.
- [kvImageConvert_DitherFloydSteinberg](kvimageconvert_ditherfloydsteinberg.md): A constant that indicates the conversion will add Floyd-Steinberg dithering to the image.
- [kvImageConvert_DitherAtkinson](kvimageconvert_ditheratkinson.md): A constant that indicates the conversion will add Atkinson dithering to the image.
- [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md): A constant that indicates the conversion will distribute the noise according to a Gaussian distribution.
- [kvImageConvert_OrderedNoiseShapeMask](kvimageconvert_orderednoiseshapemask.md)

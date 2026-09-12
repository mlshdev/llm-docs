> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimageconvert_ditherordered](https://developer.apple.com/documentation/accelerate/kvimageconvert_ditherordered)

# kvImageConvert_DitherOrdered (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that indicates the conversion will add randomized, pre-computed blue noise to the image.

## Declaration

```swift
var kvImageConvert_DitherOrdered: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

The following shows an 8-bit RGB image converted to a 1-bit planar image with [vImageConvert_Planar8toPlanar1(\_:\_:\_:\_:\_:)](vimageconvert_planar8toplanar1%28__________%29.md) using [kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md):

![Photos showing the original image and the dithered image.](https://developer.apple.com/images/com.apple.accelerate/media-3358025@2x.png)

To learn about converting an RGB image to grayscale, see [Converting color images to grayscale](converting-color-images-to-grayscale.md).

## See Also

### Constants

- [kvImageConvert_DitherNone](kvimageconvert_dithernone.md): A constant that indicates the conversion will not apply dithering.
- [kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md): A constant that indicates the conversion will add reproducible, pre-computed blue noise to the image.
- [kvImageConvert_DitherFloydSteinberg](kvimageconvert_ditherfloydsteinberg.md): A constant that indicates the conversion will add Floyd-Steinberg dithering to the image.
- [kvImageConvert_DitherAtkinson](kvimageconvert_ditheratkinson.md): A constant that indicates the conversion will add Atkinson dithering to the image.
- [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md): A constant that indicates the conversion will distribute the noise according to a Gaussian distribution.
- [kvImageConvert_OrderedUniformBlue](kvimageconvert_ordereduniformblue.md): A constant that indicates the conversion will distribute the noise uniformly.
- [kvImageConvert_OrderedNoiseShapeMask](kvimageconvert_orderednoiseshapemask.md)

# kvImageConvert_DitherOrdered (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant that indicates the conversion will add randomized, pre-computed blue noise to the image.

## Declaration

```objectivec
kvImageConvert_DitherOrdered
```

<a id="Discussion"></a>

## Discussion

The following shows an 8-bit RGB image converted to a 1-bit planar image with [vImageConvert_Planar8toPlanar1](vimageconvert_planar8toplanar1%28__________%29.md) using [kvImageConvert_DitherOrdered](kvimageconvert_ditherordered.md):

![Photos showing the original image and the dithered image.](https://developer.apple.com/images/com.apple.accelerate/media-3358025@2x.png)

To learn about converting an RGB image to grayscale, see [Converting color images to grayscale](converting-color-images-to-grayscale.md).

## See Also

### Constants

- [kvImageConvert_DitherNone](kvimageconvert_dithernone.md): A constant that indicates the conversion will not apply dithering.
- [kvImageConvert_DitherOrderedReproducible](kvimageconvert_ditherorderedreproducible.md): A constant that indicates the conversion will add reproducible, pre-computed blue noise to the image.
- [kvImageConvert_DitherFloydSteinberg](kvimageconvert_ditherfloydsteinberg.md): A constant that indicates the conversion will add Floyd-Steinberg dithering to the image.
- [kvImageConvert_DitherAtkinson](kvimageconvert_ditheratkinson.md): A constant that indicates the conversion will add Atkinson dithering to the image.
- [kvImageConvert_OrderedGaussianBlue](kvimageconvert_orderedgaussianblue.md): A constant that indicates the conversion will distribute the noise according to a Gaussian distribution.
- [kvImageConvert_OrderedUniformBlue](kvimageconvert_ordereduniformblue.md): A constant that indicates the conversion will distribute the noise uniformly.
- [kvImageConvert_OrderedNoiseShapeMask](kvimageconvert_orderednoiseshapemask.md)

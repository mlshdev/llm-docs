> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/edgepreserveupsample()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/edgepreserveupsample())

# edgePreserveUpsample() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a high-quality upscaled image.

## Declaration

```swift
class func edgePreserveUpsample() -> any CIFilter & CIEdgePreserveUpsample
```

<a id="return-value"></a>

## Return Value

The adjusted image.

<a id="Discussion"></a>

## Discussion

This method applies the edge preserve upsample filter to an image. The effect upsamples a small input image to be the size of the scale image using the luminance of the input image to preserve detail.

The edge preserve upsample filter uses the following properties:

- **`inputImage`**: An image representing the image to upscale with the type [CIImage](../ciimage.md).
- **`scaleImage`**: An image representing the reference for scaling the input image with the type [CIImage](../ciimage.md).
- **`spatialSigma`**: A float representing the influence of the input image’s spatial information on the upsampling operation as an [NSNumber](../../foundation/nsnumber.md).
- **`lumaSimga`**: A float representing influence of the input image’s luma information on the upsampling operation as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that upscales the smaller image to the size of the scale image:

```swift
func edgePerserveUp(inputImage: CIImage, smallImage: CIImage) -> CIImage {
    let edgePerserveUpFilter = CIFilter.edgePreserveUpsample()
    edgePerserveUpFilter.inputImage = inputImage
    edgePerserveUpFilter.smallImage = smallImage
    edgePerserveUpFilter.spatialSigma = 5
    edgePerserveUpFilter.lumaSigma = 0.15
    return edgePerserveUpFilter.outputImage!
}
```

![Two photographs of two large buildings with a clear sky in the background. The buildings have small windows with a lot of horizonal and vertical details. The photo on the left has no modifications to size or color. In the photo on the right, an edge preserve upsample filter is applied, resulting in a scaled-up, larger image.](https://developer.apple.com/images/com.apple.coreimage/media-3582220@2x.png)

## See Also

### Filters

- [bicubicScaleTransform()](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [keystoneCorrectionCombined()](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionHorizontal()](keystonecorrectionhorizontal%28%29.md): Horizontally adjusts an image to remove distortion.
- [keystoneCorrectionVertical()](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [lanczosScaleTransform()](lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.
- [perspectiveCorrection()](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveRotate()](perspectiverotate%28%29.md): Rotates an image in a 3D space.
- [perspectiveTransform()](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtent()](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.
- [straighten()](straighten%28%29.md): Rotates and crops an image.

# edgePreserveUpsampleFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a high-quality upscaled image.

## Declaration

```objectivec
+ (CIFilter<CIEdgePreserveUpsample> *) edgePreserveUpsampleFilter;
```

<a id="return-value"></a>

## Return Value

The adjusted image.

<a id="Discussion"></a>

## Discussion

This method applies the edge preserve upsample filter to an image. The effect upsamples a small input image to be the size of the scale image using the luminance of the input image to preserve detail.

The edge preserve upsample filter uses the following properties:

- **`inputImage`**: An image representing the image to upscale with the type [CIImage](../ciimage.md).
- **`scaleImage`**: An image representing the reference for scaling the input image with the type [CIImage](../ciimage.md).
- **`spatialSigma`**: A float representing the influence of the input image’s spatial information on the upsampling operation as an [NSNumber](../../foundation/nsnumber.md).
- **`lumaSimga`**: A float representing influence of the input image’s luma information on the upsampling operation as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that upscales the smaller image to the size of the scale image:

```swift
func edgePerserveUp(inputImage: CIImage, smallImage: CIImage) -> CIImage {
    let edgePerserveUpFilter = CIFilter.edgePreserveUpsample()
    edgePerserveUpFilter.inputImage = inputImage
    edgePerserveUpFilter.smallImage = smallImage
    edgePerserveUpFilter.spatialSigma = 5
    edgePerserveUpFilter.lumaSigma = 0.15
    return edgePerserveUpFilter.outputImage!
}
```

![Two photographs of two large buildings with a clear sky in the background. The buildings have small windows with a lot of horizonal and vertical details. The photo on the left has no modifications to size or color. In the photo on the right, an edge preserve upsample filter is applied, resulting in a scaled-up, larger image.](https://developer.apple.com/images/com.apple.coreimage/media-3582220@2x.png)

## See Also

### Filters

- [bicubicScaleTransformFilter](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [keystoneCorrectionCombinedFilter](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionHorizontalFilter](keystonecorrectionhorizontal%28%29.md): Horizontally adjusts an image to remove distortion.
- [keystoneCorrectionVerticalFilter](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [lanczosScaleTransformFilter](lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.
- [perspectiveCorrectionFilter](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveRotateFilter](perspectiverotate%28%29.md): Rotates an image in a 3D space.
- [perspectiveTransformFilter](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtentFilter](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.
- [straightenFilter](straighten%28%29.md): Rotates and crops an image.

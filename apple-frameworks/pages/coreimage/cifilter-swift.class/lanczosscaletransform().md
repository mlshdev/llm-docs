> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/lanczosscaletransform()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/lanczosscaletransform())

# lanczosScaleTransform() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a high-quality, scaled version of a source image.

## Declaration

```swift
class func lanczosScaleTransform() -> any CIFilter & CILanczosScaleTransform
```

<a id="return-value"></a>

## Return Value

The adjusted image.

## Mentioned In

- [Processing an Image Using Built-in Filters](../processing-an-image-using-built-in-filters.md)

<a id="Discussion"></a>

## Discussion

This method applies the Lanczos scale transform filter to an image. The effect creates the output image by scaling the input image based on the scale and aspect ratio properties provided.

The Lanczos scale filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`scale`**: A `float` representing the scaling factor used on the image as an [NSNumber](../../foundation/nsnumber.md). Values less than `1.0` scale down the images. Values greater than `1.0` scale up the image.
- **`aspectRatio`**: A `float` representing the additional horizontal scaling factor used on the image as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a smaller scaled image with high quality:

```swift
func lanczosScale(inputImage: CIImage) -> CIImage {    
    let lanczosScaleFilter = CIFilter.lanczosScaleTransform()
    lanczosScaleFilter.inputImage = inputImage
    lanczosScaleFilter.scale =  0.3
    lanczosScaleFilter.aspectRatio = 1
    return lanczosScaleFilter.outputImage!
}
```

![Two photographs of a large building on the corner of an intersection. The building has small windows and is made of a brick structure. The photo on the left has no modifications to size or color. In the photo on the right, a Lanczos scale transform filter is applied, resulting in a scaled-down or smaller image.](https://developer.apple.com/images/com.apple.coreimage/media-3582221@2x.png)

## See Also

### Filters

- [bicubicScaleTransform()](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [edgePreserveUpsample()](edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.
- [keystoneCorrectionCombined()](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionHorizontal()](keystonecorrectionhorizontal%28%29.md): Horizontally adjusts an image to remove distortion.
- [keystoneCorrectionVertical()](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [perspectiveCorrection()](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveRotate()](perspectiverotate%28%29.md): Rotates an image in a 3D space.
- [perspectiveTransform()](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtent()](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.
- [straighten()](straighten%28%29.md): Rotates and crops an image.

# lanczosScaleTransformFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a high-quality, scaled version of a source image.

## Declaration

```objectivec
+ (CIFilter<CILanczosScaleTransform> *) lanczosScaleTransformFilter;
```

<a id="return-value"></a>

## Return Value

The adjusted image.

## Mentioned In

- [Processing an Image Using Built-in Filters](../processing-an-image-using-built-in-filters.md)

<a id="Discussion"></a>

## Discussion

This method applies the Lanczos scale transform filter to an image. The effect creates the output image by scaling the input image based on the scale and aspect ratio properties provided.

The Lanczos scale filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`scale`**: A `float` representing the scaling factor used on the image as an [NSNumber](../../foundation/nsnumber.md). Values less than `1.0` scale down the images. Values greater than `1.0` scale up the image.
- **`aspectRatio`**: A `float` representing the additional horizontal scaling factor used on the image as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a smaller scaled image with high quality:

```swift
func lanczosScale(inputImage: CIImage) -> CIImage {    
    let lanczosScaleFilter = CIFilter.lanczosScaleTransform()
    lanczosScaleFilter.inputImage = inputImage
    lanczosScaleFilter.scale =  0.3
    lanczosScaleFilter.aspectRatio = 1
    return lanczosScaleFilter.outputImage!
}
```

![Two photographs of a large building on the corner of an intersection. The building has small windows and is made of a brick structure. The photo on the left has no modifications to size or color. In the photo on the right, a Lanczos scale transform filter is applied, resulting in a scaled-down or smaller image.](https://developer.apple.com/images/com.apple.coreimage/media-3582221@2x.png)

## See Also

### Filters

- [bicubicScaleTransformFilter](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [edgePreserveUpsampleFilter](edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.
- [keystoneCorrectionCombinedFilter](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionHorizontalFilter](keystonecorrectionhorizontal%28%29.md): Horizontally adjusts an image to remove distortion.
- [keystoneCorrectionVerticalFilter](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [perspectiveCorrectionFilter](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveRotateFilter](perspectiverotate%28%29.md): Rotates an image in a 3D space.
- [perspectiveTransformFilter](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtentFilter](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.
- [straightenFilter](straighten%28%29.md): Rotates and crops an image.

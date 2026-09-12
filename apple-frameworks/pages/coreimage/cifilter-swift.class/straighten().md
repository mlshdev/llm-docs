> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/straighten()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/straighten())

# straighten() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Rotates and crops an image.

## Declaration

```swift
class func straighten() -> any CIFilter & CIStraighten
```

<a id="return-value"></a>

## Return Value

The adjusted image.

<a id="Discussion"></a>

## Discussion

This method applies the straighten filter to an image. The effect rotates the image based on the `angle` property while cropping and scaling the image to remain the same size as the original image.

The straighten filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`angle`**: A `float` representing the angle to rotate the image as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that rotates the image 135 degrees:

```swift
func straighten(inputImage: CIImage) -> CIImage {
    let straightenFilter = CIFilter.straighten()
    straightenFilter.inputImage = inputImage
    straightenFilter.angle = 135
    return straightenFilter.outputImage!
}
```

![Two photographs of a large building on the corner of an intersection. The building has small windows and is made of a brick structure. The photo on the left has no modifications to size or color. In the photo on the right, a straighten filter is applied, resulting in the image becoming rotated and appearing upside down.](https://developer.apple.com/images/com.apple.coreimage/media-3582229@2x.png)

## See Also

### Filters

- [bicubicScaleTransform()](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [edgePreserveUpsample()](edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.
- [keystoneCorrectionCombined()](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionHorizontal()](keystonecorrectionhorizontal%28%29.md): Horizontally adjusts an image to remove distortion.
- [keystoneCorrectionVertical()](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [lanczosScaleTransform()](lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.
- [perspectiveCorrection()](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveRotate()](perspectiverotate%28%29.md): Rotates an image in a 3D space.
- [perspectiveTransform()](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtent()](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.

# straightenFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Rotates and crops an image.

## Declaration

```objectivec
+ (CIFilter<CIStraighten> *) straightenFilter;
```

<a id="return-value"></a>

## Return Value

The adjusted image.

<a id="Discussion"></a>

## Discussion

This method applies the straighten filter to an image. The effect rotates the image based on the `angle` property while cropping and scaling the image to remain the same size as the original image.

The straighten filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`angle`**: A `float` representing the angle to rotate the image as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that rotates the image 135 degrees:

```swift
func straighten(inputImage: CIImage) -> CIImage {
    let straightenFilter = CIFilter.straighten()
    straightenFilter.inputImage = inputImage
    straightenFilter.angle = 135
    return straightenFilter.outputImage!
}
```

![Two photographs of a large building on the corner of an intersection. The building has small windows and is made of a brick structure. The photo on the left has no modifications to size or color. In the photo on the right, a straighten filter is applied, resulting in the image becoming rotated and appearing upside down.](https://developer.apple.com/images/com.apple.coreimage/media-3582229@2x.png)

## See Also

### Filters

- [bicubicScaleTransformFilter](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [edgePreserveUpsampleFilter](edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.
- [keystoneCorrectionCombinedFilter](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionHorizontalFilter](keystonecorrectionhorizontal%28%29.md): Horizontally adjusts an image to remove distortion.
- [keystoneCorrectionVerticalFilter](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [lanczosScaleTransformFilter](lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.
- [perspectiveCorrectionFilter](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveRotateFilter](perspectiverotate%28%29.md): Rotates an image in a 3D space.
- [perspectiveTransformFilter](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtentFilter](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.

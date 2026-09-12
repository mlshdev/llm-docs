> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/perspectiverotate()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/perspectiverotate())

# perspectiveRotate() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Rotates an image in a 3D space.

## Declaration

```swift
class func perspectiveRotate() -> any CIFilter & CIPerspectiveRotate
```

<a id="return-value"></a>

## Return Value

The adjusted image.

<a id="Discussion"></a>

## Discussion

This method applies the perspective rotate filter to an image. The effect rotates the image in 3D space to simulate the observer changing viewing position.

The perspective rotate filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`pitch`**: A `float` representing the adjustment along the pitch axis in 3D space as an [NSNumber](../../foundation/nsnumber.md).
- **`yaw`**: A `float` representing the adjustment along the vertical axis as an [NSNumber](../../foundation/nsnumber.md).
- **`roll`**: A `float` representing the amount of horizontal axis in 3D space as an [NSNumber](../../foundation/nsnumber.md).
- **`focalLength`**: A `float` representing the simulated focal length as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that rotates the image:

```swift
func perspectiveRotate(inputImage: CIImage) -> CIImage {
    let perspectiveRotateFilter = CIFilter.perspectiveRotate()
    perspectiveRotateFilter.inputImage = inputImage
    perspectiveRotateFilter.pitch = 0
    perspectiveRotateFilter.yaw = 0.1
    perspectiveRotateFilter.roll = 0.3
    perspectiveRotateFilter.focalLength = 18
    return perspectiveRotateFilter.outputImage!
}
```

![Two photographs of a large building on the corner of an intersection. The building has small windows and is made of a brick structure. The photo on the left has no modifications to size or color. In the photo on the right, a perspective rotate filter is applied, resulting in the image becoming smaller and rotated.](https://developer.apple.com/images/com.apple.coreimage/media-3582225@2x.png)

## See Also

### Filters

- [bicubicScaleTransform()](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [edgePreserveUpsample()](edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.
- [keystoneCorrectionCombined()](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionHorizontal()](keystonecorrectionhorizontal%28%29.md): Horizontally adjusts an image to remove distortion.
- [keystoneCorrectionVertical()](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [lanczosScaleTransform()](lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.
- [perspectiveCorrection()](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveTransform()](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtent()](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.
- [straighten()](straighten%28%29.md): Rotates and crops an image.

# perspectiveRotateFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Rotates an image in a 3D space.

## Declaration

```objectivec
+ (CIFilter<CIPerspectiveRotate> *) perspectiveRotateFilter;
```

<a id="return-value"></a>

## Return Value

The adjusted image.

<a id="Discussion"></a>

## Discussion

This method applies the perspective rotate filter to an image. The effect rotates the image in 3D space to simulate the observer changing viewing position.

The perspective rotate filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`pitch`**: A `float` representing the adjustment along the pitch axis in 3D space as an [NSNumber](../../foundation/nsnumber.md).
- **`yaw`**: A `float` representing the adjustment along the vertical axis as an [NSNumber](../../foundation/nsnumber.md).
- **`roll`**: A `float` representing the amount of horizontal axis in 3D space as an [NSNumber](../../foundation/nsnumber.md).
- **`focalLength`**: A `float` representing the simulated focal length as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that rotates the image:

```swift
func perspectiveRotate(inputImage: CIImage) -> CIImage {
    let perspectiveRotateFilter = CIFilter.perspectiveRotate()
    perspectiveRotateFilter.inputImage = inputImage
    perspectiveRotateFilter.pitch = 0
    perspectiveRotateFilter.yaw = 0.1
    perspectiveRotateFilter.roll = 0.3
    perspectiveRotateFilter.focalLength = 18
    return perspectiveRotateFilter.outputImage!
}
```

![Two photographs of a large building on the corner of an intersection. The building has small windows and is made of a brick structure. The photo on the left has no modifications to size or color. In the photo on the right, a perspective rotate filter is applied, resulting in the image becoming smaller and rotated.](https://developer.apple.com/images/com.apple.coreimage/media-3582225@2x.png)

## See Also

### Filters

- [bicubicScaleTransformFilter](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [edgePreserveUpsampleFilter](edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.
- [keystoneCorrectionCombinedFilter](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionHorizontalFilter](keystonecorrectionhorizontal%28%29.md): Horizontally adjusts an image to remove distortion.
- [keystoneCorrectionVerticalFilter](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [lanczosScaleTransformFilter](lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.
- [perspectiveCorrectionFilter](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveTransformFilter](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtentFilter](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.
- [straightenFilter](straighten%28%29.md): Rotates and crops an image.

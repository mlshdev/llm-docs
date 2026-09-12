> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/keystonecorrectionhorizontal()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/keystonecorrectionhorizontal())

# keystoneCorrectionHorizontal() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Horizontally adjusts an image to remove distortion.

## Declaration

```swift
class func keystoneCorrectionHorizontal() -> any CIFilter & CIKeystoneCorrectionHorizontal
```

<a id="return-value"></a>

## Return Value

The adjusted image.

<a id="Discussion"></a>

## Discussion

This method applies the keystone correction horizontal filter to an image. The effect applies a set of horizontal guides and simulated focal length to adjust the shape of the input image. This effect is commonly used when cropping an image to correct distortion. In the figure below, both vertical and horizontal adjustments are made, resulting in a trapezoid-shaped image.

The keystone correction horizontal filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`topLeft`**: A [CGPoint](../../corefoundation/cgpoint.md) in the input image mapped to the top-left corner of the output image.
- **`topRight`**: A [CGPoint](../../corefoundation/cgpoint.md) in the input image mapped to the top-right corner of the output image.
- **`bottomLeft`**: A [CGPoint](../../corefoundation/cgpoint.md) in the input image mapped to the bottom-left corner of the output image.
- **`bottomRight`**: A [CGPoint](../../corefoundation/cgpoint.md) in the input image mapped to the bottom-right corner of the output image.
- **`focalLength`**: A `float` representing the simulated focal length as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that distorts the image:

```swift
func keystoneCorrectionHorizontal(inputImage: CIImage) -> CIImage {    
    let keystoneCorrect = CIFilter.keystoneCorrectionHorizontal()
    keystoneCorrect.inputImage = inputImage
    keystoneCorrect.topLeft = CGPoint(x: 0, y: 2448)
    keystoneCorrect.topRight = CGPoint(x: 3264, y: 2248)
    keystoneCorrect.bottomLeft = CGPoint(x: 400, y: 0)
    keystoneCorrect.bottomRight = CGPoint(x: 3264, y: 150)
    keystoneCorrect.focalLength = 18
    return keystoneCorrect.outputImage!
}
```

![Two photographs of a large building on the corner of an intersection. The building has small windows and is made of a brick structure. The photo on the left has no modifications to size or color. In the photo on the right, a horizontal keystone correction filter is applied, distorting the rectangular image so the left edge is smaller than the right edge.](https://developer.apple.com/images/com.apple.coreimage/media-3582230@2x.png)

## See Also

### Filters

- [bicubicScaleTransform()](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [edgePreserveUpsample()](edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.
- [keystoneCorrectionCombined()](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionVertical()](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [lanczosScaleTransform()](lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.
- [perspectiveCorrection()](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveRotate()](perspectiverotate%28%29.md): Rotates an image in a 3D space.
- [perspectiveTransform()](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtent()](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.
- [straighten()](straighten%28%29.md): Rotates and crops an image.

# keystoneCorrectionHorizontalFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Horizontally adjusts an image to remove distortion.

## Declaration

```objectivec
+ (CIFilter<CIKeystoneCorrectionHorizontal> *) keystoneCorrectionHorizontalFilter;
```

<a id="return-value"></a>

## Return Value

The adjusted image.

<a id="Discussion"></a>

## Discussion

This method applies the keystone correction horizontal filter to an image. The effect applies a set of horizontal guides and simulated focal length to adjust the shape of the input image. This effect is commonly used when cropping an image to correct distortion. In the figure below, both vertical and horizontal adjustments are made, resulting in a trapezoid-shaped image.

The keystone correction horizontal filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`topLeft`**: A [CGPoint](../../corefoundation/cgpoint.md) in the input image mapped to the top-left corner of the output image.
- **`topRight`**: A [CGPoint](../../corefoundation/cgpoint.md) in the input image mapped to the top-right corner of the output image.
- **`bottomLeft`**: A [CGPoint](../../corefoundation/cgpoint.md) in the input image mapped to the bottom-left corner of the output image.
- **`bottomRight`**: A [CGPoint](../../corefoundation/cgpoint.md) in the input image mapped to the bottom-right corner of the output image.
- **`focalLength`**: A `float` representing the simulated focal length as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that distorts the image:

```swift
func keystoneCorrectionHorizontal(inputImage: CIImage) -> CIImage {    
    let keystoneCorrect = CIFilter.keystoneCorrectionHorizontal()
    keystoneCorrect.inputImage = inputImage
    keystoneCorrect.topLeft = CGPoint(x: 0, y: 2448)
    keystoneCorrect.topRight = CGPoint(x: 3264, y: 2248)
    keystoneCorrect.bottomLeft = CGPoint(x: 400, y: 0)
    keystoneCorrect.bottomRight = CGPoint(x: 3264, y: 150)
    keystoneCorrect.focalLength = 18
    return keystoneCorrect.outputImage!
}
```

![Two photographs of a large building on the corner of an intersection. The building has small windows and is made of a brick structure. The photo on the left has no modifications to size or color. In the photo on the right, a horizontal keystone correction filter is applied, distorting the rectangular image so the left edge is smaller than the right edge.](https://developer.apple.com/images/com.apple.coreimage/media-3582230@2x.png)

## See Also

### Filters

- [bicubicScaleTransformFilter](bicubicscaletransform%28%29.md): Produces a high-quality scaled version of an image.
- [edgePreserveUpsampleFilter](edgepreserveupsample%28%29.md): Creates a high-quality upscaled image.
- [keystoneCorrectionCombinedFilter](keystonecorrectioncombined%28%29.md): Adjusts the image vertically and horizontally to remove distortion.
- [keystoneCorrectionVerticalFilter](keystonecorrectionvertical%28%29.md): Vertically adjusts an image to remove distortion.
- [lanczosScaleTransformFilter](lanczosscaletransform%28%29.md): Creates a high-quality, scaled version of a source image.
- [perspectiveCorrectionFilter](perspectivecorrection%28%29.md): Transforms an image’s perspective.
- [perspectiveRotateFilter](perspectiverotate%28%29.md): Rotates an image in a 3D space.
- [perspectiveTransformFilter](perspectivetransform%28%29.md): Alters an image’s geometry to adjust the perspective.
- [perspectiveTransformWithExtentFilter](perspectivetransformwithextent%28%29.md): Alters an image’s geometry to adjust the perspective while applying constraints.
- [straightenFilter](straighten%28%29.md): Rotates and crops an image.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/stretchcrop()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/stretchcrop())

# stretchCrop() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by stretching or cropping to fit a specified size.

## Declaration

```swift
class func stretchCrop() -> any CIFilter & CIStretchCrop
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the stretch crop filter to an image. This effect distorts an image by stretching an image and then applies the crop extent. If the crop value is 0, the filter only uses stretching. If the value is 1, then the filter only uses cropping.

The stretch crop filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`centerStretchAmount`**: A `float` representing the amount of stretching of the center of the image as an [NSNumber](../../foundation/nsnumber.md).
- **`size`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the desired size of the output image.
- **`cropAmount`**: A `float` representing the amount of cropping you apply to achieve the target size as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a smaller image that’s distorted and cropped to be the defined size:

```swift
func stretchCrop(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.stretchCrop()
    filter.inputImage = inputImage
    filter.cropAmount = 0.25
    filter.centerStretchAmount = 0.25
    filter.size = CGPoint(
        x: inputImage.extent.width * 2,
        y: inputImage.extent.size.height * 0.8
    )
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of the Golden Gate Bridge with a clear sky in the background. The right image shows the result of applying the stretch crop filter. The image has been stretched in the horizontal direction and cropped in the vertical direction.](https://developer.apple.com/images/com.apple.coreimage/media-4407279@2x.png)

## See Also

### Filters

- [bumpDistortion()](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinear()](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
- [circleSplashDistortion()](circlesplashdistortion%28%29.md): Distorts an image with radiating circles to the periphery of the image.
- [circularWrap()](circularwrap%28%29.md): Distorts an image by increasing the distance of the center of the image.
- [displacementDistortion()](displacementdistortion%28%29.md): Applies the grayscale values of the second image to the first image.
- [droste()](droste%28%29.md): Stylizes an image with the Droste effect.
- [glassDistortion()](glassdistortion%28%29.md): Distorts an image by applying a glass-like texture.
- [glassLozenge()](glasslozenge%28%29.md): Creates a lozenge-shaped lens and distorts the image.
- [holeDistortion()](holedistortion%28%29.md): Distorts an image with a circular area that pushes the image outward.
- [lightTunnel()](lighttunnel%28%29.md): Distorts an image by generating a light tunnel.
- [ninePartStretched()](ninepartstretched%28%29.md): Distorts an image by stretching it between two breakpoints.
- [ninePartTiled()](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortion()](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [torusLensDistortion()](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortion()](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

# stretchCropFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by stretching or cropping to fit a specified size.

## Declaration

```objectivec
+ (CIFilter<CIStretchCrop> *) stretchCropFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the stretch crop filter to an image. This effect distorts an image by stretching an image and then applies the crop extent. If the crop value is 0, the filter only uses stretching. If the value is 1, then the filter only uses cropping.

The stretch crop filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`centerStretchAmount`**: A `float` representing the amount of stretching of the center of the image as an [NSNumber](../../foundation/nsnumber.md).
- **`size`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the desired size of the output image.
- **`cropAmount`**: A `float` representing the amount of cropping you apply to achieve the target size as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a smaller image that’s distorted and cropped to be the defined size:

```swift
func stretchCrop(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.stretchCrop()
    filter.inputImage = inputImage
    filter.cropAmount = 0.25
    filter.centerStretchAmount = 0.25
    filter.size = CGPoint(
        x: inputImage.extent.width * 2,
        y: inputImage.extent.size.height * 0.8
    )
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of the Golden Gate Bridge with a clear sky in the background. The right image shows the result of applying the stretch crop filter. The image has been stretched in the horizontal direction and cropped in the vertical direction.](https://developer.apple.com/images/com.apple.coreimage/media-4407279@2x.png)

## See Also

### Filters

- [bumpDistortionFilter](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinearFilter](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
- [circleSplashDistortionFilter](circlesplashdistortion%28%29.md): Distorts an image with radiating circles to the periphery of the image.
- [circularWrapFilter](circularwrap%28%29.md): Distorts an image by increasing the distance of the center of the image.
- [displacementDistortionFilter](displacementdistortion%28%29.md): Applies the grayscale values of the second image to the first image.
- [drosteFilter](droste%28%29.md): Stylizes an image with the Droste effect.
- [glassDistortionFilter](glassdistortion%28%29.md): Distorts an image by applying a glass-like texture.
- [glassLozengeFilter](glasslozenge%28%29.md): Creates a lozenge-shaped lens and distorts the image.
- [holeDistortionFilter](holedistortion%28%29.md): Distorts an image with a circular area that pushes the image outward.
- [lightTunnelFilter](lighttunnel%28%29.md): Distorts an image by generating a light tunnel.
- [ninePartStretchedFilter](ninepartstretched%28%29.md): Distorts an image by stretching it between two breakpoints.
- [ninePartTiledFilter](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortionFilter](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [torusLensDistortionFilter](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortionFilter](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

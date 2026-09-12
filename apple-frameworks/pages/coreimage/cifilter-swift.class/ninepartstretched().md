> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/ninepartstretched()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/ninepartstretched())

# ninePartStretched() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by stretching it between two breakpoints.

## Declaration

```swift
class func ninePartStretched() -> any CIFilter & CINinePartStretched
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the nine-part stretched filter to an image. This effect distorts an image by stretching an image to the breakpoint properties while distorting the image based on the grow amount.

The nine-part stretched filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`growAmount`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the amount of stretching applied.
- **`breakpoint0`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the lower-left corner of the image to retain before stretching begins.
- **`breakpoint1`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the upper-right corner of the image to retain after stretching ends.

The following code creates a filter that results in a significantly warped image:

```swift
func ninePartStretch(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.ninePartStretched()
    filter.inputImage = inputImage
    filter.setDefaults()
    filter.breakpoint0 = CGPoint(x: 200, y: 200)
    filter.breakpoint1 = CGPoint(x: inputImage.extent.size.width-200, y: inputImage.extent.size.height - 200)
    filter.growAmount = CGPoint(x: 500, y: 500)
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with dark leaves in the background. An area inset by 200 pixels from all sides is highlighted using a rectangle. The image on the right shows the result of applying the nine part stretched filter. The area within the red rectangle has been stretched making the image larger. The areas outside of the rectangle have been warped to match the stretched area.](https://developer.apple.com/images/com.apple.coreimage/media-4407340@2x.png)

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
- [ninePartTiled()](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortion()](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [stretchCrop()](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortion()](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortion()](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

# ninePartStretchedFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by stretching it between two breakpoints.

## Declaration

```objectivec
+ (CIFilter<CINinePartStretched> *) ninePartStretchedFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the nine-part stretched filter to an image. This effect distorts an image by stretching an image to the breakpoint properties while distorting the image based on the grow amount.

The nine-part stretched filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`growAmount`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the amount of stretching applied.
- **`breakpoint0`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the lower-left corner of the image to retain before stretching begins.
- **`breakpoint1`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the upper-right corner of the image to retain after stretching ends.

The following code creates a filter that results in a significantly warped image:

```swift
func ninePartStretch(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.ninePartStretched()
    filter.inputImage = inputImage
    filter.setDefaults()
    filter.breakpoint0 = CGPoint(x: 200, y: 200)
    filter.breakpoint1 = CGPoint(x: inputImage.extent.size.width-200, y: inputImage.extent.size.height - 200)
    filter.growAmount = CGPoint(x: 500, y: 500)
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with dark leaves in the background. An area inset by 200 pixels from all sides is highlighted using a rectangle. The image on the right shows the result of applying the nine part stretched filter. The area within the red rectangle has been stretched making the image larger. The areas outside of the rectangle have been warped to match the stretched area.](https://developer.apple.com/images/com.apple.coreimage/media-4407340@2x.png)

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
- [ninePartTiledFilter](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortionFilter](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [stretchCropFilter](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortionFilter](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortionFilter](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

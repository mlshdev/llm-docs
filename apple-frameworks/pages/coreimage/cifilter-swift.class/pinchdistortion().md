> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/pinchdistortion()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/pinchdistortion())

# pinchDistortion() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by creating a pinch effect with stronger distortion in the center.

## Declaration

```swift
class func pinchDistortion() -> any CIFilter & CIPinchDistortion
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the pinch distortion filter to an image. This effect creates a rectangular area that pinches source pixels inward, distorting those pixels closest to the rectangle the most.

The pinch distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`scale`**: A float representing the amount of pinching effect as an [NSNumber](../../foundation/nsnumber.md).
- **`radius`**: A float representing the amount of pixels used to create the distortion as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a distorted image from the center of the photo:

```swift
func pinch(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.pinchDistortion()
    filter.inputImage = inputImage
    filter.radius = 400
    filter.scale = 0.5
    filter.center = CGPoint(x: 1791, y: 1344)
    return filter.outputImage!
}
```

![Two images next to each other. The image on the left contains a black-and-white checkerboard pattern. The image on the right has the pinch distortion filter applied. The center of the image appears to be pulled tightly into the screen with the outer area stretched to compensate.](https://developer.apple.com/images/com.apple.coreimage/media-4407323@2x.png)

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
- [stretchCrop()](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortion()](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortion()](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

# pinchDistortionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by creating a pinch effect with stronger distortion in the center.

## Declaration

```objectivec
+ (CIFilter<CIPinchDistortion> *) pinchDistortionFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the pinch distortion filter to an image. This effect creates a rectangular area that pinches source pixels inward, distorting those pixels closest to the rectangle the most.

The pinch distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`scale`**: A float representing the amount of pinching effect as an [NSNumber](../../foundation/nsnumber.md).
- **`radius`**: A float representing the amount of pixels used to create the distortion as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a distorted image from the center of the photo:

```swift
func pinch(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.pinchDistortion()
    filter.inputImage = inputImage
    filter.radius = 400
    filter.scale = 0.5
    filter.center = CGPoint(x: 1791, y: 1344)
    return filter.outputImage!
}
```

![Two images next to each other. The image on the left contains a black-and-white checkerboard pattern. The image on the right has the pinch distortion filter applied. The center of the image appears to be pulled tightly into the screen with the outer area stretched to compensate.](https://developer.apple.com/images/com.apple.coreimage/media-4407323@2x.png)

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
- [stretchCropFilter](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortionFilter](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortionFilter](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

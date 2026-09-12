> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/toruslensdistortion()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/toruslensdistortion())

# torusLensDistortion() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a torus-shaped lens to distort the image.

## Declaration

```swift
class func torusLensDistortion() -> any CIFilter & CITorusLensDistortion
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the torus lens distortion filter to an image. This effect distorts an image by creating a torus-shaped object, placing it over the input image, and applying the refraction.

The torus lens distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`radius`**: A `float` representing the amount of pixels the filter uses in the tours as an [NSNumber](../../foundation/nsnumber.md).
- **`refraction`**: A `float` representing the refraction of the glass as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the width of the torus ring as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a torus-shaped object placed over the image:

```swift
func torusLens(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.torusLensDistortion()
    filter.inputImage = inputImage
    filter.radius = 620
    filter.refraction = 1.7
    filter.center = CGPoint(x: 1791, y: 1344)
    filter.width = 360
    return filter.outputImage!
}
```

![Two images next to each other. The image on the left contains a black-and-white checkerboard pattern. The image on the right has the torus lens distortion filter applied. The image appears to have a ring of distortion around the center.](https://developer.apple.com/images/com.apple.coreimage/media-4407288@2x.png)

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
- [stretchCrop()](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [twirlDistortion()](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

# torusLensDistortionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a torus-shaped lens to distort the image.

## Declaration

```objectivec
+ (CIFilter<CITorusLensDistortion> *) torusLensDistortionFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the torus lens distortion filter to an image. This effect distorts an image by creating a torus-shaped object, placing it over the input image, and applying the refraction.

The torus lens distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`radius`**: A `float` representing the amount of pixels the filter uses in the tours as an [NSNumber](../../foundation/nsnumber.md).
- **`refraction`**: A `float` representing the refraction of the glass as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the width of the torus ring as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a torus-shaped object placed over the image:

```swift
func torusLens(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.torusLensDistortion()
    filter.inputImage = inputImage
    filter.radius = 620
    filter.refraction = 1.7
    filter.center = CGPoint(x: 1791, y: 1344)
    filter.width = 360
    return filter.outputImage!
}
```

![Two images next to each other. The image on the left contains a black-and-white checkerboard pattern. The image on the right has the torus lens distortion filter applied. The image appears to have a ring of distortion around the center.](https://developer.apple.com/images/com.apple.coreimage/media-4407288@2x.png)

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
- [stretchCropFilter](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [twirlDistortionFilter](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

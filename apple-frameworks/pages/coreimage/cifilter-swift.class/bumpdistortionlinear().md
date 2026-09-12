> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/bumpdistortionlinear()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/bumpdistortionlinear())

# bumpDistortionLinear() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Linearly distorts an image with a concave or convex bump.

## Declaration

```swift
class func bumpDistortionLinear() -> any CIFilter & CIBumpDistortionLinear
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the bump distortion linear filter to an image. This effect creates a concave or convex bump to a linear portion of the image. The curvature of the bump is defined by the `scale` property. A value of 0.0 has no effect, while a positive value creates an outward curvature and a negative value creates an inward curvature.

The bump distortion linear filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the amount of pixels the filter uses to create the distortion as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`scale`**: A `float` representing the curvature of the bump effect as an [NSNumber](../../foundation/nsnumber.md).
- **`angle`**: A `float` representing the angle of the distortion, in radians, as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a vertical bump distorting the image:

```swift
func bumpDistortionLinear(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.bumpDistortionLinear()
    filter.inputImage = inputImage
    filter.center = CGPoint(x: inputImage.extent.midX, y: inputImage.extent.midY)
    filter.radius = 500
    filter.scale = 0.2
    filter.angle = .pi/2
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of a modern building with light colored concrete set against a clear sky. The image on the right shows the result of applying the bump distortion linear filter. The straight lines of the building appear to curve in and out of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407320@2x.png)

## See Also

### Filters

- [bumpDistortion()](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
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
- [torusLensDistortion()](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortion()](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

# bumpDistortionLinearFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Linearly distorts an image with a concave or convex bump.

## Declaration

```objectivec
+ (CIFilter<CIBumpDistortionLinear> *) bumpDistortionLinearFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the bump distortion linear filter to an image. This effect creates a concave or convex bump to a linear portion of the image. The curvature of the bump is defined by the `scale` property. A value of 0.0 has no effect, while a positive value creates an outward curvature and a negative value creates an inward curvature.

The bump distortion linear filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the amount of pixels the filter uses to create the distortion as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`scale`**: A `float` representing the curvature of the bump effect as an [NSNumber](../../foundation/nsnumber.md).
- **`angle`**: A `float` representing the angle of the distortion, in radians, as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a vertical bump distorting the image:

```swift
func bumpDistortionLinear(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.bumpDistortionLinear()
    filter.inputImage = inputImage
    filter.center = CGPoint(x: inputImage.extent.midX, y: inputImage.extent.midY)
    filter.radius = 500
    filter.scale = 0.2
    filter.angle = .pi/2
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of a modern building with light colored concrete set against a clear sky. The image on the right shows the result of applying the bump distortion linear filter. The straight lines of the building appear to curve in and out of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407320@2x.png)

## See Also

### Filters

- [bumpDistortionFilter](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
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
- [torusLensDistortionFilter](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortionFilter](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

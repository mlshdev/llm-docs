> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/circlesplashdistortion()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/circlesplashdistortion())

# circleSplashDistortion() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image with radiating circles to the periphery of the image.

## Declaration

```swift
class func circleSplashDistortion() -> any CIFilter & CICircleSplashDistortion
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the circle splash distortion filter to an image. This effect distorts the pixels starting at the circumference of a circle and emanating outward.

The circle splash distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the amount in pixels the filter uses to create the distortion as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the center of the image.

The following code creates a filter that results in a ripple effect applied to the image:

```swift
func circularSplash(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.circleSplashDistortion()
    filter.inputImage = inputImage
    filter.center = CGPoint(x: 50.0, y: 50.0)
    filter.radius = 2.0
    return filter.outputImage!
}
```

![On the left, an image with a checkerboard pattern. On the right, the same image but with a circle splash distortion applied. The center of the image contains a checkerboard pattern with larger squares than the original. This is surrounded by stretched black and white stripes radiating out to the edge of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407306@2x.png)

## See Also

### Filters

- [bumpDistortion()](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinear()](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
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

# circleSplashDistortionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image with radiating circles to the periphery of the image.

## Declaration

```objectivec
+ (CIFilter<CICircleSplashDistortion> *) circleSplashDistortionFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the circle splash distortion filter to an image. This effect distorts the pixels starting at the circumference of a circle and emanating outward.

The circle splash distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the amount in pixels the filter uses to create the distortion as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the center of the image.

The following code creates a filter that results in a ripple effect applied to the image:

```swift
func circularSplash(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.circleSplashDistortion()
    filter.inputImage = inputImage
    filter.center = CGPoint(x: 50.0, y: 50.0)
    filter.radius = 2.0
    return filter.outputImage!
}
```

![On the left, an image with a checkerboard pattern. On the right, the same image but with a circle splash distortion applied. The center of the image contains a checkerboard pattern with larger squares than the original. This is surrounded by stretched black and white stripes radiating out to the edge of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407306@2x.png)

## See Also

### Filters

- [bumpDistortionFilter](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinearFilter](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
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

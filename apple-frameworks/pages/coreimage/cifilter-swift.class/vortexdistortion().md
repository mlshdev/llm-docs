> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/vortexdistortion()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/vortexdistortion())

# vortexDistortion() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by using a vortex effect created by rotating pixels around a point.

## Declaration

```swift
class func vortexDistortion() -> any CIFilter & CIVortexDistortion
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the vortex distortion filter to an image. This effect distorts an image by rotating pixels around the defined center to simulate a vortex. You can specify the number of rotations to control the strength of the effect.

The vortex distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`angle`**: A `float` representing the angle of the vortex, in radians, as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`radius`**: A `float` representing the amount of pixels the filter uses to create the distortion as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a small vortex effect:

```swift
func vortexDistort(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.vortexDistortion()
    filter.inputImage = inputImage
    filter.radius = 700
    filter.angle = 56.54866776461628
    filter.center = CGPoint(x: 1124, y: 778)
    return filter.outputImage!
}
```

![Two images next to each other. The image on the left contains a black-and-white checkerboard pattern. The image on the right has the vortex distortion filter applied. The center of the image appears to be tightly twisted with the amount of twist decreasing very quickly towards the edge of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407301@2x.png)

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
- [torusLensDistortion()](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.

# vortexDistortionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by using a vortex effect created by rotating pixels around a point.

## Declaration

```objectivec
+ (CIFilter<CIVortexDistortion> *) vortexDistortionFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the vortex distortion filter to an image. This effect distorts an image by rotating pixels around the defined center to simulate a vortex. You can specify the number of rotations to control the strength of the effect.

The vortex distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`angle`**: A `float` representing the angle of the vortex, in radians, as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`radius`**: A `float` representing the amount of pixels the filter uses to create the distortion as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a small vortex effect:

```swift
func vortexDistort(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.vortexDistortion()
    filter.inputImage = inputImage
    filter.radius = 700
    filter.angle = 56.54866776461628
    filter.center = CGPoint(x: 1124, y: 778)
    return filter.outputImage!
}
```

![Two images next to each other. The image on the left contains a black-and-white checkerboard pattern. The image on the right has the vortex distortion filter applied. The center of the image appears to be tightly twisted with the amount of twist decreasing very quickly towards the edge of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407301@2x.png)

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
- [torusLensDistortionFilter](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.

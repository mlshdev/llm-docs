> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/lighttunnel()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/lighttunnel())

# lightTunnel() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by generating a light tunnel.

## Declaration

```swift
class func lightTunnel() -> any CIFilter & CILightTunnel
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the light tunnel filter to an image. This effect distorts the input image by warping the image to cylinder shape.

The light tunnel filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the light tunnel as a [CGPoint](../../corefoundation/cgpoint.md).
- **`radius`**: A `float` representing the amount of pixels the filter uses to create the light tunnel as an [NSNumber](../../foundation/nsnumber.md).
- **rotation**: A `float` representing the rotation angle of the light tunnel as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that generates a swirling pattern from the input image:

```swift
func lightTunnel(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.lightTunnel()
    filter.inputImage = inputImage
    filter.radius = 100
    filter.rotation = .pi
    filter.center = CGPoint(
        x: inputImage.extent.width / 2,
        y: inputImage.extent.size.height / 2
    )
    return filter.outputImage!.cropped(to: inputImage.extent)
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with leaves in the background. The image on the right shows the result of applying the light tunnel filter, which produces a swirling pattern that shrinks towards the center of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407304@2x.png)

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
- [ninePartStretched()](ninepartstretched%28%29.md): Distorts an image by stretching it between two breakpoints.
- [ninePartTiled()](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortion()](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [stretchCrop()](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortion()](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortion()](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

# lightTunnelFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by generating a light tunnel.

## Declaration

```objectivec
+ (CIFilter<CILightTunnel> *) lightTunnelFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the light tunnel filter to an image. This effect distorts the input image by warping the image to cylinder shape.

The light tunnel filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the light tunnel as a [CGPoint](../../corefoundation/cgpoint.md).
- **`radius`**: A `float` representing the amount of pixels the filter uses to create the light tunnel as an [NSNumber](../../foundation/nsnumber.md).
- **rotation**: A `float` representing the rotation angle of the light tunnel as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that generates a swirling pattern from the input image:

```swift
func lightTunnel(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.lightTunnel()
    filter.inputImage = inputImage
    filter.radius = 100
    filter.rotation = .pi
    filter.center = CGPoint(
        x: inputImage.extent.width / 2,
        y: inputImage.extent.size.height / 2
    )
    return filter.outputImage!.cropped(to: inputImage.extent)
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with leaves in the background. The image on the right shows the result of applying the light tunnel filter, which produces a swirling pattern that shrinks towards the center of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407304@2x.png)

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
- [ninePartStretchedFilter](ninepartstretched%28%29.md): Distorts an image by stretching it between two breakpoints.
- [ninePartTiledFilter](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortionFilter](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [stretchCropFilter](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortionFilter](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortionFilter](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

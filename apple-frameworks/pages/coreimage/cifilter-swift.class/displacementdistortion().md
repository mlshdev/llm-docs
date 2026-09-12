> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/displacementdistortion()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/displacementdistortion())

# displacementDistortion() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Applies the grayscale values of the second image to the first image.

## Declaration

```swift
class func displacementDistortion() -> any CIFilter & CIDisplacementDistortion
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the displacement distortion filter to an image. This effect distorts an image by applying the grayscale color values of the texture image.

The displacement distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`displacementImage`**: An image with the type [CIImage](../ciimage.md).
- **`scale`**: A `float` representing the scaling the filter uses to apply the texture to the input image as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that applies the grayscale values of the displacement image to the input image:

```swift
func displacementDistortion(inputImage: CIImage) -> CIImage {
    // Create an interesting grayscale pattern.
    let displacementImage = CIFilter.checkerboardGenerator()
    displacementImage.color0 = CIColor.white
    displacementImage.color1 = CIColor.black
    displacementImage.width = 200
    let gaussianBlur = CIFilter.gaussianBlur()
    gaussianBlur.radius = 40
    gaussianBlur.inputImage = displacementImage.outputImage
    // Use it in the displacement filter.
    let filter = CIFilter.displacementDistortion()
    filter.displacementImage = gaussianBlur.outputImage
    filter.inputImage = inputImage
    filter.scale = 1000
    return filter.outputImage!
}
```

![A group of three images: two images on the left arranged vertically and a third image on the right vertically centered. The top left image is of a modern concrete building with black tinted windows. The bottom left image is a blurred checkerboard pattern. The image on the right shows the result of applying the displacement distortion effect. It appears as if there is a ripple in the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407313@2x.png)

## See Also

### Filters

- [bumpDistortion()](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinear()](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
- [circleSplashDistortion()](circlesplashdistortion%28%29.md): Distorts an image with radiating circles to the periphery of the image.
- [circularWrap()](circularwrap%28%29.md): Distorts an image by increasing the distance of the center of the image.
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

# displacementDistortionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Applies the grayscale values of the second image to the first image.

## Declaration

```objectivec
+ (CIFilter<CIDisplacementDistortion> *) displacementDistortionFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the displacement distortion filter to an image. This effect distorts an image by applying the grayscale color values of the texture image.

The displacement distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`displacementImage`**: An image with the type [CIImage](../ciimage.md).
- **`scale`**: A `float` representing the scaling the filter uses to apply the texture to the input image as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that applies the grayscale values of the displacement image to the input image:

```swift
func displacementDistortion(inputImage: CIImage) -> CIImage {
    // Create an interesting grayscale pattern.
    let displacementImage = CIFilter.checkerboardGenerator()
    displacementImage.color0 = CIColor.white
    displacementImage.color1 = CIColor.black
    displacementImage.width = 200
    let gaussianBlur = CIFilter.gaussianBlur()
    gaussianBlur.radius = 40
    gaussianBlur.inputImage = displacementImage.outputImage
    // Use it in the displacement filter.
    let filter = CIFilter.displacementDistortion()
    filter.displacementImage = gaussianBlur.outputImage
    filter.inputImage = inputImage
    filter.scale = 1000
    return filter.outputImage!
}
```

![A group of three images: two images on the left arranged vertically and a third image on the right vertically centered. The top left image is of a modern concrete building with black tinted windows. The bottom left image is a blurred checkerboard pattern. The image on the right shows the result of applying the displacement distortion effect. It appears as if there is a ripple in the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407313@2x.png)

## See Also

### Filters

- [bumpDistortionFilter](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinearFilter](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
- [circleSplashDistortionFilter](circlesplashdistortion%28%29.md): Distorts an image with radiating circles to the periphery of the image.
- [circularWrapFilter](circularwrap%28%29.md): Distorts an image by increasing the distance of the center of the image.
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

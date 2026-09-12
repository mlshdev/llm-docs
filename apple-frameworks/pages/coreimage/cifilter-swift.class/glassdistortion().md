> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/glassdistortion()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/glassdistortion())

# glassDistortion() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by applying a glass-like texture.

## Declaration

```swift
class func glassDistortion() -> any CIFilter & CIGlassDistortion
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the glass distortion filter to an image. This effect distorts an image by applying a glass texture from the raised portions of the texture map image.

The glass distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`texture`**: An image with the type [CIImage](../ciimage.md).
- **`scale`**: The amount of texturing to apply. Larger values increase the effect. Defaults to 200.
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).

The following code creates a filter that results in a glass-like distortion applied to the image:

```swift
func glassDistortion(inputImage: CIImage, textureImage: CIImage) -> CIImage {
    let filter = CIFilter.glassDistortion()
    filter.inputImage = inputImage
    filter.textureImage = textureImage
    filter.center = CGPoint(x: 1791, y: 1344)
    filter.scale = 500
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photo of the Golden Gate Bridge with a clear sky as the backdrop. The right image shows the result of applying the glass distortion filter. It appears as though the image is behind a piece of privacy glass.](https://developer.apple.com/images/com.apple.coreimage/media-4407314@2x.png)

## See Also

### Filters

- [bumpDistortion()](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinear()](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
- [circleSplashDistortion()](circlesplashdistortion%28%29.md): Distorts an image with radiating circles to the periphery of the image.
- [circularWrap()](circularwrap%28%29.md): Distorts an image by increasing the distance of the center of the image.
- [displacementDistortion()](displacementdistortion%28%29.md): Applies the grayscale values of the second image to the first image.
- [droste()](droste%28%29.md): Stylizes an image with the Droste effect.
- [glassLozenge()](glasslozenge%28%29.md): Creates a lozenge-shaped lens and distorts the image.
- [holeDistortion()](holedistortion%28%29.md): Distorts an image with a circular area that pushes the image outward.
- [lightTunnel()](lighttunnel%28%29.md): Distorts an image by generating a light tunnel.
- [ninePartStretched()](ninepartstretched%28%29.md): Distorts an image by stretching it between two breakpoints.
- [ninePartTiled()](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortion()](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [stretchCrop()](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortion()](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortion()](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

# glassDistortionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Distorts an image by applying a glass-like texture.

## Declaration

```objectivec
+ (CIFilter<CIGlassDistortion> *) glassDistortionFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the glass distortion filter to an image. This effect distorts an image by applying a glass texture from the raised portions of the texture map image.

The glass distortion filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`texture`**: An image with the type [CIImage](../ciimage.md).
- **`scale`**: The amount of texturing to apply. Larger values increase the effect. Defaults to 200.
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).

The following code creates a filter that results in a glass-like distortion applied to the image:

```swift
func glassDistortion(inputImage: CIImage, textureImage: CIImage) -> CIImage {
    let filter = CIFilter.glassDistortion()
    filter.inputImage = inputImage
    filter.textureImage = textureImage
    filter.center = CGPoint(x: 1791, y: 1344)
    filter.scale = 500
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photo of the Golden Gate Bridge with a clear sky as the backdrop. The right image shows the result of applying the glass distortion filter. It appears as though the image is behind a piece of privacy glass.](https://developer.apple.com/images/com.apple.coreimage/media-4407314@2x.png)

## See Also

### Filters

- [bumpDistortionFilter](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinearFilter](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
- [circleSplashDistortionFilter](circlesplashdistortion%28%29.md): Distorts an image with radiating circles to the periphery of the image.
- [circularWrapFilter](circularwrap%28%29.md): Distorts an image by increasing the distance of the center of the image.
- [displacementDistortionFilter](displacementdistortion%28%29.md): Applies the grayscale values of the second image to the first image.
- [drosteFilter](droste%28%29.md): Stylizes an image with the Droste effect.
- [glassLozengeFilter](glasslozenge%28%29.md): Creates a lozenge-shaped lens and distorts the image.
- [holeDistortionFilter](holedistortion%28%29.md): Distorts an image with a circular area that pushes the image outward.
- [lightTunnelFilter](lighttunnel%28%29.md): Distorts an image by generating a light tunnel.
- [ninePartStretchedFilter](ninepartstretched%28%29.md): Distorts an image by stretching it between two breakpoints.
- [ninePartTiledFilter](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortionFilter](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [stretchCropFilter](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortionFilter](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortionFilter](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

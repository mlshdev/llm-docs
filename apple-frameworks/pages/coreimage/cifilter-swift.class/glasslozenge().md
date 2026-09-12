> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/glasslozenge()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/glasslozenge())

# glassLozenge() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a lozenge-shaped lens and distorts the image.

## Declaration

```swift
class func glassLozenge() -> any CIFilter & CIGlassLozenge
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the glass lozenge filter to an image. This effect distorts an image by creating a lozenge shape placed over the input image.

The absolute threshold filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the radius of the lozenge distortion as an [NSNumber](../../foundation/nsnumber.md).
- **`refraction`**: A `float` representing the refraction of the glass as an [NSNumber](../../foundation/nsnumber.md).
- **`inputPoint1`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the x and y positions that define the center of the circle at the first end of the lozenge.
- **`inputPoint2`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the x and y positions that define the center of the circle at the second end of the lozenge.

The following code creates a filter that results in a large glass lozenge distorting the image:

```swift
func glassLozenge(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.glassLozenge()
    filter.inputImage = inputImage
    filter.refraction = 1.7
    filter.point0 = CGPoint(x: 150, y: 1050)
    filter.point1 = CGPoint(x: 3050, y: 150)
    return filter.outputImage!
}
```

![Two images next to each other. The left image contains a photograph of three hydrangea flowers with leaves in the background. In the right image, the glass lozenge filter has been applied. It appears as if the glass pill shape has been placed on top of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407280@2x.png)

## See Also

### Filters

- [bumpDistortion()](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinear()](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
- [circleSplashDistortion()](circlesplashdistortion%28%29.md): Distorts an image with radiating circles to the periphery of the image.
- [circularWrap()](circularwrap%28%29.md): Distorts an image by increasing the distance of the center of the image.
- [displacementDistortion()](displacementdistortion%28%29.md): Applies the grayscale values of the second image to the first image.
- [droste()](droste%28%29.md): Stylizes an image with the Droste effect.
- [glassDistortion()](glassdistortion%28%29.md): Distorts an image by applying a glass-like texture.
- [holeDistortion()](holedistortion%28%29.md): Distorts an image with a circular area that pushes the image outward.
- [lightTunnel()](lighttunnel%28%29.md): Distorts an image by generating a light tunnel.
- [ninePartStretched()](ninepartstretched%28%29.md): Distorts an image by stretching it between two breakpoints.
- [ninePartTiled()](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortion()](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [stretchCrop()](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortion()](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortion()](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

# glassLozengeFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a lozenge-shaped lens and distorts the image.

## Declaration

```objectivec
+ (CIFilter<CIGlassLozenge> *) glassLozengeFilter;
```

<a id="return-value"></a>

## Return Value

The distorted image.

<a id="Discussion"></a>

## Discussion

This method applies the glass lozenge filter to an image. This effect distorts an image by creating a lozenge shape placed over the input image.

The absolute threshold filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the radius of the lozenge distortion as an [NSNumber](../../foundation/nsnumber.md).
- **`refraction`**: A `float` representing the refraction of the glass as an [NSNumber](../../foundation/nsnumber.md).
- **`inputPoint1`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the x and y positions that define the center of the circle at the first end of the lozenge.
- **`inputPoint2`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the x and y positions that define the center of the circle at the second end of the lozenge.

The following code creates a filter that results in a large glass lozenge distorting the image:

```swift
func glassLozenge(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.glassLozenge()
    filter.inputImage = inputImage
    filter.refraction = 1.7
    filter.point0 = CGPoint(x: 150, y: 1050)
    filter.point1 = CGPoint(x: 3050, y: 150)
    return filter.outputImage!
}
```

![Two images next to each other. The left image contains a photograph of three hydrangea flowers with leaves in the background. In the right image, the glass lozenge filter has been applied. It appears as if the glass pill shape has been placed on top of the image.](https://developer.apple.com/images/com.apple.coreimage/media-4407280@2x.png)

## See Also

### Filters

- [bumpDistortionFilter](bumpdistortion%28%29.md): Distorts an image with a concave or convex bump.
- [bumpDistortionLinearFilter](bumpdistortionlinear%28%29.md): Linearly distorts an image with a concave or convex bump.
- [circleSplashDistortionFilter](circlesplashdistortion%28%29.md): Distorts an image with radiating circles to the periphery of the image.
- [circularWrapFilter](circularwrap%28%29.md): Distorts an image by increasing the distance of the center of the image.
- [displacementDistortionFilter](displacementdistortion%28%29.md): Applies the grayscale values of the second image to the first image.
- [drosteFilter](droste%28%29.md): Stylizes an image with the Droste effect.
- [glassDistortionFilter](glassdistortion%28%29.md): Distorts an image by applying a glass-like texture.
- [holeDistortionFilter](holedistortion%28%29.md): Distorts an image with a circular area that pushes the image outward.
- [lightTunnelFilter](lighttunnel%28%29.md): Distorts an image by generating a light tunnel.
- [ninePartStretchedFilter](ninepartstretched%28%29.md): Distorts an image by stretching it between two breakpoints.
- [ninePartTiledFilter](nineparttiled%28%29.md): Distorts an image by tiling portions of it.
- [pinchDistortionFilter](pinchdistortion%28%29.md): Distorts an image by creating a pinch effect with stronger distortion in the center.
- [stretchCropFilter](stretchcrop%28%29.md): Distorts an image by stretching or cropping to fit a specified size.
- [torusLensDistortionFilter](toruslensdistortion%28%29.md): Creates a torus-shaped lens to distort the image.
- [twirlDistortionFilter](twirldistortion%28%29.md): Distorts an image by rotating pixels around a center point.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/depthtodisparity()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/depthtodisparity())

# depthToDisparity() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Converts from an image containing depth data to an image containing disparity data.

## Declaration

```swift
class func depthToDisparity() -> any CIFilter & CIDepthToDisparity
```

<a id="return-value"></a>

## Return Value

An image containing the disparity data.

<a id="Discussion"></a>

## Discussion

This method applies the depth-to-disparity filter. The filter takes depth data as an input and produces disparity data in the output image. You can use the output of this filter to create a stereo image.

The depth-to-disparity filter uses the following property:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that generates a depth map image:

```swift
func depthToDisparity(inputImage: CIImage) -> CIImage {
    let depthToDisparityFilter = CIFilter.depthToDisparity()
    depthToDisparityFilter.inputImage = inputImage
    return depthToDisparityFilter.outputImage!
}
```

![Two photographs of a small dog sitting on grass. The photo on the left shows the dog in the foreground with good light and a soft blur of the background. In the photo on the right, a depth-to-disparity filter is applied, resulting in a depth map created from the photo on the left. The dog in the photo and the ground are replaced with gray, and the background is replaced with white.](https://developer.apple.com/images/com.apple.coreimage/media-3598060@2x.png)

## See Also

### Filters

- [colorAbsoluteDifference()](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClamp()](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControls()](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrix()](colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
- [colorPolynomial()](colorpolynomial%28%29.md): Alters an image’s colors.
- [colorThreshold()](colorthreshold%28%29.md): Compares the red, green, and blue components of the input image to a threshold and sets them to 1 or 0.
- [colorThresholdOtsu()](colorthresholdotsu%28%29.md): Compares the red, green, and blue components of the input image against a threshold calculated using Otsu’s algorithm.
- [disparityToDepth()](disparitytodepth%28%29.md): Creates depth data from an image containing disparity data.
- [exposureAdjust()](exposureadjust%28%29.md): Adjusts an image’s exposure.
- [gammaAdjust()](gammaadjust%28%29.md): Alters an image’s transition between black and white.
- [hueAdjust()](hueadjust%28%29.md): Modifies an image’s hue.
- [linearToSRGBToneCurve()](lineartosrgbtonecurve%28%29.md): Alters an image’s color intensity.
- [sRGBToneCurveToLinear()](srgbtonecurvetolinear%28%29.md): Converts the colors in an image from sRGB to linear.
- [temperatureAndTint()](temperatureandtint%28%29.md): Alters an image’s temperature and tint.
- [toneCurve()](tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

# depthToDisparityFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Converts from an image containing depth data to an image containing disparity data.

## Declaration

```objectivec
+ (CIFilter<CIDepthToDisparity> *) depthToDisparityFilter;
```

<a id="return-value"></a>

## Return Value

An image containing the disparity data.

<a id="Discussion"></a>

## Discussion

This method applies the depth-to-disparity filter. The filter takes depth data as an input and produces disparity data in the output image. You can use the output of this filter to create a stereo image.

The depth-to-disparity filter uses the following property:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that generates a depth map image:

```swift
func depthToDisparity(inputImage: CIImage) -> CIImage {
    let depthToDisparityFilter = CIFilter.depthToDisparity()
    depthToDisparityFilter.inputImage = inputImage
    return depthToDisparityFilter.outputImage!
}
```

![Two photographs of a small dog sitting on grass. The photo on the left shows the dog in the foreground with good light and a soft blur of the background. In the photo on the right, a depth-to-disparity filter is applied, resulting in a depth map created from the photo on the left. The dog in the photo and the ground are replaced with gray, and the background is replaced with white.](https://developer.apple.com/images/com.apple.coreimage/media-3598060@2x.png)

## See Also

### Filters

- [colorAbsoluteDifferenceFilter](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClampFilter](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControlsFilter](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrixFilter](colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
- [colorPolynomialFilter](colorpolynomial%28%29.md): Alters an image’s colors.
- [colorThresholdFilter](colorthreshold%28%29.md): Compares the red, green, and blue components of the input image to a threshold and sets them to 1 or 0.
- [colorThresholdOtsuFilter](colorthresholdotsu%28%29.md): Compares the red, green, and blue components of the input image against a threshold calculated using Otsu’s algorithm.
- [disparityToDepthFilter](disparitytodepth%28%29.md): Creates depth data from an image containing disparity data.
- [exposureAdjustFilter](exposureadjust%28%29.md): Adjusts an image’s exposure.
- [gammaAdjustFilter](gammaadjust%28%29.md): Alters an image’s transition between black and white.
- [hueAdjustFilter](hueadjust%28%29.md): Modifies an image’s hue.
- [linearToSRGBToneCurveFilter](lineartosrgbtonecurve%28%29.md): Alters an image’s color intensity.
- [sRGBToneCurveToLinearFilter](srgbtonecurvetolinear%28%29.md): Converts the colors in an image from sRGB to linear.
- [temperatureAndTintFilter](temperatureandtint%28%29.md): Alters an image’s temperature and tint.
- [toneCurveFilter](tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

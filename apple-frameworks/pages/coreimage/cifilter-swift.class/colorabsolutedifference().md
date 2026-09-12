> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colorabsolutedifference()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colorabsolutedifference())

# colorAbsoluteDifference() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates the absolute difference between each color component in the input images.

## Declaration

```swift
class func colorAbsoluteDifference() -> any CIFilter & CIColorAbsoluteDifference
```

<a id="return-value"></a>

## Return Value

An image containing the absolute color difference between the two input images.

<a id="Discussion"></a>

## Discussion

This method applies the color absolute difference filter to an image. This filter calculates the absolute color difference of the red, green, and blue values between the two input images. The alpha channel is the product of the alpha channels from the two input images.

The absolute difference filter uses the following properties:

- **`inputImage`**: The first [CIImage](../ciimage.md) for differencing.
- **`inputImage2`**: The second [CIImage](../ciimage.md) for differencing.

The following code creates a filter that results in the color difference between two images:

```swift
func colorAbsolute(inputImage: CIImage, inputImage2: CIImage) -> CIImage {
    let filter = CIFilter.colorAbsoluteDifference()
    filter.inputImage = inputImage
    filter.inputImage2 = inputImage2
    return filter.outputImage!
}
```

![Three images arranged with two images on the left and an image on the right. The top left image is a solid green color, and the bottom left image is a single palm tree with a clear sky. The right image shows the result of applying the color absolute difference filter to the two images on the left. The palm tree is now highlighted against the background.](https://developer.apple.com/images/com.apple.coreimage/media-4332166@2x.png)

## See Also

### Filters

- [colorClamp()](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControls()](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrix()](colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
- [colorPolynomial()](colorpolynomial%28%29.md): Alters an image’s colors.
- [colorThreshold()](colorthreshold%28%29.md): Compares the red, green, and blue components of the input image to a threshold and sets them to 1 or 0.
- [colorThresholdOtsu()](colorthresholdotsu%28%29.md): Compares the red, green, and blue components of the input image against a threshold calculated using Otsu’s algorithm.
- [depthToDisparity()](depthtodisparity%28%29.md): Converts from an image containing depth data to an image containing disparity data.
- [disparityToDepth()](disparitytodepth%28%29.md): Creates depth data from an image containing disparity data.
- [exposureAdjust()](exposureadjust%28%29.md): Adjusts an image’s exposure.
- [gammaAdjust()](gammaadjust%28%29.md): Alters an image’s transition between black and white.
- [hueAdjust()](hueadjust%28%29.md): Modifies an image’s hue.
- [linearToSRGBToneCurve()](lineartosrgbtonecurve%28%29.md): Alters an image’s color intensity.
- [sRGBToneCurveToLinear()](srgbtonecurvetolinear%28%29.md): Converts the colors in an image from sRGB to linear.
- [temperatureAndTint()](temperatureandtint%28%29.md): Alters an image’s temperature and tint.
- [toneCurve()](tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

# colorAbsoluteDifferenceFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Calculates the absolute difference between each color component in the input images.

## Declaration

```objectivec
+ (CIFilter<CIColorAbsoluteDifference> *) colorAbsoluteDifferenceFilter;
```

<a id="return-value"></a>

## Return Value

An image containing the absolute color difference between the two input images.

<a id="Discussion"></a>

## Discussion

This method applies the color absolute difference filter to an image. This filter calculates the absolute color difference of the red, green, and blue values between the two input images. The alpha channel is the product of the alpha channels from the two input images.

The absolute difference filter uses the following properties:

- **`inputImage`**: The first [CIImage](../ciimage.md) for differencing.
- **`inputImage2`**: The second [CIImage](../ciimage.md) for differencing.

The following code creates a filter that results in the color difference between two images:

```swift
func colorAbsolute(inputImage: CIImage, inputImage2: CIImage) -> CIImage {
    let filter = CIFilter.colorAbsoluteDifference()
    filter.inputImage = inputImage
    filter.inputImage2 = inputImage2
    return filter.outputImage!
}
```

![Three images arranged with two images on the left and an image on the right. The top left image is a solid green color, and the bottom left image is a single palm tree with a clear sky. The right image shows the result of applying the color absolute difference filter to the two images on the left. The palm tree is now highlighted against the background.](https://developer.apple.com/images/com.apple.coreimage/media-4332166@2x.png)

## See Also

### Filters

- [colorClampFilter](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControlsFilter](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrixFilter](colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
- [colorPolynomialFilter](colorpolynomial%28%29.md): Alters an image’s colors.
- [colorThresholdFilter](colorthreshold%28%29.md): Compares the red, green, and blue components of the input image to a threshold and sets them to 1 or 0.
- [colorThresholdOtsuFilter](colorthresholdotsu%28%29.md): Compares the red, green, and blue components of the input image against a threshold calculated using Otsu’s algorithm.
- [depthToDisparityFilter](depthtodisparity%28%29.md): Converts from an image containing depth data to an image containing disparity data.
- [disparityToDepthFilter](disparitytodepth%28%29.md): Creates depth data from an image containing disparity data.
- [exposureAdjustFilter](exposureadjust%28%29.md): Adjusts an image’s exposure.
- [gammaAdjustFilter](gammaadjust%28%29.md): Alters an image’s transition between black and white.
- [hueAdjustFilter](hueadjust%28%29.md): Modifies an image’s hue.
- [linearToSRGBToneCurveFilter](lineartosrgbtonecurve%28%29.md): Alters an image’s color intensity.
- [sRGBToneCurveToLinearFilter](srgbtonecurvetolinear%28%29.md): Converts the colors in an image from sRGB to linear.
- [temperatureAndTintFilter](temperatureandtint%28%29.md): Alters an image’s temperature and tint.
- [toneCurveFilter](tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

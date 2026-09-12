> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colorthreshold()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colorthreshold())

# colorThreshold() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Compares the red, green, and blue components of the input image to a threshold and sets them to 1 or 0.

## Declaration

```swift
class func colorThreshold() -> any CIFilter & CIColorThreshold
```

<a id="return-value"></a>

## Return Value

An image containing pixels with color components that are either 1 or 0.

<a id="Discussion"></a>

## Discussion

This method applies the color threshold filter to an image. The filter compares the value of each color component (red, green, and blue) in the image against the threshold value. Any component higher than the threshold becomes 1 and any component lower becomes 0. The alpha component remains unchanged.

The color threshold filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`threshold`**: A `float` representing the threshold of color values as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in an image where each color component is either 1 or 0.

```swift
func colorThreshold(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.colorThreshold()
    filter.inputImage = inputImage
    filter.threshold = 0.5
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with dark leaves in the background. The image on the right shows the result of applying the color threshold filter. The dark leaves have been replaced by black and the colors in the flowers are now fully saturated or white.](https://developer.apple.com/images/com.apple.coreimage/media-4331780@2x.png)

## See Also

### Filters

- [colorAbsoluteDifference()](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClamp()](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControls()](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrix()](colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
- [colorPolynomial()](colorpolynomial%28%29.md): Alters an image’s colors.
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

# colorThresholdFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Compares the red, green, and blue components of the input image to a threshold and sets them to 1 or 0.

## Declaration

```objectivec
+ (CIFilter<CIColorThreshold> *) colorThresholdFilter;
```

<a id="return-value"></a>

## Return Value

An image containing pixels with color components that are either 1 or 0.

<a id="Discussion"></a>

## Discussion

This method applies the color threshold filter to an image. The filter compares the value of each color component (red, green, and blue) in the image against the threshold value. Any component higher than the threshold becomes 1 and any component lower becomes 0. The alpha component remains unchanged.

The color threshold filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`threshold`**: A `float` representing the threshold of color values as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in an image where each color component is either 1 or 0.

```swift
func colorThreshold(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.colorThreshold()
    filter.inputImage = inputImage
    filter.threshold = 0.5
    return filter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photograph of three hydrangea flowers with dark leaves in the background. The image on the right shows the result of applying the color threshold filter. The dark leaves have been replaced by black and the colors in the flowers are now fully saturated or white.](https://developer.apple.com/images/com.apple.coreimage/media-4331780@2x.png)

## See Also

### Filters

- [colorAbsoluteDifferenceFilter](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClampFilter](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControlsFilter](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrixFilter](colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
- [colorPolynomialFilter](colorpolynomial%28%29.md): Alters an image’s colors.
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

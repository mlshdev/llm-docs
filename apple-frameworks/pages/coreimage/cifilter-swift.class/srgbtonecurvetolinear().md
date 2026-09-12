> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/srgbtonecurvetolinear()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/srgbtonecurvetolinear())

# sRGBToneCurveToLinear() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Converts the colors in an image from sRGB to linear.

## Declaration

```swift
class func sRGBToneCurveToLinear() -> any CIFilter & CISRGBToneCurveToLinear
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the sRGB-tone-curve-to-linear filter to an image. The effect converts an image in sRGB space to linear color space.

The sRGB-tone-curve-to-linear filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that converts from sRGB to linear color space.

```swift
func sRGBToLinear(inputImage: CIImage) -> CIImage {
    let sRGBToLinearFilter = CIFilter.sRGBToneCurveToLinear()
    sRGBToLinearFilter.inputImage = inputImage
    return sRGBToLinearFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows the Golden Gate Bridge against a clear sky. In the photo on the right, a sRGB-to-linear tone curve filter is applied, and the image is considerably darker.](https://developer.apple.com/images/com.apple.coreimage/media-4333632@2x.png)

## See Also

### Filters

- [colorAbsoluteDifference()](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
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
- [temperatureAndTint()](temperatureandtint%28%29.md): Alters an image’s temperature and tint.
- [toneCurve()](tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

# sRGBToneCurveToLinearFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Converts the colors in an image from sRGB to linear.

## Declaration

```objectivec
+ (CIFilter<CISRGBToneCurveToLinear> *) sRGBToneCurveToLinearFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the sRGB-tone-curve-to-linear filter to an image. The effect converts an image in sRGB space to linear color space.

The sRGB-tone-curve-to-linear filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that converts from sRGB to linear color space.

```swift
func sRGBToLinear(inputImage: CIImage) -> CIImage {
    let sRGBToLinearFilter = CIFilter.sRGBToneCurveToLinear()
    sRGBToLinearFilter.inputImage = inputImage
    return sRGBToLinearFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows the Golden Gate Bridge against a clear sky. In the photo on the right, a sRGB-to-linear tone curve filter is applied, and the image is considerably darker.](https://developer.apple.com/images/com.apple.coreimage/media-4333632@2x.png)

## See Also

### Filters

- [colorAbsoluteDifferenceFilter](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
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
- [temperatureAndTintFilter](temperatureandtint%28%29.md): Alters an image’s temperature and tint.
- [toneCurveFilter](tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

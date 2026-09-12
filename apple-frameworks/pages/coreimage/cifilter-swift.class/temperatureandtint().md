> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/temperatureandtint()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/temperatureandtint())

# temperatureAndTint() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Alters an image’s temperature and tint.

## Declaration

```swift
class func temperatureAndTint() -> any CIFilter & CITemperatureAndTint
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the image temperature and tint filter to an image. The effect adjusts the white balance of the input image to match the `targetNeutral` property, resulting in a cooler or warmer tone image.

The temperature and tint filter uses the following properties:

- **`neutral`**: A `vector` containing the source white point as a [CIVector](../civector.md).
- **`targetNeutral`**: A vector containing the desired white point as a [CIVector](../civector.md).
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds an orange hue to the input image:

```swift
func tempatureAndTint(inputImage: CIImage) -> CIImage {
    let tempatureAndTintFilter = CIFilter.temperatureAndTint()
    tempatureAndTintFilter.inputImage = inputImage
    tempatureAndTintFilter.neutral = CIVector(x: 11500, y: 10)
    tempatureAndTintFilter.targetNeutral = CIVector(x: 4000, y: 0)
    return tempatureAndTintFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows a small bunch of flowers photographed close up, in focus, with good light and no effects. In the photo on the right, a temperature and tint filter is applied, resulting in a orange hue applied to the image.](https://developer.apple.com/images/com.apple.coreimage/media-3545008@2x.png)

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
- [sRGBToneCurveToLinear()](srgbtonecurvetolinear%28%29.md): Converts the colors in an image from sRGB to linear.
- [toneCurve()](tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

# temperatureAndTintFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Alters an image’s temperature and tint.

## Declaration

```objectivec
+ (CIFilter<CITemperatureAndTint> *) temperatureAndTintFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the image temperature and tint filter to an image. The effect adjusts the white balance of the input image to match the `targetNeutral` property, resulting in a cooler or warmer tone image.

The temperature and tint filter uses the following properties:

- **`neutral`**: A `vector` containing the source white point as a [CIVector](../civector.md).
- **`targetNeutral`**: A vector containing the desired white point as a [CIVector](../civector.md).
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds an orange hue to the input image:

```swift
func tempatureAndTint(inputImage: CIImage) -> CIImage {
    let tempatureAndTintFilter = CIFilter.temperatureAndTint()
    tempatureAndTintFilter.inputImage = inputImage
    tempatureAndTintFilter.neutral = CIVector(x: 11500, y: 10)
    tempatureAndTintFilter.targetNeutral = CIVector(x: 4000, y: 0)
    return tempatureAndTintFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows a small bunch of flowers photographed close up, in focus, with good light and no effects. In the photo on the right, a temperature and tint filter is applied, resulting in a orange hue applied to the image.](https://developer.apple.com/images/com.apple.coreimage/media-3545008@2x.png)

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
- [sRGBToneCurveToLinearFilter](srgbtonecurvetolinear%28%29.md): Converts the colors in an image from sRGB to linear.
- [toneCurveFilter](tonecurve%28%29.md): Alters an image’s tone curve according to a series of data points.

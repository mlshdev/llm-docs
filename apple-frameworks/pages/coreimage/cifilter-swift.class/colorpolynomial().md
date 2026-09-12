> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colorpolynomial()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colorpolynomial())

# colorPolynomial() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Alters an image’s colors.

## Declaration

```swift
class func colorPolynomial() -> any CIFilter & CIColorPolynomial
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color polynomial filter to an image. The effect calculates the sum of each pixel’s color component value and the coefficient properties together to produce the output image.

The color polynomial filter uses the following properties:

- **`redCoefficients`**: A vector representing the polynomial coefficients for the red channel as a [CIVector](../civector.md).
- **`greenCoefficients`**: A vector representing the polynomial coefficients for the green channel as a [CIVector](../civector.md).
- **`blueCoefficients`**: A vector representing the polynomial coefficients for the blue channel as a [CIVector](../civector.md).
- **`alphaCoefficients`**: A vector representing the polynomial coefficients for the alpha channel as a [CIVector](../civector.md).
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds a lighter contrast to the input image:

```swift
func colorPolynomial(inputImage: CIImage) -> CIImage {
    let colorPolynomialFilter = CIFilter.colorPolynomial()
    colorPolynomialFilter.alphaCoefficients = CIVector (x: 0, y: 0.6, z: 0, w: 0)
    colorPolynomialFilter.redCoefficients = CIVector (x: 0, y: 1, z: 0.1, w: 0)
    colorPolynomialFilter.greenCoefficients = CIVector(x: 0, y: 1, z: 0, w: 0)
    colorPolynomialFilter.blueCoefficients = CIVector(x: 0, y: 1, z: 0, w: 0)
    colorPolynomialFilter.inputImage = inputImage
    return colorPolynomialFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows a small bunch of flowers photographed close up, in focus, with good light and no effects. In the photo on the right, a color polynomial filter is applied, resulting in less contrast.](https://developer.apple.com/images/com.apple.coreimage/media-3545009@2x.png)

## See Also

### Filters

- [colorAbsoluteDifference()](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClamp()](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControls()](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrix()](colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
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

# colorPolynomialFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Alters an image’s colors.

## Declaration

```objectivec
+ (CIFilter<CIColorPolynomial> *) colorPolynomialFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color polynomial filter to an image. The effect calculates the sum of each pixel’s color component value and the coefficient properties together to produce the output image.

The color polynomial filter uses the following properties:

- **`redCoefficients`**: A vector representing the polynomial coefficients for the red channel as a [CIVector](../civector.md).
- **`greenCoefficients`**: A vector representing the polynomial coefficients for the green channel as a [CIVector](../civector.md).
- **`blueCoefficients`**: A vector representing the polynomial coefficients for the blue channel as a [CIVector](../civector.md).
- **`alphaCoefficients`**: A vector representing the polynomial coefficients for the alpha channel as a [CIVector](../civector.md).
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds a lighter contrast to the input image:

```swift
func colorPolynomial(inputImage: CIImage) -> CIImage {
    let colorPolynomialFilter = CIFilter.colorPolynomial()
    colorPolynomialFilter.alphaCoefficients = CIVector (x: 0, y: 0.6, z: 0, w: 0)
    colorPolynomialFilter.redCoefficients = CIVector (x: 0, y: 1, z: 0.1, w: 0)
    colorPolynomialFilter.greenCoefficients = CIVector(x: 0, y: 1, z: 0, w: 0)
    colorPolynomialFilter.blueCoefficients = CIVector(x: 0, y: 1, z: 0, w: 0)
    colorPolynomialFilter.inputImage = inputImage
    return colorPolynomialFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows a small bunch of flowers photographed close up, in focus, with good light and no effects. In the photo on the right, a color polynomial filter is applied, resulting in less contrast.](https://developer.apple.com/images/com.apple.coreimage/media-3545009@2x.png)

## See Also

### Filters

- [colorAbsoluteDifferenceFilter](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClampFilter](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControlsFilter](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
- [colorMatrixFilter](colormatrix%28%29.md): Alters the colors in an image based on vectors provided.
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

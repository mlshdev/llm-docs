> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/tonecurve()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/tonecurve())

# toneCurve() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Alters an image’s tone curve according to a series of data points.

## Declaration

```swift
class func toneCurve() -> any CIFilter & CIToneCurve
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the tone curve filter to an image. The effect calculates the adjustment of the tone curve by the sum of the red, green, and blue color values with the point value properties specified.

The tone curve filter uses the following properties:

- **`point0`**: A v`ector` containing the position of the first point of the tone curve as a [CIVector](../civector.md).
- **`point1`**: A v`ector` containing the position of the second point of the tone curve as a [CIVector](../civector.md).
- **`point2`**: A `vector` containing the position of the third point of the tone curve as a [CIVector](../civector.md).
- **`point3`**: A v`ector` containing the position of the fourth point of the tone curve as a [CIVector](../civector.md).
- **`point4`**: A v`ector` containing the position of the fifth point of the tone curve as a [CIVector](../civector.md).
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds brightness to the input image:

```swift
func toneCurve(inputImage: CIImage) -> CIImage {
    let toneCurveFilter = CIFilter.toneCurve()
    toneCurveFilter.inputImage = inputImage
    toneCurveFilter.point0 = CGPoint(x: 0, y: 0)
    toneCurveFilter.point1 = CGPoint(x: 0.22, y: 0.25)
    toneCurveFilter.point2 = CGPoint(x: 0.4, y: 0.5)
    toneCurveFilter.point3 = CGPoint(x: 0.65, y: 0.75)
    toneCurveFilter.point4 = CGPoint(x: 1, y: 1)
    return toneCurveFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows a small bunch of flowers photographed close up, in focus, with good light and no effects. In the photo on the right, a tone curve filter is applied, resulting in a brighter image.](https://developer.apple.com/images/com.apple.coreimage/media-3545005@2x.png)

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
- [temperatureAndTint()](temperatureandtint%28%29.md): Alters an image’s temperature and tint.

# toneCurveFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Alters an image’s tone curve according to a series of data points.

## Declaration

```objectivec
+ (CIFilter<CIToneCurve> *) toneCurveFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the tone curve filter to an image. The effect calculates the adjustment of the tone curve by the sum of the red, green, and blue color values with the point value properties specified.

The tone curve filter uses the following properties:

- **`point0`**: A v`ector` containing the position of the first point of the tone curve as a [CIVector](../civector.md).
- **`point1`**: A v`ector` containing the position of the second point of the tone curve as a [CIVector](../civector.md).
- **`point2`**: A `vector` containing the position of the third point of the tone curve as a [CIVector](../civector.md).
- **`point3`**: A v`ector` containing the position of the fourth point of the tone curve as a [CIVector](../civector.md).
- **`point4`**: A v`ector` containing the position of the fifth point of the tone curve as a [CIVector](../civector.md).
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds brightness to the input image:

```swift
func toneCurve(inputImage: CIImage) -> CIImage {
    let toneCurveFilter = CIFilter.toneCurve()
    toneCurveFilter.inputImage = inputImage
    toneCurveFilter.point0 = CGPoint(x: 0, y: 0)
    toneCurveFilter.point1 = CGPoint(x: 0.22, y: 0.25)
    toneCurveFilter.point2 = CGPoint(x: 0.4, y: 0.5)
    toneCurveFilter.point3 = CGPoint(x: 0.65, y: 0.75)
    toneCurveFilter.point4 = CGPoint(x: 1, y: 1)
    return toneCurveFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows a small bunch of flowers photographed close up, in focus, with good light and no effects. In the photo on the right, a tone curve filter is applied, resulting in a brighter image.](https://developer.apple.com/images/com.apple.coreimage/media-3545005@2x.png)

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
- [temperatureAndTintFilter](temperatureandtint%28%29.md): Alters an image’s temperature and tint.

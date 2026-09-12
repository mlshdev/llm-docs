> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colormatrix()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colormatrix())

# colorMatrix() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Alters the colors in an image based on vectors provided.

## Declaration

```swift
class func colorMatrix() -> any CIFilter & CIColorMatrix
```

<a id="return-value"></a>

## Return Value

The modified image.

## Mentioned In

- [Simulating Scratchy Analog Film](../simulating-scratchy-analog-film.md)

<a id="Discussion"></a>

## Discussion

This method applies the color matrix filter to an image. The effect calculates the color matrix by multiplying the vector properties with the color values from the input image.

The color matrix filter uses the following properties:

- **`rVector`**: A [CIVector](../civector.md) representing the amount of red to multiply the source color values by.
- **`gVector`**: A [CIVector](../civector.md) representing the amount of green to multiply the source color values by.
- **`bVector`**: A [CIVector](../civector.md) representing the amount of blue to multiply the source color values by.
- **`aVector`**: A [CIVector](../civector.md) representing the amount of alpha to multiply the source color values by.
- **`biasVector`**: A [CIVector](../civector.md) representing the amount of each vector that’s added to each color component.
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds a green hue to the input image:

```swift
func colorMatrix(inputImage: CIImage) -> CIImage {
    let colorMatrixFilter = CIFilter.colorMatrix()
    colorMatrixFilter.inputImage = inputImage
    colorMatrixFilter.rVector = CIVector (x: 1, y: 0, z: 0.2, w: 0)
    colorMatrixFilter.gVector = CIVector (x: 0, y: 1, z: 0, w: 0.9)
    colorMatrixFilter.bVector = CIVector (x: 0, y: 0, z: 1, w: 0)
    colorMatrixFilter.aVector = CIVector (x: 0, y: 0, z: 0, w: 1)
    colorMatrixFilter.biasVector = CIVector (x: 0, y: 0, z: 0, w: 0)
    return colorMatrixFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows a small bunch of flowers photographed close up, in focus, with good light and no effects. In the photo on the right, a color matrix filter is applied, transforming the colors in the image to have a green hue.](https://developer.apple.com/images/com.apple.coreimage/media-3544998@2x.png)

## See Also

### Filters

- [colorAbsoluteDifference()](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClamp()](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControls()](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
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

# colorMatrixFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Alters the colors in an image based on vectors provided.

## Declaration

```objectivec
+ (CIFilter<CIColorMatrix> *) colorMatrixFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

## Mentioned In

- [Simulating Scratchy Analog Film](../simulating-scratchy-analog-film.md)

<a id="Discussion"></a>

## Discussion

This method applies the color matrix filter to an image. The effect calculates the color matrix by multiplying the vector properties with the color values from the input image.

The color matrix filter uses the following properties:

- **`rVector`**: A [CIVector](../civector.md) representing the amount of red to multiply the source color values by.
- **`gVector`**: A [CIVector](../civector.md) representing the amount of green to multiply the source color values by.
- **`bVector`**: A [CIVector](../civector.md) representing the amount of blue to multiply the source color values by.
- **`aVector`**: A [CIVector](../civector.md) representing the amount of alpha to multiply the source color values by.
- **`biasVector`**: A [CIVector](../civector.md) representing the amount of each vector that’s added to each color component.
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds a green hue to the input image:

```swift
func colorMatrix(inputImage: CIImage) -> CIImage {
    let colorMatrixFilter = CIFilter.colorMatrix()
    colorMatrixFilter.inputImage = inputImage
    colorMatrixFilter.rVector = CIVector (x: 1, y: 0, z: 0.2, w: 0)
    colorMatrixFilter.gVector = CIVector (x: 0, y: 1, z: 0, w: 0.9)
    colorMatrixFilter.bVector = CIVector (x: 0, y: 0, z: 1, w: 0)
    colorMatrixFilter.aVector = CIVector (x: 0, y: 0, z: 0, w: 1)
    colorMatrixFilter.biasVector = CIVector (x: 0, y: 0, z: 0, w: 0)
    return colorMatrixFilter.outputImage!
}
```

![Two versions of a photograph side by side. The photo on the left shows a small bunch of flowers photographed close up, in focus, with good light and no effects. In the photo on the right, a color matrix filter is applied, transforming the colors in the image to have a green hue.](https://developer.apple.com/images/com.apple.coreimage/media-3544998@2x.png)

## See Also

### Filters

- [colorAbsoluteDifferenceFilter](colorabsolutedifference%28%29.md): Calculates the absolute difference between each color component in the input images.
- [colorClampFilter](colorclamp%28%29.md): Alters the colors in an image based on color components.
- [colorControlsFilter](colorcontrols%28%29.md): Alters the brightness, contrast, and saturation of an image’s colors.
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

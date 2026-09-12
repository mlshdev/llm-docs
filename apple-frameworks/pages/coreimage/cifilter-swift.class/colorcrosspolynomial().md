> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colorcrosspolynomial()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colorcrosspolynomial())

# colorCrossPolynomial() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adjusts an image’s color by applying polynomial cross-products.

## Declaration

```swift
class func colorCrossPolynomial() -> any CIFilter & CIColorCrossPolynomial
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color cross polynomial filter to an image. The effect targets each pixel individually and calculates the coefficients for the r`ed`, `green`, and `blue` channels according to the polynomial cross product.

The color cross-polynomial filter uses the following properties:

- **`redCoefficients`**: A [CIVector](../civector.md) representing the polynomial coefficients for the red channel.
- **`blueCoefficients`**: A [CIVector](../civector.md) representing the polynomial coefficients for the blue channel.
- **`greenCoefficients`**: A [CIVector](../civector.md) representing polynomial coefficients for the green channel.
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds a green hue to the input image:

```swift
    func colorCrossPolynomial(inputImage: CIImage) -> CIImage? {

        let colorCrossPolynomial = CIFilter.colorCrossPolynomial()
        let redfloatArr: [CGFloat] = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
        let greenfloatArr: [CGFloat] = [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]
        let bluefloatArr: [CGFloat] = [0, 0, 1, 0, 0, 0, 0, 1, 1, 0]

        colorCrossPolynomial.inputImage = inputImage
        colorCrossPolynomial.blueCoefficients = CIVector(values: bluefloatArr, count: bluefloatArr.count)
        colorCrossPolynomial.redCoefficients = CIVector(values: redfloatArr, count: redfloatArr.count)
        colorCrossPolynomial.greenCoefficients = CIVector(values: greenfloatArr, count: greenfloatArr.count)
        return colorCrossPolynomial.outputImage
    }
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed closeup, in focus, with good light and no effects. In the photo on the right, a color cross polynomial filter is applied, and the colors in the image have a green hue.](https://developer.apple.com/images/com.apple.coreimage/media-3545029@2x.png)

## See Also

### Color Effect Filters

- [colorCube()](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpace()](colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMask()](colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
- [colorCurves()](colorcurves%28%29.md): Adjusts an image’s color curves.
- [colorInvert()](colorinvert%28%29.md): Inverts an image’s colors.
- [colorMap()](colormap%28%29.md): Performs a transformation of the input image colors to colors from a gradient image.
- [colorMonochrome()](colormonochrome%28%29.md): Adjusts an image’s colors to shades of a single color.
- [colorPosterize()](colorposterize%28%29.md): Flattens an image’s colors.
- [convertLabToRGB()](convertlabtorgb%28%29.md): Converts an image from CIELAB to RGB color space.
- [convertRGBtoLab()](convertrgbtolab%28%29.md): Converts an image from RGB to CIELAB color space.
- [dither()](dither%28%29.md): Applies randomized noise to produce a processed look.
- [documentEnhancer()](documentenhancer%28%29.md): Adjusts an image’s shadows and contrast.
- [falseColor()](falsecolor%28%29.md): Replaces an image’s colors with specified colors.
- [labDeltaE()](labdeltae%28%29.md): Compares an image’s color values.
- [maskToAlpha()](masktoalpha%28%29.md): Converts an image to a white image with an alpha component.

# colorCrossPolynomialFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adjusts an image’s color by applying polynomial cross-products.

## Declaration

```objectivec
+ (CIFilter<CIColorCrossPolynomial> *) colorCrossPolynomialFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color cross polynomial filter to an image. The effect targets each pixel individually and calculates the coefficients for the r`ed`, `green`, and `blue` channels according to the polynomial cross product.

The color cross-polynomial filter uses the following properties:

- **`redCoefficients`**: A [CIVector](../civector.md) representing the polynomial coefficients for the red channel.
- **`blueCoefficients`**: A [CIVector](../civector.md) representing the polynomial coefficients for the blue channel.
- **`greenCoefficients`**: A [CIVector](../civector.md) representing polynomial coefficients for the green channel.
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds a green hue to the input image:

```swift
    func colorCrossPolynomial(inputImage: CIImage) -> CIImage? {

        let colorCrossPolynomial = CIFilter.colorCrossPolynomial()
        let redfloatArr: [CGFloat] = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
        let greenfloatArr: [CGFloat] = [0, 1, 1, 0, 0, 0, 0, 0, 0, 1]
        let bluefloatArr: [CGFloat] = [0, 0, 1, 0, 0, 0, 0, 1, 1, 0]

        colorCrossPolynomial.inputImage = inputImage
        colorCrossPolynomial.blueCoefficients = CIVector(values: bluefloatArr, count: bluefloatArr.count)
        colorCrossPolynomial.redCoefficients = CIVector(values: redfloatArr, count: redfloatArr.count)
        colorCrossPolynomial.greenCoefficients = CIVector(values: greenfloatArr, count: greenfloatArr.count)
        return colorCrossPolynomial.outputImage
    }
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed closeup, in focus, with good light and no effects. In the photo on the right, a color cross polynomial filter is applied, and the colors in the image have a green hue.](https://developer.apple.com/images/com.apple.coreimage/media-3545029@2x.png)

## See Also

### Color Effect Filters

- [colorCubeFilter](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpaceFilter](colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMaskFilter](colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
- [colorCurvesFilter](colorcurves%28%29.md): Adjusts an image’s color curves.
- [colorInvertFilter](colorinvert%28%29.md): Inverts an image’s colors.
- [colorMapFilter](colormap%28%29.md): Performs a transformation of the input image colors to colors from a gradient image.
- [colorMonochromeFilter](colormonochrome%28%29.md): Adjusts an image’s colors to shades of a single color.
- [colorPosterizeFilter](colorposterize%28%29.md): Flattens an image’s colors.
- [convertLabToRGBFilter](convertlabtorgb%28%29.md): Converts an image from CIELAB to RGB color space.
- [convertRGBtoLabFilter](convertrgbtolab%28%29.md): Converts an image from RGB to CIELAB color space.
- [ditherFilter](dither%28%29.md): Applies randomized noise to produce a processed look.
- [documentEnhancerFilter](documentenhancer%28%29.md): Adjusts an image’s shadows and contrast.
- [falseColorFilter](falsecolor%28%29.md): Replaces an image’s colors with specified colors.
- [LabDeltaE](labdeltae%28%29.md): Compares an image’s color values.
- [maskToAlphaFilter](masktoalpha%28%29.md): Converts an image to a white image with an alpha component.

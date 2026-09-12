> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colormap()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colormap())

# colorMap() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Performs a transformation of the input image colors to colors from a gradient image.

## Declaration

```swift
class func colorMap() -> any CIFilter & CIColorMap
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a color map filter to an image. The effect transforms source color values by converting the unpremultiplied RGB values to luma using the weighting `(0.2125, 0.7154, 0.0721)`. The luma value is then used to look up the new color from the gradient image.

The color map filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`gradientImage`**: An image representing the gradient of colors to be mapped to the input image colors with the type [CIImage](../ciimage.md).

The following code creates a filter that adds the gradient image colors to the input image:

```swift
func colorMap(inputImage: CIImage, gradientImage: CIImage) -> CIImage {
    let colorMap = CIFilter.colorMap()
    colorMap.inputImage = inputImage
    colorMap.gradientImage = gradientImage
    return colorMap.outputImage!
}
```

![One photograph on the left above a gradient image, and a second photograph on the right. The photograph on the top left shows a single flower photographed closeup, in focus, with good light and no effects. The image below is a gradient image displaying a gradual color shift from lime green to orange. The photo on the right shows the same pink flower picture with a color map filter applied. The photograph displays the colors of the gradient photo, with the brightness and contrast of the flower photo.](https://developer.apple.com/images/com.apple.coreimage/media-3558775@2x.png)

## See Also

### Color Effect Filters

- [colorCrossPolynomial()](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCube()](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpace()](colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMask()](colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
- [colorCurves()](colorcurves%28%29.md): Adjusts an image’s color curves.
- [colorInvert()](colorinvert%28%29.md): Inverts an image’s colors.
- [colorMonochrome()](colormonochrome%28%29.md): Adjusts an image’s colors to shades of a single color.
- [colorPosterize()](colorposterize%28%29.md): Flattens an image’s colors.
- [convertLabToRGB()](convertlabtorgb%28%29.md): Converts an image from CIELAB to RGB color space.
- [convertRGBtoLab()](convertrgbtolab%28%29.md): Converts an image from RGB to CIELAB color space.
- [dither()](dither%28%29.md): Applies randomized noise to produce a processed look.
- [documentEnhancer()](documentenhancer%28%29.md): Adjusts an image’s shadows and contrast.
- [falseColor()](falsecolor%28%29.md): Replaces an image’s colors with specified colors.
- [labDeltaE()](labdeltae%28%29.md): Compares an image’s color values.
- [maskToAlpha()](masktoalpha%28%29.md): Converts an image to a white image with an alpha component.

# colorMapFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Performs a transformation of the input image colors to colors from a gradient image.

## Declaration

```objectivec
+ (CIFilter<CIColorMap> *) colorMapFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a color map filter to an image. The effect transforms source color values by converting the unpremultiplied RGB values to luma using the weighting `(0.2125, 0.7154, 0.0721)`. The luma value is then used to look up the new color from the gradient image.

The color map filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`gradientImage`**: An image representing the gradient of colors to be mapped to the input image colors with the type [CIImage](../ciimage.md).

The following code creates a filter that adds the gradient image colors to the input image:

```swift
func colorMap(inputImage: CIImage, gradientImage: CIImage) -> CIImage {
    let colorMap = CIFilter.colorMap()
    colorMap.inputImage = inputImage
    colorMap.gradientImage = gradientImage
    return colorMap.outputImage!
}
```

![One photograph on the left above a gradient image, and a second photograph on the right. The photograph on the top left shows a single flower photographed closeup, in focus, with good light and no effects. The image below is a gradient image displaying a gradual color shift from lime green to orange. The photo on the right shows the same pink flower picture with a color map filter applied. The photograph displays the colors of the gradient photo, with the brightness and contrast of the flower photo.](https://developer.apple.com/images/com.apple.coreimage/media-3558775@2x.png)

## See Also

### Color Effect Filters

- [colorCrossPolynomialFilter](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCubeFilter](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpaceFilter](colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMaskFilter](colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
- [colorCurvesFilter](colorcurves%28%29.md): Adjusts an image’s color curves.
- [colorInvertFilter](colorinvert%28%29.md): Inverts an image’s colors.
- [colorMonochromeFilter](colormonochrome%28%29.md): Adjusts an image’s colors to shades of a single color.
- [colorPosterizeFilter](colorposterize%28%29.md): Flattens an image’s colors.
- [convertLabToRGBFilter](convertlabtorgb%28%29.md): Converts an image from CIELAB to RGB color space.
- [convertRGBtoLabFilter](convertrgbtolab%28%29.md): Converts an image from RGB to CIELAB color space.
- [ditherFilter](dither%28%29.md): Applies randomized noise to produce a processed look.
- [documentEnhancerFilter](documentenhancer%28%29.md): Adjusts an image’s shadows and contrast.
- [falseColorFilter](falsecolor%28%29.md): Replaces an image’s colors with specified colors.
- [LabDeltaE](labdeltae%28%29.md): Compares an image’s color values.
- [maskToAlphaFilter](masktoalpha%28%29.md): Converts an image to a white image with an alpha component.

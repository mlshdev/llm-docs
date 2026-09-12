> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colorinvert()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colorinvert())

# colorInvert() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Inverts an image’s colors.

## Declaration

```swift
class func colorInvert() -> any CIFilter & CIColorInvert
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a preconfigured set of effects that invert the colors of an image.

The color-invert filter uses the following property:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that inverts the colors of the input image:

```swift
func colorInvert(inputImage: CIImage) -> CIImage {

    let colorInvertFilter = CIFilter.colorInvert()
    colorInvertFilter.inputImage = inputImage
    return colorInvertFilter.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close-up, in focus, with good light and no effects. In the photo on the right, a color invert filter is applied, resulting in the background becoming shades of purple and the flower becoming light blue.](https://developer.apple.com/images/com.apple.coreimage/media-3545010@2x.png)

## See Also

### Color Effect Filters

- [colorCrossPolynomial()](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCube()](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpace()](colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMask()](colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
- [colorCurves()](colorcurves%28%29.md): Adjusts an image’s color curves.
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

# colorInvertFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Inverts an image’s colors.

## Declaration

```objectivec
+ (CIFilter<CIColorInvert> *) colorInvertFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a preconfigured set of effects that invert the colors of an image.

The color-invert filter uses the following property:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that inverts the colors of the input image:

```swift
func colorInvert(inputImage: CIImage) -> CIImage {

    let colorInvertFilter = CIFilter.colorInvert()
    colorInvertFilter.inputImage = inputImage
    return colorInvertFilter.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close-up, in focus, with good light and no effects. In the photo on the right, a color invert filter is applied, resulting in the background becoming shades of purple and the flower becoming light blue.](https://developer.apple.com/images/com.apple.coreimage/media-3545010@2x.png)

## See Also

### Color Effect Filters

- [colorCrossPolynomialFilter](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCubeFilter](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpaceFilter](colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMaskFilter](colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
- [colorCurvesFilter](colorcurves%28%29.md): Adjusts an image’s color curves.
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

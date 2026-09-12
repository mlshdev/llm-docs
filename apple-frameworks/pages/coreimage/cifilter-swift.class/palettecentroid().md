> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/palettecentroid()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/palettecentroid())

# paletteCentroid() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Calculates the location of an image’s colors.

## Declaration

```swift
class func paletteCentroid() -> any CIFilter & CIPaletteCentroid
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the palette centroid filter to an image. The filter locates colors in the input image that the palette image defines and `outputImage.extent` provides the location of the colors of the image. You can combine with other filters to create more sophisticated images.

The palette centroid filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`paletteImage`**: An image that has the dimensions of *N* x 1 where *N* represents the amount of colors in the image, with type [CIImage](../ciimage.md).
- **`perceptual`**: A Boolean value that specifies if the filter applies the color palette in a perceptual color space.

The following code creates a filter that calculates the extent of the palette color:

```swift
func paletteCentroid(inputImage: CIImage, paletteImage: CIImage) -> CIImage {
    let paletteCentroidFilter = CIFilter.paletteCentroid()
    paletteCentroidFilter.inputImage = inputImage
    paletteCentroidFilter.paletteImage = paletteImage
    paletteCentroidFilter.perceptual = false
    return paletteCentroidFilter.outputImage!
}
```

## See Also

### Color Effect Filters

- [colorCrossPolynomial()](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
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

# paletteCentroidFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Calculates the location of an image’s colors.

## Declaration

```objectivec
+ (CIFilter<CIPaletteCentroid> *) paletteCentroidFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the palette centroid filter to an image. The filter locates colors in the input image that the palette image defines and `outputImage.extent` provides the location of the colors of the image. You can combine with other filters to create more sophisticated images.

The palette centroid filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`paletteImage`**: An image that has the dimensions of *N* x 1 where *N* represents the amount of colors in the image, with type [CIImage](../ciimage.md).
- **`perceptual`**: A Boolean value that specifies if the filter applies the color palette in a perceptual color space.

The following code creates a filter that calculates the extent of the palette color:

```swift
func paletteCentroid(inputImage: CIImage, paletteImage: CIImage) -> CIImage {
    let paletteCentroidFilter = CIFilter.paletteCentroid()
    paletteCentroidFilter.inputImage = inputImage
    paletteCentroidFilter.paletteImage = paletteImage
    paletteCentroidFilter.perceptual = false
    return paletteCentroidFilter.outputImage!
}
```

## See Also

### Color Effect Filters

- [colorCrossPolynomialFilter](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
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

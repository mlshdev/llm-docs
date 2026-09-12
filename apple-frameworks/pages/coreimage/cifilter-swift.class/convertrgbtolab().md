> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/convertrgbtolab()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/convertrgbtolab())

# convertRGBtoLab() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Converts an image from RGB to CIELAB color space.

## Declaration

```swift
class func convertRGBtoLab() -> any CIFilter & CIConvertLab
```

<a id="return-value"></a>

## Return Value

The converted [CIImage](../ciimage.md).

<a id="Discussion"></a>

## Discussion

This filter converts an image from RGB to CIELAB color space. The CIELAB color space expresses color as three values: L\* for the perceptual lightness, and a\*b\* for the colors red, green, blue, and yellow. The RGB color space expresses colors using the intensities of the three primary colors: red, green, and blue.

- **`inputImage`**: A [CIImage](../ciimage.md) containing the `RGB` image.
- **`normalize`**: If true, the three output channels are in the range 0 to 1. If false, the L\* channel is in the range 0 to 100 and the a\*b\* channels are in the range -128 to 128.

The following code applies the `convertRGBToLabFilter` to an image with the `normalize` flag set to the `true`:

```swift
func convertRGBToLab(inputImage: CIImage) -> CIImage {
    let convertRGBToLabFilter = CIFilter.convertRGBtoLab()
    convertRGBToLabFilter.inputImage = inputImage
    convertRGBToLabFilter.normalize = true
    return convertRGBToLabFilter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photo of the Golden Gate Bridge with a clear sky as the background. The right image shows the result of applying the convert-RGB-to-Lab filter with the normalize flag set to true. The bridge is a light cyan color and the sky is a gradient from yellow-green through to red-pink.](https://developer.apple.com/images/com.apple.coreimage/media-4407334@2x.png)

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
- [dither()](dither%28%29.md): Applies randomized noise to produce a processed look.
- [documentEnhancer()](documentenhancer%28%29.md): Adjusts an image’s shadows and contrast.
- [falseColor()](falsecolor%28%29.md): Replaces an image’s colors with specified colors.
- [labDeltaE()](labdeltae%28%29.md): Compares an image’s color values.
- [maskToAlpha()](masktoalpha%28%29.md): Converts an image to a white image with an alpha component.

# convertRGBtoLabFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Converts an image from RGB to CIELAB color space.

## Declaration

```objectivec
+ (CIFilter<CIConvertLab> *) convertRGBtoLabFilter;
```

<a id="return-value"></a>

## Return Value

The converted [CIImage](../ciimage.md).

<a id="Discussion"></a>

## Discussion

This filter converts an image from RGB to CIELAB color space. The CIELAB color space expresses color as three values: L\* for the perceptual lightness, and a\*b\* for the colors red, green, blue, and yellow. The RGB color space expresses colors using the intensities of the three primary colors: red, green, and blue.

- **`inputImage`**: A [CIImage](../ciimage.md) containing the `RGB` image.
- **`normalize`**: If true, the three output channels are in the range 0 to 1. If false, the L\* channel is in the range 0 to 100 and the a\*b\* channels are in the range -128 to 128.

The following code applies the `convertRGBToLabFilter` to an image with the `normalize` flag set to the `true`:

```swift
func convertRGBToLab(inputImage: CIImage) -> CIImage {
    let convertRGBToLabFilter = CIFilter.convertRGBtoLab()
    convertRGBToLabFilter.inputImage = inputImage
    convertRGBToLabFilter.normalize = true
    return convertRGBToLabFilter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photo of the Golden Gate Bridge with a clear sky as the background. The right image shows the result of applying the convert-RGB-to-Lab filter with the normalize flag set to true. The bridge is a light cyan color and the sky is a gradient from yellow-green through to red-pink.](https://developer.apple.com/images/com.apple.coreimage/media-4407334@2x.png)

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
- [ditherFilter](dither%28%29.md): Applies randomized noise to produce a processed look.
- [documentEnhancerFilter](documentenhancer%28%29.md): Adjusts an image’s shadows and contrast.
- [falseColorFilter](falsecolor%28%29.md): Replaces an image’s colors with specified colors.
- [LabDeltaE](labdeltae%28%29.md): Compares an image’s color values.
- [maskToAlphaFilter](masktoalpha%28%29.md): Converts an image to a white image with an alpha component.

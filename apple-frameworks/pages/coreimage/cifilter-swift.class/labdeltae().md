> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/labdeltae()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/labdeltae())

# labDeltaE() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Compares an image’s color values.

## Declaration

```swift
class func labDeltaE() -> any CIFilter & CILabDeltaE
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the Lab ΔE filter to an image. The effect creates an image based on the visual color differences between the two input images. The resulting image contains ΔE 1994 values between 0.0 and 100.0.

The Lab ΔE filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`image2`**: An image with the type [CIImage](../ciimage.md) the system uses for comparison.

The following code creates a filter that removes the background from the input image:

```swift
func labDeltaE(inputImage: CIImage, inputImage2: CIImage) -> CIImage {
    let labDeltaEFilter = CIFilter.labDeltaE()
    labDeltaEFilter.inputImage = inputImage
    labDeltaEFilter.image2 = inputImage2
    return labDeltaEFilter.outputImage!
}
```

![Two photographs of a star, pentagon, nonagon, and a rounded corner square arranged in the center of the image on a black background. In the photo on the right, a Lab ΔE filter is applied, so the image no longer has a black background, and all of the white shapes are now on a transparent layer.](https://developer.apple.com/images/com.apple.coreimage/media-3546476@2x.png)

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
- [maskToAlpha()](masktoalpha%28%29.md): Converts an image to a white image with an alpha component.

# LabDeltaE (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Compares an image’s color values.

## Declaration

```objectivec
+ (CIFilter<CILabDeltaE> *) LabDeltaE;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the Lab ΔE filter to an image. The effect creates an image based on the visual color differences between the two input images. The resulting image contains ΔE 1994 values between 0.0 and 100.0.

The Lab ΔE filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`image2`**: An image with the type [CIImage](../ciimage.md) the system uses for comparison.

The following code creates a filter that removes the background from the input image:

```swift
func labDeltaE(inputImage: CIImage, inputImage2: CIImage) -> CIImage {
    let labDeltaEFilter = CIFilter.labDeltaE()
    labDeltaEFilter.inputImage = inputImage
    labDeltaEFilter.image2 = inputImage2
    return labDeltaEFilter.outputImage!
}
```

![Two photographs of a star, pentagon, nonagon, and a rounded corner square arranged in the center of the image on a black background. In the photo on the right, a Lab ΔE filter is applied, so the image no longer has a black background, and all of the white shapes are now on a transparent layer.](https://developer.apple.com/images/com.apple.coreimage/media-3546476@2x.png)

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
- [maskToAlphaFilter](masktoalpha%28%29.md): Converts an image to a white image with an alpha component.

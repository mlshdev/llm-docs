> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colorcurves()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colorcurves())

# colorCurves() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adjusts an image’s color curves.

## Declaration

```swift
class func colorCurves() -> any CIFilter & CIColorCurves
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color curves filter to an image. The effect uses a three-channel one-dimensional color table to transform the source image pixels. The color table must be comprised of floating-point RGB value.

The color curves filter uses the following properties:

- **`colorSpace`**: A [CGColorSpace](../../coregraphics/cgcolorspace.md) representing the color space for the color curve.
- **`curvesData`**: Data containing a color table of floating-point RGB values as [NSData](../../foundation/nsdata.md).
- **`curvesDomain`**: A two-element vector that defines the minimum and maximum values of the curve data as a [CIVector](../civector.md).
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds brightness to the input image:

```swift
func colorCurves(inputImage: CIImage) -> CIImage {
    let colorCurvesEffect = CIFilter.colorCurves()
    colorCurvesEffect.inputImage = inputImage
    colorCurvesEffect.curvesDomain = CIVector(x: 0, y: 1)
    colorCurvesEffect.curvesData = Data(
        bytes: [Float32]([
            0.0,0.0,0.0,
            0.8,0.8,0.8,
            1.0,1.0,1.0
        ]), count: 36)
    colorCurvesEffect.colorSpace = CGColorSpaceCreateDeviceRGB()
    return colorCurvesEffect.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close-up, in focus, with good light and no effects. In the photo on the right, a color curves filter is applied, resulting in the photo becoming brighter.](https://developer.apple.com/images/com.apple.coreimage/media-3545017@2x.png)

## See Also

### Color Effect Filters

- [colorCrossPolynomial()](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCube()](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpace()](colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMask()](colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
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

# colorCurvesFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adjusts an image’s color curves.

## Declaration

```objectivec
+ (CIFilter<CIColorCurves> *) colorCurvesFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color curves filter to an image. The effect uses a three-channel one-dimensional color table to transform the source image pixels. The color table must be comprised of floating-point RGB value.

The color curves filter uses the following properties:

- **`colorSpace`**: A [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) representing the color space for the color curve.
- **`curvesData`**: Data containing a color table of floating-point RGB values as [NSData](../../foundation/nsdata.md).
- **`curvesDomain`**: A two-element vector that defines the minimum and maximum values of the curve data as a [CIVector](../civector.md).
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds brightness to the input image:

```swift
func colorCurves(inputImage: CIImage) -> CIImage {
    let colorCurvesEffect = CIFilter.colorCurves()
    colorCurvesEffect.inputImage = inputImage
    colorCurvesEffect.curvesDomain = CIVector(x: 0, y: 1)
    colorCurvesEffect.curvesData = Data(
        bytes: [Float32]([
            0.0,0.0,0.0,
            0.8,0.8,0.8,
            1.0,1.0,1.0
        ]), count: 36)
    colorCurvesEffect.colorSpace = CGColorSpaceCreateDeviceRGB()
    return colorCurvesEffect.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close-up, in focus, with good light and no effects. In the photo on the right, a color curves filter is applied, resulting in the photo becoming brighter.](https://developer.apple.com/images/com.apple.coreimage/media-3545017@2x.png)

## See Also

### Color Effect Filters

- [colorCrossPolynomialFilter](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCubeFilter](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
- [colorCubeWithColorSpaceFilter](colorcubewithcolorspace%28%29.md): Adjusts an image’s pixels using a three-dimensional color table in specified color space.
- [colorCubesMixedWithMaskFilter](colorcubesmixedwithmask%28%29.md): Alters an image’s pixels using a three-dimensional color tables and a mask image.
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

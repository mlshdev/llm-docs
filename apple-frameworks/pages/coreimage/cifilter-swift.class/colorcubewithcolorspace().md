> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/colorcubewithcolorspace()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/colorcubewithcolorspace())

# colorCubeWithColorSpace() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adjusts an image’s pixels using a three-dimensional color table in specified color space.

## Declaration

```swift
class func colorCubeWithColorSpace() -> any CIFilter & CIColorCubeWithColorSpace
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color cube with color space filter to an image. The effect applies a mapping from `rgb` space within the color space defined to color values the cubeData defines. For each pixel, it matches the data and adjusts the color on the output image.

The color cube with color space filter uses the following properties:

- **`cubeData`**: Data containing a 3-dimensional color table of floating-point premultiplied RGBA values. The cells are organized in a standard ordering. The columns and rows of the data are indexed by red and green, respectively. Each data plane is followed by the next higher plane in the data, with planes indexed by blue.
- **`colorSpace`**: A [CGColorSpace](../../coregraphics/cgcolorspace.md) representing the color space for the color cube.
- **`cubeDimension`**: The dimension of the color cube.
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds brightness to the input image:

```swift
func colorCube(inputImage: CIImage, cubeData: Data) -> CIImage {
    let colorCubeEffect = CIFilter.colorCubeWithColorSpace()
    colorCubeEffect.inputImage = inputImage
    colorCubeEffect.colorSpace = CGColorSpaceCreateDeviceRGB()
    colorCubeEffect.cubeData = cubeData
    colorCubeEffect.cubeDimension = 4
    return colorCubeEffect.outputImage!
}
// Create a color cube with size 4.
var colorCubeData: [Float32] = []
let size = 4
let step = 1.0 / Float32(size - 1)
for b in 0..<size {
    for g in 0..<size {
        for r in 0..<size {
            // Calculate the normalized color component values.
            let redNormalised = Float32(r) * step
            let greenNormalised = Float32(g) * step
            let blueNormalised = Float32(b) * step
            let red = pow(redNormalised, 0.5)
            let green = pow(greenNormalised, 0.5)
            let blue = pow(blueNormalised, 0.5)
            let alpha: Float = 1.0
            colorCubeData.append(contentsOf: [red, green, blue, alpha])
        }
    }
}
let cubeData = Data(bytes:colorCubeData, count: colorCubeData.count*4)
let result = colorCube(inputImage: ciImage, cubeData: cubeData)
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close-up, in focus, with good light and no effects. In the photo on the right, a color cube with color space filter is applied, resulting in the photo becoming lighter and the flower becoming darker.](https://developer.apple.com/images/com.apple.coreimage/media-3545016@2x.png)

## See Also

### Color Effect Filters

- [colorCrossPolynomial()](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCube()](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
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

# colorCubeWithColorSpaceFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adjusts an image’s pixels using a three-dimensional color table in specified color space.

## Declaration

```objectivec
+ (CIFilter<CIColorCubeWithColorSpace> *) colorCubeWithColorSpaceFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the color cube with color space filter to an image. The effect applies a mapping from `rgb` space within the color space defined to color values the cubeData defines. For each pixel, it matches the data and adjusts the color on the output image.

The color cube with color space filter uses the following properties:

- **`cubeData`**: Data containing a 3-dimensional color table of floating-point premultiplied RGBA values. The cells are organized in a standard ordering. The columns and rows of the data are indexed by red and green, respectively. Each data plane is followed by the next higher plane in the data, with planes indexed by blue.
- **`colorSpace`**: A [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) representing the color space for the color cube.
- **`cubeDimension`**: The dimension of the color cube.
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that adds brightness to the input image:

```swift
func colorCube(inputImage: CIImage, cubeData: Data) -> CIImage {
    let colorCubeEffect = CIFilter.colorCubeWithColorSpace()
    colorCubeEffect.inputImage = inputImage
    colorCubeEffect.colorSpace = CGColorSpaceCreateDeviceRGB()
    colorCubeEffect.cubeData = cubeData
    colorCubeEffect.cubeDimension = 4
    return colorCubeEffect.outputImage!
}
// Create a color cube with size 4.
var colorCubeData: [Float32] = []
let size = 4
let step = 1.0 / Float32(size - 1)
for b in 0..<size {
    for g in 0..<size {
        for r in 0..<size {
            // Calculate the normalized color component values.
            let redNormalised = Float32(r) * step
            let greenNormalised = Float32(g) * step
            let blueNormalised = Float32(b) * step
            let red = pow(redNormalised, 0.5)
            let green = pow(greenNormalised, 0.5)
            let blue = pow(blueNormalised, 0.5)
            let alpha: Float = 1.0
            colorCubeData.append(contentsOf: [red, green, blue, alpha])
        }
    }
}
let cubeData = Data(bytes:colorCubeData, count: colorCubeData.count*4)
let result = colorCube(inputImage: ciImage, cubeData: cubeData)
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close-up, in focus, with good light and no effects. In the photo on the right, a color cube with color space filter is applied, resulting in the photo becoming lighter and the flower becoming darker.](https://developer.apple.com/images/com.apple.coreimage/media-3545016@2x.png)

## See Also

### Color Effect Filters

- [colorCrossPolynomialFilter](colorcrosspolynomial%28%29.md): Adjusts an image’s color by applying polynomial cross-products.
- [colorCubeFilter](colorcube%28%29.md): Adjusts an image’s pixels using a three-dimensional color table.
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

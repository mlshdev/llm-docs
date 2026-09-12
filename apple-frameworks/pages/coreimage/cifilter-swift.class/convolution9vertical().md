> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/convolution9vertical()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/convolution9vertical())

# convolution9Vertical() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Applies a convolution-9 vertical filter to the `RGBA` components of an image.

## Declaration

```swift
class func convolution9Vertical() -> any CIFilter & CIConvolution
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a 1 x 9 convolution filter to the `RGBA` components of an image. The effect uses a 1 x 9 area surrounding an input pixel, the pixel itself, and those within a distance of 4 pixels vertically. The effect repeats this for every pixel within the image. Unlike the convolution filters, which use square matrices, this filter can only produce effects along a vertical axis. You can combine this filter with the [convolution9Horizontal()](convolution9horizontal%28%29.md) to apply separable 9 x 9 convolutions.

The convolution-9-vertical filter uses the following properties:

- **`bias`**: A `float` representing the value that’s added to each output pixel as a [NSNumber](../../foundation/nsnumber.md).
- **`weights`**: A [CIVector](../civector.md) representing the convolution kernel.
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

> **Note**

>  When using a nonzero `bias` value, the output image has an infinite extent. You should crop the output image before attempting to render it.

The following code creates a filter that detects edges in the input image:

```swift
func convolution9Vertical(inputImage: CIImage) -> CIImage? {
    let convolutionFilter = CIFilter.convolution9Vertical()
    convolutionFilter.inputImage = inputImage
    convolutionFilter.inputImage = inputImage
    let weights: [CGFloat] = [1, 1, 1, 1, 1, 1, 1, 1, 1].map { $0/9.0 }
    let kernel = CIVector(values: weights, count: 9)
    convolutionFilter.weights = kernel
    convolutionFilter.bias = 0.0
    return convolutionFilter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photo of the Golden Gate Bridge with a clear sky as the background. The right image shows the result of applying a vertical convolution kernel that blurs the image. Fine detail in the vertical direction is blurred.](https://developer.apple.com/images/com.apple.coreimage/media-4334868@2x.png)

## See Also

### Filters

- [convolution3X3()](convolution3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGBA` components of an image.
- [convolution5X5()](convolution5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGBA` components image.
- [convolution7X7()](convolution7x7%28%29.md): Applies a convolution 7 x 7 filter to the `RGBA` color components of an image.
- [convolution9Horizontal()](convolution9horizontal%28%29.md): Applies a convolution-9 horizontal filter to the `RGBA` components of an image.
- [convolutionRGB3X3()](convolutionrgb3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGB` components of an image.
- [convolutionRGB5X5()](convolutionrgb5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGB` components of an image.
- [convolutionRGB7X7()](convolutionrgb7x7%28%29.md): Applies a convolution 7 x 7 filter to the RGB components of an image.
- [convolutionRGB9Horizontal()](convolutionrgb9horizontal%28%29.md): Applies a convolution 9 x 1 filter to the RGB components of an image.
- [convolutionRGB9Vertical()](convolutionrgb9vertical%28%29.md): Applies a convolution 1 x 9 filter to the RGB components of an image.

# convolution9VerticalFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Applies a convolution-9 vertical filter to the `RGBA` components of an image.

## Declaration

```objectivec
+ (CIFilter<CIConvolution> *) convolution9VerticalFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a 1 x 9 convolution filter to the `RGBA` components of an image. The effect uses a 1 x 9 area surrounding an input pixel, the pixel itself, and those within a distance of 4 pixels vertically. The effect repeats this for every pixel within the image. Unlike the convolution filters, which use square matrices, this filter can only produce effects along a vertical axis. You can combine this filter with the [convolution9HorizontalFilter](convolution9horizontal%28%29.md) to apply separable 9 x 9 convolutions.

The convolution-9-vertical filter uses the following properties:

- **`bias`**: A `float` representing the value that’s added to each output pixel as a [NSNumber](../../foundation/nsnumber.md).
- **`weights`**: A [CIVector](../civector.md) representing the convolution kernel.
- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

> **Note**

>  When using a nonzero `bias` value, the output image has an infinite extent. You should crop the output image before attempting to render it.

The following code creates a filter that detects edges in the input image:

```swift
func convolution9Vertical(inputImage: CIImage) -> CIImage? {
    let convolutionFilter = CIFilter.convolution9Vertical()
    convolutionFilter.inputImage = inputImage
    convolutionFilter.inputImage = inputImage
    let weights: [CGFloat] = [1, 1, 1, 1, 1, 1, 1, 1, 1].map { $0/9.0 }
    let kernel = CIVector(values: weights, count: 9)
    convolutionFilter.weights = kernel
    convolutionFilter.bias = 0.0
    return convolutionFilter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photo of the Golden Gate Bridge with a clear sky as the background. The right image shows the result of applying a vertical convolution kernel that blurs the image. Fine detail in the vertical direction is blurred.](https://developer.apple.com/images/com.apple.coreimage/media-4334868@2x.png)

## See Also

### Filters

- [convolution3X3Filter](convolution3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGBA` components of an image.
- [convolution5X5Filter](convolution5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGBA` components image.
- [convolution7X7Filter](convolution7x7%28%29.md): Applies a convolution 7 x 7 filter to the `RGBA` color components of an image.
- [convolution9HorizontalFilter](convolution9horizontal%28%29.md): Applies a convolution-9 horizontal filter to the `RGBA` components of an image.
- [convolutionRGB3X3Filter](convolutionrgb3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGB` components of an image.
- [convolutionRGB5X5Filter](convolutionrgb5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGB` components of an image.
- [convolutionRGB7X7Filter](convolutionrgb7x7%28%29.md): Applies a convolution 7 x 7 filter to the RGB components of an image.
- [convolutionRGB9HorizontalFilter](convolutionrgb9horizontal%28%29.md): Applies a convolution 9 x 1 filter to the RGB components of an image.
- [convolutionRGB9VerticalFilter](convolutionrgb9vertical%28%29.md): Applies a convolution 1 x 9 filter to the RGB components of an image.

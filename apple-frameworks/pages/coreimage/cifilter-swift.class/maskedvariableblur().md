> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/maskedvariableblur()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/maskedvariableblur())

# maskedVariableBlur() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blurs a specified portion of an image.

## Declaration

```swift
class func maskedVariableBlur() -> any CIFilter & CIMaskedVariableBlur
```

<a id="return-value"></a>

## Return Value

The blurred image.

## Mentioned In

- [Selectively Focusing on an Image](../selectively-focusing-on-an-image.md)

<a id="Discussion"></a>

## Discussion

This method applies the masked variable blur to an image. The effect blurs the image in an area defined by the mask image. The mask image contains shades of grey that define the strength of the blur. Black colors in the mask cause no blurring, and white colors cause maximum blur.

The masked variable blur filter uses the following properties:

- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`mask`**: An image that masks an area on the input image with the type [CIImage](../ciimage.md).
- **`inputImage`**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds a blur to the bottom of the input image:

```swift
func maskedVariableBlur(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.maskedVariableBlur()
    filter.inputImage = inputImage
    // Create a mask that goes from white to black vertially.
    let mask = CIFilter.smoothLinearGradient()
    mask.color0 = CIColor.white
    mask.color1 = CIColor.black
    mask.point0 = CGPoint(x: 0, y: 0)
    mask.point1 = CGPoint(x:0, y: inputImage.extent.height)
    filter.mask = mask.outputImage
    filter.radius = 25
    return filter.outputImage!
}
```

![Three images, with two images on the left arranged vertically and a third image on the right vertically centered. The top left image contains a photo of the Golden Gate Bridge with a clear sky in the background. The bottom left image contains a white to black gradient with white at the bottom and black at the top. The right image shows the result of applying the masked variable blur filter using the two images on the left as inputs. The resulting image has a strong blur at the bottom that reduces to zero blur at the top.](https://developer.apple.com/images/com.apple.coreimage/media-4334872@2x.png)

## See Also

### Filters

- [bokehBlur()](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlur()](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlur()](discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
- [gaussianBlur()](gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [median()](median%28%29.md): Calculates the median of an image to refine detail.
- [morphologyGradient()](morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximum()](morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimum()](morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximum()](morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [morphologyRectangleMinimum()](morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlur()](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReduction()](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
- [zoomBlur()](zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

# maskedVariableBlurFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blurs a specified portion of an image.

## Declaration

```objectivec
+ (CIFilter<CIMaskedVariableBlur> *) maskedVariableBlurFilter;
```

<a id="return-value"></a>

## Return Value

The blurred image.

## Mentioned In

- [Selectively Focusing on an Image](../selectively-focusing-on-an-image.md)

<a id="Discussion"></a>

## Discussion

This method applies the masked variable blur to an image. The effect blurs the image in an area defined by the mask image. The mask image contains shades of grey that define the strength of the blur. Black colors in the mask cause no blurring, and white colors cause maximum blur.

The masked variable blur filter uses the following properties:

- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`mask`**: An image that masks an area on the input image with the type [CIImage](../ciimage.md).
- **`inputImage`**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds a blur to the bottom of the input image:

```swift
func maskedVariableBlur(inputImage: CIImage) -> CIImage {
    let filter = CIFilter.maskedVariableBlur()
    filter.inputImage = inputImage
    // Create a mask that goes from white to black vertially.
    let mask = CIFilter.smoothLinearGradient()
    mask.color0 = CIColor.white
    mask.color1 = CIColor.black
    mask.point0 = CGPoint(x: 0, y: 0)
    mask.point1 = CGPoint(x:0, y: inputImage.extent.height)
    filter.mask = mask.outputImage
    filter.radius = 25
    return filter.outputImage!
}
```

![Three images, with two images on the left arranged vertically and a third image on the right vertically centered. The top left image contains a photo of the Golden Gate Bridge with a clear sky in the background. The bottom left image contains a white to black gradient with white at the bottom and black at the top. The right image shows the result of applying the masked variable blur filter using the two images on the left as inputs. The resulting image has a strong blur at the bottom that reduces to zero blur at the top.](https://developer.apple.com/images/com.apple.coreimage/media-4334872@2x.png)

## See Also

### Filters

- [bokehBlurFilter](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlurFilter](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlurFilter](discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
- [gaussianBlurFilter](gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [medianFilter](median%28%29.md): Calculates the median of an image to refine detail.
- [morphologyGradientFilter](morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximumFilter](morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimumFilter](morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximumFilter](morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [morphologyRectangleMinimumFilter](morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlurFilter](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReductionFilter](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
- [zoomBlurFilter](zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

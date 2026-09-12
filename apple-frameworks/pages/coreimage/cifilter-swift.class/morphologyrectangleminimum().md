> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/morphologyrectangleminimum()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/morphologyrectangleminimum())

# morphologyRectangleMinimum() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blurs a rectangular area by reducing contrasting pixels.

## Declaration

```swift
class func morphologyRectangleMinimum() -> any CIFilter & CIMorphologyRectangleMinimum
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies the morphology rectangle minimum filter to an image. The effect targets a rectangular section of the image, calculating the median color values to find colors that make up more than half the working area. Using this calculation, the effect reduces the pixels with contrasting colors to take up more of the less area. The effect is then repeated throughout the image.

The morphology rectangle minimum filter uses the following properties:

- **width**: A `float` representing the width in pixels of the working area as an [NSNumber](../../foundation/nsnumber.md).
- **height**: A `float` representing the height in pixels of the working area as an [NSNumber](../../foundation/nsnumber.md).
- **inputImage**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds an intense blur to the palm trees input image:

```swift
    func morphologyRectangleMinimum(inputImage: CIImage) -> CIImage? {

        let morphologyRectangleMinimumFilter = CIFilter.morphologyRectangleMinimum()
        morphologyRectangleMinimumFilter.inputImage = inputImage
        morphologyRectangleMinimumFilter.width = 5
        morphologyRectangleMinimumFilter.height = 5
        return morphologyRectangleMinimumFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear and crisp. In the photo on the right, a morphology rectangle minimum blur has been applied, resulting in the image becoming hazy and the palm trees darker and less distinct.](https://developer.apple.com/images/com.apple.coreimage/media-3544957@2x.png)

## See Also

### Filters

- [bokehBlur()](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlur()](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlur()](discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
- [gaussianBlur()](gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [maskedVariableBlur()](maskedvariableblur%28%29.md): Blurs a specified portion of an image.
- [median()](median%28%29.md): Calculates the median of an image to refine detail.
- [morphologyGradient()](morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximum()](morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimum()](morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximum()](morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [motionBlur()](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReduction()](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
- [zoomBlur()](zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

# morphologyRectangleMinimumFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blurs a rectangular area by reducing contrasting pixels.

## Declaration

```objectivec
+ (CIFilter<CIMorphologyRectangleMinimum> *) morphologyRectangleMinimumFilter;
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies the morphology rectangle minimum filter to an image. The effect targets a rectangular section of the image, calculating the median color values to find colors that make up more than half the working area. Using this calculation, the effect reduces the pixels with contrasting colors to take up more of the less area. The effect is then repeated throughout the image.

The morphology rectangle minimum filter uses the following properties:

- **width**: A `float` representing the width in pixels of the working area as an [NSNumber](../../foundation/nsnumber.md).
- **height**: A `float` representing the height in pixels of the working area as an [NSNumber](../../foundation/nsnumber.md).
- **inputImage**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds an intense blur to the palm trees input image:

```swift
    func morphologyRectangleMinimum(inputImage: CIImage) -> CIImage? {

        let morphologyRectangleMinimumFilter = CIFilter.morphologyRectangleMinimum()
        morphologyRectangleMinimumFilter.inputImage = inputImage
        morphologyRectangleMinimumFilter.width = 5
        morphologyRectangleMinimumFilter.height = 5
        return morphologyRectangleMinimumFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear and crisp. In the photo on the right, a morphology rectangle minimum blur has been applied, resulting in the image becoming hazy and the palm trees darker and less distinct.](https://developer.apple.com/images/com.apple.coreimage/media-3544957@2x.png)

## See Also

### Filters

- [bokehBlurFilter](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlurFilter](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlurFilter](discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
- [gaussianBlurFilter](gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [maskedVariableBlurFilter](maskedvariableblur%28%29.md): Blurs a specified portion of an image.
- [medianFilter](median%28%29.md): Calculates the median of an image to refine detail.
- [morphologyGradientFilter](morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximumFilter](morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimumFilter](morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximumFilter](morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [motionBlurFilter](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReductionFilter](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
- [zoomBlurFilter](zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

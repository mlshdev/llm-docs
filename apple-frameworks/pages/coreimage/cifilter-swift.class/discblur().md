> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/discblur()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/discblur())

# discBlur() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Applies a circle-shaped blur to an area of an image.

## Declaration

```swift
class func discBlur() -> any CIFilter & CIDiscBlur
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies the disc blur filter to an image. The effect targets the pixels within a circle defined by a `radius` and calculates the median color value to create to the output image.

The disc blur filter uses the following properties:

- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`inputImage`**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds a strong blur to the input image:

```swift
    func discBlur(inputImage: CIImage) -> CIImage? {

        let discBlurFilter = CIFilter.discBlur()
        discBlurFilter.inputImage = inputImage
        discBlurFilter.radius = 8
        return discBlurFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear and crisp. In the photo on the right, a disc blur filter has been applied that creates a strong blur effect on the palm trees in the foreground of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3544964@2x.png)

## See Also

### Filters

- [bokehBlur()](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlur()](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [gaussianBlur()](gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [maskedVariableBlur()](maskedvariableblur%28%29.md): Blurs a specified portion of an image.
- [median()](median%28%29.md): Calculates the median of an image to refine detail.
- [morphologyGradient()](morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximum()](morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimum()](morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximum()](morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [morphologyRectangleMinimum()](morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlur()](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReduction()](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
- [zoomBlur()](zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

# discBlurFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Applies a circle-shaped blur to an area of an image.

## Declaration

```objectivec
+ (CIFilter<CIDiscBlur> *) discBlurFilter;
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies the disc blur filter to an image. The effect targets the pixels within a circle defined by a `radius` and calculates the median color value to create to the output image.

The disc blur filter uses the following properties:

- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`inputImage`**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds a strong blur to the input image:

```swift
    func discBlur(inputImage: CIImage) -> CIImage? {

        let discBlurFilter = CIFilter.discBlur()
        discBlurFilter.inputImage = inputImage
        discBlurFilter.radius = 8
        return discBlurFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear and crisp. In the photo on the right, a disc blur filter has been applied that creates a strong blur effect on the palm trees in the foreground of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3544964@2x.png)

## See Also

### Filters

- [bokehBlurFilter](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlurFilter](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [gaussianBlurFilter](gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [maskedVariableBlurFilter](maskedvariableblur%28%29.md): Blurs a specified portion of an image.
- [medianFilter](median%28%29.md): Calculates the median of an image to refine detail.
- [morphologyGradientFilter](morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximumFilter](morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimumFilter](morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximumFilter](morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [morphologyRectangleMinimumFilter](morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlurFilter](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReductionFilter](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
- [zoomBlurFilter](zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

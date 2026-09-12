> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/zoomblur()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/zoomblur())

# zoomBlur() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a zoom blur centered around a single point on the image.

## Declaration

```swift
class func zoomBlur() -> any CIFilter & CIZoomBlur
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies the zoom blur filter to an image. This effect mimics the zoom of a camera when capturing the image.

The zoom blur filter uses the following properties:

- **`amount`**: A `float` representing the zoom-in amount as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`inputImage`**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds a zoom blur to the input image:

```swift
    func zoomBlur(inputImage: CIImage) -> CIImage? {

        let zoomBlurFilter = CIFilter.zoomBlur()
        zoomBlurFilter.inputImage = inputImage
        zoomBlurFilter.amount = 5
        zoomBlurFilter.center = CGPoint(x: 150, y: 150)
        return zoomBlurFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear and crisp. In photo on the right, a zoom blur filter has been applied resulting in a distorted and fuzzy image.](https://developer.apple.com/images/com.apple.coreimage/media-3544962@2x.png)

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
- [morphologyRectangleMinimum()](morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlur()](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReduction()](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.

# zoomBlurFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a zoom blur centered around a single point on the image.

## Declaration

```objectivec
+ (CIFilter<CIZoomBlur> *) zoomBlurFilter;
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies the zoom blur filter to an image. This effect mimics the zoom of a camera when capturing the image.

The zoom blur filter uses the following properties:

- **`amount`**: A `float` representing the zoom-in amount as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`inputImage`**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds a zoom blur to the input image:

```swift
    func zoomBlur(inputImage: CIImage) -> CIImage? {

        let zoomBlurFilter = CIFilter.zoomBlur()
        zoomBlurFilter.inputImage = inputImage
        zoomBlurFilter.amount = 5
        zoomBlurFilter.center = CGPoint(x: 150, y: 150)
        return zoomBlurFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear and crisp. In photo on the right, a zoom blur filter has been applied resulting in a distorted and fuzzy image.](https://developer.apple.com/images/com.apple.coreimage/media-3544962@2x.png)

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
- [morphologyRectangleMinimumFilter](morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlurFilter](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReductionFilter](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.

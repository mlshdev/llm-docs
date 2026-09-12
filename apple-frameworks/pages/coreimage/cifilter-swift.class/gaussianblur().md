> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/gaussianblur()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/gaussianblur())

# gaussianBlur() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blurs an image with a Gaussian distribution pattern.

## Declaration

```swift
class func gaussianBlur() -> any CIFilter & CIGaussianBlur
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies a Gaussian blur filter to an image. The effect targets the pixels within a circle defined by a `radius` and uses Gaussian ditribution to blur the image from the center out.

The Gaussian blur filter uses the following properties:

- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`inputImage`**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds a heavy blur to the input image:

```swift
    func gaussianBlur(inputImage: CIImage) -> CIImage? {

        let gaussianBlurFilter = CIFilter.gaussianBlur()
        gaussianBlurFilter.inputImage = inputImage
        gaussianBlurFilter.radius = 10
        return gaussianBlurFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. A Gaussian blur filter has been applied to the photo on the right. It is smaller than the one on the left, and has an intense blur effect that makes the entire image very hazy.](https://developer.apple.com/images/com.apple.coreimage/media-3544963@2x.png)

## See Also

### Filters

- [bokehBlur()](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlur()](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlur()](discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
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

# gaussianBlurFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blurs an image with a Gaussian distribution pattern.

## Declaration

```objectivec
+ (CIFilter<CIGaussianBlur> *) gaussianBlurFilter;
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies a Gaussian blur filter to an image. The effect targets the pixels within a circle defined by a `radius` and uses Gaussian ditribution to blur the image from the center out.

The Gaussian blur filter uses the following properties:

- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`inputImage`**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that adds a heavy blur to the input image:

```swift
    func gaussianBlur(inputImage: CIImage) -> CIImage? {

        let gaussianBlurFilter = CIFilter.gaussianBlur()
        gaussianBlurFilter.inputImage = inputImage
        gaussianBlurFilter.radius = 10
        return gaussianBlurFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. A Gaussian blur filter has been applied to the photo on the right. It is smaller than the one on the left, and has an intense blur effect that makes the entire image very hazy.](https://developer.apple.com/images/com.apple.coreimage/media-3544963@2x.png)

## See Also

### Filters

- [bokehBlurFilter](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlurFilter](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlurFilter](discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
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

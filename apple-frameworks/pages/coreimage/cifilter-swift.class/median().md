> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/median()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/median())

# median() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Calculates the median of an image to refine detail.

## Declaration

```swift
class func median() -> any CIFilter & CIMedian
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies the median filter to an image. The effect computes the median value of colors for a group of neighboring pixels and replaces each pixel with calculated data.

The median filter uses the following properties:

- **inputImage**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that refines the detail in the input image:

```swift
    func medianBlur(inputImage: CIImage) -> CIImage? {

        let medianBlurFilter = CIFilter.median()
        medianBlurFilter.inputImage = inputImage
        return medianBlurFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear. In the photo on the right, a median effect has been applied, and the image is sharper and has more detail in the leafs of the trees in the foreground.](https://developer.apple.com/images/com.apple.coreimage/media-3544967@2x.png)

## See Also

### Filters

- [bokehBlur()](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlur()](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlur()](discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
- [gaussianBlur()](gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [maskedVariableBlur()](maskedvariableblur%28%29.md): Blurs a specified portion of an image.
- [morphologyGradient()](morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximum()](morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimum()](morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximum()](morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [morphologyRectangleMinimum()](morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlur()](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReduction()](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
- [zoomBlur()](zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

# medianFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Calculates the median of an image to refine detail.

## Declaration

```objectivec
+ (CIFilter<CIMedian> *) medianFilter;
```

<a id="return-value"></a>

## Return Value

The blurred image.

<a id="Discussion"></a>

## Discussion

This method applies the median filter to an image. The effect computes the median value of colors for a group of neighboring pixels and replaces each pixel with calculated data.

The median filter uses the following properties:

- **inputImage**: A [CIImage](../ciimage.md) representing the input image to apply the filter to.

The following code creates a filter that refines the detail in the input image:

```swift
    func medianBlur(inputImage: CIImage) -> CIImage? {

        let medianBlurFilter = CIFilter.median()
        medianBlurFilter.inputImage = inputImage
        return medianBlurFilter.outputImage
    }
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear. In the photo on the right, a median effect has been applied, and the image is sharper and has more detail in the leafs of the trees in the foreground.](https://developer.apple.com/images/com.apple.coreimage/media-3544967@2x.png)

## See Also

### Filters

- [bokehBlurFilter](bokehblur%28%29.md): Applies a bokeh effect to an image.
- [boxBlurFilter](boxblur%28%29.md): Applies a square-shaped blur to an area of an image.
- [discBlurFilter](discblur%28%29.md): Applies a circle-shaped blur to an area of an image.
- [gaussianBlurFilter](gaussianblur%28%29.md): Blurs an image with a Gaussian distribution pattern.
- [maskedVariableBlurFilter](maskedvariableblur%28%29.md): Blurs a specified portion of an image.
- [morphologyGradientFilter](morphologygradient%28%29.md): Detects and highlights edges of objects.
- [morphologyMaximumFilter](morphologymaximum%28%29.md): Blurs a circular area by enlarging contrasting pixels.
- [morphologyMinimumFilter](morphologyminimum%28%29.md): Blurs a circular area by reducing contrasting pixels.
- [morphologyRectangleMaximumFilter](morphologyrectanglemaximum%28%29.md): Blurs a rectangular area by enlarging contrasting pixels.
- [morphologyRectangleMinimumFilter](morphologyrectangleminimum%28%29.md): Blurs a rectangular area by reducing contrasting pixels.
- [motionBlurFilter](motionblur%28%29.md): Creates motion blur on an image.
- [noiseReductionFilter](noisereduction%28%29.md): Reduces noise by sharpening the edges of objects.
- [zoomBlurFilter](zoomblur%28%29.md): Creates a zoom blur centered around a single point on the image.

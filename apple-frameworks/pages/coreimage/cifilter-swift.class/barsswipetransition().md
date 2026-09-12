> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/barsswipetransition()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/barsswipetransition())

# barsSwipeTransition() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Transitions between two images by removing rectangular portions of an image.

## Declaration

```swift
class func barsSwipeTransition() -> any CIFilter & CIBarsSwipeTransition
```

<a id="return-value"></a>

## Return Value

The transition image.

## Mentioned In

- [Customizing Image Transitions](../customizing-image-transitions.md)

<a id="Discussion"></a>

## Discussion

This method applies the bar swipe transition filter to an image. The effect transitions from one image to another by a series of moving bars passing over the target image.

The bar swipe transition filter uses the following properties:

- **`inputImage`**: The starting image with the type [CIImage](../ciimage.md).
- **`targetImage`**: The ending image with the type [CIImage](../ciimage.md).
- **`time`**: A `float` representing the parametric time of the transition from start (at time 0) to end (at time 1) as an [NSNumber](../../foundation/nsnumber.md).
- **`angle`**: A `float` representing the angle of the motion as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the width of the bars in pixels as an [NSNumber](../../foundation/nsnumber.md).
- **`barOffset`**: A `float` representing the offset of one bar in relation to others as a [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that produces falling bars from the input image to transition to the target image:

```swift
func barSwipe(inputImage: CIImage, targetImage: CIImage) -> CIImage {
    let barSwipeTranstion = CIFilter.barsSwipeTransition()
    barSwipeTranstion.inputImage = inputImage
    barSwipeTranstion.targetImage = targetImage
    barSwipeTranstion.time = 0.5
    barSwipeTranstion.angle = 0.09
    barSwipeTranstion.width = 30
    barSwipeTranstion.barOffset = 10   
    return barSwipeTranstion.outputImage!
}
```

![Three photographs. In the photo on the left, multiple sets of small purple flowers are photographed close up with good lighting, and the background has a slight blur. In the photograph on the right is a tall city building with two trees directly in front of the building. The center photograph is a snapshot of the moment that the bar swipe transition creates, where the left photo slowly fades away by sized bars moving out of frame, revealing the city building.](https://developer.apple.com/images/com.apple.coreimage/media-3616431@2x.png)

## See Also

### Filters

- [accordionFoldTransition()](accordionfoldtransition%28%29.md): Transitions by folding and crossfading an image to reveal the target image.
- [copyMachineTransition()](copymachinetransition%28%29.md): Simulates the effect of a copy machine scanner light to transiton between two images.
- [disintegrateWithMaskTransition()](disintegratewithmasktransition%28%29.md): Transitions between two images using a mask image.
- [dissolveTransition()](dissolvetransition%28%29.md): Transitions between two images with a fade effect.
- [flashTransition()](flashtransition%28%29.md): Creates a flash of light to transition between two images.
- [modTransition()](modtransition%28%29.md): Transitions between two images by applying irregularly shaped holes.
- [pageCurlTransition()](pagecurltransition%28%29.md): Simulates the curl of a page, revealing the target image.
- [pageCurlWithShadowTransition()](pagecurlwithshadowtransition%28%29.md): Simulates the curl of a page, revealing the target image with added shadow.
- [rippleTransition()](rippletransition%28%29.md): Simulates a ripple in a pond to transiton from one image to another.
- [swipeTransition()](swipetransition%28%29.md): Gradually transitions from one image to another with a swiping motion.

# barsSwipeTransitionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Transitions between two images by removing rectangular portions of an image.

## Declaration

```objectivec
+ (CIFilter<CIBarsSwipeTransition> *) barsSwipeTransitionFilter;
```

<a id="return-value"></a>

## Return Value

The transition image.

## Mentioned In

- [Customizing Image Transitions](../customizing-image-transitions.md)

<a id="Discussion"></a>

## Discussion

This method applies the bar swipe transition filter to an image. The effect transitions from one image to another by a series of moving bars passing over the target image.

The bar swipe transition filter uses the following properties:

- **`inputImage`**: The starting image with the type [CIImage](../ciimage.md).
- **`targetImage`**: The ending image with the type [CIImage](../ciimage.md).
- **`time`**: A `float` representing the parametric time of the transition from start (at time 0) to end (at time 1) as an [NSNumber](../../foundation/nsnumber.md).
- **`angle`**: A `float` representing the angle of the motion as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the width of the bars in pixels as an [NSNumber](../../foundation/nsnumber.md).
- **`barOffset`**: A `float` representing the offset of one bar in relation to others as a [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that produces falling bars from the input image to transition to the target image:

```swift
func barSwipe(inputImage: CIImage, targetImage: CIImage) -> CIImage {
    let barSwipeTranstion = CIFilter.barsSwipeTransition()
    barSwipeTranstion.inputImage = inputImage
    barSwipeTranstion.targetImage = targetImage
    barSwipeTranstion.time = 0.5
    barSwipeTranstion.angle = 0.09
    barSwipeTranstion.width = 30
    barSwipeTranstion.barOffset = 10   
    return barSwipeTranstion.outputImage!
}
```

![Three photographs. In the photo on the left, multiple sets of small purple flowers are photographed close up with good lighting, and the background has a slight blur. In the photograph on the right is a tall city building with two trees directly in front of the building. The center photograph is a snapshot of the moment that the bar swipe transition creates, where the left photo slowly fades away by sized bars moving out of frame, revealing the city building.](https://developer.apple.com/images/com.apple.coreimage/media-3616431@2x.png)

## See Also

### Filters

- [accordionFoldTransitionFilter](accordionfoldtransition%28%29.md): Transitions by folding and crossfading an image to reveal the target image.
- [copyMachineTransitionFilter](copymachinetransition%28%29.md): Simulates the effect of a copy machine scanner light to transiton between two images.
- [disintegrateWithMaskTransitionFilter](disintegratewithmasktransition%28%29.md): Transitions between two images using a mask image.
- [dissolveTransitionFilter](dissolvetransition%28%29.md): Transitions between two images with a fade effect.
- [flashTransitionFilter](flashtransition%28%29.md): Creates a flash of light to transition between two images.
- [modTransitionFilter](modtransition%28%29.md): Transitions between two images by applying irregularly shaped holes.
- [pageCurlTransitionFilter](pagecurltransition%28%29.md): Simulates the curl of a page, revealing the target image.
- [pageCurlWithShadowTransitionFilter](pagecurlwithshadowtransition%28%29.md): Simulates the curl of a page, revealing the target image with added shadow.
- [rippleTransitionFilter](rippletransition%28%29.md): Simulates a ripple in a pond to transiton from one image to another.
- [swipeTransitionFilter](swipetransition%28%29.md): Gradually transitions from one image to another with a swiping motion.

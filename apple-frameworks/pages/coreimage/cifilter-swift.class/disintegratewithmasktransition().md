> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/disintegratewithmasktransition()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/disintegratewithmasktransition())

# disintegrateWithMaskTransition() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Transitions between two images using a mask image.

## Declaration

```swift
class func disintegrateWithMaskTransition() -> any CIFilter & CIDisintegrateWithMaskTransition
```

<a id="return-value"></a>

## Return Value

The transition image.

<a id="Discussion"></a>

## Discussion

This method applies the disintegrate with mask transition filter to an image. The effect transitions from one image to another using the shapes defined by the mask image.

The disintegrate with mask transition filter uses the following properties:

- **`inputImage`**: The starting image with the type [CIImage](../ciimage.md).
- **`targetImage`**: The ending image with the type [CIImage](../ciimage.md).
- **`maskImage`**: An image with the type [CIImage](../ciimage.md).
- **`time`**: A `float` representing the parametric time of the transition from start (at time 0) to end (at time 1) as an [NSNumber](../../foundation/nsnumber.md).
- **`shadowRadius`**: A `float` representing the size of the shadow as a [NSNumber](../../foundation/nsnumber.md).
- **`shadowDensity`**: A `float` representing the strength of the shadow as a [NSNumber](../../foundation/nsnumber.md).
- **`shadowOffset`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the size of the shadow from the mask image.

The following code creates a filter that produces a transition between the input and target images starting in the area’s outline in the mask image:

```swift
func disintergrate(inputImage: CIImage, targetImage: CIImage, maskImage: CIImage) -> CIImage {
    let disintergrateTransition  = CIFilter.disintegrateWithMaskTransition()
    disintergrateTransition.inputImage = inputImage
    disintergrateTransition.targetImage = targetImage
    disintergrateTransition.maskImage = maskImage
    disintergrateTransition.time = 0.5
    disintergrateTransition.shadowRadius = 8
    disintergrateTransition.shadowDensity = 0.65
    disintergrateTransition.shadowOffset = CGPoint(x: 0, y: -1)
    return disintergrateTransition.outputImage!
}
```

![Three photographs. In the photo on the left, there are multiple small purple flowers photographed close up with good lighting, and the background has a slight blur. In the photograph on the right is a tall building with two trees directly in front of the building. In the center photo, a disintegrate with mask transition filter is applied, resulting in a still photograph of the moving transition. The left photograph is overlaid on the right photo while slowly transitioning to the city image, with a slow fade of the flower image to the city image with added brightness.](https://developer.apple.com/images/com.apple.coreimage/media-3616430@2x.png)

## See Also

### Filters

- [accordionFoldTransition()](accordionfoldtransition%28%29.md): Transitions by folding and crossfading an image to reveal the target image.
- [barsSwipeTransition()](barsswipetransition%28%29.md): Transitions between two images by removing rectangular portions of an image.
- [copyMachineTransition()](copymachinetransition%28%29.md): Simulates the effect of a copy machine scanner light to transiton between two images.
- [dissolveTransition()](dissolvetransition%28%29.md): Transitions between two images with a fade effect.
- [flashTransition()](flashtransition%28%29.md): Creates a flash of light to transition between two images.
- [modTransition()](modtransition%28%29.md): Transitions between two images by applying irregularly shaped holes.
- [pageCurlTransition()](pagecurltransition%28%29.md): Simulates the curl of a page, revealing the target image.
- [pageCurlWithShadowTransition()](pagecurlwithshadowtransition%28%29.md): Simulates the curl of a page, revealing the target image with added shadow.
- [rippleTransition()](rippletransition%28%29.md): Simulates a ripple in a pond to transiton from one image to another.
- [swipeTransition()](swipetransition%28%29.md): Gradually transitions from one image to another with a swiping motion.

# disintegrateWithMaskTransitionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Transitions between two images using a mask image.

## Declaration

```objectivec
+ (CIFilter<CIDisintegrateWithMaskTransition> *) disintegrateWithMaskTransitionFilter;
```

<a id="return-value"></a>

## Return Value

The transition image.

<a id="Discussion"></a>

## Discussion

This method applies the disintegrate with mask transition filter to an image. The effect transitions from one image to another using the shapes defined by the mask image.

The disintegrate with mask transition filter uses the following properties:

- **`inputImage`**: The starting image with the type [CIImage](../ciimage.md).
- **`targetImage`**: The ending image with the type [CIImage](../ciimage.md).
- **`maskImage`**: An image with the type [CIImage](../ciimage.md).
- **`time`**: A `float` representing the parametric time of the transition from start (at time 0) to end (at time 1) as an [NSNumber](../../foundation/nsnumber.md).
- **`shadowRadius`**: A `float` representing the size of the shadow as a [NSNumber](../../foundation/nsnumber.md).
- **`shadowDensity`**: A `float` representing the strength of the shadow as a [NSNumber](../../foundation/nsnumber.md).
- **`shadowOffset`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the size of the shadow from the mask image.

The following code creates a filter that produces a transition between the input and target images starting in the area’s outline in the mask image:

```swift
func disintergrate(inputImage: CIImage, targetImage: CIImage, maskImage: CIImage) -> CIImage {
    let disintergrateTransition  = CIFilter.disintegrateWithMaskTransition()
    disintergrateTransition.inputImage = inputImage
    disintergrateTransition.targetImage = targetImage
    disintergrateTransition.maskImage = maskImage
    disintergrateTransition.time = 0.5
    disintergrateTransition.shadowRadius = 8
    disintergrateTransition.shadowDensity = 0.65
    disintergrateTransition.shadowOffset = CGPoint(x: 0, y: -1)
    return disintergrateTransition.outputImage!
}
```

![Three photographs. In the photo on the left, there are multiple small purple flowers photographed close up with good lighting, and the background has a slight blur. In the photograph on the right is a tall building with two trees directly in front of the building. In the center photo, a disintegrate with mask transition filter is applied, resulting in a still photograph of the moving transition. The left photograph is overlaid on the right photo while slowly transitioning to the city image, with a slow fade of the flower image to the city image with added brightness.](https://developer.apple.com/images/com.apple.coreimage/media-3616430@2x.png)

## See Also

### Filters

- [accordionFoldTransitionFilter](accordionfoldtransition%28%29.md): Transitions by folding and crossfading an image to reveal the target image.
- [barsSwipeTransitionFilter](barsswipetransition%28%29.md): Transitions between two images by removing rectangular portions of an image.
- [copyMachineTransitionFilter](copymachinetransition%28%29.md): Simulates the effect of a copy machine scanner light to transiton between two images.
- [dissolveTransitionFilter](dissolvetransition%28%29.md): Transitions between two images with a fade effect.
- [flashTransitionFilter](flashtransition%28%29.md): Creates a flash of light to transition between two images.
- [modTransitionFilter](modtransition%28%29.md): Transitions between two images by applying irregularly shaped holes.
- [pageCurlTransitionFilter](pagecurltransition%28%29.md): Simulates the curl of a page, revealing the target image.
- [pageCurlWithShadowTransitionFilter](pagecurlwithshadowtransition%28%29.md): Simulates the curl of a page, revealing the target image with added shadow.
- [rippleTransitionFilter](rippletransition%28%29.md): Simulates a ripple in a pond to transiton from one image to another.
- [swipeTransitionFilter](swipetransition%28%29.md): Gradually transitions from one image to another with a swiping motion.

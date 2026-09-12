> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/copymachinetransition()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/copymachinetransition())

# copyMachineTransition() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Simulates the effect of a copy machine scanner light to transiton between two images.

## Declaration

```swift
class func copyMachineTransition() -> any CIFilter & CICopyMachineTransition
```

<a id="return-value"></a>

## Return Value

The transition image.

## Mentioned In

- [Customizing Image Transitions](../customizing-image-transitions.md)

<a id="Discussion"></a>

## Discussion

This method applies the copy machine transition filter to an image. The effect transitions from one image to another by simulating the scanning light effect of a copy machine.

The copy machine transition filter uses the following properties:

- **`inputImage`**: The starting image with the type [CIImage](../ciimage.md).
- **`targetImage`**: The ending image with the type [CIImage](../ciimage.md).
- **`time`**: A `float` representing the parametric time of the transition from start (at time 0) to end (at time 1) as an [NSNumber](../../foundation/nsnumber.md).
- **`angle`**: A `float` representing the angle of the copier light, in radians as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the width of the effect as a [NSNumber](../../foundation/nsnumber.md).
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) representing the area of the copy machine effect.
- **`color`**: A [CIColor](../cicolor.md) representing the color of the light.
- **`opacity`**: A `float` representing the transparency of the copier light as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that produces a light bar that glides across the input image revealing the target image:

```swift
func copyMachine(inputImage: CIImage, targetImage: CIImage) -> CIImage {
    let copyMachineTransition = CIFilter.copyMachineTransition()
    copyMachineTransition.inputImage = inputImage
    copyMachineTransition.targetImage = targetImage
    copyMachineTransition.time = 0.5
    copyMachineTransition.angle = 0.9
    copyMachineTransition.extent = CGRect(x: 54.1, y: 90.2, width: 300, height: 300)
    copyMachineTransition.color = .white
    copyMachineTransition.width = 200
    copyMachineTransition.opacity = 1.30   
    return copyMachineTransition.outputImage!
}
```

![Three photographs. In the photo on the left, multiple sets of small purple flowers are photographed close up with good lighting, and the background has a slight blur. In the photograph on the right is a tall building with two trees directly in front of the building. In the center photo, a copy machine transition filter is applied, resulting in a still photograph of the moving transition. The left photograph is overlaid on the right photo while slowly transitioning to the city image with a light bar that stretches the height of the image slowly showing the city building image.](https://developer.apple.com/images/com.apple.coreimage/media-3616432@2x.png)

## See Also

### Filters

- [accordionFoldTransition()](accordionfoldtransition%28%29.md): Transitions by folding and crossfading an image to reveal the target image.
- [barsSwipeTransition()](barsswipetransition%28%29.md): Transitions between two images by removing rectangular portions of an image.
- [disintegrateWithMaskTransition()](disintegratewithmasktransition%28%29.md): Transitions between two images using a mask image.
- [dissolveTransition()](dissolvetransition%28%29.md): Transitions between two images with a fade effect.
- [flashTransition()](flashtransition%28%29.md): Creates a flash of light to transition between two images.
- [modTransition()](modtransition%28%29.md): Transitions between two images by applying irregularly shaped holes.
- [pageCurlTransition()](pagecurltransition%28%29.md): Simulates the curl of a page, revealing the target image.
- [pageCurlWithShadowTransition()](pagecurlwithshadowtransition%28%29.md): Simulates the curl of a page, revealing the target image with added shadow.
- [rippleTransition()](rippletransition%28%29.md): Simulates a ripple in a pond to transiton from one image to another.
- [swipeTransition()](swipetransition%28%29.md): Gradually transitions from one image to another with a swiping motion.

# copyMachineTransitionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Simulates the effect of a copy machine scanner light to transiton between two images.

## Declaration

```objectivec
+ (CIFilter<CICopyMachineTransition> *) copyMachineTransitionFilter;
```

<a id="return-value"></a>

## Return Value

The transition image.

## Mentioned In

- [Customizing Image Transitions](../customizing-image-transitions.md)

<a id="Discussion"></a>

## Discussion

This method applies the copy machine transition filter to an image. The effect transitions from one image to another by simulating the scanning light effect of a copy machine.

The copy machine transition filter uses the following properties:

- **`inputImage`**: The starting image with the type [CIImage](../ciimage.md).
- **`targetImage`**: The ending image with the type [CIImage](../ciimage.md).
- **`time`**: A `float` representing the parametric time of the transition from start (at time 0) to end (at time 1) as an [NSNumber](../../foundation/nsnumber.md).
- **`angle`**: A `float` representing the angle of the copier light, in radians as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the width of the effect as a [NSNumber](../../foundation/nsnumber.md).
- **`extent`**: A [CGRect](../../corefoundation/cgrect.md) representing the area of the copy machine effect.
- **`color`**: A [CIColor](../cicolor.md) representing the color of the light.
- **`opacity`**: A `float` representing the transparency of the copier light as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that produces a light bar that glides across the input image revealing the target image:

```swift
func copyMachine(inputImage: CIImage, targetImage: CIImage) -> CIImage {
    let copyMachineTransition = CIFilter.copyMachineTransition()
    copyMachineTransition.inputImage = inputImage
    copyMachineTransition.targetImage = targetImage
    copyMachineTransition.time = 0.5
    copyMachineTransition.angle = 0.9
    copyMachineTransition.extent = CGRect(x: 54.1, y: 90.2, width: 300, height: 300)
    copyMachineTransition.color = .white
    copyMachineTransition.width = 200
    copyMachineTransition.opacity = 1.30   
    return copyMachineTransition.outputImage!
}
```

![Three photographs. In the photo on the left, multiple sets of small purple flowers are photographed close up with good lighting, and the background has a slight blur. In the photograph on the right is a tall building with two trees directly in front of the building. In the center photo, a copy machine transition filter is applied, resulting in a still photograph of the moving transition. The left photograph is overlaid on the right photo while slowly transitioning to the city image with a light bar that stretches the height of the image slowly showing the city building image.](https://developer.apple.com/images/com.apple.coreimage/media-3616432@2x.png)

## See Also

### Filters

- [accordionFoldTransitionFilter](accordionfoldtransition%28%29.md): Transitions by folding and crossfading an image to reveal the target image.
- [barsSwipeTransitionFilter](barsswipetransition%28%29.md): Transitions between two images by removing rectangular portions of an image.
- [disintegrateWithMaskTransitionFilter](disintegratewithmasktransition%28%29.md): Transitions between two images using a mask image.
- [dissolveTransitionFilter](dissolvetransition%28%29.md): Transitions between two images with a fade effect.
- [flashTransitionFilter](flashtransition%28%29.md): Creates a flash of light to transition between two images.
- [modTransitionFilter](modtransition%28%29.md): Transitions between two images by applying irregularly shaped holes.
- [pageCurlTransitionFilter](pagecurltransition%28%29.md): Simulates the curl of a page, revealing the target image.
- [pageCurlWithShadowTransitionFilter](pagecurlwithshadowtransition%28%29.md): Simulates the curl of a page, revealing the target image with added shadow.
- [rippleTransitionFilter](rippletransition%28%29.md): Simulates a ripple in a pond to transiton from one image to another.
- [swipeTransitionFilter](swipetransition%28%29.md): Gradually transitions from one image to another with a swiping motion.

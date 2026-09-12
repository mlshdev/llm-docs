> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/modtransition()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/modtransition())

# modTransition() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Transitions between two images by applying irregularly shaped holes.

## Declaration

```swift
class func modTransition() -> any CIFilter & CIModTransition
```

<a id="return-value"></a>

## Return Value

The transition image.

<a id="Discussion"></a>

## Discussion

This method applies the mod transition filter to an image. The effect transitions from the input image to the output image by revealing the target image through irregularly shaped holes.

The mod transition filter uses the following properties:

- **`inputImage`**: The starting image with the type [CIImage](../ciimage.md).
- **`targetImage`**: The ending image with the type [CIImage](../ciimage.md).
- **`center`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the center of the image.
- **`angle`**: A `float` representing the angle of the effect as an [NSNumber](../../foundation/nsnumber.md).
- **`radius`**: A `float` representing the size of the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`compression`**: A `float` representing the amount of stretching applied to the mod hole pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`time`**: A `float` representing the parametric time of the transition from start (at time 0) to end (at time 1) as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that transitions from the input image to the target image by creating a series of irregular shaped holes.

```swift
func mod(inputImage: CIImage, targetImage: CIImage) -> CIImage {
    let modTransition = CIFilter.modTransition()
    modTransition.inputImage = inputImage
    modTransition.targetImage = targetImage
    modTransition.center = CGPoint(x: 390, y: 392)
    modTransition.time = 0.5
    modTransition.angle = 0.09
    modTransition.radius = 150
    modTransition.compression = 523   
    return modTransition.outputImage!
}
```

![Three photographs. In the photo on the left, there are multiple small purple flowers photographed close up with good lighting, and the background has a slight blur. In the photograph on the right is a tall building with two trees directly in front of the building. In the center photograph, a mod transition filter is applied, resulting in a still photo of the moving transition. The left photograph is overlaid on the photo on the right while transitioning by a series of irregular circles that spread to reveal the city photograph.](https://developer.apple.com/images/com.apple.coreimage/media-3616428@2x.png)

## See Also

### Filters

- [accordionFoldTransition()](accordionfoldtransition%28%29.md): Transitions by folding and crossfading an image to reveal the target image.
- [barsSwipeTransition()](barsswipetransition%28%29.md): Transitions between two images by removing rectangular portions of an image.
- [copyMachineTransition()](copymachinetransition%28%29.md): Simulates the effect of a copy machine scanner light to transiton between two images.
- [disintegrateWithMaskTransition()](disintegratewithmasktransition%28%29.md): Transitions between two images using a mask image.
- [dissolveTransition()](dissolvetransition%28%29.md): Transitions between two images with a fade effect.
- [flashTransition()](flashtransition%28%29.md): Creates a flash of light to transition between two images.
- [pageCurlTransition()](pagecurltransition%28%29.md): Simulates the curl of a page, revealing the target image.
- [pageCurlWithShadowTransition()](pagecurlwithshadowtransition%28%29.md): Simulates the curl of a page, revealing the target image with added shadow.
- [rippleTransition()](rippletransition%28%29.md): Simulates a ripple in a pond to transiton from one image to another.
- [swipeTransition()](swipetransition%28%29.md): Gradually transitions from one image to another with a swiping motion.

# modTransitionFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Transitions between two images by applying irregularly shaped holes.

## Declaration

```objectivec
+ (CIFilter<CIModTransition> *) modTransitionFilter;
```

<a id="return-value"></a>

## Return Value

The transition image.

<a id="Discussion"></a>

## Discussion

This method applies the mod transition filter to an image. The effect transitions from the input image to the output image by revealing the target image through irregularly shaped holes.

The mod transition filter uses the following properties:

- **`inputImage`**: The starting image with the type [CIImage](../ciimage.md).
- **`targetImage`**: The ending image with the type [CIImage](../ciimage.md).
- **`center`**: A [CGPoint](../../corefoundation/cgpoint.md) representing the center of the image.
- **`angle`**: A `float` representing the angle of the effect as an [NSNumber](../../foundation/nsnumber.md).
- **`radius`**: A `float` representing the size of the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`compression`**: A `float` representing the amount of stretching applied to the mod hole pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`time`**: A `float` representing the parametric time of the transition from start (at time 0) to end (at time 1) as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that transitions from the input image to the target image by creating a series of irregular shaped holes.

```swift
func mod(inputImage: CIImage, targetImage: CIImage) -> CIImage {
    let modTransition = CIFilter.modTransition()
    modTransition.inputImage = inputImage
    modTransition.targetImage = targetImage
    modTransition.center = CGPoint(x: 390, y: 392)
    modTransition.time = 0.5
    modTransition.angle = 0.09
    modTransition.radius = 150
    modTransition.compression = 523   
    return modTransition.outputImage!
}
```

![Three photographs. In the photo on the left, there are multiple small purple flowers photographed close up with good lighting, and the background has a slight blur. In the photograph on the right is a tall building with two trees directly in front of the building. In the center photograph, a mod transition filter is applied, resulting in a still photo of the moving transition. The left photograph is overlaid on the photo on the right while transitioning by a series of irregular circles that spread to reveal the city photograph.](https://developer.apple.com/images/com.apple.coreimage/media-3616428@2x.png)

## See Also

### Filters

- [accordionFoldTransitionFilter](accordionfoldtransition%28%29.md): Transitions by folding and crossfading an image to reveal the target image.
- [barsSwipeTransitionFilter](barsswipetransition%28%29.md): Transitions between two images by removing rectangular portions of an image.
- [copyMachineTransitionFilter](copymachinetransition%28%29.md): Simulates the effect of a copy machine scanner light to transiton between two images.
- [disintegrateWithMaskTransitionFilter](disintegratewithmasktransition%28%29.md): Transitions between two images using a mask image.
- [dissolveTransitionFilter](dissolvetransition%28%29.md): Transitions between two images with a fade effect.
- [flashTransitionFilter](flashtransition%28%29.md): Creates a flash of light to transition between two images.
- [pageCurlTransitionFilter](pagecurltransition%28%29.md): Simulates the curl of a page, revealing the target image.
- [pageCurlWithShadowTransitionFilter](pagecurlwithshadowtransition%28%29.md): Simulates the curl of a page, revealing the target image with added shadow.
- [rippleTransitionFilter](rippletransition%28%29.md): Simulates a ripple in a pond to transiton from one image to another.
- [swipeTransitionFilter](swipetransition%28%29.md): Gradually transitions from one image to another with a swiping motion.

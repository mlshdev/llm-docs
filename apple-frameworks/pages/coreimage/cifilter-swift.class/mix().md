> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/mix()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/mix())

# mix() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blends two images together.

## Declaration

```swift
class func mix() -> any CIFilter & CIMix
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the mix filter to an image. The effect uses the amount property to interpolate between the input image and the background image, resulting in both images visible in the output image.

The mix filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`backgroundImage`**: An image representing the background image with the type [CIImage](../ciimage.md).
- **`amount`**: A `float` representing the strength of the effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that combines the input and background images to create one image with both images visible:

```swift
func mix(inputImage: CIImage, backgroundImage: CIImage) -> CIImage {
    let mixFilter = CIFilter.mix()
    mixFilter.inputImage = inputImage
    mixFilter.backgroundImage = backgroundImage
    mixFilter.amount = 0.25
    return mixFilter.outputImage!
}
```

![Three pictures side by side. The first photo on the left is of the New York City skyline taken from across a river on an overcast day, with a single boat in the center of the image. The center photo is of multiple colorful rocks with green moss covering them. In the photo on the right, a mix filter is applied, and the image has detail from both the city skyline and mossy rock photo.](https://developer.apple.com/images/com.apple.coreimage/media-3600009@2x.png)

## See Also

### Filters

- [blendWithAlphaMask()](blendwithalphamask%28%29.md): Blends two images by using an alpha mask image.
- [blendWithBlueMask()](blendwithbluemask%28%29.md): Blends two images by using a blue mask image.
- [blendWithMask()](blendwithmask%28%29.md): Blends two images by using a mask image.
- [blendWithRedMask()](blendwithredmask%28%29.md): Blends two images by using a red mask image.
- [bloom()](bloom%28%29.md): Adjusts an image’s colors by applying a blur effect.
- [cannyEdgeDetector()](cannyedgedetector%28%29.md): Applies the Canny edge-detection algorithm to an image.
- [comicEffect()](comiceffect%28%29.md): Creates an image with a comic book effect.
- [coreMLModel()](coremlmodel%28%29.md): Filters an image with a Core ML model.
- [crystallize()](crystallize%28%29.md): Creates an image made with a series of colorful polygons.
- [depthOfField()](depthoffield%28%29.md): Simulates a depth of field effect.
- [edges()](edges%28%29.md): Hilghlights edges of objects found within an image.
- [edgeWork()](edgework%28%29.md): Produces a black-and-white image that looks similar to a woodblock print.
- [gaborGradients()](gaborgradients%28%29.md): Highlights textures in an image.
- [gloom()](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMask()](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.

# mixFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blends two images together.

## Declaration

```objectivec
+ (CIFilter<CIMix> *) mixFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the mix filter to an image. The effect uses the amount property to interpolate between the input image and the background image, resulting in both images visible in the output image.

The mix filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`backgroundImage`**: An image representing the background image with the type [CIImage](../ciimage.md).
- **`amount`**: A `float` representing the strength of the effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that combines the input and background images to create one image with both images visible:

```swift
func mix(inputImage: CIImage, backgroundImage: CIImage) -> CIImage {
    let mixFilter = CIFilter.mix()
    mixFilter.inputImage = inputImage
    mixFilter.backgroundImage = backgroundImage
    mixFilter.amount = 0.25
    return mixFilter.outputImage!
}
```

![Three pictures side by side. The first photo on the left is of the New York City skyline taken from across a river on an overcast day, with a single boat in the center of the image. The center photo is of multiple colorful rocks with green moss covering them. In the photo on the right, a mix filter is applied, and the image has detail from both the city skyline and mossy rock photo.](https://developer.apple.com/images/com.apple.coreimage/media-3600009@2x.png)

## See Also

### Filters

- [blendWithAlphaMaskFilter](blendwithalphamask%28%29.md): Blends two images by using an alpha mask image.
- [blendWithBlueMaskFilter](blendwithbluemask%28%29.md): Blends two images by using a blue mask image.
- [blendWithMaskFilter](blendwithmask%28%29.md): Blends two images by using a mask image.
- [blendWithRedMaskFilter](blendwithredmask%28%29.md): Blends two images by using a red mask image.
- [bloomFilter](bloom%28%29.md): Adjusts an image’s colors by applying a blur effect.
- [cannyEdgeDetectorFilter](cannyedgedetector%28%29.md): Applies the Canny edge-detection algorithm to an image.
- [comicEffectFilter](comiceffect%28%29.md): Creates an image with a comic book effect.
- [coreMLModelFilter](coremlmodel%28%29.md): Filters an image with a Core ML model.
- [crystallizeFilter](crystallize%28%29.md): Creates an image made with a series of colorful polygons.
- [depthOfFieldFilter](depthoffield%28%29.md): Simulates a depth of field effect.
- [edgesFilter](edges%28%29.md): Hilghlights edges of objects found within an image.
- [edgeWorkFilter](edgework%28%29.md): Produces a black-and-white image that looks similar to a woodblock print.
- [gaborGradientsFilter](gaborgradients%28%29.md): Highlights textures in an image.
- [gloomFilter](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMaskFilter](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.

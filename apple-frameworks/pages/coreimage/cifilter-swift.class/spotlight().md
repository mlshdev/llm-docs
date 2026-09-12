> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/spotlight()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/spotlight())

# spotLight() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Highlights a definined area of the image.

## Declaration

```swift
class func spotLight() -> any CIFilter & CISpotLight
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the spotlight filter to an image. The effect applies a directional spotlight effect to an image while creating a transparent area not highlighted by the spotlight.

The spotlight filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`lightPointsAt`**: A [CIVector](../civector.md) with the x and y positions that the spotlight points at.
- **`brightness`**: A `float` representing the brightness of the spotlight as an [NSNumber](../../foundation/nsnumber.md).
- **`lightPosition`**: A [CIVector](../civector.md) containing the x and y position of the spotlight.
- **`concentration`**: A `float` representing the size of the spotlight in pixels as an [NSNumber](../../foundation/nsnumber.md).
- **`color`**: A [CIColor](../cicolor.md) representing the spotlight color.

The following code creates a filter that results in only the bottom left of the image becoming visible while the rest of the image gradually becomes transparent:

```swift
func spotlight(inputImage: CIImage) -> CIImage {
    let spotlightFilter = CIFilter.spotLight()
    spotlightFilter.inputImage = inputImage
    spotlightFilter.lightPointsAt = CIVector(x: 100, y: 100)
    spotlightFilter.brightness = 10
    spotlightFilter.lightPosition = CIVector(x: 100, y: 100)
    spotlightFilter.concentration = 20
    return spotlightFilter.outputImage!
}
```

![Two pictures of a large amount of colorful  flowers. The photo on the left shows a group of flowers, in focus, with good light and no effects. In the photo on the right a spotlight  filter is applied, resulting in the photo becoming transparent with the bottom left corner being the most visible glimpse of the original image.](https://developer.apple.com/images/com.apple.coreimage/media-3600004@2x.png)

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

# spotLightFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Highlights a definined area of the image.

## Declaration

```objectivec
+ (CIFilter<CISpotLight> *) spotLightFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the spotlight filter to an image. The effect applies a directional spotlight effect to an image while creating a transparent area not highlighted by the spotlight.

The spotlight filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`lightPointsAt`**: A [CIVector](../civector.md) with the x and y positions that the spotlight points at.
- **`brightness`**: A `float` representing the brightness of the spotlight as an [NSNumber](../../foundation/nsnumber.md).
- **`lightPosition`**: A [CIVector](../civector.md) containing the x and y position of the spotlight.
- **`concentration`**: A `float` representing the size of the spotlight in pixels as an [NSNumber](../../foundation/nsnumber.md).
- **`color`**: A [CIColor](../cicolor.md) representing the spotlight color.

The following code creates a filter that results in only the bottom left of the image becoming visible while the rest of the image gradually becomes transparent:

```swift
func spotlight(inputImage: CIImage) -> CIImage {
    let spotlightFilter = CIFilter.spotLight()
    spotlightFilter.inputImage = inputImage
    spotlightFilter.lightPointsAt = CIVector(x: 100, y: 100)
    spotlightFilter.brightness = 10
    spotlightFilter.lightPosition = CIVector(x: 100, y: 100)
    spotlightFilter.concentration = 20
    return spotlightFilter.outputImage!
}
```

![Two pictures of a large amount of colorful  flowers. The photo on the left shows a group of flowers, in focus, with good light and no effects. In the photo on the right a spotlight  filter is applied, resulting in the photo becoming transparent with the bottom left corner being the most visible glimpse of the original image.](https://developer.apple.com/images/com.apple.coreimage/media-3600004@2x.png)

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

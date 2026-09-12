> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/spotcolor()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/spotcolor())

# spotColor() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Replaces colors of an image with specifed colors.

## Declaration

```swift
class func spotColor() -> any CIFilter & CISpotColor
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the spot color filter to an image. The effect replaces one or more of the color ranges of the input image with properties.

The spot color filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`centerColor1`**: A [CIColor](../cicolor.md) representing the median value of the first color to be replaced.
- **`centerColor2`**: A [CIColor](../cicolor.md) representing the median value of the second color to be replaced.
- **`centerColor3`**: A [CIColor](../cicolor.md) representing the median value of the third color to be replaced.
- **`replacementColor1`**: A [CIColor](../cicolor.md) to replace the first color.
- **`replacementColor2`**: A [CIColor](../cicolor.md) to replace the second color.
- **`replacementColor3`**: A [CIColor](../cicolor.md) to replace the third color.
- **`closeness1`**: A `float` representing how closely the first center color must match before it’s replaced.
- **`closeness2`**: A `float` representing how closely the second center color must match before it’s replaced.
- **`closeness3`**: A `float` representing how closely the third center color must match before it’s replaced.
- **`contrast1`**: A `float` representing the contrast of the first replacement color as an [NSNumber](../../foundation/nsnumber.md).
- **`contrast2`**: A `float` representing the contrast of the second replacement color as an [NSNumber](../../foundation/nsnumber.md).
- **`contrast3`**: A `float` representing the contrast of the third replacement color as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that replaces the colors of the input image with the specified colors:

```swift
func spotColor(inputImage: CIImage) -> CIImage {
    let spotColorFilter = CIFilter.spotColor()
    spotColorFilter.inputImage = inputImage
    spotColorFilter.centerColor1 = .red
    spotColorFilter.replacementColor1 = .green
    spotColorFilter.closeness1 = 5
    spotColorFilter.contrast1 = 1
    return spotColorFilter.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left has no modifications to color. In the photo on the right, a spot color filter is applied, resulting in less color in the image with the center flower becoming brown and the foliage becoming a solid light green.](https://developer.apple.com/images/com.apple.coreimage/media-3600008@2x.png)

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

# spotColorFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Replaces colors of an image with specifed colors.

## Declaration

```objectivec
+ (CIFilter<CISpotColor> *) spotColorFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the spot color filter to an image. The effect replaces one or more of the color ranges of the input image with properties.

The spot color filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`centerColor1`**: A [CIColor](../cicolor.md) representing the median value of the first color to be replaced.
- **`centerColor2`**: A [CIColor](../cicolor.md) representing the median value of the second color to be replaced.
- **`centerColor3`**: A [CIColor](../cicolor.md) representing the median value of the third color to be replaced.
- **`replacementColor1`**: A [CIColor](../cicolor.md) to replace the first color.
- **`replacementColor2`**: A [CIColor](../cicolor.md) to replace the second color.
- **`replacementColor3`**: A [CIColor](../cicolor.md) to replace the third color.
- **`closeness1`**: A `float` representing how closely the first center color must match before it’s replaced.
- **`closeness2`**: A `float` representing how closely the second center color must match before it’s replaced.
- **`closeness3`**: A `float` representing how closely the third center color must match before it’s replaced.
- **`contrast1`**: A `float` representing the contrast of the first replacement color as an [NSNumber](../../foundation/nsnumber.md).
- **`contrast2`**: A `float` representing the contrast of the second replacement color as an [NSNumber](../../foundation/nsnumber.md).
- **`contrast3`**: A `float` representing the contrast of the third replacement color as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that replaces the colors of the input image with the specified colors:

```swift
func spotColor(inputImage: CIImage) -> CIImage {
    let spotColorFilter = CIFilter.spotColor()
    spotColorFilter.inputImage = inputImage
    spotColorFilter.centerColor1 = .red
    spotColorFilter.replacementColor1 = .green
    spotColorFilter.closeness1 = 5
    spotColorFilter.contrast1 = 1
    return spotColorFilter.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left has no modifications to color. In the photo on the right, a spot color filter is applied, resulting in less color in the image with the center flower becoming brown and the foliage becoming a solid light green.](https://developer.apple.com/images/com.apple.coreimage/media-3600008@2x.png)

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

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/coremlmodel()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/coremlmodel())

# coreMLModel() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Filters an image with a Core ML model.

## Declaration

```swift
class func coreMLModel() -> any CIFilter & CICoreMLModel
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the Core ML model filter to an image. The effect filters the image using a trained Core ML model to produce the result. Specifying the head index allows you to produce a result from various components of a multiheaded coreML model.

The Core ML model filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`headIndex`**: A `float` representing which output of a multihead Core ML model should be used for applying the effect to an image.
- **`softmaxNormalization`**: A `Boolean` value representing the softmax normalization to be applied to the output image created by the model.
- **`inputModel`**: The Core ML model to be used for applying effect on the image.

The following code creates a filter that results in the flowers appearing to be glass panes:

```swift
func coreML(inputImage: CIImage) -> CIImage {
    let coreMLFilter = CIFilter.coreMLModel()
    let model = GlassModel().model
    coreMLFilter.inputImage = inputImage
    coreMLFilter.headIndex = 0
    coreMLFilter.softmaxNormalization = false
    return coreMLFilter.outputImage!
}
```

![Two photographs of colorful flowers. The photo on the left is clear and crisp with good lighting. In the photo on the right, a Core ML model filter is applied, and the image flowers appear to be made of colorful glass panes.](https://developer.apple.com/images/com.apple.coreimage/media-3600002@2x.png)

## See Also

### Filters

- [blendWithAlphaMask()](blendwithalphamask%28%29.md): Blends two images by using an alpha mask image.
- [blendWithBlueMask()](blendwithbluemask%28%29.md): Blends two images by using a blue mask image.
- [blendWithMask()](blendwithmask%28%29.md): Blends two images by using a mask image.
- [blendWithRedMask()](blendwithredmask%28%29.md): Blends two images by using a red mask image.
- [bloom()](bloom%28%29.md): Adjusts an image’s colors by applying a blur effect.
- [cannyEdgeDetector()](cannyedgedetector%28%29.md): Applies the Canny edge-detection algorithm to an image.
- [comicEffect()](comiceffect%28%29.md): Creates an image with a comic book effect.
- [crystallize()](crystallize%28%29.md): Creates an image made with a series of colorful polygons.
- [depthOfField()](depthoffield%28%29.md): Simulates a depth of field effect.
- [edges()](edges%28%29.md): Hilghlights edges of objects found within an image.
- [edgeWork()](edgework%28%29.md): Produces a black-and-white image that looks similar to a woodblock print.
- [gaborGradients()](gaborgradients%28%29.md): Highlights textures in an image.
- [gloom()](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMask()](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellate()](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

# coreMLModelFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Filters an image with a Core ML model.

## Declaration

```objectivec
+ (CIFilter<CICoreMLModel> *) coreMLModelFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the Core ML model filter to an image. The effect filters the image using a trained Core ML model to produce the result. Specifying the head index allows you to produce a result from various components of a multiheaded coreML model.

The Core ML model filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`headIndex`**: A `float` representing which output of a multihead Core ML model should be used for applying the effect to an image.
- **`softmaxNormalization`**: A `Boolean` value representing the softmax normalization to be applied to the output image created by the model.
- **`inputModel`**: The Core ML model to be used for applying effect on the image.

The following code creates a filter that results in the flowers appearing to be glass panes:

```swift
func coreML(inputImage: CIImage) -> CIImage {
    let coreMLFilter = CIFilter.coreMLModel()
    let model = GlassModel().model
    coreMLFilter.inputImage = inputImage
    coreMLFilter.headIndex = 0
    coreMLFilter.softmaxNormalization = false
    return coreMLFilter.outputImage!
}
```

![Two photographs of colorful flowers. The photo on the left is clear and crisp with good lighting. In the photo on the right, a Core ML model filter is applied, and the image flowers appear to be made of colorful glass panes.](https://developer.apple.com/images/com.apple.coreimage/media-3600002@2x.png)

## See Also

### Filters

- [blendWithAlphaMaskFilter](blendwithalphamask%28%29.md): Blends two images by using an alpha mask image.
- [blendWithBlueMaskFilter](blendwithbluemask%28%29.md): Blends two images by using a blue mask image.
- [blendWithMaskFilter](blendwithmask%28%29.md): Blends two images by using a mask image.
- [blendWithRedMaskFilter](blendwithredmask%28%29.md): Blends two images by using a red mask image.
- [bloomFilter](bloom%28%29.md): Adjusts an image’s colors by applying a blur effect.
- [cannyEdgeDetectorFilter](cannyedgedetector%28%29.md): Applies the Canny edge-detection algorithm to an image.
- [comicEffectFilter](comiceffect%28%29.md): Creates an image with a comic book effect.
- [crystallizeFilter](crystallize%28%29.md): Creates an image made with a series of colorful polygons.
- [depthOfFieldFilter](depthoffield%28%29.md): Simulates a depth of field effect.
- [edgesFilter](edges%28%29.md): Hilghlights edges of objects found within an image.
- [edgeWorkFilter](edgework%28%29.md): Produces a black-and-white image that looks similar to a woodblock print.
- [gaborGradientsFilter](gaborgradients%28%29.md): Highlights textures in an image.
- [gloomFilter](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMaskFilter](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellateFilter](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

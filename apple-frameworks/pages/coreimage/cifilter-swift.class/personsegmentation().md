> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/personsegmentation()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/personsegmentation())

# personSegmentation() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a mask where red pixels indicate areas of the image that are likely to contain a person.

## Declaration

```swift
class func personSegmentation() -> any CIFilter & CIPersonSegmentation
```

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) containing the mask.

<a id="Discussion"></a>

## Discussion

The person-segmentation filter creates a mask that contains red pixels in the areas of the input image that are likely to contain people.

The person-segmentation filter takes the following properties:

- **`inputIImage`**: A [CIImage](../ciimage.md) containing the image to segment.
- **`qualityLevel`**: The size and quality of the resulting segmentation mask. 0 is accurate, `1` is balanced, and `2` is fast.

The following code applies the person-segmentation filter to an image:

```swift
func personSegmentation(inputImage: CIImage) -> CIImage {
    let personSegmentationFilter = CIFilter.personSegmentation()
    personSegmentationFilter.inputImage = inputImage
    personSegmentationFilter.qualityLevel = 0
    return personSegmentationFilter.outputImage!
}

```

![An illustration of two images, side-by-side. The original image, on the left, contains a single individual against a background of a field, trees, and buildings. The other image, on the right, shows the individual after segmentation. The background is all set to black and the pixels that make up the individual are all set to red.](https://developer.apple.com/images/com.apple.coreimage/media-4407311@2x.png)

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

# personSegmentationFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a mask where red pixels indicate areas of the image that are likely to contain a person.

## Declaration

```objectivec
+ (CIFilter<CIPersonSegmentation> *) personSegmentationFilter;
```

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) containing the mask.

<a id="Discussion"></a>

## Discussion

The person-segmentation filter creates a mask that contains red pixels in the areas of the input image that are likely to contain people.

The person-segmentation filter takes the following properties:

- **`inputIImage`**: A [CIImage](../ciimage.md) containing the image to segment.
- **`qualityLevel`**: The size and quality of the resulting segmentation mask. 0 is accurate, `1` is balanced, and `2` is fast.

The following code applies the person-segmentation filter to an image:

```swift
func personSegmentation(inputImage: CIImage) -> CIImage {
    let personSegmentationFilter = CIFilter.personSegmentation()
    personSegmentationFilter.inputImage = inputImage
    personSegmentationFilter.qualityLevel = 0
    return personSegmentationFilter.outputImage!
}

```

![An illustration of two images, side-by-side. The original image, on the left, contains a single individual against a background of a field, trees, and buildings. The other image, on the right, shows the individual after segmentation. The background is all set to black and the pixels that make up the individual are all set to red.](https://developer.apple.com/images/com.apple.coreimage/media-4407311@2x.png)

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

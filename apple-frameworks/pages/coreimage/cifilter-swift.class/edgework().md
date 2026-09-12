> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/edgework()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/edgework())

# edgeWork() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Produces a black-and-white image that looks similar to a woodblock print.

## Declaration

```swift
class func edgeWork() -> any CIFilter & CIEdgeWork
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the edge work filter to an image. The effect creates a stylized black-and-white rendition of the image that looks similar to a woodblock print.

The edge work filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a monochrome image with the edges of objects highlighted:

```swift
func edgeWork(inputImage: CIImage) -> CIImage {
    let edgeWorkFilter = CIFilter.edgeWork()
    edgeWorkFilter.inputImage = inputImage
    edgeWorkFilter.radius = 4
    return edgeWorkFilter.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close up, in focus, with good light and no effects. In the photo on the right, an edge work filter is applied, resulting in the image becoming monochrome with the outlines of objects black and the flower white.](https://developer.apple.com/images/com.apple.coreimage/media-3600010@2x.png)

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
- [gaborGradients()](gaborgradients%28%29.md): Highlights textures in an image.
- [gloom()](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMask()](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellate()](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

# edgeWorkFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Produces a black-and-white image that looks similar to a woodblock print.

## Declaration

```objectivec
+ (CIFilter<CIEdgeWork> *) edgeWorkFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the edge work filter to an image. The effect creates a stylized black-and-white rendition of the image that looks similar to a woodblock print.

The edge work filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a monochrome image with the edges of objects highlighted:

```swift
func edgeWork(inputImage: CIImage) -> CIImage {
    let edgeWorkFilter = CIFilter.edgeWork()
    edgeWorkFilter.inputImage = inputImage
    edgeWorkFilter.radius = 4
    return edgeWorkFilter.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close up, in focus, with good light and no effects. In the photo on the right, an edge work filter is applied, resulting in the image becoming monochrome with the outlines of objects black and the flower white.](https://developer.apple.com/images/com.apple.coreimage/media-3600010@2x.png)

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
- [gaborGradientsFilter](gaborgradients%28%29.md): Highlights textures in an image.
- [gloomFilter](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMaskFilter](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellateFilter](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

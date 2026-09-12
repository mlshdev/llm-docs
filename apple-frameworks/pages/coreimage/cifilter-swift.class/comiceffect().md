> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/comiceffect()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/comiceffect())

# comicEffect() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates an image with a comic book effect.

## Declaration

```swift
class func comicEffect() -> any CIFilter & CIComicEffect
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the comic effect filter to an image. The effect simulates a comic book drawing by outlining edges and applying a color halftone effect.

The comic effect filter uses the following property:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that results in the image appearing image in comic book style.

```swift
func comicEffect(inputImage: CIImage) -> CIImage {
    let comicEffectFilter = CIFilter.comicEffect()
    comicEffectFilter.inputImage = inputImage
    return comicEffectFilter.outputImage!
}
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear and crisp. In the photo on the right, a comic effect filter is applied, and the image is brighter with a series of colorful dots creating the detail of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3601088@2x.png)

## See Also

### Filters

- [blendWithAlphaMask()](blendwithalphamask%28%29.md): Blends two images by using an alpha mask image.
- [blendWithBlueMask()](blendwithbluemask%28%29.md): Blends two images by using a blue mask image.
- [blendWithMask()](blendwithmask%28%29.md): Blends two images by using a mask image.
- [blendWithRedMask()](blendwithredmask%28%29.md): Blends two images by using a red mask image.
- [bloom()](bloom%28%29.md): Adjusts an image’s colors by applying a blur effect.
- [cannyEdgeDetector()](cannyedgedetector%28%29.md): Applies the Canny edge-detection algorithm to an image.
- [coreMLModel()](coremlmodel%28%29.md): Filters an image with a Core ML model.
- [crystallize()](crystallize%28%29.md): Creates an image made with a series of colorful polygons.
- [depthOfField()](depthoffield%28%29.md): Simulates a depth of field effect.
- [edges()](edges%28%29.md): Hilghlights edges of objects found within an image.
- [edgeWork()](edgework%28%29.md): Produces a black-and-white image that looks similar to a woodblock print.
- [gaborGradients()](gaborgradients%28%29.md): Highlights textures in an image.
- [gloom()](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMask()](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellate()](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

# comicEffectFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates an image with a comic book effect.

## Declaration

```objectivec
+ (CIFilter<CIComicEffect> *) comicEffectFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the comic effect filter to an image. The effect simulates a comic book drawing by outlining edges and applying a color halftone effect.

The comic effect filter uses the following property:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that results in the image appearing image in comic book style.

```swift
func comicEffect(inputImage: CIImage) -> CIImage {
    let comicEffectFilter = CIFilter.comicEffect()
    comicEffectFilter.inputImage = inputImage
    return comicEffectFilter.outputImage!
}
```

![Two photographs of a beach at sunset with multiple palm trees. The photo on the left is clear and crisp. In the photo on the right, a comic effect filter is applied, and the image is brighter with a series of colorful dots creating the detail of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3601088@2x.png)

## See Also

### Filters

- [blendWithAlphaMaskFilter](blendwithalphamask%28%29.md): Blends two images by using an alpha mask image.
- [blendWithBlueMaskFilter](blendwithbluemask%28%29.md): Blends two images by using a blue mask image.
- [blendWithMaskFilter](blendwithmask%28%29.md): Blends two images by using a mask image.
- [blendWithRedMaskFilter](blendwithredmask%28%29.md): Blends two images by using a red mask image.
- [bloomFilter](bloom%28%29.md): Adjusts an image’s colors by applying a blur effect.
- [cannyEdgeDetectorFilter](cannyedgedetector%28%29.md): Applies the Canny edge-detection algorithm to an image.
- [coreMLModelFilter](coremlmodel%28%29.md): Filters an image with a Core ML model.
- [crystallizeFilter](crystallize%28%29.md): Creates an image made with a series of colorful polygons.
- [depthOfFieldFilter](depthoffield%28%29.md): Simulates a depth of field effect.
- [edgesFilter](edges%28%29.md): Hilghlights edges of objects found within an image.
- [edgeWorkFilter](edgework%28%29.md): Produces a black-and-white image that looks similar to a woodblock print.
- [gaborGradientsFilter](gaborgradients%28%29.md): Highlights textures in an image.
- [gloomFilter](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMaskFilter](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellateFilter](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

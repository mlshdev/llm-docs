> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/heightfieldfrommask()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/heightfieldfrommask())

# heightFieldFromMask() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a realistic shaded height-field image.

## Declaration

```swift
class func heightFieldFromMask() -> any CIFilter & CIHeightFieldFromMask
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the height-field from the mask filter to an image. The effect targets the white in the input image and creates realistic shading.

The height field from mask filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in the text having a shading effect:

```swift
func heightFieldFromMask(inputImage: CIImage) -> CIImage {
    let heightFieldFromMaskFilter = CIFilter.heightFieldFromMask()
    heightFieldFromMaskFilter.inputImage = inputImage
    heightFieldFromMaskFilter.radius = 3
    return heightFieldFromMaskFilter.outputImage!
}
```

![Two photographs of the text Core Image. The photo on the left has no modifications with white text and a black background. In the photo on the right, a height field from mask filter is applied, resulting in the text having some shading and appearing gray and less sharp.](https://developer.apple.com/images/com.apple.coreimage/media-3600011@2x.png)

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
- [hexagonalPixellate()](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

# heightFieldFromMaskFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a realistic shaded height-field image.

## Declaration

```objectivec
+ (CIFilter<CIHeightFieldFromMask> *) heightFieldFromMaskFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the height-field from the mask filter to an image. The effect targets the white in the input image and creates realistic shading.

The height field from mask filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in the text having a shading effect:

```swift
func heightFieldFromMask(inputImage: CIImage) -> CIImage {
    let heightFieldFromMaskFilter = CIFilter.heightFieldFromMask()
    heightFieldFromMaskFilter.inputImage = inputImage
    heightFieldFromMaskFilter.radius = 3
    return heightFieldFromMaskFilter.outputImage!
}
```

![Two photographs of the text Core Image. The photo on the left has no modifications with white text and a black background. In the photo on the right, a height field from mask filter is applied, resulting in the text having some shading and appearing gray and less sharp.](https://developer.apple.com/images/com.apple.coreimage/media-3600011@2x.png)

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
- [hexagonalPixellateFilter](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

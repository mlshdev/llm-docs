> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/gloom()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/gloom())

# gloom() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adjusts an image’s color by applying a gloom filter.

## Declaration

```swift
class func gloom() -> any CIFilter & CIGloom
```

<a id="return-value"></a>

## Return Value

The modified image.

## Mentioned In

- [Processing an Image Using Built-in Filters](../processing-an-image-using-built-in-filters.md)

<a id="Discussion"></a>

## Discussion

This method applies the gloom filter to an image. The effect reduces the highlights of the image resulting in the image looking dull.

The gloom filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **radius**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **intensity**: A `float` representing the desired strength of the effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a darker image with a slight blur:

```swift
func gloom(inputImage: CIImage) -> CIImage {
    let gloomFilter = CIFilter.gloom()
    gloomFilter.inputImage = inputImage
    gloomFilter.radius = 3
    gloomFilter.intensity = 10
    return gloomFilter.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close up, in focus, with good light and no effects. In the photo on the right, the gloom filter is applied, resulting in the foliage in the background becoming darker and the image having a slight blur.](https://developer.apple.com/images/com.apple.coreimage/media-3599998@2x.png)

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
- [heightFieldFromMask()](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellate()](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

# gloomFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adjusts an image’s color by applying a gloom filter.

## Declaration

```objectivec
+ (CIFilter<CIGloom> *) gloomFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

## Mentioned In

- [Processing an Image Using Built-in Filters](../processing-an-image-using-built-in-filters.md)

<a id="Discussion"></a>

## Discussion

This method applies the gloom filter to an image. The effect reduces the highlights of the image resulting in the image looking dull.

The gloom filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **radius**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **intensity**: A `float` representing the desired strength of the effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a darker image with a slight blur:

```swift
func gloom(inputImage: CIImage) -> CIImage {
    let gloomFilter = CIFilter.gloom()
    gloomFilter.inputImage = inputImage
    gloomFilter.radius = 3
    gloomFilter.intensity = 10
    return gloomFilter.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close up, in focus, with good light and no effects. In the photo on the right, the gloom filter is applied, resulting in the foliage in the background becoming darker and the image having a slight blur.](https://developer.apple.com/images/com.apple.coreimage/media-3599998@2x.png)

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
- [heightFieldFromMaskFilter](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellateFilter](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

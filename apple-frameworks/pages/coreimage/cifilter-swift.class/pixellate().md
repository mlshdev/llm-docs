> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/pixellate()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/pixellate())

# pixellate() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Enlarges the colors of the pixels to create a blurred effect.

## Declaration

```swift
class func pixellate() -> any CIFilter & CIPixellate
```

<a id="return-value"></a>

## Return Value

The modified image.

## Mentioned In

- [Customizing Image Transitions](../customizing-image-transitions.md)

<a id="Discussion"></a>

## Discussion

This method applies the pixelate filter to an image. The effect produces a result by mapping the image to colored squares with colors defined by the pixels of the input image.

The pixelate filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`scale`**: A `float` representing the size of the squares as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a distorted image made of squares:

```swift
func pixelate(inputImage: CIImage) -> CIImage {
    let pixelate = CIFilter.pixellate()
    pixelate.inputImage = inputImage
    pixelate.center = CGPoint(x: 150, y: 150)
    pixelate.scale = 30
    return pixelate.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close up, in focus, with good light and no effects. In the photo on the right, the pixelate filter is applied, resulting in a distorted image made of small squares with less detail.](https://developer.apple.com/images/com.apple.coreimage/media-3599999@2x.png)

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

# pixellateFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Enlarges the colors of the pixels to create a blurred effect.

## Declaration

```objectivec
+ (CIFilter<CIPixellate> *) pixellateFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

## Mentioned In

- [Customizing Image Transitions](../customizing-image-transitions.md)

<a id="Discussion"></a>

## Discussion

This method applies the pixelate filter to an image. The effect produces a result by mapping the image to colored squares with colors defined by the pixels of the input image.

The pixelate filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`scale`**: A `float` representing the size of the squares as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a distorted image made of squares:

```swift
func pixelate(inputImage: CIImage) -> CIImage {
    let pixelate = CIFilter.pixellate()
    pixelate.inputImage = inputImage
    pixelate.center = CGPoint(x: 150, y: 150)
    pixelate.scale = 30
    return pixelate.outputImage!
}
```

![Two pictures of a pink flower surrounded by foliage. The photo on the left shows a single flower photographed close up, in focus, with good light and no effects. In the photo on the right, the pixelate filter is applied, resulting in a distorted image made of small squares with less detail.](https://developer.apple.com/images/com.apple.coreimage/media-3599999@2x.png)

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

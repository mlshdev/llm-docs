> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/sobelgradients()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/sobelgradients())

# sobelGradients() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Calculates the Sobel gradients for an image.

## Declaration

```swift
class func sobelGradients() -> any CIFilter & CISobelGradients
```

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) containing the Sobel gradients.

<a id="Discussion"></a>

## Discussion

This filter applies the Sobel operator to the color components of the input image. You would typically use the Sobel filter as part of an edge-detection algorithm for performing.

- **`inputImage`**: A [CIImage](../ciimage.md) containing the image to process.

The following code applies the [sobelGradients()](sobelgradients%28%29.md) filter to an image.

```swift
func sobelGradients(inputImage: CIImage) -> CIImage {
    let sobel = CIFilter.sobelGradients()
    sobel.inputImage = inputImage
    return sobel.outputImage!
}
```

![Two images arranged horizontally. The left image is a photograph of modern building with horizontal concrete beams and large tinted windows. The image on the right shows the result of applying the Sobel gradients filter. Edges in the image are highlighted and flat areas of the image are set to black.](https://developer.apple.com/images/com.apple.coreimage/media-4407283@2x.png)

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

# sobelGradientsFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Calculates the Sobel gradients for an image.

## Declaration

```objectivec
+ (CIFilter<CISobelGradients> *) sobelGradientsFilter;
```

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) containing the Sobel gradients.

<a id="Discussion"></a>

## Discussion

This filter applies the Sobel operator to the color components of the input image. You would typically use the Sobel filter as part of an edge-detection algorithm for performing.

- **`inputImage`**: A [CIImage](../ciimage.md) containing the image to process.

The following code applies the [sobelGradientsFilter](sobelgradients%28%29.md) filter to an image.

```swift
func sobelGradients(inputImage: CIImage) -> CIImage {
    let sobel = CIFilter.sobelGradients()
    sobel.inputImage = inputImage
    return sobel.outputImage!
}
```

![Two images arranged horizontally. The left image is a photograph of modern building with horizontal concrete beams and large tinted windows. The image on the right shows the result of applying the Sobel gradients filter. Edges in the image are highlighted and flat areas of the image are set to black.](https://developer.apple.com/images/com.apple.coreimage/media-4407283@2x.png)

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

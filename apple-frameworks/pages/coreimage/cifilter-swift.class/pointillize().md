> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/pointillize()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/pointillize())

# pointillize() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Applies a pointillize effect to an image.

## Declaration

```swift
class func pointillize() -> any CIFilter & CIPointillize
```

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) containing the pointillized image.

<a id="Discussion"></a>

## Discussion

This filter applies a pointillize effect to an image. The effect generates an output image made of small, single-color, circular points distributed on a randomly perturbed grid.

The pointillize filter uses the following properties:

- **`inputImage`**: A [CIImage](../ciimage.md) containing the input image.
- **`radius`**: The radius in pixels of the circular points.
- **center**: Determines the origin of the grid.

The following code applies the pointillize filter with a radius of 40 pixels.

```swift
func pointillize(inputImage: CIImage) -> CIImage {
    let pointillizeFilter = CIFilter.pointillize()
    pointillizeFilter.inputImage = inputImage
    pointillizeFilter.radius = 40
    pointillizeFilter.center = CGPoint(x: 0,y: 0)
    return pointillizeFilter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photo of a colorful bunch of flowers. The right image shows the result of applying the pointillize filter. The image is made of small circular points. The color of each point matches up with the color at the location of the dot in the original image.](https://developer.apple.com/images/com.apple.coreimage/media-4333706@2x.png)

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

# pointillizeFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Applies a pointillize effect to an image.

## Declaration

```objectivec
+ (CIFilter<CIPointillize> *) pointillizeFilter;
```

<a id="return-value"></a>

## Return Value

A [CIImage](../ciimage.md) containing the pointillized image.

<a id="Discussion"></a>

## Discussion

This filter applies a pointillize effect to an image. The effect generates an output image made of small, single-color, circular points distributed on a randomly perturbed grid.

The pointillize filter uses the following properties:

- **`inputImage`**: A [CIImage](../ciimage.md) containing the input image.
- **`radius`**: The radius in pixels of the circular points.
- **center**: Determines the origin of the grid.

The following code applies the pointillize filter with a radius of 40 pixels.

```swift
func pointillize(inputImage: CIImage) -> CIImage {
    let pointillizeFilter = CIFilter.pointillize()
    pointillizeFilter.inputImage = inputImage
    pointillizeFilter.radius = 40
    pointillizeFilter.center = CGPoint(x: 0,y: 0)
    return pointillizeFilter.outputImage!
}
```

![Two images arranged horizontally. The left image contains a photo of a colorful bunch of flowers. The right image shows the result of applying the pointillize filter. The image is made of small circular points. The color of each point matches up with the color at the location of the dot in the original image.](https://developer.apple.com/images/com.apple.coreimage/media-4333706@2x.png)

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

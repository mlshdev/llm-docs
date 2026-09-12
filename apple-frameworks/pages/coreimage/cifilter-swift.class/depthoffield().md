> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/depthoffield()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/depthoffield())

# depthOfField() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Simulates a depth of field effect.

## Declaration

```swift
class func depthOfField() -> any CIFilter & CIDepthOfField
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the depth of field filter to an image. The effect simulates changing the focus of the camera before taking a photograph.

The depth of field filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`point0`**: A set of coordinates marking the first point to be focused on as a [CGPoint](../../corefoundation/cgpoint.md).
- **`point1`**: A set of coordinates marking the second point to be focused on as a [CGPoint](../../corefoundation/cgpoint.md).
- **`unsharpMaskRadius`**: A `float` representing the radius of the unsharpened mask effect applied to the in-focus area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`unsharpMaskIntensity`**: A `float` representing the intensity of the unsharp mask effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in the center cilantro being in focus while gradually blurring to the top and bottom of the image:

```swift
func depthOfField(inputImage: CIImage) -> CIImage {
    let depthOfFieldFilter = CIFilter.depthOfField()
    depthOfFieldFilter.inputImage = inputImage
    depthOfFieldFilter.radius = 5
    depthOfFieldFilter.point0 = CGPoint(x: 2349, y: 846)
    depthOfFieldFilter.point1 = CGPoint(x: 571, y: 3121)
    depthOfFieldFilter.unsharpMaskRadius = 7
    depthOfFieldFilter.unsharpMaskIntensity = 10
    return depthOfFieldFilter.outputImage!
}
```

![Two photographs of a pile of cilantro. The photo on the left is clear and crisp with good lighting. In the photo on the right, a depth of field filter is applied, resulting in the cilantro in the image’s periphery becoming blurred while the center remains in focus.](https://developer.apple.com/images/com.apple.coreimage/media-3599997@2x.png)

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
- [edges()](edges%28%29.md): Hilghlights edges of objects found within an image.
- [edgeWork()](edgework%28%29.md): Produces a black-and-white image that looks similar to a woodblock print.
- [gaborGradients()](gaborgradients%28%29.md): Highlights textures in an image.
- [gloom()](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMask()](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellate()](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

# depthOfFieldFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Simulates a depth of field effect.

## Declaration

```objectivec
+ (CIFilter<CIDepthOfField> *) depthOfFieldFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the depth of field filter to an image. The effect simulates changing the focus of the camera before taking a photograph.

The depth of field filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`radius`**: A `float` representing the area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`point0`**: A set of coordinates marking the first point to be focused on as a [CGPoint](../../corefoundation/cgpoint.md).
- **`point1`**: A set of coordinates marking the second point to be focused on as a [CGPoint](../../corefoundation/cgpoint.md).
- **`unsharpMaskRadius`**: A `float` representing the radius of the unsharpened mask effect applied to the in-focus area of effect as an [NSNumber](../../foundation/nsnumber.md).
- **`unsharpMaskIntensity`**: A `float` representing the intensity of the unsharp mask effect as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in the center cilantro being in focus while gradually blurring to the top and bottom of the image:

```swift
func depthOfField(inputImage: CIImage) -> CIImage {
    let depthOfFieldFilter = CIFilter.depthOfField()
    depthOfFieldFilter.inputImage = inputImage
    depthOfFieldFilter.radius = 5
    depthOfFieldFilter.point0 = CGPoint(x: 2349, y: 846)
    depthOfFieldFilter.point1 = CGPoint(x: 571, y: 3121)
    depthOfFieldFilter.unsharpMaskRadius = 7
    depthOfFieldFilter.unsharpMaskIntensity = 10
    return depthOfFieldFilter.outputImage!
}
```

![Two photographs of a pile of cilantro. The photo on the left is clear and crisp with good lighting. In the photo on the right, a depth of field filter is applied, resulting in the cilantro in the image’s periphery becoming blurred while the center remains in focus.](https://developer.apple.com/images/com.apple.coreimage/media-3599997@2x.png)

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
- [edgesFilter](edges%28%29.md): Hilghlights edges of objects found within an image.
- [edgeWorkFilter](edgework%28%29.md): Produces a black-and-white image that looks similar to a woodblock print.
- [gaborGradientsFilter](gaborgradients%28%29.md): Highlights textures in an image.
- [gloomFilter](gloom%28%29.md): Adjusts an image’s color by applying a gloom filter.
- [heightFieldFromMaskFilter](heightfieldfrommask%28%29.md): Creates a realistic shaded height-field image.
- [hexagonalPixellateFilter](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

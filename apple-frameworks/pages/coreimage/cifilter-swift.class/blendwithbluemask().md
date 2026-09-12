> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/blendwithbluemask()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/blendwithbluemask())

# blendWithBlueMask() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blends two images by using a blue mask image.

## Declaration

```swift
class func blendWithBlueMask() -> any CIFilter & CIBlendWithMask
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the blend with blue mask filter to an image. The effect uses values from the blue mask image to interpolate between the input and background images. The mask image is made of shades of blue that define the strength of the interpolation from zero (where the mask image is black) to the specified `radius` (where the mask image is blue).

The blend with blue mask filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`maskImage`**: An image that masks an area on the background image with the type [CIImage](../ciimage.md).
- **`backgroundImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that results in the replacement of blue in the mask image with the detail of the input image:

```swift
func blendWithBlueMask(inputimage: CIImage, backgroundimage: CIImage, maskimage: CIImage) -> CIImage {
    let  blendWithBlueMaskFilter = CIFilter.blendWithBlueMask()
    blendWithBlueMaskFilter.inputImage = inputimage
    blendWithBlueMaskFilter.maskImage = maskimage
    blendWithBlueMaskFilter.backgroundImage = backgroundimage
    return blendWithBlueMaskFilter.outputImage!
}
```

![A set of four photographs with two stacked on the left and two side by side on the right. The top photo on the left is of the New York City skyline taken from across the river on an overcast day, with a single boat in the center of the image. The bottom photo on the left is of multiple colorful rocks with green moss covering them. The first photograph on the right is a transparent image with a five-point triangle, hexagon, circle and square filled with a gradient of dark blue to green. The second photograph on the right is a blend with a blue mask filter applied, resulting in the skyline photo with the detail of the moss-covered rocks showing in the area that is dark blue from the mask image.](https://developer.apple.com/images/com.apple.coreimage/media-3624592@2x.png)

## See Also

### Filters

- [blendWithAlphaMask()](blendwithalphamask%28%29.md): Blends two images by using an alpha mask image.
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
- [hexagonalPixellate()](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

# blendWithBlueMaskFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Blends two images by using a blue mask image.

## Declaration

```objectivec
+ (CIFilter<CIBlendWithMask> *) blendWithBlueMaskFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies the blend with blue mask filter to an image. The effect uses values from the blue mask image to interpolate between the input and background images. The mask image is made of shades of blue that define the strength of the interpolation from zero (where the mask image is black) to the specified `radius` (where the mask image is blue).

The blend with blue mask filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`maskImage`**: An image that masks an area on the background image with the type [CIImage](../ciimage.md).
- **`backgroundImage`**: An image with the type [CIImage](../ciimage.md).

The following code creates a filter that results in the replacement of blue in the mask image with the detail of the input image:

```swift
func blendWithBlueMask(inputimage: CIImage, backgroundimage: CIImage, maskimage: CIImage) -> CIImage {
    let  blendWithBlueMaskFilter = CIFilter.blendWithBlueMask()
    blendWithBlueMaskFilter.inputImage = inputimage
    blendWithBlueMaskFilter.maskImage = maskimage
    blendWithBlueMaskFilter.backgroundImage = backgroundimage
    return blendWithBlueMaskFilter.outputImage!
}
```

![A set of four photographs with two stacked on the left and two side by side on the right. The top photo on the left is of the New York City skyline taken from across the river on an overcast day, with a single boat in the center of the image. The bottom photo on the left is of multiple colorful rocks with green moss covering them. The first photograph on the right is a transparent image with a five-point triangle, hexagon, circle and square filled with a gradient of dark blue to green. The second photograph on the right is a blend with a blue mask filter applied, resulting in the skyline photo with the detail of the moss-covered rocks showing in the area that is dark blue from the mask image.](https://developer.apple.com/images/com.apple.coreimage/media-3624592@2x.png)

## See Also

### Filters

- [blendWithAlphaMaskFilter](blendwithalphamask%28%29.md): Blends two images by using an alpha mask image.
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
- [hexagonalPixellateFilter](hexagonalpixellate%28%29.md): Creates an image made of a series of colorful hexagons.

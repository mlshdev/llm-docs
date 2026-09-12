> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/circularscreen()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/circularscreen())

# circularScreen() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adds a circular overlay to an image.

## Declaration

```swift
class func circularScreen() -> any CIFilter & CICircularScreen
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a circular screen filter to an image. The effect generates a monochrome image containing a series of circular rings. The halftone effect is a set of lines, dots, or circles that contain detail. When viewing the image from a distance, the markings blend together, creating the illusion of continuous lines and shapes. Print media commonly uses this effect.

The circular screen filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`width`**: A `float` representing the distance between each circle in the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`sharpness`**: A `float` representing the sharpness of the circles in the pattern as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a monochrome image with a large circular pattern overlaying the image:

```swift
func circular(inputImage: CIImage) -> CIImage {
    let circularHalftone = CIFilter.circularScreen()
    circularHalftone.inputImage = inputImage
    circularHalftone.center = CGPoint(x: 2016, y: 1512)
    circularHalftone.width = 35
    circularHalftone.sharpness = 0.70
    return circularHalftone.outputImage!
}
```

![Two photographs of wooden barrel of green artichokes. The artichokes are crisp with good lighting. The photo on the left has no modifications to color or detail. In the photo on the right, a circular screen filter is applied, resulting in the image becoming monochrome with an overlay of circular lines radiating from the center of the image out to the periphery.](https://developer.apple.com/images/com.apple.coreimage/media-3595914@2x.png)

## See Also

### Filters

- [cmykHalftone()](cmykhalftone%28%29.md): Adds a series of colorful dots to an image.
- [dotScreen()](dotscreen%28%29.md): Creates a monochrome image with a series of dots to add detail.
- [hatchedScreen()](hatchedscreen%28%29.md): Creates a monochrome image with a series of lines to add detail.
- [lineScreen()](linescreen%28%29.md): Creates a monochrome image with a series of small lines to add detail.

# circularScreenFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adds a circular overlay to an image.

## Declaration

```objectivec
+ (CIFilter<CICircularScreen> *) circularScreenFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a circular screen filter to an image. The effect generates a monochrome image containing a series of circular rings. The halftone effect is a set of lines, dots, or circles that contain detail. When viewing the image from a distance, the markings blend together, creating the illusion of continuous lines and shapes. Print media commonly uses this effect.

The circular screen filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`width`**: A `float` representing the distance between each circle in the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`sharpness`**: A `float` representing the sharpness of the circles in the pattern as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that results in a monochrome image with a large circular pattern overlaying the image:

```swift
func circular(inputImage: CIImage) -> CIImage {
    let circularHalftone = CIFilter.circularScreen()
    circularHalftone.inputImage = inputImage
    circularHalftone.center = CGPoint(x: 2016, y: 1512)
    circularHalftone.width = 35
    circularHalftone.sharpness = 0.70
    return circularHalftone.outputImage!
}
```

![Two photographs of wooden barrel of green artichokes. The artichokes are crisp with good lighting. The photo on the left has no modifications to color or detail. In the photo on the right, a circular screen filter is applied, resulting in the image becoming monochrome with an overlay of circular lines radiating from the center of the image out to the periphery.](https://developer.apple.com/images/com.apple.coreimage/media-3595914@2x.png)

## See Also

### Filters

- [CMYKHalftone](cmykhalftone%28%29.md): Adds a series of colorful dots to an image.
- [dotScreenFilter](dotscreen%28%29.md): Creates a monochrome image with a series of dots to add detail.
- [hatchedScreenFilter](hatchedscreen%28%29.md): Creates a monochrome image with a series of lines to add detail.
- [lineScreenFilter](linescreen%28%29.md): Creates a monochrome image with a series of small lines to add detail.

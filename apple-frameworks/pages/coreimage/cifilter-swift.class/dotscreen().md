> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/dotscreen()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/dotscreen())

# dotScreen() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a monochrome image with a series of dots to add detail.

## Declaration

```swift
class func dotScreen() -> any CIFilter & CIDotScreen
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a dot screen filter to an image. The effect generates a monochrome image containing a series of dots creating detail. The halftone effect is a set of lines, dots, or circles that contain detail. When viewing the image from a distance, the markings blend together, creating the illusion of continuous lines and shapes. Print media commonly uses this effect.

The dot screen filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`width`**: A `float` representing the distance between dots in the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`sharpness`**: A `float` representing the sharpness of the pattern as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that produces an image containing monochrome dots of detail on a black background:

```swift
func dot (inputImage: CIImage) -> CIImage {
    let dotScreen = CIFilter.dotScreen()
    dotScreen.inputImage = inputImage
    dotScreen.angle = 0
    dotScreen.center = CGPoint(x: 2016, y: 1512)
    dotScreen.width = 35
    dotScreen.sharpness = 0.7
    return dotScreen.outputImage!
}
```

![Two photographs of a wooden barrel of green artichokes. The artichokes are crisp with good lighting. The photo on the left has no modifications to color or detail. In the photo on the right, a dot screen filter is applied, resulting in the image becoming monochrome with an overlay of small dots creating the detail of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3595912@2x.png)

## See Also

### Filters

- [circularScreen()](circularscreen%28%29.md): Adds a circular overlay to an image.
- [cmykHalftone()](cmykhalftone%28%29.md): Adds a series of colorful dots to an image.
- [hatchedScreen()](hatchedscreen%28%29.md): Creates a monochrome image with a series of lines to add detail.
- [lineScreen()](linescreen%28%29.md): Creates a monochrome image with a series of small lines to add detail.

# dotScreenFilter (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a monochrome image with a series of dots to add detail.

## Declaration

```objectivec
+ (CIFilter<CIDotScreen> *) dotScreenFilter;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a dot screen filter to an image. The effect generates a monochrome image containing a series of dots creating detail. The halftone effect is a set of lines, dots, or circles that contain detail. When viewing the image from a distance, the markings blend together, creating the illusion of continuous lines and shapes. Print media commonly uses this effect.

The dot screen filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`width`**: A `float` representing the distance between dots in the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`sharpness`**: A `float` representing the sharpness of the pattern as an [NSNumber](../../foundation/nsnumber.md).

The following code creates a filter that produces an image containing monochrome dots of detail on a black background:

```swift
func dot (inputImage: CIImage) -> CIImage {
    let dotScreen = CIFilter.dotScreen()
    dotScreen.inputImage = inputImage
    dotScreen.angle = 0
    dotScreen.center = CGPoint(x: 2016, y: 1512)
    dotScreen.width = 35
    dotScreen.sharpness = 0.7
    return dotScreen.outputImage!
}
```

![Two photographs of a wooden barrel of green artichokes. The artichokes are crisp with good lighting. The photo on the left has no modifications to color or detail. In the photo on the right, a dot screen filter is applied, resulting in the image becoming monochrome with an overlay of small dots creating the detail of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3595912@2x.png)

## See Also

### Filters

- [circularScreenFilter](circularscreen%28%29.md): Adds a circular overlay to an image.
- [CMYKHalftone](cmykhalftone%28%29.md): Adds a series of colorful dots to an image.
- [hatchedScreenFilter](hatchedscreen%28%29.md): Creates a monochrome image with a series of lines to add detail.
- [lineScreenFilter](linescreen%28%29.md): Creates a monochrome image with a series of small lines to add detail.

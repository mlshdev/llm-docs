> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/cmykhalftone()](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/cmykhalftone())

# cmykHalftone() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adds a series of colorful dots to an image.

## Declaration

```swift
class func cmykHalftone() -> any CIFilter & CICMYKHalftone
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a CMYK halftone filter to an image. The effect generates an image containing a series of dots. The dots contain only cyan, magenta, yellow, and black colors. Halftone effect is a set of lines, dots, or circles that contain detail. When viewing the image from a distance, the markings blend together creating the illusion of continuous lines and shapes. Print media commonly uses this effect.

The CMYK halftone filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`angle`**: A `float` representing the angle of the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the distance between dots in the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`sharpness`**: A `float` representing the sharpness of the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`grayComponentReplacement`**: A `float` representing the grey component to be replaced as an [NSNumber](../../foundation/nsnumber.md).
- **`underColorRemoval`**: A `float` representing the under-color removal value as an [NSNumber](../../foundation/nsnumber.md).

The following code produces an image with visible dots and less color:

```swift
func cmyk(inputImage: CIImage) -> CIImage {
    let cmykHalftone = CIFilter.cmykHalftone()
    cmykHalftone.inputImage = inputImage
    cmykHalftone.angle = 1
    cmykHalftone.width = 35
    cmykHalftone.sharpness = 0.7
    cmykHalftone.center = CGPoint(x: 2016, y: 1512)
    cmykHalftone.grayComponentReplacement = 1
    cmykHalftone.underColorRemoval = 0.1
    return cmykHalftone.outputImage!
}
```

![Two photographs of a wooden barrel of green artichokes. The artichokes are crisp with good lighting. The photo on the left has no modifications to color or detail. In the photo on the right, an applied halftone filter results in the image becoming darker with an overlay of small dots of color, creating the detail of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3595920@2x.png)

## See Also

### Filters

- [circularScreen()](circularscreen%28%29.md): Adds a circular overlay to an image.
- [dotScreen()](dotscreen%28%29.md): Creates a monochrome image with a series of dots to add detail.
- [hatchedScreen()](hatchedscreen%28%29.md): Creates a monochrome image with a series of lines to add detail.
- [lineScreen()](linescreen%28%29.md): Creates a monochrome image with a series of small lines to add detail.

# CMYKHalftone (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Adds a series of colorful dots to an image.

## Declaration

```objectivec
+ (CIFilter<CICMYKHalftone> *) CMYKHalftone;
```

<a id="return-value"></a>

## Return Value

The modified image.

<a id="Discussion"></a>

## Discussion

This method applies a CMYK halftone filter to an image. The effect generates an image containing a series of dots. The dots contain only cyan, magenta, yellow, and black colors. Halftone effect is a set of lines, dots, or circles that contain detail. When viewing the image from a distance, the markings blend together creating the illusion of continuous lines and shapes. Print media commonly uses this effect.

The CMYK halftone filter uses the following properties:

- **`inputImage`**: An image with the type [CIImage](../ciimage.md).
- **`angle`**: A `float` representing the angle of the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`width`**: A `float` representing the distance between dots in the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`sharpness`**: A `float` representing the sharpness of the pattern as an [NSNumber](../../foundation/nsnumber.md).
- **`center`**: A set of coordinates marking the center of the image as a [CGPoint](../../corefoundation/cgpoint.md).
- **`grayComponentReplacement`**: A `float` representing the grey component to be replaced as an [NSNumber](../../foundation/nsnumber.md).
- **`underColorRemoval`**: A `float` representing the under-color removal value as an [NSNumber](../../foundation/nsnumber.md).

The following code produces an image with visible dots and less color:

```swift
func cmyk(inputImage: CIImage) -> CIImage {
    let cmykHalftone = CIFilter.cmykHalftone()
    cmykHalftone.inputImage = inputImage
    cmykHalftone.angle = 1
    cmykHalftone.width = 35
    cmykHalftone.sharpness = 0.7
    cmykHalftone.center = CGPoint(x: 2016, y: 1512)
    cmykHalftone.grayComponentReplacement = 1
    cmykHalftone.underColorRemoval = 0.1
    return cmykHalftone.outputImage!
}
```

![Two photographs of a wooden barrel of green artichokes. The artichokes are crisp with good lighting. The photo on the left has no modifications to color or detail. In the photo on the right, an applied halftone filter results in the image becoming darker with an overlay of small dots of color, creating the detail of the image.](https://developer.apple.com/images/com.apple.coreimage/media-3595920@2x.png)

## See Also

### Filters

- [circularScreenFilter](circularscreen%28%29.md): Adds a circular overlay to an image.
- [dotScreenFilter](dotscreen%28%29.md): Creates a monochrome image with a series of dots to add detail.
- [hatchedScreenFilter](hatchedscreen%28%29.md): Creates a monochrome image with a series of lines to add detail.
- [lineScreenFilter](linescreen%28%29.md): Creates a monochrome image with a series of small lines to add detail.

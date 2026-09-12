> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertypixelformat](https://developer.apple.com/documentation/imageio/kcgimagepropertypixelformat)

# kCGImagePropertyPixelFormat (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The format of the image’s individual pixels.

## Declaration

```swift
let kCGImagePropertyPixelFormat: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFNumber](../corefoundation/cfnumber.md). For information about how to interpret this value, see the `PixelFormat` tag in the EXIF specification.

## See Also

### Pixel Information

- [kCGImagePropertyPixelWidth](kcgimagepropertypixelwidth.md): The number of pixels along the x-axis of the image.
- [kCGImagePropertyPixelHeight](kcgimagepropertypixelheight.md): The number of pixels along the y-axis of the image.
- [kCGImagePropertyDPIHeight](kcgimagepropertydpiheight.md): The resolution, in dots per inch, in the y dimension.
- [kCGImagePropertyDPIWidth](kcgimagepropertydpiwidth.md): The resolution, in dots per inch, in the x dimension.
- [kCGImagePropertyDepth](kcgimagepropertydepth.md): The number of bits in the color sample of a pixel.

# kCGImagePropertyPixelFormat (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The format of the image’s individual pixels.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyPixelFormat;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFNumberRef](../corefoundation/cfnumber.md). For information about how to interpret this value, see the `PixelFormat` tag in the EXIF specification.

## See Also

### Pixel Information

- [kCGImagePropertyPixelWidth](kcgimagepropertypixelwidth.md): The number of pixels along the x-axis of the image.
- [kCGImagePropertyPixelHeight](kcgimagepropertypixelheight.md): The number of pixels along the y-axis of the image.
- [kCGImagePropertyDPIHeight](kcgimagepropertydpiheight.md): The resolution, in dots per inch, in the y dimension.
- [kCGImagePropertyDPIWidth](kcgimagepropertydpiwidth.md): The resolution, in dots per inch, in the x dimension.
- [kCGImagePropertyDepth](kcgimagepropertydepth.md): The number of bits in the color sample of a pixel.

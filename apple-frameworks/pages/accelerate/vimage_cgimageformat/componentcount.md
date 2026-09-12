> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_cgimageformat/componentcount](https://developer.apple.com/documentation/accelerate/vimage_cgimageformat/componentcount)

# componentCount

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The number of color and alpha channels.

## Declaration

```swift
var componentCount: Int { get }
```

## See Also

### Instance properties

- [bitsPerComponent](bitspercomponent.md): The number of bits that represents one channel of data in one pixel.
- [bitsPerPixel](bitsperpixel.md): The number of bits that represents one pixel.
- [colorSpace](colorspace.md): A description of the position of the pixel data in the image, relative to a reference XYZ color space.
- [bitmapInfo](bitmapinfo.md): The component information that describes the color channels.
- [version](version.md): The version number.
- [decode](decode.md): The decode array for the image.
- [renderingIntent](renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_cgimageformat/colorspace](https://developer.apple.com/documentation/accelerate/vimage_cgimageformat/colorspace)

# colorSpace (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of the position of the pixel data in the image, relative to a reference XYZ color space.

## Declaration

```swift
var colorSpace: Unmanaged<CGColorSpace>!
```

## See Also

### Instance properties

- [bitsPerComponent](bitspercomponent.md): The number of bits that represents one channel of data in one pixel.
- [bitsPerPixel](bitsperpixel.md): The number of bits that represents one pixel.
- [bitmapInfo](bitmapinfo.md): The component information that describes the color channels.
- [version](version.md): The version number.
- [decode](decode.md): The decode array for the image.
- [renderingIntent](renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.
- [componentCount](componentcount.md): The number of color and alpha channels.

# colorSpace (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A description of the position of the pixel data in the image, relative to a reference XYZ color space.

## Declaration

```objectivec
CGColorSpaceRef colorSpace;
```

## See Also

### Instance properties

- [bitsPerComponent](bitspercomponent.md): The number of bits that represents one channel of data in one pixel.
- [bitsPerPixel](bitsperpixel.md): The number of bits that represents one pixel.
- [bitmapInfo](bitmapinfo.md): The component information that describes the color channels.
- [version](version.md): The version number.
- [decode](decode.md): The decode array for the image.
- [renderingIntent](renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.

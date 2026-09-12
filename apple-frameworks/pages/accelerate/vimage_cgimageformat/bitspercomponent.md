> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_cgimageformat/bitspercomponent](https://developer.apple.com/documentation/accelerate/vimage_cgimageformat/bitspercomponent)

# bitsPerComponent (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of bits that represents one channel of data in one pixel.

## Declaration

```swift
var bitsPerComponent: UInt32
```

<a id="Discussion"></a>

## Discussion

For ARGB8888, this is 8. Expected values are 1, 2, 4, 5, 8, 10, 12, 16, or 32.

## See Also

### Instance properties

- [bitsPerPixel](bitsperpixel.md): The number of bits that represents one pixel.
- [colorSpace](colorspace.md): A description of the position of the pixel data in the image, relative to a reference XYZ color space.
- [bitmapInfo](bitmapinfo.md): The component information that describes the color channels.
- [version](version.md): The version number.
- [decode](decode.md): The decode array for the image.
- [renderingIntent](renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.
- [componentCount](componentcount.md): The number of color and alpha channels.

# bitsPerComponent (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of bits that represents one channel of data in one pixel.

## Declaration

```objectivec
uint32_t bitsPerComponent;
```

<a id="Discussion"></a>

## Discussion

For ARGB8888, this is 8. Expected values are 1, 2, 4, 5, 8, 10, 12, 16, or 32.

## See Also

### Instance properties

- [bitsPerPixel](bitsperpixel.md): The number of bits that represents one pixel.
- [colorSpace](colorspace.md): A description of the position of the pixel data in the image, relative to a reference XYZ color space.
- [bitmapInfo](bitmapinfo.md): The component information that describes the color channels.
- [version](version.md): The version number.
- [decode](decode.md): The decode array for the image.
- [renderingIntent](renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.

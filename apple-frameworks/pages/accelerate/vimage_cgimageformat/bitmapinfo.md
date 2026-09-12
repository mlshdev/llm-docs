> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_cgimageformat/bitmapinfo](https://developer.apple.com/documentation/accelerate/vimage_cgimageformat/bitmapinfo)

# bitmapInfo (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The component information that describes the color channels.

## Declaration

```swift
var bitmapInfo: CGBitmapInfo
```

## Mentioned In

- [Building a Basic Image-Processing Workflow](../building-a-basic-image-processing-workflow.md)

<a id="Discussion"></a>

## Discussion

For example, ARGB8888 is [CGImageAlphaInfo.first](../../coregraphics/cgimagealphainfo/first.md) `|` [byteOrderDefault](../../coregraphics/cgbitmapinfo/byteorderdefault.md), and BGRA8888 is [CGImageAlphaInfo.first](../../coregraphics/cgimagealphainfo/first.md) `|` [byteOrder32Little](../../coregraphics/cgbitmapinfo/byteorder32little.md).

## See Also

### Instance properties

- [bitsPerComponent](bitspercomponent.md): The number of bits that represents one channel of data in one pixel.
- [bitsPerPixel](bitsperpixel.md): The number of bits that represents one pixel.
- [colorSpace](colorspace.md): A description of the position of the pixel data in the image, relative to a reference XYZ color space.
- [version](version.md): The version number.
- [decode](decode.md): The decode array for the image.
- [renderingIntent](renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.
- [componentCount](componentcount.md): The number of color and alpha channels.

# bitmapInfo (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The component information that describes the color channels.

## Declaration

```objectivec
CGBitmapInfo bitmapInfo;
```

## Mentioned In

- [Building a Basic Image-Processing Workflow](../building-a-basic-image-processing-workflow.md)

<a id="Discussion"></a>

## Discussion

For example, ARGB8888 is [kCGImageAlphaFirst](../../coregraphics/cgimagealphainfo/first.md) `|` [kCGBitmapByteOrderDefault](../../coregraphics/cgbitmapinfo/byteorderdefault.md), and BGRA8888 is [kCGImageAlphaFirst](../../coregraphics/cgimagealphainfo/first.md) `|` [kCGBitmapByteOrder32Little](../../coregraphics/cgbitmapinfo/byteorder32little.md).

## See Also

### Instance properties

- [bitsPerComponent](bitspercomponent.md): The number of bits that represents one channel of data in one pixel.
- [bitsPerPixel](bitsperpixel.md): The number of bits that represents one pixel.
- [colorSpace](colorspace.md): A description of the position of the pixel data in the image, relative to a reference XYZ color space.
- [version](version.md): The version number.
- [decode](decode.md): The decode array for the image.
- [renderingIntent](renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.

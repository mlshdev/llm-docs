> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_cgimageformat/init(bitspercomponent:bitsperpixel:colorspace:bitmapinfo:renderingintent:)](https://developer.apple.com/documentation/accelerate/vimage_cgimageformat/init(bitspercomponent:bitsperpixel:colorspace:bitmapinfo:renderingintent:))

# init(bitsPerComponent:bitsPerPixel:colorSpace:bitmapInfo:renderingIntent:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a Core Graphics image format with a color space instance and default decode array.

## Declaration

```swift
init?(bitsPerComponent: Int, bitsPerPixel: Int, colorSpace: CGColorSpace, bitmapInfo: CGBitmapInfo, renderingIntent: CGColorRenderingIntent = .defaultIntent)
```

## Parameters

- `bitsPerComponent`: The number of bits that represents one channel of data in one pixel.
- `bitsPerPixel`: The number of bits that represents one pixel.
- `colorSpace`: A description of the position of the pixel data in the image, relative to a reference XYZ color space.
- `bitmapInfo`: The component information that describes the color channels.
- `renderingIntent`: A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.

## See Also

### Initializers

- [init(bitsPerComponent:bitsPerPixel:colorSpace:bitmapInfo:version:decode:renderingIntent:)](init%28bitspercomponent_bitsperpixel_colorspace_bitmapinfo_version_decode_renderingintent_%29.md): Creates a Core Graphics image format.
- [init(cgImage:)](init%28cgimage_%29.md): Creates a Core Graphics image format of the specified image.
- [init()](init%28%29.md): Creates an empty Core Graphics image format.

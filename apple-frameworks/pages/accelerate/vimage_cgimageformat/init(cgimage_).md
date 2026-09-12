> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_cgimageformat/init(cgimage:)](https://developer.apple.com/documentation/accelerate/vimage_cgimageformat/init(cgimage:))

# init(cgImage:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a Core Graphics image format of the specified image.

## Declaration

```swift
init?(cgImage: CGImage)
```

## Parameters

- `cgImage`: The source Core Graphics image.

## Mentioned In

- [Converting bitmap data between Core Graphics images and vImage buffers](../converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md)

## See Also

### Initializers

- [init(bitsPerComponent:bitsPerPixel:colorSpace:bitmapInfo:version:decode:renderingIntent:)](init%28bitspercomponent_bitsperpixel_colorspace_bitmapinfo_version_decode_renderingintent_%29.md): Creates a Core Graphics image format.
- [init(bitsPerComponent:bitsPerPixel:colorSpace:bitmapInfo:renderingIntent:)](init%28bitspercomponent_bitsperpixel_colorspace_bitmapinfo_renderingintent_%29.md): Creates a Core Graphics image format with a color space instance and default decode array.
- [init()](init%28%29.md): Creates an empty Core Graphics image format.

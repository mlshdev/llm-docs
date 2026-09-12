> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer/init(cgimage:format:flags:)](https://developer.apple.com/documentation/accelerate/vimage_buffer/init(cgimage:format:flags:))

# init(cgImage:format:flags:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates a new buffer with the contents of a Core Graphics image using the supplied image format.

## Declaration

```swift
init(cgImage: CGImage, format: vImage_CGImageFormat, flags options: vImage.Options = .noFlags) throws
```

## Parameters

- `cgImage`: The source image.
- `format`: The desired image format.
- `options`: The options to use when performing the operation.

## Mentioned In

- [Creating and Populating Buffers from Core Graphics Images](../creating-and-populating-buffers-from-core-graphics-images.md)

<a id="Discussion"></a>

## Discussion

This function converts the source Core Graphics image that the `cgImage` parameter specifies to the format that the `format` parameter describes.

For example, the following code converts a color image to grayscale and initializes the vImage buffer with the planar monochrome image data:

```swift
let format = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8,
    colorSpace: CGColorSpaceCreateDeviceGray(),
    bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue))!

// `cgImage` is a color image.
let buffer = try vImage_Buffer(cgImage: cgImage,
                               format: format)
```

## See Also

### Consuming and producing Core Graphics images

- [init(cgImage:flags:)](init%28cgimage_flags_%29.md): Creates a new buffer with the contents of a Core Graphics image.
- [createCGImage(format:flags:)](createcgimage%28format_flags_%29.md): Creates a Core Graphics image from the vImage buffer.

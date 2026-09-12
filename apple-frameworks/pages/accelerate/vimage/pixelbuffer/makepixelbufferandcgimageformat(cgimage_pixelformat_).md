> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/makepixelbufferandcgimageformat(cgimage:pixelformat:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/makepixelbufferandcgimageformat(cgimage:pixelformat:))

# makePixelBufferAndCGImageFormat(cgImage:pixelFormat:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new pixel buffer and Core Graphics image format structure from a Core Graphics image.

## Declaration

```swift
static func makePixelBufferAndCGImageFormat(cgImage: CGImage, pixelFormat: Format.Type = Format.self) throws -> (pixelBuffer: vImage.PixelBuffer<Format>, cgImageFormat: vImage_CGImageFormat)
```

## Parameters

- `cgImage`: The source Core Graphics image.
- `pixelFormat`: The pixel format of the initialized buffer.

<a id="return-value"></a>

## Return Value

A new pixel buffer of type [vImage.DynamicPixelFormat](../dynamicpixelformat.md) and a [vImage_CGImageFormat](../../vimage_cgimageformat.md) that describes the ordering and number of the color channels, the size and type of the data in the color channels, and whether or not the data is premultiplied by alpha.

<a id="Discussion"></a>

## Discussion

Use this function where you know the bits per component and bits per pixel of the [CGImage](../../../coregraphics/cgimage.md) instance. These must match those of the buffer’s `pixelFormat`, otherwise this function returns `nil`.

## See Also

### Creating a pixel buffer and image format

- [makeDynamicPixelBufferAndCGImageFormat(cgImage:)](makedynamicpixelbufferandcgimageformat%28cgimage_%29.md): Conforms when `Format` is `vImage.DynamicPixelFormat`. Returns a new dynamic pixel format pixel buffer and Core Graphics image format structure from a Core Graphics image.

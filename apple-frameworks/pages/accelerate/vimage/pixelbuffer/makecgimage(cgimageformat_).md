> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/makecgimage(cgimageformat:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/makecgimage(cgimageformat:))

# makeCGImage(cgImageFormat:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a Core Graphics image from the pixel buffer’s contents.

## Declaration

```swift
func makeCGImage(cgImageFormat: vImage_CGImageFormat) -> CGImage?
```

## Parameters

- `cgImageFormat`: The Core Graphics format of the source buffer.

<a id="return-value"></a>

## Return Value

A Core Graphics image that contains the source buffer’s contents.

## Mentioned In

- [Converting bitmap data between Core Graphics images and vImage buffers](../../converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md)
- [Applying flood fills to an image](../../applying-flood-fills-to-an-image.md)
- [Optimizing image-processing performance](../../optimizing-image-processing-performance.md)

## See Also

### Pixel buffer methods

- [copy(to:)](copy%28to_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Copies the contents of the pixel buffer to another pixel buffer.
- [copy(to:cvImageFormat:cgImageFormat:)](copy%28to_cvimageformat_cgimageformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Copies the contents of a pixel buffer to a Core Video pixel buffer.
- [withCVPixelBuffer(readOnly:body:)](withcvpixelbuffer%28readonly_body_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Calls the given closure with a locked 32-bit BGRA Core Video Pixel Buffer.

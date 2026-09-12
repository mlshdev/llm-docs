> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/copy(to:)](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/copy(to:))

# copy(to:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Copies the contents of the pixel buffer to another pixel buffer.

## Declaration

```swift
func copy(to destinationBuffer: vImage.PixelBuffer<Format>)
```

## Parameters

- `destinationBuffer`: The destination pixel buffer.

## See Also

### Pixel buffer methods

- [copy(to:cvImageFormat:cgImageFormat:)](copy%28to_cvimageformat_cgimageformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Copies the contents of a pixel buffer to a Core Video pixel buffer.
- [makeCGImage(cgImageFormat:)](makecgimage%28cgimageformat_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns a Core Graphics image from the pixel buffer’s contents.
- [withCVPixelBuffer(readOnly:body:)](withcvpixelbuffer%28readonly_body_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Calls the given closure with a locked 32-bit BGRA Core Video Pixel Buffer.

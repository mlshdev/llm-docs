> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/size](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/size)

# size

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The size of the pixel buffer.

## Declaration

```swift
var size: vImage.Size { get }
```

## See Also

### Inspecting a pixel buffer

- [width](width.md): The width of the pixel buffer.
- [height](height.md): The height of the pixel buffer.
- [channelCount](channelcount.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns the number of channels.
- [rowStride](rowstride.md): Conforms when `Format` conforms to `StaticPixelFormat`. The width, in pixels, of the underlying memory, including any additional row byte padding.
- [byteCountPerPixel](bytecountperpixel.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns the number of bytes per pixel.
- [count](count.md): Conforms when `Format` conforms to `StaticPixelFormat`. The total number of pixels multiplied by the number of channels in the buffer, including any row padding.
- [array](array.md): Conforms when `Format` conforms to `StaticPixelFormat`. An array of `width * height * channelCount` values that’s a copy of the buffer’s visible contents.

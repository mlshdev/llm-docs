> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/bytecountperpixel](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/bytecountperpixel)

# byteCountPerPixel

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns the number of bytes per pixel.

## Declaration

```swift
var byteCountPerPixel: Int { get }
```

<a id="Discussion"></a>

## Discussion

For example, the following code prints the number of bytes per pixel in two interleaved buffers:

```swift
 let x = vImage.PixelBuffer<vImage.InterleavedFx2>(size: vImage.Size(width: 1,
                                                                     height: 1))
 let y = vImage.PixelBuffer<vImage.Interleaved8x4>(size: vImage.Size(width: 1,
                                                                     height: 1))

 // Prints "8 4".
 print(x.byteCountPerPixel, y.byteCountPerPixel)
```

## See Also

### Inspecting a pixel buffer

- [width](width.md): The width of the pixel buffer.
- [height](height.md): The height of the pixel buffer.
- [size](size.md): The size of the pixel buffer.
- [channelCount](channelcount.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns the number of channels.
- [rowStride](rowstride.md): Conforms when `Format` conforms to `StaticPixelFormat`. The width, in pixels, of the underlying memory, including any additional row byte padding.
- [count](count.md): Conforms when `Format` conforms to `StaticPixelFormat`. The total number of pixels multiplied by the number of channels in the buffer, including any row padding.
- [array](array.md): Conforms when `Format` conforms to `StaticPixelFormat`. An array of `width * height * channelCount` values that’s a copy of the buffer’s visible contents.

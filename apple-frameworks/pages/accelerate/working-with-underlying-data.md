> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/working-with-underlying-data](https://developer.apple.com/documentation/accelerate/working-with-underlying-data)

# Working with underlying data

**Framework:** Accelerate  
**Kind:** API Collection

Access a pixel buffer’s underlying pixel data.

## Topics

### Converting to an array

- [makeArray(of:channelCount:)](vimage/pixelbuffer/makearray%28of_channelcount_%29.md): Conforms when `Format` is `vImage.DynamicPixelFormat`. Returns an array of `width * height * channelCount` values that’s a copy of the buffer’s visible contents.

### Accessing underlying pixel values

- [withUnsafeBufferPointer(\_:)](vimage/pixelbuffer/withunsafebufferpointer%28__%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Calls the given closure with a pointer to the buffer’s contiguous storage.
- [withUnsafeMutableBufferPointer(\_:)](vimage/pixelbuffer/withunsafemutablebufferpointer%28__%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Calls the given closure with a pointer to the buffer’s mutable contiguous storage.

### Accessing underlying vImage buffers

- [withUnsafePointerToVImageBuffer(\_:)](vimage/pixelbuffer/withunsafepointertovimagebuffer%28__%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Calls the given closure with an unsafe pointer to the underlying vImage buffer.
- [withUnsafeVImageBuffer(\_:)](vimage/pixelbuffer/withunsafevimagebuffer%28__%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Calls the given closure with the underlying vImage buffer.
- [withUnsafeVImageBuffers(\_:)](vimage/pixelbuffer/withunsafevimagebuffers%28__%29.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`. Calls the given closure with the underlying vImage buffers.

### Accessing component pixel buffers

- [withUnsafePixelBuffer(at:\_:)](vimage/pixelbuffer/withunsafepixelbuffer%28at___%29.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`. Calls the given closure with the pixel buffer that references the individual plane at the given index.
- [withUnsafePixelBuffers(\_:)](vimage/pixelbuffer/withunsafepixelbuffers%28__%29.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`. Calls the given closure with the array of pixel buffers that reference the individual planes.

## See Also

### Pixel buffer essentials

- [Creating vImage pixel buffers](creating-vimage-pixel-buffers.md): Allocate and initialize pixel buffers from raw pixel data, Core Graphics images, and Core Video buffers.
- [Pixel formats](pixel-formats.md): Specify a pixel buffer’s bit depth, number of channels, and data storage format.

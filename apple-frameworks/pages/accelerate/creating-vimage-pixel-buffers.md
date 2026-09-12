> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/creating-vimage-pixel-buffers](https://developer.apple.com/documentation/accelerate/creating-vimage-pixel-buffers)

# Creating vImage pixel buffers

**Framework:** Accelerate  
**Kind:** API Collection

Allocate and initialize pixel buffers from raw pixel data, Core Graphics images, and Core Video buffers.

## Topics

### Creating a pixel buffer

- [init(size:pixelFormat:)](vimage/pixelbuffer/init%28size_pixelformat_%29-12gl9.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`. Returns a new multiplane pixel buffer with a size that you specify.
- [init(size:pixelFormat:)](vimage/pixelbuffer/init%28size_pixelformat_%29-96ocu.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns a new pixel buffer with a size that you specify.
- [init(width:height:pixelFormat:)](vimage/pixelbuffer/init%28width_height_pixelformat_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns a new pixel buffer with a width and height that you specify.
- [vImage.Size](vimage/size.md): A structure that contains width and height values.

### Creating a pixel buffer from raw pixel data

- [init(pixelValues:size:pixelFormat:)](vimage/pixelbuffer/init%28pixelvalues_size_pixelformat_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Creates a new pixel buffer by copying the supplied collection of pixel values.
- [init(data:width:height:byteCountPerRow:pixelFormat:)](vimage/pixelbuffer/init%28data_width_height_bytecountperrow_pixelformat_%29-zwzz.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Returns a new buffer that references existing data.
- [init(data:width:height:byteCountPerRow:pixelFormat:)](vimage/pixelbuffer/init%28data_width_height_bytecountperrow_pixelformat_%29-27czc.md): Conforms when `Format` conforms to `StaticPixelFormat`. Calculates the correct bytes per row and returns a new buffer that references existing data.

### Creating a pixel buffer from a Core Graphics image

- [init(cgImage:cgImageFormat:pixelFormat:)](vimage/pixelbuffer/init%28cgimage_cgimageformat_pixelformat_%29.md): Conforms when `Format` conforms to `InitializableFromCGImage` and `StaticPixelFormat`. Returns a new pixel buffer initialized from a Core Graphics image.

### Creating a pixel buffer from a Core Video buffer

- [init(copying:cvImageFormat:cgImageFormat:pixelFormat:)](vimage/pixelbuffer/init%28copying_cvimageformat_cgimageformat_pixelformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Initializes a pixel buffer by copying the data from a Core Video pixel buffer.
- [init(referencing:converter:destinationPixelFormat:)](vimage/pixelbuffer/init%28referencing_converter_destinationpixelformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Returns a new pixel buffer that references the specified Core Video pixel buffer and populated converter.
- [init(referencing:planeIndex:overrideSize:pixelFormat:)](vimage/pixelbuffer/init%28referencing_planeindex_overridesize_pixelformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Initializes a pixel buffer by refencing the data from a single plane of a multiplane Core Video pixel buffer.

### Creating a multiple-plane buffer from an interleaved buffer

- [init(interleavedBuffer:)](vimage/pixelbuffer/init%28interleavedbuffer_%29-9xct6.md): Conforms when `Format` is `vImage.Planar8x3`. Creates a 3-channel, 8-bit-per-channel multiple-plane buffer from a 3-channel, 8-bit-per-channel interleaved buffer.
- [init(interleavedBuffer:)](vimage/pixelbuffer/init%28interleavedbuffer_%29-8f6xn.md): Conforms when `Format` is `vImage.Planar8x4`. Creates a 4-channel, 8-bit-per-channel mutiple-plane buffer from a 4-channel, 8-bit-per-channel interleaved buffer.
- [init(interleavedBuffer:)](vimage/pixelbuffer/init%28interleavedbuffer_%29-77n3i.md): Conforms when `Format` is `vImage.PlanarFx3`. Creates a 3-channel, 32-bit-per-channel multiple-plane buffer from a 3-channel, 32-bit-per-channel interleaved buffer.
- [init(interleavedBuffer:)](vimage/pixelbuffer/init%28interleavedbuffer_%29-2hc6f.md): Conforms when `Format` is `vImage.PlanarFx4`. Creates a 4-channel, 32-bit-per-channel multiple-plane buffer from a 4-channel, 32-bit-per-channel interleaved buffer.

### Creating an interleaved buffer from another buffer

- [init(planarBuffers:)](vimage/pixelbuffer/init%28planarbuffers_%29-727d.md): Conforms when `Format` is `vImage.Interleaved8x2`. Creates a 2-channel, 8-bit-per-channel interleaved buffer from two 8-bit planar buffers.
- [init(planarBuffers:)](vimage/pixelbuffer/init%28planarbuffers_%29-6r9p0.md): Conforms when `Format` is `vImage.Interleaved8x3`. Creates a 3-channel, 8-bit-per-channel interleaved buffer from three 8-bit planar buffers.
- [init(planarBuffers:)](vimage/pixelbuffer/init%28planarbuffers_%29-6hkso.md): Conforms when `Format` is `vImage.Interleaved8x4`. Creates a 4-channel, 8-bit-per-channel interleaved buffer from four 8-bit planar buffers.
- [init(planarBuffers:)](vimage/pixelbuffer/init%28planarbuffers_%29-8nt2j.md): Conforms when `Format` is `vImage.Interleaved8x4`. Creates a 4-channel, 8-bit-per-channel interleaved buffer from four 32-bit planar buffers.
- [init(planarBuffers:)](vimage/pixelbuffer/init%28planarbuffers_%29-n2mq.md): Conforms when `Format` is `vImage.InterleavedFx2`. Creates a 2-channel, 32-bit-per-channel interleaved buffer from two 32-bit planar buffers.
- [init(planarBuffers:)](vimage/pixelbuffer/init%28planarbuffers_%29-7wt24.md): Conforms when `Format` is `vImage.InterleavedFx3`. Creates a 3-channel, 32-bit-per-channel interleaved buffer from three 32-bit planar buffers.
- [init(planarBuffers:)](vimage/pixelbuffer/init%28planarbuffers_%29-59s4n.md): Conforms when `Format` is `vImage.InterleavedFx4`. Creates a 4-channel, 32-bit-per-channel interleaved buffer from four 32-bit planar buffers.
- [init(planarBuffers:)](vimage/pixelbuffer/init%28planarbuffers_%29-2575t.md): Conforms when `Format` is `vImage.Interleaved16Ux4`. Creates a 4-channel, 16-bit-per-channel interleaved buffer from four 16-bit planar buffers.
- [init(lumaSource:chromaSource:conversionInfo:)](vimage/pixelbuffer/init%28lumasource_chromasource_conversioninfo_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Creates a 4-channel, 8-bit-per-channel interleaved buffer from a planar Yp buffer and a two-channel interleaved CbCr buffer.
- [init(interleavedBuffer:)](vimage/pixelbuffer/init%28interleavedbuffer_%29-35or3.md): Conforms when `Format` is `vImage.InterleavedFx4`. Creates a 4-channel, 32-bit-per-channel interleaved buffer from a 4-channel, 8-bit-per-channel interleaved buffer.

### Creating a multiple-plane buffer from planar buffers

- [init(planarBuffers:pixelFormat:)](vimage/pixelbuffer/init%28planarbuffers_pixelformat_%29.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`. Returns an initialized buffer by copying the specified planar buffers.

### Creating a pixel buffer and image format

- [makeDynamicPixelBufferAndCGImageFormat(cgImage:)](vimage/pixelbuffer/makedynamicpixelbufferandcgimageformat%28cgimage_%29.md): Conforms when `Format` is `vImage.DynamicPixelFormat`. Returns a new dynamic pixel format pixel buffer and Core Graphics image format structure from a Core Graphics image.
- [makePixelBufferAndCGImageFormat(cgImage:pixelFormat:)](vimage/pixelbuffer/makepixelbufferandcgimageformat%28cgimage_pixelformat_%29.md): Conforms when `Format` conforms to `InitializableFromCGImage` and `StaticPixelFormat`. Returns a new pixel buffer and Core Graphics image format structure from a Core Graphics image.

## See Also

### Pixel buffer essentials

- [Pixel formats](pixel-formats.md): Specify a pixel buffer’s bit depth, number of channels, and data storage format.
- [Working with underlying data](working-with-underlying-data.md): Access a pixel buffer’s underlying pixel data.

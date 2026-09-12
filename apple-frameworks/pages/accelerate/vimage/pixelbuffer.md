> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer)

# vImage.PixelBuffer

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An image buffer that stores an image’s pixel data, dimensions, bit depth, and number of channels.

## Declaration

```swift
struct PixelBuffer<Format> where Format : PixelFormat
```

## Mentioned In

- [Enhancing image contrast with histogram manipulation](../enhancing-image-contrast-with-histogram-manipulation.md)
- [Applying vImage operations to regions of interest](../applying-vimage-operations-to-regions-of-interest.md)
- [Building a basic image conversion workflow](../building-a-basic-image-conversion-workflow.md)
- [Applying color transforms to images with a multidimensional lookup table](../applying-color-transforms-to-images-with-a-multidimensional-lookup-table.md)
- [Converting bitmap data between Core Graphics images and vImage buffers](../converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md)
- [Converting chroma-subsampled images](../converting-chroma-subsampled-images.md)
- [Optimizing image-processing performance](../optimizing-image-processing-performance.md)

<a id="overview"></a>

## Overview

Use a [vImage.PixelBuffer](pixelbuffer.md) to represent an image from a [CGImage](../../coregraphics/cgimage.md) instance, a [CVPixelBuffer](../../corevideo/cvpixelbuffer.md) structure, or a collection of raw pixel values. Pixel buffers are typed by their bits per channel and number of channels. For example, [vImage.Interleaved8x4](interleaved8x4.md) indicates a 4-channel, 8-bit-per-channel pixel buffer that contains image data such as RGBA or CMYK.

Pixel buffers expose methods that are available for the buffer’s pixel format. For example, the fast box convolution functions are only available for one- and four-channel 8-bit per channel buffers:

```swift
 let src = vImage.PixelBuffer<vImage.Interleaved8x4>(cgImage: cgImage,
                                                     cgImageFormat: &cgImageFormat)
 let dest = vImage.PixelBuffer<vImage.Interleaved8x4>(src.size)

 src.boxConvolve(kernelSize: vImage.Size(width: 64, height: 64),
                 edgeMode: .truncateKernel,
                 destination: dest)
```

Typed pixel buffers provide a simple API to convert between pixel formats. For example, the following code converts 8-bit unsigned integer pixels to 32-bit floating point pixels:

```swift
 let src = vImage.PixelBuffer<vImage.Interleaved8x4>(cgImage: cgImage,
                                                     cgImageFormat: &cgImageFormat)
 let dest = vImage.PixelBuffer<vImage.InterleavedFx4>(size: src.size)

 src.convert(to: dest)
```

vImage pixel buffers manage their memory, therefore, you don’t need to call [deallocate()](https://developer.apple.com/documentation/swift/unsafemutablerawpointer/deallocate%28%29) when you’re finished with the buffer.

## Topics

### Pixel buffer essentials

- [Creating vImage pixel buffers](../creating-vimage-pixel-buffers.md): Allocate and initialize pixel buffers from raw pixel data, Core Graphics images, and Core Video buffers.
- [Pixel formats](../pixel-formats.md): Specify a pixel buffer’s bit depth, number of channels, and data storage format.
- [Working with underlying data](../working-with-underlying-data.md): Access a pixel buffer’s underlying pixel data.

### Inspecting a pixel buffer

- [width](pixelbuffer/width.md): The width of the pixel buffer.
- [height](pixelbuffer/height.md): The height of the pixel buffer.
- [size](pixelbuffer/size.md): The size of the pixel buffer.
- [channelCount](pixelbuffer/channelcount.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns the number of channels.
- [rowStride](pixelbuffer/rowstride.md): Conforms when `Format` conforms to `StaticPixelFormat`. The width, in pixels, of the underlying memory, including any additional row byte padding.
- [byteCountPerPixel](pixelbuffer/bytecountperpixel.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns the number of bytes per pixel.
- [count](pixelbuffer/count.md): Conforms when `Format` conforms to `StaticPixelFormat`. The total number of pixels multiplied by the number of channels in the buffer, including any row padding.
- [array](pixelbuffer/array.md): Conforms when `Format` conforms to `StaticPixelFormat`. An array of `width * height * channelCount` values that’s a copy of the buffer’s visible contents.

### Pixel buffer methods

- [copy(to:)](pixelbuffer/copy%28to_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Copies the contents of the pixel buffer to another pixel buffer.
- [copy(to:cvImageFormat:cgImageFormat:)](pixelbuffer/copy%28to_cvimageformat_cgimageformat_%29.md): Conforms when `Format` conforms to `SinglePlanePixelFormat`. Copies the contents of a pixel buffer to a Core Video pixel buffer.
- [makeCGImage(cgImageFormat:)](pixelbuffer/makecgimage%28cgimageformat_%29.md): Conforms when `Format` conforms to `StaticPixelFormat`. Returns a Core Graphics image from the pixel buffer’s contents.
- [withCVPixelBuffer(readOnly:body:)](pixelbuffer/withcvpixelbuffer%28readonly_body_%29.md): Conforms when `Format` is `vImage.Interleaved8x4`. Calls the given closure with a locked 32-bit BGRA Core Video Pixel Buffer.

### Pixel buffer operations

- [Applying geometric operations to pixel buffers](../applying-geometric-operations-to-pixel-buffers.md): Reflect, shear, rotate, scale, and apply affine transforms to image data.
- [Applying color transforms to pixel buffers](../applying-color-transforms-to-pixel-buffers.md): Adjust the colors of an image by applying gamma, polynomials, or multidimensional lookup.
- [Blending and compositing pixel buffers](../blending-and-compositing-pixel-buffers.md): Composite two pixel buffers to create a single image.
- [Convolving and applying morphology](../convolving-and-applying-morphology.md): Apply convolution, dilation, or erosion to a pixel buffer.
- [Thresholding and clipping pixel buffer values](../thresholding-and-clipping-pixel-buffer-values.md): Limit the values in a pixel buffer to a threshold or a range.
- [Calculating and transforming histograms](../calculating-and-transforming-histograms.md): Enhance and adjust the contrast of an image with histogram equalization, contrast stretching, and specification.
- [Converting pixel buffers](../converting-pixel-buffers.md): Convert pixel buffer data between different bit-depths.
- [Interleaving and deinterleaving pixel buffers](../interleaving-and-deinterleaving-pixel-buffers.md): Convert pixel buffer data between interleaved and planar formats.
- [Cropping and working with regions of interest](../cropping-and-working-with-regions-of-interest.md): Crop images and apply operations to regions of interest.
- [Applying channel operations](../applying-channel-operations.md): Extract, flatten, permute, and overwrite the individual color channels of a pixel buffer.
- [Applying arithmetic operations](../applying-arithmetic-operations.md): Multiply the pixel values of a buffer by scalar values or matrices.

### Instance Properties

- [bytesPerRow](pixelbuffer/bytesperrow.md): Conforms when `Format` conforms to `StaticPixelFormat`. The width, in bytes, of the underlying memory including any additional row byte padding.

### Instance Methods

- [applyLookup(\_:destination:)](pixelbuffer/applylookup%28__destination_%29-3yi7i.md): Conforms when `Format` is `vImage.Planar8`.
- [applyLookup(\_:destination:)](pixelbuffer/applylookup%28__destination_%29-6498m.md): Conforms when `Format` is `vImage.PlanarF`.
- [applyLookup(\_:destination:)](pixelbuffer/applylookup%28__destination_%29-715aw.md): Conforms when `Format` is `vImage.Planar8`.
- [applyMorphology(operation:destination:)](pixelbuffer/applymorphology%28operation_destination_%29-1aqer.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`, `Format.ComponentType` is `Float`, and `Format.PlanarPixelFormat.ComponentType` is `Float`. Applies a morphology operation to the buffer.
- [applyMorphology(operation:destination:)](pixelbuffer/applymorphology%28operation_destination_%29-5al25.md): Conforms when `Format` conforms to `MultiplePlanePixelFormat`, `Format.ComponentType` is `UInt8`, and `Format.PlanarPixelFormat.ComponentType` is `UInt8`. Applies a morphology operation to the buffer.
- [convolve(with:bias:edgeMode:destination:)](pixelbuffer/convolve%28with_bias_edgemode_destination_%29-7no5n.md): Conforms when `Format` is `vImage.Interleaved8x4`.
- [separableConvolve(horizontalKernel:verticalKernel:bias:edgeMode:destination:)](pixelbuffer/separableconvolve%28horizontalkernel_verticalkernel_bias_edgemode_destination_%29-15dhm.md): Conforms when `Format` is `vImage.Interleaved8x4`.
- [withBNNSTensor(\_:)](pixelbuffer/withbnnstensor%28__%29.md): Conforms when `Format` conforms to `StaticPixelFormat` and `Format.ComponentType` conforms to `BNNSScalar`. Calls the given closure with a pointer to a BNNS tensor that shares memory with the pixel buffer.

### Default Implementations

- [AccelerateBuffer Implementations](pixelbuffer/acceleratebuffer-implementations.md)
- [AccelerateMatrixBuffer Implementations](pixelbuffer/acceleratematrixbuffer-implementations.md)
- [AccelerateMutableMatrixBuffer Implementations](pixelbuffer/acceleratemutablematrixbuffer-implementations.md)

## Relationships

### Conforms To

- [AccelerateBuffer](../acceleratebuffer.md)
- [AccelerateMatrixBuffer](../acceleratematrixbuffer.md)
- [AccelerateMutableBuffer](../acceleratemutablebuffer.md)
- [AccelerateMutableMatrixBuffer](../acceleratemutablematrixbuffer.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### vImage Pixel Buffers

- [Using vImage pixel buffers to generate video effects](../using-vimage-pixel-buffers-to-generate-video-effects.md): Render real-time video effects with the vImage Pixel Buffer.
- [Applying tone curve adjustments to images](../applying-tone-curve-adjustments-to-images.md): Use the vImage library’s polynomial transform to apply tone curve adjustments to images.
- [Adjusting the brightness and contrast of an image](../adjusting-the-brightness-and-contrast-of-an-image.md): Use a gamma function to apply a linear or exponential curve.
- [Adjusting the hue of an image](../adjusting-the-hue-of-an-image.md): Convert an image to L\*a\*b\* color space and apply hue adjustment.
- [Sharing texture data between the Model I/O framework and the vImage library](../sharing-texture-data-between-the-model-io-framework-and-the-vimage-library.md): Use Model I/O and vImage to composite a photograph over a computer-generated sky.
- [Calculating the dominant colors in an image](../calculating-the-dominant-colors-in-an-image.md): Find the main colors in an image by implementing k-means clustering using the Accelerate framework.

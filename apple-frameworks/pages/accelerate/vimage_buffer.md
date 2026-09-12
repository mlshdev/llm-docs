> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_buffer](https://developer.apple.com/documentation/accelerate/vimage_buffer)

# vImage_Buffer (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An image buffer that stores an image’s pixel data, dimensions, and row stride.

## Declaration

```swift
struct vImage_Buffer
```

## Mentioned In

- [Enhancing image contrast with histogram manipulation](enhancing-image-contrast-with-histogram-manipulation.md)
- [Applying vImage operations to regions of interest](applying-vimage-operations-to-regions-of-interest.md)
- [Creating and Populating Buffers from Core Graphics Images](creating-and-populating-buffers-from-core-graphics-images.md)
- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md)
- [Building a Basic Image-Processing Workflow](building-a-basic-image-processing-workflow.md)
- [Compositing images with vImage blend modes](compositing-images-with-vimage-blend-modes.md)
- [Converting bitmap data between Core Graphics images and vImage buffers](converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md)

<a id="overview"></a>

## Overview

The vImage buffer is the fundamental data structure that the vImage library uses to represent image data. To ensure the best performance, the vImage buffer initialization functions may add extra padding to each row. For example, the following code declares an 8-bit per pixel buffer that’s 10 pixels wide:

```swift
var buffer = vImage_Buffer()

vImageBuffer_Init(&buffer,
                  5,    // height
                  10,   // width
                  8,    // bits per pixel
                  vImage_Flags(kvImageNoFlags))
```

Although the code defines a buffer with 10 bytes per row, to maximize performance, [vImageBuffer_Init(\_:\_:\_:\_:\_:)](vimagebuffer_init%28__________%29.md) initializes a buffer with 16 bytes per row:

![A diagram that shows the visible pixels and the padding of a vImage buffer.](https://developer.apple.com/images/com.apple.accelerate/media-4052499@2x.png)

If you provide your own buffer storage, call [preferredAlignmentAndRowBytes(width:height:bitsPerPixel:)](vimage_buffer/preferredalignmentandrowbytes%28width_height_bitsperpixel_%29.md) to get the row stride that ensures your buffer achieves the best performance.

```swift
let width = 10
let height = 5

let alignmentAndRowBytes = try vImage_Buffer.preferredAlignmentAndRowBytes(
    width: width,
    height: height,
    bitsPerPixel: 8)

// Prints "16".
print(alignmentAndRowBytes.rowBytes)

let data = UnsafeMutableRawPointer.allocate(
    byteCount: alignmentAndRowBytes.rowBytes * height,
    alignment: alignmentAndRowBytes.alignment)

let buffer = vImage_Buffer(data: data,
                           height: vImagePixelCount(height),
                           width: vImagePixelCount(width),
                           rowBytes: alignmentAndRowBytes.rowBytes)
```

## Topics

### Creating an empty vImage buffer

- [init(width:height:bitsPerPixel:)](vimage_buffer/init%28width_height_bitsperpixel_%29.md): Creates a new buffer with the specified width, height, and bits per pixel.
- [init(size:bitsPerPixel:)](vimage_buffer/init%28size_bitsperpixel_%29.md): Creates a new buffer with the specified size and bits per pixel.
- [init()](vimage_buffer/init%28%29.md): Creates an empty vImage buffer.

### Creating a buffer that references existing data

- [init(data:height:width:rowBytes:)](vimage_buffer/init%28data_height_width_rowbytes_%29.md): Creates a new buffer with the specified size that references existing data.
- [preferredAlignmentAndRowBytes(width:height:bitsPerPixel:)](vimage_buffer/preferredalignmentandrowbytes%28width_height_bitsperpixel_%29.md): Returns the preferred alignment and row bytes for a specified size and bits per pixel.

### Consuming and producing Core Graphics images

- [init(cgImage:flags:)](vimage_buffer/init%28cgimage_flags_%29.md): Creates a new buffer with the contents of a Core Graphics image.
- [init(cgImage:format:flags:)](vimage_buffer/init%28cgimage_format_flags_%29.md): Creates a new buffer with the contents of a Core Graphics image using the supplied image format.
- [createCGImage(format:flags:)](vimage_buffer/createcgimage%28format_flags_%29.md): Creates a Core Graphics image from the vImage buffer.

### Inspecting a buffer’s properties

- [data](vimage_buffer/data.md): A pointer to the top-left pixel of the image.
- [height](vimage_buffer/height.md): The height of the image, in pixels.
- [width](vimage_buffer/width.md): The width of the image, in pixels.
- [size](vimage_buffer/size.md): The size of the image, in pixels.
- [rowBytes](vimage_buffer/rowbytes.md): The distance, in bytes, between the start of one pixel row and the next in an image, including any unused space between them.

### Copying a buffer’s contents

- [copy(destinationBuffer:pixelSize:flags:)](vimage_buffer/copy%28destinationbuffer_pixelsize_flags_%29.md): Copies the contents of a vImage buffer to the specified destination buffer.

### Deallocating a buffer

- [free()](vimage_buffer/free%28%29.md): Frees the resources associated with the vImage buffer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_AffineTransform_Double](vimage_affinetransform_double.md): A structure for values that represent a double-precision affine transformation.
- [vImage_CGAffineTransform](vimage_cgaffinetransform.md): A structure for values that represent a Core Graphics–compatible affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.
- [ResamplingFilter](resamplingfilter.md): A pointer to a resampling filter callback function.

# vImage_Buffer (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An image buffer that stores an image’s pixel data, dimensions, and row stride.

## Declaration

```objectivec
typedef struct vImage_Buffer { ... } vImage_Buffer;
```

## Mentioned In

- [Enhancing image contrast with histogram manipulation](enhancing-image-contrast-with-histogram-manipulation.md)
- [Applying vImage operations to regions of interest](applying-vimage-operations-to-regions-of-interest.md)
- [Creating and Populating Buffers from Core Graphics Images](creating-and-populating-buffers-from-core-graphics-images.md)
- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md)
- [Building a Basic Image-Processing Workflow](building-a-basic-image-processing-workflow.md)
- [Compositing images with vImage blend modes](compositing-images-with-vimage-blend-modes.md)
- [Converting bitmap data between Core Graphics images and vImage buffers](converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md)

<a id="overview"></a>

## Overview

The vImage buffer is the fundamental data structure that the vImage library uses to represent image data. To ensure the best performance, the vImage buffer initialization functions may add extra padding to each row. For example, the following code declares an 8-bit per pixel buffer that’s 10 pixels wide:

```swift
var buffer = vImage_Buffer()

vImageBuffer_Init(&buffer,
                  5,    // height
                  10,   // width
                  8,    // bits per pixel
                  vImage_Flags(kvImageNoFlags))
```

Although the code defines a buffer with 10 bytes per row, to maximize performance, [vImageBuffer_Init](vimagebuffer_init%28__________%29.md) initializes a buffer with 16 bytes per row:

![A diagram that shows the visible pixels and the padding of a vImage buffer.](https://developer.apple.com/images/com.apple.accelerate/media-4052499@2x.png)

If you provide your own buffer storage, call [preferredAlignmentAndRowBytes(width:height:bitsPerPixel:)](vimage_buffer/preferredalignmentandrowbytes%28width_height_bitsperpixel_%29.md) to get the row stride that ensures your buffer achieves the best performance.

```swift
let width = 10
let height = 5

let alignmentAndRowBytes = try vImage_Buffer.preferredAlignmentAndRowBytes(
    width: width,
    height: height,
    bitsPerPixel: 8)

// Prints "16".
print(alignmentAndRowBytes.rowBytes)

let data = UnsafeMutableRawPointer.allocate(
    byteCount: alignmentAndRowBytes.rowBytes * height,
    alignment: alignmentAndRowBytes.alignment)

let buffer = vImage_Buffer(data: data,
                           height: vImagePixelCount(height),
                           width: vImagePixelCount(width),
                           rowBytes: alignmentAndRowBytes.rowBytes)
```

## Topics

### Inspecting a buffer’s properties

- [data](vimage_buffer/data.md): A pointer to the top-left pixel of the image.
- [height](vimage_buffer/height.md): The height of the image, in pixels.
- [width](vimage_buffer/width.md): The width of the image, in pixels.
- [rowBytes](vimage_buffer/rowbytes.md): The distance, in bytes, between the start of one pixel row and the next in an image, including any unused space between them.

## See Also

### Data Types

- [vImagePixelCount](vimagepixelcount.md): A type for the number of pixels.
- [vImage_AffineTransform](vimage_affinetransform.md): A structure for values that represent an affine transformation.
- [vImage_AffineTransform_Double](vimage_affinetransform_double.md): A structure for values that represent a double-precision affine transformation.
- [vImage_CGAffineTransform](vimage_cgaffinetransform.md): A structure for values that represent a Core Graphics–compatible affine transformation.
- [vImage_Error](vimage_error.md): A type for image errors.
- [vImage_Flags](vimage_flags.md): A type for processing options.
- [GammaFunction](gammafunction.md): A type for a gamma function.
- [ResamplingFilter](resamplingfilter.md): A pointer to a resampling filter callback function.

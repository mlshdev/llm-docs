> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage-buffers](https://developer.apple.com/documentation/accelerate/vimage-buffers)

# vImage buffers (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Use buffers to pass image data to and from vImage operations.

<a id="overview"></a>

## Overview

The [vImage_Buffer](vimage_buffer.md) structure is the fundamental data type for passing image data to and from vImage operations.

A vImage buffer describes a rectangular region of pixels and specifies the width, height, number of bytes in each row, and a pointer to the pixel data memory. However, a buffer doesn’t describe image properties, such as pixel format, color space, and channel ordering.

vImage provides functions that initialize buffers from Core Graphics images and Core Video pixel buffers, generate Core Graphics images, and populate Core Video pixel buffers from vImage buffers.

## Topics

### Initializing vImage buffers

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImageBuffer_Init(\_:\_:\_:\_:\_:)](vimagebuffer_init%28__________%29.md): Initializes a vImage buffer with a specified width, height, and bits per pixel.

### Querying vImage buffer attributes

- [vImageBuffer_GetSize(\_:)](vimagebuffer_getsize%28__%29.md): Returns the size, in pixels, of a vImage buffer.

### Copying vImage buffers

- [vImageCopyBuffer(\_:\_:\_:\_:)](vimagecopybuffer%28________%29.md): Copies the contents of a vImage buffer to a destination buffer.

## See Also

### vImage Buffers

- [Optimizing image-processing performance](optimizing-image-processing-performance.md): Improve your app’s performance by converting image buffer formats from interleaved to planar.

# vImage buffers (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Use buffers to pass image data to and from vImage operations.

<a id="overview"></a>

## Overview

The [vImage_Buffer](vimage_buffer.md) structure is the fundamental data type for passing image data to and from vImage operations.

A vImage buffer describes a rectangular region of pixels and specifies the width, height, number of bytes in each row, and a pointer to the pixel data memory. However, a buffer doesn’t describe image properties, such as pixel format, color space, and channel ordering.

vImage provides functions that initialize buffers from Core Graphics images and Core Video pixel buffers, generate Core Graphics images, and populate Core Video pixel buffers from vImage buffers.

## Topics

### Initializing vImage buffers

- [vImage_Buffer](vimage_buffer.md): An image buffer that stores an image’s pixel data, dimensions, and row stride.
- [vImageBuffer_Init](vimagebuffer_init%28__________%29.md): Initializes a vImage buffer with a specified width, height, and bits per pixel.

### Querying vImage buffer attributes

- [vImageBuffer_GetSize](vimagebuffer_getsize%28__%29.md): Returns the size, in pixels, of a vImage buffer.

### Copying vImage buffers

- [vImageCopyBuffer](vimagecopybuffer%28________%29.md): Copies the contents of a vImage buffer to a destination buffer.

## See Also

### vImage Buffers

- [Optimizing image-processing performance](optimizing-image-processing-performance.md): Improve your app’s performance by converting image buffer formats from interleaved to planar.

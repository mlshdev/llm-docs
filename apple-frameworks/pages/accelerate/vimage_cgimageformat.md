> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage_cgimageformat](https://developer.apple.com/documentation/accelerate/vimage_cgimageformat)

# vImage_CGImageFormat (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The description of a Core Graphics image.

## Declaration

```swift
struct vImage_CGImageFormat
```

## Mentioned In

- [Converting bitmap data between Core Graphics images and vImage buffers](converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md)
- [Applying flood fills to an image](applying-flood-fills-to-an-image.md)
- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md)
- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md)
- [Optimizing image-processing performance](optimizing-image-processing-performance.md)
- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md)

<a id="overview"></a>

## Overview

This structure describes the ordering and number of the color channels, the size and type of the data in the color channels, and alpha information. This format mirrors the image format descriptors that Core Graphics uses to create objects, such as [CGImage](../coregraphics/cgimage.md) and [CGContext](../coregraphics/cgcontext.md).

## Topics

### Initializers

- [init(bitsPerComponent:bitsPerPixel:colorSpace:bitmapInfo:version:decode:renderingIntent:)](vimage_cgimageformat/init%28bitspercomponent_bitsperpixel_colorspace_bitmapinfo_version_decode_renderingintent_%29.md): Creates a Core Graphics image format.
- [init(bitsPerComponent:bitsPerPixel:colorSpace:bitmapInfo:renderingIntent:)](vimage_cgimageformat/init%28bitspercomponent_bitsperpixel_colorspace_bitmapinfo_renderingintent_%29.md): Creates a Core Graphics image format with a color space instance and default decode array.
- [init(cgImage:)](vimage_cgimageformat/init%28cgimage_%29.md): Creates a Core Graphics image format of the specified image.
- [init()](vimage_cgimageformat/init%28%29.md): Creates an empty Core Graphics image format.

### Instance properties

- [bitsPerComponent](vimage_cgimageformat/bitspercomponent.md): The number of bits that represents one channel of data in one pixel.
- [bitsPerPixel](vimage_cgimageformat/bitsperpixel.md): The number of bits that represents one pixel.
- [colorSpace](vimage_cgimageformat/colorspace.md): A description of the position of the pixel data in the image, relative to a reference XYZ color space.
- [bitmapInfo](vimage_cgimageformat/bitmapinfo.md): The component information that describes the color channels.
- [version](vimage_cgimageformat/version.md): The version number.
- [decode](vimage_cgimageformat/decode.md): The decode array for the image.
- [renderingIntent](vimage_cgimageformat/renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.
- [componentCount](vimage_cgimageformat/componentcount.md): The number of color and alpha channels.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

# vImage_CGImageFormat (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The description of a Core Graphics image.

## Declaration

```objectivec
typedef struct vImage_CGImageFormat { ... } vImage_CGImageFormat;
```

## Mentioned In

- [Converting bitmap data between Core Graphics images and vImage buffers](converting-bitmap-data-between-core-graphics-images-and-vimage-buffers.md)
- [Applying flood fills to an image](applying-flood-fills-to-an-image.md)
- [Building a basic image conversion workflow](building-a-basic-image-conversion-workflow.md)
- [Converting chroma-subsampled images](converting-chroma-subsampled-images.md)
- [Optimizing image-processing performance](optimizing-image-processing-performance.md)
- [Transforming an image in three dimensions](transforming-an-image-in-three-dimensions.md)

<a id="overview"></a>

## Overview

This structure describes the ordering and number of the color channels, the size and type of the data in the color channels, and alpha information. This format mirrors the image format descriptors that Core Graphics uses to create objects, such as [CGImageRef](../coregraphics/cgimage.md) and [CGContextRef](../coregraphics/cgcontext.md).

## Topics

### Instance properties

- [bitsPerComponent](vimage_cgimageformat/bitspercomponent.md): The number of bits that represents one channel of data in one pixel.
- [bitsPerPixel](vimage_cgimageformat/bitsperpixel.md): The number of bits that represents one pixel.
- [colorSpace](vimage_cgimageformat/colorspace.md): A description of the position of the pixel data in the image, relative to a reference XYZ color space.
- [bitmapInfo](vimage_cgimageformat/bitmapinfo.md): The component information that describes the color channels.
- [version](vimage_cgimageformat/version.md): The version number.
- [decode](vimage_cgimageformat/decode.md): The decode array for the image.
- [renderingIntent](vimage_cgimageformat/renderingintent.md): A rendering intent constant that specifies how Core Graphics handles colors that aren’t within the destination color space gamut.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescription-42p](https://developer.apple.com/documentation/corevideo/cvpixelformatdescription-42p)

# CVPixelFormatDescription (Swift)

**Framework:** Core Video  
**Kind:** API Collection

An API that provides functions and types for defining custom pixel formats.

<a id="overview"></a>

## Overview

The Core Video pixel format description API defines functions and types for defining custom pixel formats. You should only use pixel format descriptions if you need to define a custom pixel format.

## Topics

### Creating Format Descriptions

- [CVPixelFormatDescriptionCreateWithPixelFormatType(\_:\_:)](cvpixelformatdescriptioncreatewithpixelformattype%28____%29.md): Creates a pixel format description from a given `OSType` identifier.
- [CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType(\_:\_:)](cvpixelformatdescriptionregisterdescriptionwithpixelformattype%28____%29.md): Registers a pixel format description with Core Video.

### Retrieving Format Descriptions

- [CVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes(\_:)](cvpixelformatdescriptionarraycreatewithallpixelformattypes%28__%29.md): Returns all the pixel format descriptions known to Core Video.

### Converting format types

- [CVPixelFormatTypeCopyFourCharCodeString(\_:)](cvpixelformattypecopyfourcharcodestring%28__%29.md)

### Data Types

- [CVPixelFormatDescription](cvpixelformatdescription.md): Defines a pixel format which can be used to create custom pixel buffer types.
- [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md): A structure for holding information that describes a custom extended pixel fill algorithm.
- [CVPixelFormatType](cvpixelformattype.md): Identifier for a pixel format type
- [CVSenselSitingOffsets](cvsenselsitingoffsets.md): Siting offsets, relative to pixel center, of individual sensels/components constituting each pixel.
- [CVSenselArrayPattern](cvsenselarraypattern.md): Pattern indicating sensel arrangement.

### Callbacks

- [CVFillExtendedPixelsCallBack](cvfillextendedpixelscallback.md): Defines a pointer to a custom extended pixel-fill function, which is called whenever the system needs to pad a buffer holding your custom pixel format.

### Constants

- [Pixel Format Description Keys](pixel-format-description-keys.md): The attributes of a pixel format.
- [Pixel Format Identifiers](pixel-format-identifiers.md): Core Video does not provide support for all of these formats; this list defines only their names.

## See Also

### Data Processing

- [CVBuffer](cvbuffer-nfm.md): An abstract base class that defines how to interact with data buffers.
- [CVImageBuffer](cvimagebuffer-q40.md): An interface for managing different types of image data.
- [CVPixelBuffer](cvpixelbuffer-q2e.md): An image buffer that holds pixels in main memory.
- [CVPixelBufferPool](cvpixelbufferpool-77o.md): A utility object for managing a recyclable set of pixel buffer objects.

# CVPixelFormatDescription (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

An API that provides functions and types for defining custom pixel formats.

<a id="overview"></a>

## Overview

The Core Video pixel format description API defines functions and types for defining custom pixel formats. You should only use pixel format descriptions if you need to define a custom pixel format.

## Topics

### Creating Format Descriptions

- [CVPixelFormatDescriptionCreateWithPixelFormatType](cvpixelformatdescriptioncreatewithpixelformattype%28____%29.md): Creates a pixel format description from a given `OSType` identifier.
- [CVPixelFormatDescriptionRegisterDescriptionWithPixelFormatType](cvpixelformatdescriptionregisterdescriptionwithpixelformattype%28____%29.md): Registers a pixel format description with Core Video.

### Retrieving Format Descriptions

- [CVPixelFormatDescriptionArrayCreateWithAllPixelFormatTypes](cvpixelformatdescriptionarraycreatewithallpixelformattypes%28__%29.md): Returns all the pixel format descriptions known to Core Video.

### Converting format types

- [CVPixelFormatTypeCopyFourCharCodeString](cvpixelformattypecopyfourcharcodestring%28__%29.md)

### Data Types

- [CVFillExtendedPixelsCallBackData](cvfillextendedpixelscallbackdata.md): A structure for holding information that describes a custom extended pixel fill algorithm.

### Callbacks

- [CVFillExtendedPixelsCallBack](cvfillextendedpixelscallback.md): Defines a pointer to a custom extended pixel-fill function, which is called whenever the system needs to pad a buffer holding your custom pixel format.

### Constants

- [Pixel Format Description Keys](pixel-format-description-keys.md): The attributes of a pixel format.

## See Also

### Data Processing

- [CVBuffer](cvbuffer-nfm.md): An abstract base class that defines how to interact with data buffers.
- [CVImageBuffer](cvimagebuffer-q40.md): An interface for managing different types of image data.
- [CVPixelBuffer](cvpixelbuffer-q2e.md): An image buffer that holds pixels in main memory.
- [CVPixelBufferPool](cvpixelbufferpool-77o.md): A utility object for managing a recyclable set of pixel buffer objects.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffer-q2e](https://developer.apple.com/documentation/corevideo/cvpixelbuffer-q2e)

# CVPixelBuffer (Swift)

**Framework:** Core Video  
**Kind:** API Collection

An image buffer that holds pixels in main memory.

<a id="overview"></a>

## Overview

A Core Video pixel buffer is an image buffer that holds pixels in main memory. Applications generating frames, compressing or decompressing video, or using Core Image can all make use of Core Video pixel buffers.

## Topics

### Creating pixel buffers

- [CVPixelBufferCreate(\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreate%28____________%29.md): Creates a single pixel buffer for a given size and pixel format.
- [CVPixelBufferCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithbytes%28____________________%29.md): Creates a pixel buffer for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md): Creates a single pixel buffer in planar format for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithIOSurface(\_:\_:\_:\_:)](cvpixelbuffercreatewithiosurface%28________%29.md): Creates a single pixel buffer for the IO surface that you specify.

### Inspecting Pixel Buffers

- [CVPixelBufferGetBaseAddress(\_:)](cvpixelbuffergetbaseaddress%28__%29.md): Returns the base address of the pixel buffer.
- [CVPixelBufferGetBaseAddressOfPlane(\_:\_:)](cvpixelbuffergetbaseaddressofplane%28____%29.md): Returns the base address of the plane at the specified plane index.
- [CVPixelBufferGetBytesPerRow(\_:)](cvpixelbuffergetbytesperrow%28__%29.md): Returns the number of bytes per row of the pixel buffer.
- [CVPixelBufferGetBytesPerRowOfPlane(\_:\_:)](cvpixelbuffergetbytesperrowofplane%28____%29.md): Returns the number of bytes per row for a plane at the specified index in the pixel buffer.
- [CVPixelBufferGetHeight(\_:)](cvpixelbuffergetheight%28__%29.md): Returns the height of the pixel buffer.
- [CVPixelBufferGetHeightOfPlane(\_:\_:)](cvpixelbuffergetheightofplane%28____%29.md): Returns the height of the plane at planeIndex in the pixel buffer.
- [CVPixelBufferGetWidth(\_:)](cvpixelbuffergetwidth%28__%29.md): Returns the width of the pixel buffer.
- [CVPixelBufferGetWidthOfPlane(\_:\_:)](cvpixelbuffergetwidthofplane%28____%29.md): Returns the width of the plane at a given index in the pixel buffer.
- [CVPixelBufferIsPlanar(\_:)](cvpixelbufferisplanar%28__%29.md): Determines whether the pixel buffer is planar.
- [CVPixelBufferGetPlaneCount(\_:)](cvpixelbuffergetplanecount%28__%29.md): Returns number of planes of the pixel buffer.
- [CVPixelBufferGetDataSize(\_:)](cvpixelbuffergetdatasize%28__%29.md): Returns the data size for contiguous planes of the pixel buffer.
- [CVPixelBufferGetPixelFormatType(\_:)](cvpixelbuffergetpixelformattype%28__%29.md): Returns the pixel format type of the pixel buffer.
- [CVPixelBufferGetExtendedPixels(\_:\_:\_:\_:\_:)](cvpixelbuffergetextendedpixels%28__________%29.md): Returns the amount of extended pixel padding in the pixel buffer.
- [CVPixelBufferGetIOSurface(\_:)](cvpixelbuffergetiosurface%28__%29.md): Returns the IOSurface backing the pixel buffer, or `NULL` if it is not backed by an IOSurface.
- [CVPixelBufferCreateResolvedAttributesDictionary(\_:\_:\_:)](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md): Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.
- [CVPixelBufferIsCompatibleWithAttributes(\_:\_:)](cvpixelbufferiscompatiblewithattributes%28____%29.md)
- [CVPixelBufferGetTypeID()](cvpixelbuffergettypeid%28%29.md): Returns the Core Foundation type identifier of the pixel buffer type.

### Modifying Pixel Buffers

- [CVPixelBufferFillExtendedPixels(\_:)](cvpixelbufferfillextendedpixels%28__%29.md): Fills the extended pixels of the pixel buffer.
- [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md): Locks the base address of the pixel buffer.
- [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md): Unlocks the base address of the pixel buffer.

### Protocols

- [CVPixelBufferRepresentable](cvpixelbufferrepresentable.md): CVPixelBufferRepresentable protocol is a sealed protocol intended to be implemented by the types in CoreVideo framework. This protocol facilitates Swift types that wrap a value of CVPixelBuffer type.
- [CVPixelBufferAttachmentKeyDefinitions](cvpixelbufferattachmentkeydefinitions.md): A namespace for pixel buffer attachment keys.

### Swift overlay types

- [CVReadOnlyPixelBuffer](cvreadonlypixelbuffer.md): CVReadOnlyPixelBuffer provides an immutable view of the pixel data held by the pixel buffer.
- [CVMutablePixelBuffer](cvmutablepixelbuffer.md): CVMutablePixelBuffer provides read-write access to the pixel data and attachments.
- [CVPixelBufferAttributes](cvpixelbufferattributes.md): A partial set of pixel buffer creation attributes. This struct is useful for conveying partial requirements for pixel buffers to clients. This struct makes all properties of `CVPixelBuffer/CreationAttributes` optional.
- [CVPixelBufferCreationAttributes](cvpixelbuffercreationattributes.md): Attributes needed for creating a pixel buffer.
- [CVPixelBufferPadding](cvpixelbufferpadding.md): Padding pixels around the CVPixelBuffer
- [CVPixelBufferPlaneProperties](cvpixelbufferplaneproperties.md): Properties of a plane of pixels in pixel buffer
- [CVProResRawMetadata](cvproresrawmetadata.md): Metadata associated with ProRes RAW images.

### Data Types

- [CVPixelBuffer](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.

### Callbacks

- [CVPixelBufferReleaseBytesCallback](cvpixelbufferreleasebytescallback.md): A type that defines a release callback function.
- [CVPixelBufferReleasePlanarBytesCallback](cvpixelbufferreleaseplanarbytescallback.md): Defines a pointer to a pixel buffer release callback function, which is called when a pixel buffer created by [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) is released.

### Constants

- [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md): The attributes associated with a pixel buffer.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Data Processing

- [CVBuffer](cvbuffer-nfm.md): An abstract base class that defines how to interact with data buffers.
- [CVImageBuffer](cvimagebuffer-q40.md): An interface for managing different types of image data.
- [CVPixelBufferPool](cvpixelbufferpool-77o.md): A utility object for managing a recyclable set of pixel buffer objects.
- [CVPixelFormatDescription](cvpixelformatdescription-42p.md): An API that provides functions and types for defining custom pixel formats.

# CVPixelBuffer (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

An image buffer that holds pixels in main memory.

<a id="overview"></a>

## Overview

A Core Video pixel buffer is an image buffer that holds pixels in main memory. Applications generating frames, compressing or decompressing video, or using Core Image can all make use of Core Video pixel buffers.

## Topics

### Creating pixel buffers

- [CVPixelBufferCreate](cvpixelbuffercreate%28____________%29.md): Creates a single pixel buffer for a given size and pixel format.
- [CVPixelBufferCreateWithBytes](cvpixelbuffercreatewithbytes%28____________________%29.md): Creates a pixel buffer for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md): Creates a single pixel buffer in planar format for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithIOSurface](cvpixelbuffercreatewithiosurface%28________%29.md): Creates a single pixel buffer for the IO surface that you specify.

### Inspecting Pixel Buffers

- [CVPixelBufferGetBaseAddress](cvpixelbuffergetbaseaddress%28__%29.md): Returns the base address of the pixel buffer.
- [CVPixelBufferGetBaseAddressOfPlane](cvpixelbuffergetbaseaddressofplane%28____%29.md): Returns the base address of the plane at the specified plane index.
- [CVPixelBufferGetBytesPerRow](cvpixelbuffergetbytesperrow%28__%29.md): Returns the number of bytes per row of the pixel buffer.
- [CVPixelBufferGetBytesPerRowOfPlane](cvpixelbuffergetbytesperrowofplane%28____%29.md): Returns the number of bytes per row for a plane at the specified index in the pixel buffer.
- [CVPixelBufferGetHeight](cvpixelbuffergetheight%28__%29.md): Returns the height of the pixel buffer.
- [CVPixelBufferGetHeightOfPlane](cvpixelbuffergetheightofplane%28____%29.md): Returns the height of the plane at planeIndex in the pixel buffer.
- [CVPixelBufferGetWidth](cvpixelbuffergetwidth%28__%29.md): Returns the width of the pixel buffer.
- [CVPixelBufferGetWidthOfPlane](cvpixelbuffergetwidthofplane%28____%29.md): Returns the width of the plane at a given index in the pixel buffer.
- [CVPixelBufferIsPlanar](cvpixelbufferisplanar%28__%29.md): Determines whether the pixel buffer is planar.
- [CVPixelBufferGetPlaneCount](cvpixelbuffergetplanecount%28__%29.md): Returns number of planes of the pixel buffer.
- [CVPixelBufferGetDataSize](cvpixelbuffergetdatasize%28__%29.md): Returns the data size for contiguous planes of the pixel buffer.
- [CVPixelBufferGetPixelFormatType](cvpixelbuffergetpixelformattype%28__%29.md): Returns the pixel format type of the pixel buffer.
- [CVPixelBufferGetExtendedPixels](cvpixelbuffergetextendedpixels%28__________%29.md): Returns the amount of extended pixel padding in the pixel buffer.
- [CVPixelBufferGetIOSurface](cvpixelbuffergetiosurface%28__%29.md): Returns the IOSurface backing the pixel buffer, or `NULL` if it is not backed by an IOSurface.
- [CVPixelBufferCreateResolvedAttributesDictionary](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md): Resolves an array of `CFDictionary` objects describing various pixel buffer attributes into a single dictionary.
- [CVPixelBufferIsCompatibleWithAttributes](cvpixelbufferiscompatiblewithattributes%28____%29.md)
- [CVPixelBufferGetTypeID](cvpixelbuffergettypeid%28%29.md): Returns the Core Foundation type identifier of the pixel buffer type.

### Modifying Pixel Buffers

- [CVPixelBufferFillExtendedPixels](cvpixelbufferfillextendedpixels%28__%29.md): Fills the extended pixels of the pixel buffer.
- [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md): Locks the base address of the pixel buffer.
- [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md): Unlocks the base address of the pixel buffer.

### Retaining and Releasing Pixel Buffers

- [CVPixelBufferRetain](cvpixelbufferretain.md): Retains a pixel buffer.
- [CVPixelBufferRelease](cvpixelbufferrelease.md): Releases a pixel buffer.

### Data Types

- [CVPixelBufferRef](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.

### Callbacks

- [CVPixelBufferReleaseBytesCallback](cvpixelbufferreleasebytescallback.md): A type that defines a release callback function.
- [CVPixelBufferReleasePlanarBytesCallback](cvpixelbufferreleaseplanarbytescallback.md): Defines a pointer to a pixel buffer release callback function, which is called when a pixel buffer created by [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md) is released.

### Constants

- [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md): The attributes associated with a pixel buffer.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Data Processing

- [CVBuffer](cvbuffer-nfm.md): An abstract base class that defines how to interact with data buffers.
- [CVImageBuffer](cvimagebuffer-q40.md): An interface for managing different types of image data.
- [CVPixelBufferPool](cvpixelbufferpool-77o.md): A utility object for managing a recyclable set of pixel buffer objects.
- [CVPixelFormatDescription](cvpixelformatdescription-42p.md): An API that provides functions and types for defining custom pixel formats.

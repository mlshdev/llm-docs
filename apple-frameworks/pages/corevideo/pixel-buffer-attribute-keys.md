> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/pixel-buffer-attribute-keys](https://developer.apple.com/documentation/corevideo/pixel-buffer-attribute-keys)

# Pixel Buffer Attribute Keys (Swift)

**Framework:** Core Video  
**Kind:** API Collection

The attributes associated with a pixel buffer.

<a id="overview"></a>

## Overview

Use the pixel buffer attribute keys to tell Core Video how to allocate pixel buffers for compatibility with client requirements. A pixel buffer attributes dictionary is a Core Foundation dictionary that contains zero or more key-value pairs. You can pass this dictionary to functions such as [CVPixelBufferCreate(\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreate%28____________%29.md) and [CVPixelBufferPoolCreate(\_:\_:\_:\_:)](cvpixelbufferpoolcreate%28________%29.md).

To create an attributes dictionary that’s compatible for multiple clients, pass an array of each client’s attributes dictionary to [CVPixelBufferCreateResolvedAttributesDictionary(\_:\_:\_:)](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md).

## Topics

### Constants

- [kCVPixelBufferMemoryAllocatorKey](kcvpixelbuffermemoryallocatorkey.md): A key to the allocator that the system uses to create the pixel buffer.
- [kCVPixelBufferPixelFormatTypeKey](kcvpixelbufferpixelformattypekey.md): A key to one or more pixel buffer format types.
- [kCVPixelBufferWidthKey](kcvpixelbufferwidthkey.md): A key to the width of the pixel buffer.
- [kCVPixelBufferHeightKey](kcvpixelbufferheightkey.md): A key to the height of the pixel buffer.
- [kCVPixelBufferExtendedPixelsLeftKey](kcvpixelbufferextendedpixelsleftkey.md): A key to the number of pixels padding the left of the image.
- [kCVPixelBufferExtendedPixelsTopKey](kcvpixelbufferextendedpixelstopkey.md): A key to the number of pixels padding the top of the image.
- [kCVPixelBufferExtendedPixelsRightKey](kcvpixelbufferextendedpixelsrightkey.md): A key to the number of pixels padding the right of the image.
- [kCVPixelBufferExtendedPixelsBottomKey](kcvpixelbufferextendedpixelsbottomkey.md): A key to the number of pixels padding the bottom of the image.
- [kCVPixelBufferBytesPerRowAlignmentKey](kcvpixelbufferbytesperrowalignmentkey.md): A key to a number that specifies the alignment of number of bytes per row in the pixel buffer.
- [kCVPixelBufferCGBitmapContextCompatibilityKey](kcvpixelbuffercgbitmapcontextcompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with Core Graphics bitmap contexts.
- [kCVPixelBufferCGImageCompatibilityKey](kcvpixelbuffercgimagecompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with Core Graphics bitmap image types.
- [kCVPixelBufferOpenGLCompatibilityKey](kcvpixelbufferopenglcompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with OpenGL contexts.
- [kCVPixelBufferPlaneAlignmentKey](kcvpixelbufferplanealignmentkey.md): A key to a number that specifies the alignment of the planes in the pixel buffer.
- [kCVPixelBufferIOSurfacePropertiesKey](kcvpixelbufferiosurfacepropertieskey.md): A key to the dictionary containing optional properties for the IOSurface framework.
- [kCVPixelBufferOpenGLESCompatibilityKey](kcvpixelbufferopenglescompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with OpenGL ES contexts.
- [kCVPixelBufferMetalCompatibilityKey](kcvpixelbuffermetalcompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with the Metal framework.
- [kCVPixelBufferIOSurfaceCoreAnimationCompatibilityKey](kcvpixelbufferiosurfacecoreanimationcompatibilitykey.md): A key to a Boolean value that indicates whether Core Animation can display the pixel buffer.
- [kCVPixelBufferIOSurfaceOpenGLFBOCompatibilityKey](kcvpixelbufferiosurfaceopenglfbocompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL can create a valid texture for use as a color buffer attachment.
- [kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey](kcvpixelbufferiosurfaceopenglesfbocompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL ES can create a valid texture for use as a color buffer attachment.
- [kCVPixelBufferIOSurfaceOpenGLTextureCompatibilityKey](kcvpixelbufferiosurfaceopengltexturecompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL can create a valid texture object from the IOSurface-backed pixel buffer.
- [kCVPixelBufferIOSurfaceOpenGLESTextureCompatibilityKey](kcvpixelbufferiosurfaceopenglestexturecompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL ES can create a valid texture object from the IOSurface-backed pixel buffer.
- [kCVPixelBufferOpenGLTextureCacheCompatibilityKey](kcvpixelbufferopengltexturecachecompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL performs format conversions of the texture-cache data in a shader.
- [kCVPixelBufferOpenGLESTextureCacheCompatibilityKey](kcvpixelbufferopenglestexturecachecompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL ES performs format conversions of the texture-cache data in a shader.
- [kCVPixelBufferIOSurfacePurgeableKey](kcvpixelbufferiosurfacepurgeablekey.md)

# Pixel Buffer Attribute Keys (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

The attributes associated with a pixel buffer.

<a id="overview"></a>

## Overview

Use the pixel buffer attribute keys to tell Core Video how to allocate pixel buffers for compatibility with client requirements. A pixel buffer attributes dictionary is a Core Foundation dictionary that contains zero or more key-value pairs. You can pass this dictionary to functions such as [CVPixelBufferCreate](cvpixelbuffercreate%28____________%29.md) and [CVPixelBufferPoolCreate](cvpixelbufferpoolcreate%28________%29.md).

To create an attributes dictionary that’s compatible for multiple clients, pass an array of each client’s attributes dictionary to [CVPixelBufferCreateResolvedAttributesDictionary](cvpixelbuffercreateresolvedattributesdictionary%28______%29.md).

## Topics

### Constants

- [kCVPixelBufferMemoryAllocatorKey](kcvpixelbuffermemoryallocatorkey.md): A key to the allocator that the system uses to create the pixel buffer.
- [kCVPixelBufferPixelFormatTypeKey](kcvpixelbufferpixelformattypekey.md): A key to one or more pixel buffer format types.
- [kCVPixelBufferWidthKey](kcvpixelbufferwidthkey.md): A key to the width of the pixel buffer.
- [kCVPixelBufferHeightKey](kcvpixelbufferheightkey.md): A key to the height of the pixel buffer.
- [kCVPixelBufferExtendedPixelsLeftKey](kcvpixelbufferextendedpixelsleftkey.md): A key to the number of pixels padding the left of the image.
- [kCVPixelBufferExtendedPixelsTopKey](kcvpixelbufferextendedpixelstopkey.md): A key to the number of pixels padding the top of the image.
- [kCVPixelBufferExtendedPixelsRightKey](kcvpixelbufferextendedpixelsrightkey.md): A key to the number of pixels padding the right of the image.
- [kCVPixelBufferExtendedPixelsBottomKey](kcvpixelbufferextendedpixelsbottomkey.md): A key to the number of pixels padding the bottom of the image.
- [kCVPixelBufferBytesPerRowAlignmentKey](kcvpixelbufferbytesperrowalignmentkey.md): A key to a number that specifies the alignment of number of bytes per row in the pixel buffer.
- [kCVPixelBufferCGBitmapContextCompatibilityKey](kcvpixelbuffercgbitmapcontextcompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with Core Graphics bitmap contexts.
- [kCVPixelBufferCGImageCompatibilityKey](kcvpixelbuffercgimagecompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with Core Graphics bitmap image types.
- [kCVPixelBufferOpenGLCompatibilityKey](kcvpixelbufferopenglcompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with OpenGL contexts.
- [kCVPixelBufferPlaneAlignmentKey](kcvpixelbufferplanealignmentkey.md): A key to a number that specifies the alignment of the planes in the pixel buffer.
- [kCVPixelBufferIOSurfacePropertiesKey](kcvpixelbufferiosurfacepropertieskey.md): A key to the dictionary containing optional properties for the IOSurface framework.
- [kCVPixelBufferOpenGLESCompatibilityKey](kcvpixelbufferopenglescompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with OpenGL ES contexts.
- [kCVPixelBufferMetalCompatibilityKey](kcvpixelbuffermetalcompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with the Metal framework.
- [kCVPixelBufferIOSurfaceCoreAnimationCompatibilityKey](kcvpixelbufferiosurfacecoreanimationcompatibilitykey.md): A key to a Boolean value that indicates whether Core Animation can display the pixel buffer.
- [kCVPixelBufferIOSurfaceOpenGLFBOCompatibilityKey](kcvpixelbufferiosurfaceopenglfbocompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL can create a valid texture for use as a color buffer attachment.
- [kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey](kcvpixelbufferiosurfaceopenglesfbocompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL ES can create a valid texture for use as a color buffer attachment.
- [kCVPixelBufferIOSurfaceOpenGLTextureCompatibilityKey](kcvpixelbufferiosurfaceopengltexturecompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL can create a valid texture object from the IOSurface-backed pixel buffer.
- [kCVPixelBufferIOSurfaceOpenGLESTextureCompatibilityKey](kcvpixelbufferiosurfaceopenglestexturecompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL ES can create a valid texture object from the IOSurface-backed pixel buffer.
- [kCVPixelBufferOpenGLTextureCacheCompatibilityKey](kcvpixelbufferopengltexturecachecompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL performs format conversions of the texture-cache data in a shader.
- [kCVPixelBufferOpenGLESTextureCacheCompatibilityKey](kcvpixelbufferopenglestexturecachecompatibilitykey.md): A key to a Boolean value that indicates whether OpenGL ES performs format conversions of the texture-cache data in a shader.
- [kCVPixelBufferIOSurfacePurgeableKey](kcvpixelbufferiosurfacepurgeablekey.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvpixelbufferiosurfaceopenglesfbocompatibilitykey](https://developer.apple.com/documentation/corevideo/kcvpixelbufferiosurfaceopenglesfbocompatibilitykey)

# kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · tvOS 9.0+

A key to a Boolean value that indicates whether OpenGL ES can create a valid texture for use as a color buffer attachment.

## Declaration

```swift
let kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey: CFString
```

<a id="Discussion"></a>

## Discussion

This key indicates whether the texture OpenGL ES creates from the pixel buffer’s underlying IOSurface instance is valid to use as a color buffer attachment to an OpenGL ES frame buffer object.

## See Also

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

# kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · tvOS 9.0+

A key to a Boolean value that indicates whether OpenGL ES can create a valid texture for use as a color buffer attachment.

## Declaration

```objectivec
extern CFStringRef const kCVPixelBufferIOSurfaceOpenGLESFBOCompatibilityKey;
```

<a id="Discussion"></a>

## Discussion

This key indicates whether the texture OpenGL ES creates from the pixel buffer’s underlying IOSurface instance is valid to use as a color buffer attachment to an OpenGL ES frame buffer object.

## See Also

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

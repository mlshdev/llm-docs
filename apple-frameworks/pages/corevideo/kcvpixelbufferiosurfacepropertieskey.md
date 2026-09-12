> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvpixelbufferiosurfacepropertieskey](https://developer.apple.com/documentation/corevideo/kcvpixelbufferiosurfacepropertieskey)

# kCVPixelBufferIOSurfacePropertiesKey (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A key to the dictionary containing optional properties for the IOSurface framework.

## Declaration

```swift
let kCVPixelBufferIOSurfacePropertiesKey: CFString
```

<a id="Discussion"></a>

## Discussion

The value for this key is of type [CFDictionary](../corefoundation/cfdictionary.md). Provide a value for this key if you want Core Video to use the [IOSurface](../iosurface.md) framework to allocate the pixel buffer. Provide an empty dictionary to use the default [IOSurface](../iosurface.md) options.

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
- [kCVPixelBufferOpenGLESCompatibilityKey](kcvpixelbufferopenglescompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with OpenGL ES contexts.
- [kCVPixelBufferMetalCompatibilityKey](kcvpixelbuffermetalcompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with the Metal framework.

# kCVPixelBufferIOSurfacePropertiesKey (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A key to the dictionary containing optional properties for the IOSurface framework.

## Declaration

```objectivec
extern CFStringRef const kCVPixelBufferIOSurfacePropertiesKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is of type [CFDictionaryRef](../corefoundation/cfdictionary.md). Provide a value for this key if you want Core Video to use the [IOSurface](../iosurface.md) framework to allocate the pixel buffer. Provide an empty dictionary to use the default [IOSurface](../iosurface.md) options.

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
- [kCVPixelBufferOpenGLESCompatibilityKey](kcvpixelbufferopenglescompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with OpenGL ES contexts.
- [kCVPixelBufferMetalCompatibilityKey](kcvpixelbuffermetalcompatibilitykey.md): A key to a Boolean value that indicates whether the pixel buffer is compatible with the Metal framework.

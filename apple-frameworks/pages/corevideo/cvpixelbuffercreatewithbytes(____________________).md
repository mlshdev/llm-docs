> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffercreatewithbytes(_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbuffercreatewithbytes(_:_:_:_:_:_:_:_:_:_:))

# CVPixelBufferCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a pixel buffer for a given size and pixel format containing data specified by a memory location.

## Declaration

```swift
func CVPixelBufferCreateWithBytes(_ allocator: CFAllocator?, _ width: Int, _ height: Int, _ pixelFormatType: OSType, _ baseAddress: UnsafeMutableRawPointer, _ bytesPerRow: Int, _ releaseCallback: CVPixelBufferReleaseBytesCallback?, _ releaseRefCon: UnsafeMutableRawPointer?, _ pixelBufferAttributes: CFDictionary?, _ pixelBufferOut: UnsafeMutablePointer<CVPixelBuffer?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) for the `allocator` parameter to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `width`: The width of the pixel buffer, in pixels.
- `height`: The height of the pixel buffer, in pixels.
- `pixelFormatType`: The pixel format identified by its respective four character code (type `OSType`).
- `baseAddress`: A pointer to the base address of the memory storing the pixels.
- `bytesPerRow`: The row bytes of the pixel storage memory.
- `releaseCallback`: The callback function to be called when the pixel buffer is destroyed. This callback allows the owner of the pixels to free the memory. See [CVPixelBufferReleaseBytesCallback](cvpixelbufferreleasebytescallback.md) for more information.
- `releaseRefCon`: The user data identifying the pixel buffer. This value is passed to your pixel buffer release callback.
- `pixelBufferAttributes`: A Core Foundation dictionary with additional attributes for a pixel buffer. This parameter is optional. See [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md) for more details.
- `pixelBufferOut`: On output, the newly created pixel buffer. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

Some of the parameters specified in this call override equivalent pixel buffer attributes. For example, if you define the `kCVPixelBufferWidth` and `kCVPixelBufferHeight` keys in the pixel buffer attributes parameter (`pixelBufferAttributes`), these values are overridden by the `width` and `height` parameters.

## See Also

### Creating pixel buffers

- [CVPixelBufferCreate(\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreate%28____________%29.md): Creates a single pixel buffer for a given size and pixel format.
- [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md): Creates a single pixel buffer in planar format for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithIOSurface(\_:\_:\_:\_:)](cvpixelbuffercreatewithiosurface%28________%29.md): Creates a single pixel buffer for the IO surface that you specify.

# CVPixelBufferCreateWithBytes (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a pixel buffer for a given size and pixel format containing data specified by a memory location.

## Declaration

```objectivec
extern CVReturn CVPixelBufferCreateWithBytes(CFAllocatorRef allocator, size_t width, size_t height, OSType pixelFormatType, void *baseAddress, size_t bytesPerRow, CVPixelBufferReleaseBytesCallback releaseCallback, void *releaseRefCon, CFDictionaryRef pixelBufferAttributes, CVPixelBufferRef*pixelBufferOut);
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) for the `allocator` parameter to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `width`: The width of the pixel buffer, in pixels.
- `height`: The height of the pixel buffer, in pixels.
- `pixelFormatType`: The pixel format identified by its respective four character code (type `OSType`).
- `baseAddress`: A pointer to the base address of the memory storing the pixels.
- `bytesPerRow`: The row bytes of the pixel storage memory.
- `releaseCallback`: The callback function to be called when the pixel buffer is destroyed. This callback allows the owner of the pixels to free the memory. See [CVPixelBufferReleaseBytesCallback](cvpixelbufferreleasebytescallback.md) for more information.
- `releaseRefCon`: The user data identifying the pixel buffer. This value is passed to your pixel buffer release callback.
- `pixelBufferAttributes`: A Core Foundation dictionary with additional attributes for a pixel buffer. This parameter is optional. See [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md) for more details.
- `pixelBufferOut`: On output, the newly created pixel buffer. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

Some of the parameters specified in this call override equivalent pixel buffer attributes. For example, if you define the `kCVPixelBufferWidth` and `kCVPixelBufferHeight` keys in the pixel buffer attributes parameter (`pixelBufferAttributes`), these values are overridden by the `width` and `height` parameters.

## See Also

### Creating pixel buffers

- [CVPixelBufferCreate](cvpixelbuffercreate%28____________%29.md): Creates a single pixel buffer for a given size and pixel format.
- [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md): Creates a single pixel buffer in planar format for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithIOSurface](cvpixelbuffercreatewithiosurface%28________%29.md): Creates a single pixel buffer for the IO surface that you specify.

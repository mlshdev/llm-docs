> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffercreate(_:_:_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbuffercreate(_:_:_:_:_:_:))

# CVPixelBufferCreate(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a single pixel buffer for a given size and pixel format.

## Declaration

```swift
func CVPixelBufferCreate(_ allocator: CFAllocator?, _ width: Int, _ height: Int, _ pixelFormatType: OSType, _ pixelBufferAttributes: CFDictionary?, _ pixelBufferOut: UnsafeMutablePointer<CVPixelBuffer?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) for the `allocator` parameter to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `width`: The width of the pixel buffer, in pixels.
- `height`: The height of the pixel buffer, in pixels.
- `pixelFormatType`: The pixel format identified by its four-character code.
- `pixelBufferAttributes`: An optional dictionary that contains the attributes for the pixel buffer. See [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md) for possible values.
- `pixelBufferOut`: On output, the newly created pixel buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

Some of the parameters specified in this function override equivalent pixel buffer attributes. For example, if you set values for the [kCVPixelBufferWidthKey](kcvpixelbufferwidthkey.md) and [kCVPixelBufferHeightKey](kcvpixelbufferheightkey.md) keys in the `pixelBufferAttributes` dictionary, the values for the `width` and `height` parameters override the values in the dictionary.

Use [CVPixelBufferRelease](cvpixelbufferrelease.md) to release ownership of the `pixelBufferOut` object when you’re done with it.

> **Tip**

>  If you need to create and release multiple pixel buffers, use `CVPixelBufferPool` to create a pixel buffer pool that efficiently reuses pixel buffer memory.

## See Also

### Creating pixel buffers

- [CVPixelBufferCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithbytes%28____________________%29.md): Creates a pixel buffer for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md): Creates a single pixel buffer in planar format for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithIOSurface(\_:\_:\_:\_:)](cvpixelbuffercreatewithiosurface%28________%29.md): Creates a single pixel buffer for the IO surface that you specify.

# CVPixelBufferCreate (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a single pixel buffer for a given size and pixel format.

## Declaration

```objectivec
extern CVReturn CVPixelBufferCreate(CFAllocatorRef allocator, size_t width, size_t height, OSType pixelFormatType, CFDictionaryRef pixelBufferAttributes, CVPixelBufferRef*pixelBufferOut);
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) for the `allocator` parameter to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `width`: The width of the pixel buffer, in pixels.
- `height`: The height of the pixel buffer, in pixels.
- `pixelFormatType`: The pixel format identified by its four-character code.
- `pixelBufferAttributes`: An optional dictionary that contains the attributes for the pixel buffer. See [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md) for possible values.
- `pixelBufferOut`: On output, the newly created pixel buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

Some of the parameters specified in this function override equivalent pixel buffer attributes. For example, if you set values for the [kCVPixelBufferWidthKey](kcvpixelbufferwidthkey.md) and [kCVPixelBufferHeightKey](kcvpixelbufferheightkey.md) keys in the `pixelBufferAttributes` dictionary, the values for the `width` and `height` parameters override the values in the dictionary.

Use [CVPixelBufferRelease](cvpixelbufferrelease.md) to release ownership of the `pixelBufferOut` object when you’re done with it.

> **Tip**

>  If you need to create and release multiple pixel buffers, use `CVPixelBufferPool` to create a pixel buffer pool that efficiently reuses pixel buffer memory.

## See Also

### Creating pixel buffers

- [CVPixelBufferCreateWithBytes](cvpixelbuffercreatewithbytes%28____________________%29.md): Creates a pixel buffer for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md): Creates a single pixel buffer in planar format for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithIOSurface](cvpixelbuffercreatewithiosurface%28________%29.md): Creates a single pixel buffer for the IO surface that you specify.

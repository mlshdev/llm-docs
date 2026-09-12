> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffercreatewithiosurface(_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbuffercreatewithiosurface(_:_:_:_:))

# CVPixelBufferCreateWithIOSurface(\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Creates a single pixel buffer for the IO surface that you specify.

## Declaration

```swift
func CVPixelBufferCreateWithIOSurface(_ allocator: CFAllocator?, _ surface: IOSurfaceRef, _ pixelBufferAttributes: CFDictionary?, _ pixelBufferOut: UnsafeMutablePointer<Unmanaged<CVPixelBuffer>?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) for the `allocator` parameter to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `surface`: The IOSurface to use in the pixel buffer.
- `pixelBufferAttributes`: An optional dictionary that contains the attributes for the pixel buffer. See [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md) for possible values.
- `pixelBufferOut`: On output, the newly created pixel buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

Use [CVPixelBufferRelease](cvpixelbufferrelease.md) to release ownership of the `pixelBufferOut` object when you’re done with it.

> **Important**

>  If you are using IOSurface to share CVPixelBuffers between processes and those CVPixelBuffers are allocated via a CVPixelBufferPool, it is important that the CVPixelBufferPool does not reuse CVPixelBuffers whose IOSurfaces are still in use in other processes.
>
> CoreVideo and IOSurface will take care of this for if you use IOSurfaceCreateMachPort and IOSurfaceLookupFromMachPort, but NOT if you pass IOSurfaceIDs.

## See Also

### Creating pixel buffers

- [CVPixelBufferCreate(\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreate%28____________%29.md): Creates a single pixel buffer for a given size and pixel format.
- [CVPixelBufferCreateWithBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithbytes%28____________________%29.md): Creates a pixel buffer for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithPlanarBytes(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md): Creates a single pixel buffer in planar format for a given size and pixel format containing data specified by a memory location.

# CVPixelBufferCreateWithIOSurface (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Creates a single pixel buffer for the IO surface that you specify.

## Declaration

```objectivec
extern CVReturn CVPixelBufferCreateWithIOSurface(CFAllocatorRef allocator, IOSurfaceRef surface, CFDictionaryRef pixelBufferAttributes, CVPixelBufferRef*pixelBufferOut);
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) for the `allocator` parameter to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `surface`: The IOSurface to use in the pixel buffer.
- `pixelBufferAttributes`: An optional dictionary that contains the attributes for the pixel buffer. See [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md) for possible values.
- `pixelBufferOut`: On output, the newly created pixel buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

Use [CVPixelBufferRelease](cvpixelbufferrelease.md) to release ownership of the `pixelBufferOut` object when you’re done with it.

> **Important**

>  If you are using IOSurface to share CVPixelBuffers between processes and those CVPixelBuffers are allocated via a CVPixelBufferPool, it is important that the CVPixelBufferPool does not reuse CVPixelBuffers whose IOSurfaces are still in use in other processes.
>
> CoreVideo and IOSurface will take care of this for if you use IOSurfaceCreateMachPort and IOSurfaceLookupFromMachPort, but NOT if you pass IOSurfaceIDs.

## See Also

### Creating pixel buffers

- [CVPixelBufferCreate](cvpixelbuffercreate%28____________%29.md): Creates a single pixel buffer for a given size and pixel format.
- [CVPixelBufferCreateWithBytes](cvpixelbuffercreatewithbytes%28____________________%29.md): Creates a pixel buffer for a given size and pixel format containing data specified by a memory location.
- [CVPixelBufferCreateWithPlanarBytes](cvpixelbuffercreatewithplanarbytes%28______________________________%29.md): Creates a single pixel buffer in planar format for a given size and pixel format containing data specified by a memory location.

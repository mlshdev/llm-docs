> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolcreatepixelbuffer(_:_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolcreatepixelbuffer(_:_:_:))

# CVPixelBufferPoolCreatePixelBuffer(\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a pixel buffer from a pixel buffer pool, using the allocator that you specify.

## Declaration

```swift
func CVPixelBufferPoolCreatePixelBuffer(_ allocator: CFAllocator?, _ pixelBufferPool: CVPixelBufferPool, _ pixelBufferOut: UnsafeMutablePointer<CVPixelBuffer?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use for creating the pixel buffer. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `pixelBufferPool`: The pixel buffer pool for creating the new pixel buffer.
- `pixelBufferOut`: On output, the newly created pixel buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

This function creates a new pixel buffer using the pixel buffer attributes specified during pool creation. This buffer has default attachments as specified in the `pixelBufferAttributes` parameter of [CVPixelBufferPoolCreate(\_:\_:\_:\_:)](cvpixelbufferpoolcreate%28________%29.md), using either the [kCVBufferPropagatedAttachmentsKey](kcvbufferpropagatedattachmentskey.md) or [kCVBufferNonPropagatedAttachmentsKey](kcvbuffernonpropagatedattachmentskey.md) attributes.

## See Also

### Creating pools

- [CVPixelBufferPoolCreate(\_:\_:\_:\_:)](cvpixelbufferpoolcreate%28________%29.md): Creates a pixel buffer pool using the allocator and attributes that you specify.
- [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:)](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md): Creates a new pixel buffer with auxiliary attributes from the pool.

# CVPixelBufferPoolCreatePixelBuffer (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a pixel buffer from a pixel buffer pool, using the allocator that you specify.

## Declaration

```objectivec
extern CVReturn CVPixelBufferPoolCreatePixelBuffer(CFAllocatorRef allocator, CVPixelBufferPoolRef pixelBufferPool, CVPixelBufferRef*pixelBufferOut);
```

## Parameters

- `allocator`: The allocator to use for creating the pixel buffer. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `pixelBufferPool`: The pixel buffer pool for creating the new pixel buffer.
- `pixelBufferOut`: On output, the newly created pixel buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

This function creates a new pixel buffer using the pixel buffer attributes specified during pool creation. This buffer has default attachments as specified in the `pixelBufferAttributes` parameter of [CVPixelBufferPoolCreate](cvpixelbufferpoolcreate%28________%29.md), using either the [kCVBufferPropagatedAttachmentsKey](kcvbufferpropagatedattachmentskey.md) or [kCVBufferNonPropagatedAttachmentsKey](kcvbuffernonpropagatedattachmentskey.md) attributes.

## See Also

### Creating pools

- [CVPixelBufferPoolCreate](cvpixelbufferpoolcreate%28________%29.md): Creates a pixel buffer pool using the allocator and attributes that you specify.
- [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md): Creates a new pixel buffer with auxiliary attributes from the pool.

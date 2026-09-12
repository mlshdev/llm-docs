> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolcreatepixelbufferwithauxattributes(_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolcreatepixelbufferwithauxattributes(_:_:_:_:))

# CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new pixel buffer with auxiliary attributes from the pool.

## Declaration

```swift
func CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(_ allocator: CFAllocator?, _ pixelBufferPool: CVPixelBufferPool, _ auxAttributes: CFDictionary?, _ pixelBufferOut: UnsafeMutablePointer<CVPixelBuffer?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `pixelBufferPool`: The pixel buffer pool for creating the new pixel buffer.
- `auxAttributes`: An optional dictionary of auxiliary attributes that describes the allocation request. See the Constants topic group below for possible values.
- `pixelBufferOut`: On output, the newly created pixel buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

This function creates a new [CVPixelBuffer](cvpixelbuffer.md) object using the pixel buffer attributes specified during pool creation and the attributes specified in the `auxAttributes` parameter.

## See Also

### Creating pools

- [CVPixelBufferPoolCreate(\_:\_:\_:\_:)](cvpixelbufferpoolcreate%28________%29.md): Creates a pixel buffer pool using the allocator and attributes that you specify.
- [CVPixelBufferPoolCreatePixelBuffer(\_:\_:\_:)](cvpixelbufferpoolcreatepixelbuffer%28______%29.md): Creates a pixel buffer from a pixel buffer pool, using the allocator that you specify.

# CVPixelBufferPoolCreatePixelBufferWithAuxAttributes (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new pixel buffer with auxiliary attributes from the pool.

## Declaration

```objectivec
extern CVReturn CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(CFAllocatorRef allocator, CVPixelBufferPoolRef pixelBufferPool, CFDictionaryRef auxAttributes, CVPixelBufferRef*pixelBufferOut);
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `pixelBufferPool`: The pixel buffer pool for creating the new pixel buffer.
- `auxAttributes`: An optional dictionary of auxiliary attributes that describes the allocation request. See the Constants topic group below for possible values.
- `pixelBufferOut`: On output, the newly created pixel buffer.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

This function creates a new [CVPixelBufferRef](cvpixelbuffer.md) object using the pixel buffer attributes specified during pool creation and the attributes specified in the `auxAttributes` parameter.

## See Also

### Creating pools

- [CVPixelBufferPoolCreate](cvpixelbufferpoolcreate%28________%29.md): Creates a pixel buffer pool using the allocator and attributes that you specify.
- [CVPixelBufferPoolCreatePixelBuffer](cvpixelbufferpoolcreatepixelbuffer%28______%29.md): Creates a pixel buffer from a pixel buffer pool, using the allocator that you specify.

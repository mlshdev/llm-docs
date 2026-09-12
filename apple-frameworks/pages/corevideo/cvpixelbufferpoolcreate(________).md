> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolcreate(_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolcreate(_:_:_:_:))

# CVPixelBufferPoolCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a pixel buffer pool using the allocator and attributes that you specify.

## Declaration

```swift
func CVPixelBufferPoolCreate(_ allocator: CFAllocator?, _ poolAttributes: CFDictionary?, _ pixelBufferAttributes: CFDictionary?, _ poolOut: UnsafeMutablePointer<CVPixelBufferPool?>) -> CVReturn
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `poolAttributes`: A Core Foundation dictionary that contains the attributes for the pixel buffer pool. See the Constants topic group below for possible values.
- `pixelBufferAttributes`: An optional dictionary that contains the attributes to use to create new pixel buffers within the pool. See [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md) for possible values.
- `poolOut`: On output, the newly created pixel buffer pool.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

Use [CVPixelBufferPoolRelease](cvpixelbufferpoolrelease.md) to release ownership of the `poolOut` object when you’re done with it.

## See Also

### Creating pools

- [CVPixelBufferPoolCreatePixelBuffer(\_:\_:\_:)](cvpixelbufferpoolcreatepixelbuffer%28______%29.md): Creates a pixel buffer from a pixel buffer pool, using the allocator that you specify.
- [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes(\_:\_:\_:\_:)](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md): Creates a new pixel buffer with auxiliary attributes from the pool.

# CVPixelBufferPoolCreate (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a pixel buffer pool using the allocator and attributes that you specify.

## Declaration

```objectivec
extern CVReturn CVPixelBufferPoolCreate(CFAllocatorRef allocator, CFDictionaryRef poolAttributes, CFDictionaryRef pixelBufferAttributes, CVPixelBufferPoolRef*poolOut);
```

## Parameters

- `allocator`: The allocator to use for creating the buffer pool. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator. See [Predefined Allocators](../corefoundation/predefined-allocators.md) for additional values you can use.
- `poolAttributes`: A Core Foundation dictionary that contains the attributes for the pixel buffer pool. See the Constants topic group below for possible values.
- `pixelBufferAttributes`: An optional dictionary that contains the attributes to use to create new pixel buffers within the pool. See [Pixel Buffer Attribute Keys](pixel-buffer-attribute-keys.md) for possible values.
- `poolOut`: On output, the newly created pixel buffer pool.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Result Codes](result-codes.md) for possible values.

<a id="Discussion"></a>

## Discussion

Use [CVPixelBufferPoolRelease](cvpixelbufferpoolrelease.md) to release ownership of the `poolOut` object when you’re done with it.

## See Also

### Creating pools

- [CVPixelBufferPoolCreatePixelBuffer](cvpixelbufferpoolcreatepixelbuffer%28______%29.md): Creates a pixel buffer from a pixel buffer pool, using the allocator that you specify.
- [CVPixelBufferPoolCreatePixelBufferWithAuxAttributes](cvpixelbufferpoolcreatepixelbufferwithauxattributes%28________%29.md): Creates a new pixel buffer with auxiliary attributes from the pool.

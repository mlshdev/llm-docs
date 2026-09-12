> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetalbuffercachecreate(_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvmetalbuffercachecreate(_:_:_:_:))

# CVMetalBufferCacheCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func CVMetalBufferCacheCreate(_ allocator: CFAllocator?, _ cacheAttributes: CFDictionary?, _ metalDevice: any MTLDevice, _ cacheOut: UnsafeMutablePointer<CVMetalBufferCache?>) -> CVReturn
```

## Parameters

- `allocator`: The CFAllocatorRef to use for allocating the cache.  May be NULL.
- `cacheAttributes`: A CFDictionaryRef containing the attributes of the cache itself. May be NULL.
- `metalDevice`: The Metal device for which the buffer objects will be created.
- `cacheOut`: The newly created buffer cache will be placed here

<a id="return-value"></a>

## Return Value

Returns kCVReturnSuccess on success

<a id="discussion"></a>

## Discussion

Creates a new Buffer Cache.

## See Also

### Functions

- [CVMetalBufferCacheCreateBufferFromImage(\_:\_:\_:\_:)](cvmetalbuffercachecreatebufferfromimage%28________%29.md)
- [CVMetalBufferCacheFlush(\_:\_:)](cvmetalbuffercacheflush%28____%29.md)
- [CVMetalBufferCacheGetTypeID()](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetBuffer(\_:)](cvmetalbuffergetbuffer%28__%29.md)
- [CVMetalBufferGetTypeID()](cvmetalbuffergettypeid%28%29.md)

# CVMetalBufferCacheCreate (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern CVReturn CVMetalBufferCacheCreate(CFAllocatorRef allocator, CFDictionaryRef cacheAttributes, id<MTLDevice>metalDevice, CVMetalBufferCacheRef*cacheOut);
```

## Parameters

- `allocator`: The CFAllocatorRef to use for allocating the cache.  May be NULL.
- `cacheAttributes`: A CFDictionaryRef containing the attributes of the cache itself. May be NULL.
- `metalDevice`: The Metal device for which the buffer objects will be created.
- `cacheOut`: The newly created buffer cache will be placed here

<a id="return-value"></a>

## Return Value

Returns kCVReturnSuccess on success

<a id="discussion"></a>

## Discussion

Creates a new Buffer Cache.

## See Also

### Functions

- [CVMetalBufferCacheCreateBufferFromImage](cvmetalbuffercachecreatebufferfromimage%28________%29.md)
- [CVMetalBufferCacheFlush](cvmetalbuffercacheflush%28____%29.md)
- [CVMetalBufferCacheGetTypeID](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetBuffer](cvmetalbuffergetbuffer%28__%29.md)
- [CVMetalBufferGetTypeID](cvmetalbuffergettypeid%28%29.md)

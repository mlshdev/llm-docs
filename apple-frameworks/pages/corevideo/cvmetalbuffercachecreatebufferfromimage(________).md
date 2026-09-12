> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetalbuffercachecreatebufferfromimage(_:_:_:_:)](https://developer.apple.com/documentation/corevideo/cvmetalbuffercachecreatebufferfromimage(_:_:_:_:))

# CVMetalBufferCacheCreateBufferFromImage(\_:\_:\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func CVMetalBufferCacheCreateBufferFromImage(_ allocator: CFAllocator?, _ bufferCache: CVMetalBufferCache, _ imageBuffer: CVImageBuffer, _ bufferOut: UnsafeMutablePointer<CVMetalBuffer?>) -> CVReturn
```

## Parameters

- `allocator`: The CFAllocatorRef to use for allocating the CVMetalBuffer object. May be NULL.
- `bufferCache`: The buffer cache object that will manage the buffer.
- `bufferOut`: The newly created buffer object will be placed here.

<a id="return-value"></a>

## Return Value

Returns kCVReturnSuccess on success

<a id="discussion"></a>

## Discussion

Creates a CVMetalBuffer object from an existing CVImageBuffer

Creates or returns a cached CVMetalBuffer object mapped to the CVImageBuffer. This creates a live binding between the CVImageBuffer and underlying CVMetalBuffer buffer object.

```
        IMPORTANT NOTE: Clients should retain CVMetalBuffer objects until they are done using the images in them.
        Retaining a CVMetalBuffer is your way to indicate that you're still using the image in the buffer, and that it should not be recycled yet.
```

## See Also

### Functions

- [CVMetalBufferCacheCreate(\_:\_:\_:\_:)](cvmetalbuffercachecreate%28________%29.md)
- [CVMetalBufferCacheFlush(\_:\_:)](cvmetalbuffercacheflush%28____%29.md)
- [CVMetalBufferCacheGetTypeID()](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetBuffer(\_:)](cvmetalbuffergetbuffer%28__%29.md)
- [CVMetalBufferGetTypeID()](cvmetalbuffergettypeid%28%29.md)

# CVMetalBufferCacheCreateBufferFromImage (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern CVReturn CVMetalBufferCacheCreateBufferFromImage(CFAllocatorRef allocator, CVMetalBufferCacheRef bufferCache, CVImageBufferRef imageBuffer, CVMetalBufferRef*bufferOut);
```

## Parameters

- `allocator`: The CFAllocatorRef to use for allocating the CVMetalBuffer object. May be NULL.
- `bufferCache`: The buffer cache object that will manage the buffer.
- `bufferOut`: The newly created buffer object will be placed here.

<a id="return-value"></a>

## Return Value

Returns kCVReturnSuccess on success

<a id="discussion"></a>

## Discussion

Creates a CVMetalBuffer object from an existing CVImageBuffer

Creates or returns a cached CVMetalBuffer object mapped to the CVImageBuffer. This creates a live binding between the CVImageBuffer and underlying CVMetalBuffer buffer object.

```
        IMPORTANT NOTE: Clients should retain CVMetalBuffer objects until they are done using the images in them.
        Retaining a CVMetalBuffer is your way to indicate that you're still using the image in the buffer, and that it should not be recycled yet.
```

## See Also

### Functions

- [CVMetalBufferCacheCreate](cvmetalbuffercachecreate%28________%29.md)
- [CVMetalBufferCacheFlush](cvmetalbuffercacheflush%28____%29.md)
- [CVMetalBufferCacheGetTypeID](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetBuffer](cvmetalbuffergetbuffer%28__%29.md)
- [CVMetalBufferGetTypeID](cvmetalbuffergettypeid%28%29.md)

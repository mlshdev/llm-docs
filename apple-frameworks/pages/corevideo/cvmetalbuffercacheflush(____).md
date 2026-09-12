> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetalbuffercacheflush(_:_:)](https://developer.apple.com/documentation/corevideo/cvmetalbuffercacheflush(_:_:))

# CVMetalBufferCacheFlush(\_:\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func CVMetalBufferCacheFlush(_ bufferCache: CVMetalBufferCache, _ options: CVOptionFlags)
```

## Parameters

- `bufferCache`: The buffer cache object to flush
- `options`: Currently unused, set to 0.

<a id="discussion"></a>

## Discussion

Performs internal housekeeping/recycling operations

This call must be made periodically to give the buffer cache a chance to do internal housekeeping operations.

## See Also

### Functions

- [CVMetalBufferCacheCreate(\_:\_:\_:\_:)](cvmetalbuffercachecreate%28________%29.md)
- [CVMetalBufferCacheCreateBufferFromImage(\_:\_:\_:\_:)](cvmetalbuffercachecreatebufferfromimage%28________%29.md)
- [CVMetalBufferCacheGetTypeID()](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetBuffer(\_:)](cvmetalbuffergetbuffer%28__%29.md)
- [CVMetalBufferGetTypeID()](cvmetalbuffergettypeid%28%29.md)

# CVMetalBufferCacheFlush (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern void CVMetalBufferCacheFlush(CVMetalBufferCacheRef bufferCache, CVOptionFlags options);
```

## Parameters

- `bufferCache`: The buffer cache object to flush
- `options`: Currently unused, set to 0.

<a id="discussion"></a>

## Discussion

Performs internal housekeeping/recycling operations

This call must be made periodically to give the buffer cache a chance to do internal housekeeping operations.

## See Also

### Functions

- [CVMetalBufferCacheCreate](cvmetalbuffercachecreate%28________%29.md)
- [CVMetalBufferCacheCreateBufferFromImage](cvmetalbuffercachecreatebufferfromimage%28________%29.md)
- [CVMetalBufferCacheGetTypeID](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetBuffer](cvmetalbuffergetbuffer%28__%29.md)
- [CVMetalBufferGetTypeID](cvmetalbuffergettypeid%28%29.md)

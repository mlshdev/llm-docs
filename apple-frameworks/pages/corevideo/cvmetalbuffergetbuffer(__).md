> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetalbuffergetbuffer(_:)](https://developer.apple.com/documentation/corevideo/cvmetalbuffergetbuffer(_:))

# CVMetalBufferGetBuffer(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func CVMetalBufferGetBuffer(_ buffer: CVMetalBuffer) -> (any MTLBuffer)?
```

## Parameters

- `buffer`: Target CVMetalBuffer

<a id="return-value"></a>

## Return Value

Metal buffer

<a id="discussion"></a>

## Discussion

Returns the Metal MTLBuffer object of the CVMetalBufferRef

## See Also

### Functions

- [CVMetalBufferCacheCreate(\_:\_:\_:\_:)](cvmetalbuffercachecreate%28________%29.md)
- [CVMetalBufferCacheCreateBufferFromImage(\_:\_:\_:\_:)](cvmetalbuffercachecreatebufferfromimage%28________%29.md)
- [CVMetalBufferCacheFlush(\_:\_:)](cvmetalbuffercacheflush%28____%29.md)
- [CVMetalBufferCacheGetTypeID()](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetTypeID()](cvmetalbuffergettypeid%28%29.md)

# CVMetalBufferGetBuffer (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern id<MTLBuffer>CVMetalBufferGetBuffer(CVMetalBufferRef buffer);
```

## Parameters

- `buffer`: Target CVMetalBuffer

<a id="return-value"></a>

## Return Value

Metal buffer

<a id="discussion"></a>

## Discussion

Returns the Metal MTLBuffer object of the CVMetalBufferRef

## See Also

### Functions

- [CVMetalBufferCacheCreate](cvmetalbuffercachecreate%28________%29.md)
- [CVMetalBufferCacheCreateBufferFromImage](cvmetalbuffercachecreatebufferfromimage%28________%29.md)
- [CVMetalBufferCacheFlush](cvmetalbuffercacheflush%28____%29.md)
- [CVMetalBufferCacheGetTypeID](cvmetalbuffercachegettypeid%28%29.md)
- [CVMetalBufferGetTypeID](cvmetalbuffergettypeid%28%29.md)

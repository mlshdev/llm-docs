> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferisvalid(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebufferisvalid(_:))

# CMSampleBufferIsValid(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a sample buffer is valid.

## Declaration

```swift
func CMSampleBufferIsValid(_ sbuf: CMSampleBuffer) -> Bool
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the sample buffer is still valid.

<a id="Discussion"></a>

## Discussion

Returns false if `sbuf` is `NULL` or `CMSampleBufferInvalidate` was called, true otherwise. Doesn’t perform any kind of exhaustive validation of the sample buffer.

## See Also

### Invalidating Sample Buffers

- [CMSampleBufferSetInvalidateHandler(\_:invalidateHandler:)](cmsamplebuffersetinvalidatehandler%28__invalidatehandler_%29.md): Sets the sample buffer’s invalidation handler.
- [CMSampleBufferInvalidate(\_:)](cmsamplebufferinvalidate%28__%29.md): Invalidates a sample buffer by calling its invalidation callback.
- [CMSampleBufferSetInvalidateCallback(\_:callback:refcon:)](cmsamplebuffersetinvalidatecallback%28__callback_refcon_%29.md): Sets the sample buffer’s invalidation callback.

# CMSampleBufferIsValid (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a sample buffer is valid.

## Declaration

```objectivec
extern Boolean CMSampleBufferIsValid(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the sample buffer is still valid.

<a id="Discussion"></a>

## Discussion

Returns false if `sbuf` is `NULL` or `CMSampleBufferInvalidate` was called, true otherwise. Doesn’t perform any kind of exhaustive validation of the sample buffer.

## See Also

### Invalidating Sample Buffers

- [CMSampleBufferSetInvalidateHandler](cmsamplebuffersetinvalidatehandler%28__invalidatehandler_%29.md): Sets the sample buffer’s invalidation handler.
- [CMSampleBufferInvalidate](cmsamplebufferinvalidate%28__%29.md): Invalidates a sample buffer by calling its invalidation callback.
- [CMSampleBufferSetInvalidateCallback](cmsamplebuffersetinvalidatecallback%28__callback_refcon_%29.md): Sets the sample buffer’s invalidation callback.

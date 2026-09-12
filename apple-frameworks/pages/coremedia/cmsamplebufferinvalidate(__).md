> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferinvalidate(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebufferinvalidate(_:))

# CMSampleBufferInvalidate(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Invalidates a sample buffer by calling its invalidation callback.

## Declaration

```swift
func CMSampleBufferInvalidate(_ sbuf: CMSampleBuffer) -> OSStatus
```

## Parameters

- `sbuf`: The sample buffer to invalidate.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

An invalid sample buffer can’t be used — all accessors will return [kCMSampleBufferError_Invalidated](kcmsamplebuffererror_invalidated.md).

> **Important**

>  You shouldn’t invalidate a sample buffer that another module may be accessing concurrently.

## See Also

### Invalidating Sample Buffers

- [CMSampleBufferSetInvalidateHandler(\_:invalidateHandler:)](cmsamplebuffersetinvalidatehandler%28__invalidatehandler_%29.md): Sets the sample buffer’s invalidation handler.
- [CMSampleBufferIsValid(\_:)](cmsamplebufferisvalid%28__%29.md): Returns a Boolean value that indicates whether a sample buffer is valid.
- [CMSampleBufferSetInvalidateCallback(\_:callback:refcon:)](cmsamplebuffersetinvalidatecallback%28__callback_refcon_%29.md): Sets the sample buffer’s invalidation callback.

# CMSampleBufferInvalidate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Invalidates a sample buffer by calling its invalidation callback.

## Declaration

```objectivec
extern OSStatus CMSampleBufferInvalidate(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The sample buffer to invalidate.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

An invalid sample buffer can’t be used — all accessors will return [kCMSampleBufferError_Invalidated](kcmsamplebuffererror_invalidated.md).

> **Important**

>  You shouldn’t invalidate a sample buffer that another module may be accessing concurrently.

## See Also

### Invalidating Sample Buffers

- [CMSampleBufferSetInvalidateHandler](cmsamplebuffersetinvalidatehandler%28__invalidatehandler_%29.md): Sets the sample buffer’s invalidation handler.
- [CMSampleBufferIsValid](cmsamplebufferisvalid%28__%29.md): Returns a Boolean value that indicates whether a sample buffer is valid.
- [CMSampleBufferSetInvalidateCallback](cmsamplebuffersetinvalidatecallback%28__callback_refcon_%29.md): Sets the sample buffer’s invalidation callback.

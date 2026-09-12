> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffersetinvalidatecallback(_:callback:refcon:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffersetinvalidatecallback(_:callback:refcon:))

# CMSampleBufferSetInvalidateCallback(\_:callback:refcon:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the sample buffer’s invalidation callback.

## Declaration

```swift
func CMSampleBufferSetInvalidateCallback(_ sbuf: CMSampleBuffer, callback invalidateCallback: CMSampleBufferInvalidateCallback, refcon invalidateRefCon: UInt64) -> OSStatus
```

## Parameters

- `sbuf`: The sample buffer being modified.
- `invalidateCallback`: Reference to a function to be called during `CMSampleBufferInvalidate`.
- `invalidateRefCon`: Reference constant to be passed to `invalidateCallback`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

A sample buffer can only have one invalidation callback. The invalidation callback *isn’t* called during ordinary sample buffer finalization.

## Topics

### Callbacks

- [CMSampleBufferInvalidateCallback](cmsamplebufferinvalidatecallback.md): Client callback called by [CMSampleBufferInvalidate(\_:)](cmsamplebufferinvalidate%28__%29.md).

## See Also

### Invalidating Sample Buffers

- [CMSampleBufferSetInvalidateHandler(\_:invalidateHandler:)](cmsamplebuffersetinvalidatehandler%28__invalidatehandler_%29.md): Sets the sample buffer’s invalidation handler.
- [CMSampleBufferInvalidate(\_:)](cmsamplebufferinvalidate%28__%29.md): Invalidates a sample buffer by calling its invalidation callback.
- [CMSampleBufferIsValid(\_:)](cmsamplebufferisvalid%28__%29.md): Returns a Boolean value that indicates whether a sample buffer is valid.

# CMSampleBufferSetInvalidateCallback (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the sample buffer’s invalidation callback.

## Declaration

```objectivec
extern OSStatus CMSampleBufferSetInvalidateCallback(CMSampleBufferRef sbuf, CMSampleBufferInvalidateCallback invalidateCallback, uint64_t invalidateRefCon);
```

## Parameters

- `sbuf`: The sample buffer being modified.
- `invalidateCallback`: Reference to a function to be called during `CMSampleBufferInvalidate`.
- `invalidateRefCon`: Reference constant to be passed to `invalidateCallback`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

A sample buffer can only have one invalidation callback. The invalidation callback *isn’t* called during ordinary sample buffer finalization.

## Topics

### Callbacks

- [CMSampleBufferInvalidateCallback](cmsamplebufferinvalidatecallback.md): Client callback called by [CMSampleBufferInvalidate](cmsamplebufferinvalidate%28__%29.md).

## See Also

### Invalidating Sample Buffers

- [CMSampleBufferSetInvalidateHandler](cmsamplebuffersetinvalidatehandler%28__invalidatehandler_%29.md): Sets the sample buffer’s invalidation handler.
- [CMSampleBufferInvalidate](cmsamplebufferinvalidate%28__%29.md): Invalidates a sample buffer by calling its invalidation callback.
- [CMSampleBufferIsValid](cmsamplebufferisvalid%28__%29.md): Returns a Boolean value that indicates whether a sample buffer is valid.

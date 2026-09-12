> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffersetinvalidatehandler(_:invalidatehandler:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffersetinvalidatehandler(_:invalidatehandler:))

# CMSampleBufferSetInvalidateHandler(\_:invalidateHandler:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the sample buffer’s invalidation handler.

## Declaration

```swift
func CMSampleBufferSetInvalidateHandler(_ sbuf: CMSampleBuffer, invalidateHandler: @escaping CMSampleBufferInvalidateHandler) -> OSStatus
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being modified.
- `invalidateHandler`: Block to be called during `CMSampleBufferInvalidate`.

<a id="Discussion"></a>

## Discussion

A sample buffer can only have one invalidation callback. The invalidation callback isn’t called during ordinary sample buffer finalization.

## Topics

### Handlers

- [CMSampleBufferInvalidateHandler](cmsamplebufferinvalidatehandler.md): Client callback called by [CMSampleBufferInvalidate(\_:)](cmsamplebufferinvalidate%28__%29.md).

## See Also

### Invalidating Sample Buffers

- [CMSampleBufferInvalidate(\_:)](cmsamplebufferinvalidate%28__%29.md): Invalidates a sample buffer by calling its invalidation callback.
- [CMSampleBufferIsValid(\_:)](cmsamplebufferisvalid%28__%29.md): Returns a Boolean value that indicates whether a sample buffer is valid.
- [CMSampleBufferSetInvalidateCallback(\_:callback:refcon:)](cmsamplebuffersetinvalidatecallback%28__callback_refcon_%29.md): Sets the sample buffer’s invalidation callback.

# CMSampleBufferSetInvalidateHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the sample buffer’s invalidation handler.

## Declaration

```objectivec
extern OSStatus CMSampleBufferSetInvalidateHandler(CMSampleBufferRef sbuf, CMSampleBufferInvalidateHandler invalidateHandler);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being modified.
- `invalidateHandler`: Block to be called during `CMSampleBufferInvalidate`.

<a id="Discussion"></a>

## Discussion

A sample buffer can only have one invalidation callback. The invalidation callback isn’t called during ordinary sample buffer finalization.

## Topics

### Handlers

- [CMSampleBufferInvalidateHandler](cmsamplebufferinvalidatehandler.md): Client callback called by [CMSampleBufferInvalidate](cmsamplebufferinvalidate%28__%29.md).

## See Also

### Invalidating Sample Buffers

- [CMSampleBufferInvalidate](cmsamplebufferinvalidate%28__%29.md): Invalidates a sample buffer by calling its invalidation callback.
- [CMSampleBufferIsValid](cmsamplebufferisvalid%28__%29.md): Returns a Boolean value that indicates whether a sample buffer is valid.
- [CMSampleBufferSetInvalidateCallback](cmsamplebuffersetinvalidatecallback%28__callback_refcon_%29.md): Sets the sample buffer’s invalidation callback.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferaudiorendererflushtimekey](https://developer.apple.com/documentation/avfoundation/avsamplebufferaudiorendererflushtimekey)

# AVSampleBufferAudioRendererFlushTimeKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The key that indicates the presentation timestamp of the first queued sample that was flushed.

> Use the result of AVSampleBufferAudioRenderer.Receiver enqueue(\_:) and enqueueImmediately(\_:) for .successWithSuggestedFlushReason instead

## Declaration

```swift
let AVSampleBufferAudioRendererFlushTimeKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSValue](../foundation/nsvalue.md) object that wraps a [CMTime](../coremedia/cmtime.md) value.

## See Also

### Removing queued buffers

- [flush(fromSourceTime:completionHandler:)](avsamplebufferaudiorenderer/flush%28fromsourcetime_completionhandler_%29.md): Deprecated. Flushes queued sample buffers with presentation time stamps later than or equal to the specified time.

# AVSampleBufferAudioRendererFlushTimeKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The key that indicates the presentation timestamp of the first queued sample that was flushed.

## Declaration

```objectivec
extern NSString * const AVSampleBufferAudioRendererFlushTimeKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSValue](../foundation/nsvalue.md) object that wraps a [CMTime](../coremedia/cmtime.md) value.

## See Also

### Removing queued buffers

- [flushFromSourceTime:completionHandler:](avsamplebufferaudiorenderer/flush%28fromsourcetime_completionhandler_%29.md): Deprecated. Flushes queued sample buffers with presentation time stamps later than or equal to the specified time.

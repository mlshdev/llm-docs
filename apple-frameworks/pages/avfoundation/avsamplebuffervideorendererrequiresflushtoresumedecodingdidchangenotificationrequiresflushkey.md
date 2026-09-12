> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey)

# AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ (deprecated in 27.0) · iPadOS 27.0+ (deprecated in 27.0) · Mac Catalyst 27.0+ (deprecated in 27.0) · macOS 27.0+ (deprecated in 27.0) · tvOS 27.0+ (deprecated in 27.0) · visionOS 27.0+ (deprecated in 27.0)

> Use the result of AVSampleBufferVideoRenderer.Receiver enqueue(\_:) and enqueueImmediately(\_:) for .requiresFlushToResumeDecoding instead

## Declaration

```swift
let AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey: String
```

## See Also

### Flushing the renderer

- [requiresFlushToResumeDecoding](avsamplebuffervideorenderer/requiresflushtoresumedecoding.md): Deprecated. A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.
- [requiresFlushToResumeDecodingDidChangeNotification](avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification.md): Deprecated. A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.
- [flush(removingDisplayedImage:completionHandler:)](avsamplebuffervideorenderer/flush%28removingdisplayedimage_completionhandler_%29.md): Deprecated. Tells the video renderer to discard pending enqueued sample buffers.

# AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
extern NSString * const AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey;
```

## See Also

### Flushing the renderer

- [requiresFlushToResumeDecoding](avsamplebuffervideorenderer/requiresflushtoresumedecoding.md): Deprecated. A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotification](avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification.md): Deprecated. A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.
- [flushWithRemovalOfDisplayedImage:completionHandler:](avsamplebuffervideorenderer/flush%28removingdisplayedimage_completionhandler_%29.md): Deprecated. Tells the video renderer to discard pending enqueued sample buffers.

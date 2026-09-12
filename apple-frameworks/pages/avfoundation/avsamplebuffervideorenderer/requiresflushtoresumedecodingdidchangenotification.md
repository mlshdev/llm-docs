> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/requiresflushtoresumedecodingdidchangenotification)

# requiresFlushToResumeDecodingDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.

> Use the result of AVSampleBufferVideoRenderer.Receiver enqueue(\_:) and enqueueImmediately(\_:) for .requiresFlushToResumeDecoding instead

## Declaration

```swift
class let requiresFlushToResumeDecodingDidChangeNotification: NSNotification.Name
```

## See Also

### Flushing the renderer

- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey](../avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey.md): Deprecated.
- [flush(removingDisplayedImage:completionHandler:)](flush%28removingdisplayedimage_completionhandler_%29.md): Deprecated. Tells the video renderer to discard pending enqueued sample buffers.

# AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.

## Declaration

```objectivec
extern NSNotificationName const AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotification;
```

## See Also

### Flushing the renderer

- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey](../avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey.md): Deprecated.
- [flushWithRemovalOfDisplayedImage:completionHandler:](flush%28removingdisplayedimage_completionhandler_%29.md): Deprecated. Tells the video renderer to discard pending enqueued sample buffers.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/requiresflushtoresumedecoding](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/requiresflushtoresumedecoding)

# requiresFlushToResumeDecoding (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.

> Use the result of AVSampleBufferVideoRenderer.Receiver enqueue(\_:) and enqueueImmediately(\_:) for .requiresFlushToResumeDecoding instead

## Declaration

```swift
var requiresFlushToResumeDecoding: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When your app enters a state where using a video decoder resources is not permissible, the value of this property changes to [true](https://developer.apple.com/documentation/swift/true) along with the video renderer’s status changing to [AVQueuedSampleBufferRenderingStatus.failed](../avqueuedsamplebufferrenderingstatus/failed.md). To resume rendering sample buffers, you must first reset the video renderer by calling [flush()](../avqueuedsamplebufferrendering/flush%28%29.md) or [flush(removingDisplayedImage:completionHandler:)](flush%28removingdisplayedimage_completionhandler_%29.md).

This property is not key-value observable. Instead, track changes to this property by observing notifications of type [requiresFlushToResumeDecodingDidChangeNotification](requiresflushtoresumedecodingdidchangenotification.md).

## See Also

### Flushing the renderer

- [requiresFlushToResumeDecodingDidChangeNotification](requiresflushtoresumedecodingdidchangenotification.md): Deprecated. A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey](../avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey.md): Deprecated.
- [flush(removingDisplayedImage:completionHandler:)](flush%28removingdisplayedimage_completionhandler_%29.md): Deprecated. Tells the video renderer to discard pending enqueued sample buffers.

# requiresFlushToResumeDecoding (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.

## Declaration

```objectivec
@property (readonly) BOOL requiresFlushToResumeDecoding;
```

<a id="Discussion"></a>

## Discussion

When your app enters a state where using a video decoder resources is not permissible, the value of this property changes to [true](https://developer.apple.com/documentation/swift/true) along with the video renderer’s status changing to [AVQueuedSampleBufferRenderingStatusFailed](../avqueuedsamplebufferrenderingstatus/failed.md). To resume rendering sample buffers, you must first reset the video renderer by calling [flush](../avqueuedsamplebufferrendering/flush%28%29.md) or [flushWithRemovalOfDisplayedImage:completionHandler:](flush%28removingdisplayedimage_completionhandler_%29.md).

This property is not key-value observable. Instead, track changes to this property by observing notifications of type [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotification](requiresflushtoresumedecodingdidchangenotification.md).

## See Also

### Flushing the renderer

- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotification](requiresflushtoresumedecodingdidchangenotification.md): Deprecated. A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey](../avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey.md): Deprecated.
- [flushWithRemovalOfDisplayedImage:completionHandler:](flush%28removingdisplayedimage_completionhandler_%29.md): Deprecated. Tells the video renderer to discard pending enqueued sample buffers.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/flush(removingdisplayedimage:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/flush(removingdisplayedimage:completionhandler:))

# flush(removingDisplayedImage:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the video renderer to discard pending enqueued sample buffers.

> Attach renderer to a render synchronizer with sampleBufferReceiver(adding:) and use the receiver's flush(removingDisplayedImage:) method instead

## Declaration

```swift
func flush(removingDisplayedImage removeDisplayedImage: Bool, completionHandler handler: (@Sendable () -> Void)? = nil)
```

```swift
func flush(removingDisplayedImage removeDisplayedImage: Bool) async
```

## Parameters

- `removeDisplayedImage`: A Boolean value that indicates whether to remove the display image.
- `handler`: A completion handler the system invokes when the flush completes.

## See Also

### Flushing the renderer

- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.
- [requiresFlushToResumeDecodingDidChangeNotification](requiresflushtoresumedecodingdidchangenotification.md): Deprecated. A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey](../avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey.md): Deprecated.

# flushWithRemovalOfDisplayedImage:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Tells the video renderer to discard pending enqueued sample buffers.

## Declaration

```objectivec
- (void) flushWithRemovalOfDisplayedImage:(BOOL) removeDisplayedImage completionHandler:(void (^)()) handler;
```

## Parameters

- `removeDisplayedImage`: A Boolean value that indicates whether to remove the display image.
- `handler`: A completion handler the system invokes when the flush completes.

## See Also

### Flushing the renderer

- [requiresFlushToResumeDecoding](requiresflushtoresumedecoding.md): Deprecated. A Boolean value that Indicates whether the renderer requires flushing to continue decoding frames.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotification](requiresflushtoresumedecodingdidchangenotification.md): Deprecated. A notification that indicates that the video renderer requires flushing to continue rendering sample buffers.
- [AVSampleBufferVideoRendererRequiresFlushToResumeDecodingDidChangeNotificationRequiresFlushKey](../avsamplebuffervideorendererrequiresflushtoresumedecodingdidchangenotificationrequiresflushkey.md): Deprecated.

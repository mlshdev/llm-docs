> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/didfailtodecodenotificationerrorkey](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/didfailtodecodenotificationerrorkey)

# didFailToDecodeNotificationErrorKey (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key to retrieve an error object that provides the details of the failure.

> Use the result of AVSampleBufferVideoRenderer.Receiver enqueue(\_:) and enqueueImmediately(\_:) for .successWithDecodeFailure instead

## Declaration

```swift
class let didFailToDecodeNotificationErrorKey: String
```

## See Also

### Handling decode failures

- [didFailToDecodeNotification](didfailtodecodenotification.md): Deprecated. A notification that indicates the video renderer fails to decode a sample buffer.

# AVSampleBufferVideoRendererDidFailToDecodeNotificationErrorKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A key to retrieve an error object that provides the details of the failure.

## Declaration

```objectivec
extern NSString * const AVSampleBufferVideoRendererDidFailToDecodeNotificationErrorKey;
```

## See Also

### Handling decode failures

- [AVSampleBufferVideoRendererDidFailToDecodeNotification](didfailtodecodenotification.md): Deprecated. A notification that indicates the video renderer fails to decode a sample buffer.

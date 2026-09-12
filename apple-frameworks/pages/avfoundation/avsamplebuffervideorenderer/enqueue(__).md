> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffervideorenderer/enqueue(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffervideorenderer/enqueue(_:))

# enqueue(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Sends a sample buffer in order to render its contents.

> Attach renderer to a render synchronizer with sampleBufferReceiver(adding:) and use the receiver's enqueue(\_:) async or enqueueImmediately(\_:) methods instead

## Declaration

```swift
func enqueue(_ sampleBuffer: CMSampleBuffer)
```

<a id="discussion"></a>

## Discussion

Video-specific notes:

If sampleBuffer has the kCMSampleAttachmentKey_DoNotDisplay attachment set to kCFBooleanTrue, the frame will be decoded but not displayed. Otherwise, if sampleBuffer has the kCMSampleAttachmentKey_DisplayImmediately attachment set to kCFBooleanTrue, the decoded image will be displayed as soon as possible, replacing all previously enqueued images regardless of their timestamps. Otherwise, the decoded image will be displayed at sampleBuffer’s output presentation timestamp, as interpreted by the timebase.

To schedule the removal of previous images at a specific timestamp, enqueue a marker sample buffer containing no samples, with the kCMSampleBufferAttachmentKey_EmptyMedia attachment set to kCFBooleanTrue.

IMPORTANT NOTE: attachments with the kCMSampleAttachmentKey\_ prefix must be set via CMSampleBufferGetSampleAttachmentsArray and CFDictionarySetValue. Attachments with the kCMSampleBufferAttachmentKey\_ prefix must be set via CMSetAttachment.

The combination of either a non-NULL controlTimebase or an AVSampleBufferRenderSynchronizer with the use of kCMSampleAttachmentKey_DisplayImmediately as an attachment to the CMSampleBuffers that are enqueued for display is not recommended.

# enqueueSampleBuffer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Sends a sample buffer in order to render its contents.

## Declaration

```objectivec
- (void) enqueueSampleBuffer:(CMSampleBufferRef) sampleBuffer;
```

<a id="discussion"></a>

## Discussion

Video-specific notes:

If sampleBuffer has the kCMSampleAttachmentKey_DoNotDisplay attachment set to kCFBooleanTrue, the frame will be decoded but not displayed. Otherwise, if sampleBuffer has the kCMSampleAttachmentKey_DisplayImmediately attachment set to kCFBooleanTrue, the decoded image will be displayed as soon as possible, replacing all previously enqueued images regardless of their timestamps. Otherwise, the decoded image will be displayed at sampleBuffer’s output presentation timestamp, as interpreted by the timebase.

To schedule the removal of previous images at a specific timestamp, enqueue a marker sample buffer containing no samples, with the kCMSampleBufferAttachmentKey_EmptyMedia attachment set to kCFBooleanTrue.

IMPORTANT NOTE: attachments with the kCMSampleAttachmentKey\_ prefix must be set via CMSampleBufferGetSampleAttachmentsArray and CFDictionarySetValue. Attachments with the kCMSampleBufferAttachmentKey\_ prefix must be set via CMSetAttachment.

The combination of either a non-NULL controlTimebase or an AVSampleBufferRenderSynchronizer with the use of kCMSampleAttachmentKey_DisplayImmediately as an attachment to the CMSampleBuffers that are enqueued for display is not recommended.

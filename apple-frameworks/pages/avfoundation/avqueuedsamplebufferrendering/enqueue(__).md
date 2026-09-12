> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrendering/enqueue(_:)](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/enqueue(_:))

# enqueue(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Sends a sample buffer to the queue for rendering.

## Declaration

```swift
func enqueue(_ sampleBuffer: CMSampleBuffer)
```

## Parameters

- `sampleBuffer`: The sample buffer to be enqueued.

<a id="Discussion"></a>

## Discussion

For video data, the sample buffer is processed according to the attachments it contains. If it has a true value for its [kCMSampleAttachmentKey_DoNotDisplay](../../coremedia/kcmsampleattachmentkey_donotdisplay.md) attachment, the frame is decoded but not displayed. If it has a `true` value for its [kCMSampleAttachmentKey_DisplayImmediately](../../coremedia/kcmsampleattachmentkey_displayimmediately.md) attachment, the frame is displayed as soon as possible, regardless of its presentation timestamp. Otherwise, the frame is displayed according to its presentation timestamp, relative to the timebase.

To schedule the removal of previous images at a specific timestamp, enqueue a marker sample buffer that doesn’t contain any samples, with the [kCMSampleBufferAttachmentKey_EmptyMedia](../../coremedia/kcmsamplebufferattachmentkey_emptymedia.md) attachment set to [kCFBooleanTrue](../../corefoundation/kcfbooleantrue.md).

> **Important**

>  Attachments with the `kCMSampleAttachmentKey_` prefix must be set using [CMSampleBufferGetSampleAttachmentsArray(\_:createIfNecessary:)](../../coremedia/cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md) and [CFDictionarySetValue(\_:\_:\_:)](../../corefoundation/cfdictionarysetvalue%28______%29.md).  Attachments with the `kCMSampleBufferAttachmentKey_` prefix must be set via [CMSetAttachment(\_:key:value:attachmentMode:)](../../coremedia/cmsetattachment%28__key_value_attachmentmode_%29.md).

## See Also

### Requesting media

- [isReadyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the receiver is able to accept more sample buffers.
- [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.
- [stopRequestingMediaData()](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) call.

# enqueueSampleBuffer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sends a sample buffer to the queue for rendering.

## Declaration

```objectivec
- (void) enqueueSampleBuffer:(CMSampleBufferRef) sampleBuffer;
```

## Parameters

- `sampleBuffer`: The sample buffer to be enqueued.

<a id="Discussion"></a>

## Discussion

For video data, the sample buffer is processed according to the attachments it contains. If it has a true value for its [kCMSampleAttachmentKey_DoNotDisplay](../../coremedia/kcmsampleattachmentkey_donotdisplay.md) attachment, the frame is decoded but not displayed. If it has a `true` value for its [kCMSampleAttachmentKey_DisplayImmediately](../../coremedia/kcmsampleattachmentkey_displayimmediately.md) attachment, the frame is displayed as soon as possible, regardless of its presentation timestamp. Otherwise, the frame is displayed according to its presentation timestamp, relative to the timebase.

To schedule the removal of previous images at a specific timestamp, enqueue a marker sample buffer that doesn’t contain any samples, with the [kCMSampleBufferAttachmentKey_EmptyMedia](../../coremedia/kcmsamplebufferattachmentkey_emptymedia.md) attachment set to [kCFBooleanTrue](../../corefoundation/kcfbooleantrue.md).

> **Important**

>  Attachments with the `kCMSampleAttachmentKey_` prefix must be set using [CMSampleBufferGetSampleAttachmentsArray](../../coremedia/cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md) and [CFDictionarySetValue](../../corefoundation/cfdictionarysetvalue%28______%29.md).  Attachments with the `kCMSampleBufferAttachmentKey_` prefix must be set via [CMSetAttachment](../../coremedia/cmsetattachment%28__key_value_attachmentmode_%29.md).

## See Also

### Requesting media

- [readyForMoreMediaData](isreadyformoremediadata.md): Deprecated. A Boolean value that indicates whether the receiver is able to accept more sample buffers.
- [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md): Deprecated. Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.
- [stopRequestingMediaData](stoprequestingmediadata%28%29.md): Deprecated. Cancels any current [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) call.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferdisplaylayer/enqueue(_:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/enqueue(_:))

# enqueue(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Sends a sample buffer for display.

> Use sampleBufferRenderer's enqueueSampleBuffer: instead

## Declaration

```swift
func enqueue(_ sampleBuffer: CMSampleBuffer)
```

## Parameters

- `sampleBuffer`: The sample buffer to display.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [enqueue(\_:)](../avqueuedsamplebufferrendering/enqueue%28__%29.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

If `sampleBuffer` has the [kCMSampleAttachmentKey_DoNotDisplay](../../coremedia/kcmsampleattachmentkey_donotdisplay.md) attachment set to [kCFBooleanTrue](../../corefoundation/kcfbooleantrue.md), the frame will be decoded but not displayed.

If `sampleBuffer` has the [kCMSampleAttachmentKey_DisplayImmediately](../../coremedia/kcmsampleattachmentkey_displayimmediately.md) attachment set to [kCFBooleanTrue](../../corefoundation/kcfbooleantrue.md), the decoded image will be displayed as soon as possible, replacing all previously enqueued images regardless of their timestamps.

Otherwise, the decoded image will be displayed at the `sampleBuffer` output presentation timestamp, as interpreted by the [controlTimebase](controltimebase.md) property (or the `mach_absolute_time` timeline if there is no control timebase).

To schedule the removal of previous images at a specific timestamp, enqueue a marker sample buffer containing no samples, with the [kCMSampleBufferAttachmentKey_EmptyMedia](../../coremedia/kcmsamplebufferattachmentkey_emptymedia.md) attachment set to [kCFBooleanTrue](../../corefoundation/kcfbooleantrue.md).

> **Important**

>  Attachments with the `kCMSampleAttachmentKey_*` prefix must be set via [CMSampleBufferGetSampleAttachmentsArray(\_:createIfNecessary:)](../../coremedia/cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md) and [CFDictionarySetValue(\_:\_:\_:)](../../corefoundation/cfdictionarysetvalue%28______%29.md). Attachments with the `kCMSampleBufferAttachmentKey_*` prefix must be set via [CMSetAttachment(\_:key:value:attachmentMode:)](../../coremedia/cmsetattachment%28__key_value_attachmentmode_%29.md).

# enqueueSampleBuffer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 18.0) · iPadOS 8.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 10.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Sends a sample buffer for display.

> Use sampleBufferRenderer's enqueueSampleBuffer: instead

## Declaration

```objectivec
- (void) enqueueSampleBuffer:(CMSampleBufferRef) sampleBuffer;
```

## Parameters

- `sampleBuffer`: The sample buffer to display.

<a id="Discussion"></a>

## Discussion

Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later. Use [enqueueSampleBuffer:](../avqueuedsamplebufferrendering/enqueue%28__%29.md) on the [sampleBufferRenderer](samplebufferrenderer.md) instead.

If `sampleBuffer` has the [kCMSampleAttachmentKey_DoNotDisplay](../../coremedia/kcmsampleattachmentkey_donotdisplay.md) attachment set to [kCFBooleanTrue](../../corefoundation/kcfbooleantrue.md), the frame will be decoded but not displayed.

If `sampleBuffer` has the [kCMSampleAttachmentKey_DisplayImmediately](../../coremedia/kcmsampleattachmentkey_displayimmediately.md) attachment set to [kCFBooleanTrue](../../corefoundation/kcfbooleantrue.md), the decoded image will be displayed as soon as possible, replacing all previously enqueued images regardless of their timestamps.

Otherwise, the decoded image will be displayed at the `sampleBuffer` output presentation timestamp, as interpreted by the [controlTimebase](controltimebase.md) property (or the `mach_absolute_time` timeline if there is no control timebase).

To schedule the removal of previous images at a specific timestamp, enqueue a marker sample buffer containing no samples, with the [kCMSampleBufferAttachmentKey_EmptyMedia](../../coremedia/kcmsamplebufferattachmentkey_emptymedia.md) attachment set to [kCFBooleanTrue](../../corefoundation/kcfbooleantrue.md).

> **Important**

>  Attachments with the `kCMSampleAttachmentKey_*` prefix must be set via [CMSampleBufferGetSampleAttachmentsArray](../../coremedia/cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md) and [CFDictionarySetValue](../../corefoundation/cfdictionarysetvalue%28______%29.md). Attachments with the `kCMSampleBufferAttachmentKey_*` prefix must be set via [CMSetAttachment](../../coremedia/cmsetattachment%28__key_value_attachmentmode_%29.md).

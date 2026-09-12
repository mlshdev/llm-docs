> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsamplebufferdroppedframereasoninfo_cameramodeswitch](https://developer.apple.com/documentation/coremedia/kcmsamplebufferdroppedframereasoninfo_cameramodeswitch)

# kCMSampleBufferDroppedFrameReasonInfo_CameraModeSwitch (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A discontinuity was caused by a camera mode switch.

## Declaration

```swift
let kCMSampleBufferDroppedFrameReasonInfo_CameraModeSwitch: CFString
```

<a id="Discussion"></a>

## Discussion

The module providing sample buffers has experienced a discontinuity due to a camera mode switch. Short discontinuities of this type can occur when the session is configured for still image capture on some devices.

## See Also

### Sample Buffer Keys

- [kCMSampleBufferAttachmentKey_DisplayEmptyMediaImmediately](kcmsamplebufferattachmentkey_displayemptymediaimmediately.md): Tells that the empty marker should be dequeued immediately regardless of its timestamp (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_DrainAfterDecoding](kcmsamplebufferattachmentkey_drainafterdecoding.md): Indicates whether the sample buffer should be drained after decoding type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_DroppedFrameReason](kcmsamplebufferattachmentkey_droppedframereason.md): Indicates the reason the current video frame was dropped (type `CFString`).
- [kCMSampleBufferDroppedFrameReason_FrameWasLate](kcmsamplebufferdroppedframereason_framewaslate.md): The frame was dropped because it was late.
- [kCMSampleBufferDroppedFrameReason_OutOfBuffers](kcmsamplebufferdroppedframereason_outofbuffers.md): The frame was dropped because the module providing frames is out of buffers.
- [kCMSampleBufferDroppedFrameReason_Discontinuity](kcmsamplebufferdroppedframereason_discontinuity.md): An unknown number of frames were dropped.
- [kCMSampleBufferAttachmentKey_DroppedFrameReasonInfo](kcmsamplebufferattachmentkey_droppedframereasoninfo.md): Indicates additional information regarding the dropped video frame (type `CFString`).
- [kCMSampleBufferAttachmentKey_EmptyMedia](kcmsamplebufferattachmentkey_emptymedia.md): Marks an intentionally empty interval in the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration](kcmsamplebufferattachmentkey_endsprevioussampleduration.md): Indicates that sample buffer’s decode timestamp may be used to define the previous sample buffer’s duration (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_FillDiscontinuitiesWithSilence](kcmsamplebufferattachmentkey_filldiscontinuitieswithsilence.md): Fill the difference between discontiguous sample buffers with silence (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_ForceKeyFrame](kcmsamplebufferattachmentkey_forcekeyframe.md): Indicates that the current or next video sample buffer should be forced to be encoded as a key frame.
- [kCMSampleBufferAttachmentKey_GradualDecoderRefresh](kcmsamplebufferattachmentkey_gradualdecoderrefresh.md): Indicates the decoder refresh count (type `CFNumber`).
- [kCMSampleBufferAttachmentKey_PermanentEmptyMedia](kcmsamplebufferattachmentkey_permanentemptymedia.md): Marks the end of the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_PostNotificationWhenConsumed](kcmsamplebufferattachmentkey_postnotificationwhenconsumed.md): If present, indicates that decode pipelines should post a notification when consuming the sample buffer(type `CFDictionary`).
- [kCMSampleBufferAttachmentKey_ResetDecoderBeforeDecoding](kcmsamplebufferattachmentkey_resetdecoderbeforedecoding.md): Indicates whether the sample buffer should be reset before decoding (type `CFBoolean`, default false).

# kCMSampleBufferDroppedFrameReasonInfo_CameraModeSwitch (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A discontinuity was caused by a camera mode switch.

## Declaration

```objectivec
extern CFStringRef const kCMSampleBufferDroppedFrameReasonInfo_CameraModeSwitch;
```

<a id="Discussion"></a>

## Discussion

The module providing sample buffers has experienced a discontinuity due to a camera mode switch. Short discontinuities of this type can occur when the session is configured for still image capture on some devices.

## See Also

### Sample Buffer Keys

- [kCMSampleBufferAttachmentKey_DisplayEmptyMediaImmediately](kcmsamplebufferattachmentkey_displayemptymediaimmediately.md): Tells that the empty marker should be dequeued immediately regardless of its timestamp (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_DrainAfterDecoding](kcmsamplebufferattachmentkey_drainafterdecoding.md): Indicates whether the sample buffer should be drained after decoding type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_DroppedFrameReason](kcmsamplebufferattachmentkey_droppedframereason.md): Indicates the reason the current video frame was dropped (type `CFString`).
- [kCMSampleBufferDroppedFrameReason_FrameWasLate](kcmsamplebufferdroppedframereason_framewaslate.md): The frame was dropped because it was late.
- [kCMSampleBufferDroppedFrameReason_OutOfBuffers](kcmsamplebufferdroppedframereason_outofbuffers.md): The frame was dropped because the module providing frames is out of buffers.
- [kCMSampleBufferDroppedFrameReason_Discontinuity](kcmsamplebufferdroppedframereason_discontinuity.md): An unknown number of frames were dropped.
- [kCMSampleBufferAttachmentKey_DroppedFrameReasonInfo](kcmsamplebufferattachmentkey_droppedframereasoninfo.md): Indicates additional information regarding the dropped video frame (type `CFString`).
- [kCMSampleBufferAttachmentKey_EmptyMedia](kcmsamplebufferattachmentkey_emptymedia.md): Marks an intentionally empty interval in the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration](kcmsamplebufferattachmentkey_endsprevioussampleduration.md): Indicates that sample buffer’s decode timestamp may be used to define the previous sample buffer’s duration (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_FillDiscontinuitiesWithSilence](kcmsamplebufferattachmentkey_filldiscontinuitieswithsilence.md): Fill the difference between discontiguous sample buffers with silence (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_ForceKeyFrame](kcmsamplebufferattachmentkey_forcekeyframe.md): Indicates that the current or next video sample buffer should be forced to be encoded as a key frame.
- [kCMSampleBufferAttachmentKey_GradualDecoderRefresh](kcmsamplebufferattachmentkey_gradualdecoderrefresh.md): Indicates the decoder refresh count (type `CFNumber`).
- [kCMSampleBufferAttachmentKey_PermanentEmptyMedia](kcmsamplebufferattachmentkey_permanentemptymedia.md): Marks the end of the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_PostNotificationWhenConsumed](kcmsamplebufferattachmentkey_postnotificationwhenconsumed.md): If present, indicates that decode pipelines should post a notification when consuming the sample buffer(type `CFDictionary`).
- [kCMSampleBufferAttachmentKey_ResetDecoderBeforeDecoding](kcmsamplebufferattachmentkey_resetdecoderbeforedecoding.md): Indicates whether the sample buffer should be reset before decoding (type `CFBoolean`, default false).

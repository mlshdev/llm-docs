> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsamplebufferattachmentkey_endsprevioussampleduration](https://developer.apple.com/documentation/coremedia/kcmsamplebufferattachmentkey_endsprevioussampleduration)

# kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates that sample buffer’s decode timestamp may be used to define the previous sample buffer’s duration (type `CFBoolean`, default false).

## Declaration

```swift
let kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration: CFString
```

<a id="Discussion"></a>

## Discussion

Marker sample buffers with this attachment may be used in situations where sample buffers are transmitted        before their duration is known. In such situations, normally the recipient may use each sample buffer’s timestamp        to calculate the duration of the previous sample buffer. The marker sample buffer with this attachment is sent        to provide the timestamp for calculating the final sample buffer’s duration.

## See Also

### Sample Buffer Keys

- [kCMSampleBufferAttachmentKey_DisplayEmptyMediaImmediately](kcmsamplebufferattachmentkey_displayemptymediaimmediately.md): Tells that the empty marker should be dequeued immediately regardless of its timestamp (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_DrainAfterDecoding](kcmsamplebufferattachmentkey_drainafterdecoding.md): Indicates whether the sample buffer should be drained after decoding type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_DroppedFrameReason](kcmsamplebufferattachmentkey_droppedframereason.md): Indicates the reason the current video frame was dropped (type `CFString`).
- [kCMSampleBufferDroppedFrameReason_FrameWasLate](kcmsamplebufferdroppedframereason_framewaslate.md): The frame was dropped because it was late.
- [kCMSampleBufferDroppedFrameReason_OutOfBuffers](kcmsamplebufferdroppedframereason_outofbuffers.md): The frame was dropped because the module providing frames is out of buffers.
- [kCMSampleBufferDroppedFrameReason_Discontinuity](kcmsamplebufferdroppedframereason_discontinuity.md): An unknown number of frames were dropped.
- [kCMSampleBufferAttachmentKey_DroppedFrameReasonInfo](kcmsamplebufferattachmentkey_droppedframereasoninfo.md): Indicates additional information regarding the dropped video frame (type `CFString`).
- [kCMSampleBufferDroppedFrameReasonInfo_CameraModeSwitch](kcmsamplebufferdroppedframereasoninfo_cameramodeswitch.md): A discontinuity was caused by a camera mode switch.
- [kCMSampleBufferAttachmentKey_EmptyMedia](kcmsamplebufferattachmentkey_emptymedia.md): Marks an intentionally empty interval in the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_FillDiscontinuitiesWithSilence](kcmsamplebufferattachmentkey_filldiscontinuitieswithsilence.md): Fill the difference between discontiguous sample buffers with silence (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_ForceKeyFrame](kcmsamplebufferattachmentkey_forcekeyframe.md): Indicates that the current or next video sample buffer should be forced to be encoded as a key frame.
- [kCMSampleBufferAttachmentKey_GradualDecoderRefresh](kcmsamplebufferattachmentkey_gradualdecoderrefresh.md): Indicates the decoder refresh count (type `CFNumber`).
- [kCMSampleBufferAttachmentKey_PermanentEmptyMedia](kcmsamplebufferattachmentkey_permanentemptymedia.md): Marks the end of the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_PostNotificationWhenConsumed](kcmsamplebufferattachmentkey_postnotificationwhenconsumed.md): If present, indicates that decode pipelines should post a notification when consuming the sample buffer(type `CFDictionary`).
- [kCMSampleBufferAttachmentKey_ResetDecoderBeforeDecoding](kcmsamplebufferattachmentkey_resetdecoderbeforedecoding.md): Indicates whether the sample buffer should be reset before decoding (type `CFBoolean`, default false).

# kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Indicates that sample buffer’s decode timestamp may be used to define the previous sample buffer’s duration (type `CFBoolean`, default false).

## Declaration

```objectivec
extern CFStringRef const kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration;
```

<a id="Discussion"></a>

## Discussion

Marker sample buffers with this attachment may be used in situations where sample buffers are transmitted        before their duration is known. In such situations, normally the recipient may use each sample buffer’s timestamp        to calculate the duration of the previous sample buffer. The marker sample buffer with this attachment is sent        to provide the timestamp for calculating the final sample buffer’s duration.

## See Also

### Sample Buffer Keys

- [kCMSampleBufferAttachmentKey_DisplayEmptyMediaImmediately](kcmsamplebufferattachmentkey_displayemptymediaimmediately.md): Tells that the empty marker should be dequeued immediately regardless of its timestamp (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_DrainAfterDecoding](kcmsamplebufferattachmentkey_drainafterdecoding.md): Indicates whether the sample buffer should be drained after decoding type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_DroppedFrameReason](kcmsamplebufferattachmentkey_droppedframereason.md): Indicates the reason the current video frame was dropped (type `CFString`).
- [kCMSampleBufferDroppedFrameReason_FrameWasLate](kcmsamplebufferdroppedframereason_framewaslate.md): The frame was dropped because it was late.
- [kCMSampleBufferDroppedFrameReason_OutOfBuffers](kcmsamplebufferdroppedframereason_outofbuffers.md): The frame was dropped because the module providing frames is out of buffers.
- [kCMSampleBufferDroppedFrameReason_Discontinuity](kcmsamplebufferdroppedframereason_discontinuity.md): An unknown number of frames were dropped.
- [kCMSampleBufferAttachmentKey_DroppedFrameReasonInfo](kcmsamplebufferattachmentkey_droppedframereasoninfo.md): Indicates additional information regarding the dropped video frame (type `CFString`).
- [kCMSampleBufferDroppedFrameReasonInfo_CameraModeSwitch](kcmsamplebufferdroppedframereasoninfo_cameramodeswitch.md): A discontinuity was caused by a camera mode switch.
- [kCMSampleBufferAttachmentKey_EmptyMedia](kcmsamplebufferattachmentkey_emptymedia.md): Marks an intentionally empty interval in the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_FillDiscontinuitiesWithSilence](kcmsamplebufferattachmentkey_filldiscontinuitieswithsilence.md): Fill the difference between discontiguous sample buffers with silence (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_ForceKeyFrame](kcmsamplebufferattachmentkey_forcekeyframe.md): Indicates that the current or next video sample buffer should be forced to be encoded as a key frame.
- [kCMSampleBufferAttachmentKey_GradualDecoderRefresh](kcmsamplebufferattachmentkey_gradualdecoderrefresh.md): Indicates the decoder refresh count (type `CFNumber`).
- [kCMSampleBufferAttachmentKey_PermanentEmptyMedia](kcmsamplebufferattachmentkey_permanentemptymedia.md): Marks the end of the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_PostNotificationWhenConsumed](kcmsamplebufferattachmentkey_postnotificationwhenconsumed.md): If present, indicates that decode pipelines should post a notification when consuming the sample buffer(type `CFDictionary`).
- [kCMSampleBufferAttachmentKey_ResetDecoderBeforeDecoding](kcmsamplebufferattachmentkey_resetdecoderbeforedecoding.md): Indicates whether the sample buffer should be reset before decoding (type `CFBoolean`, default false).

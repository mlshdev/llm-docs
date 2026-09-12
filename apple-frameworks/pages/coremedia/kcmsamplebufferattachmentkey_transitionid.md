> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsamplebufferattachmentkey_transitionid](https://developer.apple.com/documentation/coremedia/kcmsamplebufferattachmentkey_transitionid)

# kCMSampleBufferAttachmentKey_TransitionID (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Marks a transition from one source of buffers to another.

## Declaration

```swift
let kCMSampleBufferAttachmentKey_TransitionID: CFString
```

<a id="Discussion"></a>

## Discussion

For example, during gapless playback of a list of songs, this attachment marks the first buffer from the next song.        If this attachment is on a buffer containing no samples, the first following buffer that contains samples is the        buffer that contains the first samples from the next song.  The value of this attachment is a [CFTypeRef](../corefoundation/cftyperef.md).  This        transition identifier should be unique within a playlist, so each transition in a playlist is uniquely        identifiable.  A [CFNumber](../corefoundation/cfnumber.md) counter that increments with each transition is a simple example.

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
- [kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration](kcmsamplebufferattachmentkey_endsprevioussampleduration.md): Indicates that sample buffer’s decode timestamp may be used to define the previous sample buffer’s duration (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_FillDiscontinuitiesWithSilence](kcmsamplebufferattachmentkey_filldiscontinuitieswithsilence.md): Fill the difference between discontiguous sample buffers with silence (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_ForceKeyFrame](kcmsamplebufferattachmentkey_forcekeyframe.md): Indicates that the current or next video sample buffer should be forced to be encoded as a key frame.
- [kCMSampleBufferAttachmentKey_GradualDecoderRefresh](kcmsamplebufferattachmentkey_gradualdecoderrefresh.md): Indicates the decoder refresh count (type `CFNumber`).
- [kCMSampleBufferAttachmentKey_PermanentEmptyMedia](kcmsamplebufferattachmentkey_permanentemptymedia.md): Marks the end of the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_PostNotificationWhenConsumed](kcmsamplebufferattachmentkey_postnotificationwhenconsumed.md): If present, indicates that decode pipelines should post a notification when consuming the sample buffer(type `CFDictionary`).

# kCMSampleBufferAttachmentKey_TransitionID (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Marks a transition from one source of buffers to another.

## Declaration

```objectivec
extern CFStringRef const kCMSampleBufferAttachmentKey_TransitionID;
```

<a id="Discussion"></a>

## Discussion

For example, during gapless playback of a list of songs, this attachment marks the first buffer from the next song.        If this attachment is on a buffer containing no samples, the first following buffer that contains samples is the        buffer that contains the first samples from the next song.  The value of this attachment is a [CFTypeRef](../corefoundation/cftyperef.md).  This        transition identifier should be unique within a playlist, so each transition in a playlist is uniquely        identifiable.  A [CFNumberRef](../corefoundation/cfnumber.md) counter that increments with each transition is a simple example.

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
- [kCMSampleBufferAttachmentKey_EndsPreviousSampleDuration](kcmsamplebufferattachmentkey_endsprevioussampleduration.md): Indicates that sample buffer’s decode timestamp may be used to define the previous sample buffer’s duration (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_FillDiscontinuitiesWithSilence](kcmsamplebufferattachmentkey_filldiscontinuitieswithsilence.md): Fill the difference between discontiguous sample buffers with silence (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_ForceKeyFrame](kcmsamplebufferattachmentkey_forcekeyframe.md): Indicates that the current or next video sample buffer should be forced to be encoded as a key frame.
- [kCMSampleBufferAttachmentKey_GradualDecoderRefresh](kcmsamplebufferattachmentkey_gradualdecoderrefresh.md): Indicates the decoder refresh count (type `CFNumber`).
- [kCMSampleBufferAttachmentKey_PermanentEmptyMedia](kcmsamplebufferattachmentkey_permanentemptymedia.md): Marks the end of the sequence of samples (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_PostNotificationWhenConsumed](kcmsamplebufferattachmentkey_postnotificationwhenconsumed.md): If present, indicates that decode pipelines should post a notification when consuming the sample buffer(type `CFDictionary`).

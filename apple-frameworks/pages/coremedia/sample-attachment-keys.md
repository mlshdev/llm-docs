> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/sample-attachment-keys](https://developer.apple.com/documentation/coremedia/sample-attachment-keys)

# Sample Attachment Keys (Swift)

**Framework:** Core Media  
**Kind:** API Collection

Keys that specify attachments to individual samples in a buffer.

<a id="overview"></a>

## Overview

You can get and set sample-level attachments in a sample buffer using the [CMSampleBufferGetSampleAttachmentsArray(\_:createIfNecessary:)](cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md) function.

## Topics

### Sample Keys

- [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md): Indicates whether the sample is a sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_PartialSync](kcmsampleattachmentkey_partialsync.md): Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DependsOnOthers](kcmsampleattachmentkey_dependsonothers.md): Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DisplayImmediately](kcmsampleattachmentkey_displayimmediately.md): Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)

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
- [kCMSampleBufferAttachmentKey_ResetDecoderBeforeDecoding](kcmsamplebufferattachmentkey_resetdecoderbeforedecoding.md): Indicates whether the sample buffer should be reset before decoding (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_ResumeOutput](kcmsamplebufferattachmentkey_resumeoutput.md): If present, indicates that output should be resumed following a discontinuity `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_Reverse](kcmsamplebufferattachmentkey_reverse.md): Indicates that the decoded contents of the sample buffer should be reversed (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_SampleReferenceByteOffset](kcmsamplebufferattachmentkey_samplereferencebyteoffset.md): Indicates the byte offset at which the sample data begins (type `CFNumber`).
- [kCMSampleBufferAttachmentKey_SampleReferenceURL](kcmsamplebufferattachmentkey_samplereferenceurl.md): Indicates the URL where the sample data is (type `CFURL`).
- [kCMSampleBufferAttachmentKey_SpeedMultiplier](kcmsamplebufferattachmentkey_speedmultiplier.md): The factor by which the sample buffer’s presentation should be accelerated (type `CFNumber`, default 1.0).
- [kCMSampleBufferAttachmentKey_StillImageLensStabilizationInfo](kcmsamplebufferattachmentkey_stillimagelensstabilizationinfo.md): Indicates information about the lens stabilization applied to the current still image buffer.
- [kCMSampleBufferLensStabilizationInfo_Active](kcmsamplebufferlensstabilizationinfo_active.md): The lens stabilization module was active for the duration this buffer.
- [kCMSampleBufferLensStabilizationInfo_OutOfRange](kcmsamplebufferlensstabilizationinfo_outofrange.md): The motion of the device or duration of the capture was outside of what the stabilization mechanism could support.
- [kCMSampleBufferLensStabilizationInfo_Unavailable](kcmsamplebufferlensstabilizationinfo_unavailable.md): The lens stabilization module was unavailable for use.
- [kCMSampleBufferLensStabilizationInfo_Off](kcmsamplebufferlensstabilizationinfo_off.md): The lens stabilization module was not used during this capture.
- [kCMSampleBufferAttachmentKey_TransitionID](kcmsamplebufferattachmentkey_transitionid.md): Marks a transition from one source of buffers to another.
- [kCMSampleBufferAttachmentKey_TrimDurationAtEnd](kcmsamplebufferattachmentkey_trimdurationatend.md): The duration that should be removed at the end of the sample buffer, after decoding.
- [kCMSampleBufferAttachmentKey_TrimDurationAtStart](kcmsamplebufferattachmentkey_trimdurationatstart.md): The duration that should be removed at the beginning of the sample buffer, after decoding.

## See Also

### Managing Attachments

- [CMSampleBufferGetSampleAttachmentsArray(\_:createIfNecessary:)](cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md): Retrieves an array of sample attachment dictionaries that represents each sample in a sample buffer.

# Sample Attachment Keys (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

Keys that specify attachments to individual samples in a buffer.

<a id="overview"></a>

## Overview

You can get and set sample-level attachments in a sample buffer using the [CMSampleBufferGetSampleAttachmentsArray](cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md) function.

## Topics

### Sample Keys

- [kCMSampleAttachmentKey_NotSync](kcmsampleattachmentkey_notsync.md): Indicates whether the sample is a sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_PartialSync](kcmsampleattachmentkey_partialsync.md): Indicates whether the sample is a partial sync sample (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DependsOnOthers](kcmsampleattachmentkey_dependsonothers.md): Indicates whether the sample depends on other samples for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_IsDependedOnByOthers](kcmsampleattachmentkey_isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding (type `CFBoolean`).
- [kCMSampleAttachmentKey_DisplayImmediately](kcmsampleattachmentkey_displayimmediately.md): Indicates whether the sample should be displayed immediately (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_DoNotDisplay](kcmsampleattachmentkey_donotdisplay.md): Indicates whether the sample should be decoded but not displayed (type `CFBoolean`, default false).
- [kCMSampleAttachmentKey_EarlierDisplayTimesAllowed](kcmsampleattachmentkey_earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times (type `CFBoolean`).
- [kCMSampleAttachmentKey_HasRedundantCoding](kcmsampleattachmentkey_hasredundantcoding.md): Indicates whether the sample has redundant coding (type `CFBoolean`).
- [kCMSampleAttachmentKey_PostDecodeProcessingMetadata](kcmsampleattachmentkey_postdecodeprocessingmetadata.md)

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
- [kCMSampleBufferAttachmentKey_ResetDecoderBeforeDecoding](kcmsamplebufferattachmentkey_resetdecoderbeforedecoding.md): Indicates whether the sample buffer should be reset before decoding (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_ResumeOutput](kcmsamplebufferattachmentkey_resumeoutput.md): If present, indicates that output should be resumed following a discontinuity `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_Reverse](kcmsamplebufferattachmentkey_reverse.md): Indicates that the decoded contents of the sample buffer should be reversed (type `CFBoolean`, default false).
- [kCMSampleBufferAttachmentKey_SampleReferenceByteOffset](kcmsamplebufferattachmentkey_samplereferencebyteoffset.md): Indicates the byte offset at which the sample data begins (type `CFNumber`).
- [kCMSampleBufferAttachmentKey_SampleReferenceURL](kcmsamplebufferattachmentkey_samplereferenceurl.md): Indicates the URL where the sample data is (type `CFURL`).
- [kCMSampleBufferAttachmentKey_SpeedMultiplier](kcmsamplebufferattachmentkey_speedmultiplier.md): The factor by which the sample buffer’s presentation should be accelerated (type `CFNumber`, default 1.0).
- [kCMSampleBufferAttachmentKey_StillImageLensStabilizationInfo](kcmsamplebufferattachmentkey_stillimagelensstabilizationinfo.md): Indicates information about the lens stabilization applied to the current still image buffer.
- [kCMSampleBufferLensStabilizationInfo_Active](kcmsamplebufferlensstabilizationinfo_active.md): The lens stabilization module was active for the duration this buffer.
- [kCMSampleBufferLensStabilizationInfo_OutOfRange](kcmsamplebufferlensstabilizationinfo_outofrange.md): The motion of the device or duration of the capture was outside of what the stabilization mechanism could support.
- [kCMSampleBufferLensStabilizationInfo_Unavailable](kcmsamplebufferlensstabilizationinfo_unavailable.md): The lens stabilization module was unavailable for use.
- [kCMSampleBufferLensStabilizationInfo_Off](kcmsamplebufferlensstabilizationinfo_off.md): The lens stabilization module was not used during this capture.
- [kCMSampleBufferAttachmentKey_TransitionID](kcmsamplebufferattachmentkey_transitionid.md): Marks a transition from one source of buffers to another.
- [kCMSampleBufferAttachmentKey_TrimDurationAtEnd](kcmsamplebufferattachmentkey_trimdurationatend.md): The duration that should be removed at the end of the sample buffer, after decoding.
- [kCMSampleBufferAttachmentKey_TrimDurationAtStart](kcmsamplebufferattachmentkey_trimdurationatstart.md): The duration that should be removed at the beginning of the sample buffer, after decoding.

## See Also

### Managing Attachments

- [CMSampleBufferGetSampleAttachmentsArray](cmsamplebuffergetsampleattachmentsarray%28__createifnecessary_%29.md): Retrieves an array of sample attachment dictionaries that represents each sample in a sample buffer.

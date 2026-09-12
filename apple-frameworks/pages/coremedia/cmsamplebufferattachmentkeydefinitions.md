> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferattachmentkeydefinitions](https://developer.apple.com/documentation/coremedia/cmsamplebufferattachmentkeydefinitions)

# CMSampleBufferAttachmentKeyDefinitions

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A namespace for sample buffer attachment keys.

## Declaration

```swift
enum CMSampleBufferAttachmentKeyDefinitions
```

## Topics

### Type Properties

- [cameraIntrinsicMatrix](cmsamplebufferattachmentkeydefinitions/cameraintrinsicmatrix.md): Provides the 3x3 camera intrinsic matrix applied to the current sample buffer.
- [displayEmptyMediaImmediately](cmsamplebufferattachmentkeydefinitions/displayemptymediaimmediately.md): Indicates that the empty marker should be dequeued immediately regardless of its timestamp.
- [drainAfterDecoding](cmsamplebufferattachmentkeydefinitions/drainafterdecoding.md): Indicates whether the sample buffer should be drained after decoding.
- [droppedFrameReason](cmsamplebufferattachmentkeydefinitions/droppedframereason.md): Indicates the reason the current video frame was dropped.
- [droppedFrameReasonInfo](cmsamplebufferattachmentkeydefinitions/droppedframereasoninfo.md): Indicates additional information regarding the dropped video frame.
- [emptyMedia](cmsamplebufferattachmentkeydefinitions/emptymedia.md): Marks an intentionally empty interval in the sequence of samples.
- [endsPreviousSampleDuration](cmsamplebufferattachmentkeydefinitions/endsprevioussampleduration.md): Indicates that sample buffer’s decode timestamp may be used to define the previous sample buffer’s duration.
- [fillDiscontinuitiesWithSilence](cmsamplebufferattachmentkeydefinitions/filldiscontinuitieswithsilence.md): Fill the difference between discontiguous sample buffers with silence.
- [forceKeyFrame](cmsamplebufferattachmentkeydefinitions/forcekeyframe.md): Indicates that the current or next video sample buffer should be forced to be encoded as a key frame.
- [gradualDecoderRefresh](cmsamplebufferattachmentkeydefinitions/gradualdecoderrefresh.md): Indicates the decoder refresh count.
- [permanentEmptyMedia](cmsamplebufferattachmentkeydefinitions/permanentemptymedia.md): Marks the end of the sequence of samples.
- [postNotificationWhenConsumed](cmsamplebufferattachmentkeydefinitions/postnotificationwhenconsumed.md): Indicates that decode pipelines should post a notification when consuming the sample buffer.
- [resetDecoderBeforeDecoding](cmsamplebufferattachmentkeydefinitions/resetdecoderbeforedecoding.md): Indicates whether the sample buffer should be reset before decoding.
- [resumeOutput](cmsamplebufferattachmentkeydefinitions/resumeoutput.md): If present, indicates that output should be resumed following a discontinuity.
- [reverse](cmsamplebufferattachmentkeydefinitions/reverse.md): Indicates that the decoded contents of the sample buffer should be reversed.
- [speedMultiplier](cmsamplebufferattachmentkeydefinitions/speedmultiplier.md): The factor by which the sample buffer’s presentation should be accelerated.
- [stillImageLensStabilizationInfo](cmsamplebufferattachmentkeydefinitions/stillimagelensstabilizationinfo.md): Indicates information about the lens stabilization applied to the current still image buffer.
- [transitionID](cmsamplebufferattachmentkeydefinitions/transitionid.md): Marks a transition from one source of buffers to another.
- [trimDurationAtEnd](cmsamplebufferattachmentkeydefinitions/trimdurationatend.md): The duration that should be removed at the end of the sample buffer, after decoding.
- [trimDurationAtStart](cmsamplebufferattachmentkeydefinitions/trimdurationatstart.md): The duration that should be removed at the beginning of the sample buffer, after decoding.

## Relationships

### Conforms To

- [CVAttachmentKeyDefinitions](../corevideo/cvattachmentkeydefinitions.md)

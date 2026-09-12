> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/attachmentkey](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/attachmentkey)

# CMSampleBuffer.AttachmentKey

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Keys that identify sample buffer attachments.

## Declaration

```swift
struct AttachmentKey
```

## Topics

### Attachment Keys

- [cameraIntrinsicMatrix](attachmentkey/cameraintrinsicmatrix.md)
- [displayEmptyMediaImmediately](attachmentkey/displayemptymediaimmediately.md)
- [drainAfterDecoding](attachmentkey/drainafterdecoding.md)
- [droppedFrameReason](attachmentkey/droppedframereason.md)
- [droppedFrameReasonInfo](attachmentkey/droppedframereasoninfo.md)
- [emptyMedia](attachmentkey/emptymedia.md)
- [endsPreviousSampleDuration](attachmentkey/endsprevioussampleduration.md)
- [fillDiscontinuitiesWithSilence](attachmentkey/filldiscontinuitieswithsilence.md)
- [forceKeyFrame](attachmentkey/forcekeyframe.md)
- [gradualDecoderRefresh](attachmentkey/gradualdecoderrefresh.md)
- [permanentEmptyMedia](attachmentkey/permanentemptymedia.md)
- [postNotificationWhenConsumed](attachmentkey/postnotificationwhenconsumed.md)
- [resetDecoderBeforeDecoding](attachmentkey/resetdecoderbeforedecoding.md)
- [resumeOutput](attachmentkey/resumeoutput.md)
- [reverse](attachmentkey/reverse.md)
- [sampleReferenceByteOffset](attachmentkey/samplereferencebyteoffset.md)
- [sampleReferenceURL](attachmentkey/samplereferenceurl.md)
- [speedMultiplier](attachmentkey/speedmultiplier.md)
- [stillImageLensStabilizationInfo](attachmentkey/stillimagelensstabilizationinfo.md)
- [transitionID](attachmentkey/transitionid.md)
- [trimDurationAtEnd](attachmentkey/trimdurationatend.md)
- [trimDurationAtStart](attachmentkey/trimdurationatstart.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Attachments

- [sampleAttachments](sampleattachments-swift.property.md): An array of sample attachments.
- [CMSampleBuffer.SampleAttachmentsArray](sampleattachmentsarray.md)
- [CMSampleBuffer.PerSampleAttachmentsDictionary](persampleattachmentsdictionary.md): A structure that defines keys to identify per-sample attachments.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/sampleattachments-swift.struct)

# CMSampleBuffer.SampleAttachments

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Attachments applicable to each sample within a sample buffer.

## Declaration

```swift
struct SampleAttachments
```

<a id="overview"></a>

## Overview

Each property of this struct is represented as a key in the [dictionaryRepresentation](sampleattachments-swift.struct/dictionaryrepresentation.md).

## Topics

### Initializers

- [init(\_:)](sampleattachments-swift.struct/init%28__%29.md)

### Instance Properties

- [audioIndependentSampleDecoderRefreshCount](sampleattachments-swift.struct/audioindependentsampledecoderrefreshcount.md): Only present if the audio sample is an independent frame or immediate playout frame.
- [cryptorSubsampleAuxiliaryData](sampleattachments-swift.struct/cryptorsubsampleauxiliarydata.md): Describes the ranges of protected and unprotected data within a protected sample buffer.
- [dependsOnOthers](sampleattachments-swift.struct/dependsonothers.md): Indicates whether the sample depends on other samples for decoding.
- [dictionaryRepresentation](sampleattachments-swift.struct/dictionaryrepresentation.md): Dictionary representation of the sample attachments.
- [displayImmediately](sampleattachments-swift.struct/displayimmediately.md): Indicates whether the sample should be displayed immediately.
- [doNotDisplay](sampleattachments-swift.struct/donotdisplay.md): Indicates whether the sample should be decoded but not displayed.
- [earlierDisplayTimesAllowed](sampleattachments-swift.struct/earlierdisplaytimesallowed.md): Indicates whether later samples may have earlier display times.
- [hasRedundantCoding](sampleattachments-swift.struct/hasredundantcoding.md): Indicates whether the sample has redundant coding.
- [hdr10PlusPerFrameData](sampleattachments-swift.struct/hdr10plusperframedata.md): HDR10+ per frame metadata.
- [hevcStepwiseTemporalSubLayerAccess](sampleattachments-swift.struct/hevcstepwisetemporalsublayeraccess.md): Indicates a step-wise temporal sublayer access (STSA) sample grouping.
- [hevcSyncSampleNALUnitType](sampleattachments-swift.struct/hevcsyncsamplenalunittype.md): Indicates sync sample NAL unit type.
- [hevcTemporalInfo](sampleattachments-swift.struct/hevctemporalinfo.md): Indicates a video frame’s level within a hierarchical frame dependency structure.
- [hevcTemporalSubLayerAccess](sampleattachments-swift.struct/hevctemporalsublayeraccess.md): Indicates a temporal sublayer access grouping.
- [isDependedOnByOthers](sampleattachments-swift.struct/isdependedonbyothers.md): Indicates whether other samples depend on this sample for decoding.
- [isNotSync](sampleattachments-swift.struct/isnotsync.md): Indicates whether the sample is a sync sample.
- [isPartialSync](sampleattachments-swift.struct/ispartialsync.md): Indicates whether the sample is a partial sync sample.
- [postDecodeProcessingMetadata](sampleattachments-swift.struct/postdecodeprocessingmetadata.md): Represents the sequence and frame level metadata for post decode processing. This attachment is used to pass sequence and frame level metadata from a format reader to a decoder or RAW processor. The value should only contain plist types.

### Subscripts

- [subscript(rawAttachment:)](sampleattachments-swift.struct/subscript%28rawattachment_%29.md): Get or set a custom attachment value. The value must be a plist type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

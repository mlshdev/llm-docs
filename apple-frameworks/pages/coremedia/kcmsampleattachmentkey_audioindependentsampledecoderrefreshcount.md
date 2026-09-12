> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsampleattachmentkey_audioindependentsampledecoderrefreshcount](https://developer.apple.com/documentation/coremedia/kcmsampleattachmentkey_audioindependentsampledecoderrefreshcount)

# kCMSampleAttachmentKey_AudioIndependentSampleDecoderRefreshCount (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An attachment that’s only present if the audio sample is an independent frame or immediate playout frame.

## Declaration

```swift
let kCMSampleAttachmentKey_AudioIndependentSampleDecoderRefreshCount: CFString
```

## See Also

### Constants

- [kCMAttachmentMode_ShouldNotPropagate](kcmattachmentmode_shouldnotpropagate.md): A mode that doesn’t propagate attachments to another object.
- [kCMAttachmentMode_ShouldPropagate](kcmattachmentmode_shouldpropagate.md): A mode that propagates attachments to another object.
- [kCMSampleAttachmentKey_HEVCTemporalLevelInfo](kcmsampleattachmentkey_hevctemporallevelinfo.md): An attachment that indicates a video frame’s level within a hierarchical frame dependency structure.
- [kCMSampleAttachmentKey_HEVCTemporalSubLayerAccess](kcmsampleattachmentkey_hevctemporalsublayeraccess.md): An attachment that indicates a temporal sublayer access grouping.
- [kCMSampleAttachmentKey_HEVCStepwiseTemporalSubLayerAccess](kcmsampleattachmentkey_hevcstepwisetemporalsublayeraccess.md): An attachment that indicates a step-wise temporal sublayer access (STSA) sample grouping.
- [kCMSampleAttachmentKey_HEVCSyncSampleNALUnitType](kcmsampleattachmentkey_hevcsyncsamplenalunittype.md): An attachment that indicates a sync sample NAL unit type.
- [kCMSampleAttachmentKey_CryptorSubsampleAuxiliaryData](kcmsampleattachmentkey_cryptorsubsampleauxiliarydata.md): An attachment that describes the ranges of protected and unprotected data within a protected sample buffer.
- [kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix](kcmsamplebufferattachmentkey_cameraintrinsicmatrix.md): An attachment that indicates a 3x3 camera intrinsic matrix to apply to the current sample buffer.

# kCMSampleAttachmentKey_AudioIndependentSampleDecoderRefreshCount (Objective-C)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An attachment that’s only present if the audio sample is an independent frame or immediate playout frame.

## Declaration

```objectivec
extern CFStringRef const kCMSampleAttachmentKey_AudioIndependentSampleDecoderRefreshCount;
```

## See Also

### Constants

- [kCMAttachmentMode_ShouldNotPropagate](kcmattachmentmode_shouldnotpropagate.md): A mode that doesn’t propagate attachments to another object.
- [kCMAttachmentMode_ShouldPropagate](kcmattachmentmode_shouldpropagate.md): A mode that propagates attachments to another object.
- [kCMSampleAttachmentKey_HEVCTemporalLevelInfo](kcmsampleattachmentkey_hevctemporallevelinfo.md): An attachment that indicates a video frame’s level within a hierarchical frame dependency structure.
- [kCMSampleAttachmentKey_HEVCTemporalSubLayerAccess](kcmsampleattachmentkey_hevctemporalsublayeraccess.md): An attachment that indicates a temporal sublayer access grouping.
- [kCMSampleAttachmentKey_HEVCStepwiseTemporalSubLayerAccess](kcmsampleattachmentkey_hevcstepwisetemporalsublayeraccess.md): An attachment that indicates a step-wise temporal sublayer access (STSA) sample grouping.
- [kCMSampleAttachmentKey_HEVCSyncSampleNALUnitType](kcmsampleattachmentkey_hevcsyncsamplenalunittype.md): An attachment that indicates a sync sample NAL unit type.
- [kCMSampleAttachmentKey_CryptorSubsampleAuxiliaryData](kcmsampleattachmentkey_cryptorsubsampleauxiliarydata.md): An attachment that describes the ranges of protected and unprotected data within a protected sample buffer.
- [kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix](kcmsamplebufferattachmentkey_cameraintrinsicmatrix.md): An attachment that indicates a 3x3 camera intrinsic matrix to apply to the current sample buffer.

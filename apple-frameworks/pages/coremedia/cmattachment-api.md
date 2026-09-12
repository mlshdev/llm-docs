> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmattachment-api](https://developer.apple.com/documentation/coremedia/cmattachment-api)

# CMAttachment (Swift)

**Framework:** Core Media  
**Kind:** API Collection

Add supporting metadata to sample buffers.

<a id="overview"></a>

## Overview

An attachment bearer is a Core Foundation type object that supports the suite of key, value, and mode attachment APIs. You can attach any Core Foundation object to an attachment bearer to store additional information.

## Topics

### Processing Attachments

- [CMGetAttachment(\_:key:attachmentModeOut:)](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments(allocator:target:attachmentMode:)](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment(\_:key:value:attachmentMode:)](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments(\_:attachments:attachmentMode:)](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment(\_:key:)](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments(\_:)](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments(\_:destination:)](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.

### Data Types

- [CMAttachmentBearerProtocol](cmattachmentbearerprotocol.md): A protocol for objects that can carry attachments.
- [CMAttachmentBearer](cmattachmentbearer.md): An object that can carry attachments.
- [CMAttachmentMode](cmattachmentmode.md): The mode to use when propagating attachments.

### Constants

- [kCMAttachmentMode_ShouldNotPropagate](kcmattachmentmode_shouldnotpropagate.md): A mode that doesn’t propagate attachments to another object.
- [kCMAttachmentMode_ShouldPropagate](kcmattachmentmode_shouldpropagate.md): A mode that propagates attachments to another object.
- [kCMSampleAttachmentKey_HEVCTemporalLevelInfo](kcmsampleattachmentkey_hevctemporallevelinfo.md): An attachment that indicates a video frame’s level within a hierarchical frame dependency structure.
- [kCMSampleAttachmentKey_HEVCTemporalSubLayerAccess](kcmsampleattachmentkey_hevctemporalsublayeraccess.md): An attachment that indicates a temporal sublayer access grouping.
- [kCMSampleAttachmentKey_HEVCStepwiseTemporalSubLayerAccess](kcmsampleattachmentkey_hevcstepwisetemporalsublayeraccess.md): An attachment that indicates a step-wise temporal sublayer access (STSA) sample grouping.
- [kCMSampleAttachmentKey_HEVCSyncSampleNALUnitType](kcmsampleattachmentkey_hevcsyncsamplenalunittype.md): An attachment that indicates a sync sample NAL unit type.
- [kCMSampleAttachmentKey_CryptorSubsampleAuxiliaryData](kcmsampleattachmentkey_cryptorsubsampleauxiliarydata.md): An attachment that describes the ranges of protected and unprotected data within a protected sample buffer.
- [kCMSampleAttachmentKey_AudioIndependentSampleDecoderRefreshCount](kcmsampleattachmentkey_audioindependentsampledecoderrefreshcount.md): An attachment that’s only present if the audio sample is an independent frame or immediate playout frame.
- [kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix](kcmsamplebufferattachmentkey_cameraintrinsicmatrix.md): An attachment that indicates a 3x3 camera intrinsic matrix to apply to the current sample buffer.

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMTaggedBuffer](cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMMutableDataBlockBuffer](cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadOnlyDataBlockBuffer](cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMReadySampleBuffer](cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.

# CMAttachment (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

Add supporting metadata to sample buffers.

<a id="overview"></a>

## Overview

An attachment bearer is a Core Foundation type object that supports the suite of key, value, and mode attachment APIs. You can attach any Core Foundation object to an attachment bearer to store additional information.

## Topics

### Processing Attachments

- [CMGetAttachment](cmgetattachment%28__key_attachmentmodeout_%29.md): Returns an attachment from an attachment bearer object.
- [CMCopyDictionaryOfAttachments](cmcopydictionaryofattachments%28allocator_target_attachmentmode_%29.md): Returns a dictionary of all attachments for an attachment bearer object.
- [CMSetAttachment](cmsetattachment%28__key_value_attachmentmode_%29.md): Sets or adds an attachment to an attachment bearer object.
- [CMSetAttachments](cmsetattachments%28__attachments_attachmentmode_%29.md): Sets a dictionary of attachments on an attachment bearer object.
- [CMRemoveAttachment](cmremoveattachment%28__key_%29.md): Removes a specific attachment from an attachment bearer object.
- [CMRemoveAllAttachments](cmremoveallattachments%28__%29.md): Removes all attachments from an attachment bearer object.
- [CMPropagateAttachments](cmpropagateattachments%28__destination_%29.md): Copies all propagable attachments from one attachment bearer object to another.

### Data Types

- [CMAttachmentBearerRef](cmattachmentbearer.md): An object that can carry attachments.
- [CMAttachmentMode](cmattachmentmode.md): The mode to use when propagating attachments.

### Constants

- [kCMAttachmentMode_ShouldNotPropagate](kcmattachmentmode_shouldnotpropagate.md): A mode that doesn’t propagate attachments to another object.
- [kCMAttachmentMode_ShouldPropagate](kcmattachmentmode_shouldpropagate.md): A mode that propagates attachments to another object.
- [kCMSampleAttachmentKey_HEVCTemporalLevelInfo](kcmsampleattachmentkey_hevctemporallevelinfo.md): An attachment that indicates a video frame’s level within a hierarchical frame dependency structure.
- [kCMSampleAttachmentKey_HEVCTemporalSubLayerAccess](kcmsampleattachmentkey_hevctemporalsublayeraccess.md): An attachment that indicates a temporal sublayer access grouping.
- [kCMSampleAttachmentKey_HEVCStepwiseTemporalSubLayerAccess](kcmsampleattachmentkey_hevcstepwisetemporalsublayeraccess.md): An attachment that indicates a step-wise temporal sublayer access (STSA) sample grouping.
- [kCMSampleAttachmentKey_HEVCSyncSampleNALUnitType](kcmsampleattachmentkey_hevcsyncsamplenalunittype.md): An attachment that indicates a sync sample NAL unit type.
- [kCMSampleAttachmentKey_CryptorSubsampleAuxiliaryData](kcmsampleattachmentkey_cryptorsubsampleauxiliarydata.md): An attachment that describes the ranges of protected and unprotected data within a protected sample buffer.
- [kCMSampleAttachmentKey_AudioIndependentSampleDecoderRefreshCount](kcmsampleattachmentkey_audioindependentsampledecoderrefreshcount.md): An attachment that’s only present if the audio sample is an independent frame or immediate playout frame.
- [kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix](kcmsamplebufferattachmentkey_cameraintrinsicmatrix.md): An attachment that indicates a 3x3 camera intrinsic matrix to apply to the current sample buffer.

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia](https://developer.apple.com/documentation/coremedia)

# Core Media (Swift)

**Framework:** Core Media  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Represent time-based audio-visual assets with essential data types.

<a id="overview"></a>

## Overview

The Core Media framework defines the media pipeline used by AVFoundation and other high-level media frameworks found on Apple platforms. Use Core Media’s low-level data types and interfaces to efficiently process media samples and manage queues of media data.

## Topics

### Sample Processing

- [CMSampleBuffer](coremedia/cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](coremedia/cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](coremedia/cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](coremedia/cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](coremedia/cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMTaggedBuffer](coremedia/cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMMutableDataBlockBuffer](coremedia/cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadOnlyDataBlockBuffer](coremedia/cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMReadySampleBuffer](coremedia/cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](coremedia/cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](coremedia/cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.

### Time Representation

- [CMTime](coremedia/cmtime-api.md): A structure that represents time.
- [CMTimeRange](coremedia/cmtimerange-api.md): A structure that represents a range of time.
- [CMTimeMapping](coremedia/cmtimemapping-api.md): A structure that maps a segment of a source time range to a target time range.

### Media Synchronization

- [CMClock](coremedia/cmclock-api.md): A reference clock you use to synchronize applications and devices.
- [CMAudioClock](coremedia/cmaudioclock-api.md): A specialized reference clock that synchronizes with audio sources.
- [CMTimebase](coremedia/cmtimebase-api.md): A model of a timeline under application control.

### Text Markup

- [CMTextMarkup](coremedia/cmtextmarkup.md): Attributes that specify text markup in legible media.

### Metadata

- [CMMetadata](coremedia/cmmetadata.md): The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.
- [CMTag](coremedia/cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTag](coremedia/cmtag-swift.class.md): A tag to set additional metadata on media buffers.
- [CMTypedTag](coremedia/cmtypedtag.md): A tag to set additional metadata on media buffers, with an associated Swift type for its value.
- [CMTagCollection](coremedia/cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](coremedia/cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](coremedia/cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](coremedia/cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.
- [CMPackingType](coremedia/cmpackingtype.md): The type of packing within each video frame, if any.

### Queues

- [CMSimpleQueue](coremedia/cmsimplequeue-api.md): A simple, lockless FIFO queue of elements.
- [CMBufferQueue](coremedia/cmbufferqueue-api.md): A queue of timed buffers.
- [CMMemoryPool](coremedia/cmmemorypool-api.md): An object that optimizes memory allocation when working with large blocks of memory.

### Reference

- [Core Media Constants](coremedia/core-media-constants.md)
- [Core Media Functions](coremedia/core-media-functions.md)
- [Core Media Type Aliases](coremedia/core-media-type-aliases.md)

### Structures

- [CMCameraIntrinsicMatrix](coremedia/cmcameraintrinsicmatrix.md): A matrix that describes the camera’s intrinsic properties.
- [CMCustomNotificationInfo](coremedia/cmcustomnotificationinfo.md): Holds custom userInfo for notification sent for a buffer event.

### Variables

- [COREMEDIA_SUPPORTS_GENLOCK_CLOCK](coremedia/coremedia_supports_genlock_clock.md)
- [kCMClockError_PreferredStartTimeNotAvailable](coremedia/kcmclockerror_preferredstarttimenotavailable.md)
- [kCMFormatDescriptionLogTransferFunction_AppleLog2](coremedia/kcmformatdescriptionlogtransferfunction_applelog2.md): Log Transfer Function identifier for Apple Log 2.
- [kCMGenlockClockNotificationPayload_AnyDisplayIsSynchronizedToLockedGenlockSignal](coremedia/kcmgenlockclocknotificationpayload_anydisplayissynchronizedtolockedgenlocksignal.md)
- [kCMGenlockClockNotification_DisplayGenlockModeChanged](coremedia/kcmgenlockclocknotification_displaygenlockmodechanged.md): Posted when the display mode changes from genlock to non-genlock or vice versa.
- [kCMMetadataBaseDataType_ISOLatin1](coremedia/kcmmetadatabasedatatype_isolatin1.md)
- [kCMMetadataBaseDataType_MacRoman](coremedia/kcmmetadatabasedatatype_macroman.md)
- [kCMMetadataDataType_QuickTimeMetadataSMPTE2094_50](coremedia/kcmmetadatadatatype_quicktimemetadatasmpte2094_50.md)
- [kCMMetadataFormatDescriptionKey_HumanReadableString](coremedia/kcmmetadataformatdescriptionkey_humanreadablestring.md)
- [kCMMetadataFormatDescriptionMetadataSpecificationKey_HumanReadableString](coremedia/kcmmetadataformatdescriptionmetadataspecificationkey_humanreadablestring.md)
- [kCMMetadataIdentifier_ITUT_T35MetadataSMPTE2094_50](coremedia/kcmmetadataidentifier_itut_t35metadatasmpte2094_50.md)

### Type Aliases

- [CMAttachmentAccess](coremedia/cmattachmentaccess.md)
- [CMAttachmentContainer](coremedia/cmattachmentcontainer.md)
- [CMAttachmentKeyDefinitions](coremedia/cmattachmentkeydefinitions.md)
- [CMAttachmentPropagationMode](coremedia/cmattachmentpropagationmode.md)
- [CMAttachmentRawValue](coremedia/cmattachmentrawvalue.md)
- [CMAttachmentValueRepresentable](coremedia/cmattachmentvaluerepresentable.md)

### Enumerations

- [CMBlockBufferAttachmentKeyDefinitions](coremedia/cmblockbufferattachmentkeydefinitions.md): A namespace for block buffer attachment keys.
- [CMDroppedFrameReason](coremedia/cmdroppedframereason.md)
- [CMSampleBufferAttachmentKeyDefinitions](coremedia/cmsamplebufferattachmentkeydefinitions.md): A namespace for sample buffer attachment keys.
- [CMStillImageLensStabilization](coremedia/cmstillimagelensstabilization.md)

# Core Media (Objective-C)

**Framework:** Core Media  
**Kind:** Framework  
**Availability:** iOS 4.0+ · iPadOS · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Represent time-based audio-visual assets with essential data types.

<a id="overview"></a>

## Overview

The Core Media framework defines the media pipeline used by AVFoundation and other high-level media frameworks found on Apple platforms. Use Core Media’s low-level data types and interfaces to efficiently process media samples and manage queues of media data.

## Topics

### Sample Processing

- [CMSampleBuffer](coremedia/cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](coremedia/cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](coremedia/cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMFormatDescription](coremedia/cmformatdescription-api.md): A media format descriptor that describes the samples in a sample buffer.
- [CMAttachment](coremedia/cmattachment-api.md): Add supporting metadata to sample buffers.

### Time Representation

- [CMTime](coremedia/cmtime-api.md): A structure that represents time.
- [CMTimeRange](coremedia/cmtimerange-api.md): A structure that represents a range of time.
- [CMTimeMapping](coremedia/cmtimemapping-api.md): A structure that maps a segment of a source time range to a target time range.

### Media Synchronization

- [CMClock](coremedia/cmclock-api.md): A reference clock you use to synchronize applications and devices.
- [CMAudioClock](coremedia/cmaudioclock-api.md): A specialized reference clock that synchronizes with audio sources.
- [CMTimebase](coremedia/cmtimebase-api.md): A model of a timeline under application control.

### Text Markup

- [CMTextMarkup](coremedia/cmtextmarkup.md): Attributes that specify text markup in legible media.

### Metadata

- [CMMetadata](coremedia/cmmetadata.md): The APIs for working with the framework’s Metadata Identifier Services and Metadata Data Type Registry.
- [CMTag](coremedia/cmtag-api.md): Types and interfaces for working with Core Media tags.
- [CMTagCollection](coremedia/cmtagcollection.md): Objective-C types and interfaces for working with Core Media tag collections.
- [CMProjectionType](coremedia/cmprojectiontype.md): Constants describing the projection surface information in a 3D video buffer or channel.
- [CMStereoViewComponents](coremedia/cmstereoviewcomponents.md): Constants describing the stereo views contained within a buffer or channel.
- [CMStereoViewInterpretationOptions](coremedia/cmstereoviewinterpretationoptions.md): Create a set of stereo view interpretation options from a constant.
- [CMPackingType](coremedia/cmpackingtype.md): The type of packing within each video frame, if any.

### Queues

- [CMSimpleQueue](coremedia/cmsimplequeue-api.md): A simple, lockless FIFO queue of elements.
- [CMBufferQueue](coremedia/cmbufferqueue-api.md): A queue of timed buffers.
- [CMMemoryPool](coremedia/cmmemorypool-api.md): An object that optimizes memory allocation when working with large blocks of memory.

### Reference

- [Core Media Constants](coremedia/core-media-constants.md)
- [Core Media Functions](coremedia/core-media-functions.md)
- [Core Media Type Aliases](coremedia/core-media-type-aliases.md)
- [Core Media Macros](coremedia/core-media-macros.md)

### Variables

- [kCMFormatDescriptionLogTransferFunction_AppleLog2](coremedia/kcmformatdescriptionlogtransferfunction_applelog2.md): Log Transfer Function identifier for Apple Log 2.
- [kCMGenlockClockNotificationPayload_AnyDisplayIsSynchronizedToLockedGenlockSignal](coremedia/kcmgenlockclocknotificationpayload_anydisplayissynchronizedtolockedgenlocksignal.md)
- [kCMGenlockClockNotification_DisplayGenlockModeChanged](coremedia/kcmgenlockclocknotification_displaygenlockmodechanged.md): Posted when the display mode changes from genlock to non-genlock or vice versa.
- [kCMMetadataBaseDataType_ISOLatin1](coremedia/kcmmetadatabasedatatype_isolatin1.md)
- [kCMMetadataBaseDataType_MacRoman](coremedia/kcmmetadatabasedatatype_macroman.md)
- [kCMMetadataDataType_QuickTimeMetadataSMPTE2094_50](coremedia/kcmmetadatadatatype_quicktimemetadatasmpte2094_50.md)
- [kCMMetadataFormatDescriptionKey_HumanReadableString](coremedia/kcmmetadataformatdescriptionkey_humanreadablestring.md)
- [kCMMetadataFormatDescriptionMetadataSpecificationKey_HumanReadableString](coremedia/kcmmetadataformatdescriptionmetadataspecificationkey_humanreadablestring.md)
- [kCMMetadataIdentifier_ITUT_T35MetadataSMPTE2094_50](coremedia/kcmmetadataidentifier_itut_t35metadatasmpte2094_50.md)
- [kCMTagProjectionTypeParametricImmersive](coremedia/kcmtagprojectiontypeparametricimmersive.md)

### Functions

- [CMClockCreateGenlockClock](coremedia/cmclockcreategenlockclock.md): Returns a clock whose time is based on genlock when the system is synchronized to an external genlock signal, and on host time otherwise.
- [CMClockGetPreferredStartTimePattern](coremedia/cmclockgetpreferredstarttimepattern.md): Retrieves a description of the pattern of preferred start times, such as for synchronization with an external genlock signal.
- [CMClockImplementsGetPreferredStartTimePattern](coremedia/cmclockimplementsgetpreferredstarttimepattern.md): Indicates whether a clock implements the `CMClockGetPreferredStartTimePattern` function.
- [CMIsAnyDisplaySynchronizedToLockedGenlockSignal](coremedia/cmisanydisplaysynchronizedtolockedgenlocksignal.md): Queries whether any display is synchronized to a locked external genlock signal.
- [CMTaggedBufferGroupFormatDescriptionCreateForTaggedBufferGroupWithExtensions](coremedia/cmtaggedbuffergroupformatdescriptioncreatefortaggedbuffergroupwithextensions.md)

### Macros

- [CM_BRIDGED_MUTABLE_TYPE](coremedia/cm_bridged_mutable_type.md)
- [CM_REFINED_FOR_SWIFT](coremedia/cm_refined_for_swift.md)
- [CM_RETURNS_NOT_RETAINED](coremedia/cm_returns_not_retained.md)
- [COREMEDIA_SUPPORTS_GENLOCK_CLOCK](coremedia/coremedia_supports_genlock_clock.md)

### Enumeration Cases

- [kCMClockError_PreferredStartTimeNotAvailable](coremedia/kcmclockerror_preferredstarttimenotavailable.md)

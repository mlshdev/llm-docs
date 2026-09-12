> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmformatdescription-api](https://developer.apple.com/documentation/coremedia/cmformatdescription-api)

# CMFormatDescription (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A media format descriptor that describes the samples in a sample buffer.

<a id="overview"></a>

## Overview

`CMFormatDescriptions` are immutable Core Foundation objects that describe media data of various types, including audio, video, and muxed media data. There are two types of API: media-type-agnostic APIs (supported by all CMFormatDescriptions) and media-type-specific APIs. The media-type-agnostic APIs are prefixed with `CMFormatDescription`, and the media-type-specific APIs are prefixed with `CMAudioFormatDescription`, `CMVideoFormatDescription`, and so on.

## Topics

### Creating Format Descriptions

- [CMFormatDescriptionCreate(allocator:mediaType:mediaSubType:extensions:formatDescriptionOut:)](cmformatdescriptioncreate%28allocator_mediatype_mediasubtype_extensions_formatdescriptionout_%29.md): Creates a format description for general use.

### Comparing Format Descriptions

- [CMFormatDescriptionEqual(\_:otherFormatDescription:)](cmformatdescriptionequal%28__otherformatdescription_%29.md): Returns a Boolean value that indicates whether two format descriptions are equal.
- [CMFormatDescriptionEqualIgnoringExtensionKeys(\_:otherFormatDescription:extensionKeysToIgnore:sampleDescriptionExtensionAtomKeysToIgnore:)](cmformatdescriptionequalignoringextensionkeys%28__otherformatdescription_extensionkeystoignore_sampledescriptionextensionatomkeystoignore_%29.md): Returns a Boolean value that indicates whether two format descriptions are equal, ignoring differences in the extension keys you specify.

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType(\_:)](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetMediaSubType(\_:)](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtension(\_:extensionKey:)](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetExtensions(\_:)](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
- [CMFormatDescriptionGetTypeID()](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.

### Working with Audio Descriptions

- [CMSoundDescriptionFlavor](cmsounddescriptionflavor.md): Types that represent sound format descriptions.
- [CMAudioFormatDescriptionCreateSummary(allocator:formatDescriptionArray:flags:formatDescriptionOut:)](cmaudioformatdescriptioncreatesummary%28allocator_formatdescriptionarray_flags_formatdescriptionout_%29.md): Creates a summary audio format description from an array of descriptions.
- [CMAudioFormatDescriptionCreate(allocator:asbd:layoutSize:layout:magicCookieSize:magicCookie:extensions:formatDescriptionOut:)](cmaudioformatdescriptioncreate%28allocator_asbd_layoutsize_layout_magiccookiesize_magiccookie_extensions_formatdescriptionout_%29.md): Creates a format description for an audio media stream.
- [CMAudioFormatDescriptionEqual(\_:otherFormatDescription:equalityMask:equalityMaskOut:)](cmaudioformatdescriptionequal%28__otherformatdescription_equalitymask_equalitymaskout_%29.md): Returns a Boolean value that indicates whether the two audio format descriptions are equal.
- [CMAudioFormatDescriptionGetChannelLayout(\_:sizeOut:)](cmaudioformatdescriptiongetchannellayout%28__sizeout_%29.md): Returns a read-only pointer to, and the size of, the audio channel layout inside an audio format description.
- [CMAudioFormatDescriptionGetFormatList(\_:sizeOut:)](cmaudioformatdescriptiongetformatlist%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the array of audio format list item structures in an audio format description.
- [CMAudioFormatDescriptionGetMagicCookie(\_:sizeOut:)](cmaudioformatdescriptiongetmagiccookie%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the magic cookie in an audio format description.
- [CMAudioFormatDescriptionGetMostCompatibleFormat(\_:)](cmaudioformatdescriptiongetmostcompatibleformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetRichestDecodableFormat(\_:)](cmaudioformatdescriptiongetrichestdecodableformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetStreamBasicDescription(\_:)](cmaudioformatdescriptiongetstreambasicdescription%28__%29.md): Returns a read-only pointer to the audio stream description in an audio format description.
- [CMDoesBigEndianSoundDescriptionRequireLegacyCBRSampleTableLayout(\_:flavor:)](cmdoesbigendiansounddescriptionrequirelegacycbrsampletablelayout%28__flavor_%29.md): Returns a Boolean value that indicates whether the sample tables need to use the legacy constant bit-rate encoding layout.
- [CMSwapBigEndianSoundDescriptionToHost(\_:\_:)](cmswapbigendiansounddescriptiontohost%28____%29.md): Converts a sound description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianSoundDescriptionToBig(\_:\_:)](cmswaphostendiansounddescriptiontobig%28____%29.md): Converts a sound description data structure from host-endian to big-endian, in place.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionData(allocator:bigEndianSoundDescriptionData:size:flavor:formatDescriptionOut:)](cmaudioformatdescriptioncreatefrombigendiansounddescriptiondata%28allocator_bigendiansounddescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionBlockBuffer(allocator:bigEndianSoundDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmaudioformatdescriptioncreatefrombigendiansounddescriptionblockbuffer%28allocator_bigendiansounddescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure in a buffer.
- [CMAudioFormatDescriptionCopyAsBigEndianSoundDescriptionBlockBuffer(allocator:audioFormatDescription:flavor:blockBufferOut:)](cmaudioformatdescriptioncopyasbigendiansounddescriptionblockbuffer%28allocator_audioformatdescription_flavor_blockbufferout_%29.md): Copies the contents of an audio format description to a buffer in big-endian byte ordering.

### Working with Video Descriptions

- [CMImageDescriptionFlavor](cmimagedescriptionflavor.md): Types that represent image format descriptions.
- [CMVideoFormatDescriptionCreate(allocator:codecType:width:height:extensions:formatDescriptionOut:)](cmvideoformatdescriptioncreate%28allocator_codectype_width_height_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream.
- [CMVideoFormatDescriptionCreateForImageBuffer(allocator:imageBuffer:formatDescriptionOut:)](cmvideoformatdescriptioncreateforimagebuffer%28allocator_imagebuffer_formatdescriptionout_%29.md): Creates a format description for a video media stream by using an image buffer.
- [CMVideoFormatDescriptionGetCleanAperture(\_:originIsAtTopLeft:)](cmvideoformatdescriptiongetcleanaperture%28__originisattopleft_%29.md): Returns a rectangle that defines the portion of the encoded pixel dimensions that represent the image data that’s valid for displaying.
- [CMVideoFormatDescriptionGetDimensions(\_:)](cmvideoformatdescriptiongetdimensions%28__%29.md): Returns the video dimensions, in encoded pixels.
- [CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers()](cmvideoformatdescriptiongetextensionkeyscommonwithimagebuffers%28%29.md): Returns an array of keys that you use for video format description extensions, image buffer attachments, and attributes.
- [CMVideoFormatDescriptionGetPresentationDimensions(\_:usePixelAspectRatio:useCleanAperture:)](cmvideoformatdescriptiongetpresentationdimensions%28__usepixelaspectratio_usecleanaperture_%29.md): Returns the dimensions after taking the pixel aspect ratio and clean aperture into account.
- [CMVideoFormatDescriptionMatchesImageBuffer(\_:imageBuffer:)](cmvideoformatdescriptionmatchesimagebuffer%28__imagebuffer_%29.md): Returns a Boolean value that indicates whether a format description matches an image buffer.
- [CMVideoFormatDescriptionCreateFromH264ParameterSets(allocator:parameterSetCount:parameterSetPointers:parameterSetSizes:nalUnitHeaderLength:formatDescriptionOut:)](cmvideoformatdescriptioncreatefromh264parametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_formatdescriptionout_%29.md): Creates a format description for a video media stream that the parameter set describes.
- [CMVideoFormatDescriptionCreateFromHEVCParameterSets(allocator:parameterSetCount:parameterSetPointers:parameterSetSizes:nalUnitHeaderLength:extensions:formatDescriptionOut:)](cmvideoformatdescriptioncreatefromhevcparametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream using HEVC (H.265) parameter set NAL units.
- [CMVideoFormatDescriptionGetH264ParameterSetAtIndex(\_:parameterSetIndex:parameterSetPointerOut:parameterSetSizeOut:parameterSetCountOut:nalUnitHeaderLengthOut:)](cmvideoformatdescriptiongeth264parametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set that an H.264 format description contains.
- [CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer(allocator:videoFormatDescription:stringEncoding:flavor:blockBufferOut:)](cmvideoformatdescriptioncopyasbigendianimagedescriptionblockbuffer%28allocator_videoformatdescription_stringencoding_flavor_blockbufferout_%29.md): Copies the contents of a video format description to a buffer in big-endian byte ordering.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionBlockBuffer(allocator:bigEndianImageDescriptionBlockBuffer:stringEncoding:flavor:formatDescriptionOut:)](cmvideoformatdescriptioncreatefrombigendianimagedescriptionblockbuffer%28allocator_bigendianimagedescriptionblockbuffer_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description inside a buffer.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionData(allocator:bigEndianImageDescriptionData:size:stringEncoding:flavor:formatDescriptionOut:)](cmvideoformatdescriptioncreatefrombigendianimagedescriptiondata%28allocator_bigendianimagedescriptiondata_size_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description structure.
- [CMSwapBigEndianImageDescriptionToHost(\_:\_:)](cmswapbigendianimagedescriptiontohost%28____%29.md): Converts an image description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianImageDescriptionToBig(\_:\_:)](cmswaphostendianimagedescriptiontobig%28____%29.md): Converts an image description data structure from host-endian to big-endian, in place.

### Working with Muxed Descriptions

- [CMMuxedFormatDescriptionCreate(allocator:muxType:extensions:formatDescriptionOut:)](cmmuxedformatdescriptioncreate%28allocator_muxtype_extensions_formatdescriptionout_%29.md): Creates a format description for a muxed media stream.

### Working with Metadata Descriptions

- [CMMetadataDescriptionFlavor](cmmetadatadescriptionflavor.md): Types that represent metadata format descriptions.
- [CMMetadataFormatDescriptionCreateWithKeys(allocator:metadataType:keys:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithkeys%28allocator_metadatatype_keys_formatdescriptionout_%29.md): Creates a metadata format description with the metadata keys you specify.
- [CMMetadataFormatDescriptionGetKeyWithLocalID(\_:localKeyID:)](cmmetadataformatdescriptiongetkeywithlocalid%28__localkeyid_%29.md): Returns the key for the local identifier.
- [CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer(allocator:metadataFormatDescription:flavor:blockBufferOut:)](cmmetadataformatdescriptioncopyasbigendianmetadatadescriptionblockbuffer%28allocator_metadataformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a metadata format description to a buffer in big-endian byte order.
- [CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions(allocator:sourceDescription:otherSourceDescription:formatDescriptionOut:)](cmmetadataformatdescriptioncreatebymergingmetadataformatdescriptions%28allocator_sourcedescription_othersourcedescription_formatdescriptionout_%29.md): Creates a metadata format description object by merging with another description.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer(allocator:bigEndianMetadataDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptionblockbuffer%28allocator_bigendianmetadatadescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure inside a buffer.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData(allocator:bigEndianMetadataDescriptionData:size:flavor:formatDescriptionOut:)](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptiondata%28allocator_bigendianmetadatadescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure.
- [CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications(allocator:sourceDescription:metadataSpecifications:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithmetadataformatdescriptionandmetadataspecifications%28allocator_sourcedescription_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description by extending an existing description with the values you specify.
- [CMMetadataFormatDescriptionCreateWithMetadataSpecifications(allocator:metadataType:metadataSpecifications:formatDescriptionOut:)](cmmetadataformatdescriptioncreatewithmetadataspecifications%28allocator_metadatatype_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description with the specifications you specify.
- [CMSwapBigEndianMetadataDescriptionToHost(\_:\_:)](cmswapbigendianmetadatadescriptiontohost%28____%29.md): Converts a metadata description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianMetadataDescriptionToBig(\_:\_:)](cmswaphostendianmetadatadescriptiontobig%28____%29.md): Converts a metadata description data structure from host-endian to big-endian, in place.
- [CMMetadataFormatDescriptionGetIdentifiers(\_:)](cmmetadataformatdescriptiongetidentifiers%28__%29.md): Returns an array of metadata identifiers from a metadata format description.

### Working with Text Descriptions

- [CMTextDescriptionFlavor](cmtextdescriptionflavor.md): Types that represent text format descriptions.
- [CMTextFormatDescriptionGetDefaultStyle(\_:localFontIDOut:boldOut:italicOut:underlineOut:fontSizeOut:colorComponentsOut:)](cmtextformatdescriptiongetdefaultstyle%28__localfontidout_boldout_italicout_underlineout_fontsizeout_colorcomponentsout_%29.md): Returns the default text style.
- [CMTextFormatDescriptionGetDefaultTextBox(\_:originIsAtTopLeft:heightOfTextTrack:defaultTextBoxOut:)](cmtextformatdescriptiongetdefaulttextbox%28__originisattopleft_heightoftexttrack_defaulttextboxout_%29.md): Returns the default text box.
- [CMTextFormatDescriptionGetDisplayFlags(\_:displayFlagsOut:)](cmtextformatdescriptiongetdisplayflags%28__displayflagsout_%29.md): Returns the display flags.
- [CMTextFormatDescriptionGetFontName(\_:localFontID:fontNameOut:)](cmtextformatdescriptiongetfontname%28__localfontid_fontnameout_%29.md): Returns a font name for a local font identifier.
- [CMTextFormatDescriptionGetJustification(\_:horizontalOut:verticalOut:)](cmtextformatdescriptiongetjustification%28__horizontalout_verticalout_%29.md): Returns the horizontal and vertical justification.
- [CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer(allocator:textFormatDescription:flavor:blockBufferOut:)](cmtextformatdescriptioncopyasbigendiantextdescriptionblockbuffer%28allocator_textformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a text format description to a buffer in big-endian byte order.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer(allocator:bigEndianTextDescriptionBlockBuffer:flavor:mediaType:formatDescriptionOut:)](cmtextformatdescriptioncreatefrombigendiantextdescriptionblockbuffer%28allocator_bigendiantextdescriptionblockbuffer_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure inside a buffer.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData(allocator:bigEndianTextDescriptionData:size:flavor:mediaType:formatDescriptionOut:)](cmtextformatdescriptioncreatefrombigendiantextdescriptiondata%28allocator_bigendiantextdescriptiondata_size_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure.
- [CMSwapBigEndianTextDescriptionToHost(\_:\_:)](cmswapbigendiantextdescriptiontohost%28____%29.md): Converts a text description structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTextDescriptionToBig(\_:\_:)](cmswaphostendiantextdescriptiontobig%28____%29.md): Converts a text description structure from host-endian to big-endian, in place.

### Working with Time Code Descriptions

- [CMTimeCodeDescriptionFlavor](cmtimecodedescriptionflavor.md): Types that represent time code format descriptions.
- [CMTimeCodeFormatDescriptionCreate(allocator:timeCodeFormatType:frameDuration:frameQuanta:flags:extensions:formatDescriptionOut:)](cmtimecodeformatdescriptioncreate%28allocator_timecodeformattype_frameduration_framequanta_flags_extensions_formatdescriptionout_%29.md): Creates a format description for time code media.
- [CMTimeCodeFormatDescriptionGetFrameDuration(\_:)](cmtimecodeformatdescriptiongetframeduration%28__%29.md): Returns the duration of each frame.
- [CMTimeCodeFormatDescriptionGetFrameQuanta(\_:)](cmtimecodeformatdescriptiongetframequanta%28__%29.md): Returns the frames per second for a time code, or frames per tick in counter mode.
- [CMTimeCodeFormatDescriptionGetTimeCodeFlags(\_:)](cmtimecodeformatdescriptiongettimecodeflags%28__%29.md): Returns time code flags.
- [CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer(allocator:timeCodeFormatDescription:flavor:blockBufferOut:)](cmtimecodeformatdescriptioncopyasbigendiantimecodedescriptionblockbuffer%28allocator_timecodeformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a time code format description to a buffer in big-endian byte order.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer(allocator:bigEndianTimeCodeDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptionblockbuffer%28allocator_bigendiantimecodedescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description data structure in a buffer.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData(allocator:bigEndianTimeCodeDescriptionData:size:flavor:formatDescriptionOut:)](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptiondata%28allocator_bigendiantimecodedescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description structure.
- [CMSwapBigEndianTimeCodeDescriptionToHost(\_:\_:)](cmswapbigendiantimecodedescriptiontohost%28____%29.md): Converts a time code description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTimeCodeDescriptionToBig(\_:\_:)](cmswaphostendiantimecodedescriptiontobig%28____%29.md): Converts a time code description data structure from host-endian to big-endian, in place.

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer(allocator:closedCaptionFormatDescription:flavor:blockBufferOut:)](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer(allocator:bigEndianClosedCaptionDescriptionBlockBuffer:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData(allocator:bigEndianClosedCaptionDescriptionData:size:flavor:formatDescriptionOut:)](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapHostEndianClosedCaptionDescriptionToBig(\_:\_:)](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost(\_:\_:)](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.

### Format Description Types

- [CMFormatDescription](cmformatdescription.md): An object that describes a media format descriptor.
- [CMAudioFormatDescription](cmaudioformatdescription.md): A type you use to interact with audio format descriptions.
- [CMClosedCaptionFormatDescription](cmclosedcaptionformatdescription.md): A type you use to interact with closed caption format descriptions.
- [CMMetadataFormatDescription](cmmetadataformatdescription.md): A type you use to interact with metadata format descriptions.
- [CMMuxedFormatDescription](cmmuxedformatdescription.md): A type you use to interact with muxed format descriptions.
- [CMTextFormatDescription](cmtextformatdescription.md): A type you use to interact with text format descriptions.
- [CMTimeCodeFormatDescription](cmtimecodeformatdescription.md): A type you use to interact with time code format descriptions.
- [CMVideoFormatDescription](cmvideoformatdescription.md): A type you use to interact with video format descriptions.

### Format Description Extension Keys

- [kCMFormatDescriptionExtension_ContentColorVolume](kcmformatdescriptionextension_contentcolorvolume.md)
- [kCMFormatDescriptionExtension_HasAdditionalViews](kcmformatdescriptionextension_hasadditionalviews.md)
- [kCMFormatDescriptionExtension_HasLeftStereoEyeView](kcmformatdescriptionextension_hasleftstereoeyeview.md)
- [kCMFormatDescriptionExtension_HasRightStereoEyeView](kcmformatdescriptionextension_hasrightstereoeyeview.md)
- [kCMFormatDescriptionExtension_HeroEye](kcmformatdescriptionextension_heroeye.md)
- [kCMFormatDescriptionExtension_HorizontalDisparityAdjustment](kcmformatdescriptionextension_horizontaldisparityadjustment.md)
- [kCMFormatDescriptionExtension_LogTransferFunction](kcmformatdescriptionextension_logtransferfunction.md)
- [kCMFormatDescriptionExtension_StereoCameraBaseline](kcmformatdescriptionextension_stereocamerabaseline.md)
- [kCMFormatDescriptionHeroEye_Left](kcmformatdescriptionheroeye_left.md)
- [kCMFormatDescriptionHeroEye_Right](kcmformatdescriptionheroeye_right.md)

### Format Types

- [CMClosedCaptionFormatType](cmclosedcaptionformattype.md): A closed caption format type.
- [CMMetadataFormatType](cmmetadataformattype.md): A metadata format type.
- [Metadata Format Types](metadata-format-types.md): Constants that represent media format types.
- [CMSubtitleFormatType](cmsubtitleformattype.md): A type that represents a text subtitle format.
- [Subtitle Format Types](subtitle-format-types.md): Constants that represent subtitle format types.
- [CMTimeCodeFormatType](cmtimecodeformattype.md): A time code format type.
- [Time Code Formats](time-code-formats.md): Constants that represent time code format types.
- [CMTextFormatType](cmtextformattype.md): A text format type.
- [CMPixelFormatType](cmpixelformattype.md): A pixel format type.
- [Tagged Buffer Group Format Types](tagged-buffergroup-format-types.md)

### Data Types

- [CMVideoDimensions](cmvideodimensions.md): A structure that represents video dimensions.
- [CMAudioFormatDescriptionMask](cmaudioformatdescriptionmask.md): A type for mask bits that represent parts of an audio format description.
- [CMMediaType](cmmediatype.md): Constants that represent media types.
- [CMAudioCodecType](cmaudiocodectype.md): An audio codec type.
- [CMVideoCodecType](cmvideocodectype.md): A video codec type.
- [CMTextDisplayFlags](cmtextdisplayflags.md): An integer value that describes the display mode flags for text media.
- [CMTextJustificationValue](cmtextjustificationvalue.md): An integer value that describes the justification modes for text media.
- [Media Type Constants](media-type-constants.md): Constants that represent media types.
- [Muxed Stream Types](muxed-stream-types.md): Constants that represent muxed stream types.
- [Audio Codec Types](audio-codec-types.md): Constants that represent audio codec types.

### Constants

- [Audio Format Description Mask Codes](audio-format-desc-codes.md): Mask codes that identify audio formats.
- [Chroma Location Extension Constants](chroma-location-extension-constants.md): Constants that identify chroma location extensions.
- [Clean Aperture Extension Constants](clean-aperture-extension-constants.md): Constants that identify clean aperture extensions.
- [Closed Caption Format Type Constants](closed-caption-formats.md): Types that identify closed caption formats.
- [Color Primary Extension Constants](color-primary-extension-constants.md): Constants that identify color primary extensions.
- [Field Detail Extension Constants](field-detail-extension-constants.md): Constants that identify field detail extensions.
- [Format Description Bridge Error Codes](format-description-bridge-errors.md): Bridge errors the system returns from format description calls.
- [Format Description Constants](format-description-constants.md): Constants that identify format descriptions.
- [Format Description Error Codes](format-description-errors.md): Errors the system returns from format description calls.
- [HEVC Temporal Level Info Constants](hevc-temporal-level-info-constants.md): Constants that identify HEVC temporal level information.
- [Metadata Format Description Constants](metadata-format-description-constants.md): Constants that identify metadata format descriptions.
- [MPEG-2-conformant Formats](mpeg-2-conformant-formats.md): Constants that identify MPEG-2 formats.
- [Pixel Aspect Ratio Extension Constants](pixel-aspect-ratio-extension-constants.md): Constants that identify pixel aspect ratio extensions.
- [Text Display Flags](text-display-flags.md): Flags that identify text display methods.
- [Text Format Constants](text-format-constants.md): Types that identify text formats.
- [Text Format Description Constants](text-format-description-constants.md): Constants that identify text format descriptions.
- [Text Justification Constants](text-justification-constants.md): Types that identify text justifications.
- [Time Code Flags](time-code-flags.md): Flags that identify time codes.
- [Time Code Format Description Constants](time-code-format-description-constants.md): Constants that identify time code format descriptions.
- [Transfer Function Extension Constants](transfer-function-extension-constants.md): Constants that identify transfer function extensions.
- [Video Codec Constants](video-codec-constants.md): Types that identify video codecs.
- [Video Pixel Formats](video-pixel-formats.md): Constants that identify video pixel formats.
- [Video Profile Constants](video-profile-constants.md): Constants that identify video profiles.
- [YCbCrMatrix Extension Constants](ycbcrmatrix-extension-constants.md): Constants that identify YCbCrMatrix extensions.

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.
- [CMTaggedBuffer](cmtaggedbuffer.md): An instance of a media buffer containing metadata tags.
- [CMMutableDataBlockBuffer](cmmutabledatablockbuffer.md): A block buffer that provides read-write access to a range of bytes.
- [CMReadOnlyDataBlockBuffer](cmreadonlydatablockbuffer.md): A block buffer that provides read-only access to the a range of bytes.
- [CMReadySampleBuffer](cmreadysamplebuffer.md): Buffer carrying readily available samples of media data.
- [CMSampleDataReference](cmsampledatareference.md): References sample data in at a URL.
- [CMTaggedDynamicBuffer](cmtaggeddynamicbuffer.md): Contains a collection of tags associated with a read-only media buffer.

# CMFormatDescription (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A media format descriptor that describes the samples in a sample buffer.

<a id="overview"></a>

## Overview

`CMFormatDescriptions` are immutable Core Foundation objects that describe media data of various types, including audio, video, and muxed media data. There are two types of API: media-type-agnostic APIs (supported by all CMFormatDescriptions) and media-type-specific APIs. The media-type-agnostic APIs are prefixed with `CMFormatDescription`, and the media-type-specific APIs are prefixed with `CMAudioFormatDescription`, `CMVideoFormatDescription`, and so on.

## Topics

### Creating Format Descriptions

- [CMFormatDescriptionCreate](cmformatdescriptioncreate%28allocator_mediatype_mediasubtype_extensions_formatdescriptionout_%29.md): Creates a format description for general use.

### Comparing Format Descriptions

- [CMFormatDescriptionEqual](cmformatdescriptionequal%28__otherformatdescription_%29.md): Returns a Boolean value that indicates whether two format descriptions are equal.
- [CMFormatDescriptionEqualIgnoringExtensionKeys](cmformatdescriptionequalignoringextensionkeys%28__otherformatdescription_extensionkeystoignore_sampledescriptionextensionatomkeystoignore_%29.md): Returns a Boolean value that indicates whether two format descriptions are equal, ignoring differences in the extension keys you specify.

### Inspecting Format Descriptions

- [CMFormatDescriptionGetMediaType](cmformatdescriptiongetmediatype%28__%29.md): Returns the media type of a format description.
- [CMFormatDescriptionGetMediaSubType](cmformatdescriptiongetmediasubtype%28__%29.md): Returns the media subtype of a format description.
- [CMFormatDescriptionGetExtension](cmformatdescriptiongetextension%28__extensionkey_%29.md): Returns an extension from the format description by using an extension key.
- [CMFormatDescriptionGetExtensions](cmformatdescriptiongetextensions%28__%29.md): Returns all of the extensions for a format description.
- [CMFormatDescriptionGetTypeID](cmformatdescriptiongettypeid%28%29.md): Returns the Core Foundation type identifier that identifies format description objects.

### Working with Audio Descriptions

- [CMSoundDescriptionFlavor](cmsounddescriptionflavor.md): Types that represent sound format descriptions.
- [CMAudioFormatDescriptionCreateSummary](cmaudioformatdescriptioncreatesummary%28allocator_formatdescriptionarray_flags_formatdescriptionout_%29.md): Creates a summary audio format description from an array of descriptions.
- [CMAudioFormatDescriptionCreate](cmaudioformatdescriptioncreate%28allocator_asbd_layoutsize_layout_magiccookiesize_magiccookie_extensions_formatdescriptionout_%29.md): Creates a format description for an audio media stream.
- [CMAudioFormatDescriptionEqual](cmaudioformatdescriptionequal%28__otherformatdescription_equalitymask_equalitymaskout_%29.md): Returns a Boolean value that indicates whether the two audio format descriptions are equal.
- [CMAudioFormatDescriptionGetChannelLayout](cmaudioformatdescriptiongetchannellayout%28__sizeout_%29.md): Returns a read-only pointer to, and the size of, the audio channel layout inside an audio format description.
- [CMAudioFormatDescriptionGetFormatList](cmaudioformatdescriptiongetformatlist%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the array of audio format list item structures in an audio format description.
- [CMAudioFormatDescriptionGetMagicCookie](cmaudioformatdescriptiongetmagiccookie%28__sizeout_%29.md): Returns a read-only pointer to, and size of, the magic cookie in an audio format description.
- [CMAudioFormatDescriptionGetMostCompatibleFormat](cmaudioformatdescriptiongetmostcompatibleformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetRichestDecodableFormat](cmaudioformatdescriptiongetrichestdecodableformat%28__%29.md): Returns a read-only pointer to the appropriate audio format list item in an audio format description.
- [CMAudioFormatDescriptionGetStreamBasicDescription](cmaudioformatdescriptiongetstreambasicdescription%28__%29.md): Returns a read-only pointer to the audio stream description in an audio format description.
- [CMDoesBigEndianSoundDescriptionRequireLegacyCBRSampleTableLayout](cmdoesbigendiansounddescriptionrequirelegacycbrsampletablelayout%28__flavor_%29.md): Returns a Boolean value that indicates whether the sample tables need to use the legacy constant bit-rate encoding layout.
- [CMSwapBigEndianSoundDescriptionToHost](cmswapbigendiansounddescriptiontohost%28____%29.md): Converts a sound description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianSoundDescriptionToBig](cmswaphostendiansounddescriptiontobig%28____%29.md): Converts a sound description data structure from host-endian to big-endian, in place.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionData](cmaudioformatdescriptioncreatefrombigendiansounddescriptiondata%28allocator_bigendiansounddescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure.
- [CMAudioFormatDescriptionCreateFromBigEndianSoundDescriptionBlockBuffer](cmaudioformatdescriptioncreatefrombigendiansounddescriptionblockbuffer%28allocator_bigendiansounddescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates an audio format description from a big-endian sound description data structure in a buffer.
- [CMAudioFormatDescriptionCopyAsBigEndianSoundDescriptionBlockBuffer](cmaudioformatdescriptioncopyasbigendiansounddescriptionblockbuffer%28allocator_audioformatdescription_flavor_blockbufferout_%29.md): Copies the contents of an audio format description to a buffer in big-endian byte ordering.

### Working with Video Descriptions

- [CMImageDescriptionFlavor](cmimagedescriptionflavor.md): Types that represent image format descriptions.
- [CMVideoFormatDescriptionCreate](cmvideoformatdescriptioncreate%28allocator_codectype_width_height_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream.
- [CMVideoFormatDescriptionCreateForImageBuffer](cmvideoformatdescriptioncreateforimagebuffer%28allocator_imagebuffer_formatdescriptionout_%29.md): Creates a format description for a video media stream by using an image buffer.
- [CMVideoFormatDescriptionGetCleanAperture](cmvideoformatdescriptiongetcleanaperture%28__originisattopleft_%29.md): Returns a rectangle that defines the portion of the encoded pixel dimensions that represent the image data that’s valid for displaying.
- [CMVideoFormatDescriptionGetDimensions](cmvideoformatdescriptiongetdimensions%28__%29.md): Returns the video dimensions, in encoded pixels.
- [CMVideoFormatDescriptionGetExtensionKeysCommonWithImageBuffers](cmvideoformatdescriptiongetextensionkeyscommonwithimagebuffers%28%29.md): Returns an array of keys that you use for video format description extensions, image buffer attachments, and attributes.
- [CMVideoFormatDescriptionGetPresentationDimensions](cmvideoformatdescriptiongetpresentationdimensions%28__usepixelaspectratio_usecleanaperture_%29.md): Returns the dimensions after taking the pixel aspect ratio and clean aperture into account.
- [CMVideoFormatDescriptionMatchesImageBuffer](cmvideoformatdescriptionmatchesimagebuffer%28__imagebuffer_%29.md): Returns a Boolean value that indicates whether a format description matches an image buffer.
- [CMVideoFormatDescriptionCreateFromH264ParameterSets](cmvideoformatdescriptioncreatefromh264parametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_formatdescriptionout_%29.md): Creates a format description for a video media stream that the parameter set describes.
- [CMVideoFormatDescriptionCreateFromHEVCParameterSets](cmvideoformatdescriptioncreatefromhevcparametersets%28allocator_parametersetcount_parametersetpointers_parametersetsizes_nalunitheaderlength_extensions_formatdescriptionout_%29.md): Creates a format description for a video media stream using HEVC (H.265) parameter set NAL units.
- [CMVideoFormatDescriptionGetH264ParameterSetAtIndex](cmvideoformatdescriptiongeth264parametersetatindex%28__parametersetindex_parametersetpointerout_parametersetsizeout_parametersetcountout_nalunitheaderlengthout_%29.md): Returns a parameter set that an H.264 format description contains.
- [CMVideoFormatDescriptionCopyTagCollectionArray](cmvideoformatdescriptioncopytagcollectionarray.md): Copies the multi-image encoding properties as an array of CMTagCollections.
- [CMVideoFormatDescriptionCopyAsBigEndianImageDescriptionBlockBuffer](cmvideoformatdescriptioncopyasbigendianimagedescriptionblockbuffer%28allocator_videoformatdescription_stringencoding_flavor_blockbufferout_%29.md): Copies the contents of a video format description to a buffer in big-endian byte ordering.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionBlockBuffer](cmvideoformatdescriptioncreatefrombigendianimagedescriptionblockbuffer%28allocator_bigendianimagedescriptionblockbuffer_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description inside a buffer.
- [CMVideoFormatDescriptionCreateFromBigEndianImageDescriptionData](cmvideoformatdescriptioncreatefrombigendianimagedescriptiondata%28allocator_bigendianimagedescriptiondata_size_stringencoding_flavor_formatdescriptionout_%29.md): Creates a video format description from a big-endian image description structure.
- [CMSwapBigEndianImageDescriptionToHost](cmswapbigendianimagedescriptiontohost%28____%29.md): Converts an image description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianImageDescriptionToBig](cmswaphostendianimagedescriptiontobig%28____%29.md): Converts an image description data structure from host-endian to big-endian, in place.

### Working with Muxed Descriptions

- [CMMuxedFormatDescriptionCreate](cmmuxedformatdescriptioncreate%28allocator_muxtype_extensions_formatdescriptionout_%29.md): Creates a format description for a muxed media stream.

### Working with Metadata Descriptions

- [CMMetadataDescriptionFlavor](cmmetadatadescriptionflavor.md): Types that represent metadata format descriptions.
- [CMMetadataFormatDescriptionCreateWithKeys](cmmetadataformatdescriptioncreatewithkeys%28allocator_metadatatype_keys_formatdescriptionout_%29.md): Creates a metadata format description with the metadata keys you specify.
- [CMMetadataFormatDescriptionGetKeyWithLocalID](cmmetadataformatdescriptiongetkeywithlocalid%28__localkeyid_%29.md): Returns the key for the local identifier.
- [CMMetadataFormatDescriptionCopyAsBigEndianMetadataDescriptionBlockBuffer](cmmetadataformatdescriptioncopyasbigendianmetadatadescriptionblockbuffer%28allocator_metadataformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a metadata format description to a buffer in big-endian byte order.
- [CMMetadataFormatDescriptionCreateByMergingMetadataFormatDescriptions](cmmetadataformatdescriptioncreatebymergingmetadataformatdescriptions%28allocator_sourcedescription_othersourcedescription_formatdescriptionout_%29.md): Creates a metadata format description object by merging with another description.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionBlockBuffer](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptionblockbuffer%28allocator_bigendianmetadatadescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure inside a buffer.
- [CMMetadataFormatDescriptionCreateFromBigEndianMetadataDescriptionData](cmmetadataformatdescriptioncreatefrombigendianmetadatadescriptiondata%28allocator_bigendianmetadatadescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a metadata format description from a big-endian metadata description structure.
- [CMMetadataFormatDescriptionCreateWithMetadataFormatDescriptionAndMetadataSpecifications](cmmetadataformatdescriptioncreatewithmetadataformatdescriptionandmetadataspecifications%28allocator_sourcedescription_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description by extending an existing description with the values you specify.
- [CMMetadataFormatDescriptionCreateWithMetadataSpecifications](cmmetadataformatdescriptioncreatewithmetadataspecifications%28allocator_metadatatype_metadataspecifications_formatdescriptionout_%29.md): Creates a metadata format description with the specifications you specify.
- [CMSwapBigEndianMetadataDescriptionToHost](cmswapbigendianmetadatadescriptiontohost%28____%29.md): Converts a metadata description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianMetadataDescriptionToBig](cmswaphostendianmetadatadescriptiontobig%28____%29.md): Converts a metadata description data structure from host-endian to big-endian, in place.
- [CMMetadataFormatDescriptionGetIdentifiers](cmmetadataformatdescriptiongetidentifiers%28__%29.md): Returns an array of metadata identifiers from a metadata format description.

### Working with Text Descriptions

- [CMTextDescriptionFlavor](cmtextdescriptionflavor.md): Types that represent text format descriptions.
- [CMTextFormatDescriptionGetDefaultStyle](cmtextformatdescriptiongetdefaultstyle%28__localfontidout_boldout_italicout_underlineout_fontsizeout_colorcomponentsout_%29.md): Returns the default text style.
- [CMTextFormatDescriptionGetDefaultTextBox](cmtextformatdescriptiongetdefaulttextbox%28__originisattopleft_heightoftexttrack_defaulttextboxout_%29.md): Returns the default text box.
- [CMTextFormatDescriptionGetDisplayFlags](cmtextformatdescriptiongetdisplayflags%28__displayflagsout_%29.md): Returns the display flags.
- [CMTextFormatDescriptionGetFontName](cmtextformatdescriptiongetfontname%28__localfontid_fontnameout_%29.md): Returns a font name for a local font identifier.
- [CMTextFormatDescriptionGetJustification](cmtextformatdescriptiongetjustification%28__horizontalout_verticalout_%29.md): Returns the horizontal and vertical justification.
- [CMTextFormatDescriptionCopyAsBigEndianTextDescriptionBlockBuffer](cmtextformatdescriptioncopyasbigendiantextdescriptionblockbuffer%28allocator_textformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a text format description to a buffer in big-endian byte order.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionBlockBuffer](cmtextformatdescriptioncreatefrombigendiantextdescriptionblockbuffer%28allocator_bigendiantextdescriptionblockbuffer_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure inside a buffer.
- [CMTextFormatDescriptionCreateFromBigEndianTextDescriptionData](cmtextformatdescriptioncreatefrombigendiantextdescriptiondata%28allocator_bigendiantextdescriptiondata_size_flavor_mediatype_formatdescriptionout_%29.md): Creates a text format description from a big-endian text description structure.
- [CMSwapBigEndianTextDescriptionToHost](cmswapbigendiantextdescriptiontohost%28____%29.md): Converts a text description structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTextDescriptionToBig](cmswaphostendiantextdescriptiontobig%28____%29.md): Converts a text description structure from host-endian to big-endian, in place.

### Working with Time Code Descriptions

- [CMTimeCodeDescriptionFlavor](cmtimecodedescriptionflavor.md): Types that represent time code format descriptions.
- [CMTimeCodeFormatDescriptionCreate](cmtimecodeformatdescriptioncreate%28allocator_timecodeformattype_frameduration_framequanta_flags_extensions_formatdescriptionout_%29.md): Creates a format description for time code media.
- [CMTimeCodeFormatDescriptionGetFrameDuration](cmtimecodeformatdescriptiongetframeduration%28__%29.md): Returns the duration of each frame.
- [CMTimeCodeFormatDescriptionGetFrameQuanta](cmtimecodeformatdescriptiongetframequanta%28__%29.md): Returns the frames per second for a time code, or frames per tick in counter mode.
- [CMTimeCodeFormatDescriptionGetTimeCodeFlags](cmtimecodeformatdescriptiongettimecodeflags%28__%29.md): Returns time code flags.
- [CMTimeCodeFormatDescriptionCopyAsBigEndianTimeCodeDescriptionBlockBuffer](cmtimecodeformatdescriptioncopyasbigendiantimecodedescriptionblockbuffer%28allocator_timecodeformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a time code format description to a buffer in big-endian byte order.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionBlockBuffer](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptionblockbuffer%28allocator_bigendiantimecodedescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description data structure in a buffer.
- [CMTimeCodeFormatDescriptionCreateFromBigEndianTimeCodeDescriptionData](cmtimecodeformatdescriptioncreatefrombigendiantimecodedescriptiondata%28allocator_bigendiantimecodedescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a time code format description from a big-endian time code description structure.
- [CMSwapBigEndianTimeCodeDescriptionToHost](cmswapbigendiantimecodedescriptiontohost%28____%29.md): Converts a time code description data structure from big-endian to host-endian, in place.
- [CMSwapHostEndianTimeCodeDescriptionToBig](cmswaphostendiantimecodedescriptiontobig%28____%29.md): Converts a time code description data structure from host-endian to big-endian, in place.

### Working with Closed Captioning Descriptions

- [CMClosedCaptionDescriptionFlavor](cmclosedcaptiondescriptionflavor.md): Types that represent closed caption format descriptions.
- [CMClosedCaptionFormatDescriptionCopyAsBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncopyasbigendianclosedcaptiondescriptionblockbuffer%28allocator_closedcaptionformatdescription_flavor_blockbufferout_%29.md): Copies the contents of a closed caption format description to a buffer in big-endian byte order.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionBlockBuffer](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptionblockbuffer%28allocator_bigendianclosedcaptiondescriptionblockbuffer_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure in a buffer.
- [CMClosedCaptionFormatDescriptionCreateFromBigEndianClosedCaptionDescriptionData](cmclosedcaptionformatdescriptioncreatefrombigendianclosedcaptiondescriptiondata%28allocator_bigendianclosedcaptiondescriptiondata_size_flavor_formatdescriptionout_%29.md): Creates a closed caption format description from a big-endian closed caption description structure.
- [CMSwapHostEndianClosedCaptionDescriptionToBig](cmswaphostendianclosedcaptiondescriptiontobig%28____%29.md): Converts a closed caption description structure from host-endian to big-endian, in place.
- [CMSwapBigEndianClosedCaptionDescriptionToHost](cmswapbigendianclosedcaptiondescriptiontohost%28____%29.md): Converts a closed caption description structure from big-endian to host-endian, in place.

### Format Description Types

- [CMFormatDescriptionRef](cmformatdescription.md): An object that describes a media format descriptor.
- [CMAudioFormatDescriptionRef](cmaudioformatdescription.md): A type you use to interact with audio format descriptions.
- [CMClosedCaptionFormatDescriptionRef](cmclosedcaptionformatdescription.md): A type you use to interact with closed caption format descriptions.
- [CMMetadataFormatDescriptionRef](cmmetadataformatdescription.md): A type you use to interact with metadata format descriptions.
- [CMMuxedFormatDescriptionRef](cmmuxedformatdescription.md): A type you use to interact with muxed format descriptions.
- [CMTextFormatDescriptionRef](cmtextformatdescription.md): A type you use to interact with text format descriptions.
- [CMTimeCodeFormatDescriptionRef](cmtimecodeformatdescription.md): A type you use to interact with time code format descriptions.
- [CMVideoFormatDescriptionRef](cmvideoformatdescription.md): A type you use to interact with video format descriptions.

### Format Description Extension Keys

- [kCMFormatDescriptionExtension_ContentColorVolume](kcmformatdescriptionextension_contentcolorvolume.md)
- [kCMFormatDescriptionExtension_HasAdditionalViews](kcmformatdescriptionextension_hasadditionalviews.md)
- [kCMFormatDescriptionExtension_HasLeftStereoEyeView](kcmformatdescriptionextension_hasleftstereoeyeview.md)
- [kCMFormatDescriptionExtension_HasRightStereoEyeView](kcmformatdescriptionextension_hasrightstereoeyeview.md)
- [kCMFormatDescriptionExtension_HeroEye](kcmformatdescriptionextension_heroeye.md)
- [kCMFormatDescriptionExtension_HorizontalDisparityAdjustment](kcmformatdescriptionextension_horizontaldisparityadjustment.md)
- [kCMFormatDescriptionExtension_LogTransferFunction](kcmformatdescriptionextension_logtransferfunction.md)
- [kCMFormatDescriptionExtension_StereoCameraBaseline](kcmformatdescriptionextension_stereocamerabaseline.md)
- [kCMFormatDescriptionHeroEye_Left](kcmformatdescriptionheroeye_left.md)
- [kCMFormatDescriptionHeroEye_Right](kcmformatdescriptionheroeye_right.md)

### Format Types

- [CMClosedCaptionFormatType](cmclosedcaptionformattype.md): A closed caption format type.
- [CMMetadataFormatType](cmmetadataformattype.md): A metadata format type.
- [Metadata Format Types](metadata-format-types.md): Constants that represent media format types.
- [CMSubtitleFormatType](cmsubtitleformattype.md): A type that represents a text subtitle format.
- [Subtitle Format Types](subtitle-format-types.md): Constants that represent subtitle format types.
- [CMTimeCodeFormatType](cmtimecodeformattype.md): A time code format type.
- [Time Code Formats](time-code-formats.md): Constants that represent time code format types.
- [CMTextFormatType](cmtextformattype.md): A text format type.
- [CMPixelFormatType](cmpixelformattype.md): A pixel format type.
- [Tagged Buffer Group Format Types](tagged-buffergroup-format-types.md)

### Data Types

- [CMVideoDimensions](cmvideodimensions.md): A structure that represents video dimensions.
- [CMAudioFormatDescriptionMask](cmaudioformatdescriptionmask.md): A type for mask bits that represent parts of an audio format description.
- [CMMediaType](cmmediatype.md): Constants that represent media types.
- [CMAudioCodecType](cmaudiocodectype.md): An audio codec type.
- [CMVideoCodecType](cmvideocodectype.md): A video codec type.
- [CMTextDisplayFlags](cmtextdisplayflags.md): An integer value that describes the display mode flags for text media.
- [CMTextJustificationValue](cmtextjustificationvalue.md): An integer value that describes the justification modes for text media.
- [Media Type Constants](media-type-constants.md): Constants that represent media types.
- [Muxed Stream Types](muxed-stream-types.md): Constants that represent muxed stream types.
- [Audio Codec Types](audio-codec-types.md): Constants that represent audio codec types.

### Constants

- [Audio Format Description Mask Codes](audio-format-desc-codes.md): Mask codes that identify audio formats.
- [Chroma Location Extension Constants](chroma-location-extension-constants.md): Constants that identify chroma location extensions.
- [Clean Aperture Extension Constants](clean-aperture-extension-constants.md): Constants that identify clean aperture extensions.
- [Closed Caption Format Type Constants](closed-caption-formats.md): Types that identify closed caption formats.
- [Color Primary Extension Constants](color-primary-extension-constants.md): Constants that identify color primary extensions.
- [Field Detail Extension Constants](field-detail-extension-constants.md): Constants that identify field detail extensions.
- [Format Description Bridge Error Codes](format-description-bridge-errors.md): Bridge errors the system returns from format description calls.
- [Format Description Constants](format-description-constants.md): Constants that identify format descriptions.
- [Format Description Error Codes](format-description-errors.md): Errors the system returns from format description calls.
- [HEVC Temporal Level Info Constants](hevc-temporal-level-info-constants.md): Constants that identify HEVC temporal level information.
- [Metadata Format Description Constants](metadata-format-description-constants.md): Constants that identify metadata format descriptions.
- [MPEG-2-conformant Formats](mpeg-2-conformant-formats.md): Constants that identify MPEG-2 formats.
- [Pixel Aspect Ratio Extension Constants](pixel-aspect-ratio-extension-constants.md): Constants that identify pixel aspect ratio extensions.
- [Text Display Flags](text-display-flags.md): Flags that identify text display methods.
- [Text Format Constants](text-format-constants.md): Types that identify text formats.
- [Text Format Description Constants](text-format-description-constants.md): Constants that identify text format descriptions.
- [Text Justification Constants](text-justification-constants.md): Types that identify text justifications.
- [Time Code Flags](time-code-flags.md): Flags that identify time codes.
- [Time Code Format Description Constants](time-code-format-description-constants.md): Constants that identify time code format descriptions.
- [Transfer Function Extension Constants](transfer-function-extension-constants.md): Constants that identify transfer function extensions.
- [Video Codec Constants](video-codec-constants.md): Types that identify video codecs.
- [Video Pixel Formats](video-pixel-formats.md): Constants that identify video pixel formats.
- [Video Profile Constants](video-profile-constants.md): Constants that identify video profiles.
- [YCbCrMatrix Extension Constants](ycbcrmatrix-extension-constants.md): Constants that identify YCbCrMatrix extensions.

## See Also

### Sample Processing

- [CMSampleBuffer](cmsamplebuffer-api.md): An object that contains zero or more media samples of a uniform media type.
- [CMBlockBuffer](cmblockbuffer-api.md): An object the system uses to move blocks of memory through a processing system.
- [CMTaggedBufferGroup](cmtaggedbuffergroup.md): Objective-C types and interfaces for working with Core Media tagged buffer groups.
- [CMAttachment](cmattachment-api.md): Add supporting metadata to sample buffers.

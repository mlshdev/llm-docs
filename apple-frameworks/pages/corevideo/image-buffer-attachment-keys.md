> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/image-buffer-attachment-keys](https://developer.apple.com/documentation/corevideo/image-buffer-attachment-keys)

# Image Buffer Attachment Keys (Swift)

**Framework:** Core Video  
**Kind:** API Collection

Keys that describe the attachment types associated with image buffers.

<a id="overview"></a>

## Overview

An image buffer associates its attachment keys in a [CFDictionary](../corefoundation/cfdictionary.md) instance. To read and write these image buffer attachments, use the [CVBufferCopyAttachment(\_:\_:\_:)](cvbuffercopyattachment%28______%29.md) and [CVBufferSetAttachment(\_:\_:\_:\_:)](cvbuffersetattachment%28________%29.md) functions or other [CVBuffer](cvbuffer.md) functions. See the [CVBuffer](cvbuffer-nfm.md) topic group for additional information.

## Topics

### Constants

- [kCVImageBufferCGColorSpaceKey](kcvimagebuffercgcolorspacekey.md): A key to the color space of the image buffer.
- [kCVImageBufferCleanApertureKey](kcvimagebuffercleanaperturekey.md): A key to the dictionary describing the clean aperture for the image buffer.
- [kCVImageBufferPreferredCleanApertureKey](kcvimagebufferpreferredcleanaperturekey.md): A key to the dictionary describing the preferred clean aperture for the image buffer.
- [kCVImageBufferFieldCountKey](kcvimagebufferfieldcountkey.md): A key to the field count for the image buffer.
- [kCVImageBufferFieldDetailKey](kcvimagebufferfielddetailkey.md): A key to the field detail for an image buffer that indicates the order of interlaced video data in the image buffer.
- [kCVImageBufferPixelAspectRatioKey](kcvimagebufferpixelaspectratiokey.md): A key to the dictionary describing the pixel aspect ratio for the image buffer.
- [kCVImageBufferDisplayDimensionsKey](kcvimagebufferdisplaydimensionskey.md): A key to the dictionary describing the display dimensions for the image buffer.
- [kCVImageBufferGammaLevelKey](kcvimagebuffergammalevelkey.md): A key to the gamma level for the image buffer.
- [kCVImageBufferICCProfileKey](kcvimagebuffericcprofilekey.md): A key to the ICC color profile for the image buffer.
- [kCVImageBufferYCbCrMatrixKey](kcvimagebufferycbcrmatrixkey.md): A key to the YCbCr to RGB color conversion matrix for the image buffer.
- [kCVImageBufferColorPrimariesKey](kcvimagebuffercolorprimarieskey.md): A key to the color primaries gamut for the image buffer.
- [kCVImageBufferTransferFunctionKey](kcvimagebuffertransferfunctionkey.md): A key to the transfer function for the image buffer.
- [kCVImageBufferChromaLocationTopFieldKey](kcvimagebufferchromalocationtopfieldkey.md): A key to the location of chroma top field information in the image buffer.
- [kCVImageBufferChromaLocationBottomFieldKey](kcvimagebufferchromalocationbottomfieldkey.md): A key to the location of chroma bottom field information in the image buffer.
- [kCVImageBufferChromaSubsamplingKey](kcvimagebufferchromasubsamplingkey.md): A key to the original format of subsampled data in the image buffer.
- [kCVImageBufferAlphaChannelIsOpaque](kcvimagebufferalphachannelisopaque.md): A key to indicate whether the alpha channel is fully opaque.
- [kCVImageBufferContentLightLevelInfoKey](kcvimagebuffercontentlightlevelinfokey.md): A key to the content light level information.
- [kCVImageBufferMasteringDisplayColorVolumeKey](kcvimagebuffermasteringdisplaycolorvolumekey.md): A key to the mastering display color volume.
- [kCVImageBufferPostDecodeProcessingFrameMetadataKey](kcvimagebufferpostdecodeprocessingframemetadatakey.md)
- [kCVImageBufferPostDecodeProcessingSequenceMetadataKey](kcvimagebufferpostdecodeprocessingsequencemetadatakey.md)
- [kCVImageBufferSceneIlluminationKey](kcvimagebuffersceneilluminationkey.md)
- [kCVImageBufferHorizontalDisparityAdjustmentKey](kcvimagebufferhorizontaldisparityadjustmentkey.md)

## See Also

### Constants

- [Image Buffer Clean Aperture Keys](image-buffer-clean-aperture-keys.md): Keys that describe the clean aperture of an image buffer.
- [Image Buffer Pixel Aspect Ratio Keys](image-buffer-pixel-aspect-ratio-keys.md): Keys that describe the pixel aspect ratio of an image buffer.
- [Image Buffer Display Dimensions Keys](image-buffer-display-dimensions-keys.md): Keys that describe the display dimensions of an image buffer.
- [Image Buffer Field Detail Constants](image-buffer-field-detail-constants.md): Constants that indicate the field order of interlaced video in an image buffer.
- [Image Buffer YCbCr Matrix Constants](image-buffer-ycbcr-matrix-constants.md): Constants that indicate the type of conversion matrix Core Video uses when it converts image buffer data from the YCbCr color space to the RGB color space.
- [Image Buffer Color Primaries Constants](image-buffer-color-primaries-constants.md): Constants that indicate the color primaries gamut for the image buffer.
- [Image Buffer Transfer Function Constants](image-buffer-transfer-function-constants.md): Constants that indicate the transfer function for the image buffer.
- [Image Buffer Chroma Location Constants](image-buffer-chroma-location-constants.md): Constants that indicate locations for chroma samples in the image buffer.
- [Image Buffer Chroma Subsampling Constants](image-buffer-chroma-subsampling-constants.md): Constants that indicate the original format of subsampled data in the image buffer before conversion to 422/2vuy format.
- [Image Buffer Display Mask Rectangle Keys](image-buffer-display-mask-rectangle-keys.md): Keys that describe the display dimensions of an image buffer mask.
- [kCVImageBufferDisplayMaskRectangleKey](kcvimagebufferdisplaymaskrectanglekey.md): Specifies the rectangular display area within the image.
- [kCVImageBufferDisplayMaskRectangleStereoLeftKey](kcvimagebufferdisplaymaskrectanglestereoleftkey.md): Specifies the rectangular display area within the left-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.
- [kCVImageBufferDisplayMaskRectangleStereoRightKey](kcvimagebufferdisplaymaskrectanglestereorightkey.md): Specifies the rectangular display area within the right-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.

# Image Buffer Attachment Keys (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

Keys that describe the attachment types associated with image buffers.

<a id="overview"></a>

## Overview

An image buffer associates its attachment keys in a [CFDictionaryRef](../corefoundation/cfdictionary.md) instance. To read and write these image buffer attachments, use the [CVBufferCopyAttachment](cvbuffercopyattachment%28______%29.md) and [CVBufferSetAttachment](cvbuffersetattachment%28________%29.md) functions or other [CVBufferRef](cvbuffer.md) functions. See the [CVBuffer](cvbuffer-nfm.md) topic group for additional information.

## Topics

### Constants

- [kCVImageBufferCGColorSpaceKey](kcvimagebuffercgcolorspacekey.md): A key to the color space of the image buffer.
- [kCVImageBufferCleanApertureKey](kcvimagebuffercleanaperturekey.md): A key to the dictionary describing the clean aperture for the image buffer.
- [kCVImageBufferPreferredCleanApertureKey](kcvimagebufferpreferredcleanaperturekey.md): A key to the dictionary describing the preferred clean aperture for the image buffer.
- [kCVImageBufferFieldCountKey](kcvimagebufferfieldcountkey.md): A key to the field count for the image buffer.
- [kCVImageBufferFieldDetailKey](kcvimagebufferfielddetailkey.md): A key to the field detail for an image buffer that indicates the order of interlaced video data in the image buffer.
- [kCVImageBufferPixelAspectRatioKey](kcvimagebufferpixelaspectratiokey.md): A key to the dictionary describing the pixel aspect ratio for the image buffer.
- [kCVImageBufferDisplayDimensionsKey](kcvimagebufferdisplaydimensionskey.md): A key to the dictionary describing the display dimensions for the image buffer.
- [kCVImageBufferGammaLevelKey](kcvimagebuffergammalevelkey.md): A key to the gamma level for the image buffer.
- [kCVImageBufferICCProfileKey](kcvimagebuffericcprofilekey.md): A key to the ICC color profile for the image buffer.
- [kCVImageBufferYCbCrMatrixKey](kcvimagebufferycbcrmatrixkey.md): A key to the YCbCr to RGB color conversion matrix for the image buffer.
- [kCVImageBufferColorPrimariesKey](kcvimagebuffercolorprimarieskey.md): A key to the color primaries gamut for the image buffer.
- [kCVImageBufferTransferFunctionKey](kcvimagebuffertransferfunctionkey.md): A key to the transfer function for the image buffer.
- [kCVImageBufferChromaLocationTopFieldKey](kcvimagebufferchromalocationtopfieldkey.md): A key to the location of chroma top field information in the image buffer.
- [kCVImageBufferChromaLocationBottomFieldKey](kcvimagebufferchromalocationbottomfieldkey.md): A key to the location of chroma bottom field information in the image buffer.
- [kCVImageBufferChromaSubsamplingKey](kcvimagebufferchromasubsamplingkey.md): A key to the original format of subsampled data in the image buffer.
- [kCVImageBufferAlphaChannelIsOpaque](kcvimagebufferalphachannelisopaque.md): A key to indicate whether the alpha channel is fully opaque.
- [kCVImageBufferContentLightLevelInfoKey](kcvimagebuffercontentlightlevelinfokey.md): A key to the content light level information.
- [kCVImageBufferMasteringDisplayColorVolumeKey](kcvimagebuffermasteringdisplaycolorvolumekey.md): A key to the mastering display color volume.
- [kCVImageBufferPostDecodeProcessingFrameMetadataKey](kcvimagebufferpostdecodeprocessingframemetadatakey.md)
- [kCVImageBufferPostDecodeProcessingSequenceMetadataKey](kcvimagebufferpostdecodeprocessingsequencemetadatakey.md)
- [kCVImageBufferSceneIlluminationKey](kcvimagebuffersceneilluminationkey.md)
- [kCVImageBufferHorizontalDisparityAdjustmentKey](kcvimagebufferhorizontaldisparityadjustmentkey.md)

## See Also

### Constants

- [Image Buffer Clean Aperture Keys](image-buffer-clean-aperture-keys.md): Keys that describe the clean aperture of an image buffer.
- [Image Buffer Pixel Aspect Ratio Keys](image-buffer-pixel-aspect-ratio-keys.md): Keys that describe the pixel aspect ratio of an image buffer.
- [Image Buffer Display Dimensions Keys](image-buffer-display-dimensions-keys.md): Keys that describe the display dimensions of an image buffer.
- [Image Buffer Field Detail Constants](image-buffer-field-detail-constants.md): Constants that indicate the field order of interlaced video in an image buffer.
- [Image Buffer YCbCr Matrix Constants](image-buffer-ycbcr-matrix-constants.md): Constants that indicate the type of conversion matrix Core Video uses when it converts image buffer data from the YCbCr color space to the RGB color space.
- [Image Buffer Color Primaries Constants](image-buffer-color-primaries-constants.md): Constants that indicate the color primaries gamut for the image buffer.
- [Image Buffer Transfer Function Constants](image-buffer-transfer-function-constants.md): Constants that indicate the transfer function for the image buffer.
- [Image Buffer Chroma Location Constants](image-buffer-chroma-location-constants.md): Constants that indicate locations for chroma samples in the image buffer.
- [Image Buffer Chroma Subsampling Constants](image-buffer-chroma-subsampling-constants.md): Constants that indicate the original format of subsampled data in the image buffer before conversion to 422/2vuy format.
- [Image Buffer Display Mask Rectangle Keys](image-buffer-display-mask-rectangle-keys.md): Keys that describe the display dimensions of an image buffer mask.
- [kCVImageBufferDisplayMaskRectangleKey](kcvimagebufferdisplaymaskrectanglekey.md): Specifies the rectangular display area within the image.
- [kCVImageBufferDisplayMaskRectangleStereoLeftKey](kcvimagebufferdisplaymaskrectanglestereoleftkey.md): Specifies the rectangular display area within the left-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.
- [kCVImageBufferDisplayMaskRectangleStereoRightKey](kcvimagebufferdisplaymaskrectanglestereorightkey.md): Specifies the rectangular display area within the right-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.

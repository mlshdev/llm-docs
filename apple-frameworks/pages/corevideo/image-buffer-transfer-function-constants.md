> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/image-buffer-transfer-function-constants](https://developer.apple.com/documentation/corevideo/image-buffer-transfer-function-constants)

# Image Buffer Transfer Function Constants (Swift)

**Framework:** Core Video  
**Kind:** API Collection

Constants that indicate the transfer function for the image buffer.

<a id="overview"></a>

## Overview

Use the [kCVImageBufferTransferFunctionKey](kcvimagebuffertransferfunctionkey.md) key to attach one of these values to the image buffer. The transfer function describes the tonality of an image for use in color matching operations, along with a color primaries gamut (See [Image Buffer Color Primaries Constants](image-buffer-color-primaries-constants.md) for more information.). Most apps should specify the [kCVImageBufferTransferFunction_ITU_R_709_2](kcvimagebuffertransferfunction_itu_r_709_2.md) transfer function.

## Topics

### Constants

- [kCVImageBufferTransferFunction_ITU_R_709_2](kcvimagebuffertransferfunction_itu_r_709_2.md): A key to the transfer function for high-definition and standard-definition video.
- [kCVImageBufferTransferFunction_SMPTE_240M_1995](kcvimagebuffertransferfunction_smpte_240m_1995.md): A key to the transfer function for HDTV interim video.
- [kCVImageBufferTransferFunction_UseGamma](kcvimagebuffertransferfunction_usegamma.md): A key to the transfer function that’s defined by the gamma level value of the image buffer.
- [kCVImageBufferTransferFunction_sRGB](kcvimagebuffertransferfunction_srgb.md)
- [kCVImageBufferTransferFunction_ITU_R_2020](kcvimagebuffertransferfunction_itu_r_2020.md)
- [kCVImageBufferTransferFunction_SMPTE_ST_428_1](kcvimagebuffertransferfunction_smpte_st_428_1.md)
- [kCVImageBufferTransferFunction_ITU_R_2100_HLG](kcvimagebuffertransferfunction_itu_r_2100_hlg.md)
- [kCVImageBufferTransferFunction_SMPTE_ST_2084_PQ](kcvimagebuffertransferfunction_smpte_st_2084_pq.md)
- [kCVImageBufferLogTransferFunction_AppleLog2](kcvimagebufferlogtransferfunction_applelog2.md)

## See Also

### Constants

- [Image Buffer Attachment Keys](image-buffer-attachment-keys.md): Keys that describe the attachment types associated with image buffers.
- [Image Buffer Clean Aperture Keys](image-buffer-clean-aperture-keys.md): Keys that describe the clean aperture of an image buffer.
- [Image Buffer Pixel Aspect Ratio Keys](image-buffer-pixel-aspect-ratio-keys.md): Keys that describe the pixel aspect ratio of an image buffer.
- [Image Buffer Display Dimensions Keys](image-buffer-display-dimensions-keys.md): Keys that describe the display dimensions of an image buffer.
- [Image Buffer Field Detail Constants](image-buffer-field-detail-constants.md): Constants that indicate the field order of interlaced video in an image buffer.
- [Image Buffer YCbCr Matrix Constants](image-buffer-ycbcr-matrix-constants.md): Constants that indicate the type of conversion matrix Core Video uses when it converts image buffer data from the YCbCr color space to the RGB color space.
- [Image Buffer Color Primaries Constants](image-buffer-color-primaries-constants.md): Constants that indicate the color primaries gamut for the image buffer.
- [Image Buffer Chroma Location Constants](image-buffer-chroma-location-constants.md): Constants that indicate locations for chroma samples in the image buffer.
- [Image Buffer Chroma Subsampling Constants](image-buffer-chroma-subsampling-constants.md): Constants that indicate the original format of subsampled data in the image buffer before conversion to 422/2vuy format.
- [Image Buffer Display Mask Rectangle Keys](image-buffer-display-mask-rectangle-keys.md): Keys that describe the display dimensions of an image buffer mask.
- [kCVImageBufferDisplayMaskRectangleKey](kcvimagebufferdisplaymaskrectanglekey.md): Specifies the rectangular display area within the image.
- [kCVImageBufferDisplayMaskRectangleStereoLeftKey](kcvimagebufferdisplaymaskrectanglestereoleftkey.md): Specifies the rectangular display area within the left-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.
- [kCVImageBufferDisplayMaskRectangleStereoRightKey](kcvimagebufferdisplaymaskrectanglestereorightkey.md): Specifies the rectangular display area within the right-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.

# Image Buffer Transfer Function Constants (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

Constants that indicate the transfer function for the image buffer.

<a id="overview"></a>

## Overview

Use the [kCVImageBufferTransferFunctionKey](kcvimagebuffertransferfunctionkey.md) key to attach one of these values to the image buffer. The transfer function describes the tonality of an image for use in color matching operations, along with a color primaries gamut (See [Image Buffer Color Primaries Constants](image-buffer-color-primaries-constants.md) for more information.). Most apps should specify the [kCVImageBufferTransferFunction_ITU_R_709_2](kcvimagebuffertransferfunction_itu_r_709_2.md) transfer function.

## Topics

### Constants

- [kCVImageBufferTransferFunction_ITU_R_709_2](kcvimagebuffertransferfunction_itu_r_709_2.md): A key to the transfer function for high-definition and standard-definition video.
- [kCVImageBufferTransferFunction_SMPTE_240M_1995](kcvimagebuffertransferfunction_smpte_240m_1995.md): A key to the transfer function for HDTV interim video.
- [kCVImageBufferTransferFunction_UseGamma](kcvimagebuffertransferfunction_usegamma.md): A key to the transfer function that’s defined by the gamma level value of the image buffer.
- [kCVImageBufferTransferFunction_sRGB](kcvimagebuffertransferfunction_srgb.md)
- [kCVImageBufferTransferFunction_ITU_R_2020](kcvimagebuffertransferfunction_itu_r_2020.md)
- [kCVImageBufferTransferFunction_SMPTE_ST_428_1](kcvimagebuffertransferfunction_smpte_st_428_1.md)
- [kCVImageBufferTransferFunction_ITU_R_2100_HLG](kcvimagebuffertransferfunction_itu_r_2100_hlg.md)
- [kCVImageBufferTransferFunction_SMPTE_ST_2084_PQ](kcvimagebuffertransferfunction_smpte_st_2084_pq.md)
- [kCVImageBufferTransferFunction_EBU_3213](kcvimagebuffertransferfunction_ebu_3213.md): Deprecated. A key to the transfer function that follows the EBU 3213 standard.
- [kCVImageBufferTransferFunction_SMPTE_C](kcvimagebuffertransferfunction_smpte_c.md): Deprecated. A key to the transfer function for standard-definition video.
- [kCVImageBufferLogTransferFunction_AppleLog2](kcvimagebufferlogtransferfunction_applelog2.md)

## See Also

### Constants

- [Image Buffer Attachment Keys](image-buffer-attachment-keys.md): Keys that describe the attachment types associated with image buffers.
- [Image Buffer Clean Aperture Keys](image-buffer-clean-aperture-keys.md): Keys that describe the clean aperture of an image buffer.
- [Image Buffer Pixel Aspect Ratio Keys](image-buffer-pixel-aspect-ratio-keys.md): Keys that describe the pixel aspect ratio of an image buffer.
- [Image Buffer Display Dimensions Keys](image-buffer-display-dimensions-keys.md): Keys that describe the display dimensions of an image buffer.
- [Image Buffer Field Detail Constants](image-buffer-field-detail-constants.md): Constants that indicate the field order of interlaced video in an image buffer.
- [Image Buffer YCbCr Matrix Constants](image-buffer-ycbcr-matrix-constants.md): Constants that indicate the type of conversion matrix Core Video uses when it converts image buffer data from the YCbCr color space to the RGB color space.
- [Image Buffer Color Primaries Constants](image-buffer-color-primaries-constants.md): Constants that indicate the color primaries gamut for the image buffer.
- [Image Buffer Chroma Location Constants](image-buffer-chroma-location-constants.md): Constants that indicate locations for chroma samples in the image buffer.
- [Image Buffer Chroma Subsampling Constants](image-buffer-chroma-subsampling-constants.md): Constants that indicate the original format of subsampled data in the image buffer before conversion to 422/2vuy format.
- [Image Buffer Display Mask Rectangle Keys](image-buffer-display-mask-rectangle-keys.md): Keys that describe the display dimensions of an image buffer mask.
- [kCVImageBufferDisplayMaskRectangleKey](kcvimagebufferdisplaymaskrectanglekey.md): Specifies the rectangular display area within the image.
- [kCVImageBufferDisplayMaskRectangleStereoLeftKey](kcvimagebufferdisplaymaskrectanglestereoleftkey.md): Specifies the rectangular display area within the left-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.
- [kCVImageBufferDisplayMaskRectangleStereoRightKey](kcvimagebufferdisplaymaskrectanglestereorightkey.md): Specifies the rectangular display area within the right-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebuffer-q40](https://developer.apple.com/documentation/corevideo/cvimagebuffer-q40)

# CVImageBuffer (Swift)

**Framework:** Core Video  
**Kind:** API Collection

An interface for managing different types of image data.

<a id="overview"></a>

## Overview

Core Video image buffers provides a convenient interface for managing different types of image data. Pixel buffers and Core Video OpenGL buffers derive from the Core Video image buffer.

## Topics

### Inspecting image buffers

- [CVImageBufferGetCleanRect(\_:)](cvimagebuffergetcleanrect%28__%29.md): Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.
- [CVImageBufferGetColorSpace(\_:)](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetDisplaySize(\_:)](cvimagebuffergetdisplaysize%28__%29.md): Returns the nominal output display size, in square pixels, of a Core Video image buffer.
- [CVImageBufferGetEncodedSize(\_:)](cvimagebuffergetencodedsize%28__%29.md): Returns the full encoded dimensions of a Core Video image buffer.
- [CVImageBufferIsFlipped(\_:)](cvimagebufferisflipped%28__%29.md): Returns a Boolean value indicating whether the image is vertically flipped.

### Creating color spaces

- [CVImageBufferCreateColorSpaceFromAttachments(\_:)](cvimagebuffercreatecolorspacefromattachments%28__%29.md): Attempts to create a Core Graphics color space from the image buffer’s attachments that you specify.

### Protocols

- [CVImageBufferRepresentable](cvimagebufferrepresentable.md): CVImageBufferRepresentable protocol is a sealed protocol intended to be implemented by the types in CoreVideo framework. This protocol facilitates Swift types that wrap a value of CVImageBuffer type.
- [CVImageBufferAttachmentKeyDefinitions](cvimagebufferattachmentkeydefinitions.md): A namespace for image buffer attachment keys.

### Data types

- [CVImageBuffer](cvimagebuffer.md): A reference to a Core Video image buffer.
- [CVImageSize](cvimagesize.md): Size of image buffer expressed as pixel count.
- [CVImageBufferOriginPosition](cvimagebufferoriginposition.md)
- [CVImageCleanAperture](cvimagecleanaperture.md): An image’s clean aperture is a region of video to display.
- [CVImagePixelAspectRatio](cvimagepixelaspectratio.md): Aspect ratio of each pixel in the image buffer.
- [CVImageDisplayMaskRectangle](cvimagedisplaymaskrectangle.md): Specifies the rectangular display area within the image.
- [CVImageStereoDisplayMaskRectangle](cvimagestereodisplaymaskrectangle.md): Specifies the rectangular display area within a view of stereo image.
- [CVImageChromaField](cvimagechromafield.md): Information about chroma field in the 2VUY format image data.

### Color and signal characteristics

- [CVImageColorPrimaries](cvimagecolorprimaries.md): Color primaries describe the gamut used for the rendering intent of an image.
- [CVImageTransferFunction](cvimagetransferfunction.md): The transfer function describes the tonality of an image for use in color matching operations. This value is used along with a color primaries gamut [CVImageColorPrimaries](cvimagecolorprimaries.md). Most apps should use the [CVImageTransferFunction.itu_R_709_2](cvimagetransferfunction/itu_r_709_2.md) transfer function.
- [CVImageLogTransferFunction](cvimagelogtransferfunction.md): Identifies the specific log curve transfer function or gamma of the content.
- [CVImageYCbCrMatrix](cvimageycbcrmatrix.md): Indicates color matrix used for converting image buffer from YCbCr to RGB.
- [CVImageAlphaChannelMode](cvimagealphachannelmode.md)
- [CVImageFieldDetail](cvimagefielddetail.md)

### Converting between strings and integer code points

- [CVColorPrimariesGetIntegerCodePointForString(\_:)](cvcolorprimariesgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video color primaries constant string that you specify.
- [CVColorPrimariesGetStringForIntegerCodePoint(\_:)](cvcolorprimariesgetstringforintegercodepoint%28__%29.md): Returns the Core Video color primaries string corresponding to the standard integer code point that you specify.
- [CVTransferFunctionGetIntegerCodePointForString(\_:)](cvtransferfunctiongetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video transfer function string that you specify.
- [CVTransferFunctionGetStringForIntegerCodePoint(\_:)](cvtransferfunctiongetstringforintegercodepoint%28__%29.md): Returns the Core Video transfer function string corresponding to the standard integer code point that you specify.
- [CVYCbCrMatrixGetIntegerCodePointForString(\_:)](cvycbcrmatrixgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video YCbCr matrix string that you specify.
- [CVYCbCrMatrixGetStringForIntegerCodePoint(\_:)](cvycbcrmatrixgetstringforintegercodepoint%28__%29.md): Returns the Core Video YCbCr matrix string corresponding to the standard integer code point that you specify.

### Constants

- [Image Buffer Attachment Keys](image-buffer-attachment-keys.md): Keys that describe the attachment types associated with image buffers.
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

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Data Processing

- [CVBuffer](cvbuffer-nfm.md): An abstract base class that defines how to interact with data buffers.
- [CVPixelBuffer](cvpixelbuffer-q2e.md): An image buffer that holds pixels in main memory.
- [CVPixelBufferPool](cvpixelbufferpool-77o.md): A utility object for managing a recyclable set of pixel buffer objects.
- [CVPixelFormatDescription](cvpixelformatdescription-42p.md): An API that provides functions and types for defining custom pixel formats.

# CVImageBuffer (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

An interface for managing different types of image data.

<a id="overview"></a>

## Overview

Core Video image buffers provides a convenient interface for managing different types of image data. Pixel buffers and Core Video OpenGL buffers derive from the Core Video image buffer.

## Topics

### Inspecting image buffers

- [CVImageBufferGetCleanRect](cvimagebuffergetcleanrect%28__%29.md): Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.
- [CVImageBufferGetColorSpace](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetDisplaySize](cvimagebuffergetdisplaysize%28__%29.md): Returns the nominal output display size, in square pixels, of a Core Video image buffer.
- [CVImageBufferGetEncodedSize](cvimagebuffergetencodedsize%28__%29.md): Returns the full encoded dimensions of a Core Video image buffer.
- [CVImageBufferIsFlipped](cvimagebufferisflipped%28__%29.md): Returns a Boolean value indicating whether the image is vertically flipped.

### Creating color spaces

- [CVImageBufferCreateColorSpaceFromAttachments](cvimagebuffercreatecolorspacefromattachments%28__%29.md): Attempts to create a Core Graphics color space from the image buffer’s attachments that you specify.

### Data types

- [CVImageBufferRef](cvimagebuffer.md): A reference to a Core Video image buffer.

### Converting between strings and integer code points

- [CVColorPrimariesGetIntegerCodePointForString](cvcolorprimariesgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video color primaries constant string that you specify.
- [CVColorPrimariesGetStringForIntegerCodePoint](cvcolorprimariesgetstringforintegercodepoint%28__%29.md): Returns the Core Video color primaries string corresponding to the standard integer code point that you specify.
- [CVTransferFunctionGetIntegerCodePointForString](cvtransferfunctiongetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video transfer function string that you specify.
- [CVTransferFunctionGetStringForIntegerCodePoint](cvtransferfunctiongetstringforintegercodepoint%28__%29.md): Returns the Core Video transfer function string corresponding to the standard integer code point that you specify.
- [CVYCbCrMatrixGetIntegerCodePointForString](cvycbcrmatrixgetintegercodepointforstring%28__%29.md): Returns the standard integer code point corresponding to the Core Video YCbCr matrix string that you specify.
- [CVYCbCrMatrixGetStringForIntegerCodePoint](cvycbcrmatrixgetstringforintegercodepoint%28__%29.md): Returns the Core Video YCbCr matrix string corresponding to the standard integer code point that you specify.

### Constants

- [Image Buffer Attachment Keys](image-buffer-attachment-keys.md): Keys that describe the attachment types associated with image buffers.
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

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Data Processing

- [CVBuffer](cvbuffer-nfm.md): An abstract base class that defines how to interact with data buffers.
- [CVPixelBuffer](cvpixelbuffer-q2e.md): An image buffer that holds pixels in main memory.
- [CVPixelBufferPool](cvpixelbufferpool-77o.md): A utility object for managing a recyclable set of pixel buffer objects.
- [CVPixelFormatDescription](cvpixelformatdescription-42p.md): An API that provides functions and types for defining custom pixel formats.

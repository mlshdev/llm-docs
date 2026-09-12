> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/image-buffer-display-mask-rectangle-keys](https://developer.apple.com/documentation/corevideo/image-buffer-display-mask-rectangle-keys)

# Image Buffer Display Mask Rectangle Keys

**Interface languages:** Swift, Objective-C

**Framework:** Core Video  
**Kind:** API Collection

Keys that describe the display dimensions of an image buffer mask.

<a id="overview"></a>

## Overview

Use [kCVImageBufferDisplayMaskRectangleKey](kcvimagebufferdisplaymaskrectanglekey.md) to attach a dictionary value containing display mask information to the image buffer. [kCVImageBufferDisplayMaskRectangleStereoLeftKey](kcvimagebufferdisplaymaskrectanglestereoleftkey.md) and [kCVImageBufferDisplayMaskRectangleStereoRightKey](kcvimagebufferdisplaymaskrectanglestereorightkey.md) perform the same function for left- and right-eye stereo images.

## Topics

### Constants

- [kCVImageBufferDisplayMaskRectangle_LeftEdgePointsKey](kcvimagebufferdisplaymaskrectangle_leftedgepointskey.md): Specifies inset points on the left vertical edge of the rectangle.
- [kCVImageBufferDisplayMaskRectangle_RectangleHeightKey](kcvimagebufferdisplaymaskrectangle_rectangleheightkey.md): Specifies the height of the rectangle starting at the rectangle’s top offset toward the rectangle’s bottom edge.
- [kCVImageBufferDisplayMaskRectangle_RectangleLeftKey](kcvimagebufferdisplaymaskrectangle_rectangleleftkey.md): Specifies the horizontal pixel offset of the rectangle from the left of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleTopKey](kcvimagebufferdisplaymaskrectangle_rectangletopkey.md): Specifies the vertical pixel offset of the rectangle from the top of the bounding raster.
- [kCVImageBufferDisplayMaskRectangle_RectangleWidthKey](kcvimagebufferdisplaymaskrectangle_rectanglewidthkey.md): Specifies the width of the rectangle starting at the rectangle’s left offset toward the rectangle’s right edge.
- [kCVImageBufferDisplayMaskRectangle_ReferenceRasterHeightKey](kcvimagebufferdisplaymaskrectangle_referencerasterheightkey.md): Specifies the height in pixels of the 2D coordinate system to define the rectangle.
- [kCVImageBufferDisplayMaskRectangle_ReferenceRasterWidthKey](kcvimagebufferdisplaymaskrectangle_referencerasterwidthkey.md): Specifies the width in pixels of the 2D coordinate system to define the rectangle.
- [kCVImageBufferDisplayMaskRectangle_RightEdgePointsKey](kcvimagebufferdisplaymaskrectangle_rightedgepointskey.md): Specifies inset points on the right vertical edge of the rectangle.

## See Also

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
- [kCVImageBufferDisplayMaskRectangleKey](kcvimagebufferdisplaymaskrectanglekey.md): Specifies the rectangular display area within the image.
- [kCVImageBufferDisplayMaskRectangleStereoLeftKey](kcvimagebufferdisplaymaskrectanglestereoleftkey.md): Specifies the rectangular display area within the left-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.
- [kCVImageBufferDisplayMaskRectangleStereoRightKey](kcvimagebufferdisplaymaskrectanglestereorightkey.md): Specifies the rectangular display area within the right-eye view of stereo images, using the same keys as `kCVImageBufferDisplayMaskRectangleKey`.

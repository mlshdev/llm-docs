> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmbitmap](https://developer.apple.com/documentation/applicationservices/cmbitmap)

# CMBitmap

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains information that describes color bitmap images.

## Declaration

```objectivec
typedef struct CMBitmap {
    ...
} CMBitmap;
```

<a id="overview"></a>

## Overview

The ColorSync Manager defines a bitmap structure of type `CMBitmap` to describe color bitmap images. When your application calls the function [CWMatchColors](colorsync_manager/1805108-cwmatchcolors.md) , you pass a pointer to a source bitmap of type `CMBitmap` containing the image whose colors are to be matched to the color gamut of the device specified by the destination profile of the given color world. If you do not want the image color matched in place, you can also pass a pointer to a resulting bitmap of type `CMBitmap` to define and hold the color-matched image. 

For QuickDraw GX, an image can have an indexed bitmap to a list of colors. The ColorSync Manager does not support indexed bitmaps in the same way QuickDraw GX does. ColorSync supports indexed bitmaps only when the `cmNamedIndexed32Space` color space constant is used in conjunction with a named color space profile.

## Topics

### Instance Properties

- [height](cmbitmap/1560544-height.md): Deprecated. The height of the bit image, that is, the number of rows in the image.
- [image](cmbitmap/1560569-image.md): Deprecated. A pointer to a bit image.
- [pixelSize](cmbitmap/1560543-pixelsize.md): Deprecated. The number of bits per pixel. The pixel size should correspond to the packing size specified in the `space` field. This requirement is not enforced as of ColorSync version 2.5, but it may be enforced in future versions.
- [rowBytes](cmbitmap/1560650-rowbytes.md): Deprecated. The offset in bytes from one row of the image to the next.
- [space](cmbitmap/1560357-space.md): Deprecated. The color space in which the colors of the bitmap image are specified. For a description of the possible color spaces for color bitmaps, see [CMBitmapColorSpace](cmbitmapcolorspace.md).
- [user1](cmbitmap/1560652-user1.md): Deprecated. Not used by ColorSync. It is recommended that you set this field to 0.
- [user2](cmbitmap/1560258-user2.md): Deprecated. Not used by ColorSync. It is recommended that you set this field to 0.
- [width](cmbitmap/1560535-width.md): Deprecated. The width of the bit image, that is, the number of pixels in a row.

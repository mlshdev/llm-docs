> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iographicstypes_h_user-space/iohardwarecursordescriptor](https://developer.apple.com/documentation/iokit/iographicstypes_h_user-space/iohardwarecursordescriptor)

# IOHardwareCursorDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

A structure defining the format of a hardware cursor.

## Declaration

```objectivec
struct IOHardwareCursorDescriptor {
   UInt16 majorVersion;
   UInt16 minorVersion;
   UInt32 height;
   UInt32 width;
   UInt32 bitDepth; // bits per pixel, or a QD/QT pixel type
   UInt32 maskBitDepth; // unused
   UInt32 numColors; // number of colors in the colorMap. ie.
   UInt32 *colorEncodings;
   UInt32 flags;
   UInt32 supportedSpecialEncodings;
   UInt32 specialEncodings[16];
};
```

<a id="overview"></a>

## Overview

This structure is used by IOFramebuffer to define the format of a hardware cursor.

## Topics

### Fields

- [majorVersion](../iohardwarecursordescriptor/1505436-majorversion.md): Set to kHardwareCursorDescriptorMajorVersion.
- [minorVersion](../iohardwarecursordescriptor/1505743-minorversion.md): Set to kHardwareCursorDescriptorMinorVersion.
- [height](../iohardwarecursordescriptor/1506025-height.md): Maximum size of the cursor.
- [width](../iohardwarecursordescriptor/1505052-width.md): Maximum size of the cursor.
- [bitDepth](../iohardwarecursordescriptor/1505720-bitdepth.md): Number bits per pixel, or a QD/QT pixel type, for example kIO8IndexedPixelFormat, kIO32ARGBPixelFormat.
- [maskBitDepth](../iohardwarecursordescriptor/1505546-maskbitdepth.md): Unused.
- [numColors](../iohardwarecursordescriptor/1505035-numcolors.md): Number of colors for indexed pixel types.
- [colorEncodings](../iohardwarecursordescriptor/1505587-colorencodings.md): An array pointer specifying the pixel values corresponding to the indices into the color table, for indexed pixel types.
- [flags](../iohardwarecursordescriptor/1505608-flags.md): None defined, set to zero.
- [supportedSpecialEncodings](../iohardwarecursordescriptor/1506135-supportedspecialencodings.md): Mask of supported special pixel values, eg. kTransparentEncodedPixel, kInvertingEncodedPixel.
- [specialEncodings](../iohardwarecursordescriptor/1505679-specialencodings.md): Array of pixel values for each supported special encoding.

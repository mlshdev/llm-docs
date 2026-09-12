> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iographicstypes_h_user-space/iopixelinformation](https://developer.apple.com/documentation/iokit/iographicstypes_h_user-space/iopixelinformation)

# IOPixelInformation

**Interface language:** Objective-C

**Framework:** IOKit

A structure defining the format of a framebuffer.

## Declaration

```objectivec
struct IOPixelInformation {
   UInt32 bytesPerRow;
   UInt32 bytesPerPlane;
   UInt32 bitsPerPixel;
   UInt32 pixelType;
   UInt32 componentCount;
   UInt32 bitsPerComponent;
   UInt32 componentMasks[ 8 * 2 ];
   IOPixelEncoding pixelFormat;
   UInt32 flags;
   UInt32 activeWidth;
   UInt32 activeHeight;
   UInt32 reserved[ 2 ];
};
```

<a id="overview"></a>

## Overview

This structure is used by IOFramebuffer to define the format of the pixels.

## Topics

### Fields

- [bytesPerRow](../iopixelinformation/1505591-bytesperrow.md): The number of bytes per row.
- [bytesPerPlane](../iopixelinformation/1505598-bytesperplane.md): Not used.
- [bitsPerPixel](../iopixelinformation/1505957-bitsperpixel.md): The number of bits per pixel, including unused bits and alpha.
- [pixelType](../iopixelinformation/1505700-pixeltype.md): One of kIOCLUTPixels (indexed pixels with changeable CLUT), kIORGBDirectPixels (direct pixels).
- [componentCount](../iopixelinformation/1505140-componentcount.md): One for indexed pixels, three for direct pixel formats.
- [bitsPerComponent](../iopixelinformation/1506162-bitspercomponent.md): Number of bits per component in each pixel.
- [componentMasks](../iopixelinformation/1505522-componentmasks.md): Mask of the bits valid for each component of the pixel - in R, G, B order for direct pixels.
- [pixelFormat](../iopixelinformation/1505071-pixelformat.md): String description of the pixel format - IO32BitDirectPixels, IO16BitDirectPixels etc.
- [flags](../iopixelinformation/1505778-flags.md): None defined - set to zero.
- [activeWidth](../iopixelinformation/1505617-activewidth.md): Number of pixels visible per row.
- [activeHeight](../iopixelinformation/1505946-activeheight.md): Number of visible pixel rows.
- [reserved](../iopixelinformation/1505942-reserved.md): Set to zero.

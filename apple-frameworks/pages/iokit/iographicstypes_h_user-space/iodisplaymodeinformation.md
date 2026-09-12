> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iographicstypes_h_user-space/iodisplaymodeinformation](https://developer.apple.com/documentation/iokit/iographicstypes_h_user-space/iodisplaymodeinformation)

# IODisplayModeInformation

**Interface language:** Objective-C

**Framework:** IOKit

A structure defining the format of a framebuffer.

## Declaration

```objectivec
struct IODisplayModeInformation {
   UInt32 nominalWidth;
   UInt32 nominalHeight;
   IOFixed1616 refreshRate;
   IOIndex maxDepthIndex;
   UInt32 flags;
   UInt16 imageWidth;
   UInt16 imageHeight;
   UInt32 reserved[ 3 ];
};
```

<a id="overview"></a>

## Overview

This structure is used by IOFramebuffer to define the format of the pixels.

## Topics

### Fields

- [nominalWidth](../iodisplaymodeinformation/1506031-nominalwidth.md): Number of pixels visible per row.
- [nominalHeight](../iodisplaymodeinformation/1505238-nominalheight.md): Number of visible pixel rows.
- [refreshRate](../iodisplaymodeinformation/1506012-refreshrate.md): Refresh rate in fixed point 16.16.
- [maxDepthIndex](../iodisplaymodeinformation/1505323-maxdepthindex.md): Highest depth index available in this display mode.
- [flags](../iodisplaymodeinformation/1505482-flags.md): Flags for a display mode.
- [imageWidth](../iodisplaymodeinformation/1506007-imagewidth.md): Physical width of active image if known, in millimeters, otherwise zero.
- [imageHeight](../iodisplaymodeinformation/1505901-imageheight.md): Physical height of active image if known, in millimeters, otherwise zero.
- [reserved](../iodisplaymodeinformation/1505975-reserved.md): Set to zero.

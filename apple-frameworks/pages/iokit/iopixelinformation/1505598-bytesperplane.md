> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopixelinformation/1505598-bytesperplane](https://developer.apple.com/documentation/iokit/iopixelinformation/1505598-bytesperplane)

# bytesPerPlane

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Not used.

## Declaration

```objectivec
UInt32 bytesPerPlane;
```

## See Also

### Fields

- [bytesPerRow](1505591-bytesperrow.md): The number of bytes per row.
- [bitsPerPixel](1505957-bitsperpixel.md): The number of bits per pixel, including unused bits and alpha.
- [pixelType](1505700-pixeltype.md): One of kIOCLUTPixels (indexed pixels with changeable CLUT), kIORGBDirectPixels (direct pixels).
- [componentCount](1505140-componentcount.md): One for indexed pixels, three for direct pixel formats.
- [bitsPerComponent](1506162-bitspercomponent.md): Number of bits per component in each pixel.
- [componentMasks](1505522-componentmasks.md): Mask of the bits valid for each component of the pixel - in R, G, B order for direct pixels.
- [pixelFormat](1505071-pixelformat.md): String description of the pixel format - IO32BitDirectPixels, IO16BitDirectPixels etc.
- [flags](1505778-flags.md): None defined - set to zero.
- [activeWidth](1505617-activewidth.md): Number of pixels visible per row.
- [activeHeight](1505946-activeheight.md): Number of visible pixel rows.
- [reserved](1505942-reserved.md): Set to zero.

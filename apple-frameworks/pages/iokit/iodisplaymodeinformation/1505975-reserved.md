> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iodisplaymodeinformation/1505975-reserved](https://developer.apple.com/documentation/iokit/iodisplaymodeinformation/1505975-reserved)

# reserved

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set to zero.

## Declaration

```objectivec
UInt32 reserved[3];
```

## See Also

### Fields

- [nominalWidth](1506031-nominalwidth.md): Number of pixels visible per row.
- [nominalHeight](1505238-nominalheight.md): Number of visible pixel rows.
- [refreshRate](1506012-refreshrate.md): Refresh rate in fixed point 16.16.
- [maxDepthIndex](1505323-maxdepthindex.md): Highest depth index available in this display mode.
- [flags](1505482-flags.md): Flags for a display mode.
- [imageWidth](1506007-imagewidth.md): Physical width of active image if known, in millimeters, otherwise zero.
- [imageHeight](1505901-imageheight.md): Physical height of active image if known, in millimeters, otherwise zero.

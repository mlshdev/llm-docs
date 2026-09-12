> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iodisplaymodeinformation](https://developer.apple.com/documentation/iokit/iodisplaymodeinformation)

# IODisplayModeInformation

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IODisplayModeInformation {
    ...
} IODisplayModeInformation;
```

## Topics

### Instance Properties

- [flags](iodisplaymodeinformation/1505482-flags.md): Flags for a display mode.
- [imageHeight](iodisplaymodeinformation/1505901-imageheight.md): Physical height of active image if known, in millimeters, otherwise zero.
- [imageWidth](iodisplaymodeinformation/1506007-imagewidth.md): Physical width of active image if known, in millimeters, otherwise zero.
- [maxDepthIndex](iodisplaymodeinformation/1505323-maxdepthindex.md): Highest depth index available in this display mode.
- [nominalHeight](iodisplaymodeinformation/1505238-nominalheight.md): Number of visible pixel rows.
- [nominalWidth](iodisplaymodeinformation/1506031-nominalwidth.md): Number of pixels visible per row.
- [refreshRate](iodisplaymodeinformation/1506012-refreshrate.md): Refresh rate in fixed point 16.16.
- [reserved](iodisplaymodeinformation/1505975-reserved.md): Set to zero.

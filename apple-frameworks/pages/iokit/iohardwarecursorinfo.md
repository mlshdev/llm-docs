> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohardwarecursorinfo](https://developer.apple.com/documentation/iokit/iohardwarecursorinfo)

# IOHardwareCursorInfo

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IOHardwareCursorInfo {
    ...
} IOHardwareCursorInfo;
```

## Topics

### Instance Properties

- [colorMap](iohardwarecursorinfo/1506173-colormap.md): Pointer to array of IOColorEntry structures, with the number of elements set by the numColors field of the IOHardwareCursorDescriptor. Zero should be passed for direct pixel formats.
- [cursorHeight](iohardwarecursorinfo/1505775-cursorheight.md): The actual size of the cursor is returned.
- [cursorHotSpotX](iohardwarecursorinfo/1505685-cursorhotspotx.md): Cursor's hotspot.
- [cursorHotSpotY](iohardwarecursorinfo/1505474-cursorhotspoty.md): Cursor's hotspot.
- [cursorWidth](iohardwarecursorinfo/1506034-cursorwidth.md): The actual size of the cursor is returned.
- [hardwareCursorData](iohardwarecursorinfo/1505146-hardwarecursordata.md): Buffer to receive the converted cursor data.
- [majorVersion](iohardwarecursorinfo/1505105-majorversion.md): Set to kHardwareCursorInfoMajorVersion.
- [minorVersion](iohardwarecursorinfo/1505832-minorversion.md): Set to kHardwareCursorInfoMinorVersion.
- [reserved](iohardwarecursorinfo/1505443-reserved.md): Reserved, set to zero.

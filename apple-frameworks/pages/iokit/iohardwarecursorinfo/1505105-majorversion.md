> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohardwarecursorinfo/1505105-majorversion](https://developer.apple.com/documentation/iokit/iohardwarecursorinfo/1505105-majorversion)

# majorVersion

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set to kHardwareCursorInfoMajorVersion.

## Declaration

```objectivec
UInt16 majorVersion;
```

## See Also

### Fields

- [minorVersion](1505832-minorversion.md): Set to kHardwareCursorInfoMinorVersion.
- [cursorHeight](1505775-cursorheight.md): The actual size of the cursor is returned.
- [cursorWidth](1506034-cursorwidth.md): The actual size of the cursor is returned.
- [colorMap](1506173-colormap.md): Pointer to array of IOColorEntry structures, with the number of elements set by the numColors field of the IOHardwareCursorDescriptor. Zero should be passed for direct pixel formats.
- [hardwareCursorData](1505146-hardwarecursordata.md): Buffer to receive the converted cursor data.
- [cursorHotSpotX](1505685-cursorhotspotx.md): Cursor's hotspot.
- [cursorHotSpotY](1505474-cursorhotspoty.md): Cursor's hotspot.
- [reserved](1505443-reserved.md): Reserved, set to zero.

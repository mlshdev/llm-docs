> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohardwarecursorinfo/1386743-colormap](https://developer.apple.com/documentation/kernel/iohardwarecursorinfo/1386743-colormap)

# colorMap

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Pointer to array of IOColorEntry structures, with the number of elements set by the numColors field of the IOHardwareCursorDescriptor. Zero should be passed for direct pixel formats.

## Declaration

```objectivec
IOColorEntry *colorMap;
```

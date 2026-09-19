> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodclprogram/1563449-virtualtophysical

# virtualToPhysical

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn virtualToPhysical(IOVirtualRange ranges[], unsigned int rangeCount, IOMemoryCursor::IOMemoryCursor::PhysicalSegment outSegments[], unsigned int & outPhysicalSegmentCount, unsigned int maxSegments);
```

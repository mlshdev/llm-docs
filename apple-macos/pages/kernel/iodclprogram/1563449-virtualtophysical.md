> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodclprogram/1563449-virtualtophysical](https://developer.apple.com/documentation/kernel/iodclprogram/1563449-virtualtophysical)

# virtualToPhysical

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn virtualToPhysical(IOVirtualRange ranges[], unsigned int rangeCount, IOMemoryCursor::IOMemoryCursor::PhysicalSegment outSegments[], unsigned int & outPhysicalSegmentCount, unsigned int maxSegments);
```

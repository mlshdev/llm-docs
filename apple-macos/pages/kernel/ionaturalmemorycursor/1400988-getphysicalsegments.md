> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionaturalmemorycursor/1400988-getphysicalsegments](https://developer.apple.com/documentation/kernel/ionaturalmemorycursor/1400988-getphysicalsegments)

# getPhysicalSegments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 getPhysicalSegments(IOMemoryDescriptor *descriptor, IOByteCount fromPosition, PhysicalSegment *segments, UInt32 maxSegments, UInt32 inMaxTransferSize, IOByteCount *transferSize);
```

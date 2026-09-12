> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorycursor/1400980-genphysicalsegments](https://developer.apple.com/documentation/kernel/iomemorycursor/1400980-genphysicalsegments)

# genPhysicalSegments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 genPhysicalSegments(IOMemoryDescriptor *descriptor, IOByteCount fromPosition, void *segments, UInt32 maxSegments, UInt32 maxTransferSize, IOByteCount *transferSize);
```

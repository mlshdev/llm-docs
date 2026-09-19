> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobigmemorycursor/1400973-getphysicalsegments

# getPhysicalSegments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 getPhysicalSegments(IOMemoryDescriptor *descriptor, IOByteCount fromPosition, PhysicalSegment *segments, UInt32 maxSegments, UInt32 inMaxTransferSize, IOByteCount *transferSize);
```

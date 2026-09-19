> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomemorycursor/1400980-genphysicalsegments

# genPhysicalSegments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual UInt32 genPhysicalSegments(IOMemoryDescriptor *descriptor, IOByteCount fromPosition, void *segments, UInt32 maxSegments, UInt32 maxTransferSize, IOByteCount *transferSize);
```

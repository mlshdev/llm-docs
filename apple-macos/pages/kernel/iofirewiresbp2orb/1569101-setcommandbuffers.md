> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewiresbp2orb/1569101-setcommandbuffers

# setCommandBuffers

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn setCommandBuffers(IOMemoryDescriptor *memoryDescriptor, UInt32 offset, UInt32 length);
```

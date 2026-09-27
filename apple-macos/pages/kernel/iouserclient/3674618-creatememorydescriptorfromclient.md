> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/3674618-creatememorydescriptorfromclient

# CreateMemoryDescriptorFromClient_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
kern_return_t CreateMemoryDescriptorFromClient_Impl(uint64_t memoryDescriptorCreateOptions, uint32_t segmentsCount, const IOAddressSegment *segments, IOMemoryDescriptor **memory);
```

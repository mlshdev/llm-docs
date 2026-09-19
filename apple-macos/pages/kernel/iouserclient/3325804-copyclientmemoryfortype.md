> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/3325804-copyclientmemoryfortype

# CopyClientMemoryForType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t CopyClientMemoryForType(uint64_t type, uint64_t *options, IOMemoryDescriptor **memory, OSDispatchMethod supermethod);
```

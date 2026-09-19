> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioblockstoragedriver/1436337-executerequest

# executeRequest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void executeRequest(UInt64 byteStart, IOMemoryDescriptor *buffer, IOStorageAttributes *attributes, IOStorageCompletion *completion, Context *context);
```

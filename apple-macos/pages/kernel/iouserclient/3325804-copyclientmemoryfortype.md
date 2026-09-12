> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/3325804-copyclientmemoryfortype](https://developer.apple.com/documentation/kernel/iouserclient/3325804-copyclientmemoryfortype)

# CopyClientMemoryForType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t CopyClientMemoryForType(uint64_t type, uint64_t *options, IOMemoryDescriptor **memory, OSDispatchMethod supermethod);
```

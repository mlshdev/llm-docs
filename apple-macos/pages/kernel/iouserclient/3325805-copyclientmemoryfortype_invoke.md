> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/3325805-copyclientmemoryfortype_invoke](https://developer.apple.com/documentation/kernel/iouserclient/3325805-copyclientmemoryfortype_invoke)

# CopyClientMemoryForType_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t CopyClientMemoryForType_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyClientMemoryForType_Handler func);
```

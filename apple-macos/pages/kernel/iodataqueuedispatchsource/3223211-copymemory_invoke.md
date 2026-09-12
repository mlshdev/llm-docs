> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodataqueuedispatchsource/3223211-copymemory_invoke](https://developer.apple.com/documentation/kernel/iodataqueuedispatchsource/3223211-copymemory_invoke)

# CopyMemory_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t CopyMemory_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyMemory_Handler func);
```

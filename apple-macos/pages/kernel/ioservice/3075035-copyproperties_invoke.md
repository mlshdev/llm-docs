> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3075035-copyproperties_invoke](https://developer.apple.com/documentation/kernel/ioservice/3075035-copyproperties_invoke)

# CopyProperties_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t CopyProperties_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyProperties_Handler func);
```

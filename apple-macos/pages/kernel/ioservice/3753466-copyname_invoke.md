> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3753466-copyname_invoke](https://developer.apple.com/documentation/kernel/ioservice/3753466-copyname_invoke)

# CopyName_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
static kern_return_t CopyName_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyName_Handler func);
```

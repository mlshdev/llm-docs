> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostinterface/3182579-copypipe_invoke](https://developer.apple.com/documentation/kernel/iousbhostinterface/3182579-copypipe_invoke)

# CopyPipe_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static kern_return_t CopyPipe_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyPipe_Handler func);
```

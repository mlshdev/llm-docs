> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3182644-abort_invoke](https://developer.apple.com/documentation/kernel/iousbhostpipe/3182644-abort_invoke)

# Abort_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static kern_return_t Abort_Invoke(const IORPC rpc, OSMetaClassBase *target, Abort_Handler func);
```

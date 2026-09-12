> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3182657-getdescriptors_invoke](https://developer.apple.com/documentation/kernel/iousbhostpipe/3182657-getdescriptors_invoke)

# GetDescriptors_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static kern_return_t GetDescriptors_Invoke(const IORPC rpc, OSMetaClassBase *target, GetDescriptors_Handler func);
```

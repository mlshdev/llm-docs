> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostinterface/3182593-getportstatus_invoke](https://developer.apple.com/documentation/kernel/iousbhostinterface/3182593-getportstatus_invoke)

# GetPortStatus_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static kern_return_t GetPortStatus_Invoke(const IORPC rpc, OSMetaClassBase *target, GetPortStatus_Handler func);
```

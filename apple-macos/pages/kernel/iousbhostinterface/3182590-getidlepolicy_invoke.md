> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostinterface/3182590-getidlepolicy_invoke](https://developer.apple.com/documentation/kernel/iousbhostinterface/3182590-getidlepolicy_invoke)

# GetIdlePolicy_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static kern_return_t GetIdlePolicy_Invoke(const IORPC rpc, OSMetaClassBase *target, GetIdlePolicy_Handler func);
```

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3753460-adjustbusy_invoke](https://developer.apple.com/documentation/kernel/ioservice/3753460-adjustbusy_invoke)

# AdjustBusy_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
static kern_return_t AdjustBusy_Invoke(const IORPC rpc, OSMetaClassBase *target, AdjustBusy_Handler func);
```

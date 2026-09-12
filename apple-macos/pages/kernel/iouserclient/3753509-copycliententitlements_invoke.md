> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/3753509-copycliententitlements_invoke](https://developer.apple.com/documentation/kernel/iouserclient/3753509-copycliententitlements_invoke)

# CopyClientEntitlements_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
static kern_return_t CopyClientEntitlements_Invoke(const IORPC rpc, OSMetaClassBase *target, CopyClientEntitlements_Handler func);
```

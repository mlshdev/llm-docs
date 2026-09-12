> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/4485637-setpoweroverride_invoke](https://developer.apple.com/documentation/kernel/ioservice/4485637-setpoweroverride_invoke)

# SetPowerOverride_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 15.2+

## Declaration

```objectivec
static kern_return_t SetPowerOverride_Invoke(const IORPC rpc, OSMetaClassBase *target, SetPowerOverride_Handler func);
```

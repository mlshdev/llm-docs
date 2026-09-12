> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/3857685-savedevicestate_invoke](https://developer.apple.com/documentation/kernel/iopcidevice/3857685-savedevicestate_invoke)

# SaveDeviceState_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
static kern_return_t SaveDeviceState_Invoke(const IORPC rpc, OSMetaClassBase *target, SaveDeviceState_Handler func);
```

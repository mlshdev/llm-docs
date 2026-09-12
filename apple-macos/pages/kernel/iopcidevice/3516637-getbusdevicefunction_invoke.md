> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopcidevice/3516637-getbusdevicefunction_invoke](https://developer.apple.com/documentation/kernel/iopcidevice/3516637-getbusdevicefunction_invoke)

# GetBusDeviceFunction_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15.4+ (deprecated in 11.0)

## Declaration

```objectivec
static kern_return_t GetBusDeviceFunction_Invoke(const IORPC rpc, OSMetaClassBase *target, GetBusDeviceFunction_Handler func);
```

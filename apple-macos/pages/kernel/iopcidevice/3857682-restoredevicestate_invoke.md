> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3857682-restoredevicestate_invoke

# RestoreDeviceState_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
static kern_return_t RestoreDeviceState_Invoke(const IORPC rpc, OSMetaClassBase *target, RestoreDeviceState_Handler func);
```
